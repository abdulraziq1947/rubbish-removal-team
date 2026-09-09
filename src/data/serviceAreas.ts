export type Region = 'West Midlands' | 'Greater Manchester';

export interface ServiceArea {
  name: string;
  slug: string;
  region: Region;
}

export const serviceAreas: ServiceArea[] = [
  { name: 'Birmingham', slug: 'birmingham', region: 'West Midlands' },
  { name: 'Wolverhampton', slug: 'wolverhampton', region: 'West Midlands' },
  { name: 'Walsall', slug: 'walsall', region: 'West Midlands' },
  { name: 'Dudley', slug: 'dudley', region: 'West Midlands' },
  { name: 'West Bromwich', slug: 'west-bromwich', region: 'West Midlands' },
  { name: 'Sutton Coldfield', slug: 'sutton-coldfield', region: 'West Midlands' },
  { name: 'Solihull', slug: 'solihull', region: 'West Midlands' },
  { name: 'Coventry', slug: 'coventry', region: 'West Midlands' },
  { name: 'Nuneaton', slug: 'nuneaton', region: 'West Midlands' },
  { name: 'Redditch', slug: 'redditch', region: 'West Midlands' },
  { name: 'Stourbridge', slug: 'stourbridge', region: 'West Midlands' },
  { name: 'Halesowen', slug: 'halesowen', region: 'West Midlands' },
  { name: 'Cannock', slug: 'cannock', region: 'West Midlands' },
  { name: 'Lichfield', slug: 'lichfield', region: 'West Midlands' },
  { name: 'Hinckley', slug: 'hinckley', region: 'West Midlands' },
  { name: 'Bromsgrove', slug: 'bromsgrove', region: 'West Midlands' },
  { name: 'Coleshill', slug: 'coleshill', region: 'West Midlands' },
  { name: 'Brewood', slug: 'brewood', region: 'West Midlands' },
  { name: 'Balsall Common', slug: 'balsall-common', region: 'West Midlands' },
  { name: 'Broughton Astley', slug: 'broughton-astley', region: 'West Midlands' },
  { name: 'Manchester', slug: 'manchester', region: 'Greater Manchester' },
  { name: 'Salford', slug: 'salford', region: 'Greater Manchester' },
  { name: 'Stockport', slug: 'stockport', region: 'Greater Manchester' },
  { name: 'Oldham', slug: 'oldham', region: 'Greater Manchester' },
  { name: 'Rochdale', slug: 'rochdale', region: 'Greater Manchester' },
  { name: 'Bolton', slug: 'bolton', region: 'Greater Manchester' },
  { name: 'Bury', slug: 'bury', region: 'Greater Manchester' },
  { name: 'Wigan', slug: 'wigan', region: 'Greater Manchester' },
  { name: 'Warrington', slug: 'warrington', region: 'Greater Manchester' },
  { name: 'Altrincham', slug: 'altrincham', region: 'Greater Manchester' },
  { name: 'Ashton-under-Lyne', slug: 'ashton-under-lyne', region: 'Greater Manchester' },
  { name: 'Leigh', slug: 'leigh', region: 'Greater Manchester' },
  { name: 'Wilmslow', slug: 'wilmslow', region: 'Greater Manchester' },
];

export const stockImages = [
  {
    url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b16b?w=1200&q=80',
    alt: 'Recycling and waste sorting',
    credit: 'Unsplash',
  },
  {
    url: 'https://images.unsplash.com/photo-1621451539292-a24a2b865cab?w=1200&q=80',
    alt: 'Waste collection and disposal',
    credit: 'Unsplash',
  },
  {
    url: 'https://images.unsplash.com/photo-1611284446314-60d2986f258d?w=1200&q=80',
    alt: 'Skip hire and rubbish removal',
    credit: 'Unsplash',
  },
  {
    url: 'https://images.unsplash.com/photo-1595278069441-2cf29f5755df?w=1200&q=80',
    alt: 'Garden waste clearance',
    credit: 'Unsplash',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    alt: 'Property clearance services',
    credit: 'Unsplash',
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getImageForArea(slug: string) {
  const index = serviceAreas.findIndex((area) => area.slug === slug);
  return stockImages[index >= 0 ? index % stockImages.length : 0];
}

export const regions: Region[] = ['West Midlands', 'Greater Manchester'];

export function getAreasByRegion(region: Region): ServiceArea[] {
  return serviceAreas.filter((area) => area.region === region);
}
