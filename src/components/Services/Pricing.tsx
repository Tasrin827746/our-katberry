interface PricingPlan {
    name: string;
    price: string;
    features: string[];
  }
  
  interface PricingProps {
    title: string;
    description: string;
    plans: PricingPlan[];
    bgColor?: string;
    // buttonText?: string;
  }
  
  const Pricing: React.FC<PricingProps> = ({
    title,
    description,
    plans,
    bgColor = "bg-gray-100",
    // buttonText = "Get Started",
  }) => {
    return (
      <section id="pricing" className={`py-32 ${bgColor} text-gray-900`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mt-3 text-lg text-gray-600">{description}</p>
  
          {/* Pricing Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {plans.map((plan, index) => (
    <div key={index} className="px-4 py-14 bg-white rounded-lg shadow-md shadow-slate-300 text-center border flex flex-col justify-center items-center">
      <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
      <p className="mt-2 text-xl font-semibold text-white px-2 py-1 rounded bg-orange-500">{plan.price}</p>
      <ul className="mt-4 space-y-2 text-gray-600">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex justify-center items-center gap-2">
            ✅ {feature}
          </li>
        ))}
      </ul>
      {/* <button className="mt-6 px-3 py-2 w-40 bg-purple text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition">
        {buttonText}
      </button> */}
    </div>
  ))}
</div>

<p className="mt-6 text-red-500">Note: It can vary according to your requirements</p>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  