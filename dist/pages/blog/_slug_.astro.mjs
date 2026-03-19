import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CnrUnqlu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_D8_AxmLZ.mjs';
import { b as blogPosts } from '../../chunks/blog_B_bfcp_b.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return blogPosts.map((post) => ({
    params: { slug: post.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const post = blogPosts.find((item) => item.slug === Astro2.params.slug);
  if (!post) {
    throw new Error("Blog post not found");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.title} | QUREIT Pest Control`, "currentPath": `/blog/${post.slug}`, "breadcrumbs": [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { label: post.title }
  ] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-[420px] flex items-center"> <div class="absolute inset-0 z-0"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black/30"></div> </div> <div class="relative z-10 max-w-6xl mx-auto px-6 text-white"> <h1 class="text-5xl font-bold mb-4">${post.title}</h1> <p class="text-lg"> ${post.author} — ${post.date} </p> </div> </section> <section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-6"> <div class="mb-8"> <p class="text-gray-600 mb-6">${post.content.introduction}</p> ${post.content.sections.map((section) => renderTemplate`<div class="mb-8"> <h2 class="text-2xl font-bold mb-3">${section.heading}</h2> <p class="text-gray-600">${section.content}</p> </div>`)} <p class="text-gray-600">${post.content.conclusion}</p> </div> <div class="text-center mt-12"> <a href="/blog" class="inline-block bg-[#1E3A5F] hover:bg-[#152d47] text-white px-6 py-3 rounded-md transition-colors">
Back to Blog
</a> </div> </div> </section> ` })}`;
}, "C:/Users/OJT User/qure/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/OJT User/qure/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
