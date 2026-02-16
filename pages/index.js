import { useEffect } from "react";

export default function AfterdarkHomepage() {
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
        ui.createComponent('product', {
          id: '10235278197053',
          node: document.getElementById('product-component-1771231113230'),
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
    <main style={{ minHeight: '100vh', background: 'black', color: 'white', fontFamily: 'sans-serif' }}>
      {/* Hero */}
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '0 24px' }}>
        <div>
          <h1 style={{ fontSize: '64px', letterSpacing: '0.25em', fontWeight: 300 }}>
            AFTERDARK
          </h1>
          <p style={{ marginTop: '24px', fontSize: '18px', color: '#9ca3af', letterSpacing: '0.2em' }}>
            BUILT AFTER DARK.
          </p>
        </div>
      </section>

      {/* Buy Button Section */}
      <section style={{ padding: '96px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '40px' }}>Shop Whey Protein</h2>
        <div id="product-component-1771231113230" style={{ display: 'flex', justifyContent: 'center' }} />
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', color: '#6b7280', fontSize: '14px', paddingBottom: '40px' }}>
        © {new Date().getFullYear()} AFTERDARK. All rights reserved.
      </footer>
    </main>
  );
}
