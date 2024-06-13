import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinul Haque | Full Stack Software Engineer & DevOps Specialist",
  description: "Dinul Haque is a skilled Full Stack Software Engineer and DevOps Specialist with a decade of experience in crafting robust and scalable solutions. Explore his projects, skills, and expertise in web development, software engineering, and DevOps.",
  keywords: "Dinul Haque, software engineer, full stack developer, DevOps specialist, web development, software engineering, DevOps, continuous integration, continuous deployment, agile methodologies, scalable solutions, portfolio, projects",
  authors: [{ name: "Dinul Haque" }],
  openGraph: {
    title: "Dinul Haque | Full Stack Software Engineer & DevOps Specialist",
    description: "Dinul Haque is a skilled Full Stack Software Engineer and DevOps Specialist with a decade of experience in crafting robust and scalable solutions. Explore his projects, skills, and expertise in web development, software engineering, and DevOps.",
    type: "website",
    url: "https://www.dinulhaque.com",
    images: [
      {
        url: "https://www.dinulhaque.com/2022.jpg",
        width: 1200,
        height: 630,
        alt: "Dinul Haque - Full Stack Software Engineer & DevOps Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinul Haque | Full Stack Software Engineer & DevOps Specialist",
    description: "Dinul Haque is a skilled Full Stack Software Engineer and DevOps Specialist with a decade of experience in crafting robust and scalable solutions. Explore his projects, skills, and expertise in web development, software engineering, and DevOps.",
    creator: "@dinulhaque",
    images: ["https://www.dinulhaque.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
