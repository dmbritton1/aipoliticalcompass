/* ── SHARED QUIZ DATA — used by all themed versions of The AI Doom Compass ── */

/* Figure placements are evidence-based (research as of Oct 2026): each figure is
   placed from their dated, sourced public statements on timelines and disruption.
   Quotes are verbatim; [brackets] add context. Bender sits at y = 0 because she
   rejects AI's capability but stresses deployment harms. Fridman and Rogan have
   little on-record substance, so treat their dots as low-confidence. */
const FIGURES = [
  { name: "Eliezer Yudkowsky", role: "Co-founder, MIRI", x: 0.85, y: 0.95,
    quote: "If anyone builds it, everyone dies." },
  { name: "Geoffrey Hinton", role: "Nobel Laureate, 'Godfather of AI'", x: 0.70, y: 0.85,
    quote: "10 to 20 per cent [chance AI wipes out humanity within 30 years]." },
  { name: "Yoshua Bengio", role: "Turing Award Winner, Founder of LawZero", x: 0.65, y: 0.85,
    quote: "[We're building machines] smarter than us that we don't know how to control." },
  { name: "Nick Bostrom", role: "Philosopher, author of 'Superintelligence'", x: 0.60, y: 0.50,
    quote: "Swift to harbor, slow to berth." },
  { name: "Connor Leahy", role: "US Director, ControlAI", x: 0.90, y: 0.92,
    quote: "[AI-caused extinction is] quite likely, unfortunately." },
  { name: "Max Tegmark", role: "MIT Physicist, President of Future of Life Institute", x: 0.88, y: 0.88,
    quote: "[An unregulated race to superintelligence is] just civilizational suicide." },
  { name: "Stuart Russell", role: "Professor, UC Berkeley", x: 0.20, y: 0.88,
    quote: "You can't fetch the coffee if you're dead." },
  { name: "Elon Musk", role: "CEO, SpaceX (incl. xAI) · Tesla", x: 0.95, y: 0.70,
    quote: "The probability of a good outcome is like 80%." },
  { name: "Sam Altman", role: "CEO, OpenAI", x: 0.88, y: 0.30,
    quote: "We are past the event horizon; the takeoff has started." },
  { name: "Dario Amodei", role: "CEO, Anthropic", x: 0.95, y: 0.75,
    quote: "There's a 25% chance that things go really, really badly." },
  { name: "Demis Hassabis", role: "CEO, Google DeepMind", x: 0.70, y: 0.35,
    quote: "We were standing in the foothills of the Singularity." },
  { name: "Mustafa Suleyman", role: "CEO, Microsoft AI", x: 0.85, y: 0.60,
    quote: "[AI will reach] human-level performance on most, if not all, professional tasks." },
  { name: "Satya Nadella", role: "Chairman & CEO, Microsoft", x: -0.20, y: -0.40,
    quote: "[AI] is going to be a cognitive amplifier and a guardian angel." },
  { name: "Jensen Huang", role: "CEO, NVIDIA", x: 0.50, y: -0.65,
    quote: "AI is the greatest equalizer of people the world has ever created." },
  { name: "Marc Andreessen", role: "Co-founder, Andreessen Horowitz", x: 0.65, y: -0.85,
    quote: "AI will not destroy the world, and in fact may save it." },
  { name: "Yann LeCun", role: "Exec. Chairman, AMI Labs · NYU Professor", x: -0.35, y: -0.70,
    quote: "The breakthroughs are not going to come from scaling up LLMs." },
  { name: "Andrew Ng", role: "Founder, DeepLearning.AI", x: -0.70, y: -0.70,
    quote: "[We're] many decades away from an AI that matches human intelligence." },
  { name: "Pedro Domingos", role: "Professor Emeritus, Univ. of Washington", x: -0.60, y: -0.80,
    quote: "Real AI researchers don't worry about AI extinction." },
  { name: "Fei-Fei Li", role: "CEO, World Labs · Stanford", x: -0.35, y: -0.20,
    quote: "[AI policy should rest on] science, not science fiction." },
  { name: "Daron Acemoglu", role: "Nobel Laureate, MIT Economist", x: -0.65, y: 0.45,
    quote: "Bad for equality, bad for the working class, bad for democracy." },
  { name: "Gary Marcus", role: "Cognitive Scientist, NYU Emeritus", x: -0.50, y: 0.40,
    quote: "My p(doom) is low; my p(dystopia) is high." },
  { name: "Emily Bender", role: "Linguist, Co-author of 'The AI Con'", x: -0.90, y: 0.00,
    quote: "Synthetic text extruding machines." },
  { name: "Kate Crawford", role: "Researcher, author of 'Atlas of AI'", x: -0.70, y: 0.60,
    quote: "[AI is] a new form of extractivism." },
  { name: "Narayanan & Kapoor", label: "Narayanan & Kapoor", role: "Authors, 'AI as Normal Technology'", x: -0.75, y: -0.65,
    quote: "Diffusion occurs over decades, not years." },
  { name: "Tyler Cowen", role: "Economist, George Mason University", x: 0.40, y: -0.65,
    quote: "I think it is AGI, seriously." },
  { name: "Pope Leo XIV", label: "Pope Leo", role: "Author of AI encyclical 'Magnifica Humanitas'", x: 0.00, y: 0.60,
    quote: "Our faces and voices are unique, distinctive features of every person." },
  { name: "Lex Fridman", role: "Podcaster, MIT Researcher", x: 0.40, y: 0.10,
    quote: "I would say my p(doom) is about 10%." },
  { name: "Joe Rogan", role: "Podcaster, The JRE", x: 0.50, y: 0.55,
    quote: "AI taking over our world is f***ing horrifying." },
  { name: "Ezra Klein", role: "Journalist, The New York Times", x: 0.70, y: 0.70,
    quote: "What's coming will make [today's AI] look like toys." },
];

