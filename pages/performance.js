import { useEffect } from "react";

export default function PerformancePage() {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      document.body.appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: 'et1htc-1n.myshopify.com',
        storefrontAccessToken: '1775a4b549ead702f7f831cc95b3f176',
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        // Pre-workout
        ui.createComponent('product', {
          id: '10235282555197',
          node: document.getElementById('preworkout-buy-button'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
        });

        // Creatine
        ui.createComponent('product', {
          id: '10235280359741',
          node: document.getElementById('creatine-buy-button'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
        });
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'black', color: 'white', padding: '80px 24px' }}>
      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: '0 auto 80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '56px', letterSpacing: '0.25em', fontWeight: 300 }}>
          PERFORMANCE
        </h1>
        <p style={{ marginTop: 24, color: '#9ca3af', maxWidth: 520, marginInline: 'auto' }}>
          Precision supplements engineered to elevate strength, focus, and training intensity after dark.
        </p>
      </section>

      {/* Pre-Workout */}
      <section style={{ textAlign: 'center', marginTop: 60 }}>
        <h2 style={{ fontSize: 28, marginBottom: 30 }}>Pre‑Workout</h2>
        <div id="preworkout-buy-button" style={{ display: 'flex', justifyContent: 'center' }} />
      </section>

      {/* Creatine */}
      <section style={{ textAlign: 'center', marginTop: 80 }}>
        <h2 style={{ fontSize: 28, marginBottom: 30 }}>Creatine Monohydrate</h2>
        <div id="creatine-buy-button" style={{ display: 'flex', justifyContent: 'center' }} />
      </section>
    </div>
  );
}
