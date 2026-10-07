/**
 * Proteus Partners & Co-Ops — Institutional Portfolio Controller
 */

const portfolioData = [
  {
    name: "Avni Wellness",
    key: "avni",
    short: "AW",
    fy25: 2.85,
    fy26: 7.11,
    fy27: 11,
    growth: 54.71,
    gm: 23,
    ebitda: -0.1721,
    ebitdaMargin: -43.0,
    multiple: 4,
    valuation: 28.46,
    totalRevenue: 20.96,
    logo: "assets/brand-images/avni_image.webp",
    title: "Avni Wellness",
    category: "D2C Feminine Care & Organic Hygiene",
    founders: [
      {
        name: "Sujata Pawar",
        firstName: "Sujata",
        lastName: "Pawar",
        initials: "SP",
        photo: "assets/founders/avni_sujata_pawar.jpg"
      },
      {
        name: "Apurv Agrawal",
        firstName: "Apurv",
        lastName: "Agrawal",
        initials: "AA",
        photo: "assets/founders/avni_apurv_agrawal.jpg"
      }
    ],
    pressHeadline: "Avni Wellness raises ₹4 Crore Seed round backing led by Dr. A. Velumani (Thyrocare Founder) to penetrate circular organic hygiene products across 1,200 retail pharmacies.",
    pressSource: "Entrackr / Indian Retailer",
    chartData: [
      { year: "FY25", value: 2.85, label: "2.9" },
      { year: "FY26", value: 7.11, label: "7.1" },
      { year: "FY27 (Proj)", value: 11.0, label: "11.0" }
    ]
  },
  {
    name: "BhadePay",
    key: "bhadepay",
    short: "BP",
    fy25: 5.3,
    fy26: 5.13,
    fy27: 8.3,
    growth: 61.79,
    gm: 100,
    ebitda: 0.025,
    ebitdaMargin: 5.0,
    multiple: 4,
    valuation: 20.54,
    totalRevenue: 18.73,
    logo: "assets/brand-images/bhadepay_logo_pay.jpg",
    title: "BhadePay",
    category: "FinTech • Rental & Recurring Payments Infrastructure",
    founders: [
      {
        name: "Prateek Chaudhari",
        firstName: "Prateek",
        lastName: "Chaudhari",
        initials: "PC",
        photo: "assets/founders/bhadepay_prateek_chaudhari.jpg"
      },
      {
        name: "Mohammad Aslam",
        firstName: "Mohammad",
        lastName: "Aslam",
        initials: "MA",
        photo: "assets/founders/bhade_pay_aslam.jpg"
      }
    ],
    pressHeadline: "BhadePay crosses ₹50+ Cr in recurring rent & security deposit flow volume across Tier-1/2 urban residential clusters with institutional escrow backing.",
    pressSource: "Inc42 / Economic Times",
    chartData: [
      { year: "FY25", value: 5.30, label: "5.3" },
      { year: "FY26", value: 5.13, label: "5.1" },
      { year: "FY27 (Proj)", value: 8.30, label: "8.3" }
    ]
  },
  {
    name: "Ecosys",
    key: "ecosys",
    short: "EC",
    fy25: 1.95,
    fy26: 15.1,
    fy27: 20.196,
    growth: 33.75,
    gm: 53.4,
    ebitda: 0.0163,
    ebitdaMargin: 9.3,
    multiple: 4,
    valuation: 60.4,
    totalRevenue: 37.25,
    logo: "assets/brand-images/ecosys.jpg",
    title: "Ecosys",
    category: "Circular Packaging & Biodegradable Industrial Polymers",
    founders: [
      {
        name: "Chirag Dangi",
        firstName: "Chirag",
        lastName: "Dangi",
        initials: "CD",
        photo: "assets/founders/ecosys_chirag_dangi.jpg"
      },
      {
        name: "Sumit Goyal",
        firstName: "Sumit",
        lastName: "Goyal",
        initials: "SG",
        photo: "assets/founders/ecosys_sumit_goyal.jpg"
      }
    ],
    pressHeadline: "Ecosys expands biodegradable polymer factory capacity to 450 metric tonnes/month with Tier-1 automotive and FMCG manufacturing contracts.",
    pressSource: "VCCircle / Packaging World",
    chartData: [
      { year: "FY25", value: 1.95, label: "2.0" },
      { year: "FY26", value: 15.10, label: "15.1" },
      { year: "FY27 (Proj)", value: 20.20, label: "20.2" }
    ]
  },
  {
    name: "Orionz Jewels",
    key: "orionz",
    short: "OZ",
    fy25: 3.73,
    fy26: 5.52,
    fy27: 4.428,
    growth: -19.78,
    gm: 69.1,
    ebitda: 0.0332,
    ebitdaMargin: 8.7,
    multiple: 4,
    valuation: 22.08,
    totalRevenue: 13.68,
    logo: "assets/brand-images/orionz_logo.webp",
    title: "Orionz Jewels",
    category: "Contemporary Unisex Moissanite & Fine Sterling Silver",
    founders: [
      {
        name: "Alisha Jhaveri Shah",
        firstName: "Alisha",
        lastName: "Jhaveri Shah",
        initials: "AS",
        photo: "assets/founders/orionz_alisha_jhaveri.jpg"
      },
      {
        name: "Harsh Shah",
        firstName: "Harsh",
        lastName: "Shah",
        initials: "HS",
        photo: "assets/founders/orionz_harsh_shah.jpg"
      }
    ],
    pressHeadline: "Orionz achieves profitable unit economics with repeat purchase velocity rising 2.8x following catalog reorientation and 40+ offline shop-in-shops.",
    pressSource: "YourStory / Retail4Growth",
    chartData: [
      { year: "FY25", value: 3.73, label: "3.7" },
      { year: "FY26", value: 5.52, label: "5.5" },
      { year: "FY27 (Proj)", value: 4.43, label: "4.4" }
    ]
  }
];

