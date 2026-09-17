export interface SubArea {
  name: string;
  slug: string;
}

export interface LocationHub {
  name: string;
  slug: string;
  phone: string;
  phoneDisplay: string;
  gmb: string;
  lat: number;
  lng: number;
  /** Optional street address when provided in GBP data */
  streetAddress?: string;
  postalCode?: string;
  region: string;
  catchmentNote: string;
  wikidata: string;
  subAreas: SubArea[];
}

function fmt(phone: string): string {
  // UK local display: group roughly for readability
  if (phone.startsWith('0121')) {
    return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
  }
  if (phone.startsWith('024')) {
    return `${phone.slice(0, 3)} ${phone.slice(3, 7)} ${phone.slice(7)}`;
  }
  if (phone.length === 11) {
    return `${phone.slice(0, 5)} ${phone.slice(5, 8)} ${phone.slice(8)}`;
  }
  return phone;
}

export const locations: LocationHub[] = [
  {
    name: 'Birmingham',
    slug: 'birmingham',
    phone: '01214652191',
    phoneDisplay: fmt('01214652191'),
    gmb: 'https://maps.app.goo.gl/NMiEEhdpf2a5YZEz5',
    lat: 52.506,
    lng: -1.8627,
    region: 'West Midlands',
    catchmentNote: 'Central Birmingham and inner suburbs',
    wikidata: 'Q2256',
    subAreas: [
      { name: 'Digbeth', slug: 'digbeth' },
      { name: 'Edgbaston', slug: 'edgbaston' },
      { name: 'Harborne', slug: 'harborne' },
      { name: 'Moseley', slug: 'moseley' },
      { name: 'Kings Heath', slug: 'kings-heath' },
      { name: 'Aston', slug: 'aston' },
    ],
  },
  {
    name: 'Wolverhampton',
    slug: 'wolverhampton',
    phone: '01902595167',
    phoneDisplay: fmt('01902595167'),
    gmb: 'https://maps.app.goo.gl/ZyKwYHUSPzk2JYDBA',
    lat: 52.5979,
    lng: -2.1264,
    region: 'West Midlands',
    catchmentNote: 'Wolverhampton and surrounding towns',
    wikidata: 'Q126269',
    subAreas: [
      { name: 'Bilston', slug: 'bilston' },
      { name: 'Wednesfield', slug: 'wednesfield' },
      { name: 'Tettenhall', slug: 'tettenhall' },
      { name: 'Perton', slug: 'perton' },
    ],
  },
  {
    name: 'Walsall',
    slug: 'walsall',
    phone: '01922311061',
    phoneDisplay: fmt('01922311061'),
    gmb: 'https://maps.app.goo.gl/4qLhzbCSe6F4ZT7Q8',
    lat: 52.5912,
    lng: -1.987,
    region: 'West Midlands',
    catchmentNote: 'Walsall and neighbouring districts',
    wikidata: 'Q504618',
    subAreas: [
      { name: 'Bloxwich', slug: 'bloxwich' },
      { name: 'Pelsall', slug: 'pelsall' },
      { name: 'Aldridge', slug: 'aldridge' },
      { name: 'Walsall Wood', slug: 'walsall-wood' },
    ],
  },
  {
    name: 'Dudley',
    slug: 'dudley',
    phone: '01384930192',
    phoneDisplay: fmt('01384930192'),
    gmb: 'https://maps.app.goo.gl/MuMu5PLyy4BVEuzy6',
    lat: 52.5165,
    lng: -2.0992,
    region: 'West Midlands',
    catchmentNote: 'Dudley and the Black Country towns nearby',
    wikidata: 'Q213832',
    subAreas: [
      { name: 'Brierley Hill', slug: 'brierley-hill' },
      { name: 'Sedgley', slug: 'sedgley' },
      { name: 'Kingswinford', slug: 'kingswinford' },
      { name: 'Cradley Heath', slug: 'cradley-heath' },
    ],
  },
  {
    name: 'West Bromwich',
    slug: 'west-bromwich',
    phone: '01214652124',
    phoneDisplay: fmt('01214652124'),
    gmb: 'https://maps.app.goo.gl/XRJEY4JFH8KLR7Yk9',
    lat: 52.5333,
    lng: -2.0036,
    region: 'West Midlands',
    catchmentNote: 'West Bromwich and Sandwell catchments',
    wikidata: 'Q212477',
    subAreas: [
      { name: 'Smethwick', slug: 'smethwick' },
      { name: 'Oldbury', slug: 'oldbury' },
      { name: 'Great Barr', slug: 'great-barr' },
      { name: 'Wednesbury', slug: 'wednesbury' },
    ],
  },
  {
    name: 'Sutton Coldfield',
    slug: 'sutton-coldfield',
    phone: '01214652106',
    phoneDisplay: fmt('01214652106'),
    gmb: 'https://maps.app.goo.gl/nXM7cFjazz7EKB5B8',
    lat: 52.5621,
    lng: -1.8228,
    streetAddress: 'The Parade',
    region: 'West Midlands',
    catchmentNote: 'Sutton Coldfield town centre and surrounding suburbs',
    wikidata: 'Q868647',
    subAreas: [
      { name: 'Four Oaks', slug: 'four-oaks' },
      { name: 'Boldmere', slug: 'boldmere' },
      { name: 'Wylde Green', slug: 'wylde-green' },
      { name: 'Mere Green', slug: 'mere-green' },
    ],
  },
  {
    name: 'Solihull',
    slug: 'solihull',
    phone: '01214652108',
    phoneDisplay: fmt('01214652108'),
    gmb: 'https://maps.app.goo.gl/T8WQYTJ4PYzDwy5r9',
    lat: 52.4279,
    lng: -1.7752,
    streetAddress: '2 Vulcan Road',
    region: 'West Midlands',
    catchmentNote: 'Solihull and neighbouring villages',
    wikidata: 'Q138255',
    subAreas: [
      { name: 'Shirley', slug: 'shirley' },
      { name: 'Knowle', slug: 'knowle' },
      { name: 'Dorridge', slug: 'dorridge' },
      { name: 'Olton', slug: 'olton' },
    ],
  },
  {
    name: 'Coventry',
    slug: 'coventry',
    phone: '02476070379',
    phoneDisplay: fmt('02476070379'),
    gmb: 'https://maps.app.goo.gl/Dm145ffUbEF17Lej7',
    lat: 52.4085,
    lng: -1.527,
    region: 'West Midlands',
    catchmentNote: 'Coventry and nearby villages',
    wikidata: 'Q6225',
    subAreas: [
      { name: 'Allesley', slug: 'allesley' },
      { name: 'Binley', slug: 'binley' },
      { name: 'Baginton', slug: 'baginton' },
      { name: 'Wolston', slug: 'wolston' },
    ],
  },
  {
    name: 'Nuneaton',
    slug: 'nuneaton',
    phone: '02476070381',
    phoneDisplay: fmt('02476070381'),
    gmb: 'https://maps.app.goo.gl/VAajTCE8MnEvMe8D6',
    lat: 52.5234,
    lng: -1.4696,
    streetAddress: '12 Abbey Street',
    postalCode: 'CV11 5BT',
    region: 'Warwickshire',
    catchmentNote: 'Nuneaton and surrounding towns',
    wikidata: 'Q175280',
    subAreas: [
      { name: 'Bedworth', slug: 'bedworth' },
      { name: 'Hinckley', slug: 'hinckley' },
      { name: 'Atherstone', slug: 'atherstone' },
      { name: 'Bulkington', slug: 'bulkington' },
    ],
  },
  {
    name: 'Redditch',
    slug: 'redditch',
    phone: '01527306753',
    phoneDisplay: fmt('01527306753'),
    gmb: 'https://maps.app.goo.gl/nQGUaBzpqAu4xA1y5',
    lat: 52.3044,
    lng: -1.9323,
    region: 'Worcestershire',
    catchmentNote: 'Redditch and surrounding villages',
    wikidata: 'Q1616453',
    subAreas: [
      { name: 'Studley', slug: 'studley' },
      { name: 'Alvechurch', slug: 'alvechurch' },
      { name: 'Astwood Bank', slug: 'astwood-bank' },
      { name: 'Beoley', slug: 'beoley' },
    ],
  },
  {
    name: 'Halesowen',
    slug: 'halesowen',
    phone: '01214652109',
    phoneDisplay: fmt('01214652109'),
    gmb: 'https://maps.app.goo.gl/tU1G1AmoqNNZHR2Z7',
    lat: 52.453,
    lng: -2.0582,
    region: 'West Midlands',
    catchmentNote: 'Halesowen and bordering Sandwell/Birmingham areas',
    wikidata: 'Q1016931',
    subAreas: [
      { name: 'Quinton', slug: 'quinton' },
      { name: 'Blackheath', slug: 'blackheath' },
      { name: 'Cradley Heath', slug: 'cradley-heath' },
      { name: 'Rowley Regis', slug: 'rowley-regis' },
    ],
  },
  {
    name: 'Lichfield',
    slug: 'lichfield',
    phone: '01543241308',
    phoneDisplay: fmt('01543241308'),
    gmb: 'https://maps.app.goo.gl/XRdfxpsKC9Uda9vc9',
    lat: 52.6829,
    lng: -1.8263,
    region: 'Staffordshire',
    catchmentNote: 'Lichfield and surrounding villages',
    wikidata: 'Q207371',
    subAreas: [
      { name: 'Burntwood', slug: 'burntwood' },
      { name: 'Fradley', slug: 'fradley' },
      { name: 'Shenstone', slug: 'shenstone' },
      { name: 'Whittington', slug: 'whittington' },
    ],
  },
];

