import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38_72%_50%_/_0.06)_0%,_transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            <span className="text-gradient-gold">NatyaVeda</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Explore the Cultural Intelligence of Indian Classical Dance
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/dances"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Explore Dances
            </Link>
            <Link
              to="/mudra-detection"
              className="inline-flex items-center rounded-lg border border-gold-subtle px-8 py-3 text-sm font-semibold text-foreground transition-all hover-gold-glow"
            >
              Try Mudra Detection
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
