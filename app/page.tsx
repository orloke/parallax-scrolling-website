"use client";

import Image from "next/image";
import Link from "next/link";
import stars from "@/app/assets/stars.png";
import moon from "@/app/assets/moon.png";
import mountains_front from "@/app/assets/mountains_front.png";
import mountains_behind from "@/app/assets/mountains_behind.png";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { start } from "repl";

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window != undefined) {
      const tl = gsap.timeline();

      const stars = document.querySelector("#stars") as HTMLElement;
      const moon = document.querySelector("#moon") as HTMLElement;
      const mountains_behind = document.querySelector(
        "#mountains_behind",
      ) as HTMLElement;
      const text = document.querySelector("#text") as HTMLElement;
      const btn = document.querySelector("#btn") as HTMLElement;
      const header = document.querySelector("header") as HTMLElement;
      const footer = document.querySelector("footer") as HTMLElement;

      const squareContainer = document.querySelector(
        "#square-container",
      ) as HTMLElement;

      const squareSize = 100;

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const numCols = Math.ceil(screenWidth / squareSize);
      const numRows = Math.ceil(screenHeight / squareSize);
      const numSquares = numCols * numRows;

      squareContainer.style.width = `${numCols * squareSize}px`;
      squareContainer.style.height = `${numRows * squareSize}px`;

      let squares: HTMLDivElement[] = [];

      for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        squareContainer.appendChild(square);
        squares.push(square);
      }

      const elements = document.querySelectorAll(
        ".text",
      ) as NodeListOf<HTMLElement>;

      elements.forEach(element => {
        const innerText = element.innerText;
        element.innerHTML = "";

        const textContainer = document.createElement("div");
        textContainer.classList.add("block");
        for (let letter of innerText) {
          let span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("letter");
          textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
      });

      elements.forEach(element => {
        element.addEventListener("mouseover", () => {
          element.classList.remove("play");
        });
      });

      const animateSquares = () => {
        tl.to("#square-container", {
          css: {
            backgroundColor: "transparent",
          },
        })
          .fromTo(
            squares,
            {
              opacity: 1,
            },
            {
              opacity: 0,
              delay: 0.1,
              stagger: {
                each: 0.01,
                from: "random",
              },
            },
          )
          .to("#square-container", {
            css: {
              display: "none",
            },
          })
          .to("main", {
            css: {
              height: "100%",
            },
          });
      };

      animateSquares();

      window.addEventListener("scroll", () => {
        document.addEventListener("scroll", function (e) {
          let documentHeight = document.body.scrollHeight;
          let currentScroll = window.scrollY + window.innerHeight;
          if (currentScroll > documentHeight) {
            footer.style.zIndex = "0";
          } else {
            footer.style.zIndex = "-10";
          }
        });
        const value = window.scrollY;
        stars.style.left = value * 0.25 + "px";
        moon.style.top = value * 1.05 + "px";
        mountains_behind.style.top = value * 0.5 + "px";
        text.style.transform = `translate(${(-value + 150) * 4}px, ${
          (-96 + value) * 0.5
        }px)`;
        btn.style.transform = `translate(0px, ${96 + value * 0.5}px)`;
        if (open) {
          header.style.top = value * 0.5 + "px";
        }
      });
    }
  }, [open]);

  const menuMobile = () => {
    setOpen(prev => !prev);
    const tl = gsap.timeline();
    console.log(open);
    if (!open) {
      tl.fromTo(
        ["#revealMenuBackground", "#revealMenu"],
        {
          height: 0,
          ease: "power3.inOut",
          transformOrigin: "right top",
          skewY: 2,
          stagger: {
            amount: 0.1,
          },
        },
        {
          height: "100vh",
          duration: 0.8,
          ease: "power3.inOut",
          skewY: 0,
          position: "fixed",
          stagger: {
            amount: 0.1,
          },
        },
      ).from("#linkMenuMobile", {
        duration: 0.8,
        y: 100,
        stagger: 0.3,
        ease: "power4.out",
        delay: -0.5,
      });
    } else {
      tl.to(["#revealMenu", "#revealMenuBackground"], {
        duration: 0.8,
        transformOrigin: "right bottom",
        skewY: 2,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },
      });
    }
  };

  return (
    <main className='relative h-screen overflow-hidden bg-gradient-body'>
      <div
        id='menuMobile'
        className='relative inset-0 z-[60] hidden h-auto w-full sm:flex'
      >
        <div
          id='revealMenuBackground'
          className='absolute inset-0 -z-10 h-0 bg-[#7597de]'
        />
        <div
          id='revealMenu'
          className='absolute inset-0 h-0 overflow-hidden bg-[#2b1055]'
        >
          <ul className='flex h-full w-full flex-col items-center justify-center gap-20'>
            <li>
              <Link id='linkMenuMobile' href='#' className='active'>
                Home
              </Link>
            </li>
            <li>
              <Link id='linkMenuMobile' href='#'>
                About
              </Link>
            </li>
            <li>
              <Link id='linkMenuMobile' href='/gallery'>
                Gallery
              </Link>
            </li>
            <li>
              <Link id='linkMenuMobile' href='#'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id='square-container'
        className='absolute inset-0 z-[80] flex flex-wrap overflow-hidden bg-[#2b1055]'
      />
      <header
        className={`${
          open ? "fixed" : "absolute"
        } left-0 top-0 z-[70] flex w-full items-center justify-between px-24 py-7 sm:px-4`}
      >
        <Link
          href='#'
          className='text-[2em] font-bold uppercase tracking-[2px] text-white sm:text-base  '
        >
          Logo
        </Link>
        <button
          className='hidden rounded-2xl bg-white px-2 py-1 text-center text-[2em] font-bold uppercase tracking-[2px]
            text-[#2b1055] transition-colors duration-300 sm:flex sm:text-sm'
          onClick={menuMobile}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul className='gap-1 sm:hidden'>
          <li>
            <Link href='#' className='active text'>
              Home
            </Link>
          </li>
          <li>
            <Link href='#' className='text'>
              About
            </Link>
          </li>
          <li>
            <Link href='/gallery' className='text'>
              Gallery
            </Link>
          </li>
          <li>
            <Link href='#' className='text'>
              Contact
            </Link>
          </li>
        </ul>
      </header>
      <section
        className='relative flex h-screen w-full items-center justify-center overflow-hidden p-24 before:absolute before:bottom-0 before:z-50 
      before:h-24 before:w-full before:bg-gradient-before before:content-[""] sm:p-4 '
      >
        <Image src={stars} alt='stars' id='stars' />
        <Image src={moon} alt='moon' id='moon' className='mix-blend-screen' />
        <Image
          src={mountains_behind}
          alt='mountains behind'
          id='mountains_behind'
        />

        <h2
          id='text'
          className='absolute z-10 -translate-x-full whitespace-nowrap text-[7.5vw] text-white sm:text-6xl'
        >
          Moon Light
        </h2>

        <a
          href='#sec'
          id='btn'
          className='text z-10 inline-block !h-[50px] translate-y-24 rounded-2xl bg-white px-7 py-2 text-[1.5em] text-[#2b1055] sm:text-base '
        >
          Explore
        </a>

        <Image
          src={mountains_front}
          alt='mountains'
          id='mountains_front'
          className='z-20'
        />
      </section>
      <div id='sec' className='mb-20 bg-[#1c0522] p-24 pb-0 sm:p-4'>
        <h2 className='mb-2.5 text-[3.5em] text-white sm:text-center sm:text-xl'>
          Parallax Scrolling Effects
        </h2>
        <p className='text-justify text-[1.2em] text-white sm:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
          sint tempore perferendis ducimus, eum, veniam in cupiditate quidem
          odit laborum ipsam quo minima rerum. Quia dolore tempore magni hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          adipisci consequatur. Nostrum, dicta quo veniam alias quisquam autem,
          quae tempore magnam sequi aperiam quas qui voluptates error fuga. Id,
          rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, adipisci consequatur. Nostrum, dicta quo veniam alias
          quisquam autem, quae tempore magnam sequi aperiam quas qui voluptates
          error fuga. Id, rerum.
          <span className='mb-2 flex' />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
          sint tempore perferendis ducimus, eum, veniam in cupiditate quidem
          odit laborum ipsam quo minima rerum. Quia dolore tempore magni hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          adipisci consequatur. Nostrum, dicta quo veniam alias quisquam autem,
          quae tempore magnam sequi aperiam quas qui voluptates error fuga. Id,
          rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, adipisci consequatur. Nostrum, dicta quo veniam alias
          quisquam autem, quae tempore magnam sequi aperiam quas qui voluptates
          error fuga. Id, rerum.
          <span className='mb-2 flex' />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
          sint tempore perferendis ducimus, eum, veniam in cupiditate quidem
          odit laborum ipsam quo minima rerum. Quia dolore tempore magni hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          adipisci consequatur. Nostrum, dicta quo veniam alias quisquam autem,
          quae tempore magnam sequi aperiam quas qui voluptates error fuga. Id,
          rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, adipisci consequatur. Nostrum, dicta quo veniam alias
          quisquam autem, quae tempore magnam sequi aperiam quas qui voluptates
          error fuga. Id, rerum.
        </p>
      </div>
      <footer className='fixed bottom-0 left-0 -z-10 flex h-20 w-full items-center justify-center bg-[#1c0522] py-4'>
        <p className='text-center font-bold'>Made whit 💜 by Júnior Dering</p>
      </footer>
    </main>
  );
}
