'use client'

import { useState, useEffect, useContext } from "react";
import { filterByCategory } from "../../../utils/filter"
import { ImagePreview, STRINGS } from "../layout";
import { formats } from "../../../utils/formats";
import Gallery from "../../components/gallery"

export default function GalleryPage() {
    const language = useContext(ImagePreview).language
    return <>
            <h1 className="text-zinc-900 text-2xl mb-4" dir="auto">{STRINGS.titles.mixed[language]}</h1>
        <Gallery filter={filterByCategory("Mixed technique")}/>
    </>
}