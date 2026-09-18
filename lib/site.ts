export const site = {
  name: "Z1 CONCEPTS",
  shortName: "Z1",
  tagline: "Best car wash in Manjeri. Google rated 4.6.",
  description:
    "Best car wash in Manjeri. Z1 Concepts is Google rated 4.6 from 10 reviews for car wash, detailing, PPF, ceramic coating and styling on Manjeri-Pandikkad Road.",
  seoTitle: "Best Car Wash in Manjeri | Z1 Concepts | Google 4.6",
  location: {
    city: "Manjeri",
    region: "Kerala",
    country: "India",
    countryCode: "IN",
    postalCode: "676122",
    streetAddress:
      "Manjeri-Pandikkad Road, near Madheena Hotel, Kizhakkethala",
    fullAddress:
      "Z1 Concepts, Manjeri-Pandikkad Road, near Madheena Hotel, Kizhakkethala, Manjeri, Kerala 676122",
  },
  instagram: {
    handle: "@z1.concepts_manjeri",
    url: "https://www.instagram.com/z1.concepts_manjeri/",
  },
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 86064 64006",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 85905 98812",
  hours: "Closes 9 pm",
  rating: {
    value: 4.6,
    count: 10,
    source: "Google",
  },
  enquiryMessage:
    "Hello Z1 Concepts. I would like to enquire about detailing, protection or styling for my car.",
  mapsSearchUrl: "https://share.google/xmlpAHymKvfLHlAjC",
} as const;

export const categories = [
  {
    id: "services",
    index: "01",
    title: "Detail",
    cta: "Explore Detailing",
    href: "/services",
    image: "/images/z1/maps-shop-2.jpg",
    imageAlt: "BMW models being washed inside the Z1 Concepts detailing bay",
    items: [
      "Washing",
      "Detailing",
      "Polishing",
      "Interior Cleaning",
      "AC Treatment",
    ],
  },
  {
    id: "protection",
    index: "02",
    title: "Protect",
    cta: "Explore Protection",
    href: "/protection",
    image: "/images/z1/ig-july08.jpg",
    imageAlt: "Finished black Ford at the Z1 Concepts detailing bay",
    items: [
      "PPF",
      "Ceramic",
      "Graphene",
      "Borophene",
      "Nanodiamond",
      "Glass Coating",
    ],
  },
  {
    id: "styling",
    index: "03",
    title: "Transform",
    cta: "Explore Styling",
    href: "/styling",
    image: "/images/z1/ig-july09.jpg",
    imageAlt: "Suzuki Swift with body-kit parts laid out at Z1 Concepts",
    items: ["Wrapping", "Facelifting", "Body Kits", "Sunfilm", "Painting"],
  },
] as const;

export const featuredServices = [
  {
    name: "Paint Protection Film",
    short: "PPF",
    description:
      "A clear film layer designed to help shield paint from daily marks, stone chips and wear, while staying visually discreet.",
    image: "/images/z1/ig-july08.jpg",
    imageAlt: "Glossy protected vehicle parked in a Z1 Concepts bay",
    href: "/protection",
  },
  {
    name: "Ceramic Coating",
    short: "Ceramic",
    description:
      "A surface coating for a deeper gloss and easier cleaning. Ask the studio which coating family suits your vehicle.",
    image: "/images/z1/ig-june26.jpg",
    imageAlt: "Finished teal Suzuki Swift after studio work at Z1 Concepts",
    href: "/protection",
  },
  {
    name: "Car Detailing",
    short: "Detailing",
    description:
      "Meticulous interior and exterior care: washing, cleaning and finishing that goes beyond a standard car wash.",
    image: "/images/z1/ig-jeep.jpg",
    imageAlt: "Foam wash on a Land Rover Defender at Z1 Concepts",
    href: "/services",
  },
  {
    name: "Polishing",
    short: "Polishing",
    description:
      "Paint polishing to restore clarity and depth. The exact approach depends on the condition of your vehicle.",
    image: "/images/z1/ig-july06.jpg",
    imageAlt: "Orange Suzuki Swift in foam during detailing at Z1 Concepts",
    href: "/services",
  },
  {
    name: "Car Wrapping",
    short: "Wrapping",
    description:
      "Colour change and styling through professional wrapping, a visual transformation without a full respray.",
    image: "/images/z1/ig-july09.jpg",
    imageAlt: "Body-kit styling work in the Z1 Concepts studio",
    href: "/styling",
  },
] as const;

