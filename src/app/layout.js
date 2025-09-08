'use client'

import ReactCountryFlag from "react-country-flag";
import { Playfair_Display, Lora, Noto_Serif_Hebrew } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Menu } from "lucide-react";
import { formats } from "../../utils/formats";
import Image from "next/image";
import { STRINGS } from "../../utils/STRINGS";
import { ImagePreview } from "../../utils/ImagePreview";

const LANGUAGES = ['en', 'he']
const FLAGS = {'en': '🇬🇧','he': ''}
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"], // regular + bold for flexibility
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"], // slightly softer than normal
});

const notoSerifHebrew = Noto_Serif_Hebrew({
  variable: "--font-hebrew",
  subsets: ["hebrew"], // 👈 must include Hebrew
  weight: ["400", "700"], // regular + bold
});

function LanguageSwitch() {
  const context = useContext(ImagePreview)

  return <h1
      className={`hover:text-neutral-500 transition-colors duration-150 text-zinc-900 text-1xl font-thin`}
       style={{ fontFamily: "var(--font-heading) var(--font-hebrew)"}}
      onClick={()=>context.setLanguage(prev=>LANGUAGES[(LANGUAGES.findIndex((v)=>v===prev)+1)%LANGUAGES.length])}
    >
      <ReactCountryFlag className="me-2" countryCode={STRINGS.misc.cc[context.language]} svg style={{ width: "1em", height: "1em" }} />
      {STRINGS.misc.lang[context.language]}
      
    </h1>
}

function Sidenav() {

  const language = useContext(ImagePreview).language;
  const pathname = usePathname();

  function Navbutton({ title, link }) {
    return <Link
      href={link}
      className={`hover:text-neutral-500 transition-colors duration-150 text-zinc-900 text-2xl font-thin ${lora.variable} ` + (pathname === link ? "underline decoration-slate-500" : "")}
      style={{ fontFamily: "var(--font-heading) var(--font-hebrew)", textShadow:"2px 2px 2px rgba(0, 0, 0, 0.2)" }}
    >
      {title}
    </Link>
  }

  return (<div className="flex flex-col" dir={language === "he" ? "rtl" : "ltr"}>
    <h1
      style={{ fontFamily: "var(--font-body) var(--font-hebrew)" }}
      className="text-3xl text-shadow-black text-zinc-900 font-semibold md:block hidden">
      Liza Zabarsky<br></br>
      ליזה זברסקי
      
    </h1>

    <div className="h-8 md:block hidden" ></div>

    <div className="flex-col flex">
      <Navbutton title={STRINGS.titles.home[language]} link="/"></Navbutton>
      <Navbutton title={STRINGS.titles.oil[language]} link="/oil"></Navbutton>
      <Navbutton title={STRINGS.titles.mixed[language]} link="/mixed"></Navbutton>
    {/* <div className="h-4"></div>
      <Navbutton title={STRINGS.titles.books[language]} link="/books"></Navbutton> */}
    <div className="h-4"></div>
      <Navbutton title={STRINGS.titles.about[language]} link="/about"></Navbutton>
      <Navbutton title={STRINGS.titles.contact[language]} link="/contact"></Navbutton>
    </div>

    <div className="h-8">

    </div>

    <LanguageSwitch></LanguageSwitch>

  </div>)
}

function MobileNav({openNav}) {
  return <div className="flex flex-row ">
    <h1
      style={{ fontFamily: "var(--font-body)" }}
      className="text-3xl text-shadow-black text-zinc-900 font-semibold">
      Liza Zabarsky
    </h1>
    <div className="flex-1"></div>
    
                  <button
                  onClick={openNav}
                    className="flex-none flex items-center justify-center"
                  >
                    <Menu size={36} color="#222222" />
                  </button>
  </div>
}

export default function RootLayout({ children }) {
  const [artworks, setArtworks] = useState([])
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewIndex, setPreviewIndex] = useState(0)
  const [sidenavOpen, setSidenavOpen] = useState(false)
  const pathname = usePathname();

  const [language, setLanguage] = useState("en"); 

useEffect(() => {
  const stored = localStorage.getItem("userLocale");
  if (stored) setLanguage(stored);
}, []);

