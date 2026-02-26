import { Clock, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  {
    section: "春のキャンペーン",
    title: "春のキャンペーン",
    timeAgo: "1 年前に記事が作成されました",
    comments: 0,
  },
  {
    section: "サマーセール開催",
    title: "追加のキャンペーン",
    timeAgo: "2 年前に記事が作成されました",
    comments: 0,
  },
  {
    section: "ZenShopに関してどう思いますか？",
    title: "翌日配達サービスを提供してほしい",
    timeAgo: "2 年前にコメントが追加されました",
    comments: 4,
  },
  {
    section: "名義変更",
    title: "名義変更方法",
    timeAgo: "2 年前に記事が作成されました",
    comments: 0,
  },
];

const RecentActivity = () => {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-3xl"
        >
          最近のアクティビティ
        </motion.h2>

        <div className="space-y-3">
          {activities.map((act, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ x: -16, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:card-shadow-hover hover:border-primary/20"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 text-xs font-medium text-primary">{act.section}</p>
                <h4 className="mb-1 font-display text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {act.title}
                </h4>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{act.timeAgo}</span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    コメント数: {act.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
