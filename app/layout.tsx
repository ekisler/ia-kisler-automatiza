export const metadata = {
  title: "IA Kisler Automatiza",
  description: "Automatización de procesos con n8n.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://learn-n8n.vercel.app/",
    site_name: "Learn-n8n",
    images: [
      {
        url: "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029032/images/ec2aee91c29b66c89d53c55a113dba5d_ryuw1s.jpg",
        width: 1200,
        height: 630,
        alt: "Learn n8n",
      },
    ],
  },
  twitter: {
    handle: "@ekracing",
    site: "@ekracing",
    cardType: "summary_large_image",
  },
};

import { montserrat } from "./ui/fonts";
import "@/app/ui/global.css";
import { ConfigProvider } from "antd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ConfigProvider>{children}</ConfigProvider>
        <footer className="py-10 flex justify-center items-center">
        </footer>
      </body>
    </html>
  );
}
