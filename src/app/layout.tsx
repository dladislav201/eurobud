import { ReactNode } from "react";
import { Inter } from "next/font/google";

import "@/app/styles/utils/_variables.scss";
import "@/app/styles/utils/_utilities.scss";
import "@/app/styles/utils/_mixins.scss";
import "@/app/styles/utils/_button.scss";
import "@/app/styles/utils/_animation.scss";
import "@/app/styles/utils/_typography.scss";
import "@/app/styles/utils/_input.scss";
import "@/app/styles/global.scss";
import "@/app/styles/blocks/global.scss";
import "@/app/styles/blocks/btnGroove.scss";
import "@/app/styles/blocks/conversation.scss";
import "@/app/styles/blocks/homePage.scss";
import "@/app/styles/blocks/gatesPage.scss";
import "@/app/styles/blocks/productFeatures.scss";
import "@/app/styles/blocks/panorama.scss";
import "@/app/styles/blocks/gates.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
