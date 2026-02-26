import { ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-4 py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4 text-primary" />
          <span className="text-sm font-bold text-primary">ZenShop</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">お問い合わせ</a>
          <a href="#" className="hover:text-primary transition-colors">会社概要</a>
          <a href="#" className="hover:text-primary transition-colors">利用規約</a>
          <a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a>
        </div>
        <p className="text-[11px] text-muted-foreground">© ZenShop, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
