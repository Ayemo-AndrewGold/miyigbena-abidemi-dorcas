import type { Metadata } from "next";
import "./globals.css";
import GlobalWidgets from "@/layout/GlobalWidgets";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: "Miyigbena Abidemi Dorcas | Pharmacist",
  description:
    "Meet Miyigbena Abidemi Dorcas, a pharmacist working across patient-centred care, pharmacy operations and pharmaceutical data analysis.",
  openGraph: {
    title: "Miyigbena Abidemi Dorcas | Pharmacist",
    description:
      "Patient-centred pharmacy care and pharmaceutical market insight.",
    type: "website",
    locale: "en_NG",
    ...(metadataBase
      ? {
          images: [
            {
              url: "/miyigbena-portrait.jpg",
              width: 1204,
              height: 1464,
              alt: "Portrait of Miyigbena Abidemi Dorcas",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title: "Miyigbena Abidemi Dorcas | Pharmacist",
    description:
      "Patient-centred pharmacy care and pharmaceutical market insight.",
    ...(metadataBase ? { images: ["/miyigbena-portrait.jpg"] } : {}),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="min-h-full antialiased">
      <body className="min-h-screen">
        
        {children}
        <GlobalWidgets />

      </body>
    </html>
  );
}
