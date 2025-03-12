import Image from "next/image"; // Ensure this is imported if using Next.js
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”", // Use normal quotes
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”", // Use normal quotes
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”", // Use normal quotes
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”", // Use normal quotes
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-5xl tracking-tighter font-medium">
          Beyond Expectations
        </h2>
        <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
          Our revolutionary AI SEO tools have transformed our clients
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-4 rounded-lg shadow-md border-white/15 bg-[linear-gradient(to_bottom_left,rgb(140,69,225,.3),black)]"
            >
              <Image
                src={testimonial.avatarImg}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="italic text-white">{testimonial.text}</p>
              <div className="mt-4">
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
