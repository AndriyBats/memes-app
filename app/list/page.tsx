'use client'

import { ReactNode, useEffect, useState } from "react";
// components
import MemeCard from "@/components/card";
// types
import { Meme } from "@/types";
// lib/cookie
import { getOrInitMemes } from "@/src/app/lib/cookie";
//////////////////////////////////////////////////

const ListboxWrapper = ({children}: { children: ReactNode }) => (
  <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 flex flex-col items-center">
    {children}
  </div>
);

export default function ListPage() {
  const [memes, setMemes] = useState<Meme[]>([]);

   useEffect(() => {
      setMemes(getOrInitMemes());
    }, []);

  return (
    <ListboxWrapper>
      {memes.map(({id, title, likes, imageUrl }) => {
        return (
          <MemeCard id={id} key={id} title={title} likes={likes} imageUrl={imageUrl} />
        )
      })}
    </ListboxWrapper>
  );
}
