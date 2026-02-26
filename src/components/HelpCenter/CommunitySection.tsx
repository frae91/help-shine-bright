import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CommunitySection = () => {
  return (
    <section id="community" className="px-6 py-16 md:py-20">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl rounded-3xl hero-gradient p-10 text-center md:p-16"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/15">
          <Users className="h-8 w-8 text-primary-foreground" />
        </div>
        <h2 className="mb-3 font-display text-2xl font-bold text-primary-foreground md:text-3xl">
          コミュニティ
        </h2>
        <p className="mb-8 text-primary-foreground/80">
          会話に参加しましょう。他のユーザーと情報を共有して、一緒に問題を解決しましょう。
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-6 py-3 font-medium text-primary transition-all hover:opacity-90"
        >
          コミュニティに参加する
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
