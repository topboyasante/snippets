import Footer from "@/components/navigation/general/footer";
import Navbar from "@/components/navigation/landing-page/navbar";

interface LandingPageProps {
  children: React.ReactNode;
}

export default function LandingPage({ children }: LandingPageProps) {
  return (
    <div>
      <Navbar />
      {/* <div className="pt-[8vh] max-w-screen-xl mx-auto p-5">{children}</div> */}
      {children}
      <Footer />
    </div>
  );
}
