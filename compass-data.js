/* ── SHARED QUIZ DATA — used by all themed versions of The AI Doom Compass ── */

/* Coordinates are simulated quiz results: each figure "answered" all 30
   statements based on their documented public positions (mid-2026), scored
   through the same normalization as a real quiz-taker.
   See simulate-figures.mjs to review or re-run the simulation. */
const FIGURES = [
  { name: "Eliezer Yudkowsky", role: "Co-founder, MIRI", x: 0.85, y: 0.75,
    quote: "If anyone builds it, everyone dies." },
  { name: "Geoffrey Hinton", role: "Nobel Laureate, 'Godfather of AI'", x: 0.79, y: 0.76,
    quote: "There's a 10 to 20 percent chance these things wipe us out." },
  { name: "Yoshua Bengio", role: "Turing Award Winner, Founder of LawZero", x: 0.74, y: 0.74,
    quote: "We don't know how to control machines smarter than us." },
  { name: "Nick Bostrom", role: "Philosopher, Macrostrategy Research Initiative", x: 0.74, y: 0.67,
    quote: "We're like children playing with a bomb." },
  { name: "Connor Leahy", role: "CEO, Conjecture", x: 0.97, y: 0.93,
    quote: "We are not ready. Nobody is ready." },
  { name: "Max Tegmark", role: "Physicist, Future of Life Institute", x: 0.87, y: 0.74,
    quote: "We need a pause before it's too late." },
  { name: "Stuart Russell", role: "Professor, UC Berkeley", x: 0.43, y: 0.64,
    quote: "You can't fetch the coffee if you're dead." },
  { name: "Elon Musk", role: "CEO, xAI · Tesla · SpaceX", x: 0.93, y: 0.74,
    quote: "80 percent good outcome — 20 percent chance of annihilation." },
  { name: "Sam Altman", role: "CEO, OpenAI", x: 0.70, y: 0.21,
    quote: "We are past the event horizon. The takeoff has started." },
  { name: "Dario Amodei", role: "CEO, Anthropic", x: 0.89, y: 0.61,
    quote: "A country of geniuses in a datacenter." },
  { name: "Demis Hassabis", role: "CEO, Google DeepMind", x: 0.62, y: 0.28,
    quote: "AGI is coming — and I'm not sure society's ready." },
  { name: "Mustafa Suleyman", role: "CEO, Microsoft AI", x: 0.69, y: 0.59,
    quote: "Containment is the challenge of our age." },
  { name: "Satya Nadella", role: "CEO, Microsoft", x: 0.02, y: -0.36,
    quote: "AI is the next platform shift." },
  { name: "Jensen Huang", role: "CEO, NVIDIA", x: 0.44, y: -0.41,
    quote: "AI is the great equalizer." },
  { name: "Marc Andreessen", role: "VC, Andreessen Horowitz", x: 0.33, y: -0.42,
    quote: "AI will save the world." },
  { name: "Yann LeCun", role: "Turing Award Winner, ex-Meta", x: -0.52, y: -0.64,
    quote: "AI taking over? Pardon my French — complete B.S." },
  { name: "Andrew Ng", role: "AI Researcher, Stanford", x: -0.40, y: -0.66,
    quote: "AI risk fears are overblown." },
  { name: "Pedro Domingos", role: "Professor, Univ. of Washington", x: -0.71, y: -0.80,
    quote: "The robots are not about to rise." },
  { name: "Fei-Fei Li", role: "CEO, World Labs · Stanford", x: 0.03, y: -0.17,
    quote: "There's nothing artificial about AI — it's made by people." },
  { name: "Daron Acemoglu", role: "Nobel Laureate, Economist, MIT", x: -0.56, y: 0.09,
    quote: "The gains will flow to a narrow elite — unless we change course." },
  { name: "Gary Marcus", role: "Cognitive Scientist, NYU Emeritus", x: -0.65, y: -0.08,
    quote: "Generative AI was always overhyped." },
  { name: "Emily Bender", role: "Linguist, Co-author of 'The AI Con'", x: -0.79, y: -0.28,
    quote: "It's not intelligent — and the hype is doing real harm." },
  { name: "Lex Fridman", role: "Podcaster, MIT Researcher", x: 0.42, y: 0.24,
    quote: "I try to hold space for both wonder and worry." },
  { name: "Joe Rogan", role: "Podcaster, The JRE", x: 0.56, y: 0.61,
    quote: "This AI stuff is wild, man. It's gonna change everything." },
  { name: "Ezra Klein", role: "Journalist, The New York Times", x: 0.62, y: 0.66,
    quote: "I don't think we're emotionally prepared for what's coming." },
];

