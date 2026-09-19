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
  if (phone.startsWith('0121') && phone.length === 11) {
    return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
  }
  if (phone.startsWith('024') && phone.length === 11) {
    return `${phone.slice(0, 3)} ${phone.slice(3, 7)} ${phone.slice(7)}`;
  }
  if (phone.startsWith('01') && phone.length === 11) {
    return `${phone.slice(0, 5)} ${phone.slice(5, 8)} ${phone.slice(8)}`;
  }
  return phone;
}

function gmbFor(hub: {
  name: string;
  streetAddress?: string;
  postalCode?: string;
}): string {
  const query = hub.streetAddress
    ? `Rubbish Removal Team ${hub.name}, ${hub.streetAddress}, ${hub.name}${hub.postalCode ? ` ${hub.postalCode}` : ''}`
    : `Rubbish Removal Team ${hub.name}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
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
    phone: '01214052137',
    phoneDisplay: fmt('01214052137'),
    gmb: gmbFor({ name: 'West Bromwich', streetAddress: '43 Esher Rd', postalCode: 'B71 1QR' }),
    lat: 52.519,
    lng: -1.994,
    streetAddress: '43 Esher Rd',
    postalCode: 'B71 1QR',
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
      { name: 'Hinckley', slug: 'hinckley' },
      { name: 'Atherstone', slug: 'atherstone' },
      { name: 'Bulkington', slug: 'bulkington' },
      { name: 'Hartshill', slug: 'hartshill' },
    ],
  },
  {
    name: 'Bedworth',
    slug: 'bedworth',
    phone: '02475070386',
    phoneDisplay: fmt('02475070386'),
    gmb: gmbFor({ name: 'Bedworth', streetAddress: '6 Sleets Yard', postalCode: 'CV12 8UE' }),
    lat: 52.478,
    lng: -1.467,
    streetAddress: '6 Sleets Yard',
    postalCode: 'CV12 8UE',
    region: 'Warwickshire',
    catchmentNote: 'Bedworth and nearby north Warwickshire neighbourhoods',
    wikidata: 'Q813966',
    subAreas: [
      { name: 'Exhall', slug: 'exhall' },
      { name: 'Longford', slug: 'longford' },
      { name: 'Keresley', slug: 'keresley' },
      { name: 'Collycroft', slug: 'collycroft' },
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
    phone: '01214052135',
    phoneDisplay: fmt('01214052135'),
    gmb: gmbFor({ name: 'Halesowen', streetAddress: '15 Hagley Rd', postalCode: 'B63 4PU' }),
    lat: 52.449,
    lng: -2.051,
    streetAddress: '15 Hagley Rd',
    postalCode: 'B63 4PU',
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
    name: 'Stourbridge',
    slug: 'stourbridge',
    phone: '01384930201',
    phoneDisplay: fmt('01384930201'),
    gmb: gmbFor({ name: 'Stourbridge', streetAddress: '11 Victoria Psge', postalCode: 'DY8 1DP' }),
    lat: 52.461,
    lng: -2.143,
    streetAddress: '11 Victoria Psge',
    postalCode: 'DY8 1DP',
    region: 'West Midlands',
    catchmentNote: 'Stourbridge and the surrounding Black Country towns',
    wikidata: 'Q1288864',
    subAreas: [
      { name: 'Amblecote', slug: 'amblecote' },
      { name: 'Wollaston', slug: 'wollaston' },
      { name: 'Kinver', slug: 'kinver' },
      { name: 'Lye', slug: 'lye' },
    ],
  },
  {
    name: 'Kidderminster',
    slug: 'kidderminster',
    phone: '01562265073',
    phoneDisplay: fmt('01562265073'),
    gmb: gmbFor({ name: 'Kidderminster', streetAddress: '90 New Rd', postalCode: 'DY10 1AE' }),
    lat: 52.388,
    lng: -2.249,
    streetAddress: '90 New Rd',
    postalCode: 'DY10 1AE',
    region: 'Worcestershire',
    catchmentNote: 'Kidderminster and Wyre Forest towns nearby',
    wikidata: 'Q660127',
    subAreas: [
      { name: 'Stourport-on-Severn', slug: 'stourport-on-severn' },
      { name: 'Bewdley', slug: 'bewdley' },
      { name: 'Blakedown', slug: 'blakedown' },
      { name: 'Cookley', slug: 'cookley' },
    ],
  },
  {
    name: 'Bromsgrove',
    slug: 'bromsgrove',
    phone: '01527306792',
    phoneDisplay: fmt('01527306792'),
    gmb: gmbFor({ name: 'Bromsgrove', streetAddress: '2 Guild Ct', postalCode: 'B60 2BT' }),
    lat: 52.336,
    lng: -2.06,
    streetAddress: '2 Guild Ct',
    postalCode: 'B60 2BT',
    region: 'Worcestershire',
    catchmentNote: 'Bromsgrove and nearby Worcestershire villages',
    wikidata: 'Q921098',
    subAreas: [
      { name: 'Rubery', slug: 'rubery' },
      { name: 'Catshill', slug: 'catshill' },
      { name: 'Lickey End', slug: 'lickey-end' },
      { name: 'Barnt Green', slug: 'barnt-green' },
    ],
  },
  {
    name: 'Warwick',
    slug: 'warwick',
    phone: '01926266146',
    phoneDisplay: fmt('01926266146'),
    gmb: gmbFor({ name: 'Warwick', streetAddress: '31 Smith St', postalCode: 'CV34 4JA' }),
    lat: 52.281,
    lng: -1.589,
    streetAddress: '31 Smith St',
    postalCode: 'CV34 4JA',
    region: 'Warwickshire',
    catchmentNote: 'Warwick and surrounding Warwickshire towns',
    wikidata: 'Q844917',
    subAreas: [
      { name: 'Kenilworth', slug: 'kenilworth' },
      { name: 'Whitnash', slug: 'whitnash' },
      { name: 'Leamington Spa', slug: 'leamington-spa' },
      { name: 'Barford', slug: 'barford' },
    ],
  },
  {
    name: 'Tamworth',
    slug: 'tamworth',
    phone: '01827799048',
    phoneDisplay: fmt('01827799048'),
    gmb: gmbFor({ name: 'Tamworth', streetAddress: '22 West St', postalCode: 'B79 7JE' }),
    lat: 52.634,
    lng: -1.695,
    streetAddress: '22 West St',
    postalCode: 'B79 7JE',
    region: 'Staffordshire',
    catchmentNote: 'Tamworth and nearby Staffordshire towns',
    wikidata: 'Q875329',
    subAreas: [
      { name: 'Wilnecote', slug: 'wilnecote' },
      { name: 'Glascote', slug: 'glascote' },
      { name: 'Polesworth', slug: 'polesworth' },
      { name: 'Fazeley', slug: 'fazeley' },
    ],
  },
  {
    name: 'Cannock',
    slug: 'cannock',
    phone: '01543241317',
    phoneDisplay: fmt('01543241317'),
    gmb: gmbFor({ name: 'Cannock', streetAddress: '108 Cannock Rd', postalCode: 'WS11 5BH' }),
    lat: 52.687,
    lng: -2.019,
    streetAddress: '108 Cannock Rd',
    postalCode: 'WS11 5BH',
    region: 'Staffordshire',
    catchmentNote: 'Cannock and surrounding Staffordshire districts',
    wikidata: 'Q1025962',
    subAreas: [
      { name: 'Hednesford', slug: 'hednesford' },
      { name: 'Heath Hayes', slug: 'heath-hayes' },
      { name: 'Norton Canes', slug: 'norton-canes' },
      { name: 'Great Wyrley', slug: 'great-wyrley' },
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

const REGION_ORDER = ['West Midlands', 'Warwickshire', 'Worcestershire', 'Staffordshire'];

export function getHub(slug: string): LocationHub | undefined {
  return locations.find((l) => l.slug === slug);
}

export function locationsByRegion(): { region: string; hubs: LocationHub[] }[] {
  const grouped = new Map<string, LocationHub[]>();
  for (const hub of locations) {
    const list = grouped.get(hub.region) ?? [];
    list.push(hub);
    grouped.set(hub.region, list);
  }

  return REGION_ORDER.filter((region) => grouped.has(region)).map((region) => ({
    region,
    hubs: grouped.get(region)!,
  }));
}

export function formatAddress(hub: LocationHub): string {
  const parts = [hub.streetAddress, hub.name, hub.postalCode].filter(Boolean);
  return parts.join(', ');
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
