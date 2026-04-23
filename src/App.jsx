import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Plus, Minus, Trash2, CreditCard } from "lucide-react";


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
  { id: "productos", label: "Productos" },
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
    
    image: "/el carmen.png",
    href: "https://www.instagram.com/crepisimo.mx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    
    image: "/bebida.png",
    href: "https://www.instagram.com/crepisimo.mx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    
    image: "/promo.png",
    href: "https://www.instagram.com/crepisimo.mx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

const productsCatalog = [
  {
    id: 1,
    title: "Concentrado frutos rojos",
    category: "Concentrados",
    price: 189,
    image: "/concentrado1.png",
    accent: palette.rosa.light,
    description: "Ideal para sodas italianas, bebidas frías y combinaciones de temporada.",
  },
  {
    id: 2,
    title: "Concentrado mango tropical",
    category: "Concentrados",
    price: 195,
    image: "/concentrado3.png",
    accent: palette.amarillo.light,
    description: "Perfil dulce y fresco para bebidas llamativas con identidad visual fuerte.",
  },
  {
    id: 3,
    title: "Concentrado blueberry",
    category: "Concentrados",
    price: 205,
    image: "/concentrado2.png",
    accent: palette.azul.light,
    description: "Sabor vibrante para menús creativos y propuestas de temporada.",
  },
  {
    id: 4,
    title: "Playera Crep!simo",
    category: "Merch",
    price: 299,
    image: "/playera.png",
    accent: palette.morado.light,
    description: "Merch de marca con presencia visual coherente con la identidad Crep!simo.",
  },
  {
    id: 5,
    title: "Vaso edición día del niño",
    category: "Merch",
    price: 129,
    image: "/vaso_nino.png",
    accent: palette.naranja.light,
    description: "Pieza visual para reforzar la experiencia de marca dentro y fuera del local.",
  },

  {
    id: 6,
    title: "Vaso edición Guelaguetza",
    category: "Merch",
    price: 129,
    image: "/vaso2.png",
    accent: palette.naranja.light,
    description: "Pieza visual para reforzar la experiencia de marca dentro y fuera del local.",
  }

  
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
        {layers.map((layer, i) => {
        const isPurple = layer.color === palette.morado.main;

        return (
          <motion.div
            key={i}
            className="absolute left-0 w-full"
            style={{
              top: 0,
              height: isMobile ? layer.height * 0.82 : layer.height,
              zIndex:
                layer.color === palette.amarillo.main
                  ? 1
                  : layer.color === palette.azul.main
                  ? 3
                  : layer.color === palette.rosa.main
                  ? 2
                  : layer.color === palette.morado.main
                  ? 5
                  : 4,
              opacity: layer.opacity,
              transform: layer.tilt ? "skewX(-8deg) rotate(-1.5deg)" : "none",
              transformOrigin: "top left",
              overflow: "hidden",
            }}
            initial={{ y: -170 }}
            animate={
              isPurple
                ? { y: [-190, -130, -120, -90] }
                : layer.invertMotion
                ? { y: [-140, -10, -50, -20] }
                : { y: [-130, -40, -130, -60] }
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
                animate={{ d: [layer.pathA, layer.pathB, layer.pathA] }}
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
        );
})}
    </div>
  );
}

function StaticDripSingle() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: palette.rosa.soft }}
    >
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: "340px",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1440 340"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            fill={palette.rosa.main}
            d="M0,0 L1440,0 L1440,145 C1320,185 1180,190 1050,165 C900,136 790,78 640,88 C500,97 398,176 260,235 C170,273 84,289 0,262 Z"
          />
        </svg>
      </div>
    </div>
  );
}
function StaticDripSingleA() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: palette.azul.soft }}
    >
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: "340px",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1440 340"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            fill={palette.azul.main}
            d="M0,0 L1440,0 L1440,145 C1320,185 1180,190 1050,165 C900,136 790,78 640,88 C500,97 398,176 260,235 C170,273 84,289 0,262 Z"
          />
        </svg>
      </div>
    </div>
  );
}

