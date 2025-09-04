'use client'

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Socials(){
    return <><a
            href="https://www.instagram.com/liza_zabarsky_art/"
            className="flex items-center gap-2 hover:text-pink-500 text-black/75"
            target="_blank"
          >
            <FaInstagram />   <h1 className="text-black/75">liza_zabarsky_art</h1>
          </a>
          <a
            href="https://www.facebook.com/liza.zabarsky/"
            className="flex items-center gap-2 hover:text-blue-600 text-black/75"
            target="_blank"
          >
            <FaFacebook />   <h1 className="text-black/75">Liza Zabarsky</h1>
          </a></>
}