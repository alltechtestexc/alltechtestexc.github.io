'use client'

import { useState, useEffect, useContext } from "react";
import { ImagePreview } from "../../utils/ImagePreview";
import { formats } from "../../utils/formats";

export default function Gallery({filter}) {

  const [artworks, setArtworks] = useState([]);
  
  const context = useContext(ImagePreview)

  useEffect(() => {
    fetch("/artworks.json")
      .then(res => res.json())
      .then(filter)
      .then(setArtworks)
      .catch(console.error);
  }, []);

    return  <div className="columns-2 md:columns-3 gap-4 md:gap-10">
    {artworks.map((art, i) => (
      <div key={i} className="mb-0 break-inside-avoid">
        <img
          src={art.src}
          alt=""
          className="w-full"
          onClick={() => context.open(i, artworks)}
        />
        {art.metadata?.title[context.language] && (
          <p className="text-center mt-2 mb-4 text-zinc-900">
            {formats.outer(art.metadata, context.language)}
          </p>
        )}
      </div>
    ))}
  </div>
}