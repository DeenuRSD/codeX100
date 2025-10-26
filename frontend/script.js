const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const percentage = (value) => `${(value * 100).toFixed(0)}%`;

const state = {
  notifications: 3,
  kpis: [
    {
      id: 'revenue',
      label: 'Revenue',
      icon: 'fa-sack-dollar',
      values: { 30: 182400, 90: 548900, 365: 2284200 },
      change: { 30: 0.18, 90: 0.23, 365: 0.31 },
    },
    {
      id: 'fulfilment',
      label: 'Fulfilment rate',
      icon: 'fa-truck-fast',
      values: { 30: 0.94, 90: 0.91, 365: 0.9 },
      change: { 30: 0.04, 90: 0.02, 365: 0.03 },
      type: 'percentage',
    },
    {
      id: 'cash',
      label: 'Free cash flow',
      icon: 'fa-piggy-bank',
      values: { 30: 624000, 90: 1879000, 365: 5128000 },
      change: { 30: 0.11, 90: 0.16, 365: 0.18 },
    },
    {
      id: 'engagement',
      label: 'Employee engagement',
      icon: 'fa-heart-pulse',
      values: { 30: 0.87, 90: 0.85, 365: 0.82 },
      change: { 30: 0.03, 90: 0.02, 365: 0.04 },
      type: 'percentage',
    },
  ],
  revenueTrend: [
    { label: 'Jan', value: 180000 },
    { label: 'Feb', value: 210000 },
    { label: 'Mar', value: 240000 },
    { label: 'Apr', value: 260000 },
    { label: 'May', value: 275000 },
    { label: 'Jun', value: 298000 },
  ],
  fulfilmentTimeline: [
    {
      title: 'Order consolidation complete',
      time: '08:30',
      context: 'Warehouse North - 184 orders ready for dispatch',
    },
    {
      title: 'Export shipment cleared',
      time: '10:45',
      context: 'Customs release received - ETA customer +36h',
    },
    {
      title: 'Last-mile partner engaged',
      time: '12:10',
      context: '82% of metro deliveries allocated to riders',
    },
    {
      title: 'Returns processed',
      time: '14:50',
      context: '13 units restocked • credit memos generated',
    },
  ],
  workload: [
    { owner: 'Alex Chen', open: 18, sla: 'Green' },
    { owner: 'Sara Patel', open: 12, sla: 'Amber' },
    { owner: 'Diego Alves', open: 21, sla: 'Green' },
    { owner: 'Leah Kim', open: 9, sla: 'Green' },
  ],
  initiatives: [
    {
      title: 'ERP x CRM bi-directional sync',
      owner: 'Operations',
      eta: 'In QA • ship 18 Jun',
    },
    {
      title: 'Vendor managed inventory pilot',
      owner: 'Supply chain',
      eta: 'Wave 2 rollout • 4 warehouses',
    },
    {
      title: 'Compensation benchmarking',
      owner: 'People team',
      eta: 'Executive review on 24 Jun',
    },
  ],
  deals: [
    {
      id: 'S-1042',
      client: 'Acme Manufacturing',
      stage: 'Negotiation',
      amount: 42000,
      closeDate: '2024-06-28',
      owner: 'Alex Chen',
      probability: 0.65,
    },
    {
      id: 'S-1041',
      client: 'Globex Foods',
      stage: 'Contract Sent',
      amount: 58000,
      closeDate: '2024-07-02',
      owner: 'Sara Patel',
      probability: 0.8,
    },
    {
      id: 'S-1039',
      client: 'Blue Horizon Hotels',
      stage: 'Prospecting',
      amount: 32000,
      closeDate: '2024-07-14',
      owner: 'Leah Kim',
      probability: 0.35,
    },
    {
      id: 'S-1037',
      client: 'Nimbus Logistics',
      stage: 'Closed Won',
      amount: 96000,
      closeDate: '2024-06-04',
      owner: 'Diego Alves',
      probability: 1,
    },
    {
      id: 'S-1035',
      client: 'Hikari Retail',
      stage: 'Negotiation',
      amount: 41000,
      closeDate: '2024-06-30',
      owner: 'Alex Chen',
      probability: 0.55,
    },
  ],
  inventory: [
    {
      sku: 'FG-1001',
      name: 'Smart Sensor Kit',
      stock: 184,
      safety: 120,
      transit: 80,
      warehouse: 'north',
    },
    {
      sku: 'FG-1004',
      name: 'Adaptive Router',
      stock: 72,
      safety: 150,
      transit: 190,
      warehouse: 'south',
    },
    {
      sku: 'FG-1010',
      name: 'Edge Compute Node',
      stock: 38,
      safety: 90,
      transit: 120,
      warehouse: 'north',
    },
    {
      sku: 'FG-1020',
      name: 'Industrial Gateway',
      stock: 210,
      safety: 180,
      transit: 40,
      warehouse: 'south',
    },
    {
      sku: 'FG-1032',
      name: 'Telemetry Beacon',
      stock: 44,
      safety: 80,
      transit: 0,
      warehouse: 'north',
    },
  ],
  employees: [
    {
      name: 'Aarya Rana',
      department: 'Sales',
      role: 'Director of Revenue',
      status: 'Active',
      nextReview: '2024-07-12',
      engagement: '92%',
    },
    {
      name: 'Diego Alves',
      department: 'Operations',
      role: 'Fulfilment Manager',
      status: 'Active',
      nextReview: '2024-09-02',
      engagement: '88%',
    },
    {
      name: 'Leah Kim',
      department: 'Finance',
      role: 'FP&A Lead',
      status: 'Active',
      nextReview: '2024-08-22',
      engagement: '91%',
    },
    {
      name: 'Mohan Iyer',
      department: 'Operations',
      role: 'Warehouse Supervisor',
      status: 'Leave (1d)',
      nextReview: '2024-07-30',
      engagement: '84%',
    },
    {
      name: 'Sara Patel',
      department: 'People',
      role: 'HRBP',
      status: 'Active',
      nextReview: '2024-07-18',
      engagement: '95%',
    },
  ],
  interviews: [
    {
      candidate: 'Lina Torres',
      role: 'Customer Success Manager',
      date: '2024-06-13 09:00',
    },
    {
      candidate: 'Victor Shaw',
      role: 'Automation Engineer',
      date: '2024-06-13 13:30',
    },
    {
      candidate: 'Priya Nair',
      role: 'Payroll Specialist',
      date: '2024-06-14 11:00',
    },
  ],
  finance: {
    summary: [
      { label: 'Available cash', value: 2180000, scales: false },
      { label: 'Monthly burn', value: 438000, scales: true },
      { label: 'Runway', value: 11, suffix: ' months', scales: false, type: 'number' },
      { label: 'Gross margin', value: 0.52, type: 'percentage', scales: false },
    ],
    costCentres: [
      { name: 'Operations', budget: 820000, actual: 790000 },
      { name: 'Sales & Marketing', budget: 460000, actual: 388000 },
      { name: 'Product', budget: 560000, actual: 512000 },
      { name: 'People & Culture', budget: 180000, actual: 142000 },
    ],
  },
  quickLog: [],
};

