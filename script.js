// ═══════════════════════════════════════════════
// TAB LOADING & SWITCHING
// ═══════════════════════════════════════════════

var tabFiles = {
  'intro':     'tabs/intro.html',
  'market':    'tabs/market.html',
  'zones':     'tabs/zones.html',
  'capex':     'tabs/capex.html',
  'revenue':   'tabs/revenue.html',
  'revtotal':  'tabs/revtotal.html',
  'breakeven': 'tabs/breakeven.html',
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
        container.innerHTML = html;
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
    m500:190, pct500:38, note500:'6–10 phòng (15–25m²/phòng) · recurring revenue cố định hàng tháng',
    m3000:1500, pct3000:50, note3000:'35–60 phòng · anchor dòng tiền toàn hub · ưu tiên mở rộng tối đa' },
  { icon:'💼', name:'Coworking / Hot Desk', color:'#E8B4AC',
    m500:80, pct500:16, note500:'20–28 desks · tạo cộng đồng, funnel lên Private Office',
    m3000:300, pct3000:10, note3000:'75–100 desks · cộng đồng rộng, upsell membership & PO' },
  { icon:'🤝', name:'Dedicated Desk', color:'#C97B72',
    m500:0, pct500:0, note500:'Không triển khai — tích hợp vào coworking',
    m3000:150, pct3000:5, note3000:'30–40 desk cố định theo tháng · bridge giữa flex và PO' },
  { icon:'🎤', name:'Event / Workshop / Hall', color:'#7A3F3C',
    m500:60, pct500:12, note500:'40–60 người · doanh thu biến phí + marketing cộng đồng',
    m3000:240, pct3000:8, note3000:'Hội trường 120–200 người · pitching day, hội thảo doanh nghiệp' },
  { icon:'📋', name:'Meeting Rooms', color:'#D4857A',
    m500:35, pct500:7, note500:'3 phòng (8–12m²) · phục vụ thành viên, không phải trọng tâm',
    m3000:120, pct3000:4, note3000:'8 phòng nhỏ · tiện ích đi kèm membership, nhỏ hơn Event Hall' },
  { icon:'🛎️', name:'Reception / Lounge / Café', color:'#F2E0DC',
    m500:30, pct500:6, note500:'Tiếp đón + sitting area nhỏ gọn',
    m3000:150, pct3000:5, note3000:'Café kinh doanh + lounge đại diện thương hiệu' },
  { icon:'📊', name:'Biz Services (Tax, Legal, Grow)', color:'#9A7F7C',
    m500:20, pct500:4, note500:'Góc tư vấn kiêm nhiệm · hoa hồng add-on',
    m3000:120, pct3000:4, note3000:'Phòng chuyên biệt từng nhóm dịch vụ · 84+ add-ons' },
  { icon:'📣', name:'Biz Promote / Pitching / Showroom', color:'#5C2E2C',
    m500:0, pct500:0, note500:'Không triển khai — quy mô quá nhỏ',
    m3000:120, pct3000:4, note3000:'Pitching zone + showroom + kết nối M&A, đầu tư' },
  { icon:'🏋️', name:'Wellness / Gym / Relax', color:'#B0856A',
    m500:0, pct500:0, note500:'Không có',
    m3000:90, pct3000:3, note3000:'Giá trị gia tăng cho thành viên dài hạn, giảm churn PO' },
  { icon:'⚙️', name:'Back Office / Admin / IT', color:'#7A5E5C',
    m500:20, pct500:4, note500:'Kho + server + quản lý gọn nhẹ',
    m3000:90, pct3000:3, note3000:'IT room + kho + admin vận hành đa tầng' },
  { icon:'🚪', name:'Circulation / WC / Storage', color:'#EDE0DE',
    m500:65, pct500:13, note500:'Hành lang, cầu thang, WC, kho · tối ưu để nhường cho PO',
    m3000:120, pct3000:4, note3000:'Multi-floor corridors + WC mỗi tầng · tối ưu lưu thông' },
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
      '<div class="zone-cell c500 ' + (z.m500 > 0 ? 'active-500' : '') + '">' +
        (z.m500 > 0
          ? '<div class="zone-m2">' + z.m500 + 'm²</div>' +
            '<div class="zone-pct">' + z.pct500 + '% tổng diện tích</div>' +
            '<div class="zone-bar-bg"><div class="zone-bar" style="--w:' + (z.pct500 * 3.33) + '%;"></div></div>'
          : '<div style="font-size:12px;color:var(--muted);font-style:italic;">—</div>') +
        '<div class="zone-note">' + z.note500 + '</div>' +
      '</div>' +
      '<div class="zone-cell c3000 ' + (z.m3000 > 0 ? 'active-3000' : '') + '">' +
        (z.m3000 > 0
          ? '<div class="zone-m2">' + z.m3000 + 'm²</div>' +
            '<div class="zone-pct">' + z.pct3000 + '% tổng diện tích</div>' +
            '<div class="zone-bar-bg"><div class="zone-bar bar-3000" style="--w:' + (z.pct3000 * 3.33) + '%;"></div></div>'
          : '<div style="font-size:12px;color:var(--muted);font-style:italic;">—</div>') +
        '<div class="zone-note">' + z.note3000 + '</div>' +
      '</div>';
    zoneContainer.appendChild(row);
  });
}

// ═══════════════════════════════════════════════
// INITIAL LOAD — load default tab (zones)
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  loadTab('zones').then(function() {
    renderZones();
    // Khởi tạo tab đang active trong HTML là zones
    document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
    var activeTabBtns = document.querySelectorAll('.tab[onclick*="zones"]');
    if(activeTabBtns.length > 0) activeTabBtns[0].classList.add('active');
  });
});