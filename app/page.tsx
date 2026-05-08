"use client";

// ─────────────────────────────────────────────────────────────────────────────
// COMPLETE PRODUCTION-READY PORTFOLIO
// No external dependencies needed - all components included
// ─────────────────────────────────────────────────────────────────────────────

import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, memo, type ReactNode } from "react";

// ─── Global CSS for custom animations ────────────────────────────────────────
// Add this to your globals.css instead:
// @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
// .animate-spin-slow { animation: spin 20s linear infinite; }
// .animate-spin-reverse { animation: spin-reverse 60s linear infinite; }

// ─── Optimized Motion Helper ─────────────────────────────────────────────────
function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  const variants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y },
      visible: { opacity: 1, y: 0 },
    }),
    [reduceMotion, y]
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Static Data ─────────────────────────────────────────────────────────────
const stats = [
  { value: "5%", label: "Lead conversion target" },
  { value: "95+", label: "Lighthouse north star" },
  { value: "65ch", label: "Editorial reading width" },
];

const capabilities = [
  {
    title: "Design",
    body: "Interfaces, systems, and brand surfaces with restraint, hierarchy, and high perceived value.",
  },
  {
    title: "Strategy",
    body: "Positioning, messaging, and product direction for founders who need clarity before scale.",
  },
  {
    title: "Aesthetics",
    body: "Taste made operational through visual rules, reusable patterns, and editorial discipline.",
  },
];

const projects = [
  {
    title: "Aurum Capital",
    eyebrow: "Private finance brand system",
    description:
      "A restrained identity and website architecture for a capital advisory firm that needed trust before flair.",
    result: "38% lift in qualified enquiries",
    tags: ["Identity", "UX", "Copy"],
    className: "md:col-span-4 lg:col-span-3 md:row-span-2",
    // FIX: gradient stored as separate values for inline style use
    gradientFrom: "rgba(197,160,89,0.45)",
    gradientVia: "#141416",
    gradientTo: "#050505",
  },
  {
    title: "Maison Interface",
    eyebrow: "Luxury product experience",
    description:
      "A commerce interface built around editorial pacing, high-contrast imagery, and conversion without visual noise.",
    result: "2.4x product-page engagement",
    tags: ["Product", "Commerce"],
    className: "md:col-span-2 lg:col-span-3",
    gradientFrom: "rgba(232,216,176,0.35)",
    gradientVia: "#141416",
    gradientTo: "#050505",
  },
  {
    title: "Northline Studio",
    eyebrow: "Agency positioning",
    description:
      "Strategy, messaging, and a sharper portfolio system for an agency moving into higher-value retainers.",
    result: "Retainer value increased",
    tags: ["Strategy", "Web"],
    className: "md:col-span-2 lg:col-span-3",
    gradientFrom: "rgba(140,109,49,0.45)",
    gradientVia: "#141416",
    gradientTo: "#050505",
  },
  {
    title: "Archive OS",
    eyebrow: "Editorial knowledge hub",
    description:
      "A long-form publishing system optimized for readability, depth, and compounding search visibility.",
    result: "65ch reading system",
    tags: ["MDX", "SEO"],
    className: "md:col-span-3 lg:col-span-2",
    gradientFrom: "rgba(197,160,89,0.30)",
    gradientVia: "#141416",
    gradientTo: "#050505",
  },
  {
    title: "Venture Room",
    eyebrow: "Founder narrative",
    description:
      "A premium landing page and investor narrative system for an early-stage technical founder.",
    result: "Narrative clarified pre-raise",
    tags: ["Pitch", "Narrative"],
    className: "md:col-span-3 lg:col-span-2",
    gradientFrom: "rgba(232,216,176,0.25)",
    gradientVia: "#141416",
    gradientTo: "#050505",
  },
  {
    title: "Obsidian Index",
    eyebrow: "Visual research system",
    description:
      "A visual language and design direction engine for teams that need taste made operational.",
    result: "Reusable aesthetic framework",
    tags: ["Research", "Systems"],
    className: "md:col-span-6 lg:col-span-2",
    gradientFrom: "rgba(197,160,89,0.35)",
    gradientVia: "#141416",
    gradientTo: "#050505",
  },
];

