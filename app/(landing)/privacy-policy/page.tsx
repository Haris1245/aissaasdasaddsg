import LandingFooter from "@/components/landing-footer";
import { LandingNavBar } from "@/components/landing-navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="text-center bg-transparent text-white font-extrabold text-6xl mt-[40px]">
        <h1>Privacy Policy</h1>
        <div className="bg-transparent text-white p-8 text-lg text-center">
          <div className="max-w-screen-md mx-auto">
            <p className="mb-4">
              At WinnerAI, we are committed to safeguarding your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines our practices regarding the collection, use, and
              protection of your data.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Information Collection
            </h2>
            <p className="mb-4">
              We may collect personal information such as your name, email
              address, and other relevant details when you use our services.
              This information is used to provide and improve our services and
              to communicate with you.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Information Usage
            </h2>
            <p className="mb-4">
              Your personal information may be used for various purposes,
              including but not limited to providing support, improving our
              services, and sending updates or promotional content. We will
              never share your information with third parties without your
              consent.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Data Security
            </h2>
            <p className="mb-4">
              We implement strict security measures to protect your data from
              unauthorized access, disclosure, alteration, or destruction. Your
              data is stored on secure servers, and we follow industry-standard
              security practices.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">Cookies</h2>
            <p className="mb-4">
              We may use cookies and similar technologies to enhance your
              experience on our platform. You can manage cookie preferences
              through your browser settings.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Changes to Privacy Policy
            </h2>
            <p className="mb-4">
              This Privacy Policy may be updated from time to time. We encourage
              you to review it periodically to stay informed about how we handle
              your data.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions or concerns about our Privacy Policy,
              please contact us at winnerai474@gmail.com
            </p>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default PrivacyPolicy;
