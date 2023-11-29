const contestsData = [
  {
    name: "Business Competition",
    category: "Business",
    img: "https://www.marketingtutor.net/wp-content/uploads/2020/01/Business-Competition.jpg",
    participant: 50,
    description:
      "A competition for aspiring entrepreneurs to showcase their business ideas.",
    prize: 10000,
    winner_name: "John Doe",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-12-31",
    instruction: "Follow the guidelines provided in the contest details.",
  },
  {
    name: "Medical Research Challenge",
    category: "Medical",
    img: "https://ghscs.com/wp-content/uploads/2021/12/00315-Research-Challenge-Winner_Ghana-SM-1024x512.jpg",
    participant: 30,
    description:
      "A research competition for breakthrough innovations in the field of medicine.",
    prize: 8000,
    winner_name: "Dr. Sarah Smith",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-5.jpg",
    deadline: "2023-11-30",
    instruction:
      "Submit your research findings along with supporting documents.",
  },
  {
    name: "Article Writing Contest",
    category: "Article Writing",
    img: "https://legalvidhiya.com/wp-content/uploads/2022/11/Beige-and-Purple-Colorful-Photography-Contest-Poster.png",
    participant: 100,
    description:
      "An article writing contest covering a variety of topics and writing styles.",
    prize: 5000,
    winner_name: "Alice Johnson",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-12-15",
    instruction: "Submit your original article with proper citations.",
  },
  {
    name: "Dota 2 Clash",
    category: "Gaming",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2020/shortfilm/header.jpg",
    participant: 36,
    description:
      "Battle it out in the Dota 2 Clash and showcase your strategic prowess.",
    prize: 21000,
    winner_name: "Dota2_Strategist",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-12-12",
    instruction:
      "Form your team, choose your heroes, and compete in thrilling Dota 2 matches.",
  },
  {
    name: "Tech Innovation Challenge",
    category: "Business",
    img: "https://opportunitydesk.org/wp-content/uploads/2020/11/ADB-Healthy-Oceans-Technology-Innovation-Challenge-2020.jpg",
    participant: 40,
    description:
      "An innovation challenge for tech enthusiasts to present groundbreaking ideas.",
    prize: 15000,
    winner_name: "Emily Rogers",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-12-20",
    instruction: "Submit your tech innovation proposal for evaluation.",
  },
  {
    name: "Global Health Hackathon",
    category: "Medical",
    img: "https://globalhealth.emory.edu/_includes/images/sections/students/fall-2023-hackathon-x.png",
    participant: 25,
    description:
      "A hackathon to address global health challenges through technology solutions.",
    prize: 10000,
    winner_name: "Dr. Michael Chen",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-5.jpg",
    deadline: "2023-12-10",
    instruction:
      "Develop innovative solutions for healthcare challenges in a hackathon format.",
  },
  {
    name: "Short Story Contest",
    category: "Article Writing",
    img: "https://i.ibb.co/23nPhhL/short-story.jpg",
    participant: 80,
    description:
      "A short story contest open to writers of all genres and styles.",
    prize: 7000,
    winner_name: "Sophia Miller",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-11-25",
    instruction: "Submit your original short story for a chance to win.",
  },
  {
    name: "PUBG Mobile Battle Royale",
    category: "Gaming",
    img: "https://archive.esportsobserver.com/wp-content/uploads/2018/11/PUBG-Global-Championship-2019.jpg",
    participant: 50,
    description:
      "Participate in intense battles in the PUBG Mobile Battle Royale competition.",
    prize: 20000,
    winner_name: "PUBG_Master",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-12-10",
    instruction: "Form your squad and dominate the battlefield.",
  },
  {
    name: "Sustainable Business Ideas Pitch",
    category: "Business",
    img: "https://i.ibb.co/BjcG84Z/pitch.jpg",
    participant: 35,
    description:
      "A contest for presenting sustainable business ideas that benefit the environment.",
    prize: 12000,
    winner_name: "Alex Green",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-5.jpg",
    deadline: "2023-11-15",
    instruction:
      "Pitch your sustainable business idea and compete for the top prize.",
  },
  {
    name: "E-commerce Startup Challenge",
    category: "Business",
    img: "https://www.builderfly.com/wp-content/uploads/2020/01/What-are-major-challenges-for-an-ecommerce-startup-min.jpg",
    participant: 60,
    description:
      "A startup challenge for aspiring entrepreneurs in the e-commerce industry.",
    prize: 20000,
    winner_name: "Olivia Johnson",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-12-08",
    instruction: "Pitch your e-commerce startup idea and compete for funding.",
  },
  {
    name: "Medical Robotics Innovation Contest",
    category: "Medical",
    img: "https://i.ibb.co/hWrvbD3/KUKA-LBR-Med.jpg",
    participant: 20,
    description: "A robotics innovation contest to advance medical technology.",
    prize: 15000,
    winner_name: "Dr. Ethan Parker",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-5.jpg",
    deadline: "2023-11-28",
    instruction:
      "Design and present innovative robotics solutions for medical applications.",
  },
  {
    name: "Travel Blogging Challenge",
    category: "Article Writing",
    img: "https://authentictraveling.com/wp-content/uploads/2017/03/The-Travel-Whisperers-Blogger-Challenge-Authentic-Traveling-LARGE.jpg",
    participant: 90,
    description:
      "A travel blogging challenge for writers to share their unique travel experiences.",
    prize: 8000,
    winner_name: "Sarah Turner",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-12-18",
    instruction:
      "Submit your captivating travel blog and inspire others with your journeys.",
  },

  {
    name: "Social Impact Business Challenge",
    category: "Business",
    img: "https://www.netsolutions.com/insights/wp-content/uploads/2020/03/Top-5-Challenges-in-eCommerce-Business.jpg",
    participant: 40,
    description:
      "A business challenge for ventures making a positive social impact.",
    prize: 15000,
    winner_name: "Marcus Williams",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-3.jpg",
    deadline: "2023-11-10",
    instruction:
      "Present your business model focused on creating social change.",
  },
  {
    name: "Digital Marketing Excellence Award",
    category: "Business",
    img: "https://www.agencyreporter.com/wp-content/uploads/2023/05/FB-Images-Yoast-1024x538.png",
    participant: 45,
    description:
      "An award recognizing outstanding achievements in digital marketing strategies.",
    prize: 12000,
    winner_name: "Emma Davis",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-4.jpg",
    deadline: "2023-12-05",
    instruction: "Submit your digital marketing campaign for evaluation.",
  },
  {
    name: "Genomic Research Challenge",
    category: "Medical",
    img: "https://i.ibb.co/NnrVfRt/genome.jpg",
    participant: 15,
    description:
      "A genomic research challenge for breakthroughs in genetics and personalized medicine.",
    prize: 18000,
    winner_name: "Dr. Alexander Reed",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-3.jpg",
    deadline: "2023-11-25",
    instruction:
      "Contribute to genomic research and present your findings for review.",
  },
  {
    name: "Science Fiction Writing Contest",
    category: "Article Writing",
    img: "https://marketing.prowritingaid.com/science-fiction-writing-contests.png",
    participant: 70,
    description:
      "A science fiction writing contest for imaginative and futuristic stories.",
    prize: 10000,
    winner_name: "Lucas Turner",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-4.jpg",
    deadline: "2023-12-15",
    instruction:
      "Submit your original science fiction story and transport readers to new worlds.",
  },
  {
    name: "Clash of Clans Challenge",
    category: "Gaming",
    img: "https://cdn.oneesports.gg/cdn-data/wp-content/uploads/2019/07/ClashofClans_WorldChampionshipESL.jpg",
    participant: 40,
    description: "Strategize and compete in the Clash of Clans challenge.",
    prize: 15000,
    winner_name: "Clash_King",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-12-18",
    instruction: "Build your clan, defend your village, and conquer opponents.",
  },
  {
    name: "Green Innovation Startup Pitch",
    category: "Business",
    img: "https://www.feedough.com/wp-content/uploads/2021/04/green-innovation-1.webp",
    participant: 30,
    description:
      "A startup pitch competition for environmentally friendly and sustainable innovations.",
    prize: 14000,
    winner_name: "Isabella Green",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-4.jpg",
    deadline: "2023-11-20",
    instruction: "Pitch your green innovation and compete for funding.",
  },
  {
    name: "Neuroscience Research Challenge",
    category: "Medical",
    img: "https://miro.medium.com/v2/resize:fit:1358/1*Yr97E-EgR1LuuoR5O56vNA.png",
    participant: 18,
    description:
      "A research challenge focusing on advancements in neuroscience and brain research.",
    prize: 16000,
    winner_name: "Dr. Olivia Martinez",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-3.jpg",
    deadline: "2023-11-30",
    instruction:
      "Contribute to neuroscience research and present your discoveries.",
  },
  {
    name: "FIFA Soccer Showdown",
    category: "Gaming",
    img: "https://ik.imagekit.io/0eqydxstn/CTA_1920x1080_UCL_SEMI-FINAL_V4_EN_z7OFCR97D.png",
    participant: 35,
    description: "Showcase your soccer skills in the FIFA Soccer Showdown.",
    prize: 12000,
    winner_name: "SoccerChamp",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-1.jpg",
    deadline: "2023-12-05",
    instruction: "Compete against others in thrilling FIFA soccer matches.",
  },
  {
    name: "Startup Showcase",
    category: "Business",
    img: "https://entrepreneurs.princeton.edu/sites/g/files/toruqf951/files/styles/16x9_1440w_810h/public/2022-01/startup-showcase.png",
    participant: 40,
    description:
      "Showcase your innovative startup ideas and compete for funding.",
    prize: 15000,
    winner_name: "Sophie Adams",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-2.jpg",
    deadline: "2023-12-12",
    instruction: "Present your startup pitch to a panel of judges.",
  },
  {
    name: "Digital Transformation Award",
    category: "Business",
    img: "https://i.itworldcanada.com/wp-content/uploads/2023/03/2023dx-696x392.jpg",
    participant: 35,
    description:
      "Recognizing businesses that have excelled in digital transformation strategies.",
    prize: 10000,
    winner_name: "Andrew Thompson",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-2.jpg",
    deadline: "2023-12-08",
    instruction: "Submit your success story in digital transformation.",
  },
  {
    name: "Valorant Tactical Challenge",
    category: "Gaming",
    img: "https://img6.fresherslive.com/latestnews/2023/11/valorant-game-changers-championship-2023-6566f06a7830039464485-1200.webp",
    participant: 28,
    description:
      "Enter the Valorant Tactical Challenge and prove your strategic prowess.",
    prize: 17000,
    winner_name: "Valorant_Striker",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-4.jpg",
    deadline: "2023-12-08",
    instruction: "Master your skills in tactical gameplay in Valorant.",
  },
  {
    name: "Fortnite Battle Royale",
    category: "Gaming",
    img: "https://forestcitycomicon.ca/wp-content/uploads/2018/08/fortnitetournament.jpg",
    participant: 45,
    description:
      "Join the Fortnite Battle Royale and be the last one standing.",
    prize: 24000,
    winner_name: "Fortnite_Master",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-4.jpg",
    deadline: "2023-11-28",
    instruction: "Build, fight, and survive in the world of Fortnite.",
  },
  {
    name: "CS:GO Tactical Shootout",
    category: "Gaming",
    img: "https://www.esportsbets.com/wp-content/uploads/2022/12/csgo-tournaments.jpg",
    participant: 32,
    description:
      "Engage in tactical shootouts in the CS:GO Tactical Shootout competition.",
    prize: 19000,
    winner_name: "CSGO_Sharpshooter",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-4.jpg",
    deadline: "2023-12-20",
    instruction:
      "Coordinate with your team and dominate the CS:GO battlefield.",
  },

  {
    name: "HealthTech Innovation Award",
    category: "Medical",
    img: "https://events.businesspost.ie/wp-content/uploads/2023/09/National-HealthTech-Innovation-Awards-2023-980x490-1.png",
    participant: 22,
    description: "Recognizing innovations in healthcare technology.",
    prize: 14000,
    winner_name: "Dr. Benjamin Turner",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-4.jpg",
    deadline: "2023-12-20",
    instruction:
      "Present your healthcare technology innovation for evaluation.",
  },

  {
    name: "Tech Trends Article Competition",
    category: "Article Writing",
    img: "https://i.ibb.co/y604skB/www-lawyersgyan-com-3-1-1.jpg",
    participant: 55,
    description:
      "Write an article on the latest trends in technology and innovation.",
    prize: 15000,
    winner_name: "Alex Carter",
    winner_img:
      "https://d1e5yheunyo3q0.cloudfront.net/wp-content/uploads/2023/01/Rectangle-235-4.jpg",
    deadline: "2023-12-10",
    instruction:
      "Submit an insightful article highlighting tech trends shaping the future.",
  },
];

// Function to generate a random timestamp within the last 30 days
const getRandomTimestamp = () => {
  const currentDate = new Date();
  const randomDaysAgo = Math.floor(Math.random() * 30);
  currentDate.setDate(currentDate.getDate() - randomDaysAgo);
  return currentDate.toISOString();
};

// Function to generate a random score between 80 and 100
const getRandomScore = () => Math.floor(Math.random() * 21) + 80;

const contestWinners = contestsData.map((contest) => ({
  name: contest.name,
  winner_name: contest.winner_name,
  category: contest.category,
  img: contest.img,
  winner_img: contest.winner_img,
  timestamp: getRandomTimestamp(),
  score: getRandomScore(),
}));

console.log(JSON.stringify(contestWinners, null, 2));
