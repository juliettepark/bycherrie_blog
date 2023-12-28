import Link from "next/link";
import { FilledButton, OutlinedButton } from "./Button";

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-primary-900 text-primary-100 border-primary-800 z-10">
      <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
        {/* justify-between on the items inside of the div: <a> and <ul> these are the children */}
        {/* That is why the big cherrie's blog is to the left and the rest of the list is to the right */}
        <Link href="/" className="font-medium text-lg md:hover:underline">
          cherrie's blog
        </Link>
        <ul className="flex items-center justify-end space-x-4 text-sm font-medium">
          {/* items-center means vertically centered */}
          {/* justify end to push to right-end */}
          <li className="md:hover:underline">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="md:hover:underline">
            {/* when screen size is md or larger, will show hover */}
            {/* does not hover for small screens like phones */}
            <Link href="/photos">Photos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
