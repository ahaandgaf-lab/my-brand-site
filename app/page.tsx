"use client";

// ─────────────────────────────────────────────────────────────────────────────
// PERFORMANCE OPTIMIZED VERSION
// Changes:
// 1. Removed inline CSS (move to globals.css)
// 2. Lazy-loaded heavy components
// 3. Memoized static components
// 4. Reduced motion-aware rendering
// 5. Optimized re-renders with useMemo/useCallback
// 6. Removed unused cn function (use clsx/twMerge if needed)
// ─────────────────────────────────────────────────────────────────────────────

import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  useRef,
  type ReactNode,
  type HTMLAttributes,
  memo,
  useMemo,
  lazy,
  Suspense,
} from "react";

// ─── Lazy load non-critical components ──────────────────────────────────────
const AboutSectionLazy = lazy(() => 
  import("./components/AboutSection").then(mod => ({ default: mod.AboutSection }))
);

const PortfolioBentoLazy = lazy(() => 
  import("./components/PortfolioBento").then(mod => ({ default: mod.PortfolioBento }))
);

// ─── Optimized motion helpers ───────────────────────────────────────────────
function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  ...props
}: HTMLAttributes<HTMLDivElement> & { delay?: number; y?: number }) {
  const reduceMotion = useReducedMotion();
  
  // Memoize variants to prevent recreation
  const variants = useMemo(() => ({
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  }), [reduceMotion, y]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1], delay }}
      variants={variants}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}

// Memoize static components
const MiniMark = memo(function MiniMark() {
  return (
    <span
      aria-hidden="true"
      className="relative grid size-9 place-items-center rounded-full border border-[rgba(197,160,89,0.3)] bg-[#141416]"
      style={{ boxShadow: "0 0 20px rgba(197,160,89,0.15)" }}
    >
      <span className="absolute size-5 rounded-full border border-[rgba(197,160,89,0.4)] motion-safe:animate-[spin_20s_linear_infinite]" />
      <span className="font-serif text-lg leading-none text-[#c5a059]">S</span>
    </span>
  );
});

const SiteHeader = memo(function SiteHeader() {
  const navItems = useMemo(() => [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Lessons", href: "#lessons" },
    { label: "Contact", href: "#contact" },
  ], []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      style={{
        borderColor: "rgba(197,160,89,0.2)",
        background: "rgba(5,5,5,0.75)",
      }}
    >
      <div className="mx-auto flex h-14 sm:h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="soyalsheikhwork home" className="group flex items-center gap-3">
          <MiniMark />
          <span className="t5-eyebrow hidden text-[#f4f4f5] sm:block">
            soyalsheikhwork
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="t5-eyebrow text-[#8a8a93] transition-colors hover:text-[#c5a059]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border px-4 py-2 t5-eyebrow text-[#c5a059] transition-colors hover:bg-[#c5a059] hover:text-[#050505] sm:inline-flex"
          style={{ borderColor: "rgba(197,160,89,0.3)" }}
        >
          Build together
        </a>
      </div>
    </header>
  );
});

// ─── Responsive Data (reduced font sizes for mobile) ────────────────────────
const stats = [
  { value: "5%", label: "Lead conversion target" },
  { value: "95+", label: "Lighthouse north star" },
  { value: "65ch", label: "Editorial reading width" },
];

const capabilities = [
  { title: "Design", body: "Interfaces, systems, and brand surfaces with restraint, hierarchy, and high perceived value." },
  { title: "Strategy", body: "Positioning, messaging, and product direction for founders who need clarity before scale." },
  { title: "Aesthetics", body: "Taste made operational through visual rules, reusable patterns, and editorial discipline." },
];

