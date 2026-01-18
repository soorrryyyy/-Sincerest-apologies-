// Optional: if you want the final "Message me" button to open a link,
// put your chat link here (WhatsApp / Insta DM / etc). Otherwise keep "#".
const MESSAGE_LINK = "#";

const slides = [
  {
    pill: "🎀 Happy Birthday",
    title: "Happy Birthday Riya 🎀",
    body: [
      "Ishika… but I call you Riya.",
      "Today is your day, and I just want to make you smile.",
      "Click next… slowly 😭❤️"
    ],
    buttons: [{ text: "Next →", kind: "primary", next: true }]
  },
  {
    pill: "💗 3 things I admire",
    title: "Three things I genuinely admire",
    body: [
      "• You are beautiful.",
      "• I loved spending time with you.",
      "• Great voice."
    ],
    buttons: [{ text: "Next →", kind: "primary", next: true }]
  },
  {
    pill: "✨ You changed me",
    title: "Because of you, I started changing (in a good way)",
    body: [
      "I started watching GOT.",
      "I started reading a book (which I always wanted to but couldn’t).",
      "I started taking care of my skin.",
      "Just you being on my side motivated me to bring my best self out."
    ],
    buttons: [{ text: "Next →", kind: "primary", next: true }]
  },
  {
    pill: "🩷 Pink vibes only",
    title: "Also… your favorite color is pink",
    body: [
      "I don’t know the exact shade…",
      "but I know it’s the lighter, pretty pink.",
      "So yes, everything here is pink-coded 😌"
    ],
    buttons: [{ text: "Next →", kind: "primary", next: true }]
  },
  {
    pill: "📌 Our story",
    title: "From Hinge to… us",
    body: [
      "23rd Sep: we matched.",
      "8th Oct: you said you wanted to take things to the next level.",
      "14th Nov: you said it would be great if we dated.",
      "29th Nov: our date — and I loved it.",
      "6th Dec: “I love u Ria” — “I loveeee u tooo”."
    ],
    buttons: [{ text: "Next →", kind: "primary", next: true }]
  },

  // This is your "There's one note" screen
  {
    pill: "📝 One note",
    title: "There’s one note…",
    body: [
      "Please read it till the end.",
      "Just… please."
    ],
    buttons: [{ text: "Open the note →", kind: "primary", next: true }]
  },

  // Screen A
  {
    pill: "🫠 The note",
    title: "Riya, I want to tell you that I messed up big time.",
    body: [
      "Because on our second date, which I thought would happen around 10–11th Jan, I properly wanted to propose to you, and that’s why I was continuously thinking about you. And because of that came the overthinking (you know me), I overthink a lot.",
      "That’s why I’ve never taken the first step in our relationship, thinking that it might ruin what we have. And it was the overthinking that was the cause of this breakup.",
      "I am so so so sorrryyyyy."
    ],
    buttons: [{ text: "Next →", kind: "primary", next: true }]
  },

  // Screen B
  {
    pill: "🫠 The note",
    title: "And then I made it worse…",
    body: [
      "The next day, I tried being nonchalant and asked you if you wanted to come back. All of this happened all of a sudden, and the obvious and expected answer was no.",
      "Not one day has gone by since that day when your thought did not cross my mind. You became my 11:11.",
      "I check my phone multiple times a day just to see if you’ve messaged or not, but why would you after what I have done.",
      "So now, very chalantly, I am saying that I miss you a hell lot and would love to be back in the relationship — with you in it, obviously."
    ],
    buttons: [{ text: "Next →", kind: "primary", next: true }]
  },

  // Screen C (final note + quote)
  {
    pill: "🫠 The note",
    title: "Sorrrrryyyyy…",
    body: [
      "Sorrrrryyyyy for thinking and saying that you are not serious for this relationship. Clearly, you were, and so am I — just that ki main bahut bada chutiya hoon and overthink kar jaata hoon. Ek galti toh khuda bhi maaf karta hai.",
      "I wanna say 1 more thing:",
      "“Agar baat zaroori hai toh insaan bhool jao, and agar insaan zaroori hai toh baat bhool jao.”",
      "You are very important for me. Remove 9th, 10th, and 11th Jan from your life and then think, pleaasseeeeeeeee."
    ],
    buttons: [
      { text: "Message me", kind: "primary", action: "message" },
      { text: "I need time", kind: "ghost", action: "time" }
    ]
  },

  // Outcome screens
  {
    pill: "💌",
    title: "Okay…",
    body: [
      "If you pressed “Message me”…",
      "I’ll be here.",
      "And I really, really miss you."
    ],
    buttons: [{ text: "One last heart →", kind: "primary", next: true }]
  },
  {
    pill: "🫶",
    title: "I understand.",
    body: [
      "If you pressed “I need time”…",
      "I won’t force anything.",
      "But you’ll still be my 11:11."
    ],
    buttons: [{ text: "End", kind: "primary", action: "end" }]
  }
];

