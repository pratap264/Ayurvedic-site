import React, { useState } from "react";
import { Mail, MapPin, Leaf } from "lucide-react";
import { useI18n } from "../i18n";

const WhatsAppSVG = ({ size = 24, color = "currentColor", strokeWidth }) => (
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

const Footer = () => {
  const { t } = useI18n();
  const [whatsappPromptHidden, setWhatsappPromptHidden] = useState(false);
  const navIds = ["about", "doshas", "services", "products", "journal"];

  return (
  <>
    {/* Contact Section */}
    <section
      id="contact"
      style={{ backgroundColor: "#FAF6F0", padding: "6rem 0" }}
    >
      <div
        className="resp-px"
        style={{ maxWidth: "82rem", margin: "0 auto", padding: "0 2.5rem" }}
      >
        <div
          className="resp-grid resp-gap"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
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
                {t.footer.label}
              </span>
            </div>

            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "clamp(2.25rem, 3.5vw, 3.2rem)",
                color: "rgb(30, 63, 51)",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.4rem",
              }}
            >
              {t.footer.heading}
            </h2>

            <p
              style={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontSize: "1rem",
                color: "rgb(74, 107, 96)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "400px",
              }}
            >
              {t.footer.description}
            </p>

            {/* Contact rows */}
            {[
              {
                Icon: WhatsAppSVG,
                label: t.footer.contactLabels.whatsapp,
                type: "whatsapp",
                value: "+91 8624011185",
                iconBg: "rgba(47,111,94,0.1)",
                iconColor: "rgb(47, 111, 94)",
              },
              {
                Icon: Mail,
                label: t.footer.contactLabels.email,
                type: "email",
                value: "prajaktagarud29@gmail.com",
                iconBg: "rgba(47,111,94,0.1)",
                iconColor: "rgb(47, 111, 94)",
              },
              {
                Icon: MapPin,
                label: t.footer.contactLabels.clinic,
                type: "clinic",
                value: t.footer.clinic,
                iconBg: "rgba(201,76,61,0.1)",
                iconColor: "rgb(201, 76, 61)",
              },
            ].map(({ Icon, label, type, value, iconBg, iconColor }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.2rem",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={17} color={iconColor} strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Outfit, system-ui, sans-serif",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgb(74, 107, 96)",
                      opacity: 0.7,
                      marginBottom: "0.1rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "Outfit, system-ui, sans-serif",
                      fontSize: "0.92rem",
                      color: "rgb(30, 63, 51)",
                      fontWeight: 500,
                    }}
                  >
                    {type === "email" ? (
                      <a
                        href={`mailto:${value}`}
                        style={{
                          color: "rgb(30, 63, 51)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "rgb(47, 111, 94)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "rgb(30, 63, 51)")
                        }
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Form Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              boxShadow: "0 8px 40px rgba(44,53,49,0.08)",
            }}
          >
            {/* Name + Email row */}
            <div
              className="resp-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              {[
                { label: t.footer.form.name, placeholder: t.footer.form.namePlaceholder, type: "text" },
                {
                  label: t.footer.form.email,
                  placeholder: t.footer.form.emailPlaceholder,
                  type: "email",
                },
              ].map(({ label, placeholder, type }) => (
                <div key={label}>
                  <label
                    style={{
                      fontFamily: "Outfit, system-ui, sans-serif",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgb(74, 107, 96)",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding: "0.75rem 1rem",
                      border: "1px solid rgba(74,107,96,0.2)",
                      borderRadius: "0.75rem",
                      fontFamily: "Outfit, system-ui, sans-serif",
                      fontSize: "0.9rem",
                      color: "rgb(30, 63, 51)",
                      outline: "none",
                      backgroundColor: "#FAF6F0",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgb(47, 111, 94)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(74,107,96,0.2)")
                    }
                  />
                </div>
              ))}
            </div>

            {/* Phone */}
            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  fontFamily: "Outfit, system-ui, sans-serif",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgb(74, 107, 96)",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                {t.footer.form.phone}
              </label>
              <input
                type="tel"
                placeholder={t.footer.form.phonePlaceholder}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "0.75rem 1rem",
                  border: "1px solid rgba(74,107,96,0.2)",
                  borderRadius: "0.75rem",
                  fontFamily: "Outfit, system-ui, sans-serif",
                  fontSize: "0.9rem",
                  color: "rgb(30, 63, 51)",
                  outline: "none",
                  backgroundColor: "#FAF6F0",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgb(47, 111, 94)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(74,107,96,0.2)")
                }
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  fontFamily: "Outfit, system-ui, sans-serif",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgb(74, 107, 96)",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                {t.footer.form.concern}
              </label>
              <textarea
                rows={4}
                placeholder={t.footer.form.concernPlaceholder}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "0.75rem 1rem",
                  border: "1px solid rgba(74,107,96,0.2)",
                  borderRadius: "0.75rem",
                  fontFamily: "Outfit, system-ui, sans-serif",
                  fontSize: "0.9rem",
                  color: "rgb(30, 63, 51)",
                  outline: "none",
                  resize: "vertical",
                  backgroundColor: "#FAF6F0",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgb(47, 111, 94)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(74,107,96,0.2)")
                }
              />
            </div>

            {/* Submit button */}
            <button
              style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "rgb(47, 111, 94)",
                color: "rgb(245, 235, 221)",
                border: "none",
                borderRadius: "0.75rem",
                fontFamily: "Outfit, system-ui, sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgb(30, 63, 51)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "rgb(47, 111, 94)")
              }
            >
              {t.footer.form.submit}
            </button>

            <p
              style={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontSize: "0.75rem",
                color: "rgb(74, 107, 96)",
                textAlign: "center",
                marginTop: "1rem",
                opacity: 0.7,
              }}
            >
              {t.footer.form.note}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer bar */}
    <footer
      className="resp-px"
      style={{
        backgroundColor: "#FAF6F0",
        padding: "4rem 2.5rem 2rem",
        borderTop: "1px solid rgba(47,111,94,0.1)",
      }}
    >
      <div style={{ maxWidth: "82rem", margin: "0 auto" }}>
        {/* Main Footer Content */}
        <div
          className="resp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 0.8fr 1.2fr",
            gap: "2rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Brand */}
          <div style={{ paddingRight: "4rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "1.2rem",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "rgba(47,111,94,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Leaf size={18} color="rgb(47, 111, 94)" strokeWidth={1.5} />
              </div>
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "1.5rem",
                  color: "rgb(30, 63, 51)",
                  fontWeight: 400,
                }}
              >
                {t.common.brandFull}
              </span>
            </div>
            <p
              style={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontSize: "0.95rem",
                color: "rgb(74, 107, 96)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {t.footer.footerText}
            </p>
          </div>

          {/* Visit */}
          <div>
            <h4
              style={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgb(74, 107, 96)",
                opacity: 0.7,
                marginBottom: "1.2rem",
                marginTop: 0,
              }}
            >
              {t.footer.visit}
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              {t.common.footerNav.map(
                (link, index) => (
                  <a
                    key={link}
                    href={`#${navIds[index]}`}
                    style={{
                      fontFamily: "Outfit, system-ui, sans-serif",
                      fontSize: "0.95rem",
                      color: "rgb(30, 63, 51)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "rgb(47, 111, 94)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgb(30, 63, 51)")
                    }
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Reach */}
          <div>
            <h4
              style={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgb(74, 107, 96)",
                opacity: 0.7,
                marginBottom: "1.2rem",
                marginTop: 0,
              }}
            >
              {t.footer.reach}
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              {[
                {
                  text: "prajaktagarud29@gmail.com",
                  href: "mailto:prajaktagarud29@gmail.com",
                },
                { text: "+91 86240 11185", href: "tel:+918624011185" },
                { text: t.footer.clinic, href: null },
              ].map(({ text, href }, i) =>
                href ? (
                  <a
                    key={i}
                    href={href}
                    style={{
                      fontFamily: "Outfit, system-ui, sans-serif",
                      fontSize: "0.95rem",
                      color: "rgb(30, 63, 51)",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    {text}
                  </a>
                ) : (
                  <span
                    key={i}
                    style={{
                      fontFamily: "Outfit, system-ui, sans-serif",
                      fontSize: "0.95rem",
                      color: "rgb(30, 63, 51)",
                      fontWeight: 500,
                    }}
                  >
                    {text}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(47,111,94,0.15)",
          }}
        >
          <p
            style={{
              fontFamily: "Outfit, system-ui, sans-serif",
              fontSize: "0.85rem",
              color: "rgb(74, 107, 96)",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} {t.common.brandFull}. {t.footer.rights}
          </p>

          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "1.05rem",
              color: "rgb(47, 111, 94)",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            <span style={{ fontStyle: "normal", fontWeight: 500 }}>
              {t.footer.mantra}
            </span>{" "}
            · {t.footer.mantraMeaning}
          </p>
        </div>
      </div>
    </footer>

    {/* Floating WhatsApp */}
    {!whatsappPromptHidden && (
      <div className="whatsapp-nudge">
        <button
          className="whatsapp-nudge-close"
          type="button"
          aria-label="Close WhatsApp prompt"
          onClick={() => setWhatsappPromptHidden(true)}
        >
          ×
        </button>
        <a
          className="whatsapp-nudge-link"
          href="https://wa.me/918624011185"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.footer.whatsappPrompt.text}
        >
          <span className="whatsapp-nudge-title">{t.footer.whatsappPrompt.title}</span>
          <span className="whatsapp-nudge-text">{t.footer.whatsappPrompt.text}</span>
        </a>
      </div>
    )}

    <a
      href="https://wa.me/918624011185"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setWhatsappPromptHidden(false)}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: 56,
        height: 56,
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        zIndex: 50,
        transition: "all 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,211,102,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
      }}
    >
      <WhatsAppSVG size={28} color="#fff" strokeWidth={2} />
    </a>
  </>
  );
};

export default Footer;
