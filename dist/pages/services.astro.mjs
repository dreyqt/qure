import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CnrUnqlu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D8_AxmLZ.mjs';
import { s as services } from '../chunks/services_BPFJMGS9.mjs';
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Services | QUREIT Pest Control", "currentPath": "/services", "breadcrumbs": [{ href: "/", label: "Home" }, { label: "Services" }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-[400px] flex items-center"> <div class="absolute inset-0 z-0 bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f]"></div> <div class="relative z-10 max-w-6xl mx-auto px-6 text-white"> <h1 class="text-5xl font-bold mb-4">Our Services</h1> <p class="text-xl">We provide full-service pest management solutions tailored to your needs.</p> </div> </section> <section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-6"> <div class="grid md:grid-cols-2 gap-8"> ${services.map((service) => renderTemplate`<article class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"> <div class="h-64 overflow-hidden"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover"> </div> <div class="p-8"> <h2 class="text-2xl font-bold mb-3">${service.title}</h2> <p class="text-gray-600 mb-6">${service.description}</p> <a${addAttribute(`/services/${service.slug}`, "href")} class="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors">
Learn more
</a> </div> </article>`)} </div> </div> </section> ` })}`;
}, "C:/Users/OJT User/qure/src/pages/services.astro", void 0);

const $$file = "C:/Users/OJT User/qure/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
