'use client'



import { filterByCategory } from "../../utils/filter"
import { formats } from "../../utils/formats"
import { useState, useEffect, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImagePreview } from "../../utils/ImagePreview";
import Socials from "../components/socials"
import Image from "next/image";

 function Slideshow({ artworks }) {
  const [index, setIndex] = useState(0);
  const context = useContext(ImagePreview)

  // auto-slide every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % artworks.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [artworks.length]);

  const prev = () =>
    setIndex(i => (i - 1 + artworks.length) % artworks.length);
  const next = () =>
    setIndex(i => (i + 1) % artworks.length);

  if (artworks.length === 0) return null;

  return (
    <div className="flex w-full max-w-4xl mx-auto h-full gap-4 items-center" dir="ltr">
      {/* Images */}

      <button
        onClick={prev}
        className="h-10 w-10 flex-none flex items-center justify-center"
      >
        <ChevronLeft size={28} color="#333333" />
      </button>

<div className="overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out items-center"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {artworks.map((art, i) => (
          <div key={i} className="flex-shrink-0 w-full p-4 flex flex-col gap-2">
            <img
              src={art.src}
              alt={art.metadata?.title[context.language] || ""}
              className="w-full items-center shadow-lg shadow-black/20"
              onClick={()=>context.open(i, artworks)}
            />
            {art.metadata?.title && (
              <div className="text-center text-zinc-900 py-2">
                {formats.outer(art.metadata, context.language)}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>

      <button
        onClick={next}
        className="h-10 w-10 flex-none flex items-center justify-center"
      >
        
        <ChevronRight size={28} color="#333333" />
      </button>

      {/* Dots */}
      {/* <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {artworks.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-gray-400/70"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}


export default function GalleryPage() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("/artworks.json")
      .then(res => res.json())
      .then(filterByCategory("Best"))
      .then(setArtworks)
      .catch(console.error);
  }, []);

  return (
<div>
<div className="max-w-3xl h-full mx-auto">
  <Slideshow artworks={artworks} />
</div>
<div className="flex flex-col items-center w-full">

  <div className="flex gap-4 items-center text-lg">
    <Socials></Socials>
    </div>
</div>
</div>
  );
}
