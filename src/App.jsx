import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const palette = {
  morado: {
    main: "#7936AD",
    soft: "#E3CAFF",
    light: "#EFE3FF",
  },
  naranja: {
    main: "#D34633",
    soft: "#FFC5BD",
    light: "#FFDCDC",
  },
  rosa: {
    main: "#E172B3",
    soft: "#FFCAEB",
    light: "#FFD9EE",
  },
  azul: {
    main: "#52ABD8",
    soft: "#C3E9FC",
    light: "#E1F8FF",
  },
  amarillo: {
    main: "#EFC42E",
    soft: "#FFF2CF",
    light: "#FFF2E1",
  },
  neutrals: {
    pagePink: "#FFF6FB",
    pageSoft: "#FFF8FC",
    dark: "#2F2235",
    text: "#5C4B66",
    white: "#FFFFFF",
  },
};

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sucursales", label: "Sucursales" },
  { id: "franquicia", label: "Únete" },
  { id: "concentrados", label: "Concentrados" },
  { id: "contacto", label: "Contacto" },
];

const branches = [
  {
    city: "Tlaxcala",
    address: "Revolución 17, San Buenaventura Atempa, Tlaxcala",
    subtitle: "Sucursal activa",
    text: "Una presencia que refuerza la identidad visual y la expansión regional de la marca.",
  },
  {
    city: "El Carmen",
    address: "El Carmen",
    subtitle: "Sucursal activa",
    text: "Punto clave para mantener una experiencia de marca reconocible, cálida y consistente.",
  },
  {
    city: "Oaxaca Centro",
    address: "Oaxaca Centro",
    subtitle: "Sucursal activa",
    text: "Ubicación ideal para proyectar a Crep!simo como una propuesta fresca y memorable.",
  },
  {
    city: "Puebla",
    address:
      "Blvrd Circunvalación 1039, Jardines de San Manuel, 72570 Heroica Puebla de Zaragoza, Pue.",
    subtitle: "Sucursal activa",
    text: "Una sede estratégica para fortalecer visibilidad, posicionamiento y crecimiento comercial.",
  },
  {
    city: "San Francisco Telixtlahuaca",
    address: "San Francisco Telixtlahuaca, Oaxaca",
    subtitle: "Sucursal activa",
    text: "Una sucursal que aporta cercanía, identidad local y continuidad a la experiencia Crep!simo.",
  },
];

const featuredPhotos = [
  {
    title: "El Carmen",
    image: "/el carmen.png",
  },
  {
    title: "Bebidas",
    image: "/bebida.png",
  },
  {
    title: "Promociones",
    image: "/promo.png",
  },
];

const concentrates = [
  {
    title: "Concentrados para bebidas",
    text: "Línea de producto propia para sodas italianas, bebidas frías y combinaciones de temporada.",
  },
  {
    title: "Presentación comercial",
    text: "La web puede mostrar beneficios, aplicaciones, formatos y proceso de compra para distribuidores o negocios.",
  },
  {
    title: "Venta de marca",
    text: "No solo se vende el producto; también se vende la estética, la consistencia y la experiencia Crep!simo.",
  },
];

function BrandLogo({ variant = "main", className = "" }) {
  const src = variant === "header" ? "/Logo_minimo.png" : "/Logo.png";

  return <img src={src} alt="Crep!simo" className={className} />;
}

