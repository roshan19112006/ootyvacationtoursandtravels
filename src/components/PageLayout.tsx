import { useEffect, type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: object;
}

export default function PageLayout({
  children,
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  structuredData,
}: PageLayoutProps) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | Ooty Vacation Tours & Travels`;
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute("content", `${title} | Ooty Vacation Tours & Travels`);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) {
      ogDesc.setAttribute("content", description);
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag && ogImage) {
      ogImageTag.setAttribute("content", ogImage);
    }

    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag && ogUrl) {
      ogUrlTag.setAttribute("content", ogUrl);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute("content", `${title} | Ooty Vacation Tours & Travels`);
    }

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc && description) {
      twitterDesc.setAttribute("content", description);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage && ogImage) {
      twitterImage.setAttribute("content", ogImage);
    }

    // Add structured data
    if (structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"][data-page]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-page", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        script.remove();
      };
    }
  }, [title, description, keywords, ogImage, ogUrl, structuredData]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
