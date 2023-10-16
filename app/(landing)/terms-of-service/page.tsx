import LandingFooter from "@/components/landing-footer";
import { LandingNavBar } from "@/components/landing-navbar";
import React from "react";

const TermsOfService = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="text-center bg-transparent text-white font-extrabold text-6xl mt-[40px]">
        <h1>Terms of Service</h1>
        <div className="bg-transparent text-white p-8 text-lg text-center">
          <div className="max-w-screen-md mx-auto">
            <p className="mb-4">
              Welcome to WinnerAI ! By using our services, you agree to comply
              with and be bound by the following terms and conditions. Please
              read them carefully.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Service Use
            </h2>
            <p className="mb-4">
              You must use our services in compliance with all applicable laws
              and regulations. You are responsible for maintaining the security
              of your account and any activity that occurs under your account.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">Content</h2>
            <p className="mb-4">
              Our platform may allow you to submit, store, and share content.
              You are solely responsible for the content you submit, and it must
              not violate any copyright, trademark, or intellectual property
              rights.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Termination
            </h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend your account and
              access to our services if you violate these terms or engage in any
              activities that may harm our platform or other users.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Changes to Terms
            </h2>
            <p className="mb-4">
              We may revise these terms from time to time. Your continued use of
              our services after changes are made constitutes your acceptance of
              the new terms.
            </p>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions or concerns about our Terms of Service,
              please contact us at winnerai474@gmail.com
            </p>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default TermsOfService;