export function getHub(slug: string): LocationHub | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getSubArea(hubSlug: string, subSlug: string) {
  const hub = getHub(hubSlug);
  if (!hub) return undefined;
  const sub = hub.subAreas.find((s) => s.slug === subSlug);
  if (!sub) return undefined;
  return { hub, sub };
}

export function toE164(phone: string): string {
  if (phone.startsWith('0')) return `+44${phone.slice(1)}`;
  return phone;
}

export function telHref(phone: string): string {
  return `tel:${toE164(phone)}`;
}

export function hubDestination(hub: LocationHub): string {
  if (hub.streetAddress && hub.postalCode) {
    return `${hub.streetAddress}, ${hub.name} ${hub.postalCode}`;
  }
  if (hub.streetAddress) {
    return `${hub.streetAddress}, ${hub.name}`;
  }
  return `Rubbish Removal Team ${hub.name}`;
}

export function hubPlaceQuery(hub: LocationHub): string {
  return `Rubbish Removal Team ${hub.name}`;
}

export const stockImages = [
  {
    url: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1600&q=80',
    alt: 'Recycling wheelie bin ready for rubbish collection',
  },
  {
    url: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Collected bottles and plastics sorted for recycling',
  },
  {
    url: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'House clearance packing and bulky item collection',
  },
  {
    url: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Commercial unit clearance and warehouse waste collection',
  },
  {
    url: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Hi-vis crew carrying out industrial clearance work',
  },
  {
    url: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Construction site waste and renovation debris clearance',
  },
];

export function imageForIndex(i: number) {
  return stockImages[Math.abs(i) % stockImages.length];
}
