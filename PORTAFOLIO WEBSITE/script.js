// --- 1. PARTICLE CANVAS ---
const canvas = document.getElementById('threat-map');
const ctx = canvas.getContext('2d');
let particles = [];

function initCanvas() {
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * canvas.width, 
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5, 
            vy: (Math.random() - 0.5) * 0.5
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#00ff41'; 
    ctx.lineWidth = 0.5;
    particles.forEach(p => {
        p.x += p.vx; 
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath(); 
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2); 
        ctx.stroke();

        particles.forEach(p2 => {
            let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 150) {
                ctx.globalAlpha = 1 - (dist / 150);
                ctx.beginPath(); 
                ctx.moveTo(p.x, p.y); 
                ctx.lineTo(p2.x, p2.y); 
                ctx.stroke();
            }
        });
    });
    requestAnimationFrame(draw);
}

window.addEventListener('resize', initCanvas);
initCanvas(); 
draw();

// --- 2. FOCUS LOGIC ---
function focusCard(card) {
    const overlay = document.getElementById('overlay-bg');
    const header = document.getElementById('main-header');
    const sidebar = document.getElementById('sidebar');
    const timeline = document.getElementById('timeline-sec');
    const canvasBg = document.getElementById('threat-map');
    const cards = document.querySelectorAll('.project-card');

    if (card.classList.contains('focused-card')) return;
    
    overlay.classList.remove('hidden');
    header.classList.add('dimmed'); 
    sidebar.classList.add('dimmed');
    timeline.classList.add('dimmed'); 
    canvasBg.classList.add('dimmed');
    
    cards.forEach(c => { if (c !== card) c.classList.add('dimmed'); });
    card.classList.add('focused-card');
    document.body.style.overflow = 'hidden';
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn') || e.target.id === 'overlay-bg') {
        const overlay = document.getElementById('overlay-bg');
        const header = document.getElementById('main-header');
        const sidebar = document.getElementById('sidebar');
        const timeline = document.getElementById('timeline-sec');
        const canvasBg = document.getElementById('threat-map');
        const cards = document.querySelectorAll('.project-card');

        overlay.classList.add('hidden');
        header.classList.remove('dimmed'); 
        sidebar.classList.remove('dimmed');
        timeline.classList.remove('dimmed'); 
        canvasBg.classList.remove('dimmed');
        
        cards.forEach(c => {
            c.classList.remove('dimmed'); 
            c.classList.remove('focused-card');
        });
        document.body.style.overflow = 'auto';
    }
});

// --- 3. LIVE LOGS ---
const logBox = document.getElementById('log-entries');
setInterval(() => {
    const p = document.createElement('p');
    p.innerText = `> LOG: TRACE_NODE_${Math.floor(Math.random()*999)}_DETECTED`;
    logBox.prepend(p);
    if(logBox.children.length > 5) logBox.lastChild.remove();
}, 4000);