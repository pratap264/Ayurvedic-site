import React from "react";
import { MessageCircle, Mail, MapPin, Leaf } from "lucide-react";

const Footer = () => (
  <>
    {/* Contact Section */}
    <section
      id="contact"
      style={{ backgroundColor: "#FAF6F0", padding: "6rem 0" }}
    >
      <div style={{ maxWidth: "82rem", margin: "0 auto", padding: "0 2.5rem" }}>
        <div
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
                BEGIN THE CONVERSATION
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
              Book a consultation.
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
              Consultation available at associated clinics &amp; online. Share a
              little about what's going on, and we'll be in touch within a day
              to set up a time that suits you.
            </p>

            {/* Contact rows */}
            {[
              {
                Icon: MessageCircle,
                label: "WHATSAPP",
                value: "+91 8624011185",
                iconBg: "rgba(47,111,94,0.1)",
                iconColor: "rgb(47, 111, 94)",
              },
              {
                Icon: Mail,
                label: "EMAIL",
                value: "prajaktagarud@gmail.com",
                iconBg: "rgba(47,111,94,0.1)",
                iconColor: "rgb(47, 111, 94)",
              },
              {
                Icon: MapPin,
                label: "CLINIC",
                value: "Pune, Maharashtra",
                iconBg: "rgba(201,76,61,0.1)",
                iconColor: "rgb(201, 76, 61)",
              },
            ].map(({ Icon, label, value, iconBg, iconColor }) => (
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
                    {value}
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
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              {[
                { label: "NAME", placeholder: "Your full name", type: "text" },
                {
                  label: "EMAIL",
                  placeholder: "you@example.com",
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
                PHONE
              </label>
              <input
                type="tel"
                placeholder="+91 ..."
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
                WHAT BRINGS YOU HERE?
              </label>
              <textarea
                rows={4}
                placeholder="A few lines about what you'd like help with..."
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
              REQUEST CONSULTATION
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
              We respond within 24 hours, Monday to Saturday.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer bar */}
    <footer style={{ backgroundColor: '#FAF6F0', padding: '4rem 2.5rem 2rem', borderTop: '1px solid rgba(47,111,94,0.1)' }}>
      <div style={{ maxWidth: '82rem', margin: '0 auto' }}>
        
        {/* Main Footer Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 0.8fr 1.2fr', gap: '2rem', marginBottom: '3.5rem' }}>
          
          {/* Brand */}
          <div style={{ paddingRight: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'rgba(47,111,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Leaf size={18} color="rgb(47, 111, 94)" strokeWidth={1.5} />
              </div>
              <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: 'rgb(30, 63, 51)', fontWeight: 400 }}>
                Vd. Prajakta Garud
              </span>
            </div>
            <p style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '0.95rem', color: 'rgb(74, 107, 96)',
              lineHeight: 1.7, margin: 0
            }}>
              Ayurvedic care rooted in classical Panchakarma tradition — for skin, hormones, pain, and the rhythm of everyday life.
            </p>
          </div>

          {/* Visit */}
          <div>
            <h4 style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '0.65rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgb(74, 107, 96)',
              opacity: 0.7, marginBottom: '1.2rem', marginTop: 0
            }}>VISIT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['About', 'Doshas', 'Services', 'Apothecary', 'Journal'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontSize: '0.95rem', color: 'rgb(30, 63, 51)',
                  textDecoration: 'none', transition: 'color 0.2s',
                  fontWeight: 500
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgb(47, 111, 94)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgb(30, 63, 51)'}
                >{link}</a>
              ))}
            </div>
          </div>

          {/* Reach */}
          <div>
            <h4 style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '0.65rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgb(74, 107, 96)',
              opacity: 0.7, marginBottom: '1.2rem', marginTop: 0
            }}>REACH</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { text: 'consult@prajaktagarud.in', href: 'mailto:consult@prajaktagarud.in' },
                { text: '+91 98765 43210', href: 'tel:+919876543210' },
                { text: 'Pune, Maharashtra', href: null }
              ].map(({text, href}, i) => (
                href ? (
                  <a key={i} href={href} style={{
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontSize: '0.95rem', color: 'rgb(30, 63, 51)',
                    textDecoration: 'none', fontWeight: 500
                  }}>{text}</a>
                ) : (
                  <span key={i} style={{
                    fontFamily: 'Outfit, system-ui, sans-serif',
                    fontSize: '0.95rem', color: 'rgb(30, 63, 51)',
                    fontWeight: 500
                  }}>{text}</span>
                )
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          paddingTop: '1.5rem', borderTop: '1px solid rgba(47,111,94,0.15)'
        }}>
          <p style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '0.85rem', color: 'rgb(74, 107, 96)',
            margin: 0
          }}>
            © {new Date().getFullYear()} Vd. Prajakta Garud. All rights reserved.
          </p>

          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.05rem', color: 'rgb(47, 111, 94)',
            margin: 0, fontStyle: 'italic'
          }}>
            <span style={{ fontStyle: 'normal', fontWeight: 500 }}>सर्वे भवन्तु सुखिनः</span> · May all be free from illness.
          </p>
        </div>
      </div>
    </footer>

    {/* Floating WhatsApp */}
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
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
      <MessageCircle size={24} color="#fff" strokeWidth={2} />
    </a>
  </>
);

export default Footer;
