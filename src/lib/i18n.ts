"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero: {
        title: "Build Beautiful Interfaces Effortlessly",
        subtitle:
          "A simple, elegant component library for modern frontend developers.",
        cta: "Get Started",
      },
      featuresTitle: "Our Features",
      learnMore: "Learn More",
      cards: {
        1: {
          title: "Web Development",
          description:
            "Build modern, responsive websites with the latest technologies and best practices.",
        },
        2: {
          title: "Mobile App Development",
          description:
            "Create fast, scalable mobile apps for Android and iOS using Flutter or React Native.",
        },
        3: {
          title: "UI/UX Design",
          description:
            "Design intuitive and beautiful user interfaces that enhance the user experience.",
        },
        4: {
          title: "Backend Development",
          description:
            "Develop robust server-side applications with Node.js, Express, and scalable databases.",
        },
        5: {
          title: "API Integration",
          description:
            "Seamlessly integrate third-party APIs and services to extend app functionality.",
        },
        6: {
          title: "Maintenance & Support",
          description:
            "Get reliable post-launch support, performance optimization, and regular updates.",
        },
      },
      about: {
        title: "About Us",
        description:
          "We are a team of passionate developers building an elegant and easy-to-use component library. Our goal is to simplify UI development while keeping things beautiful and performant.",
      },
      cta: {
        title: "Ready to take your project to the next level?",
        description:
          "Contact us today and let's build something amazing together.",
        contactButton: "Get in Touch",
        servicesButton: "View Services",
      },
      footer: {
        companyTitle: "Your Company",
        companyDesc:
          "Building modern, scalable applications with love and expertise.",
        newsletterTitle: "Subscribe to our newsletter",
        newsletterPlaceholder: "Enter your email",
        subscribe: "Subscribe",
        rights: "All rights reserved.",
        madeWith: "Made with ❤️ by Mastoora Turkmen",
        sections: {
          Company: "Company",
          Services: "Services",
          Support: "Support",
        },
        links: {
          About: "About",
          Careers: "Careers",
          Blog: "Blog",
          Contact: "Contact",
          "Web Development": "Web Development",
          "Mobile Apps": "Mobile Apps",
          "UI/UX Design": "UI/UX Design",
          "API Integration": "API Integration",
          "Help Center": "Help Center",
          "Privacy Policy": "Privacy Policy",
          "Terms of Service": "Terms of Service",
        },
      },
    },
  },
  ar: {
    translation: {
      hero: {
        title: "بناء واجهات جميلة بسهولة",
        subtitle: "مكتبة مكونات بسيطة وأنيقة للمطورين الحديثين.",
        cta: "ابدأ الآن",
      },
      featuresTitle: "مميزاتنا",
      learnMore: "تعرف أكثر",
      cards: {
        1: {
          title: "تطوير الويب",
          description:
            "بناء مواقع حديثة ومتجاوبة باستخدام أحدث التقنيات وأفضل الممارسات.",
        },
        2: {
          title: "تطوير تطبيقات الهاتف المحمول",
          description:
            "إنشاء تطبيقات هاتف سريعة وقابلة للتوسع لنظامي Android و iOS باستخدام Flutter أو React Native.",
        },
        3: {
          title: "تصميم واجهة المستخدم وتجربة المستخدم",
          description: "تصميم واجهات مستخدم بديهية وجميلة تعزز تجربة المستخدم.",
        },
        4: {
          title: "تطوير الخادم الخلفي",
          description:
            "تطوير تطبيقات خوادم قوية باستخدام Node.js و Express وقواعد بيانات قابلة للتوسع.",
        },
        5: {
          title: "دمج واجهات برمجة التطبيقات",
          description:
            "دمج خدمات وواجهات برمجة التطبيقات الخارجية بسلاسة لتوسيع وظائف التطبيق.",
        },
        6: {
          title: "الصيانة والدعم",
          description:
            "الحصول على دعم موثوق بعد الإطلاق، وتحسين الأداء، والتحديثات المنتظمة.",
        },
      },
      about: {
        title: "معلومات عنا",
        description:
          "نحن فريق من المطورين المتحمسين لبناء مكتبة مكونات سهلة الاستخدام وأنيقة. هدفنا هو تسهيل تطوير واجهات المستخدم مع الحفاظ على الجمال والأداء.",
      },
      cta: {
        title: "هل أنت مستعد لنقل مشروعك إلى المستوى التالي؟",
        description: "تواصل معنا اليوم ولنبتكر شيئًا رائعًا معًا.",
        contactButton: "تواصل معنا",
        servicesButton: "عرض الخدمات",
      },
      footer: {
        companyTitle: "شركتنا",
        companyDesc: "بناء تطبيقات حديثة وقابلة للتوسع بحب وخبرة.",
        newsletterTitle: "اشترك في النشرة البريدية",
        newsletterPlaceholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشترك",
        rights: "جميع الحقوق محفوظة.",
        madeWith: "مصنوع بحب بواسطة مستوره تركمن",
        sections: {
          Company: "الشركة",
          Services: "الخدمات",
          Support: "الدعم",
        },
        links: {
          About: "حول",
          Careers: "وظائف",
          Blog: "مدونة",
          Contact: "اتصال",
          "Web Development": "تطوير الويب",
          "Mobile Apps": "تطبيقات الهاتف",
          "UI/UX Design": "تصميم واجهة المستخدم",
          "API Integration": "دمج API",
          "Help Center": "مركز المساعدة",
          "Privacy Policy": "سياسة الخصوصية",
          "Terms of Service": "شروط الخدمة",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
