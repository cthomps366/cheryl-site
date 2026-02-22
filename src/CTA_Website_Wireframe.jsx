import { useState } from "react";
import headshot from "./assets/Cheryl-Thompson.png";

const COLORS = {
  navy: "#1B2A3D",
  teal: "#0D8B8B",
  tealLight: "#14B8A6",
  warmWhite: "#F8FAF9",
  cream: "#FDF6EC",
  charcoal: "#2D3748",
  mediumGray: "#64748B",
  lightGray: "#E2E8F0",
  gold: "#D4A843",
  coral: "#E8725A",
  white: "#FFFFFF",
};

const pages = ["Home", "My Story", "Work With Me", "Learning Labs", "Contact"];

// ============ NAV ============
function Nav({ current, setCurrent }) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: COLORS.white,
        borderBottom: `1px solid ${COLORS.lightGray}`,
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 20,
            fontWeight: 700,
            color: COLORS.navy,
            letterSpacing: "-0.02em",
          }}
        >
          Cheryl Thompson
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: COLORS.mediumGray,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}
        >
          Advisory
        </span>
      </div>
      <div style={{ display: "flex", gap: 28 }}>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setCurrent(p)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: current === p ? COLORS.teal : COLORS.charcoal,
              fontWeight: current === p ? 600 : 400,
              letterSpacing: "0.02em",
              borderBottom: current === p ? `2px solid ${COLORS.teal}` : "2px solid transparent",
              paddingBottom: 4,
              transition: "all 0.2s ease",
            }}
          >
            {p}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ============ SECTION LABEL ============
function SectionLabel({ text }) {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: COLORS.teal,
        marginBottom: 16,
        fontWeight: 600,
      }}
    >
      {text}
    </div>
  );
}

// ============ GOLD DIVIDER ============
function GoldDivider() {
  return (
    <div
      style={{
        width: 60,
        height: 2,
        background: COLORS.gold,
        margin: "32px 0",
      }}
    />
  );
}

// ============ CTA BUTTON ============
function CTAButton({ text, variant = "primary" }) {
  const isPrimary = variant === "primary";
  return (
    <button
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: "0.04em",
        padding: "16px 40px",
        border: isPrimary ? "none" : `1.5px solid ${COLORS.navy}`,
        background: isPrimary ? COLORS.teal : "transparent",
        color: isPrimary ? COLORS.white : COLORS.navy,
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
    >
      {text}
    </button>
  );
}

// ============ HOME PAGE ============
function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          background: COLORS.navy,
          padding: "100px 64px 80px",
          minHeight: 480,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: COLORS.tealLight,
              marginBottom: 28,
              fontWeight: 500,
            }}
          >
            Cheryl Thompson Advisory
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 64,
              fontWeight: 700,
              color: COLORS.white,
              lineHeight: 1.2,
              margin: 0,
              marginBottom: 24,
            }}
          >
            AI is a skill, not a trend.
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              color: COLORS.lightGray,
              lineHeight: 1.7,
              margin: 0,
              marginBottom: 40,
              maxWidth: 580,
            }}
          >
            It's becoming the biggest career differentiator of this decade.
            I teach leaders and teams to build that skill with discipline and
            structure, on their real work, until it's theirs.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
          <button
  onClick={() =>
    window.open(
      "https://calendly.com/cadia-cheryl/15min?month=2026-02",
      "_blank"
    )
  }
>
  Book a Conversation
