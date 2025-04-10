import React from "react";
import Image from "next/image";
import {
  Banknote,
  LaptopMinimalCheck,
  MessageSquare,
  PersonStanding,
  Phone,
  Plane,
  Shield,
  Users,
} from "lucide-react";

export default function HomePage() {
  interface FAQItem {
    question: string;
    answer: string | React.ReactNode;
  }

  const faqItems: FAQItem[] = [
    {
      question: "What is corporate travel management?",
      answer: (
        <span className="flex flex-col gap-3">
          Corporate travel management refers to a specialised service tailored
          for businesses, focusing on the simplification and optimisation of a
          company&#39;s travel activities. It covers the planning, booking, and
          management of travel arrangements for employees, ensuring their
          journeys align with company goals while remaining efficient and
          sustainable.
        </span>
      ),
    },
    {
      question:
        "What are the benefits of a business travel management platform for a company?",
      answer: (
        <span className="flex flex-col gap-3">
          <p>
            A business travel management platform offers an array of benefits to
            companies. Beyond potentially saving the organisation both time and
            money by identifying and securing the best available travel deals,
            it ensures that the company’s travel policy is adhered to, enhancing
            visibility across all travel activities.
          </p>
          <p>
            With features such as traveller tracking, the platform enhances the
            safety and security of employees on the move. Our system can also
            prioritise preferred hotels and services, ensuring employees have a
            stress-free and positive travel experience, allowing them to remain
            productive during their trips.
          </p>
          <p>
            Moreover, by leveraging state-of-the-art technology, the platform
            streamlines travel processes, ensuring enhanced efficiency,
            sustainability, and personal well-being for all travellers.
          </p>
        </span>
      ),
    },
    {
      question:
        "What is the difference between a travel agency and a travel management company?",
      answer: (
        <span className="flex flex-col gap-3">
          <p>
            Whilst both entities provide services related to travel, a travel
            agency primarily focuses on arranging leisure travel for individuals
            or families. In contrast, a Travel Management Company (TMC)
            specialises in catering to the demands of corporate travel.
          </p>
          <p>
            A TMC not only offers solutions tailored to business needs but also
            places a strong emphasis on optimising expenses through detailed
            reporting. They ensure traveller safety and well-being are
            paramount, and align travel activities with a company&#30;s
            sustainability objectives, ensuring that all travel-related
            decisions resonate with a company&#30;s broader goals and policies.
          </p>
        </span>
      ),
    },
    {
      question: "What are the basic functions of a travel management company?",
      answer: (
        <span className="flex flex-col gap-3">
          <p>
            A travel management company (TMC) offers a blend of human expertise
            and cutting-edge technology to streamline the corporate travel
            experience for businesses.
          </p>
          <p>
            Primarily, a TMC provides customised travel planning and booking
            solutions, tailored specifically to the needs of businesses. Not
            only do they manage all corporate travel requirements from inception
            to completion, but they also ensure cost optimisation by securing
            the best travel deals available.
          </p>

          <p>
            Beyond travel arrangements, their services put the traveller’s
            experience at the forefront, prioritising their comfort and meeting
            their needs consistently. Crucially, with an ever-growing emphasis
            on ESG (Environmental, Social, and Governance) criteria, TMCs align
            travel activities with a company’s sustainability objectives.
          </p>

          <p>
            In addition, a TMC will focus on risk reduction, duty of care, and
            providing uninterrupted, round-the-clock support to travellers.
          </p>
        </span>
      ),
    },
    {
      question: "How do I choose a travel management company?",
      answer: (
        <span className="flex flex-col gap-3">
          <p>
            When selecting a travel management company, it’s vital to find one
            that deeply understands your business’s strategic goals and can
            align its services accordingly.
          </p>

          <p>
            Look for a company that offers both technological solutions and
            human expertise to address travel challenges. A company that
            consistently prioritises traveller well-being and satisfaction will
            always be a good choice. Examining a company’s track record and
            seeking testimonials from other trusted businesses can also provide
            invaluable insights. Ensure the company you choose is transparent
            about costs and the range of services they offer.
          </p>

          <p>
            Lastly, a proactive company that’s adaptable in providing solutions
            tailored to your ever-changing needs is ideal.
          </p>
        </span>
      ),
    },
    {
      question:
        "What are the benefits of booking with an experienced consultant?",
      answer: (
        <span className="flex flex-col gap-3">
          <p>
            Engaging with an experienced consultant for travel provides several
            distinct advantages.
          </p>

          <p>
            Firstly, they offer expert insights into crafting the best possible
            travel options tailored specifically to your needs. With their
            expertise, they handle the intricacies of travel planning, saving
            you a significant amount of time.
          </p>

          <p>
            They are adept at identifying and mitigating potential travel
            issues, ensuring you have a smooth experience. Their established
            industry relationships also grant access to exclusive deals and
            competitive rates, ensuring you get maximum value for your money.
          </p>

          <p>
            Ultimately, an experienced consultant guarantees a seamless,
            stress-free travel experience from the beginning to the end of your
            journey.
          </p>
        </span>
      ),
    },
    {
      question:
        "I currently use a travel management company. Is it easy to switch over?",
      answer: (
        <span className="flex flex-col gap-3">
          We&#30;ll make the transition from your existing supplier to Good
          Travel Management an easy one. We aim to keep the set-up process as
          straightforward as possible, and because you&#39;ll have your own
          Customer Implementation Manager, they&#39;ll do the hard work and
          guide you through the whole process.
        </span>
      ),
    },
    {
      question: "How can I optimize my travel expenses?",
      answer: "There are several ways to optimize travel expenses...",
    },
    {
      question: "What support do you provide?",
      answer: "We provide 24/7 support for all your travel needs...",
    },
  ];

  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-primary]">
          <div className="flex flex-col lg:flex-row items-center min-h-screen px-10">
            <div className="w-full lg:w-1/2 py-16 px-4">
              <h1 className="text-4xl font-bold">
                Your dedicated SME corporate travel team
              </h1>
              <p className="mt-4 max-w-2xl">
                Fully tailored travel management packages designed around the
                precise needs of your business.
              </p>
              <div className="flex items-center gap-2 mt-6">
                <button className="bg-[var(--secondary)] text-white px-6 py-3 rounded-md">
                  Book a Call
                </button>
                <button className="border text-primary bg-white px-6 py-3 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            <div className="w-full flex justify-center lg:w-1/2">
              <Image
                width={900}
                height={500}
                alt="Hero Image"
                // className="object-cover"
                src="https://good-travel.co.uk/wp-content/uploads/home-hero-1536x1327.png.webp"
              />
            </div>
          </div>
        </section>

        {/* We make ... */}
        <section className="bg-white flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-full">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              <span className="text-orange-500">We make</span> business travel
              management a doddle from{" "}
              <span className="text-gray-900">door to door.</span>
            </h1>
            <p className="text-gray-700 text-lg">
              Business travel is about more than just movement, as it’s a key
              element in achieving key outcomes. When the journey is smooth and
              free from unwelcome surprises, the traveller is in the right frame
              of mind to hit the ground running and deliver their best work. By
              choosing Good Travel Management, you’re not just removing the
              obstacles that can arise during corporate travel, you’re investing
              in optimised productivity at an operational level.
            </p>
          </div>

          {/* Image and Quote Section */}
          <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            {/* Background Circle */}
            <div className="absolute w-48 h-48 bg-orange-300 rounded-full z-0"></div>

            {/* Image */}
            <Image
              src="/images/woman.png"
              alt="Smiling woman"
              width={250}
              height={250}
              className="relative z-10 rounded-full"
            />

            {/* Quote Box */}
            <div className="absolute right-0 bg-pink-100 p-6 rounded-lg shadow-lg max-w-xs mt-32">
              <span className="text-3xl font-bold text-gray-800">“</span>
              <p className="text-gray-800 text-sm mt-2">
                Whether your teams are attending an event, visiting a client,
                conducting a site survey or delivering training at multiple
                locations, you need to know that they can get from{" "}
                <span className="font-bold">A to B</span> in a fast, affordable,
                and enjoyable way.
              </p>
            </div>
          </div>
        </section>

        {/* We make business travel... */}
        <section className="bg-white text-black py-16 px-6">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold">
              We make business travel management a doddle from door to door.
            </h2>
            <p className="mt-4">
              We take care of everything, so you don’t have to.
            </p>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Plane className="w-12 h-12 text-purple-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">We help deliver</h3>
                <p className="text-gray-600">
                  Streamlined travel management solutions for your business
                  needs
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <LaptopMinimalCheck className="w-12 h-12 text-purple-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  We partner for success
                </h3>
                <p className="text-gray-600">
                  Working together to optimize your travel program
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-purple-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  We delight our clients
                </h3>
                <p className="text-gray-600">
                  Exceptional service and support for your team
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-purple-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  We look after the travellers
                </h3>
                <p className="text-gray-600">
                  Ensuring they have a smooth and hassle-free journey.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <PersonStanding className="w-12 h-12 text-purple-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  We partner the travel booker
                </h3>
                <p className="text-gray-600">
                  Providing tools and support to make booking easy.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Banknote className="w-12 h-12 text-purple-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  We delight the finance teams
                </h3>
                <p className="text-gray-600">
                  Helping you save money while keeping travelers happy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Let's have a chat */}
        <section className="bg-primary text-white flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-full">
          {/* Image Section */}
          <div className="relative md:w-1/2 flex items-center justify-center">
            {/* Background Circle */}
            <div className="absolute w-48 h-48 bg-blue-200 rounded-full z-0"></div>

            {/* Image */}
            <Image
              src="/images/woman2.png"
              alt="Smiling woman"
              width={250}
              height={250}
              className="relative z-10 rounded-full"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-white">
              A <span className="text-orange-500">human-led</span> service,
              backed by tech
            </h1>
            <p className="text-white text-lg">
              We use the latest technology and software to make corporate travel
              management ridiculously efficient. Whilst these digital tools are
              invaluable, they’d be nothing without the passionate and
              professional people who make up the Good Travel Management team.
            </p>
            <p className="text-white text-lg">
              Our USP is that we genuinely care about the quality of your
              corporate travel not just in terms of precision but also as an
              individual experience.
            </p>

            {/* Certification Box */}
            <div className="bg-secondary text-white p-6 rounded-lg flex items-center space-x-4 mt-6 max-w-lg">
              <div className="text-lg italic">
                We were one of the first to receive an official{" "}
                <span className="font-bold">IATA</span> license back in{" "}
                <span className="font-bold">1946!</span>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/iata-logo.png"
                  alt="IATA Logo"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white text-black py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center">
              Frequently Asked Questions
            </h2>
            <div className="mt-8">
              {faqItems.map((item, index) => (
                <details key={index} className="border-b py-4">
                  <summary className="font-semibold cursor-pointer">
                    {/* <ChevronRight className="w-5 h-5" /> */}
                    {item.question}
                  </summary>
                  <p className="mt-2">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Let's have a chat CTA */}
        <section className="bg-green-500 text-white py-16 text-center">
          <h2 className="text-3xl font-bold">Let&#39;s have a chat</h2>
          <p className="my-2">
            Your business travels are about to get a whole lot easier.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-emerald-500 px-6 py-3 rounded-lg font-medium flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call us
            </button>
            <button className="bg-white hover:bg-gray-100 text-emerald-500 px-6 py-3 rounded-lg font-medium flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Message us
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