/* Each statement loads on one axis only. Agree-keyed and disagree-keyed weights
   balance on each axis (X: 11/11, Y: 12/12), so agreeing with everything scores (0, 0).
   Order alternates axis and keying. */
const QUESTIONS = [
  { text: "By 2030, AI will be able to do most jobs that a skilled person can do entirely from a laptop.", x: 2, y: 0 },
  { text: "Keeping AI safe is an ordinary engineering problem, like making airplanes or bridges safe.", x: 0, y: -2 },
  { text: "Today's large language models are a dead end: reaching human-level AI will take fundamentally new breakthroughs.", x: -2, y: 0 },
  { text: "The chance that AI causes human extinction or a permanent loss of human control over our future is 10% or higher.", x: 0, y: 2 },
  { text: "Before 2032, AI will be doing most of the work of AI research itself, designing and training its own successors.", x: 1.5, y: 0 },
  { text: "Worries about AI turning against humanity belong in science fiction, not serious policy debate.", x: 0, y: -1 },
  { text: "Even when AI beats experts on tests and benchmarks, it will take decades before it can reliably do those experts' actual jobs.", x: -1.5, y: 0 },
  { text: "By 2035, AI will have caused a lasting rise in unemployment in wealthy countries, not just a reshuffling of jobs.", x: 0, y: 2 },
  { text: "The length and complexity of tasks AI agents can complete on their own will keep growing rapidly for years rather than levelling off.", x: 1.5, y: 0 },
  { text: "Like past technologies, AI will end up creating roughly as many good jobs as it destroys.", x: 0, y: -2 },
  { text: "Machines that can do virtually every task better and more cheaply than humans won't exist until after 2050.", x: -2, y: 0 },
  { text: "Advanced AI systems are likely to develop goals of their own that conflict with what their creators intended.", x: 0, y: 1.5 },
  { text: "Before 2035, an AI system will make a Nobel-worthy scientific discovery largely on its own.", x: 1.5, y: 0 },
  { text: "Workers who lose their jobs to AI will mostly find comparable work within a few years.", x: 0, y: -1 },
  { text: "Recent AI progress has been driven more by marketing hype than by genuine leaps in capability.", x: -1.5, y: 0 },
  { text: "By 2035, most entry-level office jobs — junior coders, paralegals, analysts, customer support — will have disappeared.", x: 0, y: 1.5 },
  { text: "When AI lab leaders say human-level AI is only a few years away, they are mostly right.", x: 1.5, y: 0 },
  { text: "Open-source AI and fierce competition will keep AI's power spread among many players rather than a few.", x: 0, y: -1.5 },
  { text: "AI will spread through the economy slowly, over decades, the way electricity and the internet did.", x: -1.5, y: 0 },
  { text: "Whoever controls the most advanced AI could end up with more power than any government or company in history.", x: 0, y: 2 },
  { text: "By 2035 you'll be able to buy a home robot that can do most household chores — laundry, dishes, tidying.", x: 1, y: 0 },
  { text: "Existing laws and institutions can handle AI without radical new measures.", x: 0, y: -1.5 },
  { text: "Human-level AI will arrive before 2040, even if it comes from a different approach than today's chatbots.", x: 1, y: 0 },
  { text: "Even if no AI ever \"goes rogue,\" humans are likely to gradually lose meaningful control over the economy and government as more decisions are handed to AI.", x: 0, y: 1.5 },
  { text: "Within ten years, a company run entirely by AI agents, with no human employees, will earn $1 billion in a year.", x: 1, y: 0 },
  { text: "The economic gains from AI will be broadly shared rather than captured by a small elite.", x: 0, y: -1 },
  { text: "Well into the 2030s, AI will still make basic, embarrassing mistakes that make it unfit for important unsupervised work.", x: -1, y: 0 },
  { text: "Building superintelligent AI should be banned until scientists broadly agree it can be done safely and controllably.", x: 0, y: 1.5 },
  { text: "Physical limits — running out of training data, electricity and chips — will stall AI progress well before it reaches human level.", x: -1.5, y: 0 },
  { text: "Society will adapt to AI the way it adapted to the internet: bumpy, but without fundamental upheaval.", x: 0, y: -2 }
];

