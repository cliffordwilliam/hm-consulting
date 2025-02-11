import Image from "next/image";

const teamMembers = [
  {
    name: "Bonnie Green",
    role: "CEO & Web Developer",
    image: "/hero.webp",
    description:
      "Bonnie drives the technical strategy of the flowbite platform and brand.",
  },
  {
    name: "Jese Leos",
    role: "CTO",
    image: "/hero.webp",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Image
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {member.role}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
                <ul className="flex space-x-4">
                  {/* Social media icons can be added here */}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
