// Hyperquity Solana Web3 Wallet Controller
(function() {
  const WALLET_KEY = 'hyperquity_solana_wallet';

  function getStoredWallet() {
    return localStorage.getItem(WALLET_KEY);
  }

  function setStoredWallet(address) {
    if (address) {
      localStorage.setItem(WALLET_KEY, address);
    } else {
      localStorage.removeItem(WALLET_KEY);
    }
  }

  function formatAddress(addr) {
    if (!addr || addr.length < 10) return addr;
    return addr.slice(0, 4) + '...' + addr.slice(-4);
  }

  function generateMockAddress() {
    const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let res = 'Hyp';
    for (let i = 0; i < 40; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
  }

  function updateWalletUI(address) {
    const buttons = document.querySelectorAll('.wallet-connect-btn');
    buttons.forEach(btn => {
      if (address) {
        btn.innerHTML = `
          <span class="inline-block size-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
          <span>${formatAddress(address)}</span>
        `;
        btn.classList.add('connected');
        btn.title = `Connected: ${address}\nClick to disconnect`;
      } else {
        btn.innerHTML = 'Connect wallet';
        btn.classList.remove('connected');
        btn.title = 'Connect Solana Wallet';
      }
    });
  }

  function createWalletModal() {
    if (document.getElementById('wallet-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'wallet-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 modal-backdrop hidden transition-opacity duration-200';
    modal.innerHTML = `
      <div class="relative w-full max-w-sm rounded-2xl border border-neutral-800 bg-[#050f22] p-6 shadow-2xl transition-all">
        <button id="close-wallet-modal" class="absolute right-4 top-4 text-neutral-400 hover:text-white transition">
          <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <div class="flex items-center gap-3 mb-6">
          <div class="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-neutral-100">Connect Solana Wallet</h3>
            <p class="text-xs text-neutral-400">Choose your preferred Solana provider</p>
          </div>
        </div>
        <div class="space-y-2.5">
          <button class="wallet-option w-full flex items-center justify-between p-3.5 rounded-xl border border-neutral-800 bg-[#09172e] hover:border-neutral-600 hover:bg-[#0c1e3d] transition group text-left" data-provider="phantom">
            <div class="flex items-center gap-3">
              <div class="size-8 rounded-lg bg-[#ab9ff2]/20 flex items-center justify-center font-bold text-[#ab9ff2] text-sm">P</div>
              <div>
                <div class="text-sm font-semibold text-neutral-200 group-hover:text-white">Phantom</div>
                <div class="text-[11px] text-neutral-400">Solana & Web3 Standard</div>
              </div>
            </div>
            <span class="text-xs font-mono text-neutral-400 group-hover:text-cyan-400">→</span>
          </button>
          <button class="wallet-option w-full flex items-center justify-between p-3.5 rounded-xl border border-neutral-800 bg-[#09172e] hover:border-neutral-600 hover:bg-[#0c1e3d] transition group text-left" data-provider="solflare">
            <div class="flex items-center gap-3">
              <div class="size-8 rounded-lg bg-orange-500/20 flex items-center justify-center font-bold text-orange-400 text-sm">S</div>
              <div>
                <div class="text-sm font-semibold text-neutral-200 group-hover:text-white">Solflare</div>
                <div class="text-[11px] text-neutral-400">Direct Ledger & Browser Extension</div>
              </div>
            </div>
            <span class="text-xs font-mono text-neutral-400 group-hover:text-cyan-400">→</span>
          </button>
          <button class="wallet-option w-full flex items-center justify-between p-3.5 rounded-xl border border-neutral-800 bg-[#09172e] hover:border-neutral-600 hover:bg-[#0c1e3d] transition group text-left" data-provider="backpack">
            <div class="flex items-center gap-3">
              <div class="size-8 rounded-lg bg-red-500/20 flex items-center justify-center font-bold text-red-400 text-sm">B</div>
              <div>
                <div class="text-sm font-semibold text-neutral-200 group-hover:text-white">Backpack</div>
                <div class="text-[11px] text-neutral-400">xNFT & Solana Mobile</div>
              </div>
            </div>
            <span class="text-xs font-mono text-neutral-400 group-hover:text-cyan-400">→</span>
          </button>
        </div>
        <div class="mt-5 pt-4 border-t border-neutral-800 text-center">
          <p class="text-[11px] text-neutral-500">By connecting, you agree to Hyperquity terms of service and protocol fee rules.</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Event listeners
    document.getElementById('close-wallet-modal').addEventListener('click', closeWalletModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeWalletModal();
    });

    modal.querySelectorAll('.wallet-option').forEach(btn => {
      btn.addEventListener('click', async () => {
        const provider = btn.dataset.provider;
        await handleWalletConnect(provider);
      });
    });
  }

  function openWalletModal() {
    createWalletModal();
    const modal = document.getElementById('wallet-modal');
    modal.classList.remove('hidden');
  }

  function closeWalletModal() {
    const modal = document.getElementById('wallet-modal');
    if (modal) modal.classList.add('hidden');
  }

  async function handleWalletConnect(providerName) {
    let address = null;
    if (window.solana && window.solana.isPhantom && providerName === 'phantom') {
      try {
        const resp = await window.solana.connect();
        address = resp.publicKey.toString();
      } catch (err) {
        console.warn('Phantom connect cancelled or failed, falling back:', err);
      }
    }

    if (!address) {
      address = generateMockAddress();
    }

    setStoredWallet(address);
    updateWalletUI(address);
    closeWalletModal();
    if (window.showToast) {
      window.showToast(`Connected to ${address.slice(0, 4)}...${address.slice(-4)}`);
    }
  }

  function handleWalletDisconnect() {
    setStoredWallet(null);
    updateWalletUI(null);
    if (window.showToast) {
      window.showToast('Wallet disconnected');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    createWalletModal();
    const current = getStoredWallet();
    updateWalletUI(current);

    document.querySelectorAll('.wallet-connect-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const addr = getStoredWallet();
        if (addr) {
          if (confirm(`Disconnect wallet ${formatAddress(addr)}?`)) {
            handleWalletDisconnect();
          }
        } else {
          openWalletModal();
        }
      });
    });
  });

  window.HyperquityWallet = {
    getAddress: getStoredWallet,
    openModal: openWalletModal,
    disconnect: handleWalletDisconnect
  };
})();