// Dynamic SVG Sparkline Graph Generator
function renderRevenueChart(chartData, containerEl) {
  if (!containerEl || !chartData || chartData.length < 3) return;

  const width = 320;
  const height = 120;
  const paddingX = 40;
  const paddingY = 24;
  const bottomY = 94;

  const values = chartData.map(d => Number(d.value));
  const minVal = 0;
  const maxVal = Math.max(...values) * 1.35 || 15;

  const points = chartData.map((d, i) => {
    const x = paddingX + (i * (width - 2 * paddingX) / (chartData.length - 1));
    const normalizedY = (d.value - minVal) / (maxVal - minVal);
    const y = bottomY - (normalizedY * (bottomY - paddingY));
    return { x, y, value: d.value, label: d.label || d.value.toFixed(1), year: d.year };
  });

  const polylinePoints = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const polygonPoints = `${points[0].x.toFixed(1)},${points[0].y.toFixed(1)} ` +
    points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') +
    ` ${points[points.length - 1].x.toFixed(1)},${bottomY + 14} ${points[0].x.toFixed(1)},${bottomY + 14}`;

  const circlesSvg = points.map((p, i) => {
    const isLast = i === points.length - 1;
    return `
      <g class="chart-point-group">
        <circle cx="${p.x}" cy="${p.y}" r="${isLast ? '5.5' : '4.5'}" fill="#FACC15" stroke="${isLast ? '#FFFFFF' : '#0B1526'}" stroke-width="2" class="transition-transform hover:scale-125 cursor-pointer"/>
        <text x="${p.x}" y="${p.y - 10}" fill="${isLast ? '#FACC15' : '#FFFFFF'}" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="bold" text-anchor="middle">${p.label}</text>
        <text x="${p.x}" y="${bottomY + 18}" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="9.5" text-anchor="middle">${p.year}</text>
      </g>
    `;
  }).join('');

  containerEl.innerHTML = `
    <svg class="w-full h-full overflow-visible" viewBox="0 0 ${width} ${height}" style="display:block;">
      <defs>
        <linearGradient id="chartGradientFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#FACC15" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#FACC15" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      <!-- Grid guidelines -->
      <line stroke="#1E293B" stroke-dasharray="3,3" x1="20" x2="300" y1="20" y2="20" />
      <line stroke="#1E293B" stroke-dasharray="3,3" x1="20" x2="300" y1="56" y2="56" />
      <line stroke="#1E293B" stroke-dasharray="3,3" x1="20" x2="300" y1="94" y2="94" />
      <!-- Area Gradient Fill -->
      <polygon fill="url(#chartGradientFill)" points="${polygonPoints}" />
      <!-- Solid Trajectory Line -->
      <polyline fill="none" points="${polylinePoints}" stroke="#FACC15" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
      <!-- Data Points & Labels -->
      ${circlesSvg}
    </svg>
  `;
}