const modules = document.querySelectorAll('.module');
const navLinks = document.querySelectorAll('.nav-link');
const bodyEl = document.body;

const dashboardRangeSelect = document.getElementById('dashboardRange');
const kpiGrid = document.getElementById('kpiGrid');
const revenueChart = document.getElementById('revenueChart');
const trendSubtitle = document.getElementById('trendSubtitle');
const timeline = document.getElementById('fulfilmentTimeline');
const workloadList = document.getElementById('workloadList');
const initiativeList = document.getElementById('initiativeList');
const pipelineValue = document.getElementById('pipelineValue');
const salesTableBody = document.querySelector('#salesTable tbody');
const stageFilter = document.getElementById('stageFilter');
const inventoryGrid = document.getElementById('inventoryGrid');
const reorderList = document.getElementById('reorderList');
const inventoryView = document.getElementById('inventoryView');
const employeeTableBody = document.querySelector('#employeeTable tbody');
const teamFilter = document.getElementById('teamFilter');
const interviewSchedule = document.getElementById('interviewSchedule');
const financeSummary = document.getElementById('financeSummary');
const costTableBody = document.querySelector('#costTable tbody');
const financeFilter = document.getElementById('financeFilter');
const summaryOutput = document.getElementById('summaryOutput');
const globalSearch = document.getElementById('globalSearch');
const searchResults = document.getElementById('searchResults');
const searchList = searchResults?.querySelector('ul');
const notificationBadge = document.getElementById('notificationBadge');
const toggleThemeBtn = document.getElementById('toggleTheme');
const quickPanel = document.getElementById('quickPanel');
const quickAddBtn = document.getElementById('quickAdd');
const cancelQuickBtn = document.getElementById('cancelQuick');
const quickActionForm = document.getElementById('quickActionForm');
const quickLog = document.getElementById('quickLog');