function LiquidDrips() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const layers = [
    {
      color: palette.rosa.main,
      height: 520,
      duration: 20,
      delay: 0,
      opacity: 1,
      pathA:
        "M0 60 C160 20, 320 90, 480 60 C640 30, 800 90, 960 60 C1120 30, 1280 90, 1440 60 L1440 330 C1360 378, 1284 408, 1188 374 C1092 340, 1032 260, 936 260 C836 260, 774 356, 674 372 C570 388, 506 292, 406 292 C308 292, 246 392, 146 408 C64 420, 0 376, 0 360 Z",
      pathB:
        "M0 50 C180 10, 340 80, 500 50 C660 20, 820 80, 980 50 C1140 20, 1300 80, 1440 50 L1440 348 C1362 402, 1270 434, 1174 398 C1074 362, 1012 278, 914 278 C814 278, 748 382, 646 400 C542 418, 476 316, 374 316 C276 316, 212 422, 112 440 C44 452, 0 410, 0 394 Z",
    },
    {
      color: palette.morado.main,
      height: 420,
      duration: 26,
      delay: 2.2,
      opacity: 1,
      pathA:
        "M0 62 C140 30, 300 84, 460 62 C620 40, 780 86, 940 62 C1100 38, 1260 86, 1440 62 L1440 0 C1380 8, 1320 28, 1260 58 C1200 88, 1140 120, 1080 156 C1016 194, 960 238, 902 266 C844 294, 784 310, 724 298 C664 286, 620 254, 564 254 C504 254, 462 298, 404 312 C346 326, 300 302, 244 286 C188 270, 140 286, 92 312 C44 338, 14 354, 0 362 Z",
      pathB:
        "M0 54 C150 20, 310 76, 470 54 C630 32, 790 78, 950 54 C1110 30, 1270 78, 1440 54 L1440 0 C1386 10, 1326 34, 1266 66 C1204 98, 1142 134, 1080 174 C1016 214, 956 262, 896 292 C836 322, 774 340, 712 326 C652 312, 606 278, 550 278 C490 278, 448 324, 390 340 C332 356, 286 330, 230 314 C174 298, 128 316, 82 344 C36 372, 10 386, 0 396 Z",
    },
    {
      color: palette.azul.main,
      height: 360,
      duration: 16,
      delay: 1.2,
      opacity: 1,
      tilt: true,
      pathA:
        "M0 70 C180 30, 360 100, 540 70 C720 40, 900 100, 1080 70 C1260 40, 1380 90, 1440 80 L1440 290 C1360 330, 1248 360, 1136 330 C1020 300, 950 240, 836 240 C720 240, 644 330, 530 350 C412 370, 330 300, 214 300 C108 300, 26 330, 0 340 Z",
      pathB:
        "M0 60 C200 20, 380 90, 560 60 C740 30, 920 90, 1100 60 C1280 30, 1400 80, 1440 70 L1440 310 C1362 350, 1230 390, 1102 350 C974 310, 900 260, 782 260 C664 260, 584 350, 468 370 C350 390, 270 310, 154 310 C62 310, 4 340, 0 350 Z",
    },
    {
      color: palette.amarillo.main,
      height: 650,
      duration: 24,
      delay: 5.5,
      invertMotion: true,
      opacity: 0.96,
      pathA:
        "M0 50 C140 20, 280 70, 420 50 C560 30, 700 70, 840 50 C980 30, 1120 70, 1260 50 C1360 40, 1400 45, 1440 48 L1440 480 C1360 360, 1288 400, 1208 370 C1128 340, 1086 260, 1006 260 C924 260, 864 350, 782 370 C700 390, 638 300, 556 300 C474 300, 416 390, 334 410 C252 430, 190 330, 108 330 C52 330, 12 360, 0 368 Z",
      pathB:
        "M0 40 C160 10, 300 60, 440 40 C580 20, 720 60, 860 40 C1000 20, 1140 60, 1280 40 C1360 30, 1400 35, 1440 38 L1440 520 C1364 390, 1278 430, 1194 400 C1110 370, 1064 280, 980 280 C896 280, 834 380, 750 400 C666 420, 602 320, 518 320 C434 320, 374 420, 290 440 C208 460, 148 350, 72 350 C28 350, 4 380, 0 388 Z",
    },
  ];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: palette.rosa.soft }}
    >
      {layers.map((layer, i) => (
        <motion.div
          key={i}
          className="absolute left-0 w-full"
          style={{
            top: 0,
            height: isMobile ? layer.height * 0.82 : layer.height,
            zIndex: layer.color === palette.amarillo.main ? 1 : i + 2,
            opacity: layer.opacity,
            transform: layer.tilt ? "skewX(-8deg) rotate(-1.5deg)" : "none",
            transformOrigin: "top left",
            overflow: "hidden",
          }}
          initial={{ y: -130 }}
          animate={
            layer.invertMotion
              ? { y: [-20, -60, -30, -130] }
              : { y: [-130, -20, -40, -30] }
          }
          transition={{
            duration: layer.duration,
            delay: layer.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 1440 600"
            className="h-full w-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <motion.path
              fill={layer.color}
              initial={{ d: layer.pathA }}
              animate={{
                d: [layer.pathA, layer.pathB, layer.pathA],
              }}
              transition={{
                duration: layer.duration,
                delay: layer.delay,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 shadow-lg"
        style={{
          border: `1px solid ${palette.morado.light}`,
          backgroundColor: "rgba(255,255,255,0.82)",
        }}
      >
        <button
          onClick={() => setPage("inicio")}
          className="flex items-center rounded-full px-3 py-2"
          style={{ backgroundColor: palette.morado.main }}
        >
          <BrandLogo variant="header" className="h-7 w-auto md:h-8" />
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          style={{ color: palette.morado.main }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6, rotate: 90 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.6, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6, rotate: -90 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className="rounded-full px-4 py-2 text-sm font-semibold transition"
              style={
                page === item.id
                  ? {
                      backgroundColor: palette.morado.light,
                      color: palette.neutrals.dark,
                    }
                  : {
                      color: palette.neutrals.text,
                    }
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] p-4 shadow-lg md:hidden"
            style={{
              border: `1px solid ${palette.morado.light}`,
              backgroundColor: "rgba(255,255,255,0.9)",
            }}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPage(item.id);
                    setOpen(false);
                  }}
                  className="rounded-full px-4 py-3 text-left text-sm font-semibold transition"
                  style={
                    page === item.id
                      ? {
                          backgroundColor: palette.morado.light,
                          color: palette.neutrals.dark,
                        }
                      : {
                          color: palette.neutrals.text,
                        }
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function FeaturedPhotoCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[2.2rem] bg-white/35 shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-white/50 backdrop-blur-sm transition duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent p-5">
          <p
            className="text-xl font-black text-white drop-shadow"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {item.title}
          </p>
        </div>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <div className="relative" style={{ backgroundColor: palette.rosa.soft }}>
      <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <LiquidDrips />

        <div className="relative z-10 flex min-h-[58vh] flex-col items-center justify-start pt-2 text-center">
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <BrandLogo
                variant="main"
                className="w-[240px] drop-shadow-[0_8px_35px_rgba(0,0,0,0.16)] sm:w-[320px] md:w-[420px] lg:w-[500px]"
              />
            </motion.div>

            <motion.p
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="mt-4 text-base font-semibold uppercase tracking-[0.45em] text-white md:text-xl"
            >
              
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-80 px-6 pb-24 md:-mt-[24rem] md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/90">
              Lo nuevo en Crep!simo
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredPhotos.map((item) => (
              <FeaturedPhotoCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <div
        className="h-24"
        style={{
          background: `linear-gradient(to bottom, ${palette.rosa.soft}, ${palette.neutrals.pageSoft})`,
        }}
      />
    </div>
  );
}

function PageShell({ eyebrow, title, description, children }) {
  return (
    <div
      className="min-h-screen px-6 pb-16 pt-32 md:px-10"
      style={{ backgroundColor: palette.neutrals.pagePink }}
    >
      <div className="mx-auto max-w-7xl">
        <p
          className="text-sm font-bold uppercase tracking-[0.25em]"
          style={{ color: palette.rosa.main }}
        >
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">
          {title}
        </h2>
        <p
          className="mt-5 max-w-3xl text-lg leading-8"
          style={{ color: palette.neutrals.text }}
        >
          {description}
        </p>
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
}

function BranchesPage() {
  const branchPins = [
    {
      city: "Tlaxcala",
      address: "Revolución 17, San Buenaventura Atempa, Tlaxcala",
      top: "56%",
      left: "63%",
    },
    {
      city: "El Carmen",
      address: "El Carmen",
      top: "58%",
      left: "61%",
    },
    {
      city: "Oaxaca Centro",
      address: "Oaxaca Centro",
      top: "68%",
      left: "57%",
    },
    {
      city: "Puebla",
      address:
        "Blvrd Circunvalación 1039, Jardines de San Manuel, 72570 Heroica Puebla de Zaragoza, Pue.",
      top: "60%",
      left: "62%",
    },
    {
      city: "San Francisco Telixtlahuaca",
      address: "San Francisco Telixtlahuaca, Oaxaca",
      top: "66%",
      left: "55%",
    },
  ];

  const [activeBranch, setActiveBranch] = useState(branchPins[0]);

  return (
    <div
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28 md:px-10"
      style={{ backgroundColor: palette.azul.soft }}
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="text-center">
          <BrandLogo
            variant="main"
            className="mx-auto w-[220px] drop-shadow-[0_8px_35px_rgba(0,0,0,0.15)] md:w-[340px]"
          />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-white md:text-base">
            Sucursales
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 xl:grid-cols-[1.45fr_0.75fr]">
          {/* MAPA */}
          <div className="rounded-[2rem] bg-white/40 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-white/50 backdrop-blur-sm md:p-6 lg:p-8">
            <div className="relative mx-auto w-full max-w-[980px] xl:max-w-[1100px]">
              <img
                src="/mx.svg"
                alt="Mapa de México con sucursales de Crep!simo"
                className="block h-auto w-full"
              />

              {/* SOLO UN PIN: el activo */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: activeBranch.top, left: activeBranch.left }}
              >
                <div className="relative">
                  <div
                    className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] md:text-sm"
                    style={{ backgroundColor: palette.naranja.main }}
                  >
                    {activeBranch.city}
                  </div>

                  <div
                    className="absolute left-1/2 top-full h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45"
                    style={{ backgroundColor: palette.naranja.main }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* LISTA */}
          <div className="rounded-[2rem] bg-white/55 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-white/60 backdrop-blur-sm md:p-6">
            <div className="mb-4">
              <p
                className="text-sm font-bold uppercase tracking-[0.24em]"
                style={{ color: palette.morado.main }}
              >
                Ubicaciones
              </p>
              <h2 className="mt-2 text-2xl font-black text-zinc-900 md:text-3xl">
                Nuestras sucursales
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {branchPins.map((branch, index) => {
                const isActive = activeBranch.city === branch.city;

                return (
                  <button
                    key={branch.city}
                    type="button"
                    onClick={() => setActiveBranch(branch)}
                    className="w-full rounded-[1.6rem] p-4 text-left transition duration-200"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${palette.morado.light} 0%, ${palette.azul.light} 100%)`
                        : "rgba(255,255,255,0.72)",
                      border: `1px solid ${
                        isActive ? palette.morado.soft : "rgba(255,255,255,0.7)"
                      }`,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full"
                        style={{ backgroundColor: palette.naranja.main }}
                      />
                      <div>
                        <p className="text-base font-black text-zinc-900 md:text-lg">
                          {index + 1}. {branch.city}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-zinc-700">
                          {branch.address}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FranchisePage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:px-10"
      style={{ backgroundColor: palette.azul.light }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_38%)]" />
      <div className="absolute inset-x-0 top-0 h-56 overflow-hidden opacity-90">
        <svg viewBox="0 0 1440 260" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M0 42 C180 18, 340 82, 500 48 C660 14, 820 82, 980 48 C1140 14, 1300 74, 1440 42 L1440 0 L0 0 Z"
            fill={palette.amarillo.main}
          />
          <path
            d="M0 74 C160 44, 322 104, 484 76 C646 48, 804 110, 966 80 C1128 50, 1288 106, 1440 78 L1440 0 L0 0 Z"
            fill={palette.naranja.main}
            opacity="0.96"
          />
          <path
            d="M0 28 C210 0, 390 66, 572 38 C754 10, 936 68, 1118 38 C1288 10, 1388 40, 1440 28 L1440 0 L0 0 Z"
            fill={palette.morado.soft}
            opacity="0.98"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p
            className="text-sm font-bold uppercase tracking-[0.28em]"
            style={{ color: palette.morado.main }}
          >
            
          </p>

          <div className="mt-4 flex justify-center">
            <BrandLogo
              variant="main"
              className="w-[220px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:w-[340px]"
            />
          </div>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.45em] text-white md:text-xl">
            Expansión
          </p>

          <p
            className="mx-auto mt-8 max-w-3xl text-base leading-8 md:text-lg"
            style={{ color: palette.neutrals.text }}
          >
            Descubre cómo una franquicia Crep!simo puede proyectar una imagen fresca, cálida y memorable, con una identidad visual consistente y fácil de replicar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {branches.map((branch, index) => (
            <article
              key={branch.city}
              className="overflow-hidden rounded-[2.2rem] bg-white/55 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-white/70 backdrop-blur-sm"
            >
              <div
                className="relative h-44 overflow-hidden"
                style={{
                  background:
                    index % 3 === 0
                      ? `linear-gradient(135deg, ${palette.azul.main} 0%, ${palette.morado.soft} 52%, ${palette.amarillo.main} 100%)`
                      : index % 3 === 1
                      ? `linear-gradient(135deg, ${palette.amarillo.main} 0%, ${palette.naranja.main} 42%, ${palette.azul.soft} 100%)`
                      : `linear-gradient(135deg, ${palette.morado.soft} 0%, ${palette.azul.main} 52%, ${palette.rosa.soft} 100%)`,
                }}
              >
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/25 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-700 backdrop-blur-sm">
                  {branch.subtitle}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-black tracking-tight text-zinc-900">{branch.city}</h3>
                <p
                  className="mt-3 text-sm font-semibold leading-6"
                  style={{ color: palette.morado.main }}
                >
                  {branch.address}
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{branch.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConcentratesPage() {
  return (
    <PageShell
      eyebrow="Concentrados"
      title="Una línea de producto que también comunica marca"
      description="La sección de concentrados puede vender el producto, mostrar sus aplicaciones y reforzar la estética propia de Crep!simo con una presentación visual clara y atractiva."
    >
      <div className="mb-10 flex justify-center">
        <BrandLogo variant="main" className="w-[180px] md:w-[260px]" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {concentrates.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] ring-1 backdrop-blur-sm"
            style={{
              background:
                index === 0
                  ? `linear-gradient(180deg, ${palette.naranja.soft} 0%, ${palette.amarillo.soft} 100%)`
                  : index === 1
                  ? `linear-gradient(180deg, ${palette.azul.light} 0%, ${palette.morado.light} 100%)`
                  : `linear-gradient(180deg, ${palette.rosa.soft} 0%, ${palette.naranja.light} 100%)`,
              borderColor: "rgba(255,255,255,0.6)",
            }}
          >
            <h3
              className="text-2xl font-black"
              style={{ color: palette.neutrals.dark }}
            >
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7" style={{ color: palette.neutrals.text }}>
              {item.text}
            </p>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contacto"
      title="La última página debe convertir la atención en una acción"
      description="Aquí irían los botones reales a WhatsApp, formulario para franquicias, solicitudes de mayoreo y enlaces a redes sociales."
    >
      <div className="mb-10 flex justify-center">
        <BrandLogo variant="main" className="w-[180px] md:w-[260px]" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <h3 className="text-2xl font-black text-zinc-900">Contacto comercial</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            Ideal para prospectos interesados en franquicia, colaboración comercial o compra de concentrados.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="rounded-full px-6 py-3 text-sm font-bold text-white"
              style={{ backgroundColor: palette.rosa.main }}
            >
              WhatsApp
            </button>
            <button className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-bold text-zinc-900">
              Solicitar información
            </button>
          </div>
        </div>

        <div
          className="rounded-[2rem] p-8 text-white shadow-xl"
          style={{ backgroundColor: palette.azul.main }}
        >
          <h3 className="text-2xl font-black">Redes y presencia digital</h3>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-white/95">
            <div className="rounded-[1.5rem] bg-white/15 p-4">Instagram de la marca</div>
            <div className="rounded-[1.5rem] bg-white/15 p-4">Ubicaciones en mapa</div>
            <div className="rounded-[1.5rem] bg-white/15 p-4">Formulario para franquicias</div>
            <div className="rounded-[1.5rem] bg-white/15 p-4">Solicitud de catálogo de concentrados</div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export default function CrepisimoWebsiteConcept() {
  const [page, setPage] = useState("inicio");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: palette.neutrals.pageSoft }}
    >
      <Header page={page} setPage={setPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {page === "inicio" && <HomePage />}
          {page === "sucursales" && <BranchesPage />}
          {page === "franquicia" && <FranchisePage />}
          {page === "concentrados" && <ConcentratesPage />}
          {page === "contacto" && <ContactPage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}