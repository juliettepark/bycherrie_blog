// import Container from "../images";
import { FilledButton, OutlinedButton } from "./Button";
import Link from "next/link";

export default function HomeTitle() {
  return (
    <div className="flex">
      <div className="mt-40 mb-48 p-20 max-w-5xl ">
        <h1 className="text-cherrie text-7xl font-semibold leading-normal">
          welcome to my yarn diary
        </h1>
        <p className="mt-8 mb-14 text-xl">
          Follow along my crochet and knitting journey
          <br />
          for project inspiration or just some cozy vibes.
        </p>
        {/* Button was lagging or sometimes not responding when we wrapped a <button> around the <Link> */}
        <Link
          className="inline font-medium border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors bg-cherrie border-secondary text-primary md:hover:bg-transparent md:hover:border-cherrie md:hover:text-cherrie"
          href="/blog"
        >
          Let's Yarn
        </Link>
        {/* <FilledButton>
          <Link href="/blog">Let's Yarn</Link>
        </FilledButton> */}
      </div>

      <img src="/wool.png" className="h-2/5 w-2/5 mt-48 mb-48" />
    </div>
  );
}

// className="flex place-content-center text-center text-8xl font-medium tracking-wide
// opacity-100 text-cherrie p-10 border h-3/4 border-black" bg-[url('/wool.png')]
