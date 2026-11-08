// Hyperquity Platform Interactive Controller
(function() {
  // Toast notifications
  window.showToast = function(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#0e2448] border border-cyan-500/40 text-neutral-100 text-sm shadow-xl font-mono';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <span class="size-2 rounded-full bg-cyan-400 animate-ping"></span>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  // Mobile menu toggle
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  }

  // Copy to clipboard
  function initCopyables() {
    document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('[data-copy]');
      if (copyBtn) {
        const text = copyBtn.getAttribute('data-copy');
        if (text) {
          navigator.clipboard.writeText(text).then(() => {
            window.showToast(`Copied: ${text.length > 20 ? text.slice(0, 16) + '...' : text}`);
          });
        }
      }
    });
  }

  // Launch page controller
  function initLaunchPage() {
    const launchForm = document.getElementById('launch-token-form');
    if (!launchForm) return;

    // Elements
    const nameInput = document.getElementById('token-name-input');
    const symbolInput = document.getElementById('token-symbol-input');
    const descInput = document.getElementById('token-desc-input');
    const leverageSlider = document.getElementById('leverage-slider');
    const leverageValue = document.getElementById('leverage-value');
    const directionLong = document.getElementById('direction-long');
    const directionShort = document.getElementById('direction-short');

    // Preview elements
    const previewSymbol = document.getElementById('preview-symbol');
    const previewName = document.getElementById('preview-name');
    const previewPosition = document.getElementById('preview-position');
    const previewLeverage = document.getElementById('preview-leverage');
    const previewMarket = document.getElementById('preview-market');
    const previewBadge = document.getElementById('preview-badge');

    let currentDirection = 'LONG';
    let currentMarket = 'BTC';
    let currentLeverage = leverageSlider ? leverageSlider.value : '5';

    function updatePreview() {
      const sym = symbolInput && symbolInput.value.trim() ? symbolInput.value.trim().toUpperCase() : 'TOKEN';
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'My Hyperquity Coin';
      
      if (previewSymbol) previewSymbol.textContent = '$' + sym;
      if (previewName) previewName.textContent = name;
      if (previewLeverage) previewLeverage.textContent = `${currentLeverage}x`;
      if (previewMarket) previewMarket.textContent = `${currentMarket}-PERP`;

      if (previewBadge) {
        previewBadge.textContent = `${currentLeverage}x ${currentDirection} ${currentMarket}`;
        if (currentDirection === 'LONG') {
          previewBadge.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30';
        } else {
          previewBadge.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30';
        }
      }
    }

    if (nameInput) nameInput.addEventListener('input', updatePreview);
    if (symbolInput) symbolInput.addEventListener('input', updatePreview);

    if (leverageSlider && leverageValue) {
      leverageSlider.addEventListener('input', (e) => {
        currentLeverage = e.target.value;
        leverageValue.textContent = `${currentLeverage}x`;
        updatePreview();
      });
    }

    if (directionLong && directionShort) {
      directionLong.addEventListener('click', () => {
        currentDirection = 'LONG';
        directionLong.classList.add('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/50');
        directionLong.classList.remove('bg-[#09172e]', 'text-neutral-400', 'border-neutral-800');
        directionShort.classList.remove('bg-rose-500/20', 'text-rose-400', 'border-rose-500/50');
        directionShort.classList.add('bg-[#09172e]', 'text-neutral-400', 'border-neutral-800');
        updatePreview();
      });

      directionShort.addEventListener('click', () => {
        currentDirection = 'SHORT';
        directionShort.classList.add('bg-rose-500/20', 'text-rose-400', 'border-rose-500/50');
        directionShort.classList.remove('bg-[#09172e]', 'text-neutral-400', 'border-neutral-800');
        directionLong.classList.remove('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/50');
        directionLong.classList.add('bg-[#09172e]', 'text-neutral-400', 'border-neutral-800');
        updatePreview();
      });
    }

    // Market selection pills
    document.querySelectorAll('.market-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.market-choice-btn').forEach(b => {
          b.classList.remove('border-cyan-500', 'bg-cyan-500/10', 'text-white');
          b.classList.add('border-neutral-800', 'bg-[#09172e]', 'text-neutral-300');
        });
        btn.classList.add('border-cyan-500', 'bg-cyan-500/10', 'text-white');
        btn.classList.remove('border-neutral-800', 'bg-[#09172e]', 'text-neutral-300');
        currentMarket = btn.dataset.market || 'BTC';
        updatePreview();
      });
    });

    // Form submit
    launchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submit-launch-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 size-4 text-white inline-block" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          Deploying to Solana & Hyperliquid...
        `;
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Launch token with position';
          window.showToast('🚀 Token successfully created and bound to Hyperliquid Perp!');
          setTimeout(() => {
            window.location.href = '/explore';
          }, 1500);
        }, 2200);
      }
    });

    updatePreview();
  }

  // Explore page search and filters
  function initExplorePage() {
    const searchInput = document.getElementById('token-search-input');
    const filterTabs = document.querySelectorAll('.explore-filter-tab');
    const tokenCards = document.querySelectorAll('.token-explore-card');

    if (!tokenCards.length) return;

    let activeFilter = 'all';
    let searchQuery = '';

    function filterCards() {
      tokenCards.forEach(card => {
        const name = (card.dataset.name || '').toLowerCase();
        const symbol = (card.dataset.symbol || '').toLowerCase();
        const direction = (card.dataset.direction || '').toLowerCase();
        const category = (card.dataset.category || '').toLowerCase();
        const leverage = parseInt(card.dataset.leverage || '1', 10);

        const matchesSearch = !searchQuery || name.includes(searchQuery) || symbol.includes(searchQuery);

        let matchesTab = true;
        if (activeFilter === 'longs') matchesTab = direction === 'long';
        else if (activeFilter === 'shorts') matchesTab = direction === 'short';
        else if (activeFilter === 'high') matchesTab = leverage >= 10;
        else if (activeFilter === 'trending') matchesTab = card.dataset.trending === 'true';

        if (matchesSearch && matchesTab) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        filterCards();
      });
    }

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => {
          t.classList.remove('bg-white', 'text-[#020713]');
          t.classList.add('bg-[#09172e]', 'text-neutral-300');
        });
        tab.classList.add('bg-white', 'text-[#020713]');
        tab.classList.remove('bg-[#09172e]', 'text-neutral-300');
        activeFilter = tab.dataset.filter || 'all';
        filterCards();
      });
    });
  }

  // Activity filter
  function initActivityPage() {
    const activityTabs = document.querySelectorAll('.activity-filter-tab');
    const activityRows = document.querySelectorAll('.activity-row');

    if (!activityRows.length) return;

    activityTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        activityTabs.forEach(t => {
          t.classList.remove('bg-white', 'text-[#020713]');
          t.classList.add('bg-[#09172e]', 'text-neutral-300');
        });
        tab.classList.add('bg-white', 'text-[#020713]');
        tab.classList.remove('bg-[#09172e]', 'text-neutral-300');
        const filter = tab.dataset.filter;

        activityRows.forEach(row => {
          if (filter === 'all' || row.dataset.type === filter) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }

  // Docs scrollspy
  function initDocsScrollspy() {
    const links = document.querySelectorAll('.docs-sidebar-link');
    const sections = document.querySelectorAll('section[id], h2[id]');
    if (!links.length || !sections.length) return;

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });

      links.forEach(link => {
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-cyan-400', 'font-semibold');
          link.classList.remove('text-neutral-400');
        } else {
          link.classList.remove('text-cyan-400', 'font-semibold');
          link.classList.add('text-neutral-400');
        }
      });
    });
  }

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initCopyables();
    initLaunchPage();
    initExplorePage();
    initActivityPage();
    initDocsScrollspy();
  });
})();