function setActiveModule(moduleId) {
  modules.forEach((module) => {
    module.classList.toggle('active', module.id === moduleId);
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.module === moduleId);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => setActiveModule(link.dataset.module));
});

function renderKPIs(range = 30) {
  kpiGrid.innerHTML = '';

  state.kpis.forEach((kpi) => {
    const value = kpi.values[range];
    const change = kpi.change[range];
    const formattedValue =
      kpi.type === 'percentage' ? percentage(value) : currency.format(value);

    const card = document.createElement('article');
    card.className = 'kpi-card';
    card.innerHTML = `
      <header>
        <h3>${kpi.label}</h3>
        <i class="fa-solid ${kpi.icon}"></i>
      </header>
      <div class="kpi-value">${formattedValue}</div>
      <div class="kpi-trend ${change < 0 ? 'negative' : ''}">
        <i class="fa-solid ${change < 0 ? 'fa-arrow-down' : 'fa-arrow-up'}"></i>
        ${percentage(Math.abs(change))} vs prev.
      </div>
    `;

    kpiGrid.appendChild(card);
  });
}

function renderRevenueTrend() {
  revenueChart.innerHTML = '';
  const maxValue = Math.max(...state.revenueTrend.map((point) => point.value));

  state.revenueTrend.forEach((point) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${(point.value / maxValue) * 100}%`;
    bar.dataset.value = currency.format(point.value);
    const label = document.createElement('span');
    label.textContent = point.label;
    bar.appendChild(label);
    revenueChart.appendChild(bar);
  });

  const trailing = state.revenueTrend.slice(-2);
  if (trailing.length === 2) {
    const delta = trailing[1].value - trailing[0].value;
    const direction = delta >= 0 ? 'up' : 'down';
    trendSubtitle.textContent = `${direction === 'up' ? '▲' : '▼'} ${currency.format(
      Math.abs(delta)
    )} vs last period`;
  }
}

function renderTimeline() {
  timeline.innerHTML = '';
  state.fulfilmentTimeline.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.time}</strong> • ${item.title}<br /><span>${item.context}</span>`;
    timeline.appendChild(li);
  });
}

function renderWorkload() {
  workloadList.innerHTML = '';
  state.workload.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.owner}</span><span>${item.open} open • SLA ${item.sla}</span>`;
    workloadList.appendChild(li);
  });
}

function renderInitiatives() {
  initiativeList.innerHTML = '';
  state.initiatives.forEach((initiative) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${initiative.title}</strong><br /><span>${initiative.owner} · ${initiative.eta}</span>`;
    initiativeList.appendChild(li);
  });
}

function stageClass(stage) {
  const map = {
    Prospecting: 'prospecting',
    Negotiation: 'negotiation',
    'Contract Sent': 'contract-sent',
    'Closed Won': 'closed',
    Discovery: 'prospecting',
    Proposal: 'contract',
  };
  return map[stage] || 'prospecting';
}

function weightedPipeline(deals) {
  return deals.reduce((sum, deal) => sum + deal.amount * deal.probability, 0);
}

