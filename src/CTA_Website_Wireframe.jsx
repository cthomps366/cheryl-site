import { useState, useEffect } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrent(page);
    setIsMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: COLORS.white,
        borderBottom: `1px solid ${COLORS.lightGray}`,
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        width: "100%",
        boxSizing: "border-box",
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
      
      {/* Desktop Navigation */}
      <div className="nav-links-desktop" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "flex-end" }}>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => handleNavClick(p)}
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

      {/* Hamburger Button */}
      <button
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          flexDirection: "column",
          gap: 4,
        }}
        aria-label="Toggle menu"
      >
        <span
          style={{
            width: 24,
            height: 2,
            background: COLORS.charcoal,
            transition: "all 0.3s ease",
            transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}
        />
        <span
          style={{
            width: 24,
            height: 2,
            background: COLORS.charcoal,
            transition: "all 0.3s ease",
            opacity: isMenuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: 24,
            height: 2,
            background: COLORS.charcoal,
            transition: "all 0.3s ease",
            transform: isMenuOpen ? "rotate(-45deg) translate(7px, -6px)" : "none",
          }}
        />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {pages.map((p) => (
            <button
              key={p}
              className={`mobile-menu-item ${current === p ? "active" : ""}`}
              onClick={() => handleNavClick(p)}
            >
              {p}
            </button>
          ))}
        </div>
      )}
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
          padding: "clamp(60px, 8vw, 100px) clamp(16px, 4vw, 64px) clamp(40px, 6vw, 80px)",
          minHeight: 480,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          boxSizing: "border-box",
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
              fontSize: "clamp(32px, 8vw, 64px)",
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
          <div className="hero-cta-container" style={{ display: "flex", gap: 16, flexWrap: "wrap", width: "100%", maxWidth: "100%" }}>
            <button
              className="hero-cta-button"
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
                background: COLORS.teal,
                color: COLORS.white,
                cursor: "pointer",
                transition: "all 0.25s ease",
                borderRadius: 4,
              }}
            >
              Book a Conversation
            </button>
            <button
              className="hero-cta-button"
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
                borderRadius: 4,
              }}
            >
              Explore Learning Labs
            </button>
          </div>
        </div>
      </section>

      {/* WHAT I DO - 5 TIERS */}
      <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 64px)", background: COLORS.warmWhite, width: "100%", boxSizing: "border-box" }}>
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
          Five ways in. One goal: capability that stays.
        </h2>
        <div
          className="four-tiers-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            width: "100%",
            maxWidth: "100%",
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
            {
              title: "Leadership Advisory & Workshops",
              tag: "Custom",
              desc: "Over 40 years leading inside complex organizations. Available for leadership development, executive coaching, team workshops, and keynote speaking.",
              audience: "Organizations and leaders seeking experienced, grounded leadership support",
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
                width: "100%",
                maxWidth: "100%",
                boxSizing: "border-box",
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
          padding: "clamp(30px, 4vw, 60px) clamp(16px, 4vw, 64px)",
          background: COLORS.cream,
          borderTop: `1px solid ${COLORS.lightGray}`,
          borderBottom: `1px solid ${COLORS.lightGray}`,
          width: "100%",
          boxSizing: "border-box",
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

      {/* FEATURED INTERVIEW SECTION */}
      <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 64px)", background: COLORS.white, width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <SectionLabel text="Featured" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 24,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 720,
                paddingBottom: "56.25%", // 16:9 aspect ratio
                height: 0,
                overflow: "hidden",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/RG4kf5ZcK1U"
                title="Featured Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: COLORS.mediumGray,
              textAlign: "center",
              margin: 0,
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A conversation with John McElroy on AI, how leaders are using it, and why it matters now.
          </p>
        </div>
      </section>

      {/* BELIEF SECTION */}
      <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 64px)", background: COLORS.white, width: "100%", boxSizing: "border-box" }}>
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
    <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 3vw, 40px)", background: COLORS.warmWhite, width: "100%", boxSizing: "border-box" }}>
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
            I didn't take the traditional path into engineering. I started waitressing as a teenager, landed a tool and die apprenticeship, and built a 33-year career at Ford and Dauch from there.
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

          {/* Featured Interview Video */}
          <div style={{ margin: "48px 0" }}>
            <SectionLabel text="Featured" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 24,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 720,
                  paddingBottom: "56.25%", // 16:9 aspect ratio
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  src="https://www.youtube.com/embed/RG4kf5ZcK1U"
                  title="Featured Interview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: COLORS.mediumGray,
                textAlign: "center",
                margin: 0,
                maxWidth: 720,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              A conversation with John McElroy on AI, how leaders are using it, and why it matters now.
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
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.04em",
              padding: "16px 40px",
              border: "none",
              background: COLORS.teal,
              color: COLORS.white,
              cursor: "pointer",
              transition: "all 0.25s ease",
              borderRadius: 4,
            }}
          >
            Book a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}

