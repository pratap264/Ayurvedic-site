import React from 'react';
import { Flame, Sparkles, Bone, Sun } from 'lucide-react';

const services = [
  {
    Icon: Flame,
    iconColor: 'rgb(47, 111, 94)',
    iconBg: 'rgba(47, 111, 94, 0.08)',
    title: 'Panchakarma',
    titleColor: 'rgb(30, 63, 51)',
    desc: 'Five classical detox therapies — Vamana, Virechana, Basti, Nasya, Raktamokshana — sequenced to your constitution.',
  },
  {
    Icon: Sparkles,
    iconColor: 'rgb(201, 76, 61)',
    iconBg: 'rgba(201, 76, 61, 0.08)',
    title: 'Skin & Hair Care',
    titleColor: 'rgb(30, 63, 51)',
    desc: 'Acne, pigmentation, eczema, hair fall — treated from gut and hormones outward, not just topically.',
  },
  {
    Icon: Bone,
    iconColor: 'rgb(74, 107, 96)',
    iconBg: 'rgba(74, 107, 96, 0.08)',
    title: 'Chronic Pain',
    titleColor: 'rgb(30, 63, 51)',
    desc: 'Low back, joints, sciatica, frozen shoulder, migraine — through Kati Basti, Abhyanga, Nasya & oral protocols.',
  },
  {
    Icon: Sun,
    iconColor: 'rgb(74, 107, 96)',
    iconBg: 'rgba(74, 107, 96, 0.08)',
    title: 'Lifestyle Guidance',
    titleColor: 'rgb(30, 63, 51)',
    desc: 'Dinacharya, Ritucharya, sleep, stress, fertility, post-partum — gentle, sustainable lifestyle medicine.',
  },
];

const Services = () => (
  <section id="services" style={{ backgroundColor: '#FAF6F0', padding: '6rem 0' }}>
    <div className="resp-px" style={{ maxWidth: '82rem', margin: '0 auto', padding: '0 2.5rem' }}>

      {/* Top row: heading left, description right */}
      <div className="resp-grid resp-gap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '3.5rem' }}>

        {/* Left heading */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.4rem' }}>
            <span style={{ width: '2rem', height: '1px', backgroundColor: 'rgb(47, 111, 94)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', color: 'rgb(47, 111, 94)', fontWeight: 600, textTransform: 'uppercase' }}>AREAS OF EXPERTISE</span>
          </div>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.25rem, 3.5vw, 3.2rem)',
            color: 'rgb(30, 63, 51)',
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            What we work on, together.
          </h2>
        </div>

        {/* Right description */}
        <div>
          <p style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '1rem',
            color: 'rgb(74, 107, 96)',
            lineHeight: 1.75,
          }}>
            Every plan begins with a thorough <em style={{ fontStyle: 'italic' }}>nadi pariksha</em> and a long conversation. Treatment follows the body — not a template.
          </p>
        </div>
      </div>

      {/* Cards — 4 columns */}
      <div className="resp-grid-2 mobile-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.2rem' }}>
        {services.map(({ Icon, iconColor, iconBg, title, titleColor, desc }) => (
          <div
            key={title}
            style={{
              backgroundColor: '#fff',
              borderRadius: '1.2rem',
              padding: '1.8rem 1.6rem',
              boxShadow: '0 4px 20px rgba(44,53,49,0.06)',
              transition: 'all 0.25s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(44,53,49,0.10)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(44,53,49,0.06)'; }}
          >
            {/* Icon */}
            <div style={{
              width: 44, height: 44, borderRadius: '0.75rem',
              backgroundColor: iconBg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.2rem',
            }}>
              <Icon size={20} color={iconColor} strokeWidth={1.5} />
            </div>

            {/* Title */}
            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.3rem',
              fontWeight: 500,
              color: titleColor,
              marginBottom: '0.6rem',
              lineHeight: 1.2,
            }}>{title}</div>

            {/* Description */}
            <div style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '0.875rem',
              color: 'rgb(74, 107, 96)',
              lineHeight: 1.65,
            }}>{desc}</div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;
