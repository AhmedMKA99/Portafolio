/* ============================================================
   MAK Portfolio v2, SOC Dashboard theme, script
   ============================================================ */

/* -------- DATA: Case Files (projects) -------- */
const CASES = [
    {
        id: 'CASE-2026-001',
        title: 'Smart Dialogue-Based Intrusion Detection System',
        subtitle: 'Honours dissertation, Sep 2025 to Apr 2026',
        when: 'Sep 2025 – Apr 2026',
        sev: 'sev-hi',
        sevText: 'Critical',
        status: 'sev-done',
        statusText: 'Closed',
        category: ['defensive', 'ml'],
        summary: 'A full-stack machine learning intrusion detection system with a locally hosted LLM analyst assistant, achieving 98% weighted accuracy across 12 attack classes on the CICIDS2017 dataset.',
        stack: ['Python', 'Flask', 'scikit-learn', 'Random Forest', 'Ollama', 'Mistral 7B', 'HTML5', 'Tailwind CSS', 'JavaScript'],
        attack: ['T1136.001 (Local Account)', 'T1078.003 (Valid Accounts)', 'T1110 (Brute Force)'],
        findings: [
            '98% weighted detection accuracy at a 0.012% false positive rate on 2.1 million records',
            'Three tier confidence workflow to reduce analyst alert fatigue',
            'Locally hosted Mistral 7B via Ollama as an analyst assistant, no data leaves the device',
            'Random Forest benchmarked against Linear SVM under identical conditions',
            'Automated incident report generation as formatted Word documents'
        ],
        link: 'https://github.com/AhmedMKA99/Smart-Dialogue-Based-Intrusion-Detection-System-IDS-'
    },
    {
        id: 'CASE-2026-002',
        title: 'SOC Home Lab with Wazuh SIEM',
        subtitle: 'Self initiated, ongoing',
        when: '2026 – Present',
        sev: 'sev-md',
        sevText: 'High',
        status: 'sev-done',
        statusText: 'Live',
        category: ['defensive'],
        summary: 'A working SOC monitoring environment built from scratch, with Wazuh SIEM ingesting telemetry from Windows and Linux endpoints. Four attack simulations executed and one full incident report written.',
        stack: ['Wazuh', 'Sysmon', 'auditd', 'VirtualBox', 'Windows 11', 'Ubuntu', 'PowerShell', 'Bash'],
        attack: ['T1136.001 (Local Account)', 'T1078.003 (Valid Accounts)', 'T1110 (Brute Force)', 'T1565.001 (Data Manipulation, hosts file)'],
        findings: [
            'Wazuh manager, indexer and dashboard deployed on an isolated NAT network',
            'Windows and Linux agents enrolled with detection grade telemetry (Sysmon and auditd)',
            'Four MITRE ATT&CK aligned attack simulations captured with dashboard evidence',
            'Full analyst style incident report (INC-2026-001) written with response actions and recommendations',
            'FIM finding documented: Wazuh default configuration is not real time for critical paths',
            'Formal 20 page LaTeX report accompanies the repo'
        ],
        link: 'https://github.com/AhmedMKA99/SOC-Home-Lab-with-SIEM'
    },
    {
        id: 'CASE-2025-003',
        title: 'Vulnerable E-Commerce Pen Testing Lab',
        subtitle: 'Group project (Team of 6), Jan to May 2025',
        when: 'Jan 2025 – May 2025',
        sev: 'sev-md',
        sevText: 'High',
        status: 'sev-done',
        statusText: 'Closed',
        category: ['offensive'],
        summary: 'A deliberately vulnerable e-commerce platform ("Sneak Mode") built on a 4 VM isolated lab. My role was full stack development plus offensive verification of the implemented vulnerabilities.',
        stack: ['PHP', 'MySQL', 'JavaScript', 'IIS', 'Windows Server 2022', 'Kali Linux', 'OPNsense', 'Burp Suite', 'Nmap', 'Sqlmap'],
        attack: ['SQL Injection', 'Insecure Session Handling', 'Privilege Escalation', 'OWASP A01, A03, A07'],
        findings: [
            '10 OWASP mapped vulnerabilities implemented and then exploited',
            '4 VM virtualised network (Kali, Windows Server 2022, Ubuntu, OPNsense) built from scratch',
            'Client satisfaction scores of 4 to 5 out of 5 across usability, documentation and vulnerability quality',
            'Delivered on time in an Agile team using GitHub for version control'
        ],
        link: 'https://github.com/Pentest-ENU/E-Commerce-Application'
    },
    {
        id: 'CASE-2024-004',
        title: 'DevSecOps Automated Remediation Pipeline',
        subtitle: 'Self initiated, Jan to Feb 2024',
        when: 'Jan 2024 – Feb 2024',
        sev: 'sev-md',
        sevText: 'High',
        status: 'sev-done',
        statusText: 'Closed',
        category: ['devsecops'],
        summary: 'A GitHub Actions pipeline that enforces automated security gates on every commit against a real vulnerable target (OWASP Juice Shop), covering secret, dependency and container scanning plus SBOM generation.',
        stack: ['TypeScript', 'GitHub Actions', 'Gitleaks', 'Snyk', 'Trivy', 'Anchore Syft', 'Docker', 'Node.js'],
        attack: ['Supply chain', 'Secret disclosure', 'Known vulnerable dependencies'],
        findings: [
            'End to end CI/CD security gates on every commit',
            'Gitleaks for secret scanning, Snyk for dependencies, Trivy for containers',
            'CycloneDX v1.6 SBOM generation via Anchore Syft for supply chain visibility',
            'Fail soft artefact archival so SARIF and JSON evidence is always preserved',
            'Manual CVE remediation of core Node.js libraries with validation through the pipeline'
        ],
        link: 'https://github.com/AhmedMKA99/automated-remediation-pipeline'
    },
    {
        id: 'CASE-2023-005',
        title: 'EduChain, Academic Integrity Ledger',
        subtitle: 'Self initiated, Oct to Nov 2023',
        when: 'Oct 2023 – Nov 2023',
        sev: 'sev-lo',
        sevText: 'Informational',
        status: 'sev-done',
        statusText: 'Closed',
        category: ['defensive'],
        summary: 'A Node.js and Express blockchain implementation for tamper evident academic records, using SHA-256 hashing and a Proof of Work consensus mechanism.',
        stack: ['Node.js', 'Express.js', 'Crypto-JS', 'SHA-256', 'REST API', 'HTML5'],
        findings: [
            'REST API to create, mine and query blocks',
            'Proof of Work consensus with configurable difficulty',
            'Recursive chain validation detecting 100% of tampering attempts in testing',
            'Morgan structured request logging for audit'
        ],
        link: 'https://github.com/AhmedMKA99/EduChain-Immutable-Ledger'
    }
];