export const detailingServices = [
  {
    name: "Car Washing",
    copy: "Exterior wash work at the studio bays, including foam wash.",
    image: "/images/z1/ig-jeep.jpg",
    imageAlt: "Land Rover Defender under foam at Z1 Concepts",
  },
  {
    name: "Car Detailing",
    copy: "Meticulous interior and exterior care that goes beyond a standard wash.",
    image: "/images/z1/ig-tagged.jpg",
    imageAlt: "Red BMW being detailed at Z1 Concepts",
  },
  {
    name: "Polishing",
    copy: "Paint polishing to restore clarity and depth, matched to the vehicle’s condition.",
    image: "/images/z1/ig-july06.jpg",
    imageAlt: "Orange Swift in foam during studio work",
  },
  {
    name: "Interior Cleaning",
    copy: "Cabin cleaning offered as part of Z1’s detailing range.",
    image: "/images/z1/ig-june26.jpg",
    imageAlt: "Finished vehicle after studio work",
  },
  {
    name: "AC Treatment",
    copy: "AC treatment as listed among Z1 detailing services.",
    image: "/images/z1/maps-shop-2.jpg",
    imageAlt: "Z1 Concepts wash and detailing bays",
  },
  {
    name: "Glass Coating",
    copy: "Glass coating as listed among Z1 detailing services.",
    image: "/images/z1/ig-july08.jpg",
    imageAlt: "Finished vehicle at a Z1 Concepts bay",
  },
  {
    name: "Underbody Coating",
    copy: "Underbody coating offered at the studio.",
    image: "/images/z1/maps-shop-4.jpg",
    imageAlt: "Cars in the Z1 Concepts workshop bays",
  },
  {
    name: "Silencer Coating",
    copy: "Silencer coating as listed among Z1 services.",
    image: "/images/z1/maps-shop-1.jpg",
    imageAlt: "Z1 Concepts studio frontage in Manjeri",
  },
] as const;

export const stylingServices = [
  {
    name: "Car Wrapping",
    copy: "Colour change and styling through professional wrapping.",
    image: "/images/z1/ig-july08.jpg",
    imageAlt: "Finished black Ford at Z1 Concepts",
  },
  {
    name: "Facelifting",
    copy: "Visual refresh and facelift work offered at the studio.",
    image: "/images/z1/maps-shop-3.jpg",
    imageAlt: "Vehicles outside the Z1 Concepts facade",
  },
  {
    name: "Body Kits",
    copy: "Body-kit fitment and related styling work.",
    image: "/images/z1/ig-july09.jpg",
    imageAlt: "Body kit laid out in front of a Swift at Z1 Concepts",
  },
  {
    name: "Sunfilm",
    copy: "Sunfilm as listed among Z1 styling services.",
    image: "/images/z1/ig-june26.jpg",
    imageAlt: "Finished teal Swift at the studio",
  },
  {
    name: "Painting",
    copy: "Painting as listed among Z1 styling services.",
    image: "/images/z1/maps-shop-5.jpg",
    imageAlt: "Z1 Concepts studio on Pandikkad Road",
  },
] as const;

export const coatings = [
  {
    name: "Ceramic Coating",
    copy: "A popular finish for gloss, beading and easier wash-downs.",
  },
  {
    name: "Graphene Coating",
    copy: "An advanced coating option in Z1’s protection range.",
  },
  {
    name: "Borophene Coating",
    copy: "A specialised surface coating offered at the studio.",
  },
  {
    name: "Nanodiamond Coating",
    copy: "A premium coating choice for owners who want extra surface care.",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Inspect",
    copy: "Every vehicle is looked over so the work can be matched to its condition.",
  },
  {
    index: "02",
    title: "Prepare",
    copy: "Surfaces are cleaned and prepared before detailing, protection or styling begins.",
  },
  {
    index: "03",
    title: "Detail",
    copy: "Washing, interior care, polishing and related finishing are carried out as required.",
  },
  {
    index: "04",
    title: "Protect / Style",
    copy: "PPF, coatings, wrapping or styling work is applied where the owner has chosen it.",
  },
  {
    index: "05",
    title: "Deliver",
    copy: "The vehicle is checked and handed back, ready for the road.",
  },
] as const;

