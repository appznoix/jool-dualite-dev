export interface FloorPlan {
  id: string;
  name: { pt: string; en: string };
  image: string;
  area: number;
}

export interface Property {
  id: string;
  name: { pt: string; en: string };
  location: { pt: string; en: string };
  minArea: number;
  minPrice: number;
  gallery: { src: string; alt: string }[];
  description: { pt: string; en: string };
  highlights: {
    bedrooms: number;
    bathrooms: number;
    parking: number;
  };
  amenities: { pt: string[]; en: string[] };
  floorPlans: FloorPlan[];
  mapEmbed: string;
}

export const properties: Property[] = [
  {
    id: '1',
    name: { pt: 'Azure Residence', en: 'Azure Residence' },
    location: { pt: 'Praia de Iracema, Fortaleza', en: 'Iracema Beach, Fortaleza' },
    minArea: 120,
    minPrice: 2500000,
    gallery: [
      { src: 'https://images.unsplash.com/photo-1613977257363-3116139381eb?auto=format&fit=crop&w=1200&q=80', alt: 'Fachada do Azure Residence' },
      { src: 'https://images.unsplash.com/photo-1600585152225-3579fe9d7ae2?auto=format&fit=crop&w=1200&q=80', alt: 'Sala de estar espaçosa com vista para o mar' },
      { src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80', alt: 'Quarto master com design moderno' },
      { src: 'https://images.unsplash.com/photo-1579854768484-7226261bcb7b?auto=format&fit=crop&w=1200&q=80', alt: 'Piscina com borda infinita' },
    ],
    description: {
      pt: 'O Azure Residence redefine o conceito de morar bem. Com uma arquitetura imponente e vista panorâmica para o mar da Praia de Iracema, cada detalhe foi pensado para oferecer o máximo de conforto e sofisticação. Apartamentos amplos, lazer completo e a brisa do mar como sua companhia diária.',
      en: 'Azure Residence redefines the concept of fine living. With its imposing architecture and panoramic sea views of Iracema Beach, every detail has been designed to offer maximum comfort and sophistication. Spacious apartments, complete leisure facilities, and the sea breeze as your daily companion.',
    },
    highlights: { bedrooms: 3, bathrooms: 4, parking: 2 },
    amenities: {
      pt: ['Piscina com borda infinita', 'Academia completa', 'Salão de festas gourmet', 'Spa com sauna', 'Acesso direto à praia', 'Segurança 24h'],
      en: ['Infinity pool', 'Fully equipped gym', 'Gourmet party hall', 'Spa with sauna', 'Direct beach access', '24h security'],
    },
    floorPlans: [
      { id: 'fp1', name: { pt: 'Tipo A - 120m²', en: 'Type A - 120sqm' }, image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/E8E9EA/0A2463?text=Planta+Tipo+A', area: 120 },
      { id: 'fp2', name: { pt: 'Tipo B - 150m²', en: 'Type B - 150sqm' }, image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/E8E9EA/0A2463?text=Planta+Tipo+B', area: 150 },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.353999944641!2d-38.5144138852408!3d-3.722567797277761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7486204555555%3A0x238287416768853b!2sPraia%20de%20Iracema!5e0!3m2!1spt-BR!2sbr!4v1678886543210!5m2!1spt-BR!2sbr',
  },
  {
    id: '2',
    name: { pt: 'Coral Gardens', en: 'Coral Gardens' },
    location: { pt: 'Cumbuco, Caucaia', en: 'Cumbuco, Caucaia' },
    minArea: 180,
    minPrice: 3800000,
    gallery: [
      { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80', alt: 'Vista externa do Coral Gardens' },
      { src: 'https://images.unsplash.com/photo-1600585153325-1871a26b7a97?auto=format&fit=crop&w=1200&q=80', alt: 'Jardim privativo com piscina' },
      { src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80', alt: 'Interior da sala de estar' },
    ],
    description: {
      pt: 'Viva em um paraíso particular no Coral Gardens. Localizado na paradisíaca praia do Cumbuco, este empreendimento oferece casas de luxo com design contemporâneo, amplos jardins privativos e acesso a um clube exclusivo com lazer completo para toda a família.',
      en: 'Live in a private paradise at Coral Gardens. Located on the idyllic Cumbuco beach, this development offers luxury homes with contemporary design, large private gardens, and access to an exclusive club with complete leisure facilities for the whole family.',
    },
    highlights: { bedrooms: 4, bathrooms: 5, parking: 4 },
    amenities: {
      pt: ['Clube de praia privativo', 'Quadras de tênis e beach tennis', 'Piscina com raia olímpica', 'Restaurante exclusivo', 'Heliponto'],
      en: ['Private beach club', 'Tennis and beach tennis courts', 'Olympic-lane pool', 'Exclusive restaurant', 'Heliport'],
    },
    floorPlans: [
      { id: 'fp1', name: { pt: 'Casa Terra - 180m²', en: 'Ground House - 180sqm' }, image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/E8E9EA/0A2463?text=Planta+Casa+Terra', area: 180 },
      { id: 'fp2', name: { pt: 'Casa Duplex - 240m²', en: 'Duplex House - 240sqm' }, image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/E8E9EA/0A2463?text=Planta+Casa+Duplex', area: 240 },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.95738555047!2d-38.7319446852413!3d-3.59666699736594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c75c03e0655555%3A0x3e30c6a5a02591fa!2sPraia%20de%20Cumbuco!5e0!3m2!1spt-BR!2sbr!4v1678886654321!5m2!1spt-BR!2sbr',
  },
  {
    id: '3',
    name: { pt: 'Villa do Sol', en: 'Sun Villa' },
    location: { pt: 'Jericoacoara', en: 'Jericoacoara' },
    minArea: 250,
    minPrice: 5200000,
    gallery: [
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', alt: 'Fachada da Villa do Sol' },
      { src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80', alt: 'Área de convivência aberta' },
      { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80', alt: 'Suíte master luxuosa' },
    ],
    description: {
      pt: 'A Villa do Sol é a expressão máxima de luxo e exclusividade em Jericoacoara. Uma propriedade única, com arquitetura que se integra à natureza, oferecendo privacidade total, conforto inigualável e uma vista deslumbrante para o pôr do sol mais famoso do Brasil.',
      en: 'Sun Villa is the ultimate expression of luxury and exclusivity in Jericoacoara. A unique property with architecture that integrates with nature, offering total privacy, unparalleled comfort, and a breathtaking view of Brazil\'s most famous sunset.',
    },
    highlights: { bedrooms: 5, bathrooms: 6, parking: 4 },
    amenities: {
      pt: ['Piscina privativa de areia', 'Cinema particular', 'Adega climatizada', 'Serviço de concierge', 'Vista para a Duna do Pôr do Sol'],
      en: ['Private sand pool', 'Private cinema', 'Wine cellar', 'Concierge service', 'View of the Sunset Dune'],
    },
    floorPlans: [
      { id: 'fp1', name: { pt: 'Planta Única - 250m²', en: 'Single Floor Plan - 250sqm' }, image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/E8E9EA/0A2463?text=Planta+Unica', area: 250 },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948.330999558236!2d-40.52538885!3d-2.7945138499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c03102d0555555%3A0x6a0a7c1b5b5b5b5b!2sJericoacoara!5e0!3m2!1spt-BR!2sbr!4v1678886765432!5m2!1spt-BR!2sbr',
  },
];
