import { Search, ShoppingBag, Percent } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/hero-shopping.png";

const HeroSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-card px-6 py-12 md:py-0">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
        {/* Text side */}
        <div className="flex-1 py-8 md:py-20">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full sale-badge px-4 py-1.5 text-sm font-semibold"
          >
            <Percent className="h-3.5 w-3.5" />
            秋の大感謝祭セール開催中
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 font-display text-4xl font-extrabold leading-tight text-foreground md:text-5xl"
          >
            何かお困り
            <span className="text-gradient">ですか？</span>
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 max-w-md text-base text-muted-foreground md:text-lg"
          >
            ZenShopヘルプセンターへようこそ。お探しの情報をキーワードで検索してください。
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-lg"
          >
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="例：返品、キャンペーン、配送..."
              className="h-14 w-full rounded-2xl border border-border bg-background pl-12 pr-4 text-base text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {["返品方法", "配送状況", "会員登録"].map((tag) => (
              <button
                key={tag}
                className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Image side */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <img
            src={heroImage}
            alt="ZenShopオンラインショッピング"
            className="w-full max-w-lg mx-auto rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSearch;
