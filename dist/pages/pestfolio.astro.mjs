import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CnrUnqlu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D8_AxmLZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Pestfolio = createComponent(($$result, $$props, $$slots) => {
  const industries = [
    {
      icon: "hotel",
      title: "Hospitality",
      description: "Luxury hotels and resorts",
      clients: ["Montebello Villa Hotel", "Grand Plaza Resort", "Skyview Suites"],
      image: "https://images.unsplash.com/photo-1720540244592-b4124532b318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc3Mzc3NTQzNXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: "utensils",
      title: "Food Service",
      description: "Restaurants and cafes",
      clients: ["Dean & Deluca", "The Grill House", "Fusion Bistro"],
      image: "https://images.unsplash.com/photo-1767785990437-dfe1fe516fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzczNzI5MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: "hospital",
      title: "Healthcare",
      description: "Hospitals and clinics",
      clients: ["Medical Center Manila", "Health Plus Clinic", "Care First Hospital"],
      image: "https://images.unsplash.com/photo-1710074213379-2a9c2653046b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzM3NTgxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: "building",
      title: "Corporate",
      description: "Office buildings",
      clients: ["Philippine Airlines", "Tech Tower", "Business Hub Center"],
      image: "https://images.unsplash.com/photo-1694702722584-05adc8802e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3Mzc4MTE1NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: "home",
      title: "Residential",
      description: "Homes and condominiums",
      clients: ["Luxury Estates", "Condo Living", "Private Residences"],
      image: "https://images.unsplash.com/photo-1773558048595-0eb9c121f119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvbWUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzM4MDA5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: "warehouse",
      title: "Industrial",
      description: "Warehouses and factories",
      clients: ["Manufacturing Plus", "Storage Solutions", "Industrial Park"],
      image: "https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzczODA0Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];
  const testimonials = [
    {
      name: "Carlos Mendoza",
      position: "General Manager, Montebello Villa Hotel",
      text: "QUREIT has been our trusted partner for pest control for over 5 years. Their professionalism and attention to detail have helped us maintain the highest standards for our guests.",
      rating: 5
    },
    {
      name: "Maria Santos",
      position: "Operations Manager, Dean & Deluca",
      text: "Food safety is paramount in our business. QUREIT's IPM approach has helped us maintain a pest-free environment while meeting all health department requirements.",
      rating: 5
    },
    {
      name: "Dr. Roberto Cruz",
      position: "Director, Medical Center Manila",
      text: "In a healthcare setting, we need pest control solutions that are both effective and safe. QUREIT delivers on both counts with their eco-friendly treatments.",
      rating: 5
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pestfolio | QUREIT Pest Control", "currentPath": "/pestfolio", "breadcrumbs": [{ href: "/", label: "Home" }, { label: "Pestfolio" }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-[400px] flex items-center"> <div class="absolute inset-0 z-0 bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f]"></div> <div class="relative z-10 max-w-6xl mx-auto px-6 text-white"> <h1 class="text-5xl font-bold mb-4">Pestfolio</h1> <p class="text-xl">1000+ Satisfied Clients Across Multiple Industries</p> </div> </section> <section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-6"> <div class="grid md:grid-cols-4 gap-8 text-center"> <div> <div class="text-4xl font-bold text-[#FF6B35] mb-2">1000+</div> <div class="text-gray-600">Satisfied Clients</div> </div> <div> <div class="text-4xl font-bold text-[#FF6B35] mb-2">15</div> <div class="text-gray-600">Years of Experience</div> </div> <div> <div class="text-4xl font-bold text-[#FF6B35] mb-2">50+</div> <div class="text-gray-600">Corporate Partners</div> </div> <div> <div class="text-4xl font-bold text-[#FF6B35] mb-2">99%</div> <div class="text-gray-600">Customer Satisfaction</div> </div> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="max-w-6xl mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold mb-4">Industries We Serve</h2> <p class="text-gray-600 max-w-2xl mx-auto">
From hospitals to homes, restaurants to businesses, we provide quality and personalized pest management services.
</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${industries.map((industry, index) => renderTemplate`<div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"> <div class="h-48 overflow-hidden"> <img${addAttribute(industry.image, "src")}${addAttribute(industry.title, "alt")} class="w-full h-full object-cover"> </div> <div class="p-6"> <div class="flex items-center gap-3 mb-3"> <div class="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center"> <span class="text-white text-2xl">${industry.icon === "hotel" ? "\u{1F3E8}" : industry.icon === "utensils" ? "\u{1F37D}\uFE0F" : industry.icon === "hospital" ? "\u{1F3E5}" : industry.icon === "building" ? "\u{1F3E2}" : industry.icon === "home" ? "\u{1F3E0}" : "\u{1F3ED}"}</span> </div> <div> <h3 class="font-bold text-lg">${industry.title}</h3> <p class="text-sm text-gray-600">${industry.description}</p> </div> </div> <div class="border-t border-gray-200 pt-4 mt-4"> <p class="text-sm text-gray-500 mb-2">Featured Clients:</p> <ul class="space-y-1"> ${industry.clients.map((client, idx) => renderTemplate`<li class="text-sm text-gray-700">• ${client}</li>`)} </ul> </div> </div> </div>`)} </div> </div> </section> <section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-6"> <h2 class="text-3xl font-bold mb-12 text-center">Trusted By</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"> <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg"> <div class="text-center"> <div class="text-2xl font-bold text-gray-800 mb-1">Montebello</div> <div class="text-xs text-gray-500">Villa Hotel</div> </div> </div> <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg"> <div class="text-center"> <div class="text-2xl font-bold text-blue-600">Philippine</div> <div class="text-xs text-gray-500">Airlines</div> </div> </div> <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg"> <div class="text-center"> <div class="text-xl font-bold text-gray-800">DEAN & DELUCA</div> <div class="text-xs text-gray-500">Gourmet Food</div> </div> </div> <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg"> <div class="w-20 h-20 rounded-full border-4 border-red-600 flex items-center justify-center mx-auto"> <div class="text-center"> <div class="text-xs font-bold">City of</div> <div class="text-sm font-bold">Manila</div> </div> </div> </div> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="max-w-6xl mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold mb-4">What Our Clients Say</h2> <p class="text-gray-600">Real feedback from satisfied customers</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${testimonials.map((testimonial, index) => renderTemplate`<div class="bg-white p-8 rounded-lg shadow-lg"> <div class="flex items-center gap-4 mb-4"> <div class="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-xl">${testimonial.name[0]}</div> <div> <div class="font-bold">${testimonial.name}</div> <div class="text-sm text-gray-500">${testimonial.position}</div> </div> </div> <p class="text-gray-600 mb-4">${testimonial.text}</p> <div class="flex items-center gap-1 text-[#FF6B35]"> ${Array.from({ length: testimonial.rating }).map((_, idx) => renderTemplate`<span>★</span>`)} </div> </div>`)} </div> </div> </section> <section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-6 text-center"> <h2 class="text-3xl font-bold mb-4">Ready to Protect Your Property?</h2> <p class="text-gray-600 mb-8">Contact our team to schedule a free survey and receive a customized pest control plan tailored to your needs.</p> <a href="/contact" class="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-8 py-4 rounded-md transition-colors">Book a Free Survey</a> </div> </section> ` })}`;
}, "C:/Users/OJT User/qure/src/pages/pestfolio.astro", void 0);

const $$file = "C:/Users/OJT User/qure/src/pages/pestfolio.astro";
const $$url = "/pestfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pestfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
