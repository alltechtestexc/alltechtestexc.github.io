'use client'

import { useContext } from "react";
import Socials from "../../components/socials";
import "../globals.css";
import { ImagePreview } from "../../../utils/ImagePreview";
import { STRINGS } from "../../../utils/STRINGS";

export default function Page() {
const artworks = [{
    src: "/books/page2_1.jpg"
},{
    src: "/books/page2_2.jpg"
}]

    const context = useContext(ImagePreview)
return <div className="flex-col flex justify-evenly gap-10 flex-1 w-full items-stretch">
    <div className="mx-auto items-center flex w-full md:flex-row flex-col md:pt-0 pt-10">
             <div className="flex-1 md:mr-12 w-full">
                <div className="flex flex-row justify-between align-baseline">
                <h1 className="text-zinc-900 text-2xl mb-4 font-bold" dir="auto" style={{ fontFamily: "var(--font-heading) var(--font-hebrew)"}}>
                    Awaken the Lighthouse Guardian
                </h1>
                <h1 className="text-zinc-900 text-2xl mb-4 font-bold" dir="auto" style={{ fontFamily: "var(--font-heading) var(--font-hebrew)"}}>
                    להעיר את שומר המגדלור
                </h1>
                </div>
                <h1 className="text-zinc-900 text-2xl mb-4" dir="auto" style={{ fontFamily: "var(--font-heading) var(--font-hebrew)", fontSize: 22}}>
                   {
                    STRINGS.content.books.lighthouse[context.language]
                   }
                </h1>
                </div>
                <div className="flex-none flex flex-col max-w-100">
                    <img className="max-h-full shadow-lg" src="/books/cover1.jpg"/>
                </div>
    </div>


    
    <div className="mx-auto items-center flex w-full md:flex-row-reverse flex-col md:pt-0 pt-10">
             <div className="flex-1 md:ml-12 w-full">
                <div className="flex flex-row justify-between align-baseline ">
                <h1 className="text-zinc-900 text-2xl mb-4 font-bold" dir="auto" style={{ fontFamily: "var(--font-heading) var(--font-hebrew)"}}>
                    Morrow's Star
                </h1>
                <h1 className="text-zinc-900 text-2xl mb-4 font-bold" dir="auto" style={{ fontFamily: "var(--font-heading) var(--font-hebrew)"}}>
                    הכוכב של מורו
                </h1>
                </div>
                <h1 className="text-zinc-900 text-2xl mb-4" dir="auto" style={{ fontFamily: "var(--font-heading) var(--font-hebrew)",  fontSize: 22}}>
                   {
                    STRINGS.content.books.morrow[context.language]
                   }
                </h1>
                </div>
                <div className="flex-none flex flex-col max-w-100">
                    <img className="max-h-full shadow-lg" src="/books/cover2.jpg"  onClick={()=>context.open(0, artworks)}/>
                </div>
    </div>

    

</div>
    

}