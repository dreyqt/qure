import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CnrUnqlu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D8_AxmLZ.mjs';
import 'clsx';
import { s as services } from '../chunks/services_BPFJMGS9.mjs';
import { b as blogPosts } from '../chunks/blog_B_bfcp_b.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const BACKGROUND_IMAGE_URL = "https://qureit.ph/_astro/services_card_consultancy.BDjGyvKP_Z2frtAh.webp";
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[500px] flex items-center px-6"> <!-- Background Image --> <div class="absolute inset-0 z-0"> <img${addAttribute(BACKGROUND_IMAGE_URL, "src")} alt="Pest control background" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black/10"></div> </div> <!-- Content --> <div class="relative z-10 max-w-6xl mx-auto w-full"> <div class="bg-[#1E3A5F] text-white p-12 rounded-lg max-w-2xl"> <h1 class="text-4xl font-bold mb-4 leading-tight">
Tailored pest solutions to<br>keep your spaces safe
</h1> <p class="text-sm mb-6">
Providing personalized pest management<br>
services in Glenns, for more than a decade.
</p> <a href="/contact" class="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors">
Book a Free Survey
</a> </div> </div> </section>`;
}, "C:/Users/OJT User/qure/src/components/Hero.astro", void 0);

const $$ServiceCarousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white" id="services"> <div class="max-w-6xl mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold mb-4">
Eco-<span class="text-green-600">Friendly</span> Pest Solutions
</h2> <p class="text-gray-600 max-w-3xl mx-auto">
We offer the most effective pest management solutions available while staying true to our commitment to
        being environmentally conscious.
</p> </div> <div class="relative"> <div class="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-4 hide-scrollbar"> ${services.map((service) => renderTemplate`<article class="snap-start min-w-[320px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"> <div class="h-48 overflow-hidden"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover"> </div> <div class="p-6"> <h3 class="font-bold text-lg mb-3">${service.title}</h3> <p class="text-gray-600 text-sm mb-4">${service.description}</p> <a${addAttribute(`/services/${service.slug}`, "href")} class="text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold transition-colors">
Learn more →
</a> </div> </article>`)} </div> </div> <div class="text-center mt-8"> <a href="/services" class="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors">
See All Services
</a> </div> </div> </section>`;
}, "C:/Users/OJT User/qure/src/components/ServiceCarousel.astro", void 0);

const $$Clients = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="max-w-6xl mx-auto px-6"> <div class="mb-12"> <h2 class="text-3xl font-bold mb-4"> <span class="text-[#FF6B35]">1000+</span> Satisfied Clients
</h2> <p class="text-gray-600 max-w-2xl">
From hospitals to homes, restaurants to businesses, we provide
        quality and personalized pest management and disinfection.
</p> <a href="/portfolio" class="inline-block mt-6 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors">
View Pestfolio
</a> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"> <div class="flex items-center justify-center p-6 bg-white rounded-lg"> <div class="text-center"> <div class="text-2xl font-bold text-gray-800 mb-1">Montebello</div> <div class="text-xs text-gray-500">Villa Hotel</div> </div> </div> <div class="flex items-center justify-center p-6 bg-white rounded-lg"> <div class="text-center"> <div class="text-2xl font-bold text-blue-600">Philippine</div> <div class="text-xs text-gray-500">Airlines</div> </div> </div> <div class="flex items-center justify-center p-6 bg-white rounded-lg"> <div class="text-center"> <div class="text-xl font-bold text-gray-800">DEAN & DELUCA</div> <div class="text-xs text-gray-500">Gourmet Food</div> </div> </div> <div class="flex items-center justify-center p-6 bg-white rounded-lg"> <div class="w-20 h-20 rounded-full border-4 border-red-600 flex items-center justify-center"> <div class="text-center"> <div class="text-xs font-bold">City of</div> <div class="text-sm font-bold">Manila</div> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/OJT User/qure/src/components/Clients.astro", void 0);

const $$BlogPreview = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold mb-4">Latest from Our Blog</h2> <p class="text-gray-600 max-w-2xl mx-auto">
Stay informed with expert tips, industry insights, and the latest news in pest management.
</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${blogPosts.map((post) => renderTemplate`<article class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"> <a${addAttribute(`/blog/${post.slug}`, "href")}> <div class="h-48 overflow-hidden"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"> </div> </a> <div class="p-6"> <div class="flex items-center gap-4 mb-3"> <span class="text-xs bg-[#FF6B35] text-white px-3 py-1 rounded-full"> ${post.category} </span> <div class="flex items-center gap-1 text-xs text-gray-500"> <span>${post.date}</span> </div> </div> <a${addAttribute(`/blog/${post.slug}`, "href")}> <h3 class="font-bold text-lg mb-3 hover:text-[#FF6B35] transition-colors">${post.title}</h3> </a> <p class="text-gray-600 text-sm mb-4">${post.excerpt}</p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="flex items-center gap-2 text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold transition-colors">
Read More
<span aria-hidden="true">→</span> </a> </div> </article>`)} </div> <div class="text-center mt-12"> <a href="/blog" class="inline-block bg-[#1E3A5F] hover:bg-[#152d47] text-white px-6 py-3 rounded-md transition-colors">
View All Articles
</a> </div> </div> </section>`;
}, "C:/Users/OJT User/qure/src/components/BlogPreview.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "QUREIT Pest Control", "currentPath": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ServiceCarousel", $$ServiceCarousel, {})} ${renderComponent($$result2, "Clients", $$Clients, {})} ${renderComponent($$result2, "BlogPreview", $$BlogPreview, {})} ` })}`;
}, "C:/Users/OJT User/qure/src/pages/index.astro", void 0);

const $$file = "C:/Users/OJT User/qure/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