/* -------- DATA: Ticker items -------- */
const TICKER_ITEMS = [
    { d: 'good', t: 'now',    m: 'System nominal, portfolio live · GitHub sync green' },
    { d: 'info', t: '2m ago', m: 'Case CASE-2026-002 updated: attack simulations complete' },
    { d: 'good', t: '5m ago', m: 'Rule RULE-001 (SOC Operations) match: Wazuh dashboard verified' },
    { d: 'info', t: '11m ago', m: 'Detection accuracy holds at 98% across 12 attack classes' },
    { d: 'warn', t: '22m ago', m: 'FIM configuration finding logged, real time monitoring not default' },
    { d: 'good', t: '31m ago', m: 'CASE-2026-001 incident report INC-2026-001 written and pushed' },
    { d: 'info', t: '44m ago', m: 'Repo SOC-Home-Lab-with-SIEM: milestones M1 to M7 all closed' },
    { d: 'good', t: '1h ago',  m: 'Degree conferred: First Class Honours, Cybersecurity & Forensics' }
];

/* -------- DATA: Signal stream (Live Signal panel) -------- */
const SIGNAL_LINES = [
    { m: '<span class="g">[OK]</span> Wazuh agent 001 heartbeat' },
    { m: '<span class="g">[OK]</span> Wazuh agent 002 heartbeat' },
    { m: '<span class="a">[INFO]</span> ML model loaded, 12 classes' },
    { m: '<span class="a">[INFO]</span> Sysmon channel ingested' },
    { m: '<span class="a">[INFO]</span> auditd rules loaded' },
    { m: '<span class="g">[OK]</span> Threat hunting view ready' },
    { m: '<span class="w">[WARN]</span> FIM not real time by default' },
    { m: '<span class="a">[INFO]</span> Incident report queued' },
    { m: '<span class="g">[OK]</span> Repo pushed, main -> origin' }
];

