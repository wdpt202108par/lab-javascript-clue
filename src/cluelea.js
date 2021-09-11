// ITERATION 1

// Suspects Array

const suspectsArray = [

    {
      //mrGreen
      firstName: "Jacob",
      lastName: "Green",
      occupation: "Entrepreneur",
      age: 45,
      description: "He has a lot of connections",
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      color: "green",
    },
  
    {
      //drOrchid
      firstName: "Doctor",
      lastName: "Orchid",
      occupation: "Scientist",
      age: 26,
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      color: "white"
    },
  
    {
      //profPlum
      firstName: "Victor",
      lastName: "Plum",
      occupation: "Designer",
      age: 22,
      description: "Billionaire video game designer",
      image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
      color: "purple"
    },
  
   
  
    {
      //missScarlet
      firstName: "Kasandra",
      lastName: "Scarlet",
      occupation: "Actor",
      age: 31,
      description: "She is an A-list movie star with a dark past",
      image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
      color: "red",
    },
  
    {
      //mrsPeacock
      firstName: "Eleanor",
      lastName: "Peacock",
      occupation: "Socialité",
      age: 36,
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      color: "blue",
    },
  
    {
      //mrMustard,
      firstName: "Jack",
      lastName: "Mustard",
      occupation: "Retired Football player",
      age: 62,
      description: "He is a former football player who tries to get by on his former glory",
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
      color: "yellow",
    }
  
  ];
  
  // Rooms Array
  
  const roomsArray = [
    {
      name: "Dining Room"
    }, 
    {
      name: "Conservatory"
    },
    {
      name: "Kitchen"
    },
    {
      name: "Study"
    },
    {
      name: "Library"
    },
    {
      name: "Billiard Room"
    },
    {
      name: "Lounge"
    },
    {
      name: "Ballroom"
    },
    {
      name: "Hall"
    },
    {
      name: "Spa"
    },
    {
      name: "Living Room"
    }, 
    {
      name: "Observatory"
    },
    {
      name: "Theater"
    },
    {
      name: "Guest House"
    },
    {
      name: "Patio"
    },
  ];
  
  // Weapons Array
  
  const weaponsArray = [
    {
      name: "rope",
     weight: 10
    },
    {
      name: "knife",
     weight: 8
    },
    {
      name: "candlestick",
     weight: 2
    },
    {
      name: "dumbbell",
     weight: 30
    },
    {
      name: "poison",
     weight: 2
    },
    {
      name: "axe",
     weight: 15
    },
    {
      name: "bat",
     weight: 13
    },
    {
      name: "trophy",
     weight: 25
    },
    {
      name: "pistol",
     weight: 20
    },
  ];
  
  
  
  
  // ITERATION 2
  
  function selectRandom(familyCard) {
  
    // Method Random that returns a number between 0 and Array max value
    // Method Math Floor to secure an index applicable to the arrary
    
    //Comment Hassan: it's Math.floor not math.Floor -> 'f' in floor is not in capital.
    let randomIndex = Math.floor(Math.random() * familyCard.length);
    return familyCard[randomIndex];
  }
  
  
  function pickMystery() {
  
    let trioCards = {
  
    // For each category, select card randomly and return within an object
      //Comment Hassan: selecting one weapon not multiple so weapon property should be 
      // weapon not weapon's' -> same thing with rooms.
      suspect: selectRandom(suspectsArray),
      weapon: selectRandom(weaponsArray),
      room: selectRandom(roomsArray)
    }
    return trioCards;
  }
  
  
  // ITERATION 3
  
  // Declare a function named revealMystery that receives envelope 
  // with the shape of the object returned by pickMystery (revealmystery = pickmystery ?)
  
  //Comment Hassan: when you called the function pickMystery, you forgot to add the () at the end.

  //let enveloppe=pickMystery;
  function revealMystery(enveloppe) {
    //Comment Hassan: corrected the properties names when getting the value of the sub-object, you put suspects with an 's' at the end when in fact it is without an 's' 
    //as declared above, same thing for weapon's' room's' etc...
    //Comment Hassan: added some spaces before and after <enveloppe.weapon.name> also at the end it's '!' and not '!!!' -> test suit is sensitive about that :p
    return enveloppe.suspect.firstName+" "+enveloppe.suspect.lastName+" killed Mr. Boddy using the "+enveloppe.weapon.name + " in the " + enveloppe.room.name +"!";
  
  };
  
  //console.log (revealMystery(pickMystery));
  
  
  
  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = {
      suspectsArray,
      roomsArray,
      weaponsArray,
      pickMystery,
      revealMystery,
      selectRandom
    };
  }