import React from "react";
import { Leaf, HeartPulse, Award } from "lucide-react";
import doctorPortrait from "../assets/prajakta_garud.png";

const About = () => (
  <section id="about" style={{ backgroundColor: "#FAF6F0", padding: "6rem 0" }}>
    <div
      className="resp-px resp-grid resp-gap"
      style={{
        maxWidth: "82rem",
        margin: "0 auto",
        padding: "0 2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1.15fr",
        gap: "3rem",
        alignItems: "center",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            borderRadius: "2rem",
            overflow: "hidden",
            aspectRatio: "3/4",
            maxWidth: "400px",
            margin: "0 auto",
            boxShadow: "0 20px 60px rgba(44,53,49,0.12)",
          }}
        >
          <img
            src={doctorPortrait}
            alt="Vd. Prajakta Garud"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "1.5rem",
            backgroundColor: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(10px)",
            borderRadius: "0.875rem",
            padding: "0.85rem 1.2rem",
            boxShadow: "0 8px 30px rgba(44,53,49,0.12)",
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
          }}
        >
          <Award size={20} color="rgb(47, 111, 94)" strokeWidth={1.5} />
          <div>
            <div
              style={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "rgb(47, 111, 94)",
              }}
            >
              MD Panchakarma
            </div>
            <div
              style={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgb(74, 107, 96)",
                marginTop: "0.1rem",
              }}
            >
              CERTIFIED PRACTITIONER
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div>
        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.4rem",
          }}
        >
          <span
            style={{
              width: "2rem",
              height: "1px",
              backgroundColor: "rgb(47, 111, 94)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "Outfit, system-ui, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              color: "rgb(47, 111, 94)",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            ABOUT THE DOCTOR
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(2.25rem, 3vw, 3rem)",
            color: "rgb(30, 63, 51)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: "1.8rem",
          }}
        >
          A practice where ancient{" "}
          <em style={{ color: "rgb(47, 111, 94)", fontStyle: "italic" }}>
            wisdom
          </em>{" "}
          meets present-day living.
        </h2>

        {/* Body paragraphs */}
        <p
          style={{
            fontFamily: "Outfit, system-ui, sans-serif",
            fontSize: "1.02rem",
            color: "rgb(74, 107, 96)",
            lineHeight: 1.625,
            marginBottom: "1.2rem",
          }}
        >
          I'm{" "}
          <strong style={{ color: "#000", fontWeight: 700 }}>
            Vd. Prajakta Garud
          </strong>
          , an Ayurvedic physician with a postgraduate specialisation in
          Panchakarma. Over the last 7+ years I've walked alongside hundreds of
          patients — through stubborn skin concerns, hormonal imbalances,
          chronic pain, gut trouble, and the quiet exhaustion that modern living
          quietly accumulates.
        </p>
        <p
          style={{
            fontFamily: "Outfit, system-ui, sans-serif",
            fontSize: "1.02rem",
            color: "rgb(74, 107, 96)",
            lineHeight: 1.625,
            marginBottom: "2.5rem",
          }}
        >
          My approach is unhurried. I listen first. Then we work, together,
          through diet, daily rhythm (<em>dinacharya</em>), classical therapies,
          and herbal protocols that fit the life you actually live.
        </p>

        {/* Cards */}
        <div
          className="resp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {[
            {
              Icon: Leaf,
              title: "Panchakarma",
              desc: "Classical detox & rejuvenation",
            },
            {
              Icon: HeartPulse,
              title: "Personalised",
              desc: "Prakriti-based treatment plans",
              highlight: true,
            },
            { Icon: Award, title: "Trusted", desc: "7+ years of practice" },
          ].map(({ Icon, title, desc, highlight }) => (
            <div
              key={title}
              style={{
                backgroundColor: "#fff",
                borderRadius: "1rem",
                padding: "1.2rem 1.1rem",
                boxShadow: "0 4px 16px rgba(44,53,49,0.06)",
              }}
            >
              <div style={{ marginBottom: "0.6rem" }}>
                <Icon
                  size={20}
                  color={highlight ? "rgb(220, 60, 60)" : "rgb(47, 111, 94)"}
                  strokeWidth={1.5}
                />
              </div>
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 500,
                  fontSize: "1.25rem",
                  lineHeight: "1.75rem",
                  color: "rgb(47, 111, 94)",
                  marginBottom: "0.3rem",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontFamily: "Outfit, system-ui, sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  color: "rgb(74, 107, 96)",
                  marginTop: "0.25rem",
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
