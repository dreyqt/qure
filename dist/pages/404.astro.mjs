import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnrUnqlu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D8_AxmLZ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found | QUREIT Pest Control", "currentPath": "/", "breadcrumbs": [{ href: "/", label: "Home" }, { label: "Not Found" }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[70vh] flex flex-col items-center justify-center px-6"> <h1 class="text-6xl font-bold mb-6">404</h1> <p class="text-xl text-gray-600 mb-6">Sorry, the page you’re looking for doesn’t exist.</p> <a href="/" class="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors">
Back to Home
</a> </section> ` })}`;
}, "C:/Users/OJT User/qure/src/pages/404.astro", void 0);

const $$file = "C:/Users/OJT User/qure/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
