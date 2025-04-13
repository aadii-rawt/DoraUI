import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import ElementCard from "../components/Element/ElementCard";

const buttons = [
  {
    id: 1,
    preview:
      `<button class="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
        <div class="relative overflow-hidden">
          <p
            class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            Button
          </p>
          <p
            class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            Button
          </p>
        </div>
      </button>`
    ,
    user: "Aditya Rawat",
    previewBackground: "#269c69",
    views: "14K",
    bookmarks: "9k",
    comments: 2,
  },
  {
    id: 2,
    preview:
      ` <button
      class="group cursor-pointer outline-none hover:rotate-90 duration-300"
      title="Add New"
    >
      <svg
        class="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
        viewBox="0 0 24 24"
        height="50px"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-width="1.5"
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        ></path>
        <path stroke-width="1.5" d="M8 12H16"></path>
        <path stroke-width="1.5" d="M12 16V8"></path>
      </svg>
    </button>`
    ,
    user: "vinodjangid07",
    views: "14K",
    bookmarks: 996,
    comments: 2,
  },
  {
    id: 3,
    preview:
      `<button
      class="relative border-2 border-black group hover:border-green-500 w-12 h-12 duration-500 overflow-hidden"
      type="button"
    >
      <p
        class="font-Manrope text-3xl h-full w-full flex items-center justify-center text-black duration-500 relative z-10 group-hover:scale-0"
      >
        ×
      </p>
      <span
        class="absolute w-full h-full bg-green-500 rotate-45 group-hover:top-9 duration-500 top-12 left-0"
      ></span>
      <span
        class="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:left-9 duration-500 left-12"
      ></span>
      <span
        class="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:right-9 duration-500 right-12"
      ></span>
      <span
        class="absolute w-full h-full bg-green-500 rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"
      ></span>
    </button>`
    ,
    user: "vinodjangid07",
    views: "7.1K",
    bookmarks: 549,
    comments: 0,
  },
  {
    id: 4,
    preview:
      `<button
      class="group relative outline-0 bg-sky-200 [--sz-btn:68px] [--space:calc(var(--sz-btn)/5.5)] [--gen-sz:calc(var(--space)*2)] [--sz-text:calc(var(--sz-btn)-var(--gen-sz))] h-[var(--sz-btn)] w-[var(--sz-btn)] border border-solid border-transparent rounded-xl flex items-center justify-center aspect-square cursor-pointer transition-transform duration-200 active:scale-[0.95] bg-[linear-gradient(45deg,#efad21,#ffd60f)] [box-shadow:#3c40434d_0_1px_2px_0,#3c404326_0_2px_6px_2px,#0000004d_0_30px_60px_-30px,#34343459_0_-2px_6px_0_inset]"
    >
      <svg
        class="animate-pulse absolute z-10 overflow-visible transition-all duration-300 text-[#ffea50] group-hover:text-white top-[calc(var(--sz-text)/7)] left-[calc(var(--sz-text)/7)] h-[var(--gen-sz)] w-[var(--gen-sz)] group-hover:h-[var(--sz-text)] group-hover:w-[var(--sz-text)] group-hover:left-[calc(var(--sz-text)/4)] group-hover:top-[calc(calc(var(--gen-sz))/2)]"
        stroke="none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
        ></path>
      </svg>
      <span
        class="[font-size:var(--sz-text)] font-extrabold leading-none text-white transition-all duration-200 group-hover:opacity-0"
        >AI</span
      >
    </button>`,
    user: "TaniaDou",
    views: "17K",
    bookmarks: 95,
    comments: 0,
  },
  {
    id: 5,
    preview:
      ` <button
      class="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
    >
      <span
        class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"
      ></span>
    
      <span
        class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
      ></span>
    
      <div
        class="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
      >
        <span class="select-none">Start session</span>
    
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
        >
          <path
            clip-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </button>`
    ,
    user: "TaniaDou",
    views: "17K",
    bookmarks: 95,
    comments: 0,
  },
  {
    id: 5,
    preview: /* From Uiverse.io by tirth_5172 */
      ` <button
      class="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
    >
      <span className="relative z-20">Button</span>
    
      <span
        class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
      ></span>
    
      <span
        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
      ></span>
      <span
        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
      ></span>
      <span
        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
      ></span>
      <span
        class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
      ></span>
    </button>`
    ,
    user: "TaniaDou",
    views: "17K",
    previewBackground : "#031e49",
    bookmarks: 95,
    comments: 0,
  },
  {
    id: 5,
    preview:
      `<button
      class="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
    >
      Hover Me
    </button>`
    ,
    user: "TaniaDou",
    views: "17K",
    bookmarks: 95,
    comments: 0,
  },
];

const Elements: React.FC = () => {
  return (
    <div className="flex-1 min-h-screen text-white px-4 py-5">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Browse all</h1>
        <p className="text-gray-400">Open-Source buttons made with CSS or Tailwind</p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-5">
        <span className="text-gray-400">First page</span>

        <div className="flex items-center gap-4">
          <button className="bg-[#1e1e1e] px-4 py-2 rounded-md text-white font-medium">All</button>
          <button className="text-blue-400"> Tailwind</button>
          <button className="text-blue-500"> CSS</button>

          <div className="flex items-center gap-2 ml-4">
            <FaFilter />
            <span>Sort: <span className="font-medium">Randomized</span> </span>
          </div>

          <span className="ml-4">Any Theme </span>

          <div className="ml-auto flex items-center bg-[#1e1e1e] px-3 py-2 rounded-md">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              placeholder="Search tags, users, posts..."
              className="bg-transparent outline-none text-sm placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {buttons.map((btn) => (
          <ElementCard btn={btn} />
        ))}
      </div>
    </div>
  );
};

export default Elements;
