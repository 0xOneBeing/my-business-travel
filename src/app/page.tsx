import AppHeader from "@/components/Header/AppHeader";
import HomePage from "./homepage/homepage";
import AppFooter from "@/components/Footer/AppFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <HomePage />
      <AppFooter />
    </div>
  );
}
