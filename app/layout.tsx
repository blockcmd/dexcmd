import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

const spaceMono = IBM_Plex_Mono({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dexCMD - Command your blocks",
  description: "Explore blockchains with an intuitive product suite",
  metadataBase: new URL("https://www.dexcmd.com"),
  openGraph: {
    title: "dexCMD - Command your blocks",
    description: "Explore blockchains with an intuitive product suite",
    url: "https://www.dexcmd.com",
    siteName: "dexCMD",
    images: [
      {
        url: "/dexcmd-tbn.png",
        width: 1200,
        height: 630,
        alt: "og-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "dexCMD - Command your blocks",
    description: "Explore blockchains with an intuitive product suite",
    creator: "@zxstim",
    images: ["/dexcmd-tbn.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <main className="flex flex-col gap-8 items-center justify-center py-12 px-4 lg:p-16">
          <div className="flex flex-col gap-12 max-w-5xl">
            {children}
            <Toaster />
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