const SCALE = [
  { label: "Strongly<br>Disagree", mult: -1,   size: 14 },
  { label: "Disagree",             mult: -0.5, size: 10 },
  { label: "Unsure",               mult: 0,    size: 6 },
  { label: "Agree",                mult: 0.5,  size: 10 },
  { label: "Strongly<br>Agree",    mult: 1,    size: 14 }
];

/* quadrant key: panic (x>0,y>0) · cassandra (x<=0,y>0) · accel (x>0,y<=0) · shrug (else) */
const ARCHETYPES = {
  panic: {
    name: "The Panic Room",
    sub: "Coming fast & for everything",
    body: "You believe AI disruption is both imminent and massive. You're the one at dinner parties making everyone uncomfortable with timelines. You've probably used the phrase \"we have maybe five years\" unironically. You see the signals everywhere — in every product launch, every benchmark, every layoff announcement. Whether you're right or early, you're certainly not relaxed about it."
  },
  cassandra: {
    name: "The Cassandra",
    sub: "Slow collapse, total upheaval",
    body: "You see enormous disruption ahead, but you think people are wrong about the timeline — it's coming slower than the hype suggests, which paradoxically makes it more dangerous. Society won't prepare because the wolf arrives in decades, not months. You're the long-view doomer: patient, persistent, and perpetually frustrated that nobody plans past the next quarter."
  },
  accel: {
    name: "The Accelerationist",
    sub: "Coming soon, but we'll adapt",
    body: "You think AI is advancing fast but that disruption will be manageable — even beneficial. Technology arrives quickly; society adapts; new jobs replace old ones. You've seen this movie before with the internet, with mobile, with every revolution that turned out to be more of an evolution. You're optimistic, possibly annoyingly so, and you think the doomers need to touch grass."
  },
  shrug: {
    name: "The Shrug",
    sub: "Distant future, manageable bumps",
    body: "Maximum chill. You think both the timeline and the disruption are overhyped. AI is useful, maybe even interesting, but the breathless predictions of transformation strike you as the same techno-utopianism (or dystopianism) that accompanies every new technology. You'll start worrying when there's something concrete to worry about. Until then, you have other things to think about."
  }
};

function quadrantKey(nx, ny) {
  if (nx > 0 && ny > 0) return 'panic';
  if (nx <= 0 && ny > 0) return 'cassandra';
  if (nx > 0 && ny <= 0) return 'accel';
  return 'shrug';
}

function intensityNote(nx, ny) {
  const mag = Math.sqrt(nx * nx + ny * ny);
  if (mag < 0.15) return " Your answers place you near dead center — you're genuinely torn, or you could tip into any quadrant on a different day.";
  if (mag > 0.7) return " You're deep in this quadrant — a true believer.";
  return "";
}

function nearestFigure(nx, ny) {
  let nearest = null, nearDist = Infinity;
  FIGURES.forEach(f => {
    const d = Math.sqrt((nx - f.x) ** 2 + (ny - f.y) ** 2);
    if (d < nearDist) { nearDist = d; nearest = f; }
  });
  return nearest;
}
