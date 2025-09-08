'use client'

import { useContext } from "react";
import Socials from "../../components/socials";
import "../globals.css";
import { ImagePreview } from "../../../utils/ImagePreview";
import { STRINGS } from "../../../utils/STRINGS";

export default function Page() {
    const language = useContext(ImagePreview).language

    return <div className={`h-full mx-auto items-center flex md:flex-row flex-col md:pt-0 pt-10`}>
        <div className="flex-1 mr-12" >
        <h1 className="text-zinc-900 text-2xl mb-4 font-bold" dir="auto"  style={{ fontFamily: "var(--font-heading) var(--font-hebrew)"}}>{STRINGS.titles.contact[language]}</h1>

        <div className="flex flex-row">
        <h1 className="text-zinc-900 text-3xl mb-4" style={{ fontFamily: "var(--font-heading)"}}>Liza Zabarsky</h1>
            <div className="flex-1 min-w-2.5"></div>
        <h1 className="text-zinc-900 text-3xl mb-4"  style={{ fontFamily: "var(--font-heading) var(--font-hebrew)"}}>ליזה זברסקי</h1>
          </div>

          <div className="items-center flex flex-col">

        <h1 className="text-zinc-900 text-2xl">lizazabar@gmail.com</h1>
        
        <div  className={`flex ${language === "he" ? "flex-row-reverse" : "flex-row"}`}>
        <h1 className="text-zinc-900 text-2xl mb-4" dir="auto">{STRINGS.misc.tel[language]}:</h1><h1 className="w-2">{" "}</h1><h1 className="text-zinc-900 text-2xl mb-4">+975 507393995</h1>
        </div>
        
        <Socials className="text-2xl"></Socials>
        <h1 className="text-zinc-900 mt-3" dir="auto" style={{"fontSize": "1.3rem", fontFamily: "var(--font-heading) var(--font-hebrew)"}} >*{STRINGS.misc.forSale[language]}</h1>
        </div>
        </div>
        <div className="flex-none flex flex-col max-w-100">
            <img className="max-h-full" src="/images/1 lighthouse.jpg"/>
        </div>
    </div>
    

}