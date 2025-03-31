export default function sitemap() {
    const domena = process.env.NEXT_PUBLIC_DOMAIN_CLEAR;
  
    const staticPages = [
      { url: `${domena}`, priority: 1 },
      { url: `${domena}/kontakt`, priority: 0.8 },
      { url: `${domena}/reklama`, priority: 0.8 },
      { url: `${domena}/o-nas`, priority: 0.8 },
      { url: `${domena}/kariera`, priority: 0.8 },
    ];
  
    const categories = ['polityka', 'sport', 'kultura', 'technologia', 'biznes', 'nauka'];
  
    const categoryPages = categories.map((category) => ({
      url: `${domena}/kategoria/${category}`,
      priority: 0.7,
    }));
  
    return [...staticPages, ...categoryPages];
  }