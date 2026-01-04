import type React from "react";

export default function TermsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-white text-gray-600">
            <div className="container px-4 py-8 md:py-16 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

                <div className="space-y-6 text-sm leading-relaxed">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Introduction</h2>
                        <p>Welcome to Momo Kato. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms. If you disagree with any part of the terms, you may not access the service.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">2. Use of Website</h2>
                        <p>You agree to use our website for lawful purposes only. You must not use our site in any way that violates any applicable local, national, or international law or regulation. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">3. Intellectual Property</h2>
                        <p>All content included on this website, such as text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of Momo Kato or its content suppliers and protected by copyright, trademark and other laws. The compilation of all content on this site is the exclusive property of Momo Kato.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">4. User Accounts</h2>
                        <p>If you create an account on our website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Limitation of Liability</h2>
                        <p>In no event shall Momo Kato, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Changes to Terms</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us through our contact page.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
