import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Tulsi Sahyadri | Prime Extravaganza",
  description: "Discover Prime Extravaganza, spacious 2 & 3 BHK residences at Khanda Colony, Panvel by Tulsi Sahyadri.",
  keywords: ["real estate", "apartments", "residential projects", "property"],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
