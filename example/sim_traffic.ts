import { v4 as uuidv4 } from 'uuid';

import { Metanomic } from '../sdk/src';

const TOTAL_PUSH = 100
const APP_ID = process.env.METANOMIC_APP_ID!
const API_KEY = process.env.METANOMIC_API_KEY!
const PROFILE_IDS = Array.from(Array(10)).map(() => uuidv4())

const randomProfile = () => PROFILE_IDS[Math.floor(Math.random() * PROFILE_IDS.length)]

const metanomic = new Metanomic(APP_ID, API_KEY, { logTraffic: true })
  .withMap({
    id: 'map_area_id_123',
    level: 10,
    position: 12,
  })
  .withSession({
    name: 'mission_quest_2',
    difficulty: 3,
    progress: 90,
  });

for (var _i = 0; _i < TOTAL_PUSH; _i++) {
  const profileId = randomProfile()
  metanomic.achievement({
    identity: {
      profileId,
    },
    content: {
      key: 'achievement_id',
      term: 'Dragon Slayer',
    },
    prize: {
      id: '12345_prize_id_890',
      name: 'Dragon Slayer Achievement Prize',
      isUnique: true,
    },
  });
}