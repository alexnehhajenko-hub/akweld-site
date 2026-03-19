import HomePageContent from "@/src/components/HomePageContent";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <SiteHeader locale="en" />
        </div>
      </div>

      <main>
        <HomePageContent locale="en" />
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
