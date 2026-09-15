export type Procedure = { name: string; description: string; image: string };

export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Fernanda Possagnolo',
  monogram: 'FP',
  headline: 'Harmonização facial com naturalidade. Beleza que respeita quem você é.',
  cro: '',
  bio: 'A harmonização facial é, para mim, uma forma de cuidar sem apagar identidades. Cada plano nasce de uma avaliação atenta, respeitando proporções e expressão para buscar resultados naturais e coerentes com cada pessoa.',
  education: [] as string[],
  specialties: ['Lábios', 'Full face', 'Botox'],
  phone: '',
  whatsapp: '(17) 99785-1264',
  whatsappUrl: 'https://wa.me/5517997851264?text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: '',
  professionalPhilosophy: 'Naturalidade é o meu diferencial.',
  instagram: 'https://www.instagram.com/dra.ferpossagnolo/',
  instagramHandle: '@dra.ferpossagnolo',
  philosophy: ['NATURALIDADE', 'ANTES DE', 'EXCESSOS.'],
  colors: {
    paper: '#f7f0e8',
    ink: '#241719',
    taupe: '#a66f43',
    champagne: '#d9b38b',
    dark: '#5a0c1d',
    wine: '#4b0918',
    muted: '#705d54',
  },
  images: {
    hero: '/images/fernanda-hero.webp',
    essence: '/images/fernanda-essencia.webp',
    about: '/images/fernanda-sobre.webp',
    beauty: '/images/fernanda-experiencia.webp',
  },
  procedures: [
    { name: 'Lábios', description: 'Contornos e volume planejados para valorizar a expressão com leveza.', image: '/images/resultado-contornos.webp' },
    { name: 'Full face', description: 'Um olhar global para proporções, equilíbrio e identidade.', image: '/images/resultado-proporcao.webp' },
    { name: 'Botox', description: 'Cuidado personalizado para suavizar sem congelar a sua expressão.', image: '/images/resultado-harmonia.webp' },
  ] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: {
    enabled: true,
    items: [
      { image: '/images/resultado-perfil.webp', label: 'Perfil em harmonia', alt: 'Registro de antes e depois de perfil, fornecido pela Dra. Fernanda Possagnolo.', orientation: 'vertical', beforeShare: 0.5, comparisonRatio: 1284 / (1578 / 2) },
      { image: '/images/resultado-contorno.webp', label: 'Contorno com equilíbrio', alt: 'Registro de antes e depois de perfil masculino, fornecido pela Dra. Fernanda Possagnolo.', orientation: 'horizontal', beforeShare: 0.5, comparisonRatio: (1220 / 2) / 1600 },
      { image: '/images/resultado-labios.webp', label: 'Lábios com naturalidade', alt: 'Registro de antes e depois de lábios, fornecido pela Dra. Fernanda Possagnolo.', orientation: 'vertical', beforeShare: 0.5, comparisonRatio: 1284 / (1365 / 2) },
      { image: '/images/resultado-rinomodelacao.webp', label: 'Perfil preservado', alt: 'Registro de antes e depois de perfil, fornecido pela Dra. Fernanda Possagnolo.', orientation: 'vertical', beforeShare: 0.5, comparisonRatio: 1284 / (1597 / 2) },
      { image: '/images/resultado-proporcao.webp', label: 'Proporções em equilíbrio', alt: 'Registro de antes e depois de perfil, fornecido pela Dra. Fernanda Possagnolo.', orientation: 'vertical', beforeShare: 0.5, comparisonRatio: 1188 / (1600 / 2) },
      { image: '/images/resultado-harmonia.webp', label: 'Leveza no perfil', alt: 'Registro de antes e depois de perfil, fornecido pela Dra. Fernanda Possagnolo.', orientation: 'vertical', beforeShare: 0.5, comparisonRatio: 1276 / (1600 / 2) },
      { image: '/images/resultado-contornos.webp', label: 'Contornos delicados', alt: 'Registro clínico de lábios, fornecido pela Dra. Fernanda Possagnolo.', orientation: 'single', beforeShare: 0.5, comparisonRatio: 1268 / 1600 },
    ],
  },
  seo: {
    title: 'Dra. Fernanda Possagnolo | Harmonização Facial',
    description: 'Harmonização facial de alto padrão, com naturalidade e respeito à identidade de cada pessoa.',
    url: '',
  },
};

export const appointmentUrl = site.whatsappUrl || site.instagram;
