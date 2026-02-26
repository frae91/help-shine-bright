import Navbar from "@/components/HelpCenter/Navbar";
import HeroSearch from "@/components/HelpCenter/HeroSearch";
import FaqList from "@/components/HelpCenter/FaqList";
import CategoryCards from "@/components/HelpCenter/CategoryCards";
import RecentActivity from "@/components/HelpCenter/RecentActivity";
import CommunitySection from "@/components/HelpCenter/CommunitySection";
import Footer from "@/components/HelpCenter/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSearch />
      <FaqList />
      <CategoryCards />
      <RecentActivity />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