// ============ WORK WITH ME PAGE ============
function WorkWithMePage({ setCurrentPage }) {
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
    {
      name: "Leadership Advisory & Workshops",
      price: "Custom",
      format: "Keynotes, workshops, coaching, and advisory engagements",
      summary: "Over 40 years of experience leading inside complex organizations — available for leadership development, executive coaching, team workshops, and keynote speaking that isn't AI-specific.",
      details: [
        "Leadership development workshops tailored to your organization's challenges",
        "Executive coaching grounded in real operational experience, not theory",
        "Keynote speaking on leadership, navigating complexity, and building resilient teams",
        "Available as standalone engagements or combined with AI advisory work",
      ],
      who: "Organizations and leaders who need experienced, grounded leadership support",
      cta: "Book a Conversation",
    },
  ];

  return (
    <div>
      <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 64px)", background: COLORS.warmWhite, width: "100%", boxSizing: "border-box" }}>
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
            Five ways in. One goal.
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
                onClick={
                  tier.cta === "Book a Conversation"
                    ? () =>
                        window.open(
                          "https://calendly.com/cadia-cheryl/15min?month=2026-02",
                          "_blank"
                        )
                    : tier.cta === "See the Schedule"
                    ? () => setCurrentPage("Learning Labs")
                    : undefined
                }
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
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to parse date string and convert to Date object
  const parseDate = (dateString) => {
    // Format: "Tuesday, Jan 27, 2026" or "Tuesday, Feb 3, 2026"
    const months = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    const parts = dateString.split(', ');
    if (parts.length >= 3) {
      const monthDay = parts[1].split(' ');
      const month = months[monthDay[0]];
      const day = parseInt(monthDay[1]);
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    }
    return null;
  };

  // Function to get category for a lab based on title
  const getLabCategory = (title) => {
    // Leadership & Career
    if (title.includes("Find Your Sponsor") || title.includes("Sponsor")) return "Leadership & Career";
    if (title.includes("Effective Delegation")) return "Leadership & Career";
    if (title.includes("Self-Care")) return "Leadership & Career";
    if (title.includes("Career Pathing")) return "Leadership & Career";
    if (title.includes("Change Management")) return "Leadership & Career";
    
    // Operations & Quality
    if (title.includes("Problem-Solving")) return "Operations & Quality";
    if (title.includes("SOPs")) return "Operations & Quality";
    if (title.includes("Reaching the Floor")) return "Operations & Quality";
    
    // Business & Finance
    if (title.includes("Finance for Leaders")) return "Business & Finance";
    
    // AI Fluency
    if (title.includes("AI Behind the Scenes")) return "AI Fluency";
    
    // Communications
    if (title.includes("Engineering Communication")) return "Communications";
    if (title.includes("Internal Communications")) return "Communications";
    
    // Sales & Procurement
    if (title.includes("Sales Objection")) return "Sales & Procurement";
    if (title.includes("Procurement")) return "Sales & Procurement";
    
    // ERG & Project Leadership
    if (title.includes("ERG Leaders") || title.includes("ERG")) return "ERG & Project Leadership";
    if (title.includes("Project Management")) return "ERG & Project Leadership";
    
    return null;
  };

  const filterCategories = [
    "All",
    "Leadership & Career",
    "Operations & Quality",
    "Business & Finance",
    "AI Fluency",
    "Communications",
    "Sales & Procurement",
    "ERG & Project Leadership",
  ];

  return (
    <div>
      <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 64px)", background: COLORS.warmWhite, width: "100%", boxSizing: "border-box" }}>
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

          <div style={{ marginBottom: 32 }}>
            <a
              href="https://flowery-jobaria-ab2.notion.site/CADIA-AI-Learning-Lab-Library-23b39d22ba994fdb8172bf7bd08e0100?pvs=74"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                color: COLORS.teal,
                textDecoration: "none",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Looking for past sessions? Browse the full Learning Lab library →
            </a>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 24,
              color: COLORS.navy,
              margin: "0 0 24px 0",
              fontWeight: 600,
            }}
          >
            Upcoming Labs & Registration
          </h2>

          {/* Category Filter Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 32,
            }}
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: selectedCategory === cat ? 600 : 400,
                  padding: "8px 16px",
                  border: `1.5px solid ${selectedCategory === cat ? COLORS.teal : COLORS.lightGray}`,
                  background: selectedCategory === cat ? COLORS.teal : COLORS.white,
                  color: selectedCategory === cat ? COLORS.white : COLORS.charcoal,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderRadius: 4,
                  letterSpacing: "0.02em",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ marginBottom: 48 }}>
            {[
              {
                title: "Find Your Sponsor (Not Just a Mentor)",
                date: "Tuesday, Jan 27, 2026",
                time: "12:00–1:00 PM ET",
                recordingLink: "https://flowery-jobaria-ab2.notion.site/CADIA-AI-Learning-Lab-Library-23b39d22ba994fdb8172bf7bd08e0100?pvs=74",
              },
              {
                title: "Problem-Solving Under Pressure: Root Cause Without the Paperwork",
                date: "Tuesday, Feb 3, 2026",
                time: "12:00–1:00 PM ET",
                recordingLink: "https://flowery-jobaria-ab2.notion.site/CADIA-AI-Learning-Lab-Library-23b39d22ba994fdb8172bf7bd08e0100?pvs=74",
              },
              {
                title: "Finance for Leaders: Read the Numbers, Make the Case",
                date: "Tuesday, Feb 17, 2026",
                time: "12:00–1:00 PM ET",
                recordingLink: "https://flowery-jobaria-ab2.notion.site/CADIA-AI-Learning-Lab-Library-23b39d22ba994fdb8172bf7bd08e0100?pvs=74",
              },
              {
                title: "Effective Delegation: To People and to AI",
                date: "Tuesday, Feb 24, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/90RfRUQJSwqyztZ2Ee52mA",
              },
              {
                title: "Handle Any Sales Objection with Confidence",
                date: "Tuesday, Mar 3, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/0lV_zSwDRTuixb4oF3vNow",
              },
              {
                title: "SOPs and Training Materials in Half the Time",
                date: "Tuesday, Mar 10, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/UVFRmOOoS6CAkogQjUPGLg",
              },
              {
                title: "Self-Care as a Leadership Strategy",
                date: "Tuesday, Mar 17, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/wjEf-QGuQ5-8OwcDuzzuVg",
              },
              {
                title: "Reaching the Floor: Communication That Works Without Email",
                date: "Tuesday, Mar 24, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/zB56J9U8QyWtkpihy7sFRA",
              },
              {
                title: "Career Pathing for Leaders: Develop Your People Without Losing Them",
                date: "Tuesday, Mar 31, 2026",
                time: "1:00–3:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/0V8Rd9N4TKmt1eS7OO3Rcw",
                category: "Talent Retention — Focuses on practical, leader-driven career pathing that increases visibility into growth opportunities and strengthens retention without adding administrative burden.",
              },
              {
                title: "AI Behind the Scenes: What Smart Leaders Are Doing Differently",
                date: "Tuesday, Apr 7, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/ttyTqX8WSHit_XYs5FEh-w",
              },
              {
                title: "Project Management: Keep Projects Moving Without Chasing People",
                date: "Tuesday, Apr 14, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/wgra9YJRTiywdNO-jLOxUA",
              },
              {
                title: "Change Management: Get Your Team to Adopt New Tools",
                date: "Tuesday, Apr 21, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/2AUf6rhzQpSbrfw8bPKZ2w",
              },
              {
                title: "Engineering Communication: Translate Technical Work for Non-Technical Audiences",
                date: "Tuesday, Apr 28, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/jtAVkHGjSzSVHHMi82e59g",
                category: "Technical Communication — Helps technical professionals translate complex work into clear, decision-ready messages for non-technical stakeholders.",
              },
              {
                title: "Procurement: Faster Supplier Communication and Documentation",
                date: "Tuesday, May 5, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/5VKWI2eQSEiaNpAaPaRm5g",
              },
              {
                title: "Internal Communications: Messages That Actually Get Read",
                date: "Tuesday, May 12, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/qEUblU1eT3eVGG0tTNgDcQ",
              },
              {
                title: "ERG Leaders: From Overworked to Strategic",
                date: "Tuesday, May 19, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/L_9q7AF8R_mk6jx4j6lSkQ",
              },
              {
                title: "AI Learning Lab (Best Of / TBD)",
                date: "Tuesday, Aug 4, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/aBVOjUWYSamYOvGFHSwaVA",
              },
              {
                title: "AI Learning Lab (Best Of / TBD)",
                date: "Tuesday, Aug 11, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/KX1WZ1X0TYCMll_L3OOApA",
              },
              {
                title: "AI Learning Lab (Best Of / TBD)",
                date: "Tuesday, Aug 18, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/8pHkiRAfTh6gbiRB2dmcuA",
              },
              {
                title: "AI Learning Lab (Best Of / TBD)",
                date: "Tuesday, Aug 25, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/f0uc8kb_T56O1Lur0O9Img",
              },
              {
                title: "AI Behind the Scenes: What Smart Leaders Are Doing Differently",
                date: "Tuesday, Sep 8, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/gQVkVxG1Q4-4AUxifpNSBA",
              },
              {
                title: "Effective Delegation: To People and to AI",
                date: "Tuesday, Sep 22, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/iI9dlioUQMOrJCA4iqVgbg",
              },
              {
                title: "Change Management: Get Your Team to Adopt New Tools",
                date: "Tuesday, Oct 6, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/hiQDFbizTV29CKw6BG93xA",
              },
              {
                title: "SOPs and Training Materials in Half the Time",
                date: "Tuesday, Oct 20, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/DHhcbVX3Q9efjtVoyM1hig",
              },
              {
                title: "Project Management: Keep Projects Moving Without Chasing People",
                date: "Tuesday, Nov 3, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/q0r1CYE3Q2yDRiHCpTnQZQ",
              },
              {
                title: "Internal Communications: Messages That Actually Get Read",
                date: "Tuesday, Nov 17, 2026",
                time: "12:00–1:00 PM ET",
                link: "https://us06web.zoom.us/meeting/register/UT_M5gz2TbOGFwnLCk7Xag",
              },
            ]
              .map((lab) => {
                const labDate = parseDate(lab.date);
                const today = new Date();
                today.setHours(0, 0, 0, 0); // Reset time to compare dates only
                const isPast = labDate && labDate < today;
                
                return {
                  ...lab,
                  labCategory: getLabCategory(lab.title),
                  parsedDate: labDate,
                  isPast: isPast,
                  recordingLink: lab.recordingLink || (isPast ? "https://flowery-jobaria-ab2.notion.site/CADIA-AI-Learning-Lab-Library-23b39d22ba994fdb8172bf7bd08e0100?pvs=74" : undefined),
                };
              })
              .filter((lab) => selectedCategory === "All" || lab.labCategory === selectedCategory)
              .sort((a, b) => {
                if (!a.parsedDate || !b.parsedDate) return 0;
                const aIsPast = a.isPast;
                const bIsPast = b.isPast;
                
                // Upcoming sessions first (ascending)
                if (!aIsPast && !bIsPast) {
                  return a.parsedDate - b.parsedDate;
                }
                // Past sessions after (descending)
                if (aIsPast && bIsPast) {
                  return b.parsedDate - a.parsedDate;
                }
                // Upcoming before past
                return aIsPast ? 1 : -1;
              })
              .map((lab, i, arr) => {
                // Find the first upcoming session to mark as "Next"
                const firstUpcoming = arr.find(l => !l.isPast);
                const isNext = !lab.isPast && lab.parsedDate && firstUpcoming && lab.parsedDate.getTime() === firstUpcoming.parsedDate.getTime();
                return { ...lab, isNext };
              })
              .reduce((acc, lab, i, arr) => {
                // Add separator before first past session
                if (i > 0 && !arr[i - 1].isPast && lab.isPast) {
                  acc.push({ isSeparator: true });
                }
                acc.push(lab);
                return acc;
              }, [])
              .map((lab, i) => {
                if (lab.isSeparator) {
                  return (
                    <div key={`separator-${i}`} style={{ marginTop: 48, marginBottom: 24 }}>
                      <div
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: COLORS.mediumGray,
                          fontWeight: 600,
                        }}
                      >
                        Past Sessions
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    style={{
                      background: lab.isNext ? COLORS.cream : lab.isPast ? COLORS.warmWhite : COLORS.white,
                      border: `1px solid ${lab.isNext ? COLORS.gold : lab.isPast ? COLORS.lightGray : COLORS.lightGray}`,
                      padding: "24px",
                      marginBottom: 16,
                      borderRadius: 4,
                      position: "relative",
                      opacity: lab.isPast ? 0.95 : 1,
                    }}
                  >
                {lab.isNext && (
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: COLORS.navy,
                      background: COLORS.gold,
                      padding: "4px 12px",
                      borderRadius: 4,
                    }}
                  >
                    Next Session
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ flex: 1, minWidth: "250px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: 18,
                          color: COLORS.navy,
                          margin: 0,
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        {lab.title}
                      </h3>
                      {lab.labCategory && (
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 11,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: COLORS.teal,
                            background: "#E6F7F7",
                            padding: "4px 10px",
                            borderRadius: 4,
                          }}
                        >
                          {lab.labCategory}
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: COLORS.mediumGray,
                        marginBottom: lab.category ? 8 : 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <span>{lab.date} | {lab.time}</span>
                      {lab.isPast && (
                        <span
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 11,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: COLORS.mediumGray,
                            background: COLORS.lightGray,
                            padding: "2px 8px",
                            borderRadius: 4,
                          }}
                        >
                          Past Session
                        </span>
                      )}
                    </div>
                    {lab.category && (
                      <div
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13,
                          color: COLORS.charcoal,
                          fontStyle: "italic",
                          marginTop: 8,
                          lineHeight: 1.5,
                        }}
                      >
                        {lab.category}
                      </div>
                    )}
                  </div>
                  {lab.isPast ? (
                    <a
                      href={lab.recordingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: COLORS.teal,
                        textDecoration: "none",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        whiteSpace: "nowrap",
                      }}
                    >
                      View the recording and playbook →
                    </a>
                  ) : (
                    <button
                      onClick={() => window.open(lab.link, "_blank")}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        padding: "12px 24px",
                        border: "none",
                        background: COLORS.teal,
                        color: COLORS.white,
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        borderRadius: 4,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Register →
                    </button>
                  )}
                </div>
                  </div>
                );
              })}
          </div>

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
          padding: "clamp(60px, 8vw, 100px) clamp(16px, 4vw, 64px)",
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
          <div style={{ marginTop: 32, marginBottom: 40, textAlign: "center" }}>
            <button
              className="contact-cta-button"
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
                background: COLORS.teal,
                color: COLORS.white,
                cursor: "pointer",
                transition: "all 0.25s ease",
                borderRadius: 4,
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
            >
              Book a Conversation
            </button>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: "#2C5282",
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            Prefer email? Reach me at{" "}
            <a
              href="mailto:cheryl@cherylthompson.net"
              className="contact-email-link"
              style={{
                color: "#2C5282",
                textDecoration: "none",
              }}
            >
              cheryl@cherylthompson.net
            </a>
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
        padding: "clamp(24px, 3vw, 40px) clamp(16px, 4vw, 64px)",
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

// ============ SCROLL TO TOP ============
function ScrollToTop({ currentPage }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  return null;
}

// ============ MAIN APP ============
export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home": return <HomePage setCurrentPage={setCurrentPage} />;
      case "My Story": return <MyStoryPage />;
      case "Work With Me": return <WorkWithMePage setCurrentPage={setCurrentPage} />;
      case "Learning Labs": return <LearningLabsPage />;
      case "Contact": return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <ScrollToTop currentPage={currentPage} />
      <Nav current={currentPage} setCurrent={setCurrentPage} />
      <main style={{ flex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden", paddingTop: "70px" }}>{renderPage()}</main>
      <Footer />
    </div>
  );
}
