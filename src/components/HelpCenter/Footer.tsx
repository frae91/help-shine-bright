import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg hero-gradient">
            <ShoppingBag className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">ZenShop ヘルプセンター</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">お問い合わせ</a>
          <a href="#" className="hover:text-foreground transition-colors">会社概要</a>
          <a href="#" className="hover:text-foreground transition-colors">利用規約</a>
          <a href="#" className="hover:text-foreground transition-colors">プライバシーポリシー</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