// Dynamic Company Inspector Controller
function selectCompany(companyKey) {
  const data = portfolioData.find(b => b.key === companyKey);
  if (!data) return;

  // 1. Update Inspector Title
  const titleEl = document.getElementById('inspector-title');
  if (titleEl) titleEl.textContent = data.title || data.name;

  // 2. Update Inspector Logo
  const logoContainer = document.getElementById('inspector-logo-container');
  if (logoContainer) {
    logoContainer.innerHTML = `
      <img src="${data.logo}" alt="${data.name} Logo" class="w-full h-full object-contain rounded-lg p-0.5">
    `;
  }

  // 3. Update Founders Section with Real Portraits
  const foundersContainer = document.getElementById('inspector-founders-list');
  if (foundersContainer) {
    const foundersHtml = data.founders.map(f => {
      return `
        <div class="flex flex-col items-center text-center">
          <div class="w-16 h-16 rounded-full border-2 border-ochre-gold/80 p-0.5 overflow-hidden shadow-md bg-slate-800 flex items-center justify-center">
            <img src="${f.photo}" alt="${f.name}" class="w-full h-full object-cover rounded-full" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="w-full h-full rounded-full bg-slate-700 items-center justify-center font-serif text-lg font-bold text-amber-200" style="display:none;">
              ${f.initials}
            </div>
          </div>
          <span class="font-mono text-xs font-bold text-white mt-2">${f.firstName}</span>
          <span class="font-mono text-[10px] text-slate-400 -mt-0.5">${f.lastName}</span>
        </div>
      `;
    }).join('');

    foundersContainer.innerHTML = `
      <div class="flex items-center gap-6">
        ${foundersHtml}
      </div>
    `;
  }

  // 4. Update 4-Metric Grid
  const valEl = document.getElementById('inspector-val');
  if (valEl) valEl.innerHTML = `₹${data.valuation.toFixed(2)} <span class="text-sm font-sans font-normal text-white">Cr</span>`;

  const revEl = document.getElementById('inspector-rev');
  if (revEl) revEl.innerHTML = `₹${data.totalRevenue.toFixed(2)} <span class="text-sm font-sans font-normal text-white">Cr</span>`;

  const growthEl = document.getElementById('inspector-growth');
  if (growthEl) {
    const isPos = data.growth >= 0;
    growthEl.innerHTML = `<span class="${isPos ? 'text-ochre-sun' : 'text-amber-400'}">${isPos ? '+' : ''}${data.growth.toFixed(2)}%</span>`;
  }

  const ebitdaEl = document.getElementById('inspector-ebitda');
  if (ebitdaEl) {
    const isPos = data.ebitdaMargin >= 0;
    ebitdaEl.innerHTML = `<span class="${isPos ? 'text-emerald-400' : 'text-amber-300'}">${isPos ? '+' : ''}${data.ebitdaMargin.toFixed(2)}%</span>`;
  }

  // 5. Update Revenue Trend Sparkline Chart
  const chartWrapper = document.getElementById('inspector-chart-container');
  if (chartWrapper) {
    renderRevenueChart(data.chartData, chartWrapper);
  }

  const footnoteEl = document.getElementById('inspector-chart-footnote');
  if (footnoteEl) {
    footnoteEl.innerHTML = `
      <span>FY25: <strong class="text-white">₹${data.fy25.toFixed(2)} Cr</strong></span>
      <span>FY26: <strong class="text-white">₹${data.fy26.toFixed(2)} Cr</strong></span>
      <span>FY27 (Proj): <strong class="text-ochre-sun">₹${data.fy27.toFixed(2)} Cr</strong></span>
    `;
  }

  // 6. Update Press Dispatch / Syndicate Milestones
  const pressHeadlineEl = document.getElementById('inspector-press-headline');
  if (pressHeadlineEl) pressHeadlineEl.textContent = `"${data.pressHeadline}"`;

  const pressSourceEl = document.getElementById('inspector-press-source');
  if (pressSourceEl) pressSourceEl.textContent = `SOURCE: ${data.pressSource}`;

  // 7. Update Active Card Highlight
  document.querySelectorAll('[data-purpose="company-card"]').forEach(card => {
    if (card.getAttribute('data-company-id') === companyKey) {
      card.classList.add('is-active', 'border-ochre-gold/80');
      card.classList.remove('border-parchment-300');
    } else {
      card.classList.remove('is-active', 'border-ochre-gold/80');
      card.classList.add('border-parchment-300');
    }
  });
}

