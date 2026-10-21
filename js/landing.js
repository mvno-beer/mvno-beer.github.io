(() => {
  const stage = document.getElementById('stage');
  const bubbles = stage.querySelector('.beer__bubbles');
  const replay = stage.querySelector('.replay');

  // scene start times in ms (keep in sync with --t-* in css/landing.css)
  const TIMELINE = [
    [1, 0],    // bottle + opener
    [2, 1100], // cap pops, foam bursts
    [3, 2000], // bottle + opener fly up, beer rises
    [4, 3600], // beer settled, copy shows
  ];

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timers = [];

  function spawnBubbles() {
    const count = window.innerWidth < 640 ? 22 : 44;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const b = document.createElement('span');
      const d = 4 + Math.random() * 6;
      b.className = 'bubble';
      b.style.left = `${Math.random() * 100}%`;
      b.style.setProperty('--s', `${4 + Math.random() * 12}px`);
      b.style.setProperty('--d', `${d}s`);
      b.style.setProperty('--delay', `${-Math.random() * d}s`);
      b.style.setProperty('--w', `${(Math.random() - .5) * 24}px`);
      frag.appendChild(b);
    }
    bubbles.replaceChildren(frag);
  }

  function play() {
    timers.forEach(clearTimeout);
    timers = [];

    // ?scene=N freezes a scene (design review / screenshots)
    const fixed = new URLSearchParams(location.search).get('scene');
    if (reduceMotion || fixed) {
      stage.dataset.scene = fixed || '4';
      return;
    }

    // restart CSS animations from scene 1
    stage.classList.add('is-resetting');
    stage.dataset.scene = '0';
    void stage.offsetWidth;
    stage.classList.remove('is-resetting');

    TIMELINE.forEach(([scene, at]) => {
      timers.push(setTimeout(() => { stage.dataset.scene = String(scene); }, at));
    });
  }

  spawnBubbles();
  play();
  replay.addEventListener('click', play);
})();
