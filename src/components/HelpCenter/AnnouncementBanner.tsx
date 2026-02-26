import { AlertCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="border-b border-warning/20 bg-warning/10 px-6 py-3"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 text-sm">
        <AlertCircle className="h-4 w-4 shrink-0 text-warning" />
        <span className="font-medium text-foreground">
          【⚠️ 重要なお知らせ】秋の大感謝祭キャンペーン間も無く終了いたします（11月30日まで!）
        </span>
        <button
          onClick={() => setVisible(false)}
          className="ml-2 shrink-0 rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default AnnouncementBanner;
