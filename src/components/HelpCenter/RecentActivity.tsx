import { Clock, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  { section: "春のキャンペーン", title: "春のキャンペーン", time: "1 年前", comments: 0 },
  { section: "サマーセール開催", title: "追加のキャンペーン", time: "2 年前", comments: 0 },
  { section: "コミュニティ", title: "翌日配達サービスを提供してほしい", time: "2 年前", comments: 4 },
  { section: "名義変更", title: "名義変更方法", time: "2 年前", comments: 0 },
];

const RecentActivity = () => {
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
          最近のアクティビティ
        </motion.h2>

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {activities.map((act, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`group flex items-center gap-3 px-5 py-4 transition-colors hover:bg-muted ${
                i < activities.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <Clock className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-semibold text-primary">{act.section}</span>
                <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {act.title}
                </h4>
              </div>
              <div className="flex shrink-0 items-center gap-3 text-[11px] text-muted-foreground">
                <span>{act.time}</span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {act.comments}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
