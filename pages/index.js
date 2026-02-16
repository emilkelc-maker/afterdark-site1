"use client";

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
      const client = (window as any).ShopifyBuy.buildClient({
        domain: 'et1htc-1n.myshopify.com',
        storefrontAccessToken: '1775a4b549ead702f7f831cc95b3f176',
      });

      (window as any).ShopifyBuy.UI.onReady(client).then((ui: any) => {
        ui.createComponent('product', {
          id: '10235278197053',
          node: document.getElementById('product-component-1771231113230'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
        });
      });
    }

    if ((window as any).ShopifyBuy) {
      if ((window as any).ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex items-center justify-center min-h-screen text-center px-6">
        <div>
          <h1 className="text-6xl md:text-8xl tracking-[0.25em] font-light">
            AFTERDARK
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 tracking-[0.2em]">
            BUILT AFTER DARK.
          </p>
        </div>
      </section>

      {/* Buy Button Section */}
      <section className="py-24 text-center">
        <h2 className="text-3xl mb-10">Shop Whey Protein</h2>
        <div id="product-component-1771231113230" className="flex justify-center" />
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm pb-10">
        © {new Date().getFullYear()} AFTERDARK. All rights reserved.
      </footer>
    </main>
  );
}