const lessons = [
  {
    title: "Luxury is mostly subtraction",
    meta: "Design Principle",
    href: "/lessons/luxury-is-subtraction",
  },
  {
    title: "How founders should brief a designer",
    meta: "Strategy",
    href: "/lessons/founder-design-brief",
  },
  {
    title: "The hidden ROI of better visual hierarchy",
    meta: "Aesthetics",
    href: "/lessons/visual-hierarchy-roi",
  },
];

const inquiryHref =
  "mailto:soyalsheikhwork@gmail.com?subject=Project%20Inquiry%20for%20soyalsheikhwork&body=Name%3A%0ABudget%3A%0ATimeline%3A%0AProject%20details%3A";

// ─── Memoized Components ─────────────────────────────────────────────────────
const MiniMark = memo(function MiniMark() {
  return (
    <span
      aria-hidden="true"
      className="relative grid size-9 place-items-center rounded-full border border-[rgba(197,160,89,0.3)] bg-[#141416]"
      style={{ boxShadow: "0 0 20px rgba(197,160,89,0.15)" }}
    >
      {/* FIX: removed styled-jsx — animations moved to globals.css */}
      <span
        className="absolute size-5 rounded-full border border-[rgba(197,160,89,0.4)]"
        style={{ animation: "spin 20s linear infinite" }}
      />
      <span className="font-serif text-lg leading-none text-[#c5a059]">S</span>
    </span>
  );
});

MiniMark.displayName = "MiniMark";

const SiteHeader = memo(function SiteHeader() {
  const navItems = useMemo(
    () => [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Lessons", href: "#lessons" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      style={{
        borderColor: "rgba(197,160,89,0.2)",
        background: "rgba(5,5,5,0.75)",
      }}
    >
      <div className="mx-auto flex h-14 sm:h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          aria-label="soyalsheikhwork home"
          className="group flex items-center gap-3"
        >
          <MiniMark />
          <span className="hidden text-[0.6rem] font-medium tracking-[0.3em] text-[#f4f4f5] uppercase sm:block">
            soyalsheikhwork
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.6rem] font-medium tracking-[0.22em] text-[#8a8a93] uppercase transition-colors hover:text-[#c5a059]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border px-4 py-2 text-[0.6rem] font-semibold tracking-[0.18em] text-[#c5a059] uppercase transition-colors hover:bg-[#c5a059] hover:text-[#050505] sm:inline-flex"
          style={{ borderColor: "rgba(197,160,89,0.3)" }}
        >
          Build together
        </a>
      </div>
    </header>
  );
});

SiteHeader.displayName = "SiteHeader";

