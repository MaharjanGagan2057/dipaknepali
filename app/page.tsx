import Image from "next/image";



export const metadata = {
  title: "Dipak Nepali – Web Developer & Software Engineer in Nepal",
  description:
    "Dipak Nepali is a professional web developer in Nepal specializing in Next.js, React, and SEO-friendly websites.",
  keywords: [
    "Dipak Nepali",
    "Web Developer Nepal",
    "Next.js Developer Nepal",
    "SEO Expert Nepal",
  ],
  openGraph: {
    title: "Dipak Nepali – Web Developer Nepal",
    description:
      "Professional Next.js & SEO web developer from Nepal",
    url: "https://dipaknepali.com.np",
    siteName: "Dipak Nepali",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="display flex h-screen  w-screen items-center justify-between ">
    <div className="w-[50%] h-screen bg-amber-200">
      
    </div>
    <div className="w-[50%] h-screen bg-pink-200">
    
    </div>
     
    </div>
    
  );
}
