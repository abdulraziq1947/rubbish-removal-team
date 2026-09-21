import { SITE } from './site';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePage {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  short: string;
  lead: string;
  body: string[];
  whatWeTake: string[];
  whoFor: string[];
  keywords: string[];
  faqs: ServiceFaq[];
}

export const services: ServicePage[] = [
  {
    slug: 'house-clearance',
    name: 'House Clearance',
    h1: 'House Clearance West Midlands',
    title: 'House Clearance West Midlands | Full & Partial Clearances',
    description:
      'House clearance across the West Midlands. Full and partial clearances of homes, flats and rental properties. Licensed waste collection with recycling-first disposal.',
    short:
      'Full and partial house and flat clearances, including furniture, appliances and general household waste.',
    lead:
      'House clearance for homes, flats and rental properties across Birmingham, Coventry, Wolverhampton and the wider West Midlands. We load everything and dispose of it through licensed channels.',
    body: [
      'Rubbish Removal Team provides house clearance across the West Midlands, Warwickshire, Worcestershire and Staffordshire. Whether you need a full house clearance after a move, probate, or eviction, or a partial clearance of one or two rooms, we load the waste and leave the property clear.',
      'House clearance is different from a house move. We collect unwanted furniture, appliances, carpets, loft clutter and general household waste for recycling and licensed disposal. We do not relocate belongings to a new address.',
      'Call your local Rubbish Removal Team number for a quote. Price depends on volume and access. We confirm before we load so there are no surprise tip fees.',
    ],
    whatWeTake: [
      'Furniture, sofas, beds and mattresses',
      'White goods and household appliances',
      'Carpets, curtains and soft furnishings',
      'Loft, garage and shed clutter',
      'General household rubbish and packaging',
      'Light renovation debris from DIY work',
    ],
    whoFor: [
      'Homeowners decluttering or renovating',
      'Landlords and letting agents after tenant exit',
      'Probate and estate clearances',
      'Property managers preparing a sale or re-let',
    ],
    keywords: [
      'house clearance West Midlands',
      'house clearance Birmingham',
      'full house clearance',
      'flat clearance',
      'rental property clearance',
    ],
    faqs: [
      {
        q: 'How much does house clearance cost in the West Midlands?',
        a: 'House clearance pricing depends on volume, access and waste type. Call your local Rubbish Removal Team number for a quote before we load.',
      },
      {
        q: 'Do you clear whole houses or just rooms?',
        a: 'Both. We offer full house clearance and partial clearances of single rooms, lofts, garages or outdoor spaces.',
      },
      {
        q: 'Is house clearance the same as house removals?',
        a: 'No. We clear waste for recycling and licensed disposal. We do not move furniture to a new home.',
      },
    ],
  },
  {
    slug: 'junk-removal',
    name: 'Junk Removal',
    h1: 'Junk Removal West Midlands',
    title: 'Junk Removal West Midlands | Same-Day Waste Collection',
    description:
      'Junk removal across the West Midlands. Same-day collection of household junk, furniture and bulky waste. Licensed rubbish removal without hiring a skip.',
    short:
      'Same-day junk removal for household clutter, furniture and bulky waste — loaded and taken without a skip on the drive.',
    lead:
      'Junk removal across Birmingham, Coventry, Solihull, Wolverhampton and nearby towns. We collect household junk and bulky items, often the same day, with recycling-first disposal.',
    body: [
      'Looking for junk removal in the West Midlands? Rubbish Removal Team collects unwanted furniture, appliances, garden junk and general household waste from homes and businesses. No skip hire and no tip run — we do the heavy lifting.',
      'Junk removal works well when you need a one-off clear-out: a garage clear, end-of-tenancy rubbish, or a pile of bulky items that will not fit in your bin. Call the local number for your town and we will arrange collection.',
      'Loads are sorted for recycling and reuse before residual waste goes to licensed facilities. We are licensed waste carriers, not a man-and-van moving company.',
    ],
    whatWeTake: [
      'Household junk and general waste',
      'Sofas, chairs and broken furniture',
      'Old appliances and white goods',
      'Garden junk and outdoor clutter',
      'Boxes of mixed rubbish and packaging',
      'Electronics and small electricals (where accepted)',
    ],
    whoFor: [
      'Households needing a quick clear-out',
      'Landlords clearing tenant waste',
      'Shops and offices disposing of clutter',
      'Anyone avoiding skip hire on a tight driveway',
    ],
    keywords: [
      'junk removal West Midlands',
      'junk removal Birmingham',
      'same day junk removal',
      'waste collection',
      'rubbish clearance',
    ],
    faqs: [
      {
        q: 'Do you offer same-day junk removal?',
        a: 'Yes, same-day junk removal is often available Monday to Saturday, subject to the local crew diary. Call before midday where possible.',
      },
      {
        q: 'What junk can you take?',
        a: 'Household furniture, appliances, garden junk, loft clutter and general waste. Hazardous chemicals and asbestos need a specialist contractor.',
      },
      {
        q: 'Is junk removal cheaper than skip hire?',
        a: 'For many jobs yes — especially where access is tight or you only have a partial load. We quote on volume so you only pay for what we take.',
      },
    ],
  },
  {
    slug: 'garden-waste',
    name: 'Garden Waste Removal',
    h1: 'Garden Waste Removal West Midlands',
    title: 'Garden Waste Removal West Midlands | Green Waste Collection',
    description:
      'Garden waste removal across the West Midlands. Green waste, soil, branches and outdoor clutter collected from gardens, sheds and outdoor spaces.',
    short:
      'Green waste, soil, branches and outdoor clutter collected from gardens, sheds and outdoor spaces.',
    lead:
      'Garden waste removal for homes and landlords across the West Midlands. We collect green waste, branches, soil and outdoor clutter so your garden is clear again.',
    body: [
      'Garden waste removal from Rubbish Removal Team covers green waste, soil, branches, hedge cuttings and outdoor clutter across Birmingham, Coventry, Redditch, Warwick and surrounding towns.',
      'If your council green bin is full, or you have a one-off garden clear after landscaping, we load the waste and take it for licensed disposal. Shed clear-outs and patio clutter are included.',
      'Call your local number for a garden waste collection quote. We confirm volume and access before we load.',
    ],
    whatWeTake: [
      'Grass cuttings, leaves and hedge trimmings',
      'Branches, logs and shrub waste',
      'Soil, turf and potting waste (reasonable volumes)',
      'Broken garden furniture and planters',
      'Shed contents and outdoor storage clutter',
      'Fence panels and light outdoor debris',
    ],
    whoFor: [
      'Homeowners after a garden clear or landscaping',
      'Landlords preparing outdoor spaces for new tenants',
      'Anyone with green waste that will not fit the council bin',
    ],
    keywords: [
      'garden waste removal West Midlands',
      'garden waste collection Birmingham',
      'green waste removal',
      'garden clearance',
      'shed clearance',
    ],
    faqs: [
      {
        q: 'Can you take soil and turf?',
        a: 'Yes, reasonable volumes of soil and turf can be included in garden waste removal. Large civil excavation loads may need a specialist tip.',
      },
      {
        q: 'Do you clear sheds as well as green waste?',
        a: 'Yes. Shed clear-outs, broken garden furniture and outdoor clutter are part of our garden waste removal service.',
      },
    ],
  },
  {
    slug: 'office-clearance',
    name: 'Office & Commercial Clearance',
    h1: 'Office Clearance West Midlands',
    title: 'Office Clearance West Midlands | Commercial & Shop Clearance',
    description:
      'Office clearance and commercial waste collection across the West Midlands. Clear shops, offices and commercial units for landlords, agents and business owners.',
    short:
      'Office, shop and commercial unit clearances for landlords, agents and business owners.',
    lead:
      'Office clearance and commercial junk removal across the West Midlands. We clear desks, fixtures, stock and general waste from offices, shops and commercial units.',
    body: [
      'Rubbish Removal Team provides office clearance and commercial clearance for landlords, agents and business owners across Birmingham, Coventry, Wolverhampton, Solihull and nearby towns.',
      'Whether you are vacating a lease, fitting out a new unit, or clearing leftover stock and fixtures, we load the waste and dispose of it through licensed channels with recycling first.',
      'Commercial clearances are quoted on volume and access. Call the local number covering your site for a same-week collection where diaries allow.',
    ],
    whatWeTake: [
      'Desks, chairs and office furniture',
      'Filing cabinets and shelving',
      'Shop fittings and display units',
      'Packaging, cardboard and mixed commercial waste',
      'IT equipment and peripherals (where accepted)',
      'Fit-out debris from light renovations',
    ],
    whoFor: [
      'Businesses vacating or downsizing',
      'Landlords and commercial agents',
      'Shop owners clearing fixtures and stock',
      'Facilities managers arranging a unit clear-out',
    ],
    keywords: [
      'office clearance West Midlands',
      'commercial clearance Birmingham',
      'shop clearance',
      'office waste collection',
      'commercial junk removal',
    ],
    faqs: [
      {
        q: 'Do you clear shops as well as offices?',
        a: 'Yes. Office clearance, shop clearance and commercial unit clear-outs are all covered.',
      },
      {
        q: 'Can you work outside normal hours?',
        a: 'Weekday collections run 7am–7pm, with Saturday and Sunday options. Ask when you book if you need a quieter slot.',
      },
    ],
  },
  {
    slug: 'bulky-items',
    name: 'Bulky Item Collection',
    h1: 'Bulky Item Collection West Midlands',
    title: 'Bulky Item Collection West Midlands | Sofa & Mattress Removal',
    description:
      'Bulky item collection across the West Midlands. Sofas, mattresses, white goods and large furniture collected and disposed of responsibly.',
    short:
      'Sofas, mattresses, white goods and other large items collected and disposed of responsibly.',
    lead:
      'Bulky item collection for sofas, mattresses, white goods and large furniture across the West Midlands. We collect what will not fit in your bin.',
    body: [
      'Bulky item collection from Rubbish Removal Team covers sofas, mattresses, fridges, freezers, washing machines and other large furniture across Birmingham, Coventry, Tamworth, Cannock and surrounding towns.',
      'Council bulky collections often mean long waits. We collect when you need the space cleared, often the same day, and sort loads for recycling where possible.',
      'Call your local number with the items and access details for a fixed quote before we arrive.',
    ],
    whatWeTake: [
      'Sofas, armchairs and sofa beds',
      'Mattresses and bed frames',
      'Fridges, freezers and white goods',
      'Wardrobes, tables and large furniture',
      'TVs and large electricals (where accepted)',
      'Exercise equipment and bulky household items',
    ],
    whoFor: [
      'Households replacing furniture',
      'Landlords clearing bulky tenant waste',
      'Anyone waiting too long for a council bulky collection',
    ],
    keywords: [
      'bulky item collection West Midlands',
      'sofa removal Birmingham',
      'mattress disposal',
      'fridge freezer collection',
      'white goods disposal',
    ],
    faqs: [
      {
        q: 'Can you take fridges and freezers?',
        a: 'Yes. White goods including fridges and freezers are collected as part of bulky item collection and disposed of through licensed routes.',
      },
      {
        q: 'How many bulky items can you take in one visit?',
        a: 'From a single sofa to a full room of furniture. We quote on volume so larger loads are still straightforward.',
      },
    ],
  },
  {
    slug: 'construction-waste',
    name: 'Construction & Renovation Waste',
    h1: 'Construction Waste Removal West Midlands',
    title: 'Construction Waste Removal West Midlands | Renovation Debris',
    description:
      'Construction and renovation waste removal across the West Midlands. DIY debris, plasterboard and light building waste cleared from homes and commercial sites.',
    short:
      'Debris from DIY projects, renovations and light construction cleared from residential and commercial sites.',
    lead:
      'Construction waste removal for DIY and renovation jobs across the West Midlands. We clear plasterboard, timber offcuts and light building debris without a skip on site.',
    body: [
      'Rubbish Removal Team clears construction and renovation waste from homes and light commercial sites across the West Midlands. Ideal when a skip will not fit, or you only have a partial load after a bathroom or kitchen refit.',
      'We collect plasterboard, timber offcuts, tiles, packaging and mixed renovation debris. Hazardous materials such as asbestos need a specialist contractor — tell us what you have when you book.',
      'Call the local crew covering your postcode for a construction waste removal quote based on volume and access.',
    ],
    whatWeTake: [
      'Plasterboard and plaster bags',
      'Timber offcuts and joinery waste',
      'Tiles, flooring and bathroom debris',
      'Packaging from materials and fixtures',
      'Light rubble and mixed renovation waste',
      'Old kitchen and bathroom fittings',
    ],
    whoFor: [
      'Homeowners mid-renovation',
      'Trades needing a partial load cleared',
      'Landlords refitting rental properties',
    ],
    keywords: [
      'construction waste removal West Midlands',
      'renovation waste collection',
      'DIY waste removal Birmingham',
      'plasterboard disposal',
      'building waste clearance',
    ],
    faqs: [
      {
        q: 'Can you take plasterboard?',
        a: 'Yes, plasterboard and light renovation debris are included in construction waste removal, subject to volume and local tip rules.',
      },
      {
        q: 'Do you take asbestos?',
        a: 'No. Asbestos and hazardous waste need a licensed specialist. Tell us what is on site when you book so we can advise.',
      },
    ],
  },
  {
    slug: 'garage-loft',
    name: 'Garage, Loft & Shed Clear-Outs',
    h1: 'Garage & Loft Clearance West Midlands',
    title: 'Garage & Loft Clearance West Midlands | Shed Clear-Outs',
    description:
      'Garage, loft and shed clearance across the West Midlands. Declutter storage spaces with licensed junk removal and recycling-first disposal.',
    short:
      'Decluttering and clearance of garages, lofts, sheds and storage spaces.',
    lead:
      'Garage clearance, loft clearance and shed clear-outs across the West Midlands. We empty storage spaces that have filled up over the years.',
    body: [
      'Garage and loft clearance is one of the most common junk removal jobs we handle. Rubbish Removal Team clears garages, lofts, sheds and outdoor stores across Birmingham, Coventry, Dudley, Halesowen and nearby towns.',
      'Years of stored clutter, old furniture, tools and mixed rubbish can go in one collection. We sort for recycling where possible and take residual waste to licensed facilities.',
      'Call your local number for a garage or loft clearance quote. Same-day collections are often available.',
    ],
    whatWeTake: [
      'Stored furniture and household items',
      'Boxes of mixed clutter and paperwork',
      'Old tools, bikes and sports gear',
      'Loft insulation offcuts and packaging',
      'Shed contents and outdoor storage junk',
      'Broken shelving and storage units',
    ],
    whoFor: [
      'Homeowners reclaiming garage or loft space',
      'Sellers preparing a property for market',
      'Anyone with a shed that has become a dump store',
    ],
    keywords: [
      'garage clearance West Midlands',
      'loft clearance Birmingham',
      'shed clearance',
      'garage junk removal',
      'storage clear out',
    ],
    faqs: [
      {
        q: 'Do you clear lofts as well as garages?',
        a: 'Yes. Garage clearance, loft clearance and shed clear-outs are all covered under this service.',
      },
      {
        q: 'Will you carry items down from the loft?',
        a: 'Yes. Our crews do the heavy lifting, including loft access where it is safe to do so.',
      },
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}

/** Keep SITE.services in sync for components that still read the short list. */
export function serviceShortList() {
  return services.map((s) => ({
    slug: s.slug,
    name: s.name,
    description: s.short,
  }));
}

export function serviceFaqs(service: ServicePage): ServiceFaq[] {
  return [
    ...service.faqs,
    {
      q: `Where do you offer ${service.name.toLowerCase()}?`,
      a: `${SITE.name} provides ${service.name.toLowerCase()} across the West Midlands, Warwickshire, Worcestershire and Staffordshire. Open our locations page to find the local number for your town.`,
    },
  ];
}
