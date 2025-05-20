
import { FC } from "react";
import Link from "next/link";

const JoinUsCTA: FC = () => {
  return (
    <section className="bg-violet-400 text-black py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Build the Future With Us?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We&apos;re always looking for passionate, creative minds to join our team. Explore careers or reach out directly!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="border font-semibold border-black text-black px-6 py-3 rounded-xl hover:bg-gray-100 hover:text-violet-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUsCTA;
