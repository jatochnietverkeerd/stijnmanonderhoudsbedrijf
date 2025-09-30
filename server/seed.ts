import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { projects, testimonials, blogPosts } from "@shared/schema";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

async function seed() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
  const db = drizzle(pool);

  console.log("Seeding database...");

  // Sample projects
  const sampleProjects = [
    {
      title: "Complete Dakrenovatie",
      description: "Volledige vernieuwing van jaren '30 woning met zink detaillering en hoogwaardige isolatie.",
      serviceType: "zink",
      location: "Haarlem Noord",
      completedDate: "Maart 2024",
      images: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
      featured: "true"
    },
    {
      title: "Zink Dakgoot Renovatie", 
      description: "Vervanging van oude dakgoten met nieuwe zinken goten en regenpijpen.",
      serviceType: "zink",
      location: "Haarlem Centrum",
      completedDate: "April 2024",
      images: [
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1556909114-74e8eb30e54c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1516417901640-48fb25c96c75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ],
      featured: "true"
    },
    {
      title: "Koperen Dakbedekking",
      description: "Exclusieve koperen dakbedekking voor monumentaal grachtenpand met respect voor historische details.",
      serviceType: "koper",
      location: "Amsterdam Centrum",
      completedDate: "Januari 2024",
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      ],
      featured: "true"
    },
    {
      title: "Dakpannen Restauratie",
      description: "Volledige restauratie van historisch pannendak met behoud van authentieke uitstraling.",
      serviceType: "pannen",
      location: "Bloemendaal",
      completedDate: "December 2023",
      images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
      featured: "true"
    },
    {
      title: "Pannen Dak Nieuwbouw",
      description: "Nieuw pannendak voor moderne villa met hoogwaardige keramische dakpannen.",
      serviceType: "pannen", 
      location: "Amsterdam Noord",
      completedDate: "Februari 2024",
      images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
      featured: "true"
    },
    {
      title: "Membrane Dak Kantoorpand",
      description: "EPDM dakbedekking voor groot kantoorcomplex met 15 jaar garantie.",
      serviceType: "membrane",
      location: "Haarlem Zuid", 
      completedDate: "Mei 2024",
      images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"],
      featured: "true"
    }
  ];

  // Sample testimonials
  const sampleTestimonials = [
    {
      name: "Maria van der Berg",
      location: "Haarlem Noord",
      rating: "5",
      content: "Uitstekend werk geleverd aan ons dak in Haarlem Noord. Van offerte tot oplevering alles volgens afspraak. De kwaliteit van het zinkwerk is prachtig en de 15 jaar garantie geeft veel vertrouwen.",
      serviceType: "zink",
      isVideo: "false",
      videoUrl: null
    },
    {
      name: "Jan Bakker",
      location: "Amsterdam Centrum",
      rating: "5",
      content: "Professionele aanpak bij de restauratie van ons monumentale pand. Stijnman begrijpt traditioneel vakmanschap en heeft ons koperen dak prachtig hersteld. Zeer tevreden!",
      serviceType: "koper",
      isVideo: "false",
      videoUrl: null
    },
    {
      name: "Linda Jansen",
      location: "Bloemendaal",
      rating: "5",
      content: "Snelle en vakkundige reparatie van stormschade. Binnen een week was alles hersteld. De communicatie was uitstekend en de prijs eerlijk. Zeker een aanrader!",
      serviceType: "reparaties",
      isVideo: "false",
      videoUrl: null
    },
    {
      name: "Peter de Vries",
      location: "Haarlem Centrum",
      rating: "5",
      content: "Zeer tevreden over de nieuwe dakpannen. Het team werkte netjes en efficiënt. Het resultaat is prachtig en de prijs was eerlijk. Aanrader!",
      serviceType: "pannen",
      isVideo: "false",
      videoUrl: null
    }
  ];

  // Sample blog posts
  const sampleBlogPosts = [
    {
      title: "5 Signalen dat uw Dak Toe is aan Vervanging",
      slug: "5-signalen-dak-vervanging",
      excerpt: "Ontdek de belangrijkste waarschuwingssignalen die aangeven dat uw dak aan vervanging toe is. Van zichtbare schade tot verborgen problemen.",
      content: "Een dak heeft een beperkte levensduur. Gemiddeld gaat een pannendak 20-25 jaar mee, terwijl EPDM dakbedekking tot 40 jaar kan meegaan. Maar hoe weet u wanneer vervanging nodig is?\n\n1. Lekkages en vochtplekken: Het meest voor de hand liggende signaal. Zelfs kleine vochtplekken op het plafond wijzen op grotere problemen.\n\n2. Beschadigde dakpannen: Gebroken, verschoven of ontbrekende pannen zijn duidelijke signalen.\n\n3. Doorhangende daklijnen: Een doorzakkend dak wijst op structurele problemen.\n\n4. Hoge energierekening: Slecht isolatie door verouderd dakwerk verhoogt uw stookkosten aanzienlijk.\n\n5. Ouderdom: Is uw dak ouder dan 20 jaar? Laat het dan professioneel inspecteren.\n\nBij Stijnman bieden wij gratis dakinspecties aan. Onze experts adviseren eerlijk over reparatie of vervanging.",
      category: "Onderhoud",
      tags: ["dakrenovatie", "onderhoud", "lekkage"],
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      author: "Mark Stijnman"
    },
    {
      title: "EPDM vs Bitumen: Welke Dakbedekking Kiest u?",
      slug: "epdm-vs-bitumen-dakbedekking",
      excerpt: "Een vergelijking tussen EPDM en bitumen dakbedekking. Leer de voor- en nadelen kennen om de juiste keuze te maken voor uw platte dak.",
      content: "Bij het kiezen van dakbedekking voor een plat dak staan veel eigenaren voor de vraag: EPDM of bitumen? Beide materialen hebben hun voor- en nadelen.\n\nEPDM (rubberfolie):\n+ Levensduur 25-40 jaar\n+ Zeer flexibel en weerbestendig\n+ Onderhoudsarm\n+ Eenvoudiger te repareren\n- Hogere initiële kosten\n\nBitumen:\n+ Kosteneffectiever op korte termijn\n+ Bewezen techniek\n+ Goed verkrijgbaar\n- Kortere levensduur (15-25 jaar)\n- Meer onderhoud nodig\n\nOnze aanbeveling: Voor langetermijnwaarde kiezen de meeste klanten EPDM. De hogere investering verdient zich terug door lagere onderhoudskosten en langere levensduur.\n\nBij Stijnman werken wij met premium EPDM materialen en bieden 15 jaar garantie op vakmanschap.",
      category: "Materialen",
      tags: ["EPDM", "bitumen", "plat dak"],
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      author: "Mark Stijnman"
    },
    {
      title: "Dakgoten Onderhoud: Complete Gids voor Huiseigenaren",
      slug: "dakgoten-onderhoud-gids",
      excerpt: "Voorkom kostbare waterschade met goed dakgootonderhoud. Ontdek wanneer en hoe u uw dakgoten moet reinigen en onderhouden.",
      content: "Verstopte dakgoten zijn een veelvoorkomende oorzaak van waterschade aan gevels en funderingen. Goed onderhoud voorkomt dure reparaties.\n\nWanneer reinigen?\n- In het najaar na bladval\n- In het voorjaar\n- Na hevige stormen\n\nTekenen van problemen:\n- Water dat over de rand stroomt\n- Hangende of afstaande goten\n- Zichtbare roest of scheuren\n- Lekkages bij naden\n\nProfessioneel onderhoud:\nBij Stijnman reinigen we niet alleen uw dakgoten, maar inspecteren we ook op:\n- Bevestigingspunten\n- Afvoerputten en regenpijpen\n- Begin van roest of schade\n- Correcte afschot\n\nWij adviseren jaarlijks onderhoud voor woningen met veel bomen in de omgeving, en eens per twee jaar voor andere situaties.",
      category: "Onderhoud",
      tags: ["dakgoten", "onderhoud", "preventie"],
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      author: "Mark Stijnman"
    },
    {
      title: "Waarom Zinken Dakwerk de Investering Waard is",
      slug: "zinken-dakwerk-investering",
      excerpt: "Zink is een premium keuze voor dakwerk. Ontdek waarom zinken goten en dakbedekking een verstandige langetermijninvestering zijn.",
      content: "Zinken dakwerk staat bekend als premium oplossing. Maar rechtvaardigen de voordelen de hogere kosten? Absoluut.\n\nVoordelen van zink:\n1. Uitzonderlijke levensduur: 50-100 jaar bij goed onderhoud\n2. Zelfherstellend: De patina laag beschermt tegen corrosie\n3. Duurzaam: 100% recyclebaar\n4. Onderhoudsvriendelijk: Minimaal onderhoud nodig\n5. Esthetisch: Ontwikkelt een karakteristieke uitstraling\n\nKosten vs. Waarde:\nHoewel zink 40-60% duurder is dan traditionele materialen, betaalt het zich terug door:\n- Lagere onderhoudskosten\n- Langere levensduur\n- Hogere woningwaarde\n- Lagere vervangingsfrequentie\n\nBij Stijnman hebben we 25+ jaar ervaring met zinken dakwerk. Van traditionele soldeerverbindingen tot moderne clicksystemen - wij beheersen alle technieken.\n\nOnze 15-jaar vakmanschapsgarantie geeft u extra zekerheid bij deze investering.",
      category: "Materialen",
      tags: ["zink", "premium", "duurzaam"],
      imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      author: "Mark Stijnman"
    },
    {
      title: "Stormschade aan uw Dak? Dit moet u Weten",
      slug: "stormschade-dak-actie",
      excerpt: "Na een storm kunnen dakschades grote gevolgen hebben. Leer wat u moet doen bij stormschade en hoe verzekeringen werken.",
      content: "Nederland krijgt steeds vaker te maken met hevig weer. Weet u wat te doen bij stormschade?\n\nDirecte actie bij stormschade:\n1. Veiligheid eerst: Betreed het dak niet zelf\n2. Documenteer schade met foto's\n3. Voorkom vervolgschade (bijv. met zeilen)\n4. Meld schade bij verzekering binnen 48 uur\n5. Schakel een gecertificeerd dakdekker in\n\nVerzekeringsclaims:\nDe meeste woonhuisverzekeringen dekken stormschade wanneer:\n- Windsnelheid 14 meter/seconde (kracht 7) is bereikt\n- Schade niet door onderhoud was te voorkomen\n- Claim tijdig is gemeld\n\nWaarom Stijnman?\n- 24/7 noodservice beschikbaar\n- Ervaring met verzekeringsclaims\n- Tijdelijke reparaties om vervolgschade te voorkomen\n- Definitieve herstelling met garantie\n\nBel direct 023-1234567 bij acute stormschade. Wij helpen direct.",
      category: "Reparaties",
      tags: ["stormschade", "noodservice", "verzekering"],
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      author: "Mark Stijnman"
    }
  ];

  await db.insert(projects).values(sampleProjects);
  await db.insert(testimonials).values(sampleTestimonials);
  await db.insert(blogPosts).values(sampleBlogPosts);

  console.log("Database seeded successfully!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
