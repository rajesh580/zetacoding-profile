import React, { useEffect, useRef } from 'react';

/**
 * Interactive3DNetwork
 * A lightweight, high-performance HTML5 Canvas component that projects
 * 3D particles and interconnected cyber filaments in real-time 3D coordinate space.
 * Responds dynamically to mouse movement with 3D perspective rotation and cursor repulsion.
 */
export default function Interactive3DNetwork({
  particleCount = 55,
  maxDistance = 140,
  className = 'absolute inset-0 pointer-events-none',
  interactive = true,
  theme = 'emerald-purple'
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Camera & 3D Projection parameters
    const fov = 380;
    let rotX = 0.05;
    let rotY = 0.05;
    let targetRotX = 0.05;
    let targetRotY = 0.05;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let isHovered = false;

    // Generate 3D particles with (x, y, z) coordinates centered at (0, 0, 0)
    const depth = 600;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: (Math.random() - 0.5) * depth,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1.2,
        color: Math.random() > 0.35 ? '#a855f7' : (Math.random() > 0.4 ? '#c084fc' : '#72bf44'),
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Resize handler
    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse movement handler for 3D rotation parallax
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      const normX = (mouseX / width) - 0.5;
      const normY = (mouseY / height) - 0.5;
      targetRotY = normX * 0.6;
      targetRotX = -normY * 0.6;
      isHovered = true;
    };

    const handleMouseLeave = () => {
      targetRotX = 0.05;
      targetRotY = 0.05;
      isHovered = false;
    };

    const parent = canvas.parentElement;
    if (interactive && parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Main 3D render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth inertia rotation
      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY - rotY) * 0.04;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Project particles to 2D
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Animate movement & bounce within 3D bounding box
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        p.pulse += 0.025;

        const boundX = (width * 1.2) / 2;
        const boundY = (height * 1.2) / 2;
        const boundZ = depth / 2;

        if (p.x < -boundX || p.x > boundX) p.vx *= -1;
        if (p.y < -boundY || p.y > boundY) p.vy *= -1;
        if (p.z < -boundZ || p.z > boundZ) p.vz *= -1;

        // Apply 3D Rotation (Euler angles: Y then X)
        // 1. Rotate around Y axis
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // 2. Rotate around X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective Projection
        const cameraDist = 450;
        const totalZ = z2 + cameraDist;

        if (totalZ > 20) {
          const scale = fov / totalZ;
          const projX = x1 * scale + width / 2;
          const projY = y2 * scale + height / 2;
          const alpha = Math.min(Math.max((z2 + depth / 2) / depth, 0.15), 0.95);
          const currentRadius = p.radius * scale * (1 + Math.sin(p.pulse) * 0.2);

          projected.push({
            projX,
            projY,
            scale,
            alpha,
            radius: Math.max(currentRadius, 0.8),
            color: p.color,
            z: z2
          });
        } else {
          projected.push(null);
        }
      }

      // Draw connecting filaments in 3D
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (!p1) continue;

        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          if (!p2) continue;

          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.25 * Math.min(p1.alpha, p2.alpha);
            const filamentRGB = p1.color === '#72bf44' ? '114, 191, 68' : '168, 85, 247';
            ctx.strokeStyle = `rgba(${filamentRGB}, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.stroke();
          }
        }
      }

      // Draw particles with glowing halo
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        if (!p) continue;

        // Glow halo
        const grad = ctx.createRadialGradient(
          p.projX, p.projY, 0,
          p.projX, p.projY, p.radius * 3.5
        );
        grad.addColorStop(0, p.color === '#72bf44' ? `rgba(114, 191, 68, ${p.alpha})` : `rgba(168, 85, 247, ${p.alpha})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.projX, p.projY, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Core bright point
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(p.projX, p.projY, p.radius * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive && parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [particleCount, maxDistance, interactive, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ opacity: 0.85 }}
    />
  );
}
