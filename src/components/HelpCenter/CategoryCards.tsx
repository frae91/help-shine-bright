import { FileEdit, Tag, ShoppingCart, UserPlus, CreditCard, Truck } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "契約変更",
    icon: FileEdit,
    links: ["名義変更", "プラン変更", "その他"],
  },
  {
    title: "キャンペーン情報",
    icon: Tag,
    links: ["春のキャンペーン", "サマーセール", "秋の感謝祭"],
  },
  {
    title: "お支払い・決済",
    icon: CreditCard,
    links: ["クレジットカード", "銀行振込", "後払い", "その他"],
  },
  {
    title: "お買い物後",
    icon: ShoppingCart,
    links: ["購入履歴について", "キャンセル・返品", "ショップとの連絡"],
  },
  {
    title: "お届け・配送",
    icon: Truck,
    links: ["配送状況確認", "送料", "届かない場合"],
  },
  {
    title: "会員登録",
    icon: UserPlus,
    links: ["ログイン", "登録・変更・削除", "メルマガ", "その他"],
  },
];

const CategoryCards = () => {
  return (
    <section className="bg-card px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-lg font-bold text-foreground"
        >
          カテゴリから探す
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2.5">
                <cat.icon className="h-5 w-5 text-primary" />
                <h3 className="text-sm font-bold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs text-primary underline-offset-2 hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
