const defaultSEOConfig = {
    title: "Learn-n8n",
    description: "Una breve descripción de mi sitio web.",
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: 'https://learn-n8n.vercel.app/',
      site_name: 'Learn-n8n',
      images: [
        {
          url: 'https://res.cloudinary.com/dxfksb8ua/image/upload/v1744998918/images/bfd888fb01d5421c6bf2c1e19610b97f_rg4gjd.jpg',
          width: 1200,
          height: 630,
          alt: 'Learn n8n',
        },
      ],
    },
    twitter: {
      handle: '@ekracing',
      site: '@ekracing',
      cardType: 'summary_large_image',
    },
    other: {
        "fb:app_id": "1643590099862579",
    }
  };
  
  export default defaultSEOConfig;
  