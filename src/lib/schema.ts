import { SITE } from '../data/site';
import { locations, toE164, type LocationHub, type SubArea } from '../data/locations';

const BASE = SITE.domain;

export function organizationId() {
  return `${BASE}/#organization`;
}

export function websiteId() {
  return `${BASE}/#website`;
}

export function hubBusinessId(hub: LocationHub) {
  return `${BASE}/${hub.slug}/#localbusiness`;
}

export function hubPageId(hub: LocationHub) {
  return `${BASE}/${hub.slug}/#webpage`;
}

export function subPageId(hub: LocationHub, sub: SubArea) {
  return `${BASE}/${hub.slug}/${sub.slug}/#webpage`;
}

function offerCatalog(hub: LocationHub) {
  return {
    '@type': 'OfferCatalog',
    '@id': `${BASE}/${hub.slug}/#offercatalog`,
    name: `Rubbish Removal Services in ${hub.name}`,
    itemListElement: SITE.services.map((service, index) => ({
      '@type': 'Offer',
      '@id': `${BASE}/${hub.slug}/#offer-${service.slug}`,
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        '@id': `${BASE}/${hub.slug}/#service-${service.slug}`,
        name: `${service.name} in ${hub.name}`,
        description: service.description,
        serviceType: service.name,
        provider: { '@id': hubBusinessId(hub) },
        areaServed: {
          '@type': 'City',
          name: hub.name,
        },
      },
    })),
  };
}

function postalAddress(hub: LocationHub) {
  return {
    '@type': 'PostalAddress',
    ...(hub.streetAddress ? { streetAddress: hub.streetAddress } : {}),
    addressLocality: hub.name,
    addressRegion: hub.region,
    ...(hub.postalCode ? { postalCode: hub.postalCode } : {}),
    addressCountry: SITE.country,
  };
}

function openingHours() {
  return [
    'Mo-Fr 07:00-19:00',
    'Sa 08:00-17:00',
    'Su 09:00-16:00',
  ];
}

export function buildOrganizationNode() {
  return {
    '@type': 'Organization',
    '@id': organizationId(),
    name: SITE.name,
    legalName: SITE.legalName,
    url: BASE,
    logo: {
      '@type': 'ImageObject',
      '@id': `${BASE}/#logo`,
      url: `${BASE}${SITE.logo}`,
      contentUrl: `${BASE}${SITE.logo}`,
      caption: SITE.name,
    },
    image: `${BASE}${SITE.logo}`,
    description: SITE.description,
    foundingLocation: {
      '@type': 'Place',
      name: SITE.foundingRegion,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'West Midlands',
    },
    knowsAbout: [...SITE.knowsAbout],
    subOrganization: locations.map((hub) => ({
      '@id': hubBusinessId(hub),
    })),
  };
}

export function buildWebsiteNode() {
  return {
    '@type': 'WebSite',
    '@id': websiteId(),
    url: BASE,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': organizationId() },
    inLanguage: 'en-GB',
  };
}

export function buildLocalBusinessNode(hub: LocationHub) {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': hubBusinessId(hub),
    name: `${SITE.name} ${hub.name}`,
    alternateName: `Rubbish Removal ${hub.name}`,
    description: `Professional rubbish removal, house clearance, and junk collection in ${hub.name} and surrounding areas including ${hub.subAreas.map((s) => s.name).join(', ')}.`,
    url: `${BASE}/${hub.slug}`,
    telephone: toE164(hub.phone),
    image: `${BASE}${SITE.logo}`,
    priceRange: SITE.priceRange,
    currenciesAccepted: SITE.currency,
    paymentAccepted: 'Cash, Card, Bank Transfer',
    parentOrganization: { '@id': organizationId() },
    branchOf: { '@id': organizationId() },
    address: postalAddress(hub),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: hub.lat,
      longitude: hub.lng,
    },
    hasMap: hub.gmb,
    sameAs: [hub.gmb],
    openingHours: openingHours(),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: hub.name },
      ...hub.subAreas.map((sub) => ({
        '@type': 'Place',
        name: sub.name,
        url: `${BASE}/${hub.slug}/${sub.slug}`,
      })),
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: hub.lat,
        longitude: hub.lng,
      },
      geoRadius: '20000',
      containsPlace: hub.subAreas.map((sub) => ({
        '@type': 'Place',
        name: sub.name,
      })),
    },
    knowsAbout: [
      `Rubbish removal ${hub.name}`,
      `House clearance ${hub.name}`,
      `Junk removal ${hub.name}`,
      ...SITE.knowsAbout,
    ],
    hasOfferCatalog: offerCatalog(hub),
    additionalType: 'https://www.wikidata.org/wiki/Q1520765',
  };
}

