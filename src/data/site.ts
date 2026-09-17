export const SITE = {
  name: 'Rubbish Removal Team',
  legalName: 'Rubbish Removal Team',
  domain: 'https://rubbishremovalteam.co.uk',
  email: '',
  description:
    'Rubbish removal and house clearance across the West Midlands, including Birmingham, Wolverhampton, Coventry, Solihull, Walsall and Dudley.',
  logo: '/logo.png',
  priceRange: '££',
  currency: 'GBP',
  foundingRegion: 'West Midlands',
  country: 'GB',
  knowsAbout: [
    'Rubbish removal',
    'House clearance',
    'Junk removal',
    'Garden waste removal',
    'Office clearance',
    'Bulky waste collection',
    'Skip hire alternative',
    'Furniture disposal',
    'Construction waste removal',
    'Man and van rubbish clearance',
  ],
  services: [
    {
      slug: 'house-clearance',
      name: 'House Clearance',
      description:
        'Full and partial house and flat clearances, including furniture, appliances, and general household waste.',
    },
    {
      slug: 'garden-waste',
      name: 'Garden Waste Removal',
      description:
        'Green waste, soil, branches, and outdoor clutter collected from gardens, sheds, and outdoor spaces.',
    },
    {
      slug: 'office-clearance',
      name: 'Office & Commercial Clearance',
      description:
        'Office, shop, and commercial unit clearances for landlords, agents, and business owners.',
    },
    {
      slug: 'bulky-items',
      name: 'Bulky Item Collection',
      description:
        'Sofas, mattresses, white goods, and other large items collected and disposed of responsibly.',
    },
    {
      slug: 'construction-waste',
      name: 'Construction & Renovation Waste',
      description:
        'Debris from DIY projects, renovations, and light construction cleared from residential and commercial sites.',
    },
    {
      slug: 'garage-loft',
      name: 'Garage, Loft & Shed Clear-Outs',
      description:
        'Decluttering and clearance of garages, lofts, sheds, and storage spaces.',
    },
  ],
} as const;

export type SiteService = (typeof SITE.services)[number];
