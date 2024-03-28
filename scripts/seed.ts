import "dotenv/config";
const { drizzle } = require("drizzle-orm/neon-http");


import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses). values ([
        {
            id: 1,
            title: "English",
            imageSrc: '/UK.svg'
        },
        {
            id: 2,
            title: "Deutsch",
            imageSrc: '/gr.svg'
        },
        {
            id: 3,
            title: "French",
            imageSrc: '/fr.svg'
        },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId:1,
        title: "English Unit 1",
        description: "Learn the basics of English",
        order: 1
      }
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: 'Numbers',        
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: 'Words',        
      }
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: 'SELECT',
        order: 1,
        question: "Aşağıdakilerden hangisi 4(dört) sayısıdır.",
      },
      {
        id: 2,
        lessonId: 2,
        type: 'SELECT',
        order: 1,
        question: "Aşağıdakilerden hangisi erkek çocuktur?",
      }
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: '/four.svg',
        correct: true,
        text: 'Four',
        audioSrc: '/four.wav'
      },
      {
        challengeId: 1,
        imageSrc: '/one.svg',
        correct: false,
        text: 'One',
        audioSrc: '/one.wav'
      },
      {
        challengeId: 1,
        imageSrc: '/two.svg',
        correct: false,
        text: 'Two',
        audioSrc: '/two.wav'
      },
    ]),
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        imageSrc: '/woman.svg',
        correct: false,
        text: 'Woman',
        audioSrc: '/woman.wav'
      },
      {
        challengeId: 2,
        imageSrc: '/man.svg',
        correct: false,
        text: 'Man',
        audioSrc: '/man.wav'
      },
      {
        challengeId: 2,
        imageSrc: '/boy.svg',
        correct: true,
        text: 'Boy',
        audioSrc: '/boy.wav'
      },
    ])

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};


main();