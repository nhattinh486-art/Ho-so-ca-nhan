(function () {
  const tipsEl = document.getElementById('waifu-tips');
  const toggleBtn = document.getElementById('waifu-toggle');
  let tipTimer = null;

  const clickTips = [
    'Meow~ Đừng chọc tui nữa mà! 🐾',
    'Chào bạn, chúc một ngày tốt lành nhé! ✨',
    'Code chạy mượt không bạn ơi? 💻',
    'Uống ngụm nước rồi code tiếp nha! 💧',
    'Nhật Tình đẹp trai số 1 vũ trụ! 🐳'
  ];

  function showWaifuTip(text, duration = 4200) {
    if (!tipsEl || document.body.classList.contains('hide-pets')) return;
    tipsEl.textContent = text;
    tipsEl.classList.add('active');
    clearTimeout(tipTimer);
    tipTimer = setTimeout(() => {
      tipsEl.classList.remove('active');
    }, duration);
  }

  window.showWaifuTip = showWaifuTip;

  // Initialize Live2D Hijiki Black Cat
  function initLive2D() {
    if (typeof L2Dwidget === 'undefined') return;
    try {
      L2Dwidget.init({
        model: {
          jsonPath: 'https://cdn.jsdelivr.net/npm/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json',
          scale: 1
        },
        display: {
          position: 'left',
          width: 170,
          height: 300,
          hOffset: 0,
          vOffset: -20
        },
        mobile: {
          show: true,
          scale: 0.65
        },
        react: {
          opacityDefault: 0.95,
          opacityOnHover: 1
        }
      });
    } catch (e) {
      console.warn('Live2D init skipped:', e);
    }
  }

  // Spawn 4 rising sparkle squares on floor
  function initFloorSparkles() {
    const offsets = [26, 54, 92, 124];
    offsets.forEach((left, i) => {
      const sp = document.createElement('div');
      sp.className = 'waifu-sparkle';
      sp.style.left = left + 'px';
      sp.style.bottom = '24px';
      sp.style.animationDelay = `${i * 0.55}s`;
      document.body.appendChild(sp);
    });
  }

  // Idle tips at 15s and 45s
  setTimeout(() => showWaifuTip('Bạn nhớ uống nước nha. 💧', 4500), 15000);
  setTimeout(() => showWaifuTip('Trang này xịn đó chứ! ✨', 4500), 45000);

  // Click on Live2D widget
  document.addEventListener('click', (e) => {
    const widget = document.getElementById('live2d-widget');
    if (widget && widget.contains(e.target)) {
      const msg = clickTips[Math.floor(Math.random() * clickTips.length)];
      showWaifuTip(msg, 3800);
    }
  });

  // Toggle pets visibility
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const hidden = document.body.classList.toggle('hide-pets');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = hidden ? 'ri-eye-line' : 'ri-bear-smile-line';
      }
      if (typeof FuiToast !== 'undefined') {
        FuiToast.info(hidden ? 'Đã ẩn thú cưng!' : 'Đã hiện thú cưng trở lại! 🐾');
      }
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    initLive2D();
    initFloorSparkles();
  });
})();
