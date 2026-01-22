// Script exactly as per your file: Screens 1–6, then A–C.
// Hearts float regularly. Screen 3 does one confetti burst.
// Screen 6 also pops hearts gently while you scroll.

const fxLayer = document.getElementById("fx-layer");
const card = document.getElementById("card");
const pillEl = document.getElementById("pill");
const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const bodyEl = document.getElementById("body");
const actionsEl = document.getElementById("actions");
const hintEl = document.getElementById("hint");

const slides = [
  // Screen 1 — Landing
  {
    pill: "💗 25 Jan: Riya Day",
    title: "Happy Birthday, Riya 🎀",
    subtitle: "(Ishika, but always Riya to me)",
    kind: "text",
    paragraphs: [],
    button: { text: "Let's go →" },
    sparkles: true
  },

  // Screen 2 — Birthday wish (short + sweet)
  {
    pill: "💗 Birthday wish",
    title: "",
    subtitle: "",
    kind: "text",
    paragraphs: [
      "Riya, today is your day.",
      "I hope you feel loved, celebrated, and genuinely happy.",
      "May this year be lighter, kinder, and full of wins."
    ],
    button: { text: "Next →" }
  },

  // Screen 3 — A tiny gift
  {
    pill: "🎁 A tiny gift",
    title: "",
    subtitle: "",
    kind: "text",
    paragraphs: [
      "I couldn’t give you a wrapped gift…",
      "so I made you a little website instead 💗"
    ],
    button: { text: "Continue →" },
    confetti: true
  },

  {
  pill: "💭 One more thing",
  title: "Before we continue…",
  subtitle: "",
  kind: "text",
//   body: [
//     "I just wanted to remind you of a few things I genuinely love about you 💗"
//   ],
  button: { text: "Okay →" }
},


{
  pill: "🩷🩷🩷",
  title: "Here are a few things I adore about you 💗",
//   subtitle: "here are 3 things I adore about you 💗",
  kind: "cards",
  cards: [
    "You’re genuinely beautiful - inside and out.",
    "Your voice is honestly my favorite sound.",
    "I loved spending time with you… it felt special in the simplest way."
  ],
  button: { text: "More →" }
},


  // Screen 5 — You made me better
  {
    pill: "✨ You made me better",
    title: "You made me better",
    // subtitle: "(keep it wholesome)",
    kind: "list",
    before: "Because of you, I’ve been trying to become a better version of me - like:",
    items: [
      "I've started reading books 📖",
      "I started caring about my skin and health",
      "I've almost completed GOT 😭"
    ],
    // after: "Thank you for that, Riya.",
    button: { text: "Keep going →" }
  },

  // Screen 6 — Little timeline
//   {
//     pill: "🕰️ Memory lane",
//     title: "Little timeline",
//     // subtitle: "(as a “memory lane” gift)",
//     kind: "list",
//     before: "A few dates I’ll always remember:",
//     items: [
//       "23 Sep — We matched, and reels became a daily thing",
//       "8 Oct — You said “let’s take a step further to see where this connection could lead”",
//       "14 Nov — “it would be great if we date”",
//       "29 Nov — our first date (I still smile thinking of it)",
//       "6 Dec — “I love you, Riya” … “I loveeee you tooo”"
//     ],
//     button: { text: "Keep going →" },
//     scrollHearts: true
//   },


{
  pill: "🕰️ Memory lane",
  title: "Little timeline",
  // subtitle: "(as a “memory lane” gift)",
  kind: "list",
  before: "A few dates I’ll always remember:",
  items: [
    "23 Sep — We matched, and reels became a daily thing",
    "8 Oct — You said “let’s take a step further to see where this connection could lead”",
    "14 Nov — “it would be great if we date”",
    "29 Nov — Our first date (I still smile thinking of it)",
    "       I was in the cab and you were already in CP - I was so nervous. But the moment I called you outside Social… and then I saw you… my smile turned on automatically. I was genuinely so, so happy to meet you in person.",
    "       And later, when we were sitting on the bench, that aunty came, put her hands on our heads and said “Tum dono ki jodi salamat rahe.” From the inside I was like: “Aap 10-20 kya mere saare paise rakh lo… aapke muh mein ghee shakkar.” 😭🩷",
    "6 Dec — “I love u Ria 💝” … “I loveeee u tooo”"
  ],
  button: { text: "Go on →" },
  scrollHearts: true
},


  // Screen A (Part 1)
  {
    pill: "Apology",
    title: "Apology",
    subtitle: "",
    kind: "text",
    paragraphs: [
      "Riya, I want to tell you that I messed up big time.",
      "Because on our second date, which I thought would happen around 10–11th Jan, I properly wanted to propose to you, and that’s why I was continuously thinking about you. And because of that came the overthinking. Tumhe pta to h kitna faltu sochta hu mei. That’s why I’ve never taken the first step in our relationship, thinking that it might ruin what we have. And it was the overthinking that caused this mess.",
      "I am so so so sorrryyyyy."
    ],
    button: { text: "Please read →" }
  },

  // Screen B (Part 2)
  {
    pill: "Apology",
    title: "Apology (Contd.)",
    subtitle: "",
    kind: "text",
    paragraphs: [
      "The next day, I tried being nonchalant and asked you if you wanted to come back. Everything happened so suddenly, and the obvious and expected answer was no.",
      "Not a single day has gone by since then without you crossing my mind. You became my 11:11. I check my phone multiple times a day just to see if you’ve messaged… but why would you after what I did.",
      "You said we’re way different. I actually think that’s a good thing. In a way, you complete me. Thode thoughts alag h toh arguments toh honge hi… but that’s what makes a relationship interesting and fun.",
    "“If both people agree on everything, then one of them is unnecessary na bc.” - Wisely said by our very own Lord Manoj Bajpayee (Family Man) 😭😭",
      "So now, very chalantly, I am saying that I miss you a hell lot and would love to be back in the relationship - with you in it, obviously."
    ],
    button: { text: "Pls aage padho 😭 →" }
  },

  // Screen C (Part 3) — Final
  {
    pill: "Apology",
    title: "Apology (Contd. Further)",
    subtitle: "",
    kind: "text",
    paragraphs: [
    "Sorrrrryyyyy for thinking and saying that you are not serious for this relationship. Clearly, you were, and so am I - just that ki mei bahut bada chutiya hoon and overthink kar jaata hoon faltu mei.",
    "QUOTE: Ek galti toh khuda bhi maaf karta hai.",
    "QUOTE: Agar baat zaroori hai toh insaan bhool jao, aur agar insaan zaroori hai toh baat bhool jao.",
    " ", // keep a space (NOT empty string) if you want a blank line gap
    "You are very important for me. Remove 9th, 10th, and 11th Jan from your life and then think, pleaasseeeeeeeee."
    ],

    button: null
  }
];

