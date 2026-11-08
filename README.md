# Hyperquity ($HYPERQUITY)

<div align="center">
  <h3>Coins with a leveraged trade inside.</h3>
  <p>Launch on Solana (Float / Raydium) and bind to automated perpetual futures on Hyperliquid (1x to 20x Long or Short).</p>
  <p>
    <a href="https://hyperquity.fun">Website</a> •
    <a href="https://x.com/hyperquity">Twitter / X</a> •
    <a href="https://app.hyperliquid.xyz">Hyperliquid</a>
  </p>
</div>

---

## ⚡ Overview

**Hyperquity** (`$HYPERQUITY`) is a next-generation token launchpad bridging Solana liquidity to high-leverage perpetual futures on Hyperliquid.

Every token created on Hyperquity is permanently paired with a dedicated Hyperliquid perpetual position (1x to 20x leverage, Long or Short). 

### The Automated Fee Loop
1. **Launch on Solana**: Coins launch on Float/Raydium paired with SOL or USDC. Direction, market, and leverage are locked at token genesis.
2. **Trading Fees Feed Margin**: 50% of all swap fees on Solana are automatically claimed in real-time and bridged to Hyperliquid isolated margin.
3. **+20% Buys Back & Burns**: When the perpetual reaches +20% unrealized PnL, the engine takes profit, bridges USDC back to Solana, purchases the native token from the pool, and permanently burns it.

---

## 📂 Architecture & Pages

- **`/` (`index.html`)**: Landing page with custom `HYPER[Q]UITY` wordmark, live Hyperliquid perp marquee, animated equity curve, fee loop breakdown, and protocol counters.
- **`/explore` (`explore.html`)**: Token explorer with search and category filters (Trending, Longs, Shorts, 10x-20x High Leverage).
- **`/launch` (`launch.html`)**: Interactive 4-step wizard for configuring token metadata, pairing, direction, leverage slider, and live summary card.
- **`/stats` (`stats.html`)**: Protocol overview dashboard and live table of active positions on Hyperliquid.
- **`/activity` (`activity.html`)**: Real-time ledger of fee claims, cross-chain bridges, margin deposits, and buyback & burn events.
- **`/docs` (`docs.html`)**: Technical documentation covering the fee loop, margin mechanics, contracts, parameters, and risk disclosures.
- **`/brand` (`brand.html`)**: Brand guidelines, color system, typography, vector mark downloads, and social copyables.

---

## 🚀 Local Development

To run locally:

```bash
# Using Python built-in HTTP server
python -m http.server 8000

# Or using npx serve
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## 🌐 Deployment to Vercel

The project includes `vercel.json` with zero-config clean URL rewrites:
- Deploy instantly via Vercel CLI:
  ```bash
  vercel --prod
  ```
- Or link the repository `WerelayAgent/hyperquity` directly in the Vercel dashboard.

---

## 📜 License

MIT License.