// Security Gate Controller
function setupSecurityGate() {
  const VALID_PASSWORDS = [
    'Proteus@2026#Secure!',
    'Proteus#Capital2026!',
    'Proteus@CoOps#2026!',
    'Proteus2026#Admin!'
  ];

  const gateOverlay = document.getElementById('gateOverlay');
  const gateForm = document.getElementById('gateForm');
  const gatePass = document.getElementById('gatePass');
  const eyeBtn = document.getElementById('eyeBtn');
  const gateError = document.getElementById('gateError');
  const gateCard = document.querySelector('.gate-card');
  const lockBtn = document.getElementById('lockBtn');
  const secToast = document.getElementById('secToast');

  function isUnlocked() {
    return sessionStorage.getItem('proteus_unlocked') === 'true';
  }

  function applyLockState() {
    if (isUnlocked()) {
      if (gateOverlay) {
        gateOverlay.classList.add('hidden');
        gateOverlay.style.display = 'none';
      }
      document.body.style.overflow = '';
      if (lockBtn) {
        lockBtn.innerHTML = `<svg class="w-3.5 h-3.5 text-ochre-amber" fill="currentColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fill-rule="evenodd"></path></svg> <span>Lock Portal</span>`;
        lockBtn.title = 'Lock Portfolio';
      }
    } else {
      if (gateOverlay) {
        gateOverlay.classList.remove('hidden');
        gateOverlay.style.display = 'flex';
      }
      document.body.style.overflow = 'hidden';
      if (lockBtn) {
        lockBtn.innerHTML = `<svg class="w-3.5 h-3.5 text-ochre-amber" fill="currentColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 016 0z" fill-rule="evenodd"></path></svg> <span>Enter Passkey</span>`;
        lockBtn.title = 'Authenticate';
      }
      if (gatePass) setTimeout(() => gatePass.focus(), 200);
    }
  }

  // Password Visibility Toggle
  if (eyeBtn && gatePass) {
    eyeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = gatePass.getAttribute('type') === 'password' ? 'text' : 'password';
      gatePass.setAttribute('type', type);
      eyeBtn.textContent = type === 'password' ? '👁️' : '🙈';
    });
  }

  // Password Submission
  if (gateForm) {
    gateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputVal = (gatePass ? gatePass.value : '').trim();

      if (VALID_PASSWORDS.includes(inputVal)) {
        sessionStorage.setItem('proteus_unlocked', 'true');
        if (gateError) gateError.textContent = '';
        applyLockState();
        showSecToast('🔓 Access Granted. Portfolio Verified.');
      } else {
        if (gateError) gateError.textContent = '❌ Access Denied: Invalid Passkey';
        if (gateCard) {
          gateCard.classList.remove('shake');
          void gateCard.offsetWidth;
          gateCard.classList.add('shake');
        }
        if (gatePass) {
          gatePass.value = '';
          gatePass.focus();
        }
      }
    });
  }

  // Lock / Unlock Toggle Button
  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      if (isUnlocked()) {
        sessionStorage.removeItem('proteus_unlocked');
        applyLockState();
        showSecToast('🔒 Portfolio Locked.');
      } else {
        applyLockState();
      }
    });
  }

  // Security Toast Notification
  let toastTimer = null;
  function showSecToast(msg) {
    if (!secToast) return;
    secToast.textContent = msg;
    secToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      secToast.classList.remove('show');
    }, 3200);
  }

  // Initial State Check
  applyLockState();
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Attach Card Click Listeners
  document.querySelectorAll('[data-purpose="company-card"]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-company-id');
      if (id) selectCompany(id);
    });
  });

  // 2. Setup Security Authentication
  setupSecurityGate();

  // 3. Initial Selection (Avni Wellness)
  selectCompany('avni');
});