let idx = 0;
let scrollListenerAttached = false;
let lastScrollHeart = 0;

function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function popFloat(symbol, count) {
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (let k = 0; k < count; k++) {
    const el = document.createElement("div");
    el.className = "float";
    el.textContent = symbol;

    const left = Math.random() * w;
    const size =
      symbol === "✨" ? 12 + Math.random() * 14 : 14 + Math.random() * 18;
    const dur = 2.8 + Math.random() * 2.8;

    el.style.left = `${left}px`;
    el.style.top = `${h + 20}px`;
    el.style.fontSize = `${size}px`;
    el.style.animationDuration = `${dur}s`;

    fxLayer.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 250);
  }
}

function popHearts(n = 8) {
  const hearts = ["💗","💖","💕","💞","💝","❤️","🩷","💘","💟","❣️"];
  for (let k = 0; k < n; k++) {
    popFloat(hearts[Math.floor(Math.random() * hearts.length)], 1);
  }
}

function popSparkles(n = 4) {
  popFloat("✨", n);
}

function confettiBurst() {
  const w = window.innerWidth;
  const pieces = ["🎀", "✨", "💗", "💖", "🎉"];
  for (let k = 0; k < 38; k++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.textContent = pieces[Math.floor(Math.random() * pieces.length)];

    const left = Math.random() * w;
    const size = 14 + Math.random() * 16;
    const dur = 1.6 + Math.random() * 1.6;

    el.style.left = `${left}px`;
    el.style.fontSize = `${size}px`;
    el.style.animationDuration = `${dur}s`;
    el.style.animationDelay = `${Math.random() * 0.25}s`;

    fxLayer.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 700);
  }
}