export function buildBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${items[items.length - 1].url}/#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildWebPage(opts: {
  id: string;
  url: string;
  name: string;
  description: string;
  mainEntityId?: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': opts.id,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': websiteId() },
    about: { '@id': organizationId() },
    ...(opts.mainEntityId
      ? { mainEntity: { '@id': opts.mainEntityId } }
      : {}),
    inLanguage: 'en-GB',
  };
}

export function buildServiceNode(opts: {
  hub: LocationHub;
  placeName: string;
  pageUrl: string;
}) {
  const { hub, placeName, pageUrl } = opts;
  return {
    '@type': 'Service',
    '@id': `${pageUrl}/#service`,
    name: `Rubbish Removal in ${placeName}`,
    serviceType: 'Rubbish removal',
    description: `Rubbish removal and waste clearance in ${placeName}, covering house clearances, garden waste, bulky items, and commercial junk collection.`,
    provider: { '@id': hubBusinessId(hub) },
    areaServed: {
      '@type': 'Place',
      name: placeName,
    },
    offers: {
      '@type': 'Offer',
      url: pageUrl,
      priceCurrency: SITE.currency,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function buildHomeGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      buildWebsiteNode(),
      buildWebPage({
        id: `${BASE}/#webpage`,
        url: BASE,
        name: `${SITE.name} | Rubbish Removal West Midlands`,
        description: SITE.description,
        mainEntityId: organizationId(),
      }),
      buildBreadcrumb([
        { name: 'Home', url: BASE },
      ]),
      ...locations.map((hub) => buildLocalBusinessNode(hub)),
    ],
  };
}

export function buildHubGraph(hub: LocationHub) {
  const url = `${BASE}/${hub.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      buildWebsiteNode(),
      buildLocalBusinessNode(hub),
      buildWebPage({
        id: hubPageId(hub),
        url,
        name: `Rubbish Removal ${hub.name} | ${SITE.name}`,
        description: `Rubbish removal in ${hub.name}. Call ${hub.phoneDisplay} for house clearance, junk removal, and waste collection.`,
        mainEntityId: hubBusinessId(hub),
      }),
      buildBreadcrumb([
        { name: 'Home', url: BASE },
        { name: hub.name, url },
      ]),
      buildServiceNode({ hub, placeName: hub.name, pageUrl: url }),
    ],
  };
}

export function buildSubGraph(hub: LocationHub, sub: SubArea) {
  const url = `${BASE}/${hub.slug}/${sub.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      buildWebsiteNode(),
      buildLocalBusinessNode(hub),
      buildWebPage({
        id: subPageId(hub, sub),
        url,
        name: `Rubbish Removal ${sub.name} | ${SITE.name}`,
        description: `Rubbish removal in ${sub.name} near ${hub.name}. Local junk removal and house clearance from ${SITE.name}.`,
        mainEntityId: `${url}/#service`,
      }),
      buildBreadcrumb([
        { name: 'Home', url: BASE },
        { name: hub.name, url: `${BASE}/${hub.slug}` },
        { name: sub.name, url },
      ]),
      buildServiceNode({ hub, placeName: sub.name, pageUrl: url }),
    ],
  };
}
