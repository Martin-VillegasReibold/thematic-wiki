const characters = [
  {
    id: 1,
    chapter: "Main Story",
    cite: {
      own:
        "Well, do you believe me or your own eyes?",
      outsider:"Guys like this are the reason why equality is the biggest form of discrimination.",
      autor: "Primordial Sea's Leader",
      
    },
    descripcion:
      "A Kruyirian warrior with an outstanding capacity for self-learning and the current Second Beast of Disaster. For him, all beings have equal value, which is why he will not hesitate to eliminate those who stand in his way or spare those who step aside. Conversing with him may give the impression that he is indecisive and dull, but in reality he is deep in thought and enjoys a good challenge. Most people are under the impresion than he is cold and cruel because of his acceptance that most events and unforeseen circumstances are normal and, therefore, does not intervene on his own initiative despite having the power to do something.",
    info: {
      name: "Merodak",
      titles: "Bolverkr, Hessian, Beast-II",
      height: 188,
      weight: 85,
      age: 28,
      birthday: "?",
      native: "Kruyiria",
      gender: "Male",
      race: "Asura(Artificial)",
      elements: "Lightning(Red), Earth",
      alignments: "Neutral Chaotic",
      givenPhase: "May your will of steel reshapes through your objectives",
    },
    images: {
      full: 'https://i.redd.it/4a00zprhn1j31.jpg',
      portrait: 'https://i.pinimg.com/1200x/15/a3/43/15a343ddace595aff256c16758aa5282.jpg',
    },
    stats: [
      { grade: "A++" },
      { grade: "S+" },
      { grade: "A+++" },
      { grade: "S" },
      { grade: "S+++" },
      { grade: "E" },
      { grade: "SSS" },
      { grade: "SS" },
    ],
  },

  {
    id: 2,
    cite: {
      own:"Power is nothing without reason and purpose.",
      outsider:".The 'ideal' warrior her homeland always wanted, yet who hold her reins was another matter.",
      autor: "Primordial Sea's Leader",
    },
    descripcion:
      "An extremely skilled and indomitable Kruyirian warrior. As the adopted daughter of Ishtar (Ma-tur), she has sworn to serve her with all her heart. If the situation demands it, she will be a bloodthirsty warrior; however, in reality, she is a mostly serene (though somewhat temperamental on certain matters) young woman with a big heart, and she takes pride in her warrior skills. Her definition of good and evil leads her into constant conflict with Beast II, who maintains that everyone decides their own meanings, while she asserts that the 'majority,' or failing that, 'whoever represents them,' should dictate it.",
    info: {
      name: "Zirat-banit",
      titles: "Ziira, Imhullu, Beast-III",
      height: 178,
      weight: 80,
      age: 33,
      birthday: "?",
      native: "Kruyiria",
      gender: "Female",
      race: "Animal",
      elements: "Wind, Water(Green)",
      alignments: "Neutral Good",
      givenPhase: "May your commitment tone your skills and purge your doubts",
    },
    images: {
      full: 'https://mobilegamestarter.com/cdn/shop/files/jp-fate-grand-order-fgo-tomoesaber-800-1000sq-starter-account-mobile_games-mobile-games-starter.png?v=1711784906',
      portrait: 'https://pbs.twimg.com/media/EgbjRW3XgAAnfxo.jpg',
    },
    stats: [
      { grade: "S" },
      { grade: "S+++" },
      { grade: "SS+" },
      { grade: "MAX" },
      { grade: "B++" },
      { grade: "F" },
      { grade: "B" },
      { grade: "C" },
    ],
  },

  {
    id: 99,
    chapter: "Faraway Lads",
    cite: {
      own: "This faraway land holds many secrets yet to be uncovered. Nevertheless, I shall return to my brother at once.",
      outsider: "A marvelous display of will, little tyrant",
      autor: "Aruru",
    },
    descripcion:
      "A younger version of Merodak, before he became known as a Beast of Disaster. Full of energy and unrefined potential, he seeks to prove himself to the world.",
    info: {
      name: "Merodak",
      titles: "Ash Lad",
      height: 110,
      weight: 20,
      age: 8,
      birthday: "?",
      native: "Kruyiria",
      gender: "Male",
      race: "Human",
      elements: "Lightning(Red)",
      alignments: "Neutral True",
      givenPhase: "May your will of steel reshapes through your objectives",
    },
    images: {
      full: 'https://i.redd.it/4a00zprhn1j31.jpg', // Placeholder
      portrait: 'https://i.pinimg.com/1200x/15/a3/43/15a343ddace595aff256c16758aa5282.jpg', // Placeholder
    },
    stats: [
      { grade: "E+" },
      { grade: "F+" },
      { grade: "F++" },
      { grade: "F" },
      { grade: "C" },
      { grade: "?" },
      { grade: "F" },
      { grade: "C" },
    ],
  },

  {
    id: 991,
    chapter: "Frontier Wars",
    cite: {
      own: "I still have much to learn, but I won't back down!",
      outsider: "He's just a kid, but his potential is terrifying.",
      autor: "Heike",
    },
    descripcion:
      "A younger version of Merodak, before he became known as a Beast of Disaster. Full of energy and unrefined potential, he seeks to prove himself to the world.",
    info: {
      name: "Merodak",
      titles: "Young Recruit",
      height: 123,
      weight: 27,
      age: 11,
      birthday: "?",
      native: "Kruyiria",
      gender: "Male",
      race: "Human",
      elements: "Lightning(Red)",
      alignments: "Neutral True",
      givenPhase: "May your will of steel reshapes through your objectives",
    },
    images: {
      full: 'https://i.redd.it/4a00zprhn1j31.jpg', // Placeholder
      portrait: 'https://i.pinimg.com/1200x/15/a3/43/15a343ddace595aff256c16758aa5282.jpg', // Placeholder
    },
    stats: [
      { grade: "E++" },
      { grade: "E+" },
      { grade: "E+++" },
      { grade: "E" },
      { grade: "C" },
      { grade: "E" },
      { grade: "D" },
      { grade: "C" },
    ],
  },
   
];

export const getCharacterById = (id) => characters.find((c) => c.id === id);
export default characters;
