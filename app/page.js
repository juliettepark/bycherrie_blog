/* 
1. We can only have 1 "export default" function per page.js. 
We must export only the function we want to see on the webpage.

Any other non-special file can have as many "export"s and still 1 "export default"
- Components usually "export default" but if multiple in a file, then can just export most and export default the most important.

*/

import Container from "./components/Container";
import SectionHeader from "./components/SectionHeader";

function Person({ person }) {
  return (
    <div className="text-cherrie max-w-sm border border-primary-200 rounded-xl px-4 pb-4 pt-6 bg-gradient-to-bl from-secondary-100 to-white via-white md:hover:shadow-xl md:hover:scale-105 transition-all space-y-4">
      <div className="space-y-2">
        <h3 className="font-medium text-xl">{person.name}</h3>
        <p className="flex items-center justify-start space-x-2 text-xs font-medium uppercase text-primary-600">
          {person.age} years old & {person.isMarried ? "married" : "single"}
        </p>
        <p className="text-sm text-primary-500 underline">
          {person.address.street} {person.address.city} {person.address.state},{" "}
          {person.address.zip}
        </p>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Hobbies</h4>
        <ul className="flex flex-wrap gap-2 text-sm text-secondary-800">
          {/* A list of elements is interpreted as the children */}
          {person.hobbies.map((hobby, index) => {
            return (
              // Include a key so that each item can be uniquely identified
              <li
                className="bg-secondary-100 px-2 py-0.5 rounded-full"
                key={index}
              >
                {hobby}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Contact</h4>
        <ul className="font-mono text-sm">
          <li>{person.contact.email}</li>
          <li>{person.contact.phone}</li>
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  const person = {
    name: "JOhn",
    age: 19,
    hobbies: ["reading", "hiking", "coding", "crocheting"],
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    contact: {
      email: "john@email.com",
      phone: "123-456-9000",
    },
    isMarried: false,
  };

  return (
    <Container>
      <Person person={person} />
    </Container>
  );
}
