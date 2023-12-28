/* 
1. We can only have 1 "export default" function per page.js. 
We must export only the function we want to see on the webpage.

Any other non-special file can have as many "export"s and still 1 "export default"
- Components usually "export default" but if multiple in a file, then can just export most and export default the most important.

*/

import SectionHeader from "./components/SectionHeader";

export default function Home() {
  return (
    <>
      <p>This is the home page!</p>
    </>
  );
}
