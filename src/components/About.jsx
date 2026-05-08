import React from "react";
import { Leaf, HeartPulse, Shield } from "lucide-react";
import doctorPortrait from "../assets/prajakta_garud.png";
import { useI18n } from "../i18n";

const About = () => {
  const { t } = useI18n();
  const journey = t.about.steps.map((step, index) => ({
    ...step,
    Icon: [Leaf, HeartPulse, Shield][index],
    theme: [
      { bg: "#E8F3F0", icon: "#2F6F5E" },
      { bg: "#FDECEA", icon: "#C94C3D" },
      { bg: "#FDF3E7", icon: "#D68A3A" },
    ][index],
  }));

  return (
  <section id="about" style={{ 
    background: "linear-gradient(180deg, #FDFBF7 0%, #F5EBDD 100%)", 
    padding: "7rem 0",
    position: "relative",
    overflow: "hidden"
  }}>
    {/* Subtle Background Decoration */}
    <div style={{
      position: "absolute",
      top: "-10%",
      right: "-5%",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(47, 111, 94, 0.04) 0%, transparent 70%)",
      zIndex: 0,
      pointerEvents: "none"
    }} />

    <div
      className="resp-px resp-grid resp-gap"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "82rem",
        margin: "0 auto",
        padding: "0 2.5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1.15fr",
        gap: "4rem",
        alignItems: "center",
      }}
    >
      {/* Image Side */}
      <div style={{ position: "relative", padding: "2rem 0" }}>
        {/* Decorative Arch Outline behind image */}
        <div
          className="mobile-hidden"
          style={{
            position: "absolute",
            top: "0.5rem",
            bottom: "3.5rem",
            left: "10%",
            right: "5%",
            border: "1.5px solid rgba(47, 111, 94, 0.25)",
            borderRadius: "15rem 15rem 2rem 2rem",
            zIndex: 0,
            transform: "translate(-1.5rem, -1.5rem)",
          }}
        />

        {/* Main Image Container */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            borderRadius: "15rem 15rem 2rem 2rem", // Traditional Arch
            overflow: "hidden",
            aspectRatio: "3/4",
            maxWidth: "380px",
            margin: "0 auto",
            boxShadow: "0 25px 50px rgba(47, 111, 94, 0.15)",
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
          {/* Inner Gradient Overlay for depth */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(30, 63, 51, 0.5) 0%, transparent 35%)",
            pointerEvents: "none"
          }} />
        </div>

        {/* Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "5%",
            backgroundColor: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(12px)",
            borderRadius: "1.2rem",
            padding: "1rem 1.5rem",
            boxShadow: "0 15px 35px rgba(30, 63, 51, 0.12)",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            zIndex: 2,
            border: "1px solid rgba(47, 111, 94, 0.08)",
          }}
        >
          <div style={{
            backgroundColor: "#E8F3F0",
            padding: "0.6rem",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Shield size={24} color="rgb(47, 111, 94)" strokeWidth={1.5} />
          </div>
          <div>
            <div
              style={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "rgb(30, 63, 51)",
              }}
            >
              {t.about.badgeTitle}
            </div>
            <div
              style={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgb(74, 107, 96)",
                marginTop: "0.15rem",
              }}
            >
              {t.about.badgeSubtitle}
            </div>
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div>
        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "Outfit, system-ui, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              color: "rgb(47, 111, 94)",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            {t.about.label}
          </span>
          <span
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, rgba(47, 111, 94, 0.3) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            color: "rgb(30, 63, 51)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            marginBottom: "2rem",
          }}
        >
          {t.about.headingStart}{" "}
          <em style={{ 
            color: "rgb(201, 76, 61)", 
            fontStyle: "italic",
            paddingRight: "0.1em"
          }}>
            {t.about.headingEm}
          </em>{" "}
          {t.about.headingEnd}
        </h2>

        {/* Body paragraphs */}
        <div style={{ position: "relative" }}>
          {/* Decorative Quote Mark */}
          <span style={{
            position: "absolute",
            top: "-1.5rem",
            left: "-1.5rem",
            fontSize: "5rem",
            fontFamily: '"Cormorant Garamond", serif',
            color: "rgba(47, 111, 94, 0.08)",
            lineHeight: 1,
            zIndex: -1,
            pointerEvents: "none"
          }}>
            "
          </span>
          
          <p
            style={{
              fontFamily: "Outfit, system-ui, sans-serif",
              fontSize: "1.1rem",
              color: "rgb(74, 107, 96)",
              lineHeight: 1.7,
              marginBottom: "1.2rem",
              fontWeight: 300,
            }}
          >
            {t.about.introStart}{" "}
            <strong style={{ 
              color: "rgb(30, 63, 51)", 
              fontWeight: 600,
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "1.4rem"
            }}>
              {t.common.brandFull}
            </strong>
            {t.about.introEnd}
          </p>
          <p
            style={{
              fontFamily: "Outfit, system-ui, sans-serif",
              fontSize: "1.1rem",
              color: "rgb(74, 107, 96)",
              lineHeight: 1.7,
              marginBottom: "3.5rem",
              fontWeight: 300,
            }}
          >
            {t.about.approach}
          </p>
        </div>

        {/* Journey Timeline */}
        <div style={{ position: "relative" }}>
          {/* Horizontal Connecting Line */}
          <div
            className="mobile-hidden"
            style={{
              position: "absolute",
              top: "26px",
              left: "16%",
              right: "16%",
              height: "2px",
              background: "linear-gradient(90deg, rgba(47, 111, 94, 0.15) 0%, rgba(201, 76, 61, 0.15) 50%, rgba(214, 138, 58, 0.15) 100%)",
              zIndex: 0,
            }}
          />

          <div
            className="resp-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {journey.map(({ step, Icon, title, desc, theme }) => (
              <div
                key={step}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: theme.bg,
                    boxShadow: `0 8px 20px ${theme.icon}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 12px 24px ${theme.icon}35`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 8px 20px ${theme.icon}25`;
                  }}
                >
                  <Icon
                    size={24}
                    color={theme.icon}
                    strokeWidth={1.75}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "Outfit, system-ui, sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: theme.icon,
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step}
                </div>
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 600,
                    fontSize: "1.4rem",
                    lineHeight: "1.2",
                    color: "rgb(30, 63, 51)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: "Outfit, system-ui, sans-serif",
                    fontSize: "0.95rem",
                    color: "rgb(74, 107, 96)",
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
