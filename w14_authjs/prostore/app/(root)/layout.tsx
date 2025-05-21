import Header23 from "@/components/shared/header_23";
import ModeToggle from "@/components/shared/dark_toggle";
import Footer_23  from "@/components/shared/footer/footer_23";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:'123123'
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen flex-col">
          <Header23 />
            <main className="flex-1 wrapper">
                {children}
            </main>
            <Footer_23 />
        </div>
    );
  }