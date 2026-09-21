import { SITE } from '../data/site';
import { locations, toE164, type LocationHub, type SubArea } from '../data/locations';
import type { ServicePage } from '../data/services';
import { services } from '../data/services';

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
          sameAs: `https://www.wikidata.org/wiki/${hub.wikidata}`,
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
      {
        '@type': 'City',
        name: hub.name,
        sameAs: `https://www.wikidata.org/wiki/${hub.wikidata}`,
      },
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
  mentions?: { name: string; sameAs?: string }[];
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
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.hero__lead', '.faq-answer'],
    },
    ...(opts.mentions?.length
      ? {
          mentions: opts.mentions.map((m) => ({
            '@type': 'Place',
            name: m.name,
            ...(m.sameAs ? { sameAs: m.sameAs } : {}),
          })),
        }
      : {}),
    dateModified: new Date().toISOString().slice(0, 10),
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

export function buildFaqPage(pageUrl: string, faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}/#faq`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function buildHowTo() {
  return {
    '@type': 'HowTo',
    '@id': `${BASE}/#howto`,
    name: 'How rubbish removal works',
    description:
      'Book a collection, we load the waste, then sort it for recycling before residual waste goes to licensed facilities.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Book your rubbish collection',
        text: 'Call with the town, waste type and access details so we can quote rubbish removal in the West Midlands.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'We collect your waste',
        text: 'Furniture, garden waste, renovation rubble and loft clutter are loaded from the property.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Licensed recycling and disposal',
        text: 'Loads are separated for recycling and reuse before residual waste goes to licensed facilities.',
      },
    ],
  };
}

export function buildLocationsGraph() {
  const url = `${BASE}/locations`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      buildWebsiteNode(),
      buildWebPage({
        id: `${url}/#webpage`,
        url,
        name: 'Our Locations | Rubbish Removal Team',
        description:
          'All Rubbish Removal Team locations across the West Midlands, Warwickshire, Worcestershire and Staffordshire with local phone numbers and addresses.',
        mainEntityId: organizationId(),
        mentions: locations.map((hub) => ({
          name: hub.name,
          sameAs: `https://www.wikidata.org/wiki/${hub.wikidata}`,
        })),
      }),
      buildBreadcrumb([
        { name: 'Home', url: BASE },
        { name: 'Our Locations', url },
      ]),
    ],
  };
}

export function buildServicesIndexGraph() {
  const url = `${BASE}/services`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      buildWebsiteNode(),
      buildWebPage({
        id: `${url}/#webpage`,
        url,
        name: 'Rubbish Removal Services | House Clearance & Junk Removal',
        description:
          'House clearance, junk removal, garden waste, office clearance and bulky item collection across the West Midlands.',
        mainEntityId: organizationId(),
        mentions: services.map((s) => ({ name: s.name })),
      }),
      buildBreadcrumb([
        { name: 'Home', url: BASE },
        { name: 'Services', url },
      ]),
      {
        '@type': 'ItemList',
        '@id': `${url}/#itemlist`,
        name: 'Rubbish Removal Services',
        numberOfItems: services.length,
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.name,
          url: `${BASE}/services/${service.slug}`,
        })),
      },
    ],
  };
}

export function buildServicePageGraph(
  service: ServicePage,
  faqs: { q: string; a: string }[] = [],
) {
  const url = `${BASE}/services/${service.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      buildWebsiteNode(),
      buildWebPage({
        id: `${url}/#webpage`,
        url,
        name: service.title,
        description: service.description,
        mainEntityId: `${url}/#service`,
        mentions: [
          { name: 'West Midlands', sameAs: 'https://www.wikidata.org/wiki/Q23124' },
          ...locations.slice(0, 6).map((hub) => ({
            name: hub.name,
            sameAs: `https://www.wikidata.org/wiki/${hub.wikidata}`,
          })),
        ],
      }),
      buildBreadcrumb([
        { name: 'Home', url: BASE },
        { name: 'Services', url: `${BASE}/services` },
        { name: service.name, url },
      ]),
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        name: service.h1,
        serviceType: service.name,
        description: service.description,
        provider: { '@id': organizationId() },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'West Midlands',
          sameAs: 'https://www.wikidata.org/wiki/Q23124',
        },
        url,
        offers: {
          '@type': 'Offer',
          url,
          priceCurrency: SITE.currency,
          availability: 'https://schema.org/InStock',
        },
      },
      ...(faqs.length ? [buildFaqPage(url, faqs)] : []),
    ],
  };
}

export function buildHomeGraph(faqs: { q: string; a: string }[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      buildWebsiteNode(),
      buildWebPage({
        id: `${BASE}/#webpage`,
        url: BASE,
        name: 'Rubbish Removal West Midlands | House Clearance & Junk Removal',
        description: SITE.description,
        mainEntityId: organizationId(),
        mentions: [
          { name: 'West Midlands', sameAs: 'https://www.wikidata.org/wiki/Q23124' },
          ...locations.slice(0, 8).map((hub) => ({
            name: hub.name,
            sameAs: `https://www.wikidata.org/wiki/${hub.wikidata}`,
          })),
        ],
      }),
      buildBreadcrumb([{ name: 'Home', url: BASE }]),
      buildHowTo(),
      ...(faqs.length ? [buildFaqPage(BASE, faqs)] : []),
    ],
  };
}

export function buildHubGraph(
  hub: LocationHub,
  faqs: { q: string; a: string }[] = [],
) {
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
        name: `Rubbish Removal ${hub.name} | House Clearance & Junk Removal`,
        description: `Rubbish removal in ${hub.name}. House clearance, junk removal, garden waste and bulky collections. Call ${hub.phoneDisplay}.`,
        mainEntityId: hubBusinessId(hub),
        mentions: [
          { name: hub.name, sameAs: `https://www.wikidata.org/wiki/${hub.wikidata}` },
          { name: hub.region },
          ...hub.subAreas.map((sub) => ({ name: sub.name })),
        ],
      }),
      buildBreadcrumb([
        { name: 'Home', url: BASE },
        { name: `Rubbish Removal ${hub.name}`, url },
      ]),
      buildServiceNode({ hub, placeName: hub.name, pageUrl: url }),
      ...(faqs.length ? [buildFaqPage(url, faqs)] : []),
    ],
  };
}

export function buildSubGraph(
  hub: LocationHub,
  sub: SubArea,
  faqs: { q: string; a: string }[] = [],
) {
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
        name: `Rubbish Removal ${sub.name} | House Clearance near ${hub.name}`,
        description: `Rubbish removal in ${sub.name} near ${hub.name}. House clearance, junk removal and garden waste collection.`,
        mainEntityId: `${url}/#service`,
        mentions: [
          { name: sub.name },
          { name: hub.name, sameAs: `https://www.wikidata.org/wiki/${hub.wikidata}` },
        ],
      }),
      buildBreadcrumb([
        { name: 'Home', url: BASE },
        { name: hub.name, url: `${BASE}/${hub.slug}` },
        { name: `Rubbish Removal ${sub.name}`, url },
      ]),
      buildServiceNode({ hub, placeName: sub.name, pageUrl: url }),
      {
        '@type': 'Place',
        '@id': `${url}/#place`,
        name: sub.name,
        description: `Rubbish removal covering ${sub.name}, served from Rubbish Removal Team ${hub.name}.`,
        containedInPlace: {
          '@type': 'City',
          name: hub.name,
          sameAs: `https://www.wikidata.org/wiki/${hub.wikidata}`,
        },
      },
      ...(faqs.length ? [buildFaqPage(url, faqs)] : []),
    ],
  };
}