/* -------- DATA: Recent push (right rail) -------- */
const RECENT_PUSH = [
    { repo: 'SOC-Home-Lab-with-SIEM', msg: 'M7 complete, full formal report (20 pages)', when: 'today' },
    { repo: 'SOC-Home-Lab-with-SIEM', msg: 'M5 sims + INC-2026-001 written', when: 'today' },
    { repo: 'SOC-Home-Lab-with-SIEM', msg: 'Add docs/04-linux-endpoint.md', when: 'today' },
    { repo: 'automated-remediation-pipeline', msg: 'CycloneDX SBOM generation added', when: 'earlier' }
];

/* ============================================================
   RENDER: Ticker
   ============================================================ */
function renderTicker() {
    const track = document.getElementById('ticker-track');
    if (!track) return;
    // Duplicate items for seamless scroll
    const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
    track.innerHTML = items.map(i => `
        <span class="ticker-item">
            <span class="tk-dot ${i.d}"></span>
            <span class="tk-time">${i.t}</span>
            ${i.m}
        </span>
    `).join('');
}

/* ============================================================
   RENDER: Cases (projects)
   ============================================================ */
function renderCases(filter = 'all') {
    const container = document.getElementById('cases');
    if (!container) return;
    const filtered = filter === 'all'
        ? CASES
        : CASES.filter(c => c.category.includes(filter));

    container.innerHTML = filtered.map((c, idx) => `
        <article class="case-card" data-idx="${CASES.indexOf(c)}">
            <div class="case-top">
                <span class="case-id">${c.id}</span>
                <span class="case-sev ${c.sev}">${c.sevText}</span>
            </div>
            <h3 class="case-title">${c.title}</h3>
            <p class="case-desc">${c.summary}</p>
            <div class="case-meta">
                <span class="case-when">${c.when}</span>
                <span class="case-open">Open details →</span>
            </div>
        </article>
    `).join('');

    container.querySelectorAll('.case-card').forEach(card => {
        card.addEventListener('click', () => openCase(parseInt(card.dataset.idx, 10)));
    });
}

/* ============================================================
   MODAL
   ============================================================ */
function openCase(idx) {
    const c = CASES[idx];
    if (!c) return;
    document.getElementById('m-caseid').textContent = c.id;
    document.getElementById('m-sev').textContent = c.sevText;
    document.getElementById('m-sev').className = 'modal-sev ' + c.sev;
    document.getElementById('m-status').textContent = c.statusText;
    document.getElementById('m-status').className = 'modal-status ' + c.status;
    document.getElementById('m-title').textContent = c.title;
    document.getElementById('m-when').textContent = c.subtitle;
    document.getElementById('m-summary').textContent = c.summary;

    document.getElementById('m-stack').innerHTML = c.stack.map(s => `<span class="chip">${s}</span>`).join('');
    document.getElementById('m-findings').innerHTML = c.findings.map(f => `<li>${f}</li>`).join('');

    const attackWrap = document.getElementById('m-attack-wrap');
    if (c.attack && c.attack.length) {
        attackWrap.style.display = 'block';
        document.getElementById('m-attack').innerHTML = c.attack.map(a => `<span class="chip">${a}</span>`).join('');
    } else {
        attackWrap.style.display = 'none';
    }

    document.getElementById('m-link').href = c.link;

    const modal = document.getElementById('case-modal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCase() {
    document.getElementById('case-modal').classList.remove('open');
    document.body.style.overflow = '';
}

/* ============================================================
   FILTERS
   ============================================================ */
function initFilters() {
    document.querySelectorAll('.filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCases(btn.dataset.filter);
        });
    });
}