function HeroArtifact() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[28rem]">
      <div className="absolute -inset-6 sm:-inset-8 rounded-full" style={{ background: "rgba(197,160,89,0.1)", filter: "blur(48px)" }} />
      <div
        className="relative h-full rounded-full p-6 sm:p-10"
        style={{
          background: "radial-gradient(circle at center, #141416 0%, #050505 72%)",
          border: "1px solid rgba(197,160,89,0.2)",
        }}
      >
        <div className="absolute inset-6 sm:inset-8 rounded-full border border-[rgba(197,160,89,0.2)]" />
        <div
          className="absolute inset-9 sm:inset-12 rounded-full opacity-80 motion-safe:animate-[spin_60s_linear_infinite]"
          style={{
            background: "repeating-conic-gradient(from 0deg, rgba(197,160,89,.48) 0deg 2deg, transparent 2deg 8deg)",
            WebkitMaskImage: "radial-gradient(circle, transparent 0 45%, black 46% 61%, transparent 62%)",
          }}
        />
        <div className="relative grid h-full place-items-center rounded-full">
          <div className="text-center">
            <p className="t5-eyebrow text-[#8a8a93] text-[0.6rem] sm:text-[0.65rem]">Design · Strategy</p>
            <p className="mt-2 sm:mt-3 font-serif text-6xl sm:text-8xl leading-none text-[#e8d8b0]">SS</p>
            <p className="mt-3 sm:mt-4 t5-eyebrow text-[#c5a059]">Aesthetics</p>
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
          className="absolute left-1/2 top-0 h-[30rem] w-[30rem] sm:h-[42rem] sm:w-[42rem] -translate-x-1/2 rounded-full"
          style={{ background: "rgba(197,160,89,0.08)", filter: "blur(100px)" }}
        />
      </div>

      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="max-w-4xl">
          <div>
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 t5-eyebrow text-[#e8d8b0] text-[0.6rem] sm:text-[0.65rem]"
              style={{
                border: "1px solid rgba(197,160,89,0.2)",
                background: "rgba(20,20,22,0.6)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="size-1.5 rounded-full bg-[#c5a059]" />
              Modern x Old Money digital portfolio
            </span>
          </div>

          <h1 className="t1-display mt-6 sm:mt-8 text-balance text-[clamp(2.5rem,8vw,8rem)] leading-[1.1] sm:leading-[0.94]">
            Design, strategy, and aesthetics for brands that{" "}
            <span className="text-[#e8d8b0]">intend to last.</span>
          </h1>

          <p className="t4-body mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base">
            soyalsheikhwork builds premium digital systems for founders, CEOs,
            and agencies seeking sharper positioning, stronger interfaces, and
            a quieter kind of authority.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex h-11 sm:h-12 items-center justify-center px-5 sm:px-6 t5-eyebrow text-[#050505] text-[0.65rem] sm:text-[0.7rem]"
              style={{ background: "#c5a059" }}
            >
              Let's build together
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={14} />
            </a>
            <a
              href="#work"
              className="inline-flex h-11 sm:h-12 items-center justify-center border px-5 sm:px-6 t5-eyebrow text-[#f4f4f5] text-[0.65rem] sm:text-[0.7rem] transition-colors hover:border-[#c5a059] hover:text-[#c5a059]"
              style={{ borderColor: "rgba(197,160,89,0.2)" }}
            >
              View selected work
            </a>
          </div>

          {/* Mobile-optimized stats grid */}
          <dl className="mt-10 sm:mt-14 grid max-w-2xl grid-cols-3 border-y" style={{ borderColor: "rgba(197,160,89,0.2)" }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`py-4 sm:py-5 ${index !== 0 ? "pl-3 sm:pl-4" : ""} ${
                  index !== stats.length - 1 ? "border-r pr-3 sm:pr-4" : ""
                }`}
                style={{ borderColor: "rgba(197,160,89,0.2)" }}
              >
                <dt className="font-serif text-2xl sm:text-3xl text-[#e8d8b0]">{stat.value}</dt>
                <dd className="t5-eyebrow mt-1 text-[#8a8a93] text-[0.55rem] sm:text-[0.65rem]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 lg:mt-0">
          <HeroArtifact />
        </div>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-8 sm:py-10 sm:px-6 lg:px-8">
      <div
        className="grid gap-px overflow-hidden sm:grid-cols-1 md:grid-cols-3"
        style={{ border: "1px solid rgba(197,160,89,0.2)", background: "rgba(197,160,89,0.2)" }}
      >
        {capabilities.map((capability, index) => (
          <div
            key={capability.title}
            className="bg-[#0a0a0b] p-5 sm:p-7 transition-colors hover:bg-[#141416]"
          >
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#f4f4f5]">{capability.title}</p>
            <p className="text-[#8a8a93] text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">{capability.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LessonsSection() {
  const lessons = useMemo(() => [
    { title: "Luxury is mostly subtraction", meta: "Design Principle", href: "/lessons/luxury-is-subtraction" },
    { title: "How founders should brief a designer", meta: "Strategy", href: "/lessons/founder-design-brief" },
    { title: "The hidden ROI of better visual hierarchy", meta: "Aesthetics", href: "/lessons/visual-hierarchy-roi" },
  ], []);

  return (
    <section id="lessons" className="mx-auto max-w-[1280px] px-4 py-20 sm:py-28 sm:px-6 lg:px-8 lg:py-36">
      <div className="mb-8 sm:mb-10 max-w-3xl">
        <p className="t5-eyebrow text-[#c5a059]">Real Lessons</p>
        <h2 className="t2-section mt-3 sm:mt-4 text-balance text-[clamp(2rem,4vw,4rem)]">
          Sharing what actually improves design work.
        </h2>
      </div>

      <div
        className="grid gap-px overflow-hidden border-y sm:grid-cols-1 md:grid-cols-3"
        style={{ borderColor: "rgba(197,160,89,0.2)", background: "rgba(197,160,89,0.2)" }}
      >
        {lessons.map((lesson) => (
          <div key={lesson.title} className="bg-[#0a0a0b]">
            <a href={lesson.href} className="group block h-full p-6 sm:p-8 transition-colors hover:bg-[#141416]">
              <p className="t5-eyebrow text-[#c5a059]">{lesson.meta}</p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-4 sm:mt-5 leading-tight text-[#f4f4f5]">
                {lesson.title}
              </h3>
              <span className="mt-6 sm:mt-8 inline-flex items-center t5-eyebrow font-bold text-[#8a8a93] transition-colors group-hover:text-[#c5a059]">
                Read lesson
                <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={14} />
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const inquiryHref = "mailto:soyalsheikhwork@gmail.com?subject=Project%20Inquiry%20for%20soyalsheikhwork&body=Name%3A%0ABudget%3A%0ATimeline%3A%0AProject%20details%3A";

function ContactCta() {
  return (
    <section id="contact" className="px-4 py-20 sm:py-28 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl overflow-hidden">
        <div
          className="glass-card grid lg:grid-cols-[1.1fr_0.9fr]"
          style={{ border: "1px solid rgba(197,160,89,0.2)" }}
        >
          <div className="glass-border" />
          <div className="noise-overlay" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            <p className="t5-eyebrow text-[#c5a059]">High-intent contact</p>
            <h2 className="t2-section mt-4 sm:mt-5 text-balance text-[clamp(1.75rem,3.5vw,3.5rem)]">
              Have a serious project in mind?
            </h2>
            <p className="t4-body mt-5 sm:mt-6 max-w-xl text-sm sm:text-base">
              Send a concise brief with your goal, budget range, timeline, and
              what currently feels unclear. Good projects start with precise
              context.
            </p>
            <a
              href={inquiryHref}
              className="mt-8 sm:mt-10 inline-flex h-11 sm:h-12 items-center justify-center px-5 sm:px-6 t5-eyebrow text-[#050505] text-[0.65rem] sm:text-[0.7rem] transition-opacity hover:opacity-90"
              style={{ background: "#c5a059" }}
            >
              <Mail className="mr-2 sm:mr-3" size={14} />
              soyalsheikhwork@gmail.com
            </a>
          </div>

          <div
            className="relative z-10 border-t p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-12"
            style={{ borderColor: "rgba(197,160,89,0.2)", background: "rgba(5,5,5,0.6)" }}
          >
            <p className="t5-eyebrow text-[#e8d8b0]">Inquiry signal</p>
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
              {["Budget range", "Timeline", "Decision maker", "Project details"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b pb-3 sm:pb-4"
                  style={{ borderColor: "rgba(197,160,89,0.2)" }}
                >
                  <span className="t4-body text-sm">{item}</span>
                  <span className="size-2 rounded-full bg-[#c5a059]" />
                </div>
              ))}
            </div>
            <p className="t4-body mt-6 sm:mt-8 text-sm">
              The full Resend-powered Server Action form can be wired next with
              Zod validation and Turnstile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer
      className="border-t px-4 py-8 sm:py-10 sm:px-6 lg:px-8"
      style={{ borderColor: "rgba(197,160,89,0.2)", background: "#050505" }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-3 text-center sm:text-left md:flex-row">
        <p className="t5-eyebrow text-[#8a8a93]">© {new Date().getFullYear()} soyalsheikhwork</p>
        <p className="t5-eyebrow text-[#8a8a93]">Design · Strategy · Aesthetics</p>
      </div>
    </footer>
  );
}

// ─── Root page with Suspense for lazy components ─────────────────────────────
export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="relative isolate overflow-hidden" style={{ background: "#0a0a0b" }}>
        <HeroSection />
        <CapabilityStrip />
        
        <Suspense fallback={<div className="h-96 animate-pulse bg-[#0a0a0b]" />}>
          <AboutSectionLazy />
        </Suspense>
        
        <Suspense fallback={
          <div className="h-[600px] animate-pulse bg-[#0a0a0b] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[#c5a059] border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <PortfolioBentoLazy />
        </Suspense>
        
        <LessonsSection />
        <ContactCta />
      </main>

      <SiteFooter />
    </>
  );
}
