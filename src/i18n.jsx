import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export const translations = {
  en: {
    language: {
      current: "English",
      switchTo: "मराठी",
      aria: "Switch language",
    },
    common: {
      brandShort: "Vd. Prajakta",
      brandFull: "Vd. Prajakta Garud",
      brandSub: "AYURVEDA",
      degree: "MD PANCHAKARMA",
      book: "Book Consultation",
      whatsapp: "WHATSAPP",
      nav: ["About", "Doshas", "Services", "Products", "Journal", "Contact"],
      footerNav: ["About", "Doshas", "Services", "Products", "Journal"],
    },
    hero: {
      label: "AYURVEDIC PRACTITIONER",
      quote: "Healing Naturally through Ayurveda & Lifestyle",
      quoteBreak: "Balance",
      description:
        "A practice rooted in classical Panchakarma, gentle modern care, and personalised lifestyle guidance - for skin, gut, hormones and the quiet work of feeling like yourself again.",
      hint: "What is your dominant dosha?",
    },
    about: {
      badgeTitle: "MD Panchakarma",
      badgeSubtitle: "Certified Practitioner",
      label: "About The Doctor",
      headingStart: "A practice where ancient",
      headingEm: "wisdom",
      headingEnd: "meets present-day living.",
      introStart: "I'm",
      introEnd:
        ", an Ayurvedic physician with a postgraduate specialisation in Panchakarma. Over the last 7+ years I've walked alongside hundreds of patients - through stubborn skin concerns, hormonal imbalances, chronic pain, gut trouble, and the quiet exhaustion that modern living quietly accumulates.",
      approach:
        "My approach is unhurried. I listen first. Then we work, together, through diet, daily rhythm (dinacharya), classical therapies, and herbal protocols that fit the life you actually live.",
      steps: [
        { step: "Step 1", title: "Diagnose", desc: "(Prakriti Analysis)" },
        { step: "Step 2", title: "Personalised", desc: "Plan" },
        { step: "Step 3", title: "Healing & Detox", desc: "(Panchakarma)" },
      ],
    },
    doshas: {
      label: "KNOW YOUR CONSTITUTION",
      headingStart: "The three",
      headingEm: "doshas",
      headingEnd: "the elemental rhythms that shape how you live, eat, sleep and heal.",
      description:
        "Every body is a unique blend of Vata, Pitta and Kapha. Understanding yours is the first step toward a routine that actually feels natural.",
      ctaTitle: "Which dosha is running your life right now?",
      ctaText:
        "Discover your dominant dosha - understand why you feel drained, inflamed, or scattered - and get personalised tips to restore balance.",
      ctaTags: ["Skin", "Gut", "Sleep", "Hormones", "Energy"],
      items: [
        {
          name: "Kapha",
          subtitle: "Earth & Water",
          qualities: ["Heavy", "Slow", "Steady", "Cold", "Oily"],
          desc: "You are naturally calm, thoughtful, and loving. Kapha provides stability, strength, and the foundation for all life.",
        },
        {
          name: "Pitta",
          subtitle: "Fire & Energy",
          qualities: ["Hot", "Light", "Intense", "Sharp", "Acidic"],
          desc: "Pitta governs transformation and metabolism. Sharp intellect, strong digestion, and passionate drive define this dosha.",
        },
        {
          name: "Vata",
          subtitle: "Air & Ether",
          qualities: ["Light", "Cold", "Dry", "Mobile", "Subtle"],
          desc: "Vata is the energy of movement - creative, quick, enthusiastic, and full of vitality when in balance.",
        },
      ],
    },
    services: {
      label: "AREAS OF EXPERTISE",
      heading: "What we work on, together.",
      description:
        "Every plan begins with a thorough nadi pariksha and a long conversation. Treatment follows the body - not a template.",
      cards: [
        {
          title: "Panchakarma",
          desc: "Our classical five-step detox program. This deep cellular cleanse is precisely sequenced to your constitution, removing deep-seated toxins and restoring your innate healing capacity.",
          tags: ["Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana"],
        },
        {
          title: "Chronic Pain",
          desc: "Targeted, lasting relief for low back pain, stiff joints, sciatica, frozen shoulder, and migraines addressed through classical manual therapies and custom oral protocols.",
          tags: ["Kati Basti", "Abhyanga", "Janu Basti", "Oral Protocols"],
        },
        {
          title: "Skin & Hair Care",
          desc: "Healing from the gut and hormones outward, focusing on the root cause rather than just topicals.",
          tags: ["Acne", "Pigmentation", "Eczema", "Hair Fall"],
        },
        {
          title: "Lifestyle Guidance",
          desc: "Building sustainable lifestyle medicine for long-term health, tailored to your daily routines.",
          tags: ["Dinacharya", "Ritucharya", "Sleep", "Stress Care"],
        },
      ],
    },
    products: {
      label: "Suvarn Prashan",
      heading: "Healing formulas, made with intention.",
      description:
        "Classical churnas, herbal creams and cleansers - prepared from traditional recipes, prescribed to your constitution.",
      enquire: "Enquire Now ->",
      imageAlt: "Suvarn Prashan Range",
      enquireWhatsapp: "ENQUIRE ON WHATSAPP ->",
      items: [
        { title: "Herbal Churnas", subtitle: "Classical digestive & wellness powders" },
        { title: "Shatavari Kalpa", subtitle: "Women's vitality - Hormonal balance" },
        { title: "Herbal Soaps", subtitle: "Natural skin care - Ayurvedic herbs" },
      ],
    },
    journal: {
      label: "HEALTH JOURNAL",
      heading: "Notes & health tips from the clinic.",
      readAll: "READ ALL",
      articles: [
        {
          tag: "SKIN",
          readTime: "5 MIN READ",
          title: "Ayurvedic Skincare Beyond the Jar",
          excerpt:
            "True skin health begins in the gut. Here's how your digestion, sleep and dosha shape what shows up on your face.",
        },
        {
          tag: "HORMONES",
          readTime: "7 MIN READ",
          title: "PCOS, Gently: An Ayurvedic Roadmap",
          excerpt:
            "A Pitta-Kapha condition at its root - how classical herbs, diet shifts and daily rhythm can restore hormonal balance.",
        },
        {
          tag: "DETOX",
          readTime: "6 MIN READ",
          title: "The Quiet Power of a 7-Day Detox",
          excerpt:
            "What Panchakarma really does - and why a gentle seasonal cleanse changes how you feel in your body all year long.",
        },
        {
          tag: "DAILY RHYTHM",
          readTime: "4 MIN READ",
          title: "Dinacharya: The Morning Routine That Actually Works",
          excerpt:
            "Oil pulling, tongue scraping, warm water - why these simple acts done in order can shift your energy from the first hour.",
        },
        {
          tag: "GUT",
          readTime: "6 MIN READ",
          title: "Your Gut Is Talking. Are You Listening?",
          excerpt:
            "Bloating, acid reflux, irregular hunger - Ayurveda reads these as messages from Agni, your digestive fire.",
        },
        {
          tag: "SLEEP",
          readTime: "5 MIN READ",
          title: "Why You Wake at 3am (and How to Stop)",
          excerpt:
            "According to the Ayurvedic clock, 2-4am is Vata time. Here's what that means for your nervous system - and what helps.",
        },
      ],
    },
    testimonials: {
      label: "PATIENT STORIES",
      headingStart: "Real bodies.",
      headingEm: "Real change.",
      items: [
        {
          initials: "AR",
          name: "Aishwarya R.",
          label: "Skin & Gut - Pune",
          quote:
            '"Six months on Dr. Prajakta\'s plan and my acne is barely a memory. She actually listens - that\'s rare."',
        },
        {
          initials: "SM",
          name: "Sneha M.",
          label: "Chronic Pain - Mumbai",
          quote:
            '"I came in for back pain and stayed for the lifestyle reset. Kati Basti was magic. The Ritucharya advice keeps me steady year-round."',
        },
        {
          initials: "PK",
          name: "Priya K.",
          label: "PCOS - Online Consult",
          quote:
            '"PCOS had me on five medications. After the Panchakarma course my cycle came back regular for the first time in years."',
        },
      ],
    },
    footer: {
      label: "BEGIN THE CONVERSATION",
      heading: "Book a consultation.",
      description:
        "Consultation available at associated clinics & online. Share a little about what's going on, and we'll be in touch within a day to set up a time that suits you.",
      contactLabels: { whatsapp: "WHATSAPP", email: "EMAIL", clinic: "CLINIC" },
      clinic: "Pune, Maharashtra",
      form: {
        name: "NAME",
        namePlaceholder: "Your full name",
        email: "EMAIL",
        emailPlaceholder: "you@example.com",
        phone: "PHONE",
        phonePlaceholder: "+91 ...",
        concern: "WHAT BRINGS YOU HERE?",
        concernPlaceholder: "A few lines about what you'd like help with...",
        submit: "REQUEST CONSULTATION",
        note: "We respond within 24 hours, Monday to Saturday.",
      },
      footerText:
        "Ayurvedic care rooted in classical Panchakarma tradition - for skin, hormones, pain, and the rhythm of everyday life.",
      whatsappPrompt: {
        title: "Need guidance?",
        text: "Start a WhatsApp conversation with the doctor.",
      },
      visit: "VISIT",
      reach: "REACH",
      rights: "All rights reserved.",
      mantra: "सर्वे भवन्तु सुखिनः",
      mantraMeaning: "May all be free from illness.",
    },
  },
  mr: {
    language: {
      current: "मराठी",
      switchTo: "English",
      aria: "भाषा बदला",
    },
    common: {
      brandShort: "वै. प्राजक्ता",
      brandFull: "वै. प्राजक्ता गरुड",
      brandSub: "आयुर्वेद",
      degree: "एम.डी. पंचकर्म",
      book: "सल्लामसलत बुक करा",
      whatsapp: "व्हॉट्सअॅप",
      nav: ["परिचय", "दोष", "सेवा", "उत्पादने", "आरोग्य लेख", "संपर्क"],
      footerNav: ["परिचय", "दोष", "सेवा", "उत्पादने", "आरोग्य लेख"],
    },
    hero: {
      label: "आयुर्वेद चिकित्सक",
      quote: "आयुर्वेद आणि जीवनशैलीतून नैसर्गिक आरोग्य",
      quoteBreak: "संतुलन",
      description:
        "शास्त्रीय पंचकर्म, सौम्य आधुनिक काळजी आणि वैयक्तिक जीवनशैली मार्गदर्शनावर आधारित उपचार - त्वचा, पचन, हार्मोन्स आणि पुन्हा स्वतःसारखे वाटण्यासाठी.",
      hint: "तुमचा प्रमुख दोष कोणता?",
    },
    about: {
      badgeTitle: "एम.डी. पंचकर्म",
      badgeSubtitle: "प्रमाणित चिकित्सक",
      label: "वैद्यांचा परिचय",
      headingStart: "जिथे प्राचीन",
      headingEm: "ज्ञान",
      headingEnd: "आजच्या जीवनाशी जोडले जाते.",
      introStart: "मी",
      introEnd:
        ", पंचकर्म विषयात पदव्युत्तर शिक्षण घेतलेली आयुर्वेद चिकित्सक आहे. गेल्या ७+ वर्षांत मी शेकडो रुग्णांना त्वचेचे हट्टी त्रास, हार्मोनल असंतुलन, दीर्घकालीन वेदना, पचनाचे प्रश्न आणि आधुनिक जीवनातील थकवा यामधून मार्गदर्शन केले आहे.",
      approach:
        "माझी उपचारपद्धती शांत आणि सखोल आहे. आधी मी ऐकते. मग आहार, दिनचर्या, शास्त्रीय उपचार आणि तुमच्या जीवनात बसतील अशी औषधी योजना आपण एकत्र ठरवतो.",
      steps: [
        { step: "टप्पा १", title: "निदान", desc: "(प्रकृती परीक्षण)" },
        { step: "टप्पा २", title: "वैयक्तिक", desc: "उपचार योजना" },
        { step: "टप्पा ३", title: "उपचार व शुद्धी", desc: "(पंचकर्म)" },
      ],
    },
    doshas: {
      label: "तुमची प्रकृती जाणून घ्या",
      headingStart: "तीन",
      headingEm: "दोष",
      headingEnd: "तुमचे जगणे, खाणे, झोप आणि बरे होण्याची लय घडवतात.",
      description:
        "प्रत्येक शरीर वात, पित्त आणि कफ यांच्या वेगळ्या मिश्रणातून बनलेले असते. तुमची प्रकृती समजणे ही नैसर्गिक वाटणाऱ्या दिनचर्येची पहिली पायरी आहे.",
      ctaTitle: "सध्या तुमच्या आयुष्यावर कोणता दोष प्रभाव टाकतोय?",
      ctaText:
        "तुमचा प्रमुख दोष ओळखा - थकवा, दाह किंवा अस्थिरता का जाणवते ते समजा - आणि संतुलनासाठी वैयक्तिक मार्गदर्शन मिळवा.",
      ctaTags: ["त्वचा", "पचन", "झोप", "हार्मोन्स", "ऊर्जा"],
      items: [
        {
          name: "कफ",
          subtitle: "पृथ्वी आणि जल",
          qualities: ["जड", "मंद", "स्थिर", "थंड", "स्निग्ध"],
          desc: "कफ प्रकृती शांत, विचारशील आणि प्रेमळ असते. कफ स्थैर्य, ताकद आणि जीवनाचा पाया देतो.",
        },
        {
          name: "पित्त",
          subtitle: "अग्नी आणि ऊर्जा",
          qualities: ["उष्ण", "हलके", "तीव्र", "तीक्ष्ण", "आम्ल"],
          desc: "पित्त रूपांतरण आणि चयापचय नियंत्रित करते. तीक्ष्ण बुद्धी, चांगले पचन आणि उत्साही वृत्ती ही याची लक्षणे.",
        },
        {
          name: "वात",
          subtitle: "वायू आणि आकाश",
          qualities: ["हलके", "थंड", "कोरडे", "चल", "सूक्ष्म"],
          desc: "वात ही हालचालीची ऊर्जा आहे - संतुलनात असताना सर्जनशील, चपळ, उत्साही आणि जीवंत.",
        },
      ],
    },
    services: {
      label: "विशेष उपचार क्षेत्रे",
      heading: "आपण एकत्र कोणत्या गोष्टींवर काम करतो.",
      description:
        "प्रत्येक योजना सखोल नाडी परीक्षण आणि मोकळ्या संवादाने सुरू होते. उपचार शरीरानुसार ठरतात - ठराविक साच्यानुसार नाही.",
      cards: [
        {
          title: "पंचकर्म",
          desc: "शास्त्रीय पाच टप्प्यांची शुद्धी प्रक्रिया. ही खोलवरची शुद्धी तुमच्या प्रकृतीनुसार आखली जाते, दोष आणि साचलेले विषद्रव्य कमी करून शरीराची नैसर्गिक उपचारशक्ती वाढवते.",
          tags: ["वमन", "विरेचन", "बस्ती", "नस्य", "रक्तमोक्षण"],
        },
        {
          title: "दीर्घकालीन वेदना",
          desc: "कंबरदुखी, सांध्यांचा कडकपणा, सायटिका, फ्रोजन शोल्डर आणि मायग्रेनसाठी शास्त्रीय उपचार, मॅन्युअल थेरपी आणि वैयक्तिक औषधी योजना.",
          tags: ["कटी बस्ती", "अभ्यंग", "जानू बस्ती", "औषधी योजना"],
        },
        {
          title: "त्वचा आणि केसांची काळजी",
          desc: "फक्त बाह्य उपचारांऐवजी पचन आणि हार्मोन्सपासून मूळ कारणांवर लक्ष देणारी उपचारपद्धती.",
          tags: ["मुरूम", "पिगमेंटेशन", "एक्झिमा", "केसगळती"],
        },
        {
          title: "जीवनशैली मार्गदर्शन",
          desc: "तुमच्या रोजच्या दिनचर्येला अनुरूप, दीर्घकालीन आरोग्यासाठी टिकाऊ जीवनशैली चिकित्सा.",
          tags: ["दिनचर्या", "ऋतुचर्या", "झोप", "ताण काळजी"],
        },
      ],
    },
    products: {
      label: "सुवर्ण प्राशन",
      heading: "उद्देशपूर्वक तयार केलेली आरोग्यदायी योगे.",
      description:
        "शास्त्रीय चूर्ण, हर्बल क्रीम आणि क्लेंझर - पारंपरिक पद्धतींवर आधारित, तुमच्या प्रकृतीनुसार सुचवलेले.",
      enquire: "चौकशी करा ->",
      imageAlt: "सुवर्ण प्राशन उत्पादने",
      enquireWhatsapp: "व्हॉट्सअॅपवर चौकशी करा ->",
      items: [
        { title: "हर्बल चूर्ण", subtitle: "पचन आणि आरोग्यासाठी शास्त्रीय चूर्ण" },
        { title: "शतावरी कल्प", subtitle: "स्त्रियांचे आरोग्य - हार्मोन संतुलन" },
        { title: "हर्बल साबण", subtitle: "नैसर्गिक त्वचा काळजी - आयुर्वेदिक वनौषधी" },
      ],
    },
    journal: {
      label: "आरोग्य लेख",
      heading: "क्लिनिकमधील टिप्स आणि आरोग्यविषयक नोंदी.",
      readAll: "सर्व वाचा",
      articles: [
        {
          tag: "त्वचा",
          readTime: "५ मिनिटे",
          title: "डब्याबाहेरची आयुर्वेदिक त्वचा काळजी",
          excerpt:
            "खरे त्वचेचे आरोग्य पचनातून सुरू होते. तुमचे पचन, झोप आणि दोष चेहऱ्यावर कसे दिसतात ते जाणून घ्या.",
        },
        {
          tag: "हार्मोन्स",
          readTime: "७ मिनिटे",
          title: "पीसीओएससाठी सौम्य आयुर्वेदिक मार्ग",
          excerpt:
            "मुळाशी पित्त-कफ असणारी अवस्था - वनौषधी, आहारबदल आणि दिनचर्येतून हार्मोन संतुलन कसे साधता येते.",
        },
        {
          tag: "शुद्धी",
          readTime: "६ मिनिटे",
          title: "७ दिवसांच्या डिटॉक्सची शांत ताकद",
          excerpt:
            "पंचकर्म नेमके काय करते आणि ऋतूनुसार सौम्य शुद्धी वर्षभर शरीराला हलके कसे वाटू देते.",
        },
        {
          tag: "दिनचर्या",
          readTime: "४ मिनिटे",
          title: "दिनचर्या: खरोखर उपयोगी सकाळची पद्धत",
          excerpt:
            "गंडुष, जिभेची स्वच्छता, कोमट पाणी - योग्य क्रमाने केल्यास या साध्या गोष्टी ऊर्जेत बदल घडवतात.",
        },
        {
          tag: "पचन",
          readTime: "६ मिनिटे",
          title: "तुमचे पोट बोलत आहे. तुम्ही ऐकता का?",
          excerpt:
            "फुगणे, अॅसिडिटी, भूक अनियमित होणे - आयुर्वेद यांना अग्नीचे संदेश मानतो.",
        },
        {
          tag: "झोप",
          readTime: "५ मिनिटे",
          title: "पहाटे ३ वाजता जाग का येते?",
          excerpt:
            "आयुर्वेदिक घड्याळानुसार २-४ ही वाताची वेळ आहे. याचा मज्जासंस्थेशी काय संबंध आहे आणि काय मदत करते.",
        },
      ],
    },
    testimonials: {
      label: "रुग्णांचे अनुभव",
      headingStart: "खरे शरीर.",
      headingEm: "खरा बदल.",
      items: [
        {
          initials: "AR",
          name: "ऐश्वर्या आर.",
          label: "त्वचा आणि पचन - पुणे",
          quote:
            '"डॉ. प्राजक्ता यांच्या योजनेनंतर सहा महिन्यांत माझे मुरूम जवळजवळ गेले. त्या खरंच ऐकून घेतात - हे दुर्मिळ आहे."',
        },
        {
          initials: "SM",
          name: "स्नेहा एम.",
          label: "दीर्घकालीन वेदना - मुंबई",
          quote:
            '"मी पाठदुखीसाठी आले आणि जीवनशैलीत बदल घेऊन गेले. कटी बस्तीचा खूप फायदा झाला. ऋतुचर्येच्या सल्ल्यामुळे वर्षभर संतुलन राहते."',
        },
        {
          initials: "PK",
          name: "प्रिया के.",
          label: "पीसीओएस - ऑनलाइन सल्ला",
          quote:
            '"पीसीओएसमुळे अनेक औषधे सुरू होती. पंचकर्म कोर्सनंतर अनेक वर्षांनी माझी पाळी नियमित झाली."',
        },
      ],
    },
    footer: {
      label: "संवादाची सुरुवात करा",
      heading: "सल्लामसलत बुक करा.",
      description:
        "संबंधित क्लिनिकमध्ये आणि ऑनलाइन सल्लामसलत उपलब्ध. तुम्हाला काय त्रास आहे ते थोडक्यात सांगा; वेळ ठरवण्यासाठी आम्ही एका दिवसात संपर्क करू.",
      contactLabels: { whatsapp: "व्हॉट्सअॅप", email: "ईमेल", clinic: "क्लिनिक" },
      clinic: "पुणे, महाराष्ट्र",
      form: {
        name: "नाव",
        namePlaceholder: "तुमचे पूर्ण नाव",
        email: "ईमेल",
        emailPlaceholder: "you@example.com",
        phone: "फोन",
        phonePlaceholder: "+९१ ...",
        concern: "तुम्हाला कोणत्या गोष्टीसाठी मदत हवी आहे?",
        concernPlaceholder: "तुमच्या त्रासाबद्दल काही ओळी लिहा...",
        submit: "सल्लामसलतीची विनंती करा",
        note: "आम्ही सोमवार ते शनिवार २४ तासांत उत्तर देतो.",
      },
      footerText:
        "शास्त्रीय पंचकर्म परंपरेवर आधारित आयुर्वेदिक काळजी - त्वचा, हार्मोन्स, वेदना आणि दैनंदिन जीवनाच्या लयीसाठी.",
      whatsappPrompt: {
        title: "मार्गदर्शन हवे आहे?",
        text: "डॉक्टरांशी व्हॉट्सअॅपवर संवाद सुरू करा.",
      },
      visit: "भेट द्या",
      reach: "संपर्क",
      rights: "सर्व हक्क राखीव.",
      mantra: "सर्वे भवन्तु सुखिनः",
      mantraMeaning: "सर्वजण रोगमुक्त राहोत.",
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "mr" ? "en" : "mr")),
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used inside LanguageProvider");
  }
  return context;
};
