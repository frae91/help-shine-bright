import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "キャンペーン参加方法",
    description: "現在開催中のキャンペーンへの参加手順を分かりやすく解説します。",
    tag: "人気記事",
  },
  {
    title: "春のキャンペーン",
    description: "春の特別セール情報をご確認ください。お得な情報が満載です。",
    tag: "キャンペーン",
  },
  {
    title: "名義変更方法",
    description: "アカウントの名義変更を行う方法をステップごとにご案内します。",
    tag: "契約変更",
  },
];

const FeaturedArticles = () => {
  return (
    <section className="hero-gradient-subtle px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center justify-center gap-2"
        >
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            ピックアップ記事
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="#"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
            >
              <div>
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {article.tag}
                </span>
                <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{article.description}</p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                続きを読む
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
