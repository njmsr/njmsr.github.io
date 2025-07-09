const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let w, h;
let particles = [];

function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
}

window.addEventListener('resize', resize);
resize();

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: Math.random() * 2 + 1
  });
}

function animate() {
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#00FFCC';
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
    
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  
  requestAnimationFrame(animate);
}

animate();
