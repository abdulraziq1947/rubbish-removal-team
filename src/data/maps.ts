import { hubDestination, type LocationHub, type SubArea } from './locations';

const KEY = import.meta.env.PUBLIC_GOOGLE_MAPS_EMBED_KEY ?? '';

/** Official GBP place embeds supplied for each hub listing. */
export const placeEmbeds: Record<string, string> = {
  birmingham:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.482490445241!2d-1.8627329000000061!3d52.505998899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb9e6cfa6ebb%3A0x1d36a2ebfbb45697!2sRubbish%20Removal%20Team%20Birmingham!5e0!3m2!1sen!2suk!4v1789654358719!5m2!1sen!2suk',
  wolverhampton:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.5189525523588!2d-2.126437000000003!3d52.5979277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709b433b1b3a11%3A0x7014936c821b1f5b!2sRubbish%20Removal%20Team%20Wolverhampton!5e0!3m2!1sen!2suk!4v1789654373706!5m2!1sen!2suk',
  walsall:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.3872778107943!2d-1.9869841000000095!3d52.59121029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a300373e6ce9%3A0x54213d6a2c8afe00!2sRubbish%20Removal%20Team%20Walsall!5e0!3m2!1sen!2suk!4v1789654392112!5m2!1sen!2suk',
  dudley:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.3136213045245!2d-2.099235299999993!3d52.516481999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709bb990b8d089%3A0xe609f2b79f0cc6fc!2sRubbish%20Removal%20Team%20Dudley!5e0!3m2!1sen!2suk!4v1789654407108!5m2!1sen!2suk',
  'west-bromwich':
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.9838797664406!2d-2.0036290000000014!3d52.533295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870990faeed60ab%3A0x93245a75e5c4cfb9!2sRubbish%20Removal%20Team%20West%20Bromwich!5e0!3m2!1sen!2suk!4v1789654423858!5m2!1sen!2suk',
  'sutton-coldfield':
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.41538965266!2d-1.8227909000000002!3d52.562098899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a559ffb8f927%3A0x4a5480e57c3abfc!2sRubbish%20Removal%20Team%20Sutton%20Coldfield!5e0!3m2!1sen!2suk!4v1789654438534!5m2!1sen!2suk',
  solihull:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.6289409551446!2d-1.7752467000000076!3d52.427913999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b7eb9f9296a1%3A0xc603044b317632e3!2sRubbish%20Removal%20Team%20Solihull!5e0!3m2!1sen!2suk!4v1789654453341!5m2!1sen!2suk',
  coventry:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.170866739697!2d-1.5270119000000004!3d52.4085119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b7da488d6e7%3A0xfe7fcbbc624834c2!2sRubbish%20Removal%20Team%20Coventry!5e0!3m2!1sen!2suk!4v1789654470156!5m2!1sen!2suk',
  nuneaton:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6159975758915!2d-1.4695586000000054!3d52.523397700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48775185de4c6e07%3A0xaf7882b690df7e8f!2sRubbish%20Removal%20Team%20Nuneaton!5e0!3m2!1sen!2suk!4v1789654484638!5m2!1sen!2suk',
  redditch:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.2300585117787!2d-1.9322580000000042!3d52.304402499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870c1d36e5878b5%3A0x7a879b99fa25272e!2sRubbish%20Removal%20Team%20Redditch!5e0!3m2!1sen!2suk!4v1789654499755!5m2!1sen!2suk',
  halesowen:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.1063984724487!2d-2.058239300000001!3d52.4530349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870976e4c8b4bc5%3A0x613d20a8d8233ea4!2sRubbish%20Removal%20Team%20Halesowen!5e0!3m2!1sen!2suk!4v1789654515492!5m2!1sen!2suk',
  lichfield:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.7322874083616!2d-1.826273!3d52.682871999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a7b9eb705f2f%3A0xa3516085d4643e66!2sRubbish%20Removal%20Team%20Lichfield!5e0!3m2!1sen!2suk!4v1789654529667!5m2!1sen!2suk',
};

function encode(value: string) {
  return encodeURIComponent(value);
}

function listingName(hub: LocationHub) {
  return `Rubbish Removal Team ${hub.name}`;
}

function generatedPlaceEmbed(hub: LocationHub): string {
  const query = hubDestination(hub);
  if (KEY) {
    const params = new URLSearchParams({
      key: KEY,
      q: query,
      zoom: '14',
      center: `${hub.lat},${hub.lng}`,
    });
    return `https://www.google.com/maps/embed/v1/place?${params.toString()}`;
  }
  return `https://maps.google.com/maps?q=${encode(query)}&ll=${hub.lat},${hub.lng}&z=14&hl=en&output=embed`;
}

export function placeEmbed(hub: LocationHub): string {
  return placeEmbeds[hub.slug] ?? generatedPlaceEmbed(hub);
}

/** Driving directions from a catchment area to that hub's GBP listing. */
export function directionsEmbed(hub: LocationHub, origin: SubArea | string): string {
  const originLabel =
    typeof origin === 'string' ? origin : `${origin.name}, ${hub.name}, UK`;
  const destination = listingName(hub);

  if (KEY) {
    const params = new URLSearchParams({
      key: KEY,
      origin: originLabel,
      destination,
      mode: 'driving',
    });
    return `https://www.google.com/maps/embed/v1/directions?${params.toString()}`;
  }

  return `https://maps.google.com/maps?saddr=${encode(originLabel)}&daddr=${encode(destination)}&hl=en&output=embed`;
}

export function directionsLink(hub: LocationHub, origin?: SubArea | string): string {
  const destination = listingName(hub);
  if (!origin) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encode(destination)}`;
  }
  const originLabel =
    typeof origin === 'string' ? origin : `${origin.name}, ${hub.name}, UK`;
  return `https://www.google.com/maps/dir/?api=1&origin=${encode(originLabel)}&destination=${encode(destination)}&travelmode=driving`;
}
