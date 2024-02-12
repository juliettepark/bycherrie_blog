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
        <FilledButton style="w-32 h-16">
          <Link href="/blog">Let's Yarn</Link>
        </FilledButton>
      </div>

      <img src="/wool.png" className="h-2/5 w-2/5 mt-48 mb-48" />
    </div>
  );
}

// className="flex place-content-center text-center text-8xl font-medium tracking-wide
// opacity-100 text-cherrie p-10 border h-3/4 border-black" bg-[url('/wool.png')]
