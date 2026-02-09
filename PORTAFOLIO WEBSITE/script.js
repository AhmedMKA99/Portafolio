/* --- CORE VARIABLES --- */
:root {
    --neon: #00ff41;
    --bg: #080808;
    --panel: rgba(15, 15, 15, 0.9);
    --border: rgba(0, 255, 65, 0.2);
    --text-main: #e0e0e0;
}

/* --- INTERACTIVE NAV LINKS --- */
#main-nav a {
    position: relative;
    transition: all 0.3s ease;
}

/* Adds a terminal underscore on hover */
#main-nav a:hover {
    color: var(--neon);
    text-shadow: 0 0 8px var(--neon);
}

#main-nav a::before {
    content: '> ';
    opacity: 0;
    transition: opacity 0.2s ease;
    color: var(--neon);
}

#main-nav a:hover::before {
    opacity: 1;
}

/* Active Section Glow */
#main-nav a.active-link {
    color: var(--neon);
    border-bottom: 1px solid var(--neon);
    padding-bottom: 4px;
}

/* Nav Background Compression on Scroll */
.nav-shrink {
    padding-top: 0.75rem !important;
    padding-bottom: 0.75rem !important;
    background-color: rgba(8, 8, 8, 0.8) !important;
    border-color: rgba(0, 255, 65, 0.4) !important;
}

/* --- BASE STYLES --- */
* { 
    scroll-behavior: smooth; 
    box-sizing: border-box; 
}

body { 
    background-color: var(--bg); 
    color: var(--text-main);
    font-family: 'Inter', sans-serif; 
    overflow-x: hidden;
}

.mono { font-family: 'Fira Code', monospace; }

/* --- CINEMATIC SPLASH & VAULT --- */
#splash-screen::before, #splash-screen::after {
    content: ''; position: absolute; left: 0; width: 100%; height: 50%;
    background: #030303; transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1); z-index: -1;
}
#splash-screen::before { top: 0; }
#splash-screen::after { bottom: 0; }

#splash-screen.vault-open::before { transform: translateY(-100%); }
#splash-screen.vault-open::after { transform: translateY(100%); }

/* Scanner Visuals */
.scanner-line {
    position: absolute; width: 100%; height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.05), transparent);
    animation: scan-move 8s linear infinite;
}
@keyframes scan-move { 0% { top: -100px; } 100% { top: 100%; } }

.reticle-box { position: absolute; width: 40px; height: 40px; border: 1px solid rgba(0, 255, 65, 0.1); }
.top-left { top: 40px; left: 40px; border-right: none; border-bottom: none; }
.top-right { top: 40px; right: 40px; border-left: none; border-bottom: none; }
.bottom-left { bottom: 40px; left: 40px; border-right: none; border-top: none; }
.bottom-right { bottom: 40px; right: 40px; border-left: none; border-top: none; }

/* --- SYNCED GLITCH EFFECT --- */
.glitch-active {
    animation: glitch-text 0.2s infinite !important;
    filter: hue-rotate(90deg) brightness(1.5) !important;
    text-shadow: 2px 0 red, -2px 0 blue !important;
}

@keyframes glitch-text {
    0% { transform: translate(0); }
    20% { transform: translate(-3px, 3px); }
    40% { transform: translate(-3px, -3px); }
    60% { transform: translate(3px, 3px); }
    100% { transform: translate(0); }
}

/* --- COLOR CYCLING (White to Green) --- */
.name-cycle {
    animation: color-cycle 5s infinite ease-in-out; /* Slowed down for comfort */
    font-weight: 700;
}

@keyframes color-cycle {
    0%, 100% {
        color: #ffffff;
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
    }
    50% {
        /* Using a deeper, more saturated green instead of pure neon */
        color: #00cc33; 
        /* Reduced shadow intensity to prevent eye strain */
        text-shadow: 0 0 8px rgba(0, 204, 51, 0.5), 0 0 15px rgba(0, 204, 51, 0.2);
    }
}

/* --- DASHBOARD COMPONENTS --- */
.glass-panel { 
    background: var(--panel); 
    backdrop-filter: blur(12px); 
    border: 1px solid var(--border); 
    border-radius: 4px; 
    transition: all 0.4s ease;
}

