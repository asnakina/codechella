const { User, Artist, Vendor, Area } = require('./models');
import imgStage1 from './imgStage1.jpg'

async function seed() {
  const areas = await Area.bulkCreate([
    {
      name: 'Area 51',
      img_url: '../client/src/images/imgStage1.jpg'
    },
    {
      name: 'Motherland',
      img_url: './client/src/images/imgStage2.jpg'
    },
    {
      name: 'The Probe',
      img_url: '/.client/src/images/imgStage3.jpg'
    }
  ], { returning: true });
  const artists = await Artist.bulkCreate([
    {
      name: 'Modest Mouse',
      description: 'Modest Mouse is an American rock band formed in 1992 in Issaquah, Washington and currently based in Portland, Oregon.',
      timeslot: '1',
      img_url: 'https://media1.fdncms.com/metrotimes/imager/u/original/11491411/modestmouse-benmoon-1.jpg'
    },
    {
      name: 'The Mars Volta',
      description: 'The Mars Volta is an American progressive rock band from El Paso, Texas, formed in 2001.',
      timeslot: '1',
      img_url: 'https://images-na.ssl-images-amazon.com/images/I/B1EA8jRxuoS._SL1000_.png'
    },
    {
      name: 'Lorde',
      description: 'Lorde chose her stage name because she was fascinated with "royals and aristocracy". However, she felt the name Lord was too masculine, thus she added an "e" to make it more feminine. She described her public image as coming "naturally" to her.',
      timeslot: '1',
      img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/RF_3006_Lorde%40Arena_Krists_Luhaers-4_%2835731259842%29_%28cropped%29.jpg/1200px-RF_3006_Lorde%40Arena_Krists_Luhaers-4_%2835731259842%29_%28cropped%29.jpg'
    },
    {
      name: 'Janelle Monae',
      description: 'Janelle Monáe Robinson (/dʒəˈnɛl moʊˈneɪ/;[8] born December 1, 1985)[9] is an American singer, songwriter, actress, and producer.',
      timeslot: '2',
      img_url: 'https://media.timeout.com/images/105232498/image.jpg'
    },
    {
      name: 'Adele',
      description: 'Adele Laurie Blue Adkins MBE (/əˈdɛl/; born 5 May 1988) is an English singer and songwriter. She was the first female artist to simultaneously have two albums in the top five of the Billboard 200.',
      timeslot: '2',
      img_url: 'https://akns-images.eonline.com/eol_images/Entire_Site/2017210/rs_1024x759-170310161215-1024.Adele-Lipstick-Primer.jl.031017.jpg?fit=inside|900:auto&output-quality=90'
    },
    {
      name: 'Jank',
      description: 'Jank (stylized as JANK or J A N K !) was an American rock band from Philadelphia, Pennsylvania, formed in 2015.',
      timeslot: '2',
      img_url: 'https://1.bp.blogspot.com/-jz0psca2usc/WHMWCfpSe3I/AAAAAAAAJfY/KocInJNzaigm3NrU-kybFzJvBRjdvbaMgCLcB/s1600/Jank%2Bband.jpeg'
    },
    {
      name: 'Miguel',
      description: 'Miguel Jontel Pimentel (born October 23, 1985) is an American singer and songwriter.',
      timeslot: '3',
      img_url: 'https://timedotcom.files.wordpress.com/2017/11/miguel-protesting-prisons.jpg'
    },
    {
      name: 'FIDLAR',
      description: 'Fidlar, stylized as FIDLAR, is a punk rock band from Los Angeles, California. The band is currently signed to Mom + Pop Music in the US,[1] Wichita Recordings in the UK[2] and Dine Alone Records in Canada.',
      timeslot: '3',
      img_url: 'http://diymag.com/media/img/Artists/F/Fidlar/_1500x1000_crop_center-center_75/fidlar_philsmithies_diy_20150605_2047x1365.jpg'
    },
    {
      name: 'Enrique Iglesias',
      description: 'Enrique Iglesias is a Spanish singer, songwriter, actor and record producer.He is widely regarded as the King of Latin Pop',
      timeslot: '3',
      img_url: 'https://1n9mch40qwp25b0ca1wk6bt6-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Enrique-Iglesias.png'
    }
<<<<<<< HEAD
  ]);
  const areas = await Area.bulkCreate([
    {
      name: 'Area 51',
        img_url: 'imgStage1'
        // img_url: './client/src/images/imgStage1.jpg'
    },
    {
      name: 'UFO',
      img_url: './client/src/images/imgStage2.jpg'
    },
    {
      name: 'The Probe',
      img_url: '/.client/src/images/imgStage3.jpg'
    }
  ]);
=======
  ], {
    individualHooks: true
  });
  const areaData = await Area.findAll();
  Artist.afterCreate(async (artist, options) => {
    return await artist.setArea(areaData[artist.id%3]);
  });
