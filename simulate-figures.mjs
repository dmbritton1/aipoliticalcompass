/*
 * Simulated quiz runs for the notable figures plotted on the AI Doom Compass.
 *
 * Each figure "takes" the 30-statement quiz: one answer per statement on the
 * standard scale (-1 strongly disagree … +1 strongly agree), assigned from
 * their documented public positions as of mid-2026. Scores run through the
 * exact same normalization as a real quiz-taker (see showResult() in the
 * themed HTML files), so figure dots and user dots live in the same space.
 *
 * Run:  node simulate-figures.mjs
 * Then paste the printed coordinates into FIGURES in compass-data.js.
 */
import { readFileSync } from 'fs';

const src = readFileSync(new URL('./compass-data.js', import.meta.url), 'utf8');
const { QUESTIONS } = new Function(`${src}; return { QUESTIONS };`)();

/* Answers indexed by statement order in QUESTIONS:
   0 AGI<10y · 1 overhyped · 2 sparks of reasoning · 3 decades away ·
   4 revised expectations · 5 breakthroughs fade · 6 jobs hit <5y ·
   7 history says slower · 8 knowledge work by 2030 · 9 plateau soon ·
   10 intelligence explosion · 11 safety can't keep up · 12 SI talk = misunderstanding ·
   13 gap smaller than thought · 14 most jobs obsolete · 15 humanity adapts ·
   16 existential risk · 17 risk = misuse only · 18 more jobs created ·
   19 alter being human · 20 govts unprepared · 21 slow erosion of agency ·
   22 AI replaces creatives · 23 worry = luxury · 24 power concentration ·
   25 cognitive-labor world good · 26 self-improvement uncontrollable ·
   27 changed own plans · 28 SI uncontrollable · 29 benefits shared */
