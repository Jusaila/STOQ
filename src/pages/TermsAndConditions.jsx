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
              services, including :
             
              <ul className="list-disc pl-6 space-y-2">
              <li>using STOQ on any device</li>
              <li>personalizing your user experience</li>
              <li>connecting your account to another app</li>
              <li>both free and paid streaming service options</li>
              <li>other STOQ services 
              that contain a link to this Policy</li>
              </ul>
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
                  <li><strong>Device and network information:</strong> We collect certain information about your device and network connection when you access the Services. This information includes your device model, operating system, IP address, device IDs, and system language. We also collect maintenance-related, diagnostic, and performance information, including crash reports and performance logs. We automatically assign you a device ID and user ID. When you log in from multiple devices, we use information such as your device ID and user ID to identify your activity on different devices, to ensure that you log in smoothly and for security purposes.</li>
                  <li><strong>Log information:</strong> information about your use of the Services, such as the features you use and the actions you take.</li>
                  <li><strong>Cookies and similar technologies:</strong> We use cookies and similar tracking technologies to operate and provide the Service. For example, we use cookies to remember your language preferences and for security purposes. We will obtain your consent to our use of cookies, if required by law. To learn more about our use of cookies, please read our Cookie Policy.</li>
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
              <li>providing and improving the App's functionality. For example, to create accounts, provide a quick and convenient login that allows you to communicate with STOQ and provide support to users.</li>
              <li>to contact you, including notifying you of changes to the Platform, providing you with customer support, and sending you other service-related messages.</li>
              <li>processing requests and operations related to product tracking.</li>
              <li>ensuring the security of your account and data.</li>
              <li>send notifications, updates, and other information related to using the App.</li>
              <li>to comply with our legal obligations or as necessary to perform tasks in the public interest or to protect the vital interests of our users and others. This may include providing law enforcement or emergency services with information in an emergency to protect health or life.</li>
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
              <ul className="list-disc pl-6 space-y-2 mb-2">
              <li><strong>Data Encryption</strong> – We use secure encryption algorithms to protect your data both during transmission and storage.</li>
              <li><strong>Network and server protection</strong> – Our servers are protected by firewalls, intrusion detection systems, and other cybersecurity tools.</li>
              <li><strong>Access control</strong> – Access to your data is granted only to authorized employees who are required to comply with strict privacy policies.</li>
              <li><strong>Regular system updates</strong> – We install security updates in a timely manner to protect our systems from new threats.</li>
              <li><strong>Monitoring and auditing</strong> – we constantly monitor system activity to detect suspicious activity and prevent possible data leaks.</li>
              <li><strong>Backup</strong> – Data is backed up regularly, allowing you to restore it in case of unexpected failures.</li>
              <li><strong>Audit</strong> — information security audits are conducted on a regular basis.</li>
            </ul>
            <p>Standards — our business uses the latest international standards, including ISO/IEC 27001, GDPR, NIST and others applicable in the field of data protection.</p>
            <p>Incident response — weеhave implemented and successfully operate an incident response procedure. If they occur, we will notify users and the competent supervisory authorities within 72 hours from the moment of detection.</p>
            <p>Training-Employees receive regular training on data protection issues and are personally responsible for compliance with the established rules.</p>
            <p>We make every effort to ensure the security of your data, but we remind you that no method of data transmission or storage can guarantee 100% protection. If you have any questions about the security of your data, please contact us at <a href="mailto:contact@stoq.ai" className="text-teal-700 hover:underline">contact@stoq.ai</a>.</p>
            </div>

            {/* Transfer of Data to Third Parties */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                4. Transfer of Data to Third Parties
              </h2>
              <p className="leading-relaxed mb-4">
                We do not share your personal data with third parties, except in the following cases:
              </p>
              <ul className="list-disc ml-6 leading-relaxed mb-2">
              <li>If this is necessary to provide the App's services (for example, integration with other accounting systems).</li>
              <li>If this is required by law or to protect our legitimate interests.</li>
              <li>If you have given your explicit consent to such transfer.</li>
            </ul>
            <p>Services are supported by certain entities in our corporate group. These entities process the information you provide and automatically collected information for us as needed to provide certain functions, such as storage, content delivery, security, research and development, analytics, customer support, and technical support.</p>
            <p>All third parties (including contractors, contractors and cloud providers) involved in the processing of personal data are required to comply with strict contractual obligations on confidentiality and data protection (NDA, DPA).</p>
            <p>Users ' personal data is not transferred to third parties for marketing purposes without obtaining a separate and unambiguous consent from the user.</p>
            <p>In cases where cross-border data transfers are carried out, appropriate international protection mechanisms are applied, including standard EU treaty provisions and other recognized international instruments that ensure an appropriate level of personal data security.</p>

            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                5. Your Rights
              </h2>
              <p className="leading-relaxed mb-2">Depending on where you live, you may have certain rights with respect to your personal information, such as the right to know how we collect and use your personal information. You may also have the right to access, modify, object, request a copy of your authorization, file complaints with the competent authorities, withdraw your consent, or restrict our collection and use of your personal information, as well as request its deletion and potentially others. In certain circumstances, you may also ask us to provide additional information about our collection and use of your personal information. Please note that your exercise of certain rights may affect your ability to use some or all of the features and functions of STOQ.</p>
            <p>If you have registered an account, you can also access, view, and update certain personal information that you have provided to us by logging in to your account and using the available features and capabilities.</p>
            <p className="leading-relaxed mb-2">Please contact us using the contact information provided in this Privacy Policy if you wish to exercise any of your rights. We will respond to your request in accordance with applicable laws and subject to proper verification.</p>
            <p className="leading-relaxed mb-2"><strong>Responses to data subjects' requests:</strong> We review and respond to requests from personal data subjects within a period not exceeding 30 (thirty) calendar days from the date of receipt of the request.</p>
            <p className="leading-relaxed mb-2"><strong>Revocation of consent:</strong> If the personal data subject revokes this consent earlier, access to the service will be restricted within 2 (two) calendar days from the date of receipt of the relevant notification by us.</p>
            <p className="leading-relaxed mb-2"><strong>Right to data portability:</strong> The user has the right to request from us a copy of their personal data in a structured, generally accepted and machine-readable format, as well as to transfer this data to another operator without hindrance on our part, if this is technically possible and does not affect the rights and freedoms of third parties.</p>

             
            </div>

            {/* Data Storage */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                6. Data Storage
              </h2>
              <p className="leading-relaxed mb-1">We retain your information for as long as it is necessary to provide our Services and for other purposes set out in this Privacy Policy. We also retain information when it is necessary to comply with contractual and legal obligations, when we have a legitimate business interest in doing so (for example, to improve and develop our Services and improve their security, security and stability), or to exercise or defend legal claims.</p>
            <p className="leading-relaxed mb-1">Retention periods will vary depending on the scope, type and confidentiality of the information, the purposes for which we use the information, and any legal requirements, etc. For example, when we process your information to provide you with Services, we store this information for as long as you have an account. This information includes your account information, login and payment information. If you violate any of our terms, policies, or guidelines, we may store your information as necessary to handle the violation.</p>
            <p className="leading-relaxed mb-1">When the collected personal data is no longer required by us, we and our service providers will perform the necessary procedures to destroy, delete, erase or transform it into an anonymous form, as permitted or required by applicable law.</p>
            <p className="leading-relaxed mb-1">The personal information we collect from you may be stored on a server located outside the country where you live. We store the information we collect on secure servers located in Several Countries.</p>
            <p className="leading-relaxed mb-1">If necessary, we will use appropriate safeguards when transferring personal information outside certain countries, including for one or more of the purposes specified in this Policy, and we will do so in accordance with the requirements of applicable data protection laws.</p>
            <p className="leading-relaxed mb-1"><strong>Retention periods and data deletion:</strong> Maximum retention periods for various categories of data (еaccounting records, accounting documents, activity logs, backups) are set in accordance with the current legislation and internal regulations of the Company.</p>
            <p className="leading-relaxed mb-1"><strong>Anonymization and pseudonymization</strong> — if there is no need to store data in clear form, they are anonymized or pseudonymized to minimize the risks of leakage and misuse.</p>
            <p className="leading-relaxed mb-1"><strong>Data deletion</strong> — upon termination of use of the services, all personal data is subject to irrevocable deletion within the established period (90 calendar days), unless otherwise provided by law or contract.</p>
             
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#6E8A28' }}>
                7. Changes to the Privacy Policy
              </h2>
              <p className="leading-relaxed">
              We may update this Privacy Policy from time to time as required by law. When we update the Privacy Policy, we will notify you by updating the "Last Updated" date at the top of the new Privacy Policy, publishing the new Privacy Policy, or providing any other notice required by applicable law. We recommend that you review the Privacy Policy every time you access our Services to keep up to date with our privacy policies.
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
              The Company reserves the right to change this Privacy Policy. If significant changes are made, users will be notified in advance, but not less than 7 (seven) calendar days prior to the entry into force of such changes, by publishing a new version of the Policy and/or sending a notification to the email address specified in учtheaccounting record. Continuing to use the services after the changes take effect means that the user agrees to the new version of the Policy.
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