// ═══════════════════════════════════════════════
// TAB LOADING & SWITCHING
// ═══════════════════════════════════════════════

var tabFiles = {
  'intro':     'tabs/intro.html',
  'market':    'tabs/market.html',
  'zones':     'tabs/zones.html',
  'capex':     'tabs/capex.html',
  'revenue':   'tabs/revenue.html',
  'cashflow':  'tabs/cashflow.html',

  'breakeven': 'tabs/breakeven.html',
  'sm':        'tabs/sm.html',
  'summary':   'tabs/summary.html'
};

var loadedTabs = {};

function loadTab(id) {
  return new Promise(function(resolve, reject) {
    if (loadedTabs[id]) {
      resolve();
      return;
    }
    var container = document.getElementById('tab-' + id);
    if (!container) {
      reject(new Error('Container not found: tab-' + id));
      return;
    }
    
    // Thêm cache-busting hoặc thay đổi tương đối nếu cần. 
    // Dùng đường dẫn tương đối rõ ràng './tabs/...' giúp tránh lỗi khi chạy ở thư mục con.
    var fetchUrl = './' + tabFiles[id];
    
    fetch(fetchUrl)
      .then(function(res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function(html) {
        container.innerHTML = '<div class="container">' + html + '</div>';
        loadedTabs[id] = true;
        // Execute any inline scripts in the loaded HTML
        var scripts = container.querySelectorAll('script');
        scripts.forEach(function(oldScript) {
          var newScript = document.createElement('script');
          if (oldScript.src) {
            newScript.src = oldScript.src;
          } else {
            newScript.textContent = oldScript.textContent;
          }
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });
        resolve();
      })
      .catch(function(err) {
        console.error('Failed to load tab:', id, err);
        container.innerHTML = '<div class="container"><div class="section"><p style="color:var(--muted);">Không thể tải nội dung (' + err.message + '). Vui lòng kiểm tra lại server hoặc đường dẫn.</p></div></div>';
        reject(err);
      });
  });
}

function switchTab(id, evt) {
  // Load tab content first, then switch display
  loadTab(id).then(function() {
    document.querySelectorAll('.section-panel').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
    document.getElementById('tab-' + id).classList.add('active');
    // Highlight the clicked tab button
    if (evt && evt.target) {
      evt.target.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // After loading zones tab, render zone data if not already done
    if (id === 'zones' && document.getElementById('zone-rows') && !document.getElementById('zone-rows').hasChildNodes()) {
      renderZones();
    }
  });
}

// ═══════════════════════════════════════════════
// ZONE DATA
// ═══════════════════════════════════════════════

var zones = [
  { icon:'🏠', name:'Private Office', color:'#A85E56',
    m:250, pct:50, note:'8–12 phòng (20–30m²/phòng) · anchor revenue cố định hàng tháng · 83 seats' },
  { icon:'💼', name:'Coworking / Hot Desk', color:'#E8B4AC',
    m:65, pct:13, note:'21 desks · tạo cộng đồng, funnel lên Private Office' },
  { icon:'🎤', name:'Event / Workshop', color:'#7A3F3C',
    m:45, pct:9, note:'30–40 người · doanh thu biến phí + marketing cộng đồng' },
  { icon:'📋', name:'Meeting Rooms', color:'#D4857A',
    m:30, pct:6, note:'3 phòng (8–10m²) · phục vụ thành viên & khách ngoài' },
  { icon:'🛎️', name:'Reception / Lounge', color:'#F2E0DC',
    m:25, pct:5, note:'Tiếp đón + sitting area + café nhỏ gọn' },
  { icon:'📊', name:'Biz Services (Tax, Legal, Grow)', color:'#9A7F7C',
    m:15, pct:3, note:'Góc tư vấn kiêm nhiệm · hoa hồng add-on' },
  { icon:'⚙️', name:'Back Office / Admin', color:'#7A5E5C',
    m:15, pct:3, note:'Kho + server + quản lý gọn nhẹ' },
  { icon:'🚪', name:'Circulation / WC / Storage', color:'#EDE0DE',
    m:55, pct:11, note:'Hành lang, WC, kho · tối ưu lưu thông' },
];

function renderZones() {
  var zoneContainer = document.getElementById('zone-rows');
  if (!zoneContainer || zoneContainer.hasChildNodes()) return;
  zones.forEach(function(z) {
    var row = document.createElement('div');
    row.className = 'zone-row';
    row.innerHTML =
      '<div class="zone-name">' +
        '<div class="zone-icon" style="background:' + z.color + '22;">' + z.icon + '</div>' +
        z.name +
      '</div>' +
      '<div class="zone-cell active-500">' +
        '<div class="zone-m2">' + z.m + 'm²</div>' +
        '<div class="zone-pct">' + z.pct + '% tổng diện tích</div>' +
        '<div class="zone-bar-bg"><div class="zone-bar" style="--w:' + (z.pct * 2) + '%;"></div></div>' +
        '<div class="zone-note">' + z.note + '</div>' +
      '</div>';
    zoneContainer.appendChild(row);
  });
}

// ═══════════════════════════════════════════════
// INITIAL LOAD — load default tab (intro)
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  loadTab('intro').then(function() {
    // Khởi tạo tab đang active trong HTML là intro
    document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
    var activeTabBtns = document.querySelectorAll('.tab[onclick*="intro"]');
    if(activeTabBtns.length > 0) activeTabBtns[0].classList.add('active');
  });
});