import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, e as renderHead, r as renderComponent, f as renderSlot } from './astro/server_CnrUnqlu.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import 'clsx';

const $$Astro$2 = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { currentPath = "/" } = Astro2.props;
  const navItems = [
    { href: "/about", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "/pestfolio", label: "PESTFOLIO" },
    { href: "/contact", label: "CONTACT US" }
  ];
  const isActive = (href) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };
  return renderTemplate`${maybeRenderHead()}<nav class="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50"> <a href="/" class="flex items-center gap-2"> <div class="flex items-center"> <span class="text-[#FF6B35] text-2xl font-bold">QURE</span> <span class="text-[#1E3A5F] text-2xl font-bold">IT</span> </div> <span class="text-xs text-gray-600">INCORPORATED</span> </a> <div class="flex gap-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`text-sm transition-colors ${isActive(item.href) ? "text-[#FF6B35] font-semibold" : "text-gray-700 hover:text-[#FF6B35]"}`, "class")}> ${item.label} </a>`)} </div> </nav>`;
}, "C:/Users/OJT User/qure/src/components/Navigation.astro", void 0);

const $$Astro$1 = createAstro();
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { crumbs = [] } = Astro2.props;
  return renderTemplate`${crumbs.length ? renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="bg-white border-b border-gray-100"><div class="max-w-6xl mx-auto px-6 py-4"><ol class="flex flex-wrap items-center text-sm text-gray-600">${crumbs.map((crumb, index) => renderTemplate`<li class="flex items-center gap-0">${index > 0 ? renderTemplate`<span aria-hidden="true" class="text-gray-400 mx-2">
/
</span>` : null}${crumb.href ? renderTemplate`<a${addAttribute(crumb.href, "href")} class="hover:text-[#FF6B35] transition-colors">${crumb.label}</a>` : renderTemplate`<span class="text-gray-900 font-semibold" aria-current="page">${crumb.label}</span>`}</li>`)}</ol></div></nav>` : null}`;
}, "C:/Users/OJT User/qure/src/components/Breadcrumbs.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#2D2D2D] text-white"> <div class="max-w-6xl mx-auto px-6 py-12"> <div class="grid md:grid-cols-4 gap-8"> <div> <a href="/" class="flex items-center gap-2 mb-4"> <div class="flex items-center"> <span class="text-[#FF6B35] text-2xl font-bold">QURE</span> <span class="text-white text-2xl font-bold">IT</span> </div> </a> <p class="text-sm text-gray-400 mb-4">
We are a highly-accredited, reliable, socially-relevant, and environmentally
          conscious provider of pest control services that has been protecting
          our clients from pests for 15 years.
</p> <a href="/contact" class="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-4 py-2 rounded-md text-sm transition-colors">
Book a Free Survey
</a> </div> <div> <h3 class="font-bold mb-4 text-[#FF6B35]">SERVICES</h3> <ul class="space-y-2 text-sm"> <li> <a href="/services/structural-protection" class="text-gray-400 hover:text-white transition-colors">
Structural Protection
</a> </li> <li> <a href="/services/integrated-pest-management" class="text-gray-400 hover:text-white transition-colors">
Integrated Pest Management
</a> </li> <li> <a href="/services/disinfection-services" class="text-gray-400 hover:text-white transition-colors">
Disinfection Services
</a> </li> <li> <a href="/services/training-and-seminars" class="text-gray-400 hover:text-white transition-colors">
Training and Seminars
</a> </li> <li> <a href="/services/ipm-consultancy" class="text-gray-400 hover:text-white transition-colors">
IPM Consultancy
</a> </li> </ul> </div> <div> <h3 class="font-bold mb-4 text-[#FF6B35]">PESTFOLIO</h3> <ul class="space-y-2 text-sm"> <li> <a href="/pestfolio" class="text-gray-400 hover:text-white transition-colors">
Termites
</a> </li> <li> <a href="/pestfolio" class="text-gray-400 hover:text-white transition-colors">
Rodents
</a> </li> <li> <a href="/pestfolio" class="text-gray-400 hover:text-white transition-colors">
Crawling Insects
</a> </li><li> <a href="/pestfolio" class="text-gray-400 hover:text-white transition-colors">
Flying Insects
</a> </li> </ul> </div> <div> <h3 class="font-bold mb-4 text-[#FF6B35]">FOLLOW US</h3> <ul class="space-y-2 text-sm"> <li> <a href="#" class="text-gray-400 hover:text-white transition-colors">Instagram</a> </li> <li> <a href="https://www.facebook.com/qureit" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">Facebook</a> </li> <li> <a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a> </li> </ul> </div> </div> <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400"> <p>© 2024 QUREIT INC. All rights reserved.</p> </div> </div> </footer>`;
}, "C:/Users/OJT User/qure/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "QureIt - Quality Pest Management",
    currentPath = "/",
    breadcrumbs = []
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-white text-slate-900"> ${renderComponent($$result, "Navigation", $$Navigation, { "currentPath": currentPath })} ${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "crumbs": breadcrumbs })} <main class="min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/OJT User/qure/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
