import Image from "next/image";
import { FC } from "react";

interface Testimonial {
  name: string;
  review: string;
  image: string;
}

interface ClientReviewsProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  bgColor?: string;
  cardBg?: string;
}

const ClientReviews: FC<ClientReviewsProps> = ({
  title,
  description,
  testimonials,
  bgColor = "bg-blue-500",
  cardBg = "bg-blue-50",
}) => {
  return (
    <section className={`py-20 ${bgColor} text-gray-950`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-lg text-gray-800">{description}</p>

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative ${cardBg} p-6 rounded-tr-full shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="absolute top-4 left-4">
              <Image
  src={testimonial.image}
  alt={testimonial.name}
  width={60}
  height={60}
  className="w-[60px] h-[60px] object-cover rounded-full border-4 border-white shadow-md"
/>

              </div>
              <div className="pt-8">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="mt-4 text-gray-900 italic">&ldquo;{testimonial.review}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
