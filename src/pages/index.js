import {
  About,
  Footer,
  House,
  Navbar,
  Portofolio,
  Sertifikasi,
  Skill,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-neutral-950">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://static-00.iconduck.com/asse ts.00/nextjs-icon-1024x1024-5et230l7.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Background Gradient */}
      <div className="absolute top-0 left-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main Content */}
      <main className="relative z-10">
        <Navbar />
        <House />
        <About />
        <Skill />
        <Portofolio />
        <Sertifikasi />
        <Footer />
      </main>
    </div>
  );
}
