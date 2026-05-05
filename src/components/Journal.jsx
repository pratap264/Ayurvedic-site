import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import tips1 from '../assets/main/tips-1.png';
import tips2 from '../assets/main/tips-2.png';
import tips3 from '../assets/main/tips-3.png';
import tips4 from '../assets/main/tips-4.png';
import tips5 from '../assets/main/tips-5.png';
import tips6 from '../assets/main/tips-6.png';

const articles = [
  {
    tag: 'SKIN',
    readTime: '5 MIN READ',
    title: 'Ayurvedic Skincare Beyond the Jar',
    image: tips1,
    excerpt: 'True skin health begins in the gut. Here\'s how your digestion, sleep and dosha shape what shows up on your face.',
    accent: 'rgba(47, 111, 94, 0.18)',
    tagColor: 'rgb(47, 111, 94)',
  },
  {
    tag: 'HORMONES',
    readTime: '7 MIN READ',
    title: 'PCOS, Gently: An Ayurvedic Roadmap',
    image: tips2,
    excerpt: 'A Pitta-Kapha condition at its root — how classical herbs, diet shifts and daily rhythm can restore hormonal balance.',
    accent: 'rgba(201, 76, 61, 0.15)',
    tagColor: 'rgb(201, 76, 61)',
  },
  {
    tag: 'DETOX',
    readTime: '6 MIN READ',
    title: 'The Quiet Power of a 7-Day Detox',
    image: tips3,
    excerpt: 'What Panchakarma really does — and why a gentle seasonal cleanse changes how you feel in your body all year long.',
    accent: 'rgba(111, 163, 168, 0.18)',
    tagColor: 'rgb(74, 107, 96)',
  },
  {
    tag: 'DAILY RHYTHM',
    readTime: '4 MIN READ',
    title: 'Dinacharya: The Morning Routine That Actually Works',
    image: tips4,
    excerpt: 'Oil pulling, tongue scraping, warm water — why these simple acts done in order can shift your energy from the first hour.',
    accent: 'rgba(47, 111, 94, 0.12)',
    tagColor: 'rgb(47, 111, 94)',
  },
  {
    tag: 'GUT',
    readTime: '6 MIN READ',
    title: 'Your Gut Is Talking. Are You Listening?',
    image: tips5,
    excerpt: 'Bloating, acid reflux, irregular hunger — Ayurveda reads these as messages from Agni, your digestive fire.',
    accent: 'rgba(180, 120, 60, 0.15)',
    tagColor: 'rgb(150, 90, 40)',
  },
  {
    tag: 'SLEEP',
    readTime: '5 MIN READ',
    title: 'Why You Wake at 3am (and How to Stop)',
    image: tips6,
    excerpt: 'According to the Ayurvedic clock, 2–4am is Vata time. Here\'s what that means for your nervous system — and what helps.',
    accent: 'rgba(74, 107, 96, 0.15)',
    tagColor: 'rgb(47, 111, 94)',
  },
];

const Journal = () => (
  <section id="journal" style={{ backgroundColor: '#FAF6F0', padding: '6rem 0' }}>
    <div className="resp-px" style={{ maxWidth: '82rem', margin: '0 auto', padding: '0 2.5rem' }}>

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <span style={{ width: '2rem', height: '1px', backgroundColor: 'rgb(47, 111, 94)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Outfit, system-ui, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', color: 'rgb(47, 111, 94)', fontWeight: 600, textTransform: 'uppercase' }}>HEALTH JOURNAL</span>
          </div>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.25rem, 3.5vw, 3rem)',
            color: 'rgb(30, 63, 51)',
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            Notes &amp; health tips from the clinic.
          </h2>
        </div>

        <a
          href="#all-articles"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgb(47, 111, 94)', textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          READ ALL <ArrowUpRight size={15} strokeWidth={2.5} />
        </a>
      </div>

      {/* Articles grid */}
      <div className="resp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {articles.map(({ tag, readTime, title, excerpt, image, tagColor }) => (
          <div
            key={title}
            style={{
              backgroundColor: '#fff',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(44,53,49,0.06)',
              transition: 'all 0.3s',
              cursor: 'pointer',
              display: 'flex', flexDirection: 'column',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(44,53,49,0.11)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(44,53,49,0.06)'; }}
          >
            {/* Image block */}
            <div style={{
              height: '180px',
              backgroundImage: `linear-gradient(to top, rgba(30, 63, 51, 0.14), rgba(30, 63, 51, 0.02)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex', alignItems: 'flex-end',
              padding: '1.2rem',
            }}>
              <span style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '0.65rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', fontWeight: 600,
                color: tagColor, opacity: 0.85,
                backgroundColor: 'rgba(255,255,255,0.7)',
                padding: '0.25rem 0.7rem', borderRadius: '9999px',
              }}>{tag}</span>
            </div>

            {/* Content */}
            <div style={{ padding: '1.4rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '0.7rem', letterSpacing: '0.1em',
                color: 'rgb(74, 107, 96)', opacity: 0.7,
                marginBottom: '0.7rem',
              }}>{readTime}</div>

              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.35rem', fontWeight: 400,
                color: 'rgb(30, 63, 51)',
                lineHeight: 1.3,
                marginBottom: '0.8rem',
                transition: 'color 0.2s',
              }}>{title}</h3>

              <p style={{
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '0.85rem',
                color: 'rgb(74, 107, 96)',
                lineHeight: 1.65,
                flex: 1,
              }}>{excerpt}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Journal;