const RESPONSES = {
  "Eliezer Yudkowsky": [1,-1,1,-1,.5,-1,0,-.5,.5,-1,1,1,-1,1,1,-1,1,-1,-1,1,1,-1,0,-1,0,-.5,1,1,1,-1],
  "Geoffrey Hinton":   [.5,-1,1,-1,1,-1,.5,-.5,1,-1,0,1,-1,1,1,-.5,1,0,-1,1,1,0,.5,-1,1,-.5,1,.5,.5,-1],
  "Yoshua Bengio":     [.5,-1,.5,-1,1,-1,.5,-.5,1,-1,0,1,-1,0,.5,-1,1,-.5,-.5,1,1,0,.5,-1,1,-.5,1,1,1,-.5],
  "Nick Bostrom":      [.5,-1,1,-1,.5,-1,.5,-.5,.5,-1,.5,.5,-1,1,1,-.5,1,-1,-.5,1,1,.5,1,-1,.5,.5,.5,1,.5,0],
  "Connor Leahy":      [1,-1,1,-1,.5,-1,1,-1,1,-1,1,1,-1,1,1,-1,1,-1,-1,1,1,-.5,1,-1,1,-1,1,1,1,-1],
  "Max Tegmark":       [.5,-1,1,-1,1,-1,1,-.5,1,-1,1,1,-1,.5,.5,-1,1,-1,-.5,1,1,0,0,-1,1,0,1,1,.5,-.5],
  "Stuart Russell":    [0,-.5,0,-.5,.5,-.5,.5,0,.5,-.5,0,1,-.5,0,.5,-1,1,-1,-.5,1,1,.5,.5,-1,.5,-.5,1,.5,.5,-.5],
  "Marc Andreessen":   [.5,-.5,1,-1,.5,-1,.5,-.5,1,-1,.5,-1,.5,.5,-.5,1,-1,1,1,0,-.5,-1,-.5,.5,-.5,1,-.5,1,-1,1],
  "Yann LeCun":        [0,.5,-1,.5,-.5,.5,0,.5,1,1,-1,-1,1,-1,-1,1,-1,1,1,0,-.5,-.5,-.5,.5,0,1,-1,.5,-1,.5],
  "Andrew Ng":         [-.5,.5,0,.5,0,.5,0,.5,1,0,-1,-1,1,-.5,-1,1,-1,1,1,-.5,-.5,-.5,-1,.5,-.5,1,-1,.5,-.5,.5],
  "Pedro Domingos":    [-.5,1,-.5,1,-.5,1,-.5,1,.5,.5,-1,-1,1,-1,-1,1,-1,1,1,-.5,-1,-.5,-1,1,-1,.5,-1,0,-.5,.5],
  "Sam Altman":        [1,-1,1,-1,.5,-1,.5,-.5,1,-1,1,-.5,-1,1,0,.5,.5,.5,.5,1,.5,0,0,-.5,0,1,.5,1,0,.5],
  "Dario Amodei":      [1,-1,1,-1,1,-1,1,-1,1,-1,1,.5,-1,1,.5,-.5,1,0,-.5,1,1,0,.5,-1,1,.5,.5,1,0,0],
  "Demis Hassabis":    [.5,-1,1,-1,.5,-.5,.5,-.5,1,-1,.5,.5,-.5,.5,0,0,.5,0,0,1,1,0,0,-.5,0,1,.5,1,0,.5],
  "Satya Nadella":     [0,0,.5,0,.5,0,.5,.5,1,-.5,-.5,-.5,.5,0,-.5,1,-.5,1,1,0,0,-.5,-.5,0,-.5,1,-.5,1,-.5,.5],
  "Mustafa Suleyman":  [.5,-1,1,-1,.5,-1,.5,-.5,1,-1,.5,.5,-.5,.5,.5,-.5,.5,0,-.5,1,1,.5,.5,-1,1,.5,.5,1,.5,-.5],
  "Jensen Huang":      [1,-1,1,-1,.5,-1,.5,-.5,1,-1,.5,-.5,0,.5,-1,1,-1,1,1,0,-.5,-1,-.5,.5,-1,1,-.5,1,-.5,1],
  "Fei-Fei Li":        [0,0,.5,0,.5,0,.5,0,1,-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,1,.5,0,.5,0,-.5,0,.5,.5,-.5,1,-.5,0],
  "Elon Musk":         [1,-1,1,-1,1,-1,1,-.5,1,-1,1,1,-1,1,1,-1,1,-.5,-1,1,1,0,.5,-1,.5,.5,1,1,.5,0],
  "Daron Acemoglu":    [-1,1,-.5,1,-.5,1,-.5,1,.5,.5,-1,-.5,1,-1,0,-.5,0,.5,-.5,.5,1,1,-.5,-.5,1,-1,-.5,0,0,-1],
  "Gary Marcus":       [-1,1,-1,1,-.5,1,-.5,1,.5,1,-1,-.5,1,-1,-1,0,0,1,-.5,0,1,1,-.5,0,1,-1,-.5,0,0,-1],
  "Emily Bender":      [-1,1,-1,1,-1,1,-.5,1,0,1,-1,-1,1,-1,-1,0,-1,1,-.5,-1,.5,1,0,0,1,-1,-1,0,-1,-1],
  "Lex Fridman":       [.5,-.5,.5,-.5,.5,-.5,.5,0,1,-.5,.5,0,-.5,.5,0,.5,.5,0,.5,1,.5,.5,0,-.5,.5,.5,.5,.5,0,0],
  "Joe Rogan":         [.5,-.5,1,-.5,1,-.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,0,.5,0,-.5,1,1,.5,.5,-.5,1,-.5,1,0,1,-1],
  "Ezra Klein":        [.5,-.5,.5,-1,1,-.5,1,-.5,1,-.5,.5,.5,-.5,.5,.5,-.5,.5,0,-.5,1,1,1,.5,-1,1,-.5,.5,.5,.5,-1],
};

const VALID = new Set([-1, -0.5, 0, 0.5, 1]);
let maxX = 0, maxY = 0;
QUESTIONS.forEach(q => { maxX += Math.abs(q.x); maxY += Math.abs(q.y); });

const QUAD = (x, y) => x > 0 && y > 0 ? 'PANIC ROOM' : x <= 0 && y > 0 ? 'CASSANDRA' : x > 0 ? 'ACCELERATIONIST' : 'SHRUG';

for (const [name, answers] of Object.entries(RESPONSES)) {
  if (answers.length !== QUESTIONS.length) throw new Error(`${name}: ${answers.length} answers, expected ${QUESTIONS.length}`);
  if (!answers.every(a => VALID.has(a))) throw new Error(`${name}: invalid answer value`);
  let sx = 0, sy = 0;
  QUESTIONS.forEach((q, i) => { sx += q.x * answers[i]; sy += q.y * answers[i]; });
  const nx = Math.max(-1, Math.min(1, sx / maxX));
  const ny = Math.max(-1, Math.min(1, sy / maxY));
  console.log(`${name.padEnd(20)} x: ${nx.toFixed(2).padStart(6)}  y: ${ny.toFixed(2).padStart(6)}  → ${QUAD(nx, ny)}`);
}
