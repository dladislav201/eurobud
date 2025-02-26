"use client";

import { useParams } from "next/navigation";
import { TranslationProvider } from "@/i18n/TranslationProvider";
import { ContactInfo, Footer, GlobalNav } from "@/components";
import { ReactNode } from "react";
import { Locale } from "@/i18n";

interface LangLayoutProps {
  children: ReactNode;
}

export default function LangLayout({ children }: LangLayoutProps) {
  const params = useParams();
  const locale = params.lang as Locale;

  return (
    <TranslationProvider locale={locale}>
      <GlobalNav />
      {children}
      <ContactInfo />
      <Footer />
    </TranslationProvider>
  );
}