function renderDeals(filter = 'all') {
  salesTableBody.innerHTML = '';
  const deals = state.deals.filter((deal) => filter === 'all' || deal.stage === filter);

  deals.forEach((deal) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${deal.id}</td>
      <td>${deal.client}</td>
      <td><span class="tag ${stageClass(deal.stage)}">${deal.stage}</span></td>
      <td>${currency.format(deal.amount)}</td>
      <td>${deal.closeDate}</td>
      <td>${deal.owner}</td>
      <td>${percentage(deal.probability)}</td>
    `;
    salesTableBody.appendChild(row);
  });

  pipelineValue.textContent = `${currency.format(weightedPipeline(deals))} weighted`;
}

function renderInventory(view = 'all') {
  inventoryGrid.innerHTML = '';
  reorderList.innerHTML = '';

  const items = state.inventory.filter((item) => view === 'all' || item.warehouse === view);

  items.forEach((item) => {
    const utilisation = Math.min(100, Math.round((item.stock / item.safety) * 100));
    const card = document.createElement('article');
    card.className = 'inventory-card';
    card.innerHTML = `
      <header>
        <div>
          <strong>${item.name}</strong>
          <div class="text-muted">SKU ${item.sku}</div>
        </div>
        <span class="badge-soft">${item.warehouse.toUpperCase()}</span>
      </header>
      <div>On hand: <strong>${item.stock}</strong> • In transit: ${item.transit}</div>
      <div>Safety stock: ${item.safety}</div>
      <div class="progress"><span style="width:${utilisation}%"></span></div>
      <small>${utilisation}% of safety threshold</small>
    `;
    inventoryGrid.appendChild(card);

    if (item.stock + item.transit < item.safety) {
      const li = document.createElement('li');
      const shortage = item.safety - (item.stock + item.transit);
      li.innerHTML = `<span>${item.sku} · ${item.name}</span><span class="reorder-alert">Order ${shortage} units</span>`;
      reorderList.appendChild(li);
    }
  });

  if (!inventoryGrid.children.length) {
    const empty = document.createElement('article');
    empty.className = 'inventory-card';
    empty.innerHTML = '<strong>No inventory for this view.</strong><span class="text-muted">Adjust filters to explore other hubs.</span>';
    inventoryGrid.appendChild(empty);
  }

  if (!reorderList.children.length) {
    const li = document.createElement('li');
    li.textContent = 'All items above safety stock.';
    reorderList.appendChild(li);
  }
}

function renderEmployees(filter = 'all') {
  employeeTableBody.innerHTML = '';

  state.employees
    .filter((employee) => filter === 'all' || employee.department === filter)
    .forEach((employee) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.role}</td>
        <td><span class="hr-status">${employee.status}</span></td>
        <td>${employee.nextReview}</td>
        <td><span class="engagement">${employee.engagement}</span></td>
      `;
      employeeTableBody.appendChild(row);
    });
}

function renderInterviews() {
  interviewSchedule.innerHTML = '';
  state.interviews.forEach((interview) => {
    const li = document.createElement('li');
    li.className = 'timeline-item';
    li.innerHTML = `<strong>${interview.date}</strong><br />${interview.candidate} · ${interview.role}`;
    interviewSchedule.appendChild(li);
  });
}

