// components/About/CoreValues.tsx

import { Lightbulb, ShieldCheck, Users, HeartHandshake } from "lucide-react";
import { FC } from "react";

const values = [
  {
    icon: Lightbulb,
    color: "bg-indigo-100 text-indigo-600",
    title: "Innovation",
    description:
      "We constantly explore new ideas and technologies to stay ahead and deliver cutting-edge solutions.",
  },
  {
    icon: ShieldCheck,
    color: "bg-green-100 text-green-600",
    title: "Integrity",
    description:
      "We uphold transparency, honesty, and ethics in every action we take and every decision we make.",
  },
  {
    icon: Users,
    color: "bg-blue-100 text-blue-600",
    title: "Collaboration",
    description:
      "We work together, value every voice, and build strong partnerships both internally and externally.",
  },
  {
    icon: HeartHandshake,
    color: "bg-pink-100 text-pink-600",
    title: "Empathy",
    description:
      "We listen deeply, act with compassion, and put people at the heart of everything we build.",
  },
];

const CoreValues: FC = () => {
  return (
    <section className="bg-gradient-to-t from-gray-200 to-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          What drives us forward — the beliefs that shape our culture, our work, and our future.
        </p>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Icon Badge */}
            <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${value.color}`}>
              <value.icon className="w-6 h-6" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
              <p className="text-gray-600 mt-1">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