.glass-panel:hover {
    border-color: var(--neon);
    transform: translateY(-5px);
}

.skill-tag { 
    background: rgba(0, 255, 65, 0.05); 
    border: 1px solid var(--border); 
    padding: 4px 10px; 
    font-size: 10px; 
    color: var(--neon); 
}

/* --- CYBER RAY & MONITOR --- */
.cyber-ray::after {
    content: ''; display: block; width: 250px; height: 3px; margin-top: 8px;
    background: linear-gradient(90deg, var(--neon), transparent);
    box-shadow: 0 0 10px var(--neon);
    animation: beam-flicker 4s infinite alternate;
}

@keyframes beam-flicker { 0% { opacity: 0.8; width: 250px; } 100% { opacity: 1; width: 280px; } }

#forensic-monitor p {
    animation: text-flicker 0.1s ease-in-out;
    border-left: 2px solid rgba(0, 255, 65, 0.3);
    padding-left: 8px;
    margin-bottom: 4px;
}

@keyframes text-flicker {
    0% { opacity: 0; transform: translateX(-5px); }
    100% { opacity: 1; transform: translateX(0); }
}

.scan-line-v {
    position: absolute; top: -100%; left: 0; width: 100%; height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.1), transparent);
    animation: scan-v 4s linear infinite; pointer-events: none;
}
@keyframes scan-v { 0% { top: -100%; } 100% { top: 100%; } }

/* --- UI UTILITIES --- */
#threat-map { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.2; }
.crt-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5000; opacity: 0.05; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%); background-size: 100% 4px; }

.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

/* Horizontal Scroll Logic */
.snap-x { scroll-snap-type: x mandatory; overflow-x: auto; scrollbar-width: none; }
.snap-center { scroll-snap-align: center; }

/* --- ADVANCED BUTTON EFFECTS --- */
.login-trigger {
    position: relative;
    background: transparent;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 255, 65, 0.2);
}

/* The 'Laser Sweep' Line */
.login-trigger::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        90deg, 
        transparent, 
        rgba(0, 255, 65, 0.4), 
        transparent
    );
    transition: none;
    pointer-events: none;
}

.login-trigger:hover::before {
    left: 200%;
    transition: all 0.6s ease-in-out;
}

.login-trigger:hover {
    border-color: var(--neon);
    background: rgba(0, 255, 65, 0.05);
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.1);
    transform: scale(1.02);
}

/* Enhanced Glitch for Button Text */
.login-trigger:hover #btn-text {
    animation: glitch-text 0.3s infinite;
    color: var(--neon);
}

/* --- PROJECT MODAL STYLES --- */

/* When the modal is open, these classes are added via JS */
#project-modal.modal-active {
    display: flex !important;
    opacity: 1 !important;
}

/* The actual content box scales up when active */
#project-modal.modal-active .modal-content {
    transform: scale(1) !important;
}

/* Styling for the Tech Stack tags inside the modal */
.modal-stack-tag {
    font-family: 'Fira Code', monospace;
    font-size: 11px;
    color: var(--neon);
    background: rgba(0, 255, 65, 0.05);
    border: 1px solid rgba(0, 255, 65, 0.3);
    padding: 4px 12px;
    border-radius: 2px;
}

/* Styling for the Feature bullet points */
.feature-item {
    display: flex;
    align-items: center;
}
.feature-item::before {
    content: '>';
    color: var(--neon);
    margin-right: 12px;
    font-weight: bold;
}

/* Custom scrollbar for the modal content if it's too tall */
.modal-content::-webkit-scrollbar { width: 6px; }
.modal-content::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); }
.modal-content::-webkit-scrollbar-thumb { background: rgba(0, 255, 65, 0.3); border-radius: 3px; }

/* --- TIMELINE DECORATIONS --- */
#timeline .border-l {
    border-color: rgba(255, 255, 255, 0.05);
}

/* Red pulsing dot for active status */
.dot-active {
    box-shadow: 0 0 15px rgba(239, 68, 68, 0.5);
    animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
}

/* --- FOOTER OVERHAUL --- */
footer a {
    text-decoration: none;
}

footer h4::before {
    content: '// ';
    opacity: 0.5;
}
