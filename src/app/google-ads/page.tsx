import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '@/styles/static-page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Automation Tool | DAROBOTS',
  description:
    'DAROBOTS internal Google Ads automation tool. AI-powered campaign monitoring, search term classification, negative keyword suggestions, anomaly detection, and Telegram reporting.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function GoogleAdsServices() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.title}>Google Ads Automation Tool</h1>
        <p className={styles.subtitle}>Internal AI-powered campaign management by DAROBOTS</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.text}>
            DAROBOTS has developed an internal Google Ads automation tool designed to streamline
            campaign management and optimization. This tool leverages the Google Ads API in
            combination with artificial intelligence to provide intelligent monitoring, analysis, and
            reporting for Google Ads accounts managed by our team.
          </p>
          <p className={styles.text}>
            The tool is used internally by DAROBOTS to manage our own advertising accounts and
            deliver better outcomes through data-driven decision-making and automated workflows.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features</h2>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Search Term Classification</h3>
              <p>
                Automatically classifies incoming search terms using a combination of regex pattern
                matching and LLM-based analysis. Identifies relevant, irrelevant, and potentially
                wasteful search queries to keep campaigns focused on high-intent traffic.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>Negative Keyword Suggestions</h3>
              <p>
                Based on search term analysis, the tool suggests negative keywords to exclude
                irrelevant traffic. This reduces wasted ad spend and improves campaign ROI by
                ensuring ads are shown only to the right audience.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>Anomaly Detection</h3>
              <p>
                Continuously monitors key campaign metrics and detects anomalies such as sudden CPC
                spikes, unusual CTR drops, rapid budget exhaustion, and unexpected changes in
                conversion rates. Alerts are triggered in real-time to enable quick response.
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3>Telegram Reporting</h3>
              <p>
                Sends daily and weekly performance reports directly to Telegram. Reports include key
                metrics (impressions, clicks, cost, conversions, CPC, CTR), trend comparisons, and
                actionable insights — all delivered in a convenient chat format.
              </p>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.text}>
            The tool connects to Google Ads accounts through the official Google Ads API and operates
            on a scheduled basis:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Data Collection</strong> — campaign, ad group, keyword, and search term data is
              fetched from the Google Ads API at regular intervals.
            </li>
            <li>
              <strong>AI Analysis</strong> — search terms are processed through a classification
              pipeline that combines regex rules with LLM-based semantic analysis to determine
              relevance and intent.
            </li>
            <li>
              <strong>Anomaly Monitoring</strong> — statistical models track metric trends and flag
              deviations from expected patterns (CPC spikes, CTR drops, budget pacing issues).
            </li>
            <li>
              <strong>Report Generation</strong> — structured performance summaries are generated and
              delivered via Telegram bot, including daily snapshots and weekly trend reports.
            </li>
            <li>
              <strong>Recommendations</strong> — the system outputs actionable suggestions such as
              new negative keywords, budget adjustments, and campaign structure improvements.
            </li>
          </ul>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Internal Use</h2>
          <div className={styles.highlight}>
            <p>
              This tool is developed and operated by DAROBOTS for internal use in managing our own
              Google Ads accounts. It is not a publicly available product or SaaS offering. The tool
              accesses the Google Ads API in full compliance with the{' '}
              <a
                href="https://developers.google.com/google-ads/api/docs/terms"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads API Terms and Conditions
              </a>{' '}
              and adheres to all applicable data handling and privacy requirements.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <ul className={styles.list}>
            <li>
              <strong>Google Ads API</strong> — official API for accessing campaign data and
              management operations.
            </li>
            <li>
              <strong>Python</strong> — core backend language for data processing and automation
              pipelines.
            </li>
            <li>
              <strong>AI/LLM Integration</strong> — large language models for semantic search term
              classification and insight generation.
            </li>
            <li>
              <strong>Telegram Bot API</strong> — for delivering reports and alerts to team members
              in real-time.
            </li>
            <li>
              <strong>Docker</strong> — containerized deployment for reliability and consistency.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Handling and Privacy</h2>
          <p className={styles.text}>
            All Google Ads data accessed through the API is handled in strict accordance with our{' '}
            <a href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </a>{' '}
            and Google&apos;s data usage policies. We do not share, sell, or distribute any Google
            Ads account data to third parties. Data is stored securely and retained only for the
            duration necessary to provide monitoring and reporting services.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.text}>
            For questions about our Google Ads automation tool or to learn more about our services:
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
