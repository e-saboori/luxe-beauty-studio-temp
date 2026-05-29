import type { Metadata } from "next";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions before booking at Sepid Beauty Studio."
};

export default function FAQPage() {
  return <FAQSection />;
}
