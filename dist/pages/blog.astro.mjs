import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CnrUnqlu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D8_AxmLZ.mjs';
import { b as blogPosts } from '../chunks/blog_B_bfcp_b.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog | QUREIT Pest Control", "currentPath": "/blog", "breadcrumbs": [{ href: "/", label: "Home" }, { label: "Blog" }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-[400px] flex items-center"> <div class="absolute inset-0 z-0 bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f]"></div> <div class="relative z-10 max-w-6xl mx-auto px-6 text-white"> <h1 class="text-5xl font-bold mb-4">Our Blog</h1> <p class="text-xl">Tips, updates, and insights from the pest control experts.</p> </div> </section> <section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-6"> <div class="grid md:grid-cols-3 gap-8"> ${blogPosts.map((post) => renderTemplate`<article class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"> <a${addAttribute(`/blog/${post.slug}`, "href")}> <div class="h-48 overflow-hidden"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"> </div> </a> <div class="p-6"> <div class="flex items-center gap-4 mb-3"> <span class="text-xs bg-[#FF6B35] text-white px-3 py-1 rounded-full"> ${post.category} </span> <div class="flex items-center gap-1 text-xs text-gray-500"> <span>${post.date}</span> </div> </div> <a${addAttribute(`/blog/${post.slug}`, "href")}> <h3 class="font-bold text-lg mb-3 hover:text-[#FF6B35] transition-colors">${post.title}</h3> </a> <p class="text-gray-600 text-sm mb-4">${post.excerpt}</p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="flex items-center gap-2 text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold transition-colors">
Read More
<span aria-hidden="true">→</span> </a> </div> </article>`)} </div> </div> </section> ` })}`;
}, "C:/Users/OJT User/qure/src/pages/blog.astro", void 0);

const $$file = "C:/Users/OJT User/qure/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
