import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sucursales", label: "Sucursales" },
  { id: "franquicia", label: "Franquicia" },
  { id: "concentrados", label: "Concentrados" },
  { id: "contacto", label: "Contacto" },
];

const branches = [
  {
    city: "Oaxaca",
    subtitle: "Sucursal activa",
    text: "Espacio con identidad visual fuerte, experiencia instagrameable y presencia de marca reconocible.",
  },
  {
    city: "Puebla",
    subtitle: "Sucursal activa",
    text: "Ubicación clave para fortalecer la expansión regional y posicionar el concepto Crep!simo.",
  },
  {
    city: "Nueva ciudad",
    subtitle: "Próxima franquicia",
    text: "Página pensada para atraer inversionistas y presentar la oportunidad de abrir una nueva sucursal.",
  },
];

const newsCards = [
  {
    title: 'Nueva sucursal “El Carmen”',
    category: 'Anuncio',
    text: 'Presenta aperturas, ubicaciones nuevas y crecimiento de la marca con un formato visual llamativo.',
    theme: 'branch',
  },
  {
    title: 'Sodas italianas y bebidas',
    category: 'Producto',
    text: 'Muestra bebidas estrella, colores de la marca y lanzamientos visuales que conecten con redes sociales.',
    theme: 'drinks',
  },
  {
    title: 'Promociones y combos especiales',
    category: 'Campaña',
    text: 'Ideal para temporadas como San Valentín, promociones limitadas o campañas temáticas de Crep!simo.',
    theme: 'promo',
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

const dripColors = [
  "#ffe27a",
  "#7fd3f4",
  "#ff8a66",
  "#ffd1e6",
  "#b9a6d9",
];

function LiquidDrips() {
  // capas: atrás (más rápido) → adelante (más lento)
  const layers = [
    {
      color: "#ff6b57",
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
      color: "#c7a6ff",
      height: 420,
      duration: 26,
      delay: 2.2,
      opacity: 1,
      // ola amplia anclada a la esquina derecha (como las demás, pero “naciendo” en la orilla)
      pathA:
        "M0 62 C140 30, 300 84, 460 62 C620 40, 780 86, 940 62 C1100 38, 1260 86, 1440 62 L1440 0 C1380 8, 1320 28, 1260 58 C1200 88, 1140 120, 1080 156 C1016 194, 960 238, 902 266 C844 294, 784 310, 724 298 C664 286, 620 254, 564 254 C504 254, 462 298, 404 312 C346 326, 300 302, 244 286 C188 270, 140 286, 92 312 C44 338, 14 354, 0 362 Z",
      pathB:
        "M0 54 C150 20, 310 76, 470 54 C630 32, 790 78, 950 54 C1110 30, 1270 78, 1440 54 L1440 0 C1386 10, 1326 34, 1266 66 C1204 98, 1142 134, 1080 174 C1016 214, 956 262, 896 292 C836 322, 774 340, 712 326 C652 312, 606 278, 550 278 C490 278, 448 324, 390 340 C332 356, 286 330, 230 314 C174 298, 128 316, 82 344 C36 372, 10 386, 0 396 Z",
    },
    {
      color: "#58cfff",
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
      color: "#ffd84d",
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
    <div className="absolute inset-0 overflow-hidden bg-[#f2bbd7]">
      {layers.map((layer, i) => (
        // si invertMotion = true, se invierte la animación respecto a las otras capas
        <motion.div
          key={i}
          className="absolute left-0 w-full"
          style={{
            top: 0,
            height: layer.height,
            zIndex: layer.color === "#ffd84d" ? 1 : i + 2,
            opacity: layer.opacity,
            transform: layer.tilt ? "skewX(-8deg) rotate(-1.5deg)" : "none",
            transformOrigin: "top left",
          }}
          initial={{ y: -130 }}
          animate={
            layer.cornerBlob
              ? { y: [-34, -18, -28, -20], x: [10, 0, 6, 0], scaleX: [1, 1.03, 0.98, 1], scaleY: [1, 0.98, 1.03, 1] }
              : layer.invertMotion
                ? { y: [-20, -60, -30, -130] }
                : { y: [-130, -20, -40, -30] }
          }
          transition={{
            duration: layer.duration,
            delay: layer.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: [0.42, 0, 0.22, 1],
          }}
        >
          <svg viewBox="0 0 1440 600" className="h-full w-full" preserveAspectRatio="none">
            <motion.path
              fill={layer.color}
              initial={{ d: layer.pathA }}
              animate={{ d: [layer.pathA, layer.pathB, layer.pathA] }}
              transition={{
            duration: layer.duration,
            delay: layer.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: [0.42, 0, 0.22, 1],
          }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function Header({ page, setPage }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/40 bg-white/85 px-4 py-3 shadow-lg">
        <button
          onClick={() => setPage("inicio")}
          className="text-left text-xl font-black tracking-tight text-zinc-900"
        >
          Crep!simo
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                page === item.id
                  ? "bg-white text-zinc-900"
                  : "text-zinc-700 hover:bg-white/40"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function NewsCard({ item }) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-white/70">
      <div className="relative h-[320px] overflow-hidden">
        {item.theme === 'branch' && (
          <div className="relative flex h-full items-end justify-center bg-[#e9cbff] p-8 text-center">
            <div className="absolute left-0 top-0 h-28 w-40 rounded-br-[4rem] bg-[#f1a9ff] shadow-[inset_0_0_30px_rgba(255,255,255,0.4)]" />
            <div className="absolute right-0 top-0 h-48 w-40 rounded-bl-[4rem] bg-[#f0b8ff] shadow-[inset_0_0_30px_rgba(255,255,255,0.35)]" />
            <div className="absolute right-0 top-24 h-44 w-28 rounded-l-[3rem] bg-[#efb1ff] shadow-[inset_0_0_24px_rgba(255,255,255,0.25)]" />
            <div className="relative z-10">
              <p className="text-lg font-semibold lowercase tracking-wide text-fuchsia-700">nueva sucursal</p>
              <h3 className="mt-1 text-5xl font-black text-fuchsia-700" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                “El Carmen”
              </h3>
            </div>
          </div>
        )}

        {item.theme === 'drinks' && (
          <div className="relative flex h-full items-end justify-center gap-6 bg-gradient-to-b from-white via-white to-[#fff4ef] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_40%)]" />
            <div className="relative h-56 w-28 rounded-b-[2rem] rounded-t-[3rem] bg-gradient-to-b from-[#8ee4ff] via-[#43c8ff] to-[#1947b8] shadow-xl">
              <div className="absolute left-1/2 top-2 h-6 w-20 -translate-x-1/2 rounded-full bg-white/45" />
              <div className="absolute left-1/2 top-10 h-10 w-20 -translate-x-1/2 rounded-full border border-white/50 bg-white/20" />
              <div className="absolute left-1/2 top-20 h-20 w-[3px] -translate-x-1/2 bg-white/60" />
              <div className="absolute left-1/2 top-[6.3rem] h-20 w-20 -translate-x-1/2 rounded-full border border-white/40 bg-white/15" />
              <div className="absolute left-1/2 top-24 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-pink-500 text-3xl font-black text-white">C!</div>
            </div>
            <div className="relative h-48 w-24 rounded-b-[2rem] rounded-t-[3rem] bg-gradient-to-b from-[#ffd7ef] via-[#ff8f7b] to-[#ff4c2f] shadow-xl opacity-90">
              <div className="absolute left-1/2 top-2 h-5 w-16 -translate-x-1/2 rounded-full bg-white/45" />
              <div className="absolute left-1/2 top-8 h-8 w-16 -translate-x-1/2 rounded-full border border-white/50 bg-white/20" />
              <div className="absolute left-1/2 top-16 h-14 w-[3px] -translate-x-1/2 bg-white/60" />
              <div className="absolute left-1/2 top-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-blue-500 text-2xl font-black text-white">C!</div>
            </div>
          </div>
        )}

        {item.theme === 'promo' && (
          <div className="relative flex h-full items-center justify-center bg-[#f6efe6] p-6">
            <div className="absolute inset-0 opacity-90 [background-image:radial-gradient(circle_at_20px_20px,rgba(255,255,255,0.6)_2px,transparent_2px)] [background-size:28px_28px]" />
            <div className="absolute top-4 left-4 text-sm font-black uppercase tracking-wide text-rose-500">San Valentín</div>
            <div className="relative z-10 text-center">
              <div className="mx-auto mb-4 h-28 w-28 rounded-full bg-pink-400" />
              <p className="text-5xl font-black text-lime-500">$279</p>
              <p className="mt-2 text-3xl font-black text-orange-400">Combo Parejísima</p>
              <p className="mt-2 text-sm font-bold text-zinc-900">2 crepas especiales y 2 bebidas a elegir</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 text-left">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-500">{item.category}</p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
      </div>
    </article>
  );
}

function HomePage({ setPage }) {
  return (
    <div className="relative bg-transparent">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <LiquidDrips />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <motion.h1
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-black tracking-tight text-white drop-shadow-[0_8px_35px_rgba(0,0,0,0.16)] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Crep!simo
            </motion.h1>

            <motion.p
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="mt-3 text-base font-semibold uppercase tracking-[0.45em] text-white md:text-xl"
            >
              Crepería
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-8 max-w-2xl text-sm leading-7 text-white md:text-base"
          >
            Una marca colorida, memorable y lista para crecer a través de sucursales, franquicias y productos propios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => setPage('franquicia')}
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-900 shadow-xl"
            >
              Ver franquicia
            </button>
            <button
              onClick={() => setPage('sucursales')}
              className="rounded-full border border-white/60 bg-white/20 px-6 py-3 text-sm font-bold text-white"
            >
              Explorar sucursales
            </button>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#fff8fc] px-6 pb-20 pt-8 md:px-10 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink-500">Novedades</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
              Anuncios, productos y campañas de la marca
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Esta parte puede funcionar como noticias visuales de Crep!simo: aperturas, bebidas, promociones y contenido que ayude a vender la marca.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {newsCards.map((item) => (
              <NewsCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PageShell({ eyebrow, title, description, children }) {
  return (
    <div className="min-h-screen bg-[#fff8fc] px-6 pb-16 pt-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink-500">{eyebrow}</p>
        <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">{description}</p>
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
}

function BranchesPage() {
  return (
    <PageShell
      eyebrow="Sucursales"
      title="Cada sucursal debe sentirse como parte del universo Crep!simo"
      description="Esta página puede enfocarse en mostrar ubicaciones, fotos reales, mapa, horarios, productos estrella y experiencia visual de cada punto de venta."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {branches.map((branch, index) => (
          <div key={branch.city} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-pink-100">
            <div
              className="h-56"
              style={{
                background:
                  index === 0
                    ? "linear-gradient(135deg, #7fd3f4 0%, #ffd1e6 48%, #b9a6d9 100%)"
                    : index === 1
                      ? "linear-gradient(135deg, #ffe27a 0%, #ff8a66 40%, #7fd3f4 100%)"
                      : "linear-gradient(135deg, #ffd1e6 0%, #f2bbd7 35%, #7fd3f4 100%)",
              }}
            />
            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">{branch.subtitle}</p>
              <h3 className="mt-2 text-3xl font-black text-zinc-900">{branch.city}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{branch.text}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function FranchisePage() {
  return (
    <PageShell
      eyebrow="Franquicia"
      title="La web debe vender la marca como una experiencia y como una inversión"
      description="Aquí conviene presentar el concepto, la propuesta de valor, el perfil ideal del franquiciatario y el proceso para abrir una sucursal."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#ff9bcf] via-[#f5b6de] to-[#ffddee] p-8 shadow-xl">
          <h3 className="text-3xl font-black text-white">¿Por qué Crep!simo?</h3>
          <div className="mt-6 grid gap-4 text-sm text-white/95">
            <div className="rounded-[1.5rem] bg-white/20 p-5 backdrop-blur">Identidad visual muy reconocible</div>
            <div className="rounded-[1.5rem] bg-white/20 p-5 backdrop-blur">Concepto atractivo para redes y consumo joven</div>
            <div className="rounded-[1.5rem] bg-white/20 p-5 backdrop-blur">Modelo adaptable a sucursal o isla comercial</div>
            <div className="rounded-[1.5rem] bg-white/20 p-5 backdrop-blur">Posibilidad de vender productos propios de la marca</div>
          </div>
        </div>

        <div className="space-y-4">
          {["Conoce el modelo", "Recibe la información comercial", "Evalúa ubicación", "Abre tu sucursal"].map((item, i) => (
            <div key={item} className="flex gap-4 rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-zinc-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-lg font-black text-sky-600">
                {i + 1}
              </div>
              <div>
                <h4 className="text-lg font-black text-zinc-900">{item}</h4>
                <p className="mt-1 text-sm leading-7 text-zinc-600">
                  Aquí se puede ampliar con inversión estimada, soporte operativo, tiempos de apertura y formulario para prospectos.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function ConcentratesPage() {
  return (
    <PageShell
      eyebrow="Concentrados"
      title="Los concentrados merecen una página propia, más comercial y orientada a venta"
      description="Esta sección puede funcionar como catálogo, presentación de producto y canal para mayoreo, distribuidores o negocios interesados."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {concentrates.map((item, index) => (
          <div key={item.title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
            <div
              className="mb-5 h-40 rounded-[1.5rem]"
              style={{
                background:
                  index === 0
                    ? "linear-gradient(135deg, #ffe27a 0%, #f8d878 100%)"
                    : index === 1
                      ? "linear-gradient(135deg, #7fd3f4 0%, #9ddbf2 100%)"
                      : "linear-gradient(135deg, #ffd1e6 0%, #ffd8ea 100%)",
              }}
            />
            <h3 className="text-2xl font-black text-zinc-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
          </div>
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
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-100">
          <h3 className="text-2xl font-black text-zinc-900">Contacto comercial</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            Ideal para prospectos interesados en franquicia, colaboración comercial o compra de concentrados.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-pink-500 px-6 py-3 text-sm font-bold text-white">WhatsApp</button>
            <button className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-bold text-zinc-900">Solicitar información</button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#59b7ea] p-8 text-white shadow-xl">
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
    <div className="min-h-screen bg-[#fff8fc]">
      <Header page={page} setPage={setPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {page === "inicio" && <HomePage setPage={setPage} />}
          {page === "sucursales" && <BranchesPage />}
          {page === "franquicia" && <FranchisePage />}
          {page === "concentrados" && <ConcentratesPage />}
          {page === "contacto" && <ContactPage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