function renderFinance(range = financeFilter?.value || 'month') {
  financeSummary.innerHTML = '';
  const rangeLabel = {
    month: 'Monthly burn',
    quarter: 'Quarter burn',
    year: 'Annual burn',
  };

  state.finance.summary.forEach((card) => {
    const div = document.createElement('div');
    div.className = 'finance-card';
    let value;
    if (card.type === 'percentage') {
      value = percentage(card.value);
    } else if (card.type === 'number') {
      value = card.value;
    } else {
      value = currency.format(card.value);
    }
    const label = card.scales ? rangeLabel[range] || card.label : card.label;
    div.innerHTML = `<span>${label}</span><strong>${value}${card.suffix || ''}</strong>`;
    financeSummary.appendChild(div);
  });

  costTableBody.innerHTML = '';
  state.finance.costCentres.forEach((centre) => {
    const variance = centre.budget - centre.actual;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${centre.name}</td>
      <td>${currency.format(centre.budget)}</td>
      <td>${currency.format(centre.actual)}</td>
      <td class="${variance < 0 ? 'negative' : ''}">${currency.format(variance)}</td>
      <td>${Math.round((centre.budget / Math.max(centre.actual, 1)) * 30)} days</td>
    `;
    costTableBody.appendChild(row);
  });
}

function buildSearchIndex() {
  const records = [];
  state.deals.forEach((deal) => {
    records.push({
      label: `${deal.client} (${deal.stage})`,
      detail: `Deal • ${currency.format(deal.amount)} · ${deal.owner}`,
      module: 'sales',
    });
  });

  state.inventory.forEach((item) => {
    records.push({
      label: `${item.name}`,
      detail: `Inventory • ${item.stock} on hand · ${item.warehouse.toUpperCase()} hub`,
      module: 'inventory',
    });
  });

  state.employees.forEach((employee) => {
    records.push({
      label: employee.name,
      detail: `Employee • ${employee.department} · ${employee.role}`,
      module: 'hr',
    });
  });

  return records;
}

let searchIndex = buildSearchIndex();
const baseFinanceSummary = state.finance.summary.map((card) => ({ ...card }));

function renderSearchResults(query) {
  if (!searchList || !searchResults) return;
  const trimmed = query.trim().toLowerCase();
  if (trimmed.length < 2) {
    searchResults.hidden = true;
    return;
  }

  const results = searchIndex.filter((record) => record.label.toLowerCase().includes(trimmed));
  searchList.innerHTML = '';

  results.slice(0, 6).forEach((result) => {
    const li = document.createElement('li');
    li.innerHTML = `<span><strong>${result.label}</strong><br />${result.detail}</span><button class="btn btn-subtle" data-target="${result.module}">Open</button>`;
    searchList.appendChild(li);
  });

  if (!results.length) {
    const li = document.createElement('li');
    li.textContent = 'No matching records.';
    searchList.appendChild(li);
  }

  searchResults.hidden = false;
}

if (searchResults) {
  searchResults.addEventListener('click', (event) => {
    const target = event.target.closest('button[data-target]');
    if (!target) return;
    setActiveModule(target.dataset.target);
    searchResults.hidden = true;
  });
}

globalSearch?.addEventListener('input', (event) => {
  renderSearchResults(event.target.value);
});

function refreshOperationalSignals() {
  state.revenueTrend = state.revenueTrend.map((point) => ({
    ...point,
    value: Math.round(point.value * (1 + (Math.random() - 0.4) * 0.08)),
  }));

  state.workload = state.workload.map((item) => ({
    ...item,
    open: Math.max(5, item.open + Math.round((Math.random() - 0.5) * 4)),
  }));

  renderRevenueTrend();
  renderWorkload();
}

document.getElementById('refreshDashboard')?.addEventListener('click', () => {
  refreshOperationalSignals();
});

document.getElementById('rebalanceBtn')?.addEventListener('click', () => {
  const totalOpen = state.workload.reduce((sum, item) => sum + item.open, 0);
  const average = Math.round(totalOpen / state.workload.length);
  state.workload = state.workload.map((item) => ({ ...item, open: average }));
  renderWorkload();
});

dashboardRangeSelect?.addEventListener('change', (event) => {
  renderKPIs(Number(event.target.value));
});

renderKPIs(Number(dashboardRangeSelect?.value || 30));
renderRevenueTrend();
renderTimeline();
renderWorkload();
renderInitiatives();
renderDeals(stageFilter?.value || 'all');
renderInventory(inventoryView?.value || 'all');
renderEmployees(teamFilter?.value || 'all');
renderInterviews();
renderFinance(financeFilter?.value || 'month');

stageFilter?.addEventListener('change', (event) => {
  renderDeals(event.target.value);
});

inventoryView?.addEventListener('change', (event) => {
  renderInventory(event.target.value);
});

teamFilter?.addEventListener('change', (event) => {
  renderEmployees(event.target.value);
});

financeFilter?.addEventListener('change', (event) => {
  const value = event.target.value;
  const scale = value === 'month' ? 1 : value === 'quarter' ? 3 : 12;
  state.finance.summary = baseFinanceSummary.map((card) => {
    if (card.scales) {
      return { ...card, value: card.value * scale };
    }
    return { ...card };
  });
  renderFinance(value);
});

const newDealForm = document.getElementById('newDealForm');
newDealForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newDeal = {
    id: `S-${Math.floor(Math.random() * 9000 + 1000)}`,
    client: formData.get('client'),
    stage: formData.get('stage'),
    amount: Number(formData.get('amount')),
    closeDate: formData.get('closeDate'),
    owner: formData.get('owner'),
    probability: formData.get('stage') === 'Negotiation' ? 0.6 : formData.get('stage') === 'Proposal' ? 0.45 : 0.3,
  };

  state.deals.unshift(newDeal);
  searchIndex = buildSearchIndex();
  renderDeals(stageFilter?.value || 'all');
  event.target.reset();
});

const launchPulse = document.getElementById('launchPulse');
launchPulse?.addEventListener('click', () => {
  summaryOutput.textContent = 'Pulse survey launched — engagement analytics will update in ~2 hours.';
});

const generateSummaryBtn = document.getElementById('generateSummary');
generateSummaryBtn?.addEventListener('click', () => {
  const topDeal = state.deals.slice().sort((a, b) => b.amount - a.amount)[0];
  const lowStock = state.inventory.find((item) => item.stock + item.transit < item.safety);
  const avgEngagement = state.employees.reduce((sum, employee) => sum + parseInt(employee.engagement, 10), 0) /
    state.employees.length;
  const burn = state.finance.summary.find((card) => card.label === 'Monthly burn');

  summaryOutput.textContent = `
Executive outlook — ${new Date().toLocaleDateString()}\n
• Revenue momentum remains positive with ${trendSubtitle.textContent}.\n
• Pipeline headliner: ${topDeal.client} at ${currency.format(topDeal.amount)} (${topDeal.stage}).\n
• Inventory watchlist: ${lowStock ? `${lowStock.name} (${lowStock.sku}) below safety by ${
    lowStock.safety - (lowStock.stock + lowStock.transit)
  } units.` : 'All SKUs above safety thresholds.'}\n
• People pulse averages ${avgEngagement.toFixed(1)} engagement with surveys scheduled.\n
• Monthly burn tracking at ${burn ? currency.format(burn.value) : 'n/a'} with ${state.finance.summary
    .find((card) => card.label === 'Runway')
    ?.value || '?'} months of runway.\n`
});

if (notificationBadge) {
  notificationBadge.textContent = state.notifications;
  notificationBadge.style.display = state.notifications ? 'inline-flex' : 'none';
}

toggleThemeBtn?.addEventListener('click', () => {
  bodyEl.classList.toggle('dark');
});

function toggleQuickPanel(show) {
  quickPanel.hidden = !show;
  if (!show) {
    quickActionForm.reset();
  }
}

quickAddBtn?.addEventListener('click', () => {
  toggleQuickPanel(quickPanel.hidden);
});

cancelQuickBtn?.addEventListener('click', () => {
  toggleQuickPanel(false);
});

quickActionForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const entry = {
    type: formData.get('type'),
    title: formData.get('title'),
    due: formData.get('due'),
    created: new Date().toLocaleTimeString(),
  };
  state.quickLog.unshift(entry);
  renderQuickLog();
  toggleQuickPanel(false);
});

function renderQuickLog() {
  quickLog.innerHTML = '';
  if (!state.quickLog.length) {
    quickLog.innerHTML = '<p>No quick records yet.</p>';
    return;
  }

  state.quickLog.slice(0, 4).forEach((entry) => {
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.innerHTML = `<strong>${entry.title}</strong><br />${entry.type} · due ${
      entry.due || 'unspecified'
    } · created ${entry.created}`;
    quickLog.appendChild(div);
  });
}

renderQuickLog();

document.getElementById('autoReorder')?.addEventListener('change', (event) => {
  if (!reorderList) return;
  if (event.target.checked && !reorderList.textContent.includes('Automations primed')) {
    reorderList.insertAdjacentHTML(
      'afterbegin',
      '<li>Automations primed — purchase orders will be triggered nightly.</li>'
    );
  }
});

const notificationBell = document.getElementById('notificationBell');
notificationBell?.addEventListener('click', () => {
  if (!searchResults || !searchList) return;
  searchResults.hidden = false;
  searchList.innerHTML = '';
  state.notifications = 0;
  if (notificationBadge) {
    notificationBadge.textContent = '';
    notificationBadge.style.display = 'none';
  }
  const alerts = [
    'Reminder: Board packet due Friday',
    'Invoice #INV-2094 awaiting approval',
    'Inventory transfer from South hub arriving tonight',
  ];
  alerts.forEach((alert) => {
    const li = document.createElement('li');
    li.textContent = alert;
    searchList.appendChild(li);
  });
});
