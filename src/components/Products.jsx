import React from "react";
import product1 from "../assets/main/product-1.png";
import product2 from "../assets/main/products-2.png";
import product3 from "../assets/main/products-3.png";
import product4 from "../assets/main/products-4.png";

const WhatsAppSVG = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const products = [
  {
    title: "Herbal Churnas",
    subtitle: "Classical digestive & wellness powders",
    image: product2,
  },
  {
    title: "Shatavari Kalpa",
    subtitle: "Women's vitality · Hormonal balance",
    image: product3,
  },
  {
    title: "Herbal Soaps",
    subtitle: "Natural skin care · Ayurvedic herbs",
    image: product4,
  },
];

const Products = () => (
  <section
    id="products"
    style={{ backgroundColor: "#F5EBDD", padding: "6rem 0" }}
  >
    <div
      className="resp-px"
      style={{ maxWidth: "82rem", margin: "0 auto", padding: "0 2.5rem" }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3rem",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.2rem",
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
              Suvarn Prashan
            </span>
          </div>
          {/* Heading */}
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(2.25rem, 3.5vw, 3rem)",
              color: "rgb(30, 63, 51)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Healing formulas, made with intention.
          </h2>
          <p
            style={{
              fontFamily: "Outfit, system-ui, sans-serif",
              fontSize: "1rem",
              color: "rgb(74, 107, 96)",
              lineHeight: 1.7,
            }}
          >
            Classical churnas, herbal creams and cleansers — prepared from
            traditional recipes, prescribed to your constitution.
          </p>
        </div>

        {/* Enquire Now — top row right */}
        <a
          href="#contact"
          style={{
            fontFamily: "Outfit, system-ui, sans-serif",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgb(47, 111, 94)",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Enquire Now →
        </a>

      </div>


      {/* Banner */}
      <div
        style={{
          width: "100%",
          borderRadius: "1.5rem",
          overflow: "hidden",
          marginBottom: "3rem",
          position: "relative",
          lineHeight: 0,
        }}
      >
        <img
          src={product1}
          alt="Suvarn Prashan Range"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "1.5rem",
          }}
        />
      </div>

      {/* Product cards */}
      <div
        className="resp-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {products.map(({ title, subtitle, image }) => (
          <div
            key={title}
            style={{
              backgroundColor: "#fff",
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(44,53,49,0.06)",
              transition: "all 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(44,53,49,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(44,53,49,0.06)";
            }}
          >
            {/* Product image */}
            <div
              style={{
                height: "200px",
                overflow: "hidden",
              }}
            >
              <img
                src={image}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: "1.2rem 1.4rem 0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "Outfit, system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "rgb(30, 63, 51)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Outfit, system-ui, sans-serif",
                      fontSize: "0.78rem",
                      color: "rgb(74, 107, 96)",
                    }}
                  >
                    {subtitle}
                  </div>
                </div>
                <button
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#25D366",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(37,211,102,0.3)",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <WhatsAppSVG size={18} color="#fff" />
                </button>
              </div>
            </div>

            {/* Enquire link */}
            <a
              href="#contact"
              style={{
                display: "block",
                padding: "0.8rem 1.4rem 1.2rem",
                fontFamily: "Outfit, system-ui, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgb(47, 111, 94)",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              ENQUIRE ON WHATSAPP →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