>>>>>>> 5212f783d5173592d0cd958590fbf8a32e622e09
  const vendors = await Vendor.bulkCreate([
    {
      name: 'Vaguen',
      description: 'We have the exact same menu for vegans and non-vegans, but switched ingredients to accomodate for different dietary requirements.',
      img_url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/14/12/vegan-buddha-bowl.jpg'
    },
    {
      name: 'Taco Bout Tacos',
      description: 'We have tacos',
      img_url: 'https://d3cizcpymoenau.cloudfront.net/images/37752/SFS_chorizo_potato_tacos-64.jpg'
    },
    {
      name: 'Between the Buns', // thanks Dima for the sick name
      description: 'We have burgers',
      img_url: 'http://4.bp.blogspot.com/-4Fub-U2MmxA/UG8F-IoijqI/AAAAAAAAAsY/msi3hXVlZb0/s1600/Bleecker-st-burger+(6).jpg'
    },
    {
      name: 'C\'est Cheese',
      description: 'We got...uh...da cheez.',
      img_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    },
    {
      name: 'Sweet Greens',
      description: 'It\'s one branch of millions our places',
      img_url: 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/03/main/crunchy-cucumber-feta-almond-salad-1705p126.jpg?itok=YhH6kf8b'
    },
    {
      name: 'Green with Envy',
      description: 'Cool salad place.',
      img_url: 'https://cookieandkate.com/images/2017/03/italian-chopped-salad-vegetarian.jpg'
    },
    {
      name: 'Juicy Juice',
      description: 'Juices all kinds from Cali fruits',
      img_url: 'https://www.thelittleepicurean.com/wp-content/uploads/2017/01/green-smoothies.jpg'
    },
    {
      name: 'SZL',
      description: 'Pronounced sizzle. An Austin, Texas based BBQ restaurant known for its pulled pork.',
      img_url: 'https://3olj7vg0kmp1zz2i82eav8b5-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Truth-BBQ-meats.jpg'
    },
    {
      name: 'Funny Taco',
      description: 'Tacos all kinds',
      img_url: 'https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-1-2.jpg'
    }
  ], {
    individualHooks: true
  });
  Vendor.afterCreate(async (vendor, options) => {
    console.log(vendor.id);
    return await vendor.setArea(areaData[vendor.id%3]);
  })
  const users = await User.bulkCreate([
    {
      username: 'anastasia',
      password: 'github',
      ticket: 'VIP'
    },
    {
      username: 'alberto',
      password: 'fyre',
      ticket: 'VIP'
    },
    {
      username: 'soleil',
      password: 'butt()',
      ticket: 'VIP'
    }
  ], {
    individualHooks: true
  });
  await Promise.all(vendors.map((vendor, index) => areas[index%3].addVendor(vendor)));
  await Promise.all(artists.map((artist, index) => areas[index%3].addArtist(artist)));
  process.exit();
}
seed();
