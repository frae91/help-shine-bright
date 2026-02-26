import { ShoppingCart, Clock, Star, History, Receipt, Gift } from "lucide-react";

const Navbar = () => {
  const quickLinks = [
    { label: "買い物かご", icon: ShoppingCart },
    { label: "閲覧履歴", icon: Clock },
    { label: "お気に入り", icon: Star },
    { label: "購入履歴", icon: History },
    { label: "クーポン", icon: Gift },
  ];

  return (
    <header className="border-b border-border bg-card">
      {/* Top banner */}
      <div className="sale-badge px-4 py-2 text-center text-xs font-bold tracking-wide">
        🎉 秋の大感謝祭キャンペーン開催中！11月30日まで — 最大50%OFF 🎉
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <ShoppingCart className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <span className="text-xl font-bold text-primary">ZenShop</span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex flex-col items-center gap-0.5 px-3 py-1 text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
