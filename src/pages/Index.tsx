import { useState } from "react";
import { Instagram, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const translations = {
  ro: {
    brand: "Doudou & Compagnie",
    tagline: "Creatori de momente tandre",
    heading: "Lansarea proiectului va avea loc în curând",
    subtitle: "Pregătim ceva special pentru cei mici. Rămâneți alături de noi!",
    instagram: "Instagram",
    telegram: "Telegram",
    langSwitch: "RU",
  },
  ru: {
    brand: "Doudou & Compagnie",
    tagline: "Создатели нежных моментов",
    heading: "Запуск проекта состоится в ближайшее время",
    subtitle: "Мы готовим что-то особенное для малышей. Оставайтесь с нами!",
    instagram: "Instagram",
    telegram: "Telegram",
    langSwitch: "RO",
  },
};

const INSTAGRAM_URL =
  "https://www.instagram.com/doudouetcompagniemd?igsh=MTZqNzM0aTN0NTBxcg==";
const TELEGRAM_URL = "https://t.me/+37362112517";

const Index = () => {
  const [lang, setLang] = useState<"ro" | "ru">("ro");
  const t = translations[lang];

  const toggleLang = () => setLang(lang === "ro" ? "ru" : "ro");

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm" />

      {/* Language toggle */}
      <button
        onClick={toggleLang}
        className="absolute right-6 top-6 z-30 rounded-full border border-border bg-card/80 px-4 py-2 font-sans text-sm font-semibold tracking-wide text-foreground backdrop-blur-sm transition-all hover:bg-card"
      >
        {lang === "ro" ? "🇷🇺" : "🇲🇩"} {t.langSwitch}
      </button>

      {/* Content */}
      <div className="relative z-20 flex max-w-2xl flex-col items-center px-6 text-center">
        {/* Brand */}
        <h2 className="mb-2 font-serif text-lg italic tracking-wide text-muted-foreground">
          {t.brand}
        </h2>
        <p className="mb-10 text-sm text-muted-foreground">{t.tagline}</p>

        {/* Main heading */}
        <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
          {t.heading}
        </h1>

        <p className="mb-12 max-w-md text-base text-muted-foreground">
          {t.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-sans text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:opacity-90"
          >
            <Instagram className="h-5 w-5" />
            {t.instagram}
          </a>
          <div className="inline-flex items-center gap-3 rounded-full border border-primary bg-transparent px-8 py-4">
            <Phone className="h-5 w-5 text-foreground" />
            <span className="font-sans text-sm font-semibold tracking-wide text-foreground">+373 621 12 517</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 z-20 font-sans text-xs text-muted-foreground">
        © 2026 Doudou & Compagnie Moldova
      </p>
    </div>
  );
};

export default Index;
