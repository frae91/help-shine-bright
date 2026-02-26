import Navbar from "@/components/HelpCenter/Navbar";
import AnnouncementBanner from "@/components/HelpCenter/AnnouncementBanner";
import HeroSearch from "@/components/HelpCenter/HeroSearch";
import CategoryCards from "@/components/HelpCenter/CategoryCards";
import FeaturedArticles from "@/components/HelpCenter/FeaturedArticles";
import RecentActivity from "@/components/HelpCenter/RecentActivity";
import CommunitySection from "@/components/HelpCenter/CommunitySection";
import Footer from "@/components/HelpCenter/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnnouncementBanner />
      <HeroSearch />
      <CategoryCards />
      <FeaturedArticles />
      <RecentActivity />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