export const galleryItems = [
  {
    src: "/images/z1/maps-shop-2.jpg",
    alt: "BMW models being washed inside the Z1 Concepts detailing bay",
    label: "The bay",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/z1/ig-jeep.jpg",
    alt: "Land Rover Defender covered in foam",
    label: "Foam wash",
    span: "",
  },
  {
    src: "/images/z1/ig-july08.jpg",
    alt: "Black Ford parked at a Z1 Concepts bay",
    label: "Finished",
    span: "",
  },
  {
    src: "/images/z1/ig-tagged.jpg",
    alt: "Red BMW being hand-washed in front of the Z1 Concepts studio wall",
    label: "Studio",
    span: "lg:col-span-2",
  },
  {
    src: "/images/z1/ig-july09.jpg",
    alt: "Body kit laid out in front of a white Swift",
    label: "Body kit",
    span: "",
  },
  {
    src: "/images/z1/ig-june26.jpg",
    alt: "Teal Suzuki Swift after studio finishing",
    label: "Finish",
    span: "",
  },
  {
    src: "/images/z1/maps-shop-1.jpg",
    alt: "Z1 Concepts frontage with cars in the bays",
    label: "Frontage",
    span: "",
  },
  {
    src: "/images/z1/maps-shop-3.jpg",
    alt: "Z1 Concepts street facade with vehicles outside",
    label: "Street",
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    src: "/images/z1/maps-shop-4.jpg",
    alt: "Cars parked in the Z1 Concepts detailing bays",
    label: "Workshop",
    span: "",
  },
  {
    src: "/images/z1/ig-june24.jpg",
    alt: "Mercedes-Benz in foam at the wash bay",
    label: "Wash",
    span: "",
  },
] as const;

export const reviews = [
  {
    quote: "Best quality service & staff dealing. Highly recommended.",
    source: "Google review",
  },
  {
    quote: "Good work and affordable price — especially detailing and washing.",
    source: "Google review",
  },
  {
    quote: "Best detailing option. Highly professional staff.",
    source: "Google review",
  },
] as const;

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Protection", href: "/protection" },
  { label: "Styling", href: "/styling" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "Detail", href: "/services" },
  { label: "Protect", href: "/protection" },
  { label: "Style", href: "/styling" },
  { label: "Visit", href: "/contact" },
] as const;

export function getWhatsAppHref(message: string = site.enquiryMessage) {
  const text = encodeURIComponent(message);
  const number = site.whatsapp.replace(/[^\d]/g, "");
  if (number) return `https://wa.me/${number}?text=${text}`;
  return `https://wa.me/?text=${text}`;
}

export function getTelHref() {
  const phone = site.phone.replace(/[^\d+]/g, "");
  return phone ? `tel:${phone}` : undefined;
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoDetailing", "LocalBusiness"],
  name: site.name,
  description: site.description,
  url: "https://akhilmansoor5-maker.github.io/Z1-concepts/",
  image: "https://akhilmansoor5-maker.github.io/Z1-concepts/brand/z1-logo.png",
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.location.streetAddress,
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    postalCode: site.location.postalCode,
    addressCountry: site.location.countryCode,
  },
  hasMap: site.mapsSearchUrl,
  sameAs: [site.instagram.url],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.map((item) => ({
    "@type": "Review",
    reviewBody: item.quote,
    author: {
      "@type": "Person",
      name: item.source,
    },
    publisher: {
      "@type": "Organization",
      name: "Google",
    },
  })),
  knowsAbout: [
    "Car wash",
    "Car detailing",
    "Paint protection film",
    "Ceramic coating",
    "Car wrapping",
  ],
  areaServed: {
    "@type": "City",
    name: site.location.city,
  },
};
