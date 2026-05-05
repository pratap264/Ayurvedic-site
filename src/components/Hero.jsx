import React from "react";
import { ArrowUpRight } from "lucide-react";
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg> WHATSAPP
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
