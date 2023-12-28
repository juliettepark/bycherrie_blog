import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  );
}

function Navbar() {
  return (
    <nav className="border-b border-gray-800 sticky top-0 bg-gray-900 text-gray-100 z-10">
      <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
        {/* justify-between on the items inside of the div: <a> and <ul> these are the children */}
        {/* That is why the big cherrie's blog is to the left and the rest of the list is to the right */}
        <a href="/" className="font-medium text-lg md:hover:underline">
          cherrie's blog
        </a>
        <ul className="flex items-center justify-end space-x-4 text-sm font-medium">
          {/* items-center means vertically centered */}
          {/* justify end to push to right-end */}
          <li className="md:hover:underline">
            <a href="/blog">Blog</a>
          </li>
          <li className="md:hover:underline">
            {/* when screen size is md or larger, will show hover */}
            {/* does not hover for small screens like phones */}
            <a href="/photos">Photos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
