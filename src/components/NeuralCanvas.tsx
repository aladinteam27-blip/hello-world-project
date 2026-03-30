import { useEffect, useRef } from "react";

const vertShaderSource = `
  precision mediump float;
  varying vec2 vUv;
  attribute vec2 a_position;
  void main() {
    vUv = .5 * (a_position + 1.);
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragShaderSource = `
  precision mediump float;
  varying vec2 vUv;
  uniform float u_time;
  uniform float u_ratio;
  uniform vec2 u_pointer_position;
  uniform float u_scroll_progress;

  vec2 rotate(vec2 uv, float th) {
    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
  }

  float neuro_shape(vec2 uv, float t, float p) {
    vec2 sine_acc = vec2(0.);
    vec2 res = vec2(0.);
    float scale = 9.;
    for (int j = 0; j < 15; j++) {
      uv = rotate(uv, 1.);
      sine_acc = rotate(sine_acc, 1.);
      vec2 layer = uv * scale + float(j) + sine_acc - t;
      sine_acc += sin(layer);
      res += (.5 + .5 * cos(layer)) / scale;
      scale *= (1.2 - .07 * p);
    }
    return res.x + res.y;
  }

  void main() {
    vec2 uv = .5 * vUv;
    uv.x *= u_ratio;

    vec2 pointer = vUv - u_pointer_position;
    pointer.x *= u_ratio;
    float p = clamp(length(pointer), 0., 1.);
    p = .5 * pow(1. - p, 2.);

    float t = .001 * u_time;
    vec3 color = vec3(0.);

    float noise = neuro_shape(uv, t, p);
    noise = 1.2 * pow(noise, 3.);
    noise += pow(noise, 10.);
    noise = max(.0, noise - .5);
    noise *= (1. - length(vUv - .5));

    color = normalize(vec3(.9, .9, .3));
    color = color * noise;

    gl_FragColor = vec4(color, noise);
  }
`;

const NeuralCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
    let animationId: number;

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") as WebGLRenderingContext | null;
    if (!gl) return;

    const glCtx = gl as WebGLRenderingContext;

    function createShader(source: string, type: number) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error(glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(vertShaderSource, glCtx.VERTEX_SHADER);
    const fragmentShader = createShader(fragShaderSource, glCtx.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = glCtx.createProgram();
    if (!program) return;
    glCtx.attachShader(program, vertexShader);
    glCtx.attachShader(program, fragmentShader);
    glCtx.linkProgram(program);

    if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
      console.error(glCtx.getProgramInfoLog(program));
      return;
    }

    // Get uniforms
    const uniforms: Record<string, WebGLUniformLocation | null> = {};
    const uniformCount = glCtx.getProgramParameter(program, glCtx.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
      const info = glCtx.getActiveUniform(program, i);
      if (info) {
        uniforms[info.name] = glCtx.getUniformLocation(program, info.name);
      }
    }

    // Setup geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = glCtx.createBuffer();
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buffer);
    glCtx.bufferData(glCtx.ARRAY_BUFFER, vertices, glCtx.STATIC_DRAW);
    glCtx.useProgram(program);

    const posLoc = glCtx.getAttribLocation(program, "a_position");
    glCtx.enableVertexAttribArray(posLoc);
    glCtx.vertexAttribPointer(posLoc, 2, glCtx.FLOAT, false, 0, 0);

    function resize() {
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      glCtx.uniform1f(uniforms.u_ratio, canvas!.width / canvas!.height);
      glCtx.viewport(0, 0, canvas!.width, canvas!.height);
    }

    function render() {
      pointer.x += (pointer.tX - pointer.x) * 0.5;
      pointer.y += (pointer.tY - pointer.y) * 0.5;

      glCtx.uniform1f(uniforms.u_time, performance.now());
      glCtx.uniform2f(
        uniforms.u_pointer_position,
        pointer.x / window.innerWidth,
        1 - pointer.y / window.innerHeight
      );
      glCtx.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);

      animationId = requestAnimationFrame(render);
    }

    function updateMouse(x: number, y: number) {
      pointer.tX = x;
      pointer.tY = y;
    }

    const onPointerMove = (e: PointerEvent) => updateMouse(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => updateMouse(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    const onClick = (e: MouseEvent) => updateMouse(e.clientX, e.clientY);

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("click", onClick);
    window.addEventListener("resize", resize);

    resize();
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.55 }}
    />
  );
};

export default NeuralCanvas;
