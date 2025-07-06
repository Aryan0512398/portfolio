import { Barlow, Staatliches } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { UnlockProvider } from "./context/UnlockContext";
import UnlockLayout from "@/components/UnlockLayout";
import PageLoader from "@/components/PageLoader";

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-staatliches",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Prof.Dev",
  description: "Money Heist styled portfolio",
  icons: {
    icon: "/dali-mask.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${staatliches.variable} ${barlow.variable}`}>
      <body className="bg-black text-white font-sans">
        <UnlockProvider>
          <PageLoader />
          <div id="layout-wrapper">
            <UnlockLayout>{children}</UnlockLayout>
          </div>
          <Toaster position="top-center" />
        </UnlockProvider>
      </body>
    </html>
  );
}
