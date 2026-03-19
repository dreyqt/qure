import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CnrUnqlu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_D8_AxmLZ.mjs';
import { s as services } from '../../chunks/services_BPFJMGS9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return services.map((service) => ({
    params: { slug: service.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const service = services.find((item) => item.slug === Astro2.params.slug);
  if (!service) {
    throw new Error("Service not found");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${service.title} | QUREIT Pest Control`, "currentPath": `/services/${service.slug}`, "breadcrumbs": [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { label: service.title }
  ] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-[420px] flex items-center"> <div class="absolute inset-0 z-0"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black/30"></div> </div> <div class="relative z-10 max-w-6xl mx-auto px-6 text-white"> <h1 class="text-5xl font-bold mb-4">${service.title}</h1> <p class="text-xl max-w-3xl">${service.fullDescription ?? service.description}</p> </div> </section> <section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-6"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-bold mb-6">Key Features</h2> ${service.features?.length ? renderTemplate`<ul class="list-disc pl-5 space-y-2 text-gray-600"> ${service.features.map((feature) => renderTemplate`<li>${feature}</li>`)} </ul>` : renderTemplate`<p class="text-gray-600">No additional details available.</p>`} </div> <div> <h2 class="text-3xl font-bold mb-6">Benefits</h2> ${service.benefits?.length ? renderTemplate`<ul class="list-disc pl-5 space-y-2 text-gray-600"> ${service.benefits.map((benefit) => renderTemplate`<li>${benefit}</li>`)} </ul>` : renderTemplate`<p class="text-gray-600">No additional benefits listed.</p>`} </div> </div> <div class="mt-12 text-center"> <a href="/contact" class="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-8 py-4 rounded-md transition-colors">
Book a Free Assessment
</a> </div> </div> </section> ` })}`;
}, "C:/Users/OJT User/qure/src/pages/services/[slug].astro", void 0);

const $$file = "C:/Users/OJT User/qure/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
