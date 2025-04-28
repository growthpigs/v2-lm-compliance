import Header from "@/polymet/components/header";
import Footer from "@/polymet/components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
