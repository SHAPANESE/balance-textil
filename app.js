import { animate, stagger } from 'https://cdn.jsdelivr.net/npm/motion@13.3.0/+esm';

const products = [
  { id: 1, name: 'REMERA REGULAR', type: 'ALGODÓN 24.1 / UNISEX', category: 'REMERAS', price: null, colors: ['#fafafa', '#181818', '#b6b5af'], colorNames: ['BLANCO', 'NEGRO', 'GRIS MELANGE'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'tee' },
  { id: 2, name: 'REMERA OVERSIZE', type: 'ALGODÓN 24.1 / UNISEX', category: 'REMERAS', price: null, colors: ['#1d1d1d', '#f8f8f4', '#747873'], colorNames: ['NEGRO', 'BLANCO', 'VERDE MILITAR'], sizes: ['S', 'M', 'L', 'XL'], image: 'core' },
  { id: 3, name: 'MUSCULOSA OVERSIZE', type: 'ALGODÓN 24.1 / UNISEX', category: 'REMERAS', price: null, colors: ['#181818', '#fafafa', '#182b4c'], colorNames: ['NEGRO', 'BLANCO', 'AZUL MARINO'], sizes: ['S', 'M', 'L', 'XL'], image: 'tee' },
  { id: 4, name: 'BERMUDA OVERSIZE', type: 'RÚSTICO PEINADO', category: 'OTROS', price: null, colors: ['#222222', '#8f8f8c'], colorNames: ['NEGRO', 'GRIS'], sizes: ['S', 'M', 'L', 'XL'], image: 'core' },
  { id: 5, name: 'REMERA CORTE MUJER', type: 'ALGODÓN 24.1', category: 'REMERAS', price: null, colors: ['#fafafa', '#181818', '#e4ddc7'], colorNames: ['BLANCO', 'NEGRO', 'NATURAL'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'tee' },
  { id: 6, name: 'PUPERA OVERSIZE', type: 'ALGODÓN 24.1', category: 'REMERAS', price: null, colors: ['#fafafa', '#e4ddc7', '#181818'], colorNames: ['BLANCO', 'NATURAL', 'NEGRO'], sizes: ['ÚNICO'], image: 'core' },
  { id: 7, name: 'CHOMBA', type: 'PIQUÉ PEINADO', category: 'OTROS', price: null, colors: ['#fafafa', '#181818', '#182b4c'], colorNames: ['BLANCO', 'NEGRO', 'AZUL MARINO'], sizes: ['2', '3', '4', '5', '6', '8'], image: 'tee' },
  { id: 8, name: 'REMERA DE NIÑOS', type: 'ALGODÓN 24.1', category: 'OTROS', price: null, colors: ['#fafafa', '#181818', '#125196'], colorNames: ['BLANCO', 'NEGRO', 'AZUL FRANCIA'], sizes: ['4', '6', '8', '10', '12', '14', '16'], image: 'tee' },
  { id: 9, name: 'BUZO REGULAR', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#181818', '#182b4c', '#9c9c96'], colorNames: ['NEGRO', 'AZUL MARINO', 'GRIS MELANGE'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'hoodie' },
  { id: 10, name: 'BUZO OVERSIZE', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#181818', '#e4ddc7', '#552f27'], colorNames: ['NEGRO', 'NATURAL', 'CHOCOLATE'], sizes: ['S', 'M', 'L', 'XL'], image: 'hoodie' },
  { id: 11, name: 'BUZO CUELLO REDONDO', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#181818', '#e4ddc7', '#b9b9b5'], colorNames: ['NEGRO', 'NATURAL', 'GRIS'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'hoodie' },
  { id: 12, name: 'CAMPERA DE FRIZA', type: 'INVISIBLE PREMIUM', category: 'BUZOS', price: null, colors: ['#181818', '#182b4c', '#898d82'], colorNames: ['NEGRO', 'AZUL MARINO', 'VERDE INGLÉS'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'hoodie' }
];
const money = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
const priceLabel = (price) => price ? money.format(price) : 'COTIZAR';
const whatsappNumber = '5422622319015';
products.splice(0, products.length,
  { id: 101, name: 'REMERA REGULAR', type: 'ALGODÓN 24.1 / UNISEX', category: 'REMERAS', price: null, colors: ['#181818'], colorNames: ['NEGRO'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'tee', asset: './assets/products/p4-0.png' },
  { id: 102, name: 'REMERA REGULAR', type: 'ALGODÓN 24.1 / UNISEX', category: 'REMERAS', price: null, colors: ['#f7f7f2'], colorNames: ['BLANCO'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'tee', asset: './assets/products/p4-1.png' },
  { id: 103, name: 'REMERA REGULAR', type: 'ALGODÓN 24.1 / UNISEX', category: 'REMERAS', price: null, colors: ['#b5b5b0'], colorNames: ['GRIS MELANGE'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'tee', asset: './assets/products/p4-2.png' },
  { id: 104, name: 'REMERA OVERSIZE', type: 'ALGODÓN 24.1 / UNISEX', category: 'REMERAS', price: null, colors: ['#181818'], colorNames: ['NEGRO'], sizes: ['S', 'M', 'L', 'XL'], image: 'core', asset: './assets/products/p11-0.png' },
  { id: 105, name: 'REMERA OVERSIZE', type: 'ALGODÓN 24.1 / UNISEX', category: 'REMERAS', price: null, colors: ['#f7f7f2'], colorNames: ['BLANCO'], sizes: ['S', 'M', 'L', 'XL'], image: 'core', asset: './assets/products/p11-1.png' },
  { id: 106, name: 'BUZO REGULAR', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#181818'], colorNames: ['NEGRO'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'hoodie', asset: './assets/products/p35-0.png' },
  { id: 107, name: 'BUZO REGULAR', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#172d49'], colorNames: ['AZUL MARINO'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'hoodie', asset: './assets/products/p35-1.png' },
  { id: 108, name: 'BUZO REGULAR', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#b5b5b0'], colorNames: ['GRIS MELANGE'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'hoodie', asset: './assets/products/p35-2.png' },
  { id: 109, name: 'BUZO OVERSIZE', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#181818'], colorNames: ['NEGRO'], sizes: ['S', 'M', 'L', 'XL'], image: 'hoodie', asset: './assets/products/p37-0.png' },
  { id: 110, name: 'BUZO OVERSIZE', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#e5ddd1'], colorNames: ['NATURAL'], sizes: ['S', 'M', 'L', 'XL'], image: 'hoodie', asset: './assets/products/p37-1.png' },
  { id: 111, name: 'BUZO CUELLO REDONDO', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#181818'], colorNames: ['NEGRO'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'hoodie', asset: './assets/products/p40-0.png' },
  { id: 112, name: 'CAMPERA DE FRIZA', type: 'INVISIBLE PREMIUM', category: 'BUZOS', price: null, colors: ['#181818'], colorNames: ['NEGRO'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], image: 'hoodie', asset: './assets/products/p41-0.png' }
);
products.splice(0, products.length,
  { id: 1, name: 'REMERA REGULAR', type: 'ALGODÓN 24.1 / UNISEX', category: 'REMERAS REGULAR', price: null, colors: ['#181818','#f7f7f2','#b5b5b0'], colorNames: ['NEGRO','BLANCO','GRIS MELANGE'], sizes: ['S','M','L','XL','XXL'], image: 'tee', images: ['./assets/products/p4-0.png','./assets/products/p4-1.png','./assets/products/p4-2.png'] },
  { id: 2, name: 'REMERA OVERSIZE', type: 'ALGODÓN 24.1 / UNISEX', category: 'OVERSIZE', price: null, colors: ['#181818','#f7f7f2'], colorNames: ['NEGRO','BLANCO'], sizes: ['S','M','L','XL'], image: 'core', images: ['./assets/products/p11-0.png','./assets/products/p11-1.png'] },
  { id: 3, name: 'BUZO REGULAR', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#181818','#172d49','#b5b5b0'], colorNames: ['NEGRO','AZUL MARINO','GRIS MELANGE'], sizes: ['S','M','L','XL','XXL'], image: 'hoodie', images: ['./assets/products/p35-0.png','./assets/products/p35-1.png','./assets/products/p35-2.png'] },
  { id: 4, name: 'BUZO OVERSIZE', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#181818','#e5ddd1','#704646'], colorNames: ['NEGRO','NATURAL','BORDO'], sizes: ['S','M','L','XL'], image: 'hoodie', images: ['./assets/products/p37-0.png','./assets/products/p37-1.png','./assets/products/p37-2.png'] },
  { id: 5, name: 'CUELLO REDONDO', type: 'FRIZA PREMIUM', category: 'BUZOS', price: null, colors: ['#181818','#e5ddd1','#b5b5b0'], colorNames: ['NEGRO','NATURAL','GRIS'], sizes: ['S','M','L','XL','XXL'], image: 'hoodie', images: ['./assets/products/p40-0.png','./assets/products/p40-1.png','./assets/products/p40-2.png'] },
  { id: 6, name: 'CAMPERA DE FRIZA', type: 'INVISIBLE PREMIUM', category: 'BUZOS', price: null, colors: ['#181818','#172d49','#8a8c82'], colorNames: ['NEGRO','AZUL MARINO','VERDE INGLÉS'], sizes: ['S','M','L','XL','XXL'], image: 'hoodie', images: ['./assets/products/p41-0.png','./assets/products/p41-1.png','./assets/products/p41-2.png'] },
  { id: 7, name: 'BERMUDA OVERSIZE', type: 'RÚSTICO PEINADO', category: 'BERMUDAS', price: null, colors: ['#181818'], colorNames: ['NEGRO'], sizes: ['S','M','L','XL'], image: 'core', images: ['./assets/catalog/page-17.png'] },
  { id: 8, name: 'REMERA CORTE MUJER', type: 'ALGODÓN 24.1', category: 'MUJER', price: null, colors: ['#fafafa'], colorNames: ['BLANCO'], sizes: ['S','M','L','XL','XXL'], image: 'tee', images: ['./assets/catalog/page-20.png'] },
  { id: 9, name: 'CHOMBA', type: 'PIQUÉ PEINADO', category: 'CHOMBAS', price: null, colors: ['#181818'], colorNames: ['NEGRO'], sizes: ['2','3','4','5','6','8'], image: 'tee', images: ['./assets/products/p26-0.png'] },
  { id: 10, name: 'REMERA DE NIÑOS', type: 'ALGODÓN 24.1', category: 'NIÑOS', price: null, colors: ['#fafafa'], colorNames: ['BLANCO'], sizes: ['4','6','8','10','12','14','16'], image: 'tee', images: ['./assets/catalog/page-30.png'] }
);
const catalogImage = (product, colorIndex = 0) => product.images?.[colorIndex] || product.asset;
const sizeGuides = {
  1: { headers: ['TALLE', 'ANCHO', 'LARGO'], rows: [['S','47 cm','67 cm'],['M','49 cm','69 cm'],['L','53 cm','72 cm'],['XL','55 cm','74 cm'],['XXL','58 cm','76 cm']] },
  2: { headers: ['TALLE', 'ANCHO', 'LARGO'], rows: [['S','57 cm','78 cm'],['M','59 cm','80 cm'],['L','62 cm','82 cm'],['XL','65 cm','84 cm']] },
  3: { headers: ['TALLE', 'ANCHO', 'LARGO'], rows: [['S','50 cm','67 cm'],['M','53 cm','70 cm'],['L','56 cm','73 cm'],['XL','59 cm','74 cm'],['XXL','63 cm','79 cm']] },
  4: { headers: ['TALLE', 'ANCHO', 'LARGO'], rows: [['S','62 cm','67 cm'],['M','64 cm','70 cm'],['L','66 cm','73 cm'],['XL','68 cm','76 cm']] },
  5: { headers: ['TALLE', 'ANCHO', 'LARGO'], rows: [['S','52 cm','68 cm'],['M','54 cm','70 cm'],['L','57 cm','73 cm'],['XL','59 cm','76 cm'],['XXL','62 cm','79 cm']] },
  6: { headers: ['TALLE', 'ANCHO', 'LARGO'], rows: [['S','50 cm','67 cm'],['M','53 cm','70 cm'],['L','57 cm','75 cm'],['XL','59 cm','77 cm'],['XXL','64 cm','80 cm']] },
  7: { headers: ['TALLE', 'CINTURA', 'LARGO'], rows: [['S','40 cm','42 cm'],['M','45 cm','45 cm'],['L','50 cm','51 cm'],['XL','55 cm','54 cm']] },
  8: { headers: ['TALLE', 'ANCHO', 'LARGO'], rows: [['S','42 cm','60 cm'],['M','45 cm','63 cm'],['L','47 cm','65 cm'],['XL','50 cm','69 cm'],['XXL','52 cm','70 cm']] },
  10: { headers: ['TALLE', 'ANCHO', 'LARGO'], rows: [['4','33 cm','43 cm'],['6','35 cm','45 cm'],['8','37 cm','51 cm'],['10','39 cm','53 cm'],['12','41 cm','55 cm'],['14','43 cm','63 cm'],['16','45 cm','64 cm']] }
};
const productGrid = document.querySelector('#products');
const cart = document.querySelector('#cart');
const overlay = document.querySelector('#overlay');
const sectionFilters = ['TODOS', 'REMERAS REGULAR', 'OVERSIZE', 'BERMUDAS', 'MUJER', 'CHOMBAS', 'NIÑOS', 'BUZOS'];
document.querySelector('.tools').innerHTML = `${sectionFilters.map((section, index) => `<button class="${index === 0 ? 'active' : ''}">${section}</button>`).join('')}<button class="search">COTIZAR　↗</button>`;
const filterButtons = [...document.querySelectorAll('.tools button:not(.search)')];
let bag = [];
let activeFilter = 'TODOS';
let quickSelection = null;
const selectedCardColors = new Map();

const uxStyle = document.createElement('style');
uxStyle.textContent = `
  :focus-visible { outline: 2px solid #111; outline-offset: 3px; }
  a, a:link, a:visited, a:hover, a:active { color: inherit !important; -webkit-text-fill-color: currentColor; }
  a, button { -webkit-tap-highlight-color: transparent; }
  .hero-link, .hero-link:link, .hero-link:visited, .hero-link:hover, .hero-link:active, .acid-button, .acid-button:link, .acid-button:visited, .acid-button:hover, .acid-button:active { color: #f6f6f3 !important; -webkit-text-fill-color: #f6f6f3; }
  h1, h2, .footer-word { letter-spacing: .005em !important; }
  h1, h2 { line-height: .96 !important; }
  .product-image { background-size: contain !important; background-repeat: no-repeat; background-color: #f0f0f0; }
  .product-card { animation: none; }
  .balance-hero { min-height: 650px; display: grid; grid-template-columns: 1fr 1fr; border-bottom: 2px solid #111; }
  .balance-hero > div { padding: 9vw 6vw; display: flex; flex-direction: column; align-items: flex-start; }
  .balance-hero h1 { margin: 22px 0; font: clamp(62px,8vw,128px)/.82 Anton,sans-serif; }
  .hero-word { position: relative; display: inline-block; width: 7.4ch; height: 1em; overflow: hidden; vertical-align: -.04em; }
  .hero-word-item { position: absolute; top: 0; left: 0; width: 100%; white-space: nowrap; line-height: 1; will-change: transform, filter, opacity; }
  .balance-hero > div > p:not(.mono) { max-width: 310px; margin: 0; font-size: 14px; line-height: 1.4; }
  .hero-link { display: flex; justify-content: space-between; width: 208px; margin-top: 32px; padding: 13px 15px; background: #111; color: #f6f6f3; font: 9px "DM Mono",monospace; }
  .balance-hero figure { position: relative; margin: 0; border-left: 2px solid #111; background: url('./assets/catalog/page-2.png') center/cover; }
  .balance-hero figure::after { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,.1); }
  .balance-hero figure span { position: absolute; z-index: 1; right: 24px; bottom: 24px; color: #fff; text-align: right; font: 39px/1 Anton,sans-serif; }
  .topbar nav a { font-size: 9px; }
  .custom-image p { line-height: .95; }
  .process { padding: 85px 5.8vw 92px; background: #111; color: #f6f6f3; }
  .process h2 { margin: 27px 0 55px; font: clamp(58px,8vw,112px)/.96 Anton,sans-serif; }
  .steps { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid #585858; border-left: 1px solid #585858; }
  .steps article { min-height: 178px; padding: 17px; border-right: 1px solid #585858; border-bottom: 1px solid #585858; }
  .steps b { font: 10px "DM Mono",monospace; color: #aaa; }
  .steps h3 { margin: 44px 0 8px; font: 17px/1 Anton,sans-serif; letter-spacing: .02em; }
  .steps p { margin: 0; color: #d2d2d0; font-size: 11px; line-height: 1.35; }
  .balance-footer-logo { position: relative; width: 48px; height: 48px; border-radius: 50%; background: #fff; color: #111; display: grid; place-items: center; font: 36px/1 Anton,sans-serif; }
  .balance-footer-logo i { position: absolute; width: 9px; height: 9px; border-radius: 50%; background: #f05c28; left: 8px; top: 25px; }
  @media (min-width: 701px) {
    .catalog { padding: 62px 42px 142px; }
    .catalog-title { margin-bottom: 8px; }
    .tools { margin: 46px 0 32px; }
    .products { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .products { gap: 18px; border: 0; }
    .product-card { border: 2px solid #111; }
    .product-image { aspect-ratio: 1.18; }
    .product-info { padding: 17px 15px 7px; }
    .product-info h3 { font-size: 20px; }
    .swatches { padding: 0 15px 18px; }
  }
  @media (max-width: 700px) { .catalog { padding-bottom: 78px; } .products { gap: 10px; border: 0; } .product-card { border: 2px solid #111; } .balance-hero { grid-template-columns: 1fr; min-height: auto; } .balance-hero > div { padding: 70px 22px; } .balance-hero h1 { font-size: 72px; } .balance-hero figure { min-height: 410px; border-top: 2px solid #111; border-left: 0; } .process { padding: 63px 22px; } .process h2 { font-size: 65px; margin-bottom: 40px; } .steps { grid-template-columns: 1fr 1fr; } .steps article { min-height: 158px; padding: 14px; } .steps h3 { margin-top: 32px; } }
  .film-grain { position: fixed; z-index: 20; inset: 0; width: 100%; height: 100%; object-fit: cover; pointer-events: none; opacity: .035; mix-blend-mode: multiply; }
  .floating-cart { position: fixed; z-index: 14; right: 28px; bottom: 28px; display: flex; align-items: center; gap: 9px; min-height: 44px; padding: 0 15px; border: 1px solid #111; border-radius: 24px; background: #111; color: #f6f6f3; box-shadow: 4px 4px 0 rgba(0,0,0,.16); font: 9px "DM Mono",monospace; transition: transform .25s, box-shadow .25s; }
  .floating-cart:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 rgba(0,0,0,.16); }
  .floating-cart.is-hidden { opacity: 0; pointer-events: none; transform: translateY(12px); }
  .floating-cart b { display: grid; place-items: center; min-width: 18px; height: 18px; border-radius: 50%; background: #f6f6f3; color: #111; font: 8px "DM Mono",monospace; }
  .toast { position: fixed; z-index: 12; left: 50%; bottom: 24px; transform: translate(-50%, 130px); opacity: 0; display: flex; align-items: center; gap: 18px; padding: 13px 15px; background: #090909; color: #f6f6f3; box-shadow: 0 8px 24px rgba(0,0,0,.18); font: 9px "DM Mono", monospace; transition: transform .4s cubic-bezier(.16,1,.3,1), opacity .25s; }
  .toast.show { transform: translate(-50%, 0); opacity: 1; }
  .toast a { color: #f6f6f3; border-bottom: 1px solid #f6f6f3; padding-bottom: 2px; }
  .quick-view { position: fixed; z-index: 15; left: 50%; top: 50%; width: min(720px, calc(100% - 32px)); display: grid; grid-template-columns: 1fr 1fr; background: #f6f6f3; border: 2px solid #111; transform: translate(-50%, -46%); opacity: 0; pointer-events: none; transition: transform .35s cubic-bezier(.16,1,.3,1), opacity .2s; }
  .quick-view.is-open { opacity: 1; pointer-events: auto; transform: translate(-50%, -50%); }
  .quick-image { min-height: 455px; background-position: center; background-repeat: no-repeat; background-size: contain; background-color: #eeece6; filter: none; }
  .quick-content { position: relative; padding: 28px; }
  .quick-close { position: absolute; top: 16px; right: 16px; border: 0; background: transparent; font-size: 26px; line-height: 1; }
  .quick-type { margin: 0 0 8px; color: #666; font: 8px "DM Mono", monospace; }
  .quick-title { margin: 0; font: 32px/1 Anton, sans-serif; letter-spacing: .005em; }
  .quick-price { margin: 11px 0 25px; font: 11px "DM Mono", monospace; }
  .option-label { display: block; margin: 18px 0 9px; font: 8px "DM Mono", monospace; }
  .option-row { display: flex; flex-wrap: wrap; gap: 7px; }
  .variant { min-width: 39px; min-height: 33px; border: 1px solid #999; background: transparent; font: 9px "DM Mono", monospace; transition: background .2s, color .2s, border .2s; }
  .variant.is-selected, .variant:hover { background: #111; border-color: #111; color: #f6f6f3; }
  .color-choice { display: flex; align-items: center; gap: 7px; padding: 0 11px; }
  .color-dot { width: 9px; height: 9px; border: 1px solid currentColor; border-radius: 50%; }
  .quick-guide { display: inline-block; margin-top: 13px; border-bottom: 1px solid #111; padding-bottom: 3px; font: 8px "DM Mono", monospace; }
  .quick-quantity-row { display: flex; align-items: center; justify-content: space-between; margin-top: 19px; }
  .quick-quantity-row .option-label { margin: 0; }
  .quick-quantity { margin: 0; border-color: #111; }
  .quick-add { width: 100%; display: flex; justify-content: space-between; margin-top: 18px; padding: 15px; border: 0; background: #111; color: #f6f6f3; font: 9px "DM Mono", monospace; }
  .quick-note { margin: 12px 0 0; color: #555; font: 7px/1.4 "DM Mono", monospace; }
  .size-guide { position: fixed; z-index: 16; left: 50%; top: 50%; width: min(550px,calc(100% - 32px)); padding: 30px; border: 2px solid #111; background: #f6f6f3; transform: translate(-50%,-46%); opacity: 0; pointer-events: none; transition: transform .35s cubic-bezier(.16,1,.3,1),opacity .2s; }
  .size-guide.is-open { transform: translate(-50%,-50%); opacity: 1; pointer-events: auto; }
  .size-guide h2 { margin: 6px 0 24px; font: 40px/1 Anton,sans-serif; }
  .size-guide-close { position: absolute; top: 16px; right: 16px; border: 0; background: none; font-size: 26px; }
  .size-table { width: 100%; border-collapse: collapse; font: 10px "DM Mono",monospace; }
  .size-table th,.size-table td { padding: 11px 8px; border-bottom: 1px solid #aaa; text-align: left; }
  .size-table th { color: #666; font-weight: 400; }
  .size-disclaimer { margin: 17px 0 0; color: #555; font: 8px/1.45 "DM Mono",monospace; }
  .filter-status { margin: -13px 0 18px; color: #666; font: 8px "DM Mono", monospace; }
  .swatches { align-items: center; }
  .card-color { appearance: none; -moz-appearance: none; flex: 0 0 13px; width: 13px; min-width: 13px; height: 13px; min-height: 13px; padding: 0; border: 1px solid #888; border-radius: 50%; cursor: pointer; transition: transform .2s, outline .2s; }
  .card-color:hover, .card-color.is-selected { outline: 1px solid #111; outline-offset: 3px; transform: scale(.9); }
  .quantity { display: inline-grid; grid-template-columns: 21px 25px 21px; align-items: center; margin-top: 10px; border: 1px solid #aaa; font: 8px "DM Mono", monospace; }
  .quantity button { height: 21px; border: 0; background: transparent; font-size: 15px; line-height: 1; }
  .quantity > span { display: grid; place-items: center; height: 21px; margin: 0 !important; text-align: center; line-height: 1; }
  [torph-sr] { position: absolute !important; width: 1px !important; height: 1px !important; margin: -1px !important; padding: 0 !important; overflow: hidden !important; clip: rect(0 0 0 0) !important; clip-path: inset(50%) !important; white-space: nowrap !important; }
  .cart-progress { display: flex !important; gap: 8px; margin: 0 0 19px; padding-bottom: 12px; border-bottom: 1px solid #b7b7b2; }
  .cart-progress span { padding: 5px 7px; border: 1px solid #aaa; color: #666; font: 7px "DM Mono",monospace; }
  .cart-progress .is-current { border-color: #111; background: #111; color: #f6f6f3; }
  .cart-item [data-remove] { align-self: start; }
  .empty-action { display: inline-block; margin-top: 14px; padding-bottom: 4px; border-bottom: 1px solid #111; font: 9px "DM Mono", monospace; }
  @media (hover: hover) {
    .product-image:hover { filter: grayscale(0) contrast(1.05); }
    .product-card { transition: background .32s ease, box-shadow .32s ease; }
    .product-card:hover { background: #fff; box-shadow: inset 0 0 0 1px #111; }
    .product-card .product-info, .product-card .swatches { transition: transform .38s cubic-bezier(.16,1,.3,1); }
    .product-card:hover .product-info, .product-card:hover .swatches { transform: translateX(4px); }
    .topbar nav a, .footer-info nav a, .editorial a { position: relative; }
    .topbar nav a::after, .footer-info nav a::after, .editorial a::after { content: ''; position: absolute; right: 0; bottom: -5px; left: 0; height: 1px; background: currentColor; transform: scaleX(0); transform-origin: right; transition: transform .32s cubic-bezier(.16,1,.3,1); }
    .topbar nav a:hover::after, .footer-info nav a:hover::after, .editorial a:hover::after { transform: scaleX(1); transform-origin: left; }
    .custom-image, .editorial figure { transition: filter .7s ease, transform .8s cubic-bezier(.16,1,.3,1); }
    .custom:hover .custom-image, .editorial:hover figure { filter: grayscale(0) contrast(1.05); transform: scale(.985); }
  }
  @media (prefers-reduced-motion: reduce) { .film-grain { display: none; } *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } }
  @media (max-width: 620px) { .quick-view { grid-template-columns: 1fr; max-height: calc(100dvh - 28px); overflow: auto; } .quick-image { min-height: 230px; } .quick-content { padding: 23px; } }
`;
document.head.append(uxStyle);

const grain = document.createElement('video');
grain.className = 'film-grain';
grain.src = './assets/film-grain.mp4';
grain.autoplay = true;
grain.muted = true;
grain.loop = true;
grain.playsInline = true;
grain.setAttribute('aria-hidden', 'true');
document.body.prepend(grain);

const floatingCart = document.createElement('button');
floatingCart.className = 'floating-cart';
floatingCart.type = 'button';
floatingCart.setAttribute('aria-label', 'Abrir pedido');
floatingCart.innerHTML = `TU PEDIDO <b id="floatingBagCount">0</b>`;
floatingCart.addEventListener('click', () => toggleCart(true));
document.body.append(floatingCart);

const cartProgress = document.createElement('div');
cartProgress.className = 'cart-progress';
cartProgress.setAttribute('aria-label', 'Pasos del pedido');
cartProgress.innerHTML = '<span class="is-current">1 PRENDA</span><span>2 DISEÑO</span><span>3 COTIZACIÓN</span>';
document.querySelector('.cart-foot').prepend(cartProgress);
function updateCounter(element, value) {
  element.textContent = value;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  animate(element, { opacity: [.3, 1], y: [-4, 0], scale: [.82, 1] }, { duration: .24, ease: [.16, 1, .3, 1] });
}

const toast = document.createElement('div');
toast.className = 'toast';
toast.setAttribute('role', 'status');
toast.setAttribute('aria-live', 'polite');
document.body.append(toast);
let toastTimer;
function showToast(message) {
  toast.innerHTML = `${message} <a href="#" data-open-cart>VER BOLSA ↗</a>`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3300);
}

const quickView = document.createElement('section');
quickView.className = 'quick-view';
quickView.setAttribute('role', 'dialog');
quickView.setAttribute('aria-modal', 'true');
quickView.setAttribute('aria-label', 'Seleccionar variantes del producto');
document.body.append(quickView);
const sizeGuide = document.createElement('section');
sizeGuide.className = 'size-guide';
sizeGuide.setAttribute('role', 'dialog');
sizeGuide.setAttribute('aria-modal', 'true');
sizeGuide.setAttribute('aria-label', 'Guía de talles');
document.body.append(sizeGuide);
function toggleQuick(open) {
  quickView.classList.toggle('is-open', open);
  overlay.classList.toggle('is-open', open);
  if (open) quickView.querySelector('.quick-close')?.focus();
}
function openSizeGuide(product) {
  const guide = sizeGuides[product.id];
  if (!guide) return showToast('CONSULTANOS POR WHATSAPP PARA ESTE TALLE.');
  sizeGuide.innerHTML = `<button class="size-guide-close" aria-label="Cerrar guía de talles">×</button><p class="quick-type">GUÍA DE TALLES / ${product.name}</p><h2>MEDIDAS<br/>DE PRENDA.</h2><table class="size-table"><thead><tr>${guide.headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead><tbody>${guide.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table><p class="size-disclaimer">LAS MEDIDAS ESTÁN TOMADAS EN EL MOMENTO DE CORTE Y PUEDEN VARIAR ENTRE 1 Y 2 CM.</p>`;
  sizeGuide.classList.add('is-open');
  overlay.classList.add('is-open');
  sizeGuide.querySelector('.size-guide-close').focus();
}
function openQuickView(id) {
  const product = products.find((item) => item.id === id);
  quickSelection = { product, size: product.sizes[0], colorIndex: selectedCardColors.get(id) ?? 0, quantity: 1 };
  renderQuickView();
  toggleQuick(true);
}
function renderQuickView() {
  const { product, size, colorIndex, quantity } = quickSelection;
  quickView.innerHTML = `<div class="quick-image ${product.image}" style="background-image:url('${catalogImage(product, colorIndex)}')"></div><div class="quick-content"><button class="quick-close" data-close-quick aria-label="Cerrar selector">×</button><p class="quick-type">${product.type}</p><h2 class="quick-title">${product.name}</h2><p class="quick-price">${product.price ? priceLabel(product.price) : 'PRESUPUESTO SEGÚN CANTIDAD Y ESTAMPA'}</p><span class="option-label">COLOR</span><div class="option-row">${product.colors.map((color, index) => `<button class="variant color-choice ${index === colorIndex ? 'is-selected' : ''}" data-color="${index}"><i class="color-dot" style="background:${color}"></i>${product.colorNames[index]}</button>`).join('')}</div><span class="option-label">TALLE</span><div class="option-row">${product.sizes.map((item) => `<button class="variant ${item === size ? 'is-selected' : ''}" data-size="${item}">${item}</button>`).join('')}</div><a href="#" class="quick-guide">GUÍA DE TALLES ↗</a><div class="quick-quantity-row"><span class="option-label">CANTIDAD</span><div class="quantity quick-quantity" aria-label="Cantidad de ${product.name}"><button type="button" data-quick-quantity="-1" aria-label="Quitar una unidad">−</button><span data-quick-quantity-value>${quantity}</span><button type="button" data-quick-quantity="1" aria-label="Sumar una unidad">+</button></div></div><button class="quick-add" data-add-variant><span data-quick-add-label>SUMAR ${quantity} AL PEDIDO</span><span>+</span></button><p class="quick-note">TODAS LAS PRENDAS PUEDEN PERSONALIZARSE. EL VALOR FINAL DEPENDE DE CANTIDAD, ESTAMPA Y TÉCNICA.</p></div>`;
}

function visibleProducts() {
  return activeFilter === 'TODOS' ? products : products.filter((product) => product.category === activeFilter);
}
function revealProducts() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cards = [...productGrid.querySelectorAll('.product-card')];
  if (!cards.length) return;
  const images = cards.map((card) => card.querySelector('.product-image'));
  const details = cards.flatMap((card) => [card.querySelector('.product-info'), card.querySelector('.swatches')]);
  const ease = [.22, 1, .36, 1];
  animate(cards, { opacity: [0, 1], y: [12, 0], scale: [.992, 1] }, { duration: .88, delay: stagger(.09), ease });
  animate(images, { opacity: [.76, 1], scale: [1.012, 1] }, { duration: 1.04, delay: stagger(.09), ease });
  animate(details, { opacity: [0, 1], y: [5, 0] }, { duration: .64, delay: stagger(.09, { startDelay: .16 }), ease });
}
function renderProducts() {
  const shown = visibleProducts();
  document.querySelector('.catalog-title span').textContent = String(shown.length).padStart(2, '0');
  document.querySelector('.filter-status')?.remove();
  const status = document.createElement('p');
  status.className = 'filter-status';
  status.setAttribute('aria-live', 'polite');
  status.textContent = `${shown.length} ${shown.length === 1 ? 'PRODUCTO' : 'PRODUCTOS'} / ${activeFilter}`;
  productGrid.before(status);
  productGrid.innerHTML = shown.map((product) => { const colorIndex = selectedCardColors.get(product.id) ?? 0; return `<article class="product-card"><button class="product-image ${product.image}" style="--product-image:url('${catalogImage(product, colorIndex)}');background-image:var(--product-image)" data-add="${product.id}" aria-label="Elegir ${product.name}"><span aria-hidden="true">+</span><small>${product.colorNames[colorIndex]}</small></button><div class="product-info"><div><p>${product.type}</p><h3>${product.name}</h3></div><strong>${priceLabel(product.price)}</strong></div><div class="swatches" aria-label="Colores disponibles">${product.colors.map((color, index) => `<button class="card-color ${index === colorIndex ? 'is-selected' : ''}" data-card-color="${index}" data-product="${product.id}" aria-label="${product.colorNames[index]}" style="background:${color}"></button>`).join('')}</div></article>`; }).join('') || '<p class="empty">NO HAY PRODUCTOS EN ESTA CATEGORÍA.</p>';
  requestAnimationFrame(revealProducts);
}
function renderCart() {
  const count = bag.reduce((total, item) => total + item.quantity, 0);
  updateCounter(document.querySelector('#bagCount'), `(${count})`);
  updateCounter(document.querySelector('#bagCountCart'), count);
  updateCounter(document.querySelector('#floatingBagCount'), count);
  const total = bag.reduce((sum, item) => sum + item.price * item.quantity, 0);
  updateCounter(document.querySelector('#subtotal'), total ? money.format(total) : 'A COTIZAR');
  document.querySelector('#cartItems').innerHTML = bag.length ? bag.map((item) => `<div class="cart-item"><div class="cart-thumb ${item.image}" style="background-image:url('${item.imageAsset}')"></div><div><p>${item.type}</p><strong>${item.name}</strong><span>${item.colorName} / ${item.size} · ${priceLabel(item.price)}</span><div class="quantity" aria-label="Cantidad de ${item.name}"><button data-change="${item.lineId}" data-delta="-1" aria-label="Quitar una unidad">−</button><span>${item.quantity}</span><button data-change="${item.lineId}" data-delta="1" aria-label="Sumar una unidad">+</button></div></div><button data-remove="${item.lineId}" aria-label="Quitar ${item.name} de la bolsa">×</button></div>`).join('') : '<p class="empty">TU PEDIDO ESTÁ VACÍO.<br/><a href="#shop" class="empty-action" data-close-cart>VER PRENDAS ↓</a></p>';
}
function toggleCart(open) { cart.classList.toggle('is-open', open); overlay.classList.toggle('is-open', open); document.querySelector('.floating-cart')?.classList.toggle('is-hidden', open); cart.setAttribute('aria-hidden', String(!open)); }
function addProduct(product, size, colorIndex, quantity = 1) {
  const lineId = `${product.id}-${size}-${colorIndex}`;
  const existing = bag.find((item) => item.lineId === lineId);
  existing ? existing.quantity += quantity : bag.push({ ...product, quantity });
  if (!existing) bag[bag.length - 1] = { ...bag[bag.length - 1], lineId, size, colorName: product.colorNames[colorIndex], imageAsset: catalogImage(product, colorIndex) };
  renderCart();
  showToast(`${product.name} AGREGADO A LA BOLSA.`);
}

productGrid.addEventListener('click', (event) => {
  const color = event.target.closest('[data-card-color]');
  if (color) {
    event.stopPropagation();
    const productId = Number(color.dataset.product);
    const colorIndex = Number(color.dataset.cardColor);
    const product = products.find((item) => item.id === productId);
    const card = color.closest('.product-card');
    selectedCardColors.set(productId, colorIndex);
    const image = card.querySelector('.product-image');
    image.style.setProperty('--product-image', `url('${catalogImage(product, colorIndex)}')`);
    image.style.backgroundImage = 'var(--product-image)';
    card.querySelector('small').textContent = product.colorNames[colorIndex];
    card.querySelectorAll('[data-card-color]').forEach((swatch) => swatch.classList.toggle('is-selected', swatch === color));
    return;
  }
  const id = Number(event.target.closest('[data-add]')?.dataset.add);
  if (id) openQuickView(id);
});
document.querySelector('#cartItems').addEventListener('click', (event) => {
  const target = event.target;
  if (target.dataset.openCart !== undefined) return toggleCart(true);
  if (target.dataset.closeCart !== undefined) return toggleCart(false);
  if (!target.dataset.remove && !target.dataset.change) return;
  if (target.dataset.remove) bag = bag.filter((item) => item.lineId !== target.dataset.remove);
  if (target.dataset.change) { const item = bag.find((entry) => entry.lineId === target.dataset.change); item.quantity += Number(target.dataset.delta); if (item.quantity < 1) bag = bag.filter((entry) => entry.lineId !== target.dataset.change); }
  renderCart();
});
quickView.addEventListener('click', (event) => {
  const target = event.target.closest('button, a');
  if (!target) return;
  if (target.dataset.closeQuick !== undefined) return toggleQuick(false);
  if (target.dataset.color !== undefined) { quickSelection.colorIndex = Number(target.dataset.color); return renderQuickView(); }
  if (target.dataset.size !== undefined) { quickSelection.size = target.dataset.size; return renderQuickView(); }
  if (target.dataset.quickQuantity !== undefined) { quickSelection.quantity = Math.max(1, quickSelection.quantity + Number(target.dataset.quickQuantity)); const quantityValue = quickView.querySelector('[data-quick-quantity-value]'); quantityValue.textContent = quickSelection.quantity; animate(quantityValue, { opacity: [.25, 1], y: [-4, 0], scale: [.9, 1] }, { duration: .2, ease: [.16, 1, .3, 1] }); quickView.querySelector('[data-quick-add-label]').textContent = `SUMAR ${quickSelection.quantity} AL PEDIDO`; return; }
  if (target.dataset.addVariant !== undefined) { addProduct(quickSelection.product, quickSelection.size, quickSelection.colorIndex, quickSelection.quantity); return toggleQuick(false); }
  if (target.classList.contains('quick-guide')) { event.preventDefault(); openSizeGuide(quickSelection.product); }
});
sizeGuide.addEventListener('click', (event) => { if (event.target.closest('.size-guide-close')) { sizeGuide.classList.remove('is-open'); overlay.classList.remove('is-open'); } });
filterButtons.forEach((button) => button.addEventListener('click', () => { activeFilter = button.textContent.trim(); filterButtons.forEach((item) => item.classList.toggle('active', item === button)); renderProducts(); }));
document.querySelector('#bagButton').addEventListener('click', () => toggleCart(true));
document.querySelector('#closeCart').addEventListener('click', () => toggleCart(false));
overlay.addEventListener('click', () => { toggleCart(false); toggleQuick(false); sizeGuide.classList.remove('is-open'); });
toast.addEventListener('click', (event) => { if (event.target.dataset.openCart !== undefined) { event.preventDefault(); toggleCart(true); } });
document.querySelector('.checkout').addEventListener('click', () => { if (!bag.length) return showToast('AGREGÁ UNA PRENDA PARA CONTINUAR.'); const lines = bag.map((item) => `${item.quantity}x ${item.name} / ${item.colorName} / talle ${item.size}`).join('\n'); window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Balance Textil, quiero cotizar el siguiente pedido:\n${lines}\n\nQuisiera personalizar estas prendas.`)}`, '_blank'); });
document.querySelector('.tools .search').addEventListener('click', () => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola Balance Textil, quisiera cotizar indumentaria personalizada.')}`, '_blank'));
const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => { if (isIntersecting) { target.classList.add('visible'); observer.unobserve(target); } }), { threshold: .15 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
const heroWord = document.querySelector('.hero-word');
const heroWords = ['EQUIPO.', 'EMPRESA.', 'NEGOCIO.', 'MARCA.'];
let heroWordIndex = 0;
if (heroWord && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    const wordItem = heroWord.querySelector('.hero-word-item');
    heroWordIndex = (heroWordIndex + 1) % heroWords.length;
    const timing = { duration: 310, easing: 'cubic-bezier(.16, 1, .3, 1)', fill: 'forwards' };
    const exit = wordItem.animate([
      { transform: 'translateY(0) scaleY(1)', filter: 'blur(0px)', opacity: 1 },
      { transform: 'translateY(-112%) scaleY(.96)', filter: 'blur(2px)', opacity: .35 },
    ], timing);
    exit.finished.then(() => {
      wordItem.textContent = heroWords[heroWordIndex];
      exit.cancel();
      wordItem.animate([
        { transform: 'translateY(112%) scaleY(1.04)', filter: 'blur(2px)', opacity: .35 },
        { transform: 'translateY(0) scaleY(1)', filter: 'blur(0px)', opacity: 1 },
      ], timing);
    });
  }, 3200);
}
renderProducts();
renderCart();
