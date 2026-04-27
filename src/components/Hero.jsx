import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import kaphaImg from "../assets/main/kapha.jpg";
import pittaImg from "../assets/main/pitta.jpg";
import vataImg from "../assets/main/vata.jpg";

/* ── Floating pill badge ── */
const Badge = ({ text, color, style }) => (
  <div
    style={{
      position: "absolute",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45rem",
      padding: "0.45rem 0.9rem",
      backgroundColor: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderRadius: "9999px",
      boxShadow: "0 4px 16px rgba(44,53,49,0.10)",
      fontFamily: "Inter, sans-serif",
      fontSize: "0.78rem",
      color: "#2C3531",
      fontWeight: 500,
      whiteSpace: "nowrap",
      zIndex: 10,
      ...style,
    }}
  >
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
    {text}
  </div>
);

const CIRCLE = 240;

const DoshaCircle = ({ src, name, style = {} }) => (
  <div
    style={{
      position: "absolute",
      width: CIRCLE,
      height: CIRCLE,
      borderRadius: "50%",
      overflow: "hidden",
      ...style,
    }}
  >
    <img
      src={src}
      alt={name}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
);

const Hero = () => (
  <section
    id="home"
    style={{
      backgroundColor: "#F5EBDD",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    }}
  >
    <div
      className="resp-px resp-grid resp-gap"
      style={{
        maxWidth: "82rem",
        margin: "0 auto",
        padding: "4rem 2.5rem 4rem",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "52% 48%",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      {/* LEFT */}
      <div>
        {/* Label */}
        <div
          className="gap-2"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: "1.8rem",
              height: "1px",
              backgroundColor: "rgb(47, 111, 94)",
            }}
          />
          <span
            className="font-medium text-[11px]"
            style={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.32em",
              color: "rgb(47, 111, 94)",
              textTransform: "uppercase",
            }}
          >
            AYURVEDIC PRACTITIONER
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-serif"
          style={{
            fontSize: "4.5rem",
            color: "rgb(30, 63, 51)",
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: "-0.025em",
            marginBottom: "0.9rem",
          }}
        >
          Vd. Prajakta Garud
        </h1>

        {/* Degree */}
        <p
          className="mt-3 text-base font-sans tracking-[0.2em] uppercase text-ayur-kapha"
          style={{
            fontWeight: 600,
            marginBottom: "1.4rem",
          }}
        >
          MD PANCHAKARMA
        </p>

        {/* Quote */}
        <p
          className="mt-8 max-w-xl font-serif text-2xl md:text-3xl italic text-ayur-soft"
          style={{
            marginBottom: "1rem",
            color: "rgb(74, 107, 96)",
            lineHeight: 1.5,
          }}
        >
          "Healing Naturally through Ayurveda & Lifestyle <br /> Balance"
        </p>

        {/* Description */}
        <p
          className="mt-6 text-base font-sans leading-relaxed text-ayur-soft/90 max-w-lg"
          style={{
            marginBottom: "2.2rem",
            color: "rgba(74, 107, 96, 0.9)",
          }}
        >
          A practice rooted in classical Panchakarma, gentle modern care, and
          personalised lifestyle guidance — for skin, gut, hormones and the
          quiet work of feeling like yourself again.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2.8rem",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              borderRadius: "9999px",
              backgroundColor: "rgb(47, 111, 94)",
              color: "rgb(245, 235, 221)",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgb(28, 58, 47)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgb(47, 111, 94)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)";
            }}
          >
            BOOK CONSULTATION <span className="btn-arrow"><ArrowUpRight size={18} strokeWidth={2.5} /></span>
          </button>

          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              borderRadius: "9999px",
              backgroundColor: "#22C55E",
              color: "rgb(245, 235, 221)",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#16A34A";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#22C55E";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)";
            }}
          >
            <MessageCircle size={18} strokeWidth={2.5} /> WHATSAPP
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="resp-hide-circles"
        style={{ position: "relative", height: "480px", marginTop: "-3rem" }}
      >
        <DoshaCircle
          src={kaphaImg}
          name="kapha"
          style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
        />

        <DoshaCircle
          src={pittaImg}
          name="pitta"
          style={{ bottom: 0, left: "5%" }}
        />

        <DoshaCircle
          src={vataImg}
          name="vata"
          style={{ bottom: 0, right: "5%" }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            border: "1.5px dashed rgba(47,111,94,0.35)",
          }}
        />

        {/* Hint text — center gap between circles */}
        <div
          style={{
            position: "absolute",
            top: "47%",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 10,
            textAlign: "center",
          }}
        >
          <p style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgb(47, 111, 94)",
            opacity: 0.55,
            whiteSpace: "nowrap",
          }}>
            What is your dominant dosha?
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
