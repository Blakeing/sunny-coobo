import "../../styles/globals.css";
import { Montserrat, Open_Sans } from "@next/font/google";
import clsx from "clsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
    >
      <body>
        <header className="font-openSans">Header</header>
        <div className="font-montserrat">Banner</div>
        {children}
      </body>
    </html>
  );
}