useEffect(() => {
  localStorage.setItem("userLocale", language);
}, [language]);


  const prev = () => {
    setPreviewIndex(previewIndex == 0 ? artworks.length - 1 : previewIndex - 1)
  }

  const next = () => {
    setPreviewIndex((previewIndex + 1) % (artworks.length))
  }

  const close = () => {
    setPreviewOpen(false)
  }

  useEffect(()=>{setSidenavOpen(false)}, [pathname, previewOpen])

  return (
    <ImagePreview.Provider value={{
      open: (index, artworks) => {
        setPreviewOpen(true)
        setArtworks(artworks)
        setPreviewIndex(index)
      },
      language: language,
      setLanguage: setLanguage
    }}>
      <html lang={language}>
        <body
          className={`${playfair.variable} ${lora.variable} ${notoSerifHebrew.variable} antialiased max-h-full bg-neutral-50 text-neutral-900`}
        >
          <main className="h-screen flex-1 flex flex-col w-full max-h-fullcenter bg-neutral-50" dir={language === "he" ? "rtl" : "ltr"}>
            <div className="flex flex-1 gap-6 p-6 w-fill  overflow-y-hidden">
              <div className="flex-none md:block hidden">
                <Sidenav setLanguage={setLanguage}/>
              </div>

              
               <div
  className={`absolute top-17 left-0 h-full w-64 bg-neutral-100 z-50 
              transform transition-transform duration-300 ease-in-out p-5
              md:hidden
              ${sidenavOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  <Sidenav  setLanguage={setLanguage}/>
</div>

             

              <div className="w-0.5 max-h-full bg-zinc-400 md:block hidden"/>
              

              <div className="flex-1 max-h-full md:pl-[10%] md:pr-[10%] pr-0 pl-0 scroll-auto overflow-y-auto" dir="ltr">
                <div className="md:hidden block">
                <MobileNav openNav={()=>setSidenavOpen(!sidenavOpen)}></MobileNav>
                </div>
                {children}
              </div>
            </div>

            {previewOpen &&
              <div className="absolute h-screen w-screen z-10 bg-black/90 flex flex-col" dir="ltr">
                <div className="flex-none p-5 relative">
                  <button
                    onClick={close}
                    className="flex-none flex items-center justify-center ml-auto z-20"
                  >
                    <X size={36} color="#DDDDDD" />
                  </button>
                </div>
                <div className="flex items-center w-full gap-5 p-5 pt-0">

                  <button
                    onClick={prev}
                    className="absolute -translate-y-1/2 md:translate-y-0 top-1/2 md:static flex-none flex items-center justify-center z-20"
                  >
                    <ChevronLeft size={36} color="#DDDDDD" />
                  </button>

                  <div className=" -translate-y-1/2 md:translate-y-0 top-1/2 absolute md:static md:flex-1 md:justify-center md:text-center md:flex md:flex-col md:gap-4.5">
                    <img
                      src={artworks[previewIndex].src}
                      alt={artworks[previewIndex].metadata?.title[language] || ""}
                      className="w-screen left-0 md:w-auto md:mx-auto md:max-h-[80vh] md:max-w-[90vw] md:object-contain shadow-lg shadow-black/70"
                    />
                    <h1 className=" left-0 right-0 md:mt-1 mt-5 text-center md:translate-0 bottom-10 md:text-2xl text-neutral-50" style={{ textShadow: "0px 2px 4px rgba(255,255,255,0.5)", "fontSize": "1.2rem", fontWeight: 700 }}>
                      {formats.title(artworks[previewIndex].metadata, language)}
                    </h1>
                    <h1 dir="auto" className=" left-0 right-0  text-center md:translate-0 bottom-30 md:text-2xl text-neutral-50" style={{ textShadow: "0px 2px 4px rgba(255,255,255,0.5)", "fontSize": "1.2rem" }}>
                      {formats.details(artworks[previewIndex].metadata, language)}
                    </h1>
                  </div>
                  <button
                    onClick={next}
                    className="absolute -translate-y-1/2 md:translate-y-0 top-1/2 md:static right-0 flex-none flex items-center justify-center z-20"
                  >
                    <ChevronRight size={36} color="#DDDDDD" />
                  </button>

                </div>
              </div>
            }
          </main>
        </body>
      </html>
    </ImagePreview.Provider>
  );
}
