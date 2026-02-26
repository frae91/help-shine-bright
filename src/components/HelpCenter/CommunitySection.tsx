import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const CommunitySection = () => {
  return (
    <section className="bg-card px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-4 rounded-lg border border-primary/20 bg-primary/5 p-8 text-center md:p-10"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="mb-1 text-base font-bold text-foreground">チャットで相談</h3>
            <p className="text-sm text-muted-foreground">
              解決しない場合は、お気軽にお問い合わせください。
            </p>
          </div>
          <a
            href="#"
            className="rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            お問い合わせフォーム
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
