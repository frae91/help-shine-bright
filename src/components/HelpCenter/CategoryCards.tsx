import { FileEdit, Tag, ShoppingCart, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "契約変更",
    description: "契約内容の確認・変更手続き",
    icon: FileEdit,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "キャンペーン情報",
    description: "最新のキャンペーン・セール情報",
    icon: Tag,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "お買い物後",
    description: "購入履歴・配送状況・返品交換",
    icon: ShoppingCart,
    color: "bg-success/10 text-success",
  },
  {
    title: "会員登録",
    description: "アカウント作成・ログインについて",
    icon: UserPlus,
    color: "bg-warning/10 text-warning",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const CategoryCards = () => {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-3xl"
        >
          カテゴリ
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.title}
              variants={item}
              href="#"
              className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${cat.color}`}>
                <cat.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryCards;
