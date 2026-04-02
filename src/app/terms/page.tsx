import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '@/styles/static-page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | DAROBOTS',
  description:
    'DAROBOTS terms of service. Read the terms and conditions for using our website and AI chatbot development services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.subtitle}>Last updated: March 30, 2026</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.text}>
            Welcome to DAROBOTS. These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the website at{' '}
            <a href="https://darobots.com.ua" className={styles.link}>
              darobots.com.ua
            </a>{' '}
            and any services provided by DAROBOTS, including but not limited to AI chatbot
            development, business automation, Google Ads management tools, and related consulting
            services.
          </p>
          <p className={styles.text}>
            By accessing our website or engaging our services, you agree to be bound by these Terms.
            If you do not agree, please do not use our website or services.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Services</h2>
          <p className={styles.text}>DAROBOTS provides the following services:</p>
          <ul className={styles.list}>
            <li>Custom AI chatbot development for Telegram, Viber, WhatsApp, and web platforms.</li>
            <li>Telegram Mini App development.</li>
            <li>Business process automation and CRM integrations.</li>
            <li>
              Google Ads campaign monitoring and optimization tools powered by AI, including search
              term classification, negative keyword suggestions, anomaly detection, and automated
              performance reporting.
            </li>
            <li>AI-powered dialogue systems and intelligent assistants.</li>
          </ul>
          <p className={styles.text}>
            The specific scope, deliverables, timeline, and fees for any project are defined in a
            separate written agreement or proposal between DAROBOTS and the client.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Use of Website</h2>
          <p className={styles.text}>You agree not to:</p>
          <ul className={styles.list}>
            <li>
              Use the website for any unlawful purpose or in violation of any applicable laws or
              regulations.
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the website, server, or connected
              systems.
            </li>
            <li>
              Interfere with or disrupt the website or the servers and networks connected to it.
            </li>
            <li>
              Reproduce, duplicate, copy, sell, or exploit any portion of the website without express
              written permission.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
          <p className={styles.text}>
            All content on this website, including text, graphics, logos, images, and software, is
            the property of DAROBOTS or its content suppliers and is protected by applicable
            intellectual property laws.
          </p>
          <p className={styles.text}>
            For client projects: unless otherwise agreed in writing, intellectual property rights for
            custom-developed solutions are transferred to the client upon full payment as specified in
            the project agreement.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Google Ads API Services</h2>
          <p className={styles.text}>
            DAROBOTS develops and operates internal tools that interact with the Google Ads API to
            provide campaign monitoring, search term analysis, and performance reporting services. By
            using any services related to Google Ads:
          </p>
          <ul className={styles.list}>
            <li>
              You acknowledge that our tools access Google Ads data in accordance with the{' '}
              <a
                href="https://developers.google.com/google-ads/api/docs/terms"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads API Terms and Conditions
              </a>
              .
            </li>
            <li>
              You agree that use of Google Ads data is also subject to{' '}
              <a
                href="https://policies.google.com/privacy"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              DAROBOTS does not guarantee specific advertising results or performance outcomes.
              Campaign performance depends on many factors beyond our control, including market
              conditions, competition, and ad quality.
            </li>
            <li>
              Any data obtained through the Google Ads API is handled in accordance with our Privacy
              Policy and applicable data protection regulations.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Client Responsibilities</h2>
          <p className={styles.text}>When engaging our services, clients are responsible for:</p>
          <ul className={styles.list}>
            <li>Providing accurate and complete information necessary for project execution.</li>
            <li>
              Granting necessary access to platforms, accounts, and systems as required for the
              project.
            </li>
            <li>Timely review and approval of deliverables as outlined in the project agreement.</li>
            <li>Ensuring compliance with applicable laws regarding their own business operations.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Payment Terms</h2>
          <p className={styles.text}>
            Payment terms are specified in individual project agreements. Unless otherwise stated:
          </p>
          <ul className={styles.list}>
            <li>A deposit may be required before work commences.</li>
            <li>Invoices are due within the timeframe specified in the agreement.</li>
            <li>
              Late payments may result in suspension of services until the outstanding balance is
              settled.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
          <p className={styles.text}>
            To the maximum extent permitted by applicable law, DAROBOTS shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss of
            profits, revenue, data, or business opportunities arising out of or related to your use
            of our website or services.
          </p>
          <p className={styles.text}>
            Our total liability for any claim arising out of or relating to these Terms or our
            services shall not exceed the amount paid by you to DAROBOTS for the specific service
            giving rise to the claim.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Warranties and Disclaimers</h2>
          <p className={styles.text}>
            Our website and services are provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, either express or implied, including but not limited to
            implied warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <p className={styles.text}>
            DAROBOTS does not warrant that the website will be uninterrupted, error-free, or free of
            viruses or other harmful components.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Termination</h2>
          <p className={styles.text}>
            We reserve the right to terminate or suspend access to our website and services at our
            sole discretion, without prior notice, for conduct that we believe violates these Terms
            or is harmful to other users, us, or third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Governing Law</h2>
          <p className={styles.text}>
            These Terms shall be governed by and construed in accordance with the laws of Ukraine.
            Any disputes arising from or in connection with these Terms shall be subject to the
            exclusive jurisdiction of the courts of Ukraine.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Changes to These Terms</h2>
          <p className={styles.text}>
            We reserve the right to modify these Terms at any time. Updated Terms will be posted on
            this page with a revised date. Your continued use of our website or services after any
            changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <p className={styles.text}>
            <strong>DAROBOTS</strong>
            <br />
            Email:{' '}
            <a href="mailto:hello@darobots.com.ua" className={styles.link}>
              hello@darobots.com.ua
            </a>
            <br />
            Website:{' '}
            <a href="https://darobots.com.ua" className={styles.link}>
              darobots.com.ua
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
