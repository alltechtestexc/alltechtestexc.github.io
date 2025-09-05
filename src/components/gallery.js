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

    return <div className="grid md:grid-cols-3 grid-cols-2">
        {artworks.map((art, i) => (
        <div key={i} className="p-2 justify-center flex flex-col">
          <img src={art.src} alt="" className="shadow-md" onClick={() => context.open(i, artworks)} />
          {art.metadata?.title[context.language] && (
            <p className="text-center mt-2 text-zinc-900">{formats.outer(art.metadata, context.language)}</p>
          )}
        </div>
      ))}
    </div>
}