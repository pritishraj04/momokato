import type React from "react";

export default function PrivacyPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-white text-gray-600">
            <div className="container px-4 py-8 md:py-16 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                <div className="space-y-6 text-sm leading-relaxed">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Introduction</h2>
                        <p>Momo Kato respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">2. Information We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data (includes first name, last name, username or similar identifier), Contact Data (includes billing address, delivery address, email address and telephone numbers), Technical Data (includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location), and Usage Data (includes information about how you use our website, products and services).</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">3. How We Use Your Information</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are getting into or have entered into with you; Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests; Where we need to comply with a legal or regulatory obligation.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Cookies</h2>
                        <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Third-Party Links</h2>
                        <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
