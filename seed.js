const { User, Artist, Vendor, Area } = require('./models');

async function seed() {
  const artists = await Artist.bulkCreate([
    {
      name: 'Modest Mouse',
      description: 'Modest Mouse is an American rock band formed in 1992 in Issaquah, Washington and currently based in Portland, Oregon.',
      timeslot: '1'
    },
    {
      name: 'The Mars Volta',
      description: 'The Mars Volta is an American progressive rock band from El Paso, Texas, formed in 2001.',
      timeslot: '2'
    },
    {
      name: 'Lorde',
      description: 'Lorde chose her stage name because she was fascinated with "royals and aristocracy". However, she felt the name Lord was too masculine, thus she added an "e" to make it more feminine. She described her public image as coming "naturally" to her.',
      timeslot: '3'
    },
    {
      name: 'Janelle Monae',
      description: 'Janelle Monáe Robinson (/dʒəˈnɛl moʊˈneɪ/;[8] born December 1, 1985)[9] is an American singer, songwriter, actress, and producer.',
      timeslot: '1'
    },
    {
      name: 'Adele',
      description: 'Adele Laurie Blue Adkins MBE (/əˈdɛl/; born 5 May 1988) is an English singer and songwriter. She was the first female artist to simultaneously have two albums in the top five of the Billboard 200.',
      timeslot: '2'
    },
    {
      name: 'Jank',
      description: 'Jank (stylized as JANK or J A N K !) was an American rock band from Philadelphia, Pennsylvania, formed in 2015.',
      timeslot: '3'
    },
    {
      name: 'Miguel',
      description: 'Miguel Jontel Pimentel (born October 23, 1985) is an American singer and songwriter.',
      timeslot: '1'
    },
    {
      name: 'FIDLAR',
      description: 'Fidlar, stylized as FIDLAR, is a punk rock band from Los Angeles, California. The band is currently signed to Mom + Pop Music in the US,[1] Wichita Recordings in the UK[2] and Dine Alone Records in Canada.',
      timeslot: '2'
    },
    {
      name: 'Enrique Iglesias',
      description: 'Enrique Iglesias is a Spanish singer, songwriter, actor and record producer.He is widely regarded as the King of Latin Pop',
      timeslot: '3'
    }
  ]);
  const areas = await Areas.bulkCreate([
    {
      name: 'Area 51'
    },
    {
      name: 'UFO'
    },
    {
      name: 'The Probe'
    }
  ]);
  const vendors = await Vendor.bulkCreate([
    {
      name: 'Vaguen',
      description: 'We have the exact same menu for vegans and non-vegans, but switched ingredients to accomodate for different dietary requirements.'
    },
    {
      name: 'Taco Bout Tacos',
      description: 'We have tacos'
    },
    {
      name: 'Between the Buns', // thanks Dima for the sick name
      description: 'We have burgers'
    },
    {
      name: 'C\'est Cheese',
      description: 'We got...uh...da cheez.'
    },
    {
      name: 'Sweet Greens',
      description: 'It\'s one branch of millions our places'
    },
    {
      name: 'Green with Envy',
      description: 'Cool salad place.'
    },
    {
      name: 'Juicy Juice',
      description: 'Juices all kinds from Cali fruits'
    },
    {
      name: 'SZL',
      description: 'Pronounced sizzle. An Austin, Texas based BBQ restaurant known for its pulled pork.'
    },
    {
      name: 'Funny Taco',
      description: 'Tacos all kinds'
    }
  ]);
}
seed();
