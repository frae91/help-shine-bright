import { Search } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const popularTags = ["利用停止措置", "身に覚えのない注文", "ポイント引き出し", "置き配", "メールアドレス変更", "返品方法"];

const HeroSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="bg-card px-4 pb-10 pt-10 md:pb-14 md:pt-14">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-2 text-xl font-bold text-foreground md:text-2xl"
        >
          ヘルプ・お問い合わせ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 text-sm text-muted-foreground"
        >
          どんなことにお困りでしょうか？
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="relative mx-auto mb-5 max-w-lg"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="例：ログインできない"
            className="h-12 w-full rounded-full border border-border bg-card pl-5 pr-12 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-ring"
          />
          <button className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90">
            <Search className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {popularTags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {tag}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSearch;
