import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Dance } from "@/data/dances";

interface DanceCardProps {
  dance: Dance;
  index?: number;
}

const DanceCard = ({ dance, index = 0 }: DanceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group rounded-xl border border-gold-subtle bg-card p-5 transition-all hover-gold-glow">
        <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <img
            src={dance.imageUrl}
            alt={dance.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-4">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {dance.name}
          </h3>
          <p className="mt-1 text-xs text-primary font-medium">{dance.origin}</p>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {dance.shortDescription}
          </p>
          <Link
            to={`/dances/${dance.id}`}
            className="mt-4 inline-flex text-sm font-medium text-primary transition-colors hover:text-gold-light"
          >
            Explore →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DanceCard;
