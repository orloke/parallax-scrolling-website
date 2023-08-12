import Image from "next/image";
import Link from "next/link";
import stars from "@/app/assets/stars.png";
import moon from "@/app/assets/moon.png";
import mountains_front from "@/app/assets/mountains_front.png";
import mountains_behind from "@/app/assets/mountains_behind.png";

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-body'>
      <header className='absolute top-0 left-0 z-50 flex justify-between items-center w-full py-7 px-24 '>
        <Link
          href='#'
          className='text-white font-bold text-[2em] uppercase tracking-[2px]  '
        >
          Logo
        </Link>
        <ul>
          <li>
            <Link href='#' className='active'>
              Home
            </Link>
          </li>
          <li>
            <Link href='#'>About</Link>
          </li>
          <li>
            <Link href='#'>Work</Link>
          </li>
          <li>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
      </header>
      <section className='relative flex justify-center items-center w-full h-screen p-24 before:content-[""] before:absolute before:bottom-0 
      before:w-full before:h-24 before:z-50 before:bg-gradient-before '>
        <Image src={stars} alt='stars' id='stars' />
        <Image src={moon} alt='moon' id='moon' className='mix-blend-screen' />
        <Image
          src={mountains_behind}
          alt='mountains behind'
          id='mountains_behind'
        />

        <h2
          id='text'
          className='absolute text-white whitespace-nowrap text-[7.5vw] z-10'
        >
          Moon Light
        </h2>

        <Link
          href='#'
          className='inline-block py-2 px-7 rounded-2xl bg-white text-[#2b1055] text-[1.5em] z-10 translate-y-24 '
        >
          Explore
        </Link>

        <Image
          src={mountains_front}
          alt='mountains'
          id='mountains_front'
          className='z-20'
        />
      </section>
      <div className='relative p-24 bg-[#1c0522]'>
        <h2 className='text-[3.5em] mb-2.5 text-white'>
          Parallax Scrolling Effects
        </h2>
        <p className='text-[1.2em] text-white'>
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
          <span className='flex mb-2' />
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
          <span className='flex mb-2' />
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
    </main>
  );
}