/* ============================================================
   NAVIGATION (SPA-style section swap)
   ============================================================ */
const CRUMBS = {
    overview: 'Overview',
    incidents: 'Case Files',
    'detection-rules': 'Detection Rules',
    timeline: 'Activity Log',
    uplink: 'Secure Uplink'
};

function navigateTo(target) {
    document.querySelectorAll('.panel-section').forEach(s => s.classList.remove('active-section'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const section = document.getElementById(target);
    const nav = document.querySelector(`.nav-item[data-target="${target}"]`);
    if (section) section.classList.add('active-section');
    if (nav) nav.classList.add('active');
    const crumb = document.getElementById('crumb-current');
    if (crumb && CRUMBS[target]) crumb.textContent = CRUMBS[target];
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initNav() {
    document.querySelectorAll('.nav-item').forEach(n => {
        n.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(n.dataset.target);
            history.replaceState(null, '', '#' + n.dataset.target);
        });
    });
    // Deep link on load
    const hash = location.hash.replace('#', '');
    if (hash && CRUMBS[hash]) navigateTo(hash);
}

/* ============================================================
   CLOCK
   ============================================================ */
function tickClock() {
    const el = document.getElementById('clock');
    if (!el) return;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    el.textContent = `${hh}:${mm}:${ss}`;
}

/* ============================================================
   LIVE SIGNAL PANEL (staggered incoming lines)
   ============================================================ */
function initSignal() {
    const stream = document.getElementById('signal-stream');
    if (!stream) return;
    let i = 0;
    const push = () => {
        const line = SIGNAL_LINES[i % SIGNAL_LINES.length];
        const now = new Date();
        const t = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
        const el = document.createElement('div');
        el.className = 'signal-line';
        el.innerHTML = `<span class="signal-time">${t}</span><span class="signal-msg">${line.m}</span>`;
        stream.insertBefore(el, stream.firstChild);
        while (stream.children.length > 8) stream.removeChild(stream.lastChild);
        i++;
    };
    for (let j = 0; j < 4; j++) push();
    setInterval(push, 2600);
}

/* ============================================================
   RECENT PUSH (right rail)
   ============================================================ */
function renderRecentPush() {
    const el = document.getElementById('recent-push');
    if (!el) return;
    el.innerHTML = RECENT_PUSH.map(p => `
        <div class="push-item">
            <div class="push-repo">${p.repo}</div>
            <div class="push-msg">${p.msg}</div>
            <div class="push-when">${p.when}</div>
        </div>
    `).join('');
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function initTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    const label = btn?.querySelector('.tt-label');
    const icon = btn?.querySelector('.tt-icon');
    const saved = localStorage.getItem('mak-theme');
    if (saved === 'light') html.setAttribute('data-theme', 'light');
    updateThemeLabel();
    btn?.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        localStorage.setItem('mak-theme', next);
        updateThemeLabel();
    });
    function updateThemeLabel() {
        const isLight = html.getAttribute('data-theme') === 'light';
        if (label) label.textContent = isLight ? 'Light' : 'Dark';
        if (icon)  icon.textContent  = isLight ? '☀' : '☾';
    }
}

/* ============================================================
   MODAL close handlers
   ============================================================ */
function initModalClosers() {
    document.querySelectorAll('[data-close]').forEach(el => {
        el.addEventListener('click', closeCase);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCase();
    });
}

/* ============================================================
   WELCOME BANNER
   ============================================================ */
function initWelcomeBanner() {
    const banner = document.getElementById('welcome-banner');
    const dismiss = document.getElementById('dismiss-banner');
    if (!banner) return;

    // Hide if already dismissed
    if (localStorage.getItem('mak-banner-dismissed') === '1') {
        banner.classList.add('hidden');
    }
    dismiss?.addEventListener('click', () => {
        banner.classList.add('hidden');
        localStorage.setItem('mak-banner-dismissed', '1');
    });
}

