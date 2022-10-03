import Head from 'next/head';
import Image from 'next/image';

import { Mail, Instagram, Twitter, GitHub, Tool, Users, Smile } from 'react-feather';

export default function Home() {
  return <>
    <Head>
      <title>BlairHacks Mini '22 – BlairHacks</title>
      {/* <meta name="description" content="" /> */}
    </Head>

    <header className="h-screen">
      <Image
        src="/assets/blairhacks_4.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        // className="opacity-20 -z-10"
      />

      <div className="w-full h-full relative bg-black/75">
        <div className="p-8 h-full container max-w-5xl flex flex-col justify-center">
          <div className="flex items-end gap-4">
            <h1 className="text-6xl font-extrabold">
              BlairHacks Mini '22
            </h1>
            <a href="https://blairhacks.com" target="_blank" rel="noopener noreferrer">
              <p className="px-2 py-0.5 rounded-lg bg-neutral-500/30 text-xl font-medium">
                by BlairHacks
              </p>
            </a>
          </div>
          <p className="text-2xl font-semibold mt-0.5">
            An IRL day of coding and making for high-schoolers in MoCo
          </p>

          <ul className="flex gap-4 mt-6">
            <li className="w-20 aspect-square px-3 py-1 border-2 border-white rounded-xl flex flex-col justify-center items-center">
              <span className="text-lg font-semibold -mb-2">DEC</span>
              <span className="text-4xl font-extrabold">10</span>
            </li>

            <a href="https://g.page/mcplRockvilleMemorial" target="_blank" rel="noopener noreferrer">
              <li className="px-3 py-1.5 border-2 border-white rounded-xl flex flex-col justify-center">
                <span className="text-md">📌</span>
                <span className="text-lg font-extrabold">Rockville Memorial Library</span>
                <span className="text-xs -mt-1">@ Rockville Town Square</span>
              </li>
            </a>

            <li className="px-3 py-1.5 border-2 border-white rounded-xl flex flex-col justify-center">
              <span className="text-md">🕑</span>
              <span className="text-2xl font-extrabold">10AM-6PM</span>
            </li>
          </ul>

          <ul className="flex gap-4 mt-6">
            <li className="px-4 py-2 bg-emerald-500 rounded-xl flex flex-col justify-center">
              <span className="text-2xl font-extrabold">Register (free!)</span>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main className="px-8 py-28 container max-w-5xl flex flex-col gap-20">
      <section>
        <h2 className="text-4xl font-bold">
         8 hours of coding, workshops, and fun!
        </h2>

        <p className="text-2xl font-thin mt-4">
          Introducing BlairHacks' newest event (and first IRL event since 2020)!
          BlairHacks Mini is a day-long event where high school students around Montgomery County will come together to build apps, games, and hardware.
          Look forward to a day of hands-on coding + tech workshops, fun activities, and more!
        </p>

        <div className="grid grid-cols-2 gap-12 mt-16">
          <div>
            <p className="text-emerald-400">
              <Tool size={60}/>
            </p>
            <h3 className="text-3xl font-bold mt-5">
              Build stuff!
            </h3>
            <p className="text-xl font-thin mt-2">
              Hardware, software, and you name it! You'll learn how to build something new and unique.
            </p>
          </div>

          <div className="h-64 bg-neutral-900 rounded-xl"></div>

          <div className="h-64 flex items-center justify-center rounded-xl overflow-hidden">
            <Image
              src="/assets/hackers.jpeg"
              alt="Hackers at BlairHacks MLH Local Hack Day 2017"
              width={680}
              height={453}
              className="w-full"
            />
          </div>

          <div>
            <p className="text-emerald-400">
              <Users size={60}/>
            </p>
            <h3 className="text-3xl font-bold mt-5">
              Make connections
            </h3>
            <p className="text-xl font-thin mt-2">
              Meet fellow hackers in MoCo and make amazing things together!
            </p>
          </div>

          <div>
            <p className="text-emerald-400">
              <Smile size={60}/>
            </p>
            <h3 className="text-3xl font-bold mt-5">
              Have fun
            </h3>
            <p className="text-xl font-thin mt-2">
              We have a day of fun activities and workshops planned. No competition, no stress, just fun!
            </p>
          </div>

          <div className="h-64 flex items-center justify-center rounded-xl overflow-hidden">
            <Image
              src="/assets/obama.jpeg"
              alt="Obama at BlairHacks_3"
              width={680}
              height={453}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              Do you guys actually hack?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              No, that's not what we mean by "hack"! Hacking is a general term for finding creative solutions with code to solve problems we see around us.
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              Who is elligible to participate?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              All high school students are welcome to attend. Bring your friends!
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              What should I bring?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              Bring a laptop and a charger. Also, make sure to bring your own lunch, or money to buy food. There will be plenty of nearby restaurants and stores.
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              I'm new to coding. Can I still participate?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              Yes! If you are a beginner, you can attend our workshops that we run throughout the event. They'll cover the basics of different tools you can use to build your hack.
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              How much will it cost?
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              Nothing at all! This event is completely free to attend.
            </p>
          </div>

          <div className="p-4 border-2 border-emerald-400 rounded-xl">
            <h3 className="text-xl font-bold">
              I have another question!
            </h3>
            <p className="text-lg font-thin leading-6 mt-1.5">
              Send us an email at <a className="text-emerald-500 font-medium underline cursor-pointer" href="mailto:team@blairhacks.com">team@blairhacks.com</a> and we'll get back to you ASAP!
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold">
          Sponsors
        </h2>

        <p className="text-2xl font-thin mt-4">
          Our partners and supporters that are making this event free and possible!
        </p>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* <div className="h-48 p-4 flex justify-center items-center rounded-xl bg-neutral-400/20">
            <Image
              src="/assets/bank_grant.png"
              width="667"
              height="328"
            />
          </div> */}

          <div className="h-48 p-4 flex justify-center items-center rounded-xl bg-neutral-400/20">
            <Image
              src="/assets/cupf.png"
              width="535"
              height="94"
            />
          </div>
        </div>

        <p className="text-2xl font-thin mt-4">
          Want to sponsor this and future BlairHacks events? <a className="text-emerald-500 font-medium underline cursor-pointer" href="mailto:team@blairhacks.com">Get in touch →</a>
        </p>
        <p className="text-xl font-thin mt-2">
          (or make a <a className="text-emerald-500 font-medium underline cursor-pointer" href="https://blairhacks.com/donate" target="_blank" rel="noopener noreferrer">tax-deductible donation</a>)
        </p>
      </section>
    </main>

    <footer className="bg-emerald-400 text-black">
      <div className="px-8 py-6 container max-w-7xl flex gap-8 justify-between">
        <div className="pt-4">
          <div className="flex items-end gap-3">
            <h2 className="text-3xl font-extrabold">
              BlairHacks Mini '22
            </h2>
            <a href="https://blairhacks.com" target="_blank" rel="noopener noreferrer">
              <p className="px-2 py-0.5 rounded-lg bg-neutral-500/10 font-medium">
                by BlairHacks
              </p>
            </a>
          </div>
          <p className="text-sm mt-2">
            Fiscally sponsored by The Hack Foundation<br/>
            Nonprofit EIN: 81-2908499
          </p>
        </div>

        <div className="flex flex-col justify-end">
          <ul className="flex gap-4 text-lg">
            <li>
              <a href="https://instagram.com/blairhacks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <Instagram size={20}/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/blairhacks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <Twitter size={20}/>
              </a>
            </li>
            <li>
              <a href="https://github.com/blairhacks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <GitHub size={20}/>
              </a>
            </li>
            <li>
              <a href="mailto:team@blairhacks.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <Mail size={20}/>
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-extrabold mt-3">
            Learn more
          </h3>
          <ul className="flex gap-5">
            <li>
              <a href="https://blairhacks.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                BlairHacks
              </a>
            </li>
            <li>
              <a href="https://bank.hackclub.com/blairhacks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Our finances
              </a>
            </li>
            <li>
              <a href="https://blairhacks.com/donate" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>;
}