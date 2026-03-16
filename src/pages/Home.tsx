import Hero from "@/components/Hero";
import DanceCard from "@/components/DanceCard";
import FeatureCard from "@/components/FeatureCard";
import { dances } from "@/data/dances";
import { Network, History, Hand, PlayCircle } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Cultural Knowledge Graph",
    description: "Discover interconnected relationships between dances, mudras, rasas, and deities.",
  },
  {
    icon: History,
    title: "Dance History Explorer",
    description: "Journey through centuries of tradition, evolution, and artistic mastery.",
  },
  {
    icon: Hand,
    title: "Mudra Detection",
    description: "Use AI-powered hand gesture recognition to identify classical dance mudras.",
  },
  {
    icon: PlayCircle,
    title: "Multimedia Learning",
    description: "Learn through videos, images, and interactive content curated by experts.",
  },
];

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Dance Forms Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Explore Dance Forms
            </h2>
            <p className="mt-3 text-muted-foreground">
              Discover the rich traditions of Indian classical dance
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dances.map((dance, i) => (
              <DanceCard key={dance.id} dance={dance} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gold-subtle py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Platform Features
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tools and experiences designed for cultural exploration
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