function Header({ page, setPage, cartCount }) {
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

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2">
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

          <button
            onClick={() => setPage("carrito")}
            className="relative flex h-11 w-11 items-center justify-center rounded-full"
            style={{ backgroundColor: palette.azul.light, color: palette.morado.main }}
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span
                className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[11px] font-bold text-white"
                style={{ backgroundColor: palette.naranja.main }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
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
  const content = (
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

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
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
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-80 px-6 pb-24 md:-mt-[24rem] md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-black/90">
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
  const branches = [
    {
      city: "Tlaxcala",
      address: "Revolución 17, San Buenaventura Atempa, Tlaxcala",
      mapQuery:
        "Revolución 17, San Buenaventura Atempa, Tlaxcala",
    },
    {
      city: "Puebla",
      address:
        "Blvrd Circunvalación 1039, Jardines de San Manuel, Puebla",
      mapQuery:
        "Blvrd Circunvalación 1039, Jardines de San Manuel, Puebla",
    },
    {
      city: "Oaxaca Centro",
      address: "Oaxaca Centro, Oaxaca",
      mapQuery: "Oaxaca Centro, Oaxaca",
    },
    {
      city: "El Carmen",
      address: "El Carmen, Tlaxcala",
      mapQuery: "El Carmen, Tlaxcala",
    },
    {
      city: "San Francisco Telixtlahuaca",
      address: "San Francisco Telixtlahuaca, Oaxaca",
      mapQuery: "San Francisco Telixtlahuaca, Oaxaca",
    },
  ];

  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: palette.azul.soft }}
    >
      {/* FONDO */}
      <div className="absolute inset-0 z-0">
        <StaticDripSingleA />
        fill
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 px-6 pb-20 pt-28 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">

            {/* IZQUIERDA — LISTA */}
            <div className="rounded-[2.4rem] bg-white/90 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.08)] backdrop-blur-sm">

              <div className="mb-6">
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
                {branches.map((branch, index) => {
                  const isActive = activeBranch.city === branch.city;

                  return (
                    <button
                      key={branch.city}
                      onClick={() => setActiveBranch(branch)}
                      className="w-full rounded-[1.6rem] p-4 text-left transition"
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${palette.morado.light} 0%, ${palette.azul.light} 100%)`
                          : "rgba(255,255,255,0.72)",
                      }}
                    >
                      <p className="font-black text-zinc-900">
                        {index + 1}. {branch.city}
                      </p>

                      <p className="mt-1 text-sm text-zinc-600">
                        {branch.address}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DERECHA — MAPA */}
            <div className="overflow-hidden rounded-[2.4rem] bg-white shadow-[0_20px_55px_rgba(0,0,0,0.08)]">

              <div className="p-6 pb-4">
                <p
                  className="text-sm font-bold uppercase tracking-[0.22em]"
                  style={{ color: palette.azul.main }}
                >
                  Ubicación
                </p>

                <h3 className="mt-2 text-xl font-black text-zinc-900">
                  {activeBranch.city}
                </h3>
              </div>

              <div className="h-[520px] w-full">
                <iframe
                  key={activeBranch.city}
                  title={`Mapa de ${activeBranch.city}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    activeBranch.mapQuery
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
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
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: palette.rosa.soft }}
    >
      <div className="absolute inset-0">
        <StaticDripSingle />
      </div>

      <div className="relative z-10 px-6 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <section className="text-center">
            <h1
              className="font-crepisimo mx-auto max-w-5xl text-[2.6rem] text-white md:text-[4.5rem]"
              style={{
                fontWeight: 400,
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
              }}
            >
              Lleva Crep!simo
              <br />
              a tu ciudad
            </h1>
          </section>

          <section className="mt-14 grid items-stretch gap-10 lg:grid-cols-2">
            <div className="flex h-full flex-col">
              <div className="max-w-xl">
                <p
                  className="text-sm font-bold uppercase tracking-[0.22em]"
                  style={{ color: palette.morado.main }}
                >
                  La oportunidad
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-tight text-zinc-900 md:text-4xl">
                  Abre tu propia sucursal Crep!simo
                </h2>

                <p
                  className="mt-5 text-base leading-8 md:text-lg"
                  style={{ color: palette.neutrals.text }}
                >
                  Una marca lista para crecer, con imagen fuerte, productos atractivos y una experiencia que conecta desde el primer momento.
                </p>
              </div>

              <div className="mt-auto overflow-hidden rounded-[2.4rem] shadow-[0_22px_55px_rgba(0,0,0,0.10)]">
                <img
                  src="/sucursal.png"
                  alt="Sucursal Crep!simo"
                  className="h-[360px] w-full object-cover md:h-[520px]"
                />
              </div>
            </div>

            <div className="flex h-full flex-col rounded-[2.4rem] bg-white/92 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-8">
              <p
                className="text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: palette.naranja.main }}
              >
                Solicita información
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-zinc-900 md:text-3xl">
                Déjanos tus datos
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
                Compártenos tu información y te contactaremos.
              </p>

              <form className="mt-8 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-[1.2rem] border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="w-full rounded-[1.2rem] border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full rounded-[1.2rem] border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  className="w-full rounded-[1.2rem] border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full rounded-[1.2rem] border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                />

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  style={{ backgroundColor: palette.morado.main }}
                >
                  Enviar información
                </button>
              </form>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4v-2.9h2.4V9.6c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/crepisimo.mx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white transition hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 3.2A4.8 4.8 0 1 0 12 17a4.8 4.8 0 0 0 0-9.6zm0 2A2.8 2.8 0 1 1 12 15a2.8 2.8 0 0 1 0-5.6zm4.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
                  </svg>
                </a>

                <a
                  href="mailto:contacto@crepisimo.com"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:scale-105"
                  style={{ backgroundColor: palette.naranja.main }}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                    <path d="M2 4h20v16H2V4zm10 7L4 6v12h16V6l-8 5z" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <article
      className="overflow-hidden rounded-[2rem] shadow-[0_20px_55px_rgba(0,0,0,0.07)] ring-1 ring-white/70 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(255,255,255,0.78)" }}
    >
      <div
        className="relative aspect-[4/3] overflow-hidden p-4"
        style={{ backgroundColor: product.accent }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span
            className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]"
            style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              color: palette.neutrals.dark,
            }}
          >
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-black text-zinc-900">{product.title}</h3>
        <p className="mt-3 text-sm leading-7" style={{ color: palette.neutrals.text }}>
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-xl font-black" style={{ color: palette.morado.main }}>
            ${product.price}
          </p>

          <button
            onClick={() => onAdd(product)}
            className="rounded-full px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
            style={{ backgroundColor: palette.morado.main }}
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductsPage({ cart, setCart, setPage }) {
  const [category, setCategory] = useState("Todos");

  const categories = ["Todos", "Concentrados", "Merch"];

  const filteredProducts =
    category === "Todos"
      ? productsCatalog
      : productsCatalog.filter((product) => product.category === category);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div
      className="min-h-screen px-6 pb-16 pt-32 md:px-10"
      style={{
        background: `linear-gradient(180deg, ${palette.neutrals.pageSoft} 0%, ${palette.amarillo.light} 100%)`,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p
            className="text-sm font-bold uppercase tracking-[0.26em]"
            style={{ color: palette.naranja.main }}
          >
            Tienda online
          </p>

          <h1 className="mt-4 text-4xl font-crepisimo tracking-tight text-zinc-900 md:text-6xl">
            Productos Crep!simo
          </h1>

          
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((item) => {
              const isActive = category === item;

              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className="rounded-full px-5 py-3 text-sm font-bold transition"
                  style={{
                    backgroundColor: isActive ? palette.morado.main : "rgba(255,255,255,0.8)",
                    color: isActive ? palette.neutrals.white : palette.neutrals.dark,
                    border: `1px solid ${isActive ? palette.morado.main : palette.morado.light}`,
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setPage("carrito")}
            className="rounded-full px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
            style={{ backgroundColor: palette.naranja.main }}
          >
            Ver carrito
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CartPage({ cart, setCart }) {
  const updateQuantity = (id, type) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: type === "inc" ? item.quantity + 1 : item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  const shipping = cart.length > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div
      className="min-h-screen px-6 pb-16 pt-32 md:px-10"
      style={{
        background: `linear-gradient(180deg, ${palette.neutrals.pageSoft} 0%, ${palette.azul.light} 100%)`,
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p
            className="text-sm font-bold uppercase tracking-[0.26em]"
            style={{ color: palette.morado.main }}
          >
            Tu carrito
          </p>

          <h1 className="mt-4 text-4xl font-crepisimo tracking-tight text-zinc-900 md:text-6xl">
            Resumen de compra
          </h1>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-4">
            {cart.length === 0 ? (
              <div
                className="rounded-[1.8rem] p-6 text-sm leading-7"
                style={{ backgroundColor: "rgba(255,255,255,0.85)", color: palette.neutrals.text }}
              >
                Aún no has agregado productos.
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.8rem] bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[1.2rem] p-2"
                      style={{ backgroundColor: item.accent }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-lg font-black text-zinc-900">{item.title}</p>
                          <p className="mt-1 text-sm text-zinc-500">
                            ${item.price} c/u
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, "dec")}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="min-w-[24px] text-center text-sm font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, "inc")}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200"
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        <p className="text-base font-bold text-zinc-900">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <aside className="h-fit rounded-[2.2rem] bg-white/92 p-6 shadow-[0_20px_55px_rgba(0,0,0,0.08)] ring-1 ring-white/70 backdrop-blur-sm md:p-7 xl:sticky xl:top-28">
            <div
              className="rounded-[1.8rem] p-5"
              style={{ backgroundColor: palette.neutrals.pageSoft }}
            >
              <div className="flex items-center justify-between text-sm">
                <span style={{ color: palette.neutrals.text }}>Subtotal</span>
                <span className="font-bold text-zinc-900">${subtotal}</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span style={{ color: palette.neutrals.text }}>Envío</span>
                <span className="font-bold text-zinc-900">${shipping}</span>
              </div>
              <div className="mt-4 border-t border-zinc-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-zinc-900">Total</span>
                  <span
                    className="text-2xl font-black"
                    style={{ color: palette.morado.main }}
                  >
                    ${total}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.8rem] bg-white p-5 ring-1 ring-zinc-100">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: palette.azul.light, color: palette.azul.main }}
                >
                  <CreditCard size={18} />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: palette.azul.main }}
                  >
                    Pago con tarjeta
                  </p>
                  <h3 className="text-lg font-black text-zinc-900">Checkout</h3>
                </div>
              </div>

              <div className="grid gap-3">
                <input
                  type="text"
                  placeholder="Nombre en la tarjeta"
                  className="w-full rounded-[1rem] border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                />
                <input
                  type="text"
                  placeholder="Número de tarjeta"
                  className="w-full rounded-[1rem] border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full rounded-[1rem] border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full rounded-[1rem] border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                  />
                </div>
              </div>

              <button
                className="mt-5 w-full rounded-full px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: cart.length > 0 ? palette.naranja.main : "#d4d4d8" }}
                disabled={cart.length === 0}
              >
                Finalizar compra
              </button>

              <p className="mt-3 text-xs leading-6 text-zinc-500">
                Este checkout es visual. Después se puede conectar a una pasarela real.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default function CrepisimoWebsiteConcept() {
  const [page, setPage] = useState("inicio");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: palette.neutrals.pageSoft }}
    >
      <Header page={page} setPage={setPage} cartCount={cartCount} />

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
          {page === "productos" && (<ProductsPage cart={cart} setCart={setCart} setPage={setPage} />
            )}
            {page === "carrito" && <CartPage cart={cart} setCart={setCart} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}