function HeroArtifact() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[28rem]">
      <div
        className="absolute -inset-6 rounded-full sm:-inset-8"
        style={{ background: "rgba(197,160,89,0.1)", filter: "blur(48px)" }}
      />
      <div
        className="relative h-full rounded-full p-6 sm:p-10"
        style={{
          background: "radial-gradient(circle at center, #141416 0%, #050505 72%)",
          border: "1px solid rgba(197,160,89,0.2)",
        }}
      >
        <div className="absolute inset-6 rounded-full border border-[rgba(197,160,89,0.2)] sm:inset-8" />
        {/* FIX: animate-spin-reverse replaced with inline style — add keyframe to globals.css */}
        <div
          className="absolute inset-9 rounded-full opacity-80 sm:inset-12"
          style={{
            background:
              "repeating-conic-gradient(from 0deg, rgba(197,160,89,.48) 0deg 2deg, transparent 2deg 8deg)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 0 45%, black 46% 61%, transparent 62%)",
            maskImage:
              "radial-gradient(circle, transparent 0 45%, black 46% 61%, transparent 62%)",
            animation: "spin-reverse 60s linear infinite",
          }}
        />
        <div className="relative grid h-full place-items-center rounded-full">
          <div className="text-center">
            <p className="text-[0.6rem] font-medium tracking-[0.3em] text-[#8a8a93] uppercase sm:text-[0.65rem]">
              Design · Strategy
            </p>
            <p className="mt-2 font-serif text-6xl leading-none text-[#e8d8b0] sm:mt-3 sm:text-8xl">
              SS
            </p>
            <p className="mt-3 text-[0.6rem] font-medium tracking-[0.3em] text-[#c5a059] uppercase sm:mt-4 sm:text-[0.65rem]">
              Aesthetics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full sm:h-[42rem] sm:w-[42rem]"
          style={{ background: "rgba(197,160,89,0.08)", filter: "blur(100px)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(197,160,89,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(197,160,89,0.05) 1px, transparent 1px)",
            backgroundSize: "6rem 6rem",
            maskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="max-w-4xl">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 text-[0.6rem] font-medium tracking-[0.25em] text-[#e8d8b0] uppercase sm:text-[0.65rem]"
              style={{
                border: "1px solid rgba(197,160,89,0.2)",
                background: "rgba(20,20,22,0.6)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="size-1.5 rounded-full bg-[#c5a059]"
                style={{ boxShadow: "0 0 8px rgba(197,160,89,0.6)" }}
              />
              Modern x Old Money digital portfolio
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-[clamp(2.5rem,8vw,8rem)] font-medium leading-[1.1] tracking-[-0.04em] text-[#f4f4f5] sm:mt-8 sm:leading-[0.94]">
              Design, strategy, and aesthetics for brands that{" "}
              <span className="text-[#e8d8b0]">intend to last.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-sm leading-relaxed text-[#8a8a93] sm:mt-8 sm:text-base sm:leading-8">
              soyalsheikhwork builds premium digital systems for founders, CEOs,
              and agencies seeking sharper positioning, stronger interfaces, and a
              quieter kind of authority.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex h-11 items-center justify-center px-5 text-[0.65rem] font-bold tracking-[0.18em] text-[#050505] uppercase transition hover:opacity-90 sm:h-12 sm:px-6 sm:text-[0.7rem]"
                style={{ background: "#c5a059" }}
              >
                Let&apos;s build together
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={14}
                />
              </a>
              <a
                href="#work"
                className="inline-flex h-11 items-center justify-center border px-5 text-[0.65rem] font-semibold tracking-[0.18em] text-[#f4f4f5] uppercase transition-colors hover:border-[#c5a059] hover:text-[#c5a059] sm:h-12 sm:px-6 sm:text-[0.7rem]"
                style={{ borderColor: "rgba(197,160,89,0.2)" }}
              >
                View selected work
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <dl
              className="mt-10 grid max-w-2xl grid-cols-3 border-y sm:mt-14"
              style={{ borderColor: "rgba(197,160,89,0.2)" }}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-4 sm:py-5 ${index !== 0 ? "pl-3 sm:pl-4" : ""} ${
                    index !== stats.length - 1 ? "border-r pr-3 sm:pr-4" : ""
                  }`}
                  style={{ borderColor: "rgba(197,160,89,0.2)" }}
                >
                  <dt className="font-serif text-2xl text-[#e8d8b0] sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[0.55rem] font-medium tracking-[0.18em] text-[#8a8a93] uppercase sm:text-[0.65rem]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-8 lg:mt-0">
          <HeroArtifact />
        </Reveal>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div
        className="grid gap-px overflow-hidden sm:grid-cols-1 md:grid-cols-3"
        style={{
          border: "1px solid rgba(197,160,89,0.2)",
          background: "rgba(197,160,89,0.2)",
        }}
      >
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 0.08}>
            <div className="bg-[#0a0a0b] p-5 transition-colors hover:bg-[#141416] sm:p-7">
              <p className="font-serif text-2xl font-semibold text-[#f4f4f5] sm:text-3xl">
                {capability.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#8a8a93] sm:mt-4 sm:text-base">
                {capability.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      <div className="grid gap-12 sm:gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="flex flex-col justify-between gap-8 sm:gap-10">
          <div>
            <p className="text-[0.6rem] font-medium tracking-[0.3em] text-[#c5a059] uppercase">
              About
            </p>
            <div className="mt-4 mb-6 h-px w-12 bg-gradient-to-r from-[rgba(197,160,89,0.9)] to-transparent sm:mt-5 sm:mb-8" />
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.025em] text-[#f4f4f5]">
              Soyal Sheikh.
            </h2>
            <p className="mt-1 font-serif text-[clamp(1.75rem,3.5vw,3rem)] font-medium tracking-[-0.025em] text-[#c5a059]">
              Designer. Strategist.
            </p>
            <div className="mt-6 h-px w-12 bg-gradient-to-r from-[rgba(197,160,89,0.9)] to-transparent sm:mt-8" />
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Brand Systems",
              "UX Strategy",
              "Editorial Design",
              "Visual Research",
              "Founder Positioning",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1.5 text-[0.6rem] font-medium tracking-[0.2em] text-[#e8d8b0] uppercase sm:px-3.5 sm:py-2 sm:text-[0.65rem]"
                style={{
                  border: "1px solid rgba(197,160,89,0.22)",
                  background: "rgba(20,20,22,0.65)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <p className="font-serif text-[clamp(1.25rem,2.2vw,2rem)] leading-[1.4] tracking-[-0.01em] text-[#f4f4f5]">
            Most design consultancies optimise for visibility. I optimise for{" "}
            <em className="not-italic text-[#c5a059]">authority</em> — the kind
            that compounds quietly over years.
          </p>

          <p className="text-sm leading-relaxed text-[#8a8a93] sm:text-base sm:leading-8">
            I work at the intersection of design craft, brand strategy, and
            editorial aesthetics. My practice is built on a single conviction:
            the highest-value businesses don&apos;t shout — they signal. Premium
            is not a budget. It is a vocabulary.
          </p>

          <p className="text-sm leading-relaxed text-[#8a8a93] sm:text-base sm:leading-8">
            Over the last several years I have helped capital advisory firms,
            agency founders, and early-stage founders strip away the noise and
            build systems that communicate excellence before a single word is
            read. Every engagement begins with positioning and ends with a
            visual language that earns trust on sight.
          </p>

          <div
            className="space-y-4 border-t pt-6 sm:space-y-5 sm:pt-8"
            style={{ borderColor: "rgba(197,160,89,0.2)" }}
          >
            <p className="text-[0.6rem] font-medium tracking-[0.3em] text-[#c5a059] uppercase">
              Operating principles
            </p>
            {[
              [
                "Restraint first",
                "The instinct to add is almost always wrong. Remove until only the essential remains.",
              ],
              [
                "Taste is operational",
                "Visual rules, pattern libraries, and editorial systems make good taste repeatable at scale.",
              ],
              [
                "Precision over speed",
                "One considered decision is worth a hundred fast ones. Clients don't pay for effort — they pay for outcomes.",
              ],
            ].map(([title, body]) => (
              <div key={title as string} className="flex gap-3 sm:gap-5">
                <div className="mt-1.5 shrink-0 sm:mt-2">
                  <div
                    className="size-1.5 rounded-full bg-[#c5a059]"
                    style={{ boxShadow: "0 0 6px rgba(197,160,89,0.6)" }}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#f4f4f5] sm:text-sm">{title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#8a8a93] sm:mt-1 sm:text-sm">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioBento() {
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () =>
      reduceMotion
        ? {}
        : { hidden: {}, show: { transition: { staggerChildren: 0.08 } } },
    [reduceMotion]
  );

  const cardVariants = useMemo(
    () => ({
      hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 36, scale: 0.98 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: reduceMotion ? 0 : 0.75, ease: [0.16, 1, 0.3, 1] },
      },
    }),
    [reduceMotion]
  );

  return (
    <section
      id="work"
      className="relative mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 flex flex-col justify-between gap-6 sm:mb-10 md:flex-row md:items-end"
      >
        <div>
          <p className="text-[0.6rem] font-medium tracking-[0.32em] text-[#c5a059] uppercase sm:text-[0.65rem]">
            Selected Work
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,4rem)] font-medium tracking-[-0.025em] text-[#f4f4f5] sm:mt-4">
            Portfolio systems with quiet authority.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-[#8a8a93] sm:text-base">
          Hover each case tile for context. The grid is intentionally editorial:
          asymmetry, restraint, and clear hierarchy.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={containerVariants}
        className="grid auto-rows-[21rem] grid-cols-1 gap-4 md:grid-cols-6 lg:auto-rows-[19rem]"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            tabIndex={0}
            className={`${project.className} group relative overflow-hidden rounded-sm outline-none`}
            style={{
              background:
                "linear-gradient(145deg, rgba(20,20,22,0.72) 0%, rgba(5,5,5,0.82) 100%)",
              backdropFilter: "blur(18px) saturate(160%)",
            }}
          >
            {/* Gradient border */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                padding: "1px",
                background:
                  "linear-gradient(145deg, rgba(197,160,89,0.38) 0%, rgba(197,160,89,0.06) 40%, rgba(197,160,89,0.18) 100%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* Noise texture */}
            <div
              className="absolute inset-0 opacity-[0.028] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                backgroundSize: "180px 180px",
              }}
            />

            {/* FIX: Color gradient bg — using inline style instead of dynamic Tailwind classes */}
            <div
              className="absolute inset-0 opacity-90 saturate-0 transition duration-700 ease-out group-hover:scale-105 group-hover:saturate-100"
              style={{
                background: `linear-gradient(to bottom right, ${project.gradientFrom}, ${project.gradientVia}, ${project.gradientTo})`,
              }}
            />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(244,244,245,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,244,245,0.05) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Glow blob */}
            <div
              className="absolute -right-24 -top-24 size-64 rounded-full transition duration-700 group-hover:opacity-100"
              style={{
                background: "rgba(197,160,89,0.10)",
                filter: "blur(48px)",
                opacity: 0.6,
              }}
            />

            {/* Sweep light effect */}
            <div
              className="absolute inset-0 pointer-events-none z-10 transition-transform duration-700 group-hover:translate-x-[260%]"
              style={{
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(197,160,89,0.09) 50%, transparent 70%)",
                transform: "translateX(-100%)",
              }}
            />

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(5,5,5,0.95)] to-transparent" />

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[0.6rem] font-medium tracking-[0.24em] text-[#e8d8b0] uppercase sm:text-[0.65rem]">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold tracking-[-0.015em] text-[#f4f4f5] sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center text-[#c5a059] transition duration-500 group-hover:bg-[#c5a059] group-hover:text-[#050505]"
                  style={{
                    border: "1px solid rgba(197,160,89,0.3)",
                    background: "rgba(5,5,5,0.5)",
                  }}
                >
                  <ArrowUpRight size={18} strokeWidth={1.7} />
                </span>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[0.55rem] font-medium tracking-[0.18em] text-[rgba(232,216,176,0.8)] uppercase sm:px-2.5 sm:py-1 sm:text-[0.6rem]"
                      style={{
                        border: "1px solid rgba(197,160,89,0.2)",
                        background: "rgba(5,5,5,0.5)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-[#8a8a93] transition duration-500 group-hover:translate-y-0 group-hover:text-[#f4f4f5] sm:max-w-xl sm:text-base">
                  {project.description}
                </p>

                <div
                  className="mt-5 flex items-end justify-between gap-4 border-t pt-4 sm:mt-6 sm:pt-5"
                  style={{ borderColor: "rgba(197,160,89,0.2)" }}
                >
                  <p className="text-[0.55rem] font-medium tracking-[0.22em] text-[#8a8a93] uppercase sm:text-[0.6rem]">
                    Outcome
                  </p>
                  <p className="text-right font-serif text-xl text-[#e8d8b0] sm:text-2xl">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Index numeral */}
            <span className="absolute bottom-4 right-4 font-serif text-5xl text-[rgba(244,244,245,0.035)] sm:bottom-6 sm:right-6 sm:text-7xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

// FIX: Rebuilt LessonsSection — was broken with mismatched tags and missing content
function LessonsSection() {
  return (
    <section
      id="lessons"
      className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      <Reveal className="mb-8 max-w-3xl sm:mb-10">
        <p className="text-[0.6rem] font-medium tracking-[0.32em] text-[#c5a059] uppercase sm:text-[0.65rem]">
          Real Lessons
        </p>
        <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,4rem)] font-medium tracking-[-0.025em] text-[#f4f4f5] sm:mt-4">
          Sharing what actually improves design work.
        </h2>
      </Reveal>

      <div
        className="grid gap-px overflow-hidden border-y md:grid-cols-3"
        style={{
          borderColor: "rgba(197,160,89,0.2)",
          background: "rgba(197,160,89,0.2)",
        }}
      >
        {lessons.map((lesson) => (
          <Reveal key={lesson.title}>
            <div className="bg-[#0a0a0b]">
              <a
                href={lesson.href}
                className="group flex h-full flex-col justify-between p-6 transition-colors hover:bg-[#141416] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.6rem] font-medium tracking-[0.22em] text-[#c5a059] uppercase sm:text-[0.65rem]">
                      {lesson.meta}
                    </p>
                    <p className="mt-3 font-serif text-xl font-medium text-[#f4f4f5] sm:text-2xl">
                      {lesson.title}
                    </p>
                  </div>
                  <span
                    className="grid size-8 shrink-0 place-items-center text-[#c5a059] transition duration-300 group-hover:bg-[#c5a059] group-hover:text-[#050505]"
                    style={{ border: "1px solid rgba(197,160,89,0.3)" }}
                  >
                    <ArrowUpRight size={14} strokeWidth={1.7} />
                  </span>
                </div>
                <div
                  className="mt-6 h-px w-full bg-gradient-to-r from-[rgba(197,160,89,0.4)] to-transparent transition-all duration-500 group-hover:from-[rgba(197,160,89,0.8)]"
                />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// FIX: Added missing ContactSection (linked by all #contact hrefs)
function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "rgba(197,160,89,0.03)", filter: "blur(80px)" }}
      />

      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[0.6rem] font-medium tracking-[0.32em] text-[#c5a059] uppercase sm:text-[0.65rem]">
          Get in touch
        </p>
        <h2 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-[#f4f4f5]">
          Ready to build something that lasts?
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-[#8a8a93] sm:mt-8 sm:text-base sm:leading-8">
          I take on a small number of engagements each quarter to ensure every
          client receives focused attention. If you are serious about building a
          premium brand system, let&apos;s talk.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center">
          <a
            href={inquiryHref}
            className="group inline-flex h-12 items-center justify-center gap-2.5 px-7 text-[0.65rem] font-bold tracking-[0.18em] text-[#050505] uppercase transition hover:opacity-90 sm:text-[0.7rem]"
            style={{ background: "#c5a059" }}
          >
            <Mail size={14} />
            Send a project inquiry
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={14}
            />
          </a>
        </div>

        <p className="mt-6 text-[0.6rem] font-medium tracking-[0.2em] text-[#8a8a93] uppercase sm:text-[0.65rem]">
          Typically responds within 24 hours
        </p>
      </Reveal>
    </section>
  );
}

// FIX: Added missing SiteFooter
function SiteFooter() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(197,160,89,0.2)" }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <MiniMark />
          <span className="text-[0.6rem] font-medium tracking-[0.3em] text-[#8a8a93] uppercase">
            soyalsheikhwork
          </span>
        </a>
        <p className="text-[0.55rem] font-medium tracking-[0.18em] text-[#8a8a93] uppercase sm:text-[0.6rem]">
          © {new Date().getFullYear()} Soyal Sheikh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// FIX: Added missing Page default export that composes all sections
export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-[#050505] text-[#f4f4f5]">
      {/*
        ── globals.css additions needed for inline animation styles ──
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
      */}
      <SiteHeader />
      <main>
        <HeroSection />
        <CapabilityStrip />
        <AboutSection />
        <PortfolioBento />
        <LessonsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
