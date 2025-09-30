import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { projects, testimonials } from "@shared/schema";
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

  await db.insert(projects).values(sampleProjects);
  await db.insert(testimonials).values(sampleTestimonials);

  console.log("Database seeded successfully!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
