import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    title: "ご注文のキャンセル方法",
    description: "注文から30分以内であれば、購入履歴からキャンセル手続きが可能です。また、注文から30分以降は、キャンセルポリシーを確認のうえ、直接ショップへご連絡く...",
  },
  {
    title: "商品の配送状況を確認したい",
    description: "商品の配送状況は「購入履歴」または「通知機能(Push通知・お知らせ)」からご確認いただけます。※ショップの処理状況・配送状況・配送方法により、表示されない...",
  },
  {
    title: "領収書・請求書について",
    description: "領収書・請求書については以下をご覧ください。楽天市場における「適格請求書等保存方式（インボイス制度）」への対応 ショップが適格請求書発行事業者であ...",
  },
  {
    title: "お支払いに関するよくあるご質問",
    description: "お支払いに関するよくあるご質問は、以下をご覧ください。支払い方法の変更・修正をしたい 銀行振込(前払い)でのお支払い方法 ファミリーマート・ローソン等...",
  },
  {
    title: "キャンペーン参加方法",
    description: "現在開催中のキャンペーンへの参加方法をご案内いたします。エントリー方法やポイント付与条件をご確認ください。",
  },
];

const FaqList = () => {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-lg font-bold text-foreground"
        >
          よくある質問
        </motion.h2>

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {faqs.map((faq, i) => (
            <motion.a
              key={faq.title}
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`group flex items-start gap-3 px-5 py-4 transition-colors hover:bg-muted ${
                i < faqs.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {faq.title}
                </h3>
                <p className="line-clamp-1 text-xs text-muted-foreground">{faq.description}</p>
              </div>
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqList;
