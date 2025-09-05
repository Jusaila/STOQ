import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      
      {/* Terms and Conditions Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Terms and Conditions Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: '#6E8A28' }}>
            Terms and Conditions of Use
          </h1>
          
          <div className="space-y-8" style={{ color: '#535862' }}>
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                These Terms of Use (the "Terms") regulate your use of STOQ (hereinafter referred to as the "App"). 
                Please read these Terms and Conditions carefully before using the App. By using the App, you agree to 
                these Terms and Conditions. If you do not agree with them, you should not use the App.
              </p>
            </div>

            {/* Usage Rights */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                2. Usage Rights
              </h2>
              <p className="leading-relaxed mb-4">
                The App is provided to you under a personal, non-exclusive, non-transferable license to be used 
                in accordance with these Terms. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>copy, modify, or create derivative products based on the App.</li>
                <li>transfer, sell, lease, or otherwise distribute the App.</li>
                <li>use the App for illegal purposes or in ways that violate these Terms.</li>
              </ul>
            </div>

            {/* Registration and Account */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                3. Registration and Account
              </h2>
              <p className="leading-relaxed">
                To access the App's features, you will need to create an account. You agree to provide accurate 
                and up-to-date information during registration and maintain the security of your account. You are 
                responsible for all actions performed under your account.
              </p>
            </div>

            {/* Payments and Subscriptions */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                4. Payments and Subscriptions
              </h2>
              <p className="leading-relaxed">
                If the App offers paid services or subscriptions, you agree to pay all fees according to the rates 
                specified in the App. Payment is made using your chosen payment method. Subscriptions are automatically 
                renewed if you do not cancel them before the end of the current period.
              </p>
            </div>

            {/* Responsibility */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                5. Responsibility
              </h2>
              <p className="leading-relaxed">
                The app is provided "as is". We do not guarantee that the App will run smoothly or without errors. 
                We are not responsible for any loss or damage resulting from the use or inability to use the App.
              </p>
            </div>

            {/* Changes and Updates */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                6. Changes and Updates
              </h2>
              <p className="leading-relaxed">
                We reserve the right to change or update the App and these Terms at any time. We will notify you 
                of significant changes via the App or by email. Continuing to use the App after changes are made 
                means that you agree to the new Terms and Conditions.
              </p>
            </div>

            {/* Discontinuation of Use */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                7. Discontinuation of Use
              </h2>
              <p className="leading-relaxed">
                We may suspend or terminate your access to the App if you violate these Terms. You can also stop 
                using the App at any time by deleting your account.
              </p>
            </div>

            {/* Applicable Law */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                8. Applicable Law
              </h2>
              <p className="leading-relaxed">
                These Terms and Conditions are governed by applicable laws. Any disputes related to the use of 
                the App will be resolved in the courts of the relevant jurisdiction.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                9. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions or comments about these Terms, please contact us at: 
                <a href="mailto:contact@stoq.ai" className="text-blue-600 hover:underline ml-1">
                  contact@stoq.ai
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="border-t pt-16">
          <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: '#6E8A28' }}>
            Privacy Policy
          </h1>
          
          <div className="space-y-8" style={{ color: '#535862' }}>
            <p className="leading-relaxed text-lg">
              This Privacy Policy describes how we collect, use, store and protect your personal information 
              when using the Warehouse Accounting STOQ App (the "App"). It applies to the use of all streaming 
              services, including using STOQ on any device, personalizing your user experience, connecting your 
              account to another app, both free and paid streaming service options, and other STOQ services 
              that contain a link to this Policy.
            </p>

            {/* What Data We Collect */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                1. What Data Do We Collect
              </h2>
              <p className="leading-relaxed mb-4">
                When using the App, we may collect the following types of data:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Personal data:</strong> first name, last name, company name, email address, legal address, phone number and other data that you provide when registering or using the App.</li>
                <li><strong>Account Details:</strong> login, password, and other information required to access your account.</li>
                <li><strong>Warehouse data:</strong> information about products, their quantity, storage locations, movements, and other operations related to accounting.</li>
                <li><strong>Technical data:</strong> IP address, device type, operating system, app version, and other data related to the use of the App.</li>
                <li><strong>User input:</strong> When you use our Services, we may collect your text input, suggestions, uploaded files, reviews, chat history, or other content that you provide to our model and Services.</li>
              </ul>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#6E8A28' }}>
                  Automatically Collected Information:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Device and network information:</strong> device model, operating system, IP address, device IDs, system language, maintenance-related, diagnostic, and performance information.</li>
                  <li><strong>Log information:</strong> information about your use of the Services, such as the features you use and the actions you take.</li>
                  <li><strong>Cookies and similar technologies:</strong> We use cookies and similar tracking technologies to operate and provide the Service.</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Data */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                2. How We Use Your Data
              </h2>
              <p className="leading-relaxed mb-4">We use the collected data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>providing and improving the App's functionality and user support</li>
                <li>contacting you with notifications, updates, and customer support</li>
                <li>processing requests and operations related to product tracking</li>
                <li>ensuring the security of your account and data</li>
                <li>complying with legal obligations and protecting vital interests</li>
              </ul>
              <p className="leading-relaxed mt-4">
                If you refuse to allow us to process your data in the manner described above, you can contact us at 
                <a href="mailto:contact@stoq.ai" className="text-blue-600 hover:underline ml-1">contact@stoq.ai</a>.
              </p>
            </div>

            {/* How We Protect Your Data */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                3. How We Protect Your Data
              </h2>
              <p className="leading-relaxed mb-4">
                We take all necessary measures to protect your data from unauthorized access, alteration, 
                disclosure or destruction. Our security measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Data Encryption:</strong> secure encryption algorithms for data transmission and storage</li>
                <li><strong>Network and server protection:</strong> firewalls, intrusion detection systems, and cybersecurity tools</li>
                <li><strong>Access control:</strong> restricted access for authorized employees only</li>
                <li><strong>Regular system updates:</strong> timely security updates to protect against threats</li>
                <li><strong>Monitoring and auditing:</strong> constant system monitoring and regular security audits</li>
                <li><strong>Standards compliance:</strong> adherence to ISO/IEC 27001, GDPR, NIST and other international standards</li>
                <li><strong>Incident response:</strong> 72-hour notification procedure for data breaches</li>
                <li><strong>Employee training:</strong> regular data protection training for all staff</li>
              </ul>
            </div>

            {/* Transfer of Data to Third Parties */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                4. Transfer of Data to Third Parties
              </h2>
              <p className="leading-relaxed mb-4">
                We do not share your personal data with third parties, except in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>If necessary to provide the App's services (e.g., integration with other accounting systems)</li>
                <li>If required by law or to protect our legitimate interests</li>
                <li>If you have given explicit consent to such transfer</li>
              </ul>
              <p className="leading-relaxed mt-4">
                All third parties involved in processing personal data are required to comply with strict 
                confidentiality and data protection obligations. Cross-border transfers are conducted with 
                appropriate international protection mechanisms.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                5. Your Rights
              </h2>
              <p className="leading-relaxed mb-4">
                You have certain rights with respect to your personal information, including the right to 
                access, modify, object, request a copy, file complaints, withdraw consent, restrict collection 
                and use, and request deletion of your personal information.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#6E8A28' }}>Response Times:</h3>
                  <p className="leading-relaxed">We respond to data subject requests within 30 calendar days.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#6E8A28' }}>Consent Withdrawal:</h3>
                  <p className="leading-relaxed">Service access will be restricted within 2 calendar days of consent withdrawal.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#6E8A28' }}>Data Portability:</h3>
                  <p className="leading-relaxed">You can request your data in a structured, machine-readable format.</p>
                </div>
              </div>
            </div>

            {/* Data Storage */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                6. Data Storage
              </h2>
              <p className="leading-relaxed mb-4">
                We retain your information for as long as necessary to provide our Services and comply with 
                legal obligations. Personal information may be stored on secure servers located in several countries.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: '#6E8A28' }}>Retention and Deletion:</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Maximum retention periods are set according to legislation and company regulations</li>
                    <li>Data anonymization and pseudonymization when possible</li>
                    <li>Irrevocable deletion within 90 calendar days after service termination</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                7. Changes to the Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. When we update the Privacy Policy, 
                we will notify you by updating the "Last Updated" date and publishing the new Privacy Policy. 
                We recommend reviewing the Privacy Policy regularly to stay informed of our privacy practices.
              </p>
            </div>

            {/* Company Responsibility */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                8. Company Responsibility
              </h2>
              <p className="leading-relaxed">
                The Company takes all reasonable and legally prescribed measures to protect users' personal data. 
                In the event of a data breach, the Company's liability is limited to the limits established by 
                applicable law, and the Company is not liable for indirect damages, including lost profits.
              </p>
            </div>

            {/* User Consent */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                9. User Consent
              </h2>
              <p className="leading-relaxed">
                By using the services and continuing to interact with the App, you confirm that you have read 
                and agree to the terms of this Privacy Policy. In some cases, consent may be expressed explicitly 
                through registration checkboxes or when providing certain categories of data.
              </p>
            </div>

            {/* Policy Changes */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                10. Change of the Privacy Policy
              </h2>
              <p className="leading-relaxed">
                The Company reserves the right to change this Privacy Policy. Significant changes will be 
                communicated at least 7 calendar days in advance through email notification or policy publication. 
                Continuing to use the services after changes take effect indicates agreement to the new Policy version.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                11. Contact Us
              </h2>
              <p className="leading-relaxed">
                Questions, comments, and requests regarding this policy should be directed to 
                <a href="mailto:contact@stoq.ai" className="text-blue-600 hover:underline ml-1">
                  contact@stoq.ai
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;