function setSlide(i) {
  const s = slides[i];

  pillEl.textContent = s.pill || "🎀";
  titleEl.textContent = s.title || "";
  subtitleEl.textContent = s.subtitle || "";

  // render body
  clearNode(bodyEl);

  if (s.kind === "cards") {
    const wrap = document.createElement("div");
    wrap.className = "cards";
    (s.cards || []).forEach((txt) => {
      const div = document.createElement("div");
      div.className = "mini-card";
      div.textContent = txt;
      wrap.appendChild(div);
    });
    bodyEl.appendChild(wrap);
  } else if (s.kind === "list") {
    if (s.before) {
      const p = document.createElement("p");
      p.textContent = s.before;
      bodyEl.appendChild(p);
    }
    const ul = document.createElement("ul");
    (s.items || []).forEach((it) => {
      const li = document.createElement("li");
      li.textContent = it;
      ul.appendChild(li);
    });
    bodyEl.appendChild(ul);

    if (s.after) {
      const p2 = document.createElement("p");
      p2.textContent = s.after;
      bodyEl.appendChild(p2);
    }
} else {
  (s.paragraphs || []).forEach((txt) => {
    if (!txt) return;

    const p = document.createElement("p");

    // Quote callout support
    if (txt.startsWith("QUOTE:")) {
      p.classList.add("quote");
      p.textContent = txt.replace(/^QUOTE:\s*/, "");
    } else {
      p.textContent = txt;
    }

    bodyEl.appendChild(p);
  });
}

  // buttons
  clearNode(actionsEl);

  // Back button (shows on every screen except the first)
  if (idx > 0) {
    const back = document.createElement("button");
    back.className = "btn-ghost";
    back.textContent = "← Previous";
    back.onclick = () => {
      popHearts(8);
      goPrev();
    };
    actionsEl.appendChild(back);
  }

  // Next button (only if the slide has it)
  if (s.button) {
    const next = document.createElement("button");
    next.className = "btn-primary";
    next.textContent = s.button.text || "Next →";
    next.onclick = () => {
      popHearts(14);
      goNext();
    };
    actionsEl.appendChild(next);
        if (hintEl) hintEl.style.display = "none";
  } else {
    if (hintEl) hintEl.style.display = "none";
  }



  // enter effects
  popHearts(6);
  if (s.sparkles) popSparkles(6);
  if (s.confetti) confettiBurst();

  // scroll hearts on Screen 6
  if (s.scrollHearts) {
    attachScrollHearts();
  } else {
    detachScrollHearts();
  }
}

function attachScrollHearts() {
  if (scrollListenerAttached) return;
  scrollListenerAttached = true;
  bodyEl.addEventListener("scroll", onBodyScroll, { passive: true });
}
function detachScrollHearts() {
  if (!scrollListenerAttached) return;
  scrollListenerAttached = false;
  bodyEl.removeEventListener("scroll", onBodyScroll);
}

function onBodyScroll() {
  const now = Date.now();
  if (now - lastScrollHeart < 180) return; // gentle throttle
  lastScrollHeart = now;
  popHearts(1);
}

function transitionTo(nextIdx) {
  card.classList.add("fade-out");
  setTimeout(() => {
    idx = Math.max(0, Math.min(slides.length - 1, nextIdx));
    setSlide(idx);

    // NEW: always start the next/prev slide from the top
    bodyEl.scrollTop = 0;                      // reset the scrollable text area
    window.scrollTo(0, 0);                     // extra safety (mobile browsers)
    requestAnimationFrame(() => { bodyEl.scrollTop = 0; }); // iOS-friendly

    card.classList.remove("fade-out");
    card.classList.add("fade-in");
    setTimeout(() => card.classList.remove("fade-in"), 350);
  }, 280);
}


function goNext() {
  if (idx >= slides.length - 1) return;
  transitionTo(idx + 1);
}

function goPrev() {
  if (idx <= 0) return;
  transitionTo(idx - 1);
}

// regular hearts at intervals
setInterval(() => popHearts(4), 650);

// start
setSlide(idx);
