"use client";

import Image from "next/image";
import { useEffect } from "react";

interface IsHovered extends HTMLElement {
  isHovered: boolean;
} 

const Page = () => {
  useEffect(() => {
    if (window != undefined) {
      const galleryContainer = document.querySelector(
        "#gallery",
      ) as HTMLElement;
      const galleryItems = document.querySelectorAll(
        ".gallery-item",
      ) as unknown as IsHovered[];
      const indicator = document.querySelector("#indicator") as HTMLElement;

      const defaultItemFlex = "0 1 20px";
      const hoverItemFlex = "1 1 400px";

      const updateGalleyItems = () => {
        galleryItems.forEach(item => {
          let flex = defaultItemFlex;

          if (item.isHovered) {
            flex = hoverItemFlex;
          }

          item.style.flex = flex;
        });
      };

      galleryItems[0].isHovered = true;
      updateGalleyItems();

      galleryItems.forEach(item => {
        item.addEventListener("mouseover", () => {
          galleryItems.forEach(otherItem => {
            otherItem.isHovered = otherItem === item;
          });
          updateGalleyItems();
        });
      });

      galleryContainer.addEventListener("mouseover", e => {
        indicator.style.left = `${
          e.clientX - galleryContainer.getBoundingClientRect().left
        }px`;
      });
    }
  }, []);

  return (
    <main className='h-screen w-screen overflow-hidden bg-[#0f0f0f] '>
      <div className='absolute left-1/2 top-1/2 m-auto flex  w-1/2 origin-center -translate-x-1/2 -translate-y-1/2 justify-center px-[0.5em] py-[1em] '>
        <div
          id='indicator'
          className='absolute inset-0 h-1 w-1 rounded-full bg-white transition-all duration-1000'
        />
        <div
          id='gallery'
          className='flex w-full justify-around overflow-hidden'
        >
          <div className='gallery-item '>
            <Image
              width={1000}
              height={1000}
              src='https://picsum.photos/id/22/1000'
              alt=''
            />
          </div>
          <div className='gallery-item'>
            <Image
              width={1000}
              height={1000}
              src='https://picsum.photos/id/23/1000'
              alt=''
            />
          </div>
          <div className='gallery-item'>
            <Image
              width={1000}
              height={1000}
              src='https://picsum.photos/id/24/1000'
              alt=''
            />
          </div>
          <div className='gallery-item'>
            <Image
              width={1000}
              height={1000}
              src='https://picsum.photos/id/25/1000'
              alt=''
            />
          </div>
          <div className='gallery-item'>
            <Image
              width={1000}
              height={1000}
              src='https://picsum.photos/id/26/1000'
              alt=''
            />
          </div>
          <div className='gallery-item'>
            <Image
              width={1000}
              height={1000}
              src='https://picsum.photos/id/27/1000'
              alt=''
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