const QUESTIONS = [
  { text: "AGI — artificial general intelligence — will arrive within the next ten years.", x: 2, y: 0.5 },
  { text: "The pace of AI progress has been dramatically overhyped by the tech industry.", x: -2, y: -0.5 },
  { text: "Current AI models are already showing early sparks of general reasoning ability.", x: 1.5, y: 0.5 },
  { text: "We are still many decades away from AI systems that can truly replace human judgment.", x: -2, y: -0.5 },
  { text: "The speed of AI progress over the last three years has made me seriously revise my expectations.", x: 1.5, y: 0.5 },
  { text: "AI \"breakthroughs\" almost always look less impressive once the initial hype dies down.", x: -1.5, y: -0.5 },
  { text: "Major AI-driven disruptions to the job market will be visible within five years, not twenty.", x: 2, y: 1 },
  { text: "History shows that transformative technologies take far longer to reshape society than early adopters predict.", x: -1.5, y: -0.5 },
  { text: "By 2030, most knowledge workers will use AI as a core part of their daily workflow.", x: 1.5, y: 0.5 },
  { text: "The current wave of AI will plateau soon, much like previous hype cycles in the field.", x: -2, y: -0.5 },
  { text: "We are in the early stages of an intelligence explosion that will unfold within this decade.", x: 2, y: 1 },
  { text: "AI capabilities are improving so fast that safety research cannot possibly keep up.", x: 1.5, y: 1 },
  { text: "Talk of imminent superintelligence reflects a fundamental misunderstanding of how these systems work.", x: -2, y: -1 },
  { text: "The gap between today's AI and true human-level intelligence is far smaller than most people think.", x: 1.5, y: 0.5 },
  { text: "AI will eventually render most current human jobs obsolete — not just transform them.", x: 0.5, y: 2 },
  { text: "Humanity has always adapted to new technologies, and AI will be no different.", x: -0.5, y: -2 },
  { text: "AI poses a genuine existential risk to human civilization.", x: 0.5, y: 2 },
  { text: "The risks of AI are mostly about misuse by bad actors, not the technology itself going wrong.", x: 0, y: -1.5 },
  { text: "AI will create more new jobs and opportunities than it destroys.", x: 0, y: -2 },
  { text: "Within our lifetimes, AI could fundamentally alter what it means to be human.", x: 0.5, y: 2 },
  { text: "Governments are dangerously unprepared for the social disruption AI will cause.", x: 0.5, y: 1.5 },
  { text: "The real danger of AI isn't dramatic — it's a slow, boring erosion of human agency and purpose.", x: -0.5, y: 1.5 },
  { text: "AI-generated art, writing, and music will largely replace human creative professionals.", x: 0.5, y: 2 },
  { text: "Worrying about AI risk is a luxury for rich technologists — most people have bigger problems right now.", x: -0.5, y: -2 },
  { text: "AI will concentrate power in the hands of a few corporations and governments more than any technology before it.", x: 0, y: 2 },
  { text: "A world where AI handles most cognitive labor could actually be a pretty good one for most people.", x: 0, y: -1.5 },
  { text: "Once AI can improve its own code, progress will become uncontrollable.", x: 1, y: 2 },
  { text: "I have personally changed my career plans, education, or investments because of AI.", x: 1, y: 1 },
  { text: "If a true superintelligence emerged, it would be impossible for humans to stay in control.", x: 0.5, y: 2 },
  { text: "The economic benefits of AI will be broadly shared across society, not hoarded by elites.", x: -0.5, y: -2 }
];

const SCALE = [
  { label: "Strongly<br>Disagree", mult: -1,   size: 14 },
  { label: "Disagree",             mult: -0.5, size: 10 },
  { label: "Neutral",              mult: 0,    size: 6 },
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
