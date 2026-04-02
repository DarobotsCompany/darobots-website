import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '@/styles/static-page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DAROBOTS',
  description:
    'DAROBOTS privacy policy. Learn how we collect, use, and protect your personal data when you use our website and services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>Last updated: March 30, 2026</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.text}>
            DAROBOTS (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a digital agency
            specializing in AI chatbot development and business automation. We are committed to
            protecting your privacy and handling your personal data responsibly. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our
            website at{' '}
            <a href="https://darobots.com.ua" className={styles.link}>
              darobots.com.ua
            </a>{' '}
            or use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p className={styles.text}>We may collect the following types of information:</p>
          <ul className={styles.list}>
            <li>
              <strong>Personal information</strong> you provide voluntarily through our contact
              forms, including your name, email address, phone number, company name, and project
              description.
            </li>
            <li>
              <strong>Usage data</strong> collected automatically, including your IP address, browser
              type, operating system, referring URLs, pages visited, time spent on pages, and
              click-through data.
            </li>
            <li>
              <strong>Device information</strong> such as device type, screen resolution, and
              language preferences.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
          <p className={styles.text}>We use the collected information for the following purposes:</p>
          <ul className={styles.list}>
            <li>To respond to your inquiries and provide requested services.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>
              To analyze website traffic and usage patterns using analytics tools.
            </li>
            <li>To send you relevant communications if you have opted in.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Cookies and Tracking Technologies</h2>
          <p className={styles.text}>
            Our website uses cookies and similar tracking technologies to enhance your browsing
            experience and collect analytics data. Specifically, we use:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Google Analytics / Google Tag Manager</strong> — to understand how visitors
              interact with our website, measure traffic sources, and improve our content. Google
              Analytics may collect data such as your IP address (anonymized), pages visited, session
              duration, and device information. For more details, see{' '}
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
              <strong>Facebook Pixel</strong> — to measure the effectiveness of our advertising and
              understand user actions on our website.
            </li>
            <li>
              <strong>Essential cookies</strong> — required for the website to function properly.
            </li>
          </ul>
          <p className={styles.text}>
            You can control cookies through your browser settings. Disabling cookies may affect
            certain features of our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Contact Forms</h2>
          <p className={styles.text}>
            When you submit a contact form on our website, we collect the information you provide
            (such as your name, email, phone number, and message). This data is used solely to
            respond to your inquiry and is not shared with third parties for marketing purposes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Data Sharing and Disclosure</h2>
          <p className={styles.text}>
            We do not sell, trade, or rent your personal data to third parties. We may share your
            information with:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Service providers</strong> who assist us in operating our website and services
              (e.g., hosting, analytics), bound by confidentiality agreements.
            </li>
            <li>
              <strong>Legal authorities</strong> when required by law or to protect our rights and
              safety.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Data Security</h2>
          <p className={styles.text}>
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction. However, no
            method of transmission over the Internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Data Retention</h2>
          <p className={styles.text}>
            We retain your personal data only for as long as necessary to fulfill the purposes
            outlined in this policy or as required by law. Contact form submissions are retained for
            up to 12 months unless you request earlier deletion.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Your Rights</h2>
          <p className={styles.text}>Depending on your jurisdiction, you may have the right to:</p>
          <ul className={styles.list}>
            <li>Access, correct, or delete your personal data.</li>
            <li>Object to or restrict the processing of your data.</li>
            <li>Withdraw consent at any time (where processing is based on consent).</li>
            <li>Request data portability.</li>
            <li>Lodge a complaint with a data protection authority.</li>
          </ul>
          <p className={styles.text}>
            To exercise any of these rights, please contact us at the email below.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Third-Party Links</h2>
          <p className={styles.text}>
            Our website may contain links to external websites. We are not responsible for the
            privacy practices of those websites and encourage you to review their privacy policies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Changes to This Policy</h2>
          <p className={styles.text}>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated revision date. We encourage you to review this page periodically.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about this Privacy Policy or your personal data, please contact
            us:
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