/* ============================================================
   HERO CTA NAV (make in-hero anchor buttons swap sections)
   ============================================================ */
function initHeroCTAs() {
    document.querySelectorAll('[data-nav]').forEach(el => {
        el.addEventListener('click', (e) => {
            const target = el.getAttribute('data-nav');
            if (target && CRUMBS[target]) {
                e.preventDefault();
                navigateTo(target);
                history.replaceState(null, '', '#' + target);
            }
        });
    });
}

/* ============================================================
   GUIDED TOUR
   ============================================================ */
const TOUR_STEPS = [
    {
        title: 'Welcome to my portfolio 👋',
        text: 'This site is styled like a real Security Operations Centre dashboard, the kind of tool a cyber security analyst uses at work. I will walk you through it in five short steps.',
        target: 'overview'
    },
    {
        title: 'The dashboard cards up top',
        text: 'These four cards summarise the most important facts about me. Hover any card for a plain-English explanation. For example, "98%" is how accurately my honours dissertation project can detect cyber attacks.',
        target: 'overview'
    },
    {
        title: 'My projects, as case files',
        text: 'In the "Case Files" section, each card is a real project I built. Click any of them to see the technologies I used, what the outcome was, and a link to the code on GitHub.',
        target: 'incidents'
    },
    {
        title: 'My skills, as detection rules',
        text: 'The "Detection Rules" section lists my technical skills grouped by area. "Core" means I use it every day; "Aware" means I know the basics. The small chips at the bottom of each card show specific tools.',
        target: 'detection-rules'
    },
    {
        title: 'How to get in touch',
        text: 'The "Secure Uplink" section has my email, GitHub, and LinkedIn. Email is the fastest way to reach me. Thanks for taking the tour, feel free to explore.',
        target: 'uplink'
    }
];

let tourIdx = 0;

function openTour() {
    tourIdx = 0;
    renderTourStep();
    document.getElementById('tour').classList.add('open');
}
function closeTour() {
    document.getElementById('tour').classList.remove('open');
}
function renderTourStep() {
    const step = TOUR_STEPS[tourIdx];
    if (!step) { closeTour(); return; }
    if (step.target) navigateTo(step.target);
    document.getElementById('tour-step-num').textContent = tourIdx + 1;
    document.getElementById('tour-step-total').textContent = TOUR_STEPS.length;
    document.getElementById('tour-title').textContent = step.title;
    document.getElementById('tour-text').innerHTML = step.text;
    document.getElementById('tour-next').textContent = (tourIdx === TOUR_STEPS.length - 1) ? 'Finish' : 'Next →';
}
function initTour() {
    document.getElementById('start-tour')?.addEventListener('click', openTour);
    document.getElementById('header-tour')?.addEventListener('click', openTour);
    document.getElementById('tour-skip')?.addEventListener('click', closeTour);
    document.querySelectorAll('[data-tour-close]').forEach(el => el.addEventListener('click', closeTour));
    document.getElementById('tour-next')?.addEventListener('click', () => {
        tourIdx++;
        if (tourIdx >= TOUR_STEPS.length) { closeTour(); return; }
        renderTourStep();
    });
    document.addEventListener('keydown', (e) => {
        const tourOpen = document.getElementById('tour').classList.contains('open');
        if (!tourOpen) return;
        if (e.key === 'Escape') closeTour();
        if (e.key === 'ArrowRight' || e.key === 'Enter') {
            tourIdx++;
            if (tourIdx >= TOUR_STEPS.length) { closeTour(); return; }
            renderTourStep();
        }
    });
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderTicker();
    renderCases();
    renderRecentPush();
    initFilters();
    initNav();
    initHeroCTAs();
    initSignal();
    initModalClosers();
    initTheme();
    initWelcomeBanner();
    initTour();
    tickClock();
    setInterval(tickClock, 1000);
});
