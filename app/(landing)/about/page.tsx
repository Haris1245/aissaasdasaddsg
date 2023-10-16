import LandingFooter from "@/components/landing-footer";
import { LandingNavBar } from "@/components/landing-navbar";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="text-center bg-transparent text-white font-extrabold text-6xl mt-[40px]">
        <h1>About Us</h1>
        <div className="bg-transparent text-gradient-to-b from-yellow-300 via-orange-400 to-red-500 p-8 text-lg text-center">
          <div className="max-w-screen-md mx-auto">
            <h1 className="text-xl font-bold text-white mb-4">
              About Us: Empowering Young Minds with AI
            </h1>
            <p className="text-white mb-4">
              At WinnerAI, we are driven by a powerful belief: the future
              belongs to the young, and artificial intelligence is their ticket
              to shaping it. We are a pioneering AI platform that leverages the
              creativity and innovation of teenagers to develop, train, and
              deploy AI models that tackle real-world problems.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Our Vision
            </h2>
            <p className="text-white mb-4">
              We envision a world where young minds are not just consumers of
              technology but creators and leaders in the AI revolution. Our
              mission is to empower teenagers to harness the transformative
              potential of AI, guiding them to be the architects of a brighter,
              smarter, and more compassionate world.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              The Power of Youth
            </h2>
            <p className="text-white mb-4">
              Teenagers have an inherent capacity for innovation, fresh
              perspectives, and boundless creativity. By offering them a
              platform to explore AI, we are fostering a generation of problem
              solvers, critical thinkers, and pioneers who will drive progress
              and innovation across various fields.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              What Sets Us Apart
            </h2>
            <ul className="list-disc pl-4 text-white mb-4">
              <li>
                Youth-Driven AI: We believe that teenagers possess unique
                insights and unbridled creativity. We provide them with the
                tools, resources, and mentorship necessary to harness AI's
                potential and address real-world challenges.
              </li>
              <li>
                Collaborative Ecosystem: Our platform fosters a supportive,
                collaborative environment where young minds can collaborate with
                peers, experts, and mentors to develop AI models that make a
                difference.
              </li>
              <li>
                Real-World Impact: We are committed to guiding teenagers towards
                AI projects that have a positive, tangible impact on society,
                from healthcare to climate change, education, and beyond.
              </li>
              <li>
                Mentorship: Our dedicated team of AI experts and mentors are
                passionate about nurturing young talent. They provide guidance,
                training, and support, helping teens navigate the complexities
                of AI development.
              </li>
            </ul>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Our Core Values
            </h2>
            <ul className="list-disc pl-4 text-white mb-4">
              <li>
                Empowerment: We empower teenagers to explore, create, and lead
                in the world of AI, giving them the confidence and skills they
                need to succeed.
              </li>
              <li>
                Inclusivity: We are committed to inclusivity and ensuring that
                our platform is accessible to teens from all backgrounds,
                fostering diversity of thought and ideas.
              </li>
              <li>
                Ethics: We emphasize ethical AI development, teaching our young
                innovators to consider the social and moral implications of
                their creations.
              </li>
              <li>
                Impact: We measure our success by the positive impact our
                teenage AI pioneers make on society.
              </li>
            </ul>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Join Us on the Journey
            </h2>
            <p className="text-white mb-4">
              At WinnerAI, we invite teenagers to embark on a transformative
              journey, where they will gain the knowledge and skills to build AI
              models that matter. Together, we will shape a world where young
              minds are not just prepared for the future; they are actively
              building it.
            </p>

            <p className="text-white mb-4">
              Join us today and be part of a movement that believes in the power
              of youth to change the world through AI.
            </p>

            <p className="text-xl font-bold text-white">
              Empower. Innovate. Transform.
            </p>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default AboutPage;
