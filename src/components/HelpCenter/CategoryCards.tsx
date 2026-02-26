import { FileEdit, Tag, ShoppingCart, UserPlus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "契約変更",
    description: "契約内容の確認・変更手続き",
    icon: FileEdit,
    gradient: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/15 text-primary",
    articles: 3,
  },
  {
    title: "キャンペーン情報",
    description: "最新のキャンペーン・セール情報",
    icon: Tag,
    gradient: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/15 text-accent",
    articles: 5,
  },
  {
    title: "お買い物後",
    description: "購入履歴・配送状況・返品交換",
    icon: ShoppingCart,
    gradient: "from-success/10 to-success/5",
    iconBg: "bg-success/15 text-success",
    articles: 8,
  },
  {
    title: "会員登録",
    description: "アカウント作成・ログインについて",
    icon: UserPlus,
    gradient: "from-warning/10 to-warning/5",
    iconBg: "bg-warning/15 text-warning",
    articles: 4,
  },
];

const CategoryCards = () => {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">
            カテゴリから探す
          </h2>
          <p className="text-muted-foreground">お探しのトピックを選んでください</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href="#"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${cat.gradient} p-6 transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${cat.iconBg}`}>
                <cat.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </div>
              <div className="mt-auto flex w-full items-center justify-between pt-2">
                <span className="text-xs font-medium text-muted-foreground">{cat.articles} 記事</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
