import { SITE } from './site';

export interface FaqItem {
  q: string;
  a: string;
}

const BASE_KEYWORDS = [
  'rubbish removal',
  'house clearance',
  'junk removal',
  'waste collection West Midlands',
  'Rubbish Removal Team',
];

export function trimDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

export function metaKeywords(path: string, extras: string[] = []): string {
  const parts = [...extras, ...BASE_KEYWORDS];
  return [...new Set(parts)].slice(0, 12).join(', ');
}

export function hubKeywords(place: string, hub?: string): string[] {
  const labels = hub && hub !== place ? [place, hub] : [place];
  return labels.flatMap((name) => [
    `rubbish removal ${name}`,
    `house clearance ${name}`,
    `junk removal ${name}`,
    `waste collection ${name}`,
  ]);
}

export function homeFaqs(): FaqItem[] {
  return [
    {
      q: 'Where do you offer rubbish removal in the West Midlands?',
      a: 'Rubbish Removal Team collects waste across Birmingham, Wolverhampton, Walsall, Dudley, West Bromwich, Sutton Coldfield, Solihull, Coventry, Nuneaton, Redditch, Halesowen and Lichfield, plus nearby neighbourhoods.',
    },
    {
      q: 'Do you do house clearance as well as junk removal?',
      a: 'Yes. We provide house clearance, junk removal, garden waste collection, bulky item collection, office clearance and light renovation waste collection across the West Midlands.',
    },
    {
      q: 'How much does rubbish removal cost?',
      a: 'Price depends on volume, access and waste type. Call the local number for your town for a quote before we load, so there are no surprise tip fees.',
    },
    {
      q: 'Are you licensed waste carriers?',
      a: 'Yes. Loads are sorted for recycling and reuse before residual waste goes to licensed facilities. We are a rubbish removal and house clearance service, not a house-moving company.',
    },
  ];
}

export function hubFaqs(place: string, phone: string, nearby: string): FaqItem[] {
  return [
    {
      q: `How much does rubbish removal in ${place} cost?`,
      a: `Price depends on volume, access, and load type. Call ${phone} for a ${place} quote. We confirm before we load so there are no surprise tip fees.`,
    },
    {
      q: `Do you offer same-day junk removal in ${place}?`,
      a: `Yes, same-day rubbish removal in ${place} is often available Monday to Saturday, subject to the local crew diary. Call ${phone} before midday where possible.`,
    },
    {
      q: `What waste can you take from ${place}?`,
      a: `House clearance, garden waste, bulky furniture, appliances, loft clutter, and light renovation debris from ${place}. Hazardous chemicals and asbestos need a specialist contractor.`,
    },
    {
      q: `Are you licensed waste carriers covering ${place}?`,
      a: `${SITE.name} uses licensed disposal routes. Loads from ${place} are sorted for recycling and reuse before residual waste goes to licensed facilities. Nearby coverage includes ${nearby}.`,
    },
  ];
}