let i = 0;
const card = document.getElementById("card");
const pill = document.getElementById("pill");
const title = document.getElementById("title");
const body = document.getElementById("body");
const actions = document.getElementById("actions");
const heartsLayer = document.getElementById("hearts-layer");

function escapeHtml(str){
  return str.replace(/[&<>"']/g, (m) => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[m]));
}

function renderBody(lines){
  // lines is an array of strings. Each becomes a <p>.
  return lines.map(t => `<p>${escapeHtml(t)}</p>`).join("");
}

function popHearts(burst=10){
  const w = window.innerWidth;
  for(let k=0;k<burst;k++){
    const el = document.createElement("div");
    el.className = "heart";
    el.textContent = "❤";
    const left = Math.random()*w;
    const size = 14 + Math.random()*18;
    const dur = 2.8 + Math.random()*2.8;
    el.style.left = `${left}px`;
    el.style.fontSize = `${size}px`;
    el.style.animationDuration = `${dur}s`;
    el.style.top = `${window.innerHeight + 20}px`;
    el.style.opacity = "0";
    heartsLayer.appendChild(el);
    // cleanup
    setTimeout(()=> el.remove(), (dur*1000)+200);
  }
}

function setSlide(idx){
  const s = slides[idx];
  pill.textContent = s.pill ?? "🎀";
  title.textContent = s.title ?? "";
  body.innerHTML = renderBody(s.body ?? []);
  actions.innerHTML = "";

  (s.buttons ?? []).forEach(btn => {
    const b = document.createElement("button");
    b.textContent = btn.text;
    b.className = btn.kind === "ghost" ? "btn-ghost" : "btn-primary";

    b.onclick = () => {
      popHearts(14);

      if(btn.next){
        goNext();
        return;
      }
      if(btn.action === "message"){
        if(MESSAGE_LINK && MESSAGE_LINK !== "#"){
          window.open(MESSAGE_LINK, "_blank", "noopener,noreferrer");
        }
        // show the “okay…” slide
        i = slides.findIndex(x => x.title === "Okay…");
        transitionTo(i);
        return;
      }
      if(btn.action === "time"){
        i = slides.findIndex(x => x.title === "I understand.");
        transitionTo(i);
        return;
      }
      if(btn.action === "end"){
        // restart or just freeze
        b.disabled = true;
        b.textContent = "❤️";
        return;
      }
    };

    actions.appendChild(b);
  });

  // little ambient hearts on every screen
  popHearts(6);
}

function transitionTo(nextIdx){
  card.classList.add("fade-out");
  setTimeout(() => {
    i = Math.max(0, Math.min(slides.length-1, nextIdx));
    setSlide(i);
    card.classList.remove("fade-out");
    card.classList.add("fade-in");
    setTimeout(()=> card.classList.remove("fade-in"), 350);
  }, 280);
}

function goNext(){
  const next = Math.min(slides.length-1, i+1);
  transitionTo(next);
}

// gentle continuous hearts
setInterval(() => popHearts(2), 900);

setSlide(i);
