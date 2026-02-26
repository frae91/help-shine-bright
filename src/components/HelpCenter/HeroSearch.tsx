import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const HeroSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden hero-gradient px-6 py-20 md:py-28">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/5" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-primary-foreground/5" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl"
        >
          何かお困りですか？
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-lg text-primary-foreground/80"
        >
          ZenShopヘルプセンターへようこそ。キーワードで検索してください。
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto max-w-xl"
        >
          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="検索..."
            className="h-14 w-full rounded-2xl border-0 bg-card pl-14 pr-6 text-base text-card-foreground shadow-lg outline-none ring-0 placeholder:text-muted-foreground focus:ring-2 focus:ring-primary-foreground/30"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSearch;