</button>
            <button
              onClick={() => setCurrentPage("Learning Labs")}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                padding: "16px 40px",
                border: `1.5px solid ${COLORS.tealLight}`,
                background: "transparent",
                color: COLORS.tealLight,
                cursor: "pointer",
                letterSpacing: "0.04em",
              }}
            >
              Explore Learning Labs
            </button>
          </div>
        </div>
      </section>

      {/* WHAT I DO - 4 TIERS */}
      <section style={{ padding: "80px 64px", background: COLORS.warmWhite }}>
        <SectionLabel text="How I Work With People" />
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 32,
            color: COLORS.navy,
            margin: "0 0 48px 0",
            fontWeight: 600,
          }}
        >
          Four ways in. One goal: capability that stays.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {[
            {
              title: "Learning Labs",
              tag: "Free",
              desc: "60-minute weekly sessions where you work on a real challenge and leave with something you can use the same day. No pitch, no theory. Just practical AI skill-building.",
              audience: "Open to all",
            },
            {
              title: "One-on-One AI Advisory",
              tag: "Starting at $5,000",
              desc: "We work on your actual projects, build prompts and workflows tailored to your role, and develop AI capability you can build on long after we stop meeting.",
              audience: "Directors, managers, individual contributors",
            },
            {
              title: "Your Edge — Executive Sprint",
              tag: "Starting at $12,500",
              desc: "A focused advisory engagement for senior leaders who need a strategic thinking partner. We tackle the challenges you can't hand off to anyone else, using AI to think with more clarity and speed.",
              audience: "Senior leaders and executives",
            },
            {
              title: "Team AI Accelerator",
              tag: "Starting at $25,000",
              desc: "Your team learns to build AI-powered tools for their own work. Six to eight weeks embedded with your team, building prompts, workflows, and a custom AI assistant they own.",
              audience: "Functional leaders and their teams",
            },
          ].map((offer, i) => (
            <div
              key={i}
              style={{
                background: COLORS.white,
                border: `1px solid ${COLORS.lightGray}`,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 240,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 20,
                      color: COLORS.navy,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    {offer.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: offer.tag === "Free" ? COLORS.teal : COLORS.charcoal,
                      background: offer.tag === "Free" ? "#E6F7F7" : COLORS.cream,
                      padding: "4px 12px",
                      letterSpacing: "0.02em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {offer.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 18,
                    color: COLORS.charcoal,
                    lineHeight: 1.7,
                    margin: "0 0 16px 0",
                  }}
                >
                  {offer.desc}
                </p>
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  color: COLORS.mediumGray,
                  fontStyle: "italic",
                }}
              >
                {offer.audience}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section
        style={{
          padding: "60px 64px",
          background: COLORS.cream,
          borderTop: `1px solid ${COLORS.lightGray}`,
          borderBottom: `1px solid ${COLORS.lightGray}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          {[
            { number: "31", label: "years at Ford Motor Company" },
            { number: "1000s", label: "of hours building with AI" },
            { number: "16", label: "Learning Lab topics" },
            { number: "40+", label: "years in automotive & operations" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center", flex: "1 1 180px" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: COLORS.teal,
                  marginBottom: 6,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: COLORS.mediumGray,
                  letterSpacing: "0.01em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BELIEF SECTION */}
      <section style={{ padding: "80px 64px", background: COLORS.white }}>
        <div style={{ maxWidth: 640 }}>
          <SectionLabel text="What I Believe" />
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 30,
              color: COLORS.navy,
              margin: "0 0 24px 0",
              fontWeight: 600,
              lineHeight: 1.35,
            }}
          >
            The number one reason people aren't learning AI is the same thing I hear every week: "I don't have time."
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              color: COLORS.charcoal,
              lineHeight: 1.8,
              margin: "0 0 20px 0",
            }}
          >
            AI is the investment that creates the time. But you have to treat it like any other skill that matters. Schedule it. Show up. Have structure and someone to be accountable to. That's what most AI training is missing.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 18,
              color: COLORS.charcoal,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            I have never felt more organized, more confident, or more capable in my work than I do right now. That's not a sales pitch. That's my actual experience. And it's what I want for every leader and team I work with.
          </p>
          <GoldDivider />
          <button
  onClick={() =>
    window.open(
      "https://calendly.com/cadia-cheryl/15min?month=2026-02",
      "_blank"
    )
  }
>
  Book a Conversation
</button>
        </div>
      </section>
    </div>
  );
}

// ============ MY STORY PAGE ============
function MyStoryPage() {
  return (
    <div>
    <section style={{ padding: "80px 40px", background: COLORS.warmWhite }}>
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <SectionLabel text="My Story" />
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 38,
              color: COLORS.navy,
              margin: "0 0 40px 0",
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            I've been through hard pivots before. Every one made me more capable than the version before.
          </h1>

          <div style={{ 
            display: "flex", 
            gap: 32, 
            alignItems: "flex-start", 
            flexWrap: "wrap",
            marginBottom: 48
          }}>
            <img
              src={headshot}
              alt="Cheryl Thompson"
              style={{
                width: 360,
                maxWidth: "100%",
                borderRadius: 16,
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              }}
            />
          </div>

          <GoldDivider />

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 22,
              color: COLORS.teal,
              margin: "40px 0 16px 0",
              fontWeight: 600,
            }}
          >
            Where It Started
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 16px 0" }}>
            I got pregnant when I was 17. I was waitressing and trying to figure out what came next. My dad, who was an engineer at Ford Motor Company, convinced me to apply. I got in through food service — and from there, I talked my way into a four-year tool and die apprenticeship.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 16px 0" }}>
            That apprenticeship changed everything. I graduated, worked as a journey person for a couple of years, and then a superintendent — someone who saw something in me before I fully saw it in myself — sponsored me into engineering. Not mentored. Sponsored. He put his name next to mine and opened a door I couldn't have opened alone.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 32px 0", fontStyle: "italic" }}>
            That's the difference between someone who gives you advice and someone who changes your trajectory. I've never forgotten it.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, color: COLORS.teal, margin: "40px 0 16px 0", fontWeight: 600 }}>
            What I Built Over 31 Years
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 16px 0" }}>
            I spent 31 years at Ford Motor Company. I came up through the trades, moved into engineering, and worked my way through gear engineering, tooling and gauging, and multiple management roles. I retired as the Prototype Operations Manager for Powertrain — responsible for transmission, engine, axle, and additive manufacturing.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 32px 0" }}>
            After Ford, I served as the Global Director of Prototype Operations at American Axle and Manufacturing. Between those two roles, I spent over three decades inside complex manufacturing organizations, learning how they really work — not the org chart version, but the human version.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, color: COLORS.teal, margin: "40px 0 16px 0", fontWeight: 600 }}>
            The Eight Years in Between
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 16px 0" }}>
            After leaving automotive, I founded and ran an organization that served the automotive industry for eight years. I built programs, ran cohorts, designed curriculum, and worked with senior leaders on culture, leadership, and organizational performance.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 32px 0" }}>
            That experience gave me something I didn't expect: a deep understanding of how organizations adopt new ways of working and, more importantly, why they resist.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, color: COLORS.teal, margin: "40px 0 16px 0", fontWeight: 600 }}>
            The Shift to AI
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 16px 0" }}>
            In April 2025, I enrolled in an AI boot camp. I completed the full program. Then I went through it again. I joined a weekly mastermind where I continue to learn new skills every single week. And I started building.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 16px 0" }}>
            I have now logged thousands of hours of hands-on AI work. Not watching tutorials. Building. Custom GPTs, Copilot agents, prompt architectures, workflows, learning libraries, onboarding systems, matching tools, and full applications.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.charcoal, lineHeight: 1.8, margin: "0 0 32px 0" }}>
            I'm not a technologist. I have no technical background. I'm turning 60 this year. And that's exactly why I'm the right person to teach this. If I can build this level of capability through discipline and structured learning, so can you.
          </p>

          <div
            style={{
              background: COLORS.navy,
              padding: "40px 36px",
              margin: "48px 0",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 20,
                color: COLORS.white,
                lineHeight: 1.6,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              "I have never felt more organized, more confident, or more capable in my work than I do right now. That's not a sales pitch. That's my actual experience."
            </p>
          </div>

          <GoldDivider />
          <button
  onClick={() =>
    window.open(
      "https://calendly.com/cadia-cheryl/15min?month=2026-02",
      "_blank"
    )
  }
>
  Book a Conversation
</button>
        </div>
      </section>
    </div>
  );
}

// ============ WORK WITH ME PAGE ============
function WorkWithMePage() {
  const tiers = [
    {
      name: "Learning Labs",
      price: "Free",
      format: "60 minutes, weekly, virtual",
      summary: "Work on a real challenge and leave with something you can use the same day.",
      details: [
        "16 topics spanning career development, operations, leadership, finance, communications, and more",
        "Platform-agnostic: works in ChatGPT, Copilot, Claude, Gemini",
        "Every session includes a hands-on prompt or tool you take with you",
        "Tuesdays at 12:00 PM ET",
      ],
      who: "Open to anyone doing knowledge work who wants to build AI skills",
      cta: "See the Schedule",
    },
    {
      name: "One-on-One AI Advisory",
      price: "$5,000 – $7,500",
      format: "4 sessions over 8 weeks, virtual",
      summary: "We work on your actual projects, build prompts and workflows tailored to your role, and develop capability you keep.",
      details: [
        "60-minute sessions, every other week",
        "Built around your real challenges, not hypothetical exercises",
        "You walk away with prompts, workflows, and systems designed for your specific work",
        "Platform-agnostic across all major AI tools",
      ],
      who: "Directors, managers, individual contributors, business owners, and professionals in career transition",
      cta: "Book a Conversation",
    },
    {
      name: "Your Edge — Executive Sprint",
      price: "$12,500",
      format: "4 sessions over 8 weeks, virtual",
      summary: "A strategic thinking partner for senior leaders who carry challenges they can't hand off to anyone else.",
      details: [
        "Focused on clarity, leverage, and practical application",
        "We build AI-supported systems for your highest-stakes work",
        "Discretion is how I work, not a policy",
        "Option to continue on a lighter advisory basis after the sprint",
      ],
      who: "Senior leaders and executives with full calendars, high-stakes decisions, and limited patience for fluff",
      cta: "Book a Conversation",
    },
    {
      name: "Team AI Accelerator",
      price: "$25,000 – $50,000",
      format: "6–8 weeks embedded with your team",
      summary: "Your team learns to build AI-powered tools for their own work — and leaves owning everything they create.",
      details: [
        "Weekly sessions with the full team on their real challenges",
        "Build prompts, workflows, and a custom AI assistant tailored to the team's function",
        "Complete playbook documenting everything the team built",
        "Designed for sustainable capability, not dependency",
      ],
      who: "Functional leaders who want their team equipped across Operations, HR, Sales, Engineering, Communications, Finance, and more",
      cta: "Book a Conversation",
    },
  ];

  return (
    <div>
      <section style={{ padding: "80px 64px", background: COLORS.warmWhite }}>
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <SectionLabel text="Work With Me" />
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 36,
              color: COLORS.navy,
              margin: "0 0 16px 0",
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            Four ways in. One goal.
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: COLORS.charcoal,
              lineHeight: 1.7,
              margin: "0 0 56px 0",
              maxWidth: 560,
            }}
          >
            Everything I build with clients is designed to transfer. The goal is never dependency. It's capability that stays with you.
          </p>

          {tiers.map((tier, i) => (
            <div
              key={i}
              style={{
                background: COLORS.white,
                border: `1px solid ${COLORS.lightGray}`,
                padding: "40px 40px 36px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 24,
                    color: COLORS.navy,
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  {tier.name}
                </h3>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: tier.price === "Free" ? COLORS.teal : COLORS.navy,
                  }}
                >
                  {tier.price}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: COLORS.mediumGray,
                  marginBottom: 16,
                  letterSpacing: "0.02em",
                }}
              >
                {tier.format}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: COLORS.charcoal,
                  lineHeight: 1.7,
                  margin: "0 0 20px 0",
                }}
              >
                {tier.summary}
              </p>
              <div style={{ marginBottom: 20 }}>
                {tier.details.map((d, j) => (
                  <div
                    key={j}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: COLORS.charcoal,
                      lineHeight: 1.7,
                      paddingLeft: 16,
                      position: "relative",
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: COLORS.teal,
                        fontWeight: 700,
                      }}
                    >
                      ·
                    </span>
                    {d}
                  </div>
                ))}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: COLORS.mediumGray,
                  fontStyle: "italic",
                  marginBottom: 20,
                }}
              >
                For: {tier.who}
              </div>
              <button
                onClick={tier.cta === "Book a Conversation" ? () =>
                  window.open(
                    "https://calendly.com/cadia-cheryl/15min?month=2026-02",
                    "_blank"
                  )
                : undefined}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: COLORS.teal,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  letterSpacing: "0.02em",
                  borderBottom: `1px solid ${COLORS.teal}`,
                }}
              >
                {tier.cta} →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============ LEARNING LABS PAGE ============
function LearningLabsPage() {
  const categories = [
    { name: "Career Development", topics: ["Find Your Sponsor (Not Just a Mentor)"] },
    { name: "Business Acumen", topics: ["Finance for Leaders: Read the Numbers, Make the Case"] },
    { name: "Operations Excellence", topics: ["Problem-Solving Under Pressure", "SOPs and Training Materials in Half the Time", "Reaching the Floor: Communication That Works Without Email"] },
    { name: "Leadership Development", topics: ["Effective Delegation: To People and to AI", "Change Management: Get Your Team to Adopt New Tools", "Self-Care as a Leadership Strategy"] },
    { name: "AI Fluency", topics: ["AI Behind the Scenes: What Smart Leaders Are Doing Differently"] },
    { name: "Sales Performance", topics: ["Handle Any Sales Objection with Confidence"] },
    { name: "More Topics", topics: ["ERG Leadership, Career Pathing, Project Management, Engineering Communication, Procurement, Internal Communications"] },
  ];

  return (
    <div>
      <section style={{ padding: "80px 64px", background: COLORS.warmWhite }}>
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <SectionLabel text="Learning Labs" />
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 36,
              color: COLORS.navy,
              margin: "0 0 16px 0",
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            No one gets left behind in the age of AI.
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: COLORS.charcoal,
              lineHeight: 1.7,
              margin: "0 0 12px 0",
            }}
          >
            Free, 60-minute sessions. Every Tuesday at 12:00 PM ET. Virtual. You work on a real challenge and leave with something you can use the same day.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: COLORS.mediumGray,
              lineHeight: 1.7,
              margin: "0 0 48px 0",
            }}
          >
            Platform-agnostic: everything works in ChatGPT, Copilot, Claude, Gemini — whatever you have access to.
          </p>

          <div
            style={{
              background: COLORS.navy,
              padding: "32px 36px",
              marginBottom: 48,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 20,
                  color: COLORS.white,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                Next Lab: February 24, 2026
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 18,
                  color: COLORS.lightGray,
                }}
              >
                Effective Delegation: To People and to AI
              </div>
            </div>
            <CTAButton text="Register" />
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 24,
              color: COLORS.navy,
              margin: "0 0 32px 0",
              fontWeight: 600,
            }}
          >
            16 Topics Across Every Function
          </h2>

          {categories.map((cat, i) => (
            <div key={i} style={{ marginBottom: 28 }}>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: COLORS.teal,
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {cat.name}
              </div>
              {cat.topics.map((t, j) => (
                <div
                  key={j}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    color: COLORS.charcoal,
                    lineHeight: 1.7,
                    paddingLeft: 16,
                    position: "relative",
                    marginBottom: 4,
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: COLORS.gold }}>·</span>
                  {t}
                </div>
              ))}
            </div>
          ))}

          <div
            style={{
              background: COLORS.cream,
              padding: "32px 36px",
              marginTop: 40,
              border: `1px solid ${COLORS.lightGray}`,
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                color: COLORS.charcoal,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong>When someone attends a Lab and thinks, "My whole team needs this"</strong> — that's when the Team AI Accelerator makes sense. Learning Labs are the taste. The Accelerator is the transformation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============ CONTACT PAGE ============
function ContactPage() {
  return (
    <div>
      <section
        style={{
          padding: "100px 64px",
          background: COLORS.warmWhite,
          minHeight: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
       <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <SectionLabel text="Let's Talk" />
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 38,
              color: COLORS.navy,
              margin: "0 0 24px 0",
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            Book a conversation.
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: COLORS.charcoal,
              lineHeight: 1.8,
              margin: "0 0 16px 0",
            }}
          >
            A 15-minute conversation to explore what you're working on, where AI could help, and whether working together makes sense. No pressure, no pitch — just an honest conversation about what's possible.
          </p>
          <GoldDivider />
          <div
            style={{
              background: COLORS.white,
              border: `1px solid ${COLORS.lightGray}`,
              padding: "48px 40px",
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 18,
                color: COLORS.mediumGray,
                marginBottom: 24,
              }}
            >
                       </div>
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/cadia-cheryl/15min?month=2026-02",
                  "_blank"
                )
              }
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "16px 40px",
                border: "none",
                background: COLORS.gold,
                color: COLORS.navy,
                cursor: "pointer",
                transition: "all 0.25s ease",
                borderRadius: 4,
              }}
            >
              Book a Conversation
            </button>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: COLORS.tealLight,
              lineHeight: 1.7,
            }}
          >
            Prefer email? Reach me at cheryl@cherylthompson.net
          </p>
        </div>
      </section>
    </div>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer
      style={{
        background: COLORS.navy,
        padding: "40px 64px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div>
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 18,
            fontWeight: 600,
            color: COLORS.white,
          }}
        >
          Cheryl Thompson
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: COLORS.mediumGray,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginLeft: 8,
          }}
        >
          Advisory
        </span>
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16,
          color: COLORS.mediumGray,
        }}
      >
        © 2026 Cheryl Thompson Advisory
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home": return <HomePage setCurrentPage={setCurrentPage} />;
      case "My Story": return <MyStoryPage />;
      case "Work With Me": return <WorkWithMePage />;
      case "Learning Labs": return <LearningLabsPage />;
      case "Contact": return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Nav current={currentPage} setCurrent={setCurrentPage} />
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer />
    </div>
  );
}
