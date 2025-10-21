import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

interface IRootLayoutProps {
  children: React.ReactNode;
  params:any;
}

export default function RootLayout({ children, params }: IRootLayoutProps) {
  return (
    <html lang={params.locale}>
      <body className={`${inter.className} antialiased`}> {children}</body>
    </html>
  );
}
