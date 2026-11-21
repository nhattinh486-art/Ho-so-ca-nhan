(function () {
  const colors = [
    '249 146 253',
    '137 247 255',
    '255 157 199',
    '255 228 156',
    '252 254 255'
  ];
  const animations = ['fall-1', 'fall-2', 'fall-3'];
  const starGlyphs = ['✦', '✧', '✩', '✶'];

  let lastMousePosition = { x: 0, y: 0 };
  let lastStarTime = 0;
  let rafPending = false;
  let pendingCoords = null;

  const selectRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const calcDistance = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);

  function createGlowPoint(x, y) {
    const glow = document.createElement('div');
    glow.className = 'glow-point';
    const color = selectRandom(colors);
    glow.style.left = x + 'px';
    glow.style.top = y + 'px';
    glow.style.backgroundColor = `rgb(${color})`;
    glow.style.boxShadow = `0 0 10px 2px rgb(${color} / 0.8)`;
    document.body.appendChild(glow);
    setTimeout(() => glow.remove(), 400);
  }

  function createStar(x, y) {
    const star = document.createElement('span');
    const color = selectRandom(colors);
    const anim = selectRandom(animations);
    star.className = 'star';
    star.textContent = selectRandom(starGlyphs);
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.color = `rgb(${color})`;
    star.style.textShadow = `0 0 8px rgb(${color} / 0.75)`;
    star.style.animation = `${anim} 1500ms ease-out forwards`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1500);
  }

  function handleMove(x, y) {
    const now = Date.now();
    const current = { x, y };
    const dist = calcDistance(lastMousePosition, current);

    createGlowPoint(x, y);

    if (dist >= 42 || now - lastStarTime >= 90) {
      createStar(x, y);
      lastMousePosition = current;
      lastStarTime = now;
    }
  }

  function onPointerMove(e) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    pendingCoords = { x, y };

    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(() => {
        if (pendingCoords) {
          handleMove(pendingCoords.x, pendingCoords.y);
          pendingCoords = null;
        }
        rafPending = false;
      });
    }
  }

  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
})();
