import characters from "./characters";

const tablets = [
   {
    id:1,
    category: "characters",
    title: characters[0].info.name,
    description: characters[0].info.titles,
    image: characters[0].images.portrait,
  },
   {
    id:2,
    category: "characters",
    title: characters[1].info.name,
    description: characters[1].info.titles,
    image: characters[1].images.portrait,
  },
  {
    id:3,
    category: "creatures",
    title: "Annunaki",
    description: "Envoy from beyond the stars, these towering beings possess immense strength and wisdom. They are said to be the original inhabitants of the world, having descended from the heavens to guide and protect humanity. Their presence is often associated with great change and upheaval, as they seek to restore balance to a world in turmoil.",
    details: [
      {
        title: "Origin & Heritage",
        content: "Born from the primitive stardust of the Pleiades, the Annunaki arrived on Earth eons ago aboard golden arks. They are not merely biological entities, but semi-divine constructs forged to shepherd young civilizations."
      },
      {
        title: "Abilities",
        content: "They wield the power of 'Voice', capable of reshaping matter with specific resonant frequencies. Furthermore, their immense longevity allows them to observe the rise and fall of empires as mere moments in time."
      }
    ]
  },
  {
    id:4,
    category: "creatures",
    title: "Igigi",
    description: "Celestial watchers and messengers, these beings are known for their agility and keen senses. They serve as intermediaries between the Annunaki and mortals, delivering divine messages and carrying out important tasks.",
  },
  {
    id:5,
    category: "creatures",
    title: "Pretas",
    description: "Spirits of hunger and suffering, these entities are often depicted as shadowy figures with insatiable appetites. They are believed to be the restless souls of the dead, trapped between worlds and driven by their unfulfilled desires.",
  },
  {
    id:6,
    category: "creatures",
    title: "Devas",
    description: "Sons and daughters of Tiamat, beings of great power and divine heritage. They are the only ones able to wield Divinity, the most exclusive form of Ether.",
  },
  {
    id:7,
    category: "creatures",
    title: "Beasts of Mishaps",
    description: "Twelve beings born from a near death Tiamat, each represent one of all the elements that compose the world. They are said to bring chaos and destruction wherever they go, their very presence cause unforseen events and accidents.",
  },
  {
    id:8,
    category: "creatures",
    title: "Beasts of Disasters",
    description: "Six beings born from unknown circumstances, each represent one of all the types of existences that compose the world. They are said to bring chaos and destruction wherever they go, their very presence cause havoc and upheavals.",
  },
  {
    id:9,
    category: "creatures",
    title: "Beasts of Calamities",
    description: "Three beings born from a diferents purpouse, each represent one of the three principles that compose the world. They are said to bring chaos and destruction wherever they go, their very presence cause catashtrhopes and apocalypses.",
  },
  {
    id:10,
    category: "factions",
    title: "Primordial Sea",
    description: "A group formed with the goal of preparing Tiamat's resurrection. The number of its members is unknown, but they have followers throughout the regions of Kruyira and across the seas.",
  },
  {
    id:11,
    category: "factions",
    title: "The Preservers of Life",
    description: "A group dedicated to maintaing the continuity of the  war on Kruyiria's boders. It's compouse of eight members working as duos, each duo is in charge of one of the four main battlefiels",
  },
  {
    id:12,
    category: "factions",
    title: "The Ashwrought",
    description: "A group formed by members with a conflicted past against Queen Ma-tur and the Beast on her side.",
  },
  {
    id:13,
    category: "factions",
    title: "Ash Lads",
    description: "A group of three Kruyirians(Merodak,Arishak,Aruru) who roam the lands of Logress, taking on various jobs and quests for those in need. They are known for their bravery and resourcefulness, often taking on dangerous missions that others would shy away from.",
  },
  {
    id:14,
    category: "glossary",
    title: "Hessian",
    description: "Upon the defeat of the Devas, the Kruyirian started to refer to some Imhullu as Hessians, a term derived from the ancient word 'Hassu' meaning 'to destroy' or 'to devastate'. The name reflects the weapon's devastating power and its role in the downfall of the divine beings.",
  },
  {
    id:15,
    category: "glossary",
    title: "Imhullu",
    description: "Originally the weapon used by Marduk to slay Tiamat, but nowdays it's a derogatory term for the Kruyirian than archived a great power or status.",
  },
  {
    id:16,
    category: "glossary",
    title: "Phrased Ones",
    description: "Because every Kruyirian has a unique way of using Ether, they are often referred to as 'Phrased Ones'. This term highlights the individuality and creativity of each Kruyirian in their approach to harnessing the power of Ether.",
  },
   {
    id:17,
    category: "places",
    title: "Kryuiria",
    description: "An archipelago as vast as a continent made of five islands, each with its own unique ecosystem and culture. The islands are connected by a network of ruins on cliff and rivers, making travel between them an adventure in itself.",
  },
  {
    id:18,
    category: "places",
    title: "Logress",
    description: "A kingdom on the northernmost island, known for its knights and chivalry. The people of Logress are proud and honorable, with a deep respect for tradition and history. The capital city is a bustling metropolis, with towering castles and bustling markets.",
  },
  {
    id:19,
    category: "places",
    title: "Vinea",
    description: "An ever white skys and frozen lands, home to hardy people who have adapted to the harsh climate. The people of Vinea are known for their resilience and resourcefulness, with a deep connection to the land and its creatures. Yet, beneath the ice lies ancient secrets waiting to be uncovered.",
  },
  {
    id:20,
    category: "places",
    title: "Atlantis",
    description: "A mysterious island shrouded in mist, said to be the home of powerful magic and ancient technology. The people of Atlantis are enigmatic and secretive, with a deep knowledge of the arcane arts. The island is said to be protected by powerful guardians, making it nearly impossible to reach.",
  },
  {
    id:21,
    category: "places",
    title: "Zarathia",
    description: "A forested land filled with towering trees and ancient ruins. The people of Zarathia are deeply connected to nature, with a rich tradition of druidic magic and forest lore. The land is said to be home to powerful spirits and mythical creatures, making it a place of wonder and danger.",
  },
  {
    id:22,
    category: "techniques",
    title: "Belial",
    description: "Control and generation of elements such as fire, water, earth, nature, lightning, air, light, and shadow. Users can manipulate these elements for offensive, defensive, or utilitarian purposes.",
  },
  {
    id:23,
    category: "techniques",
    title: "Zagan",
    description: "Turn the body into elemental forms such as stone, metal, water, or even more exotic substances. This transformation can enhance physical abilities, provide protection, or allow the user to adapt to different environments.",
  },
  {
    id:24,
    category: "techniques",
    title: "Agares",
    description: "Alter the form of soul, reshaping it into various constructs or entities. Even allows to enter into contact with other souls, communicate with spirits, or manipulate spiritual energy for various effects. Can be used for both offensive and defensive purposes even on the physical plane.",
  },
  {
    id:25,
    category: "techniques",
    title: "Andromalius",
    description: "Absorb various forms of energy, such as kinetic, thermal, magical, or even life energy. The absorbed energy can then be redirected or converted into different types of energy for various effects.",
  },
  {
    id:26,
    category: "techniques",
    title: "Ronova",
    description:"Allows to share the burn of one soul with another, effectively connecting their life forces. This connection can be used to heal wounds, transfer vitality, or even share experiences and emotions between individuals.",
  },
  {
    id:27,
    category: "techniques",
    title: "Naberius",
    description:"To command everything that is not attached to another soul to change its form and recreate an inner world on the outside. This technique allows to reshape the environment, creating structures, landscapes, or even entire ecosystems but not according to the user's will in some cases.",
  },
  {
    id:28,
    category: "techniques",
    title: "Valefor",
    description:"An advanced version of Ars Belial, a specialized manifestation of the element. Generally used to create more detailed elemental weapons with characteristics associated with the element(s) used in their creation. They act autonomously, and their behavior can only be altered through direct contact with the creator or interference from a third partys.",
  },
  {
    id:29,
    category: "techniques",
    title: "Paimon",
    description:"???",
  },
  {
    id:30,
    category: "weapons",
    title: "Shagarakti-Surias",
    description: "A spear with unknown properties related to Divinity.",
  },
  {
    id:31,
    category: "weapons",
    title: "Enkidu",
    description: "Create chains of energy that can bind and restrict the movement of targets. These chains are incredibly strong and can adapt to the size and strength of the target, making them effective against a wide range of opponents.",
  },
  {
    id:32,
    category: "weapons",
    title: "Gilgamesh",
    description: "A gauntlet that stores several weapons of the user choice.",
  },
  {
    id:33,
    category: "timeline",
    date: "Age of Myths",
    title: "The Primordial Chaos",
    description: "Before the world took shape, there was only chaos. The ancient gods fought for dominance, shaping the very fabric of reality with their battles.",
    image: "https://i.pinimg.com/1200x/15/a3/43/15a343ddace595aff256c16758aa5282.jpg"
  },
  {
    id:34,
    category: "timeline",
    date: "Year 1",
    title: "Foundation of Kruyiria",
    description: "The first great civilization rises from the ashes of the old world. Merodak leads his people to a new golden age of prosperity and magical advancement.",
    image: "https://i.redd.it/4a00zprhn1j31.jpg"
  },
  {
    id:35, 
    category: "timeline",
    date: "Year 50",
    title: "The Great Schism",
    description: "Internal conflicts divide the realm. Two factions emerge, each believing they hold the true path to the future. The land is split in two.",
  },
  {
    id:36,
    category: "timeline",
    date: "Year 120",
    title: "Discovery of Aether",
    description: "Scholars unlock the secrets of Aether, a new source of limitless energy. This discovery propels technology forward but also attracts dangerous attention.",
  },
  {
    id:37,
    category: "timeline",
    date: "Year 200",
    title: "The Void Invasion",
    description: "Creatures from the void breach the dimensional barriers. The nations must unite once again to repel the threat that seeks to consume all existence.",
    image: "https://i.pinimg.com/1200x/15/a3/43/15a343ddace595aff256c16758aa5282.jpg"
  },
  {
    id:38,
    category: "timeline",
    date: "Year 205",
    title: "The Treaty of Stars",
    description: "After years of war, a peace treaty is signed under the starlight. A new council is formed to ensure such a catastrophe never happens again.",
  },
]

export default tablets;