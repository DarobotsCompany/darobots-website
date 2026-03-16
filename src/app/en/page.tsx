import Link from 'next/link';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import styles from './EnPage.module.scss';

export default function EnglishHomePage() {
  return (
    <>
      <Header />
      <main className={styles.root}>
        {/* Language switcher */}
        <div className={styles.lang_switcher}>
          <Link href="/">UA Українська</Link>
          <span className={styles.active}>EN English</span>
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>DAROBOTS — Chatbot Development Company in Ukraine</h1>
          <p className={styles.subtitle}>
            We build AI-powered chatbots for Telegram, Viber, WhatsApp and web platforms
            that automate sales, customer support, and business processes.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>7</span>
              <p>Case Studies</p>
            </div>
            <div className={styles.stat}>
              <span>20,000+</span>
              <p>Weekly Users Served</p>
            </div>
            <div className={styles.stat}>
              <span>8</span>
              <p>Team Members</p>
            </div>
            <div className={styles.stat}>
              <span>5</span>
              <p>Platforms</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.section}>
          <h2>About Darobots</h2>
          <p>
            Darobots is a chatbot development company based in Vinnytsia, Ukraine. We specialize in
            building custom AI-powered chatbots for businesses of all sizes. Our team of 8 specialists
            includes AI engineers, backend developers, UX designers, and project managers.
          </p>
          <p>
            Since our founding, we have completed 7 major projects with measurable results — from
            government hotlines serving 20,000+ users per week to loyalty programs that increased
            repeat purchases by 130%. We work with Telegram, Viber, WhatsApp, Instagram, and web platforms.
          </p>
        </section>

        {/* Services Section */}
        <section className={styles.section}>
          <h2>Our Services</h2>
          <div className={styles.services_grid}>
            <div className={styles.service_card}>
              <h3>Custom Chatbot Development</h3>
              <p>
                Bespoke chatbots for Telegram, Viber, WhatsApp, Instagram and web. From simple FAQ bots
                to complex multi-step conversation flows with payments, booking systems, and CRM integration.
              </p>
            </div>
            <div className={styles.service_card}>
              <h3>Telegram Mini App Development</h3>
              <p>
                Full-featured applications inside Telegram with product catalogs, shopping carts,
                payment processing, booking systems, and loyalty programs.
              </p>
            </div>
            <div className={styles.service_card}>
              <h3>AI-Powered Dialogue Systems</h3>
              <p>
                Intelligent chatbots powered by OpenAI GPT, custom-trained models, and RAG (Retrieval-Augmented
                Generation) for natural language understanding and context-aware responses.
              </p>
            </div>
            <div className={styles.service_card}>
              <h3>Business Process Automation</h3>
              <p>
                Automate bookings, orders, customer support, loyalty programs, and internal operations
                through chatbot interfaces integrated with your existing business systems.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className={styles.section} id="cases">
          <h2>Case Studies</h2>
          <p className={styles.section_intro}>
            Every project below has real metrics and measurable business outcomes.
          </p>

          <div className={styles.cases_grid}>
            <article className={styles.case_card}>
              <h3>2345 Government Support Hotline</h3>
              <span className={styles.platform}>Telegram + Web</span>
              <p>
                Multi-platform psychological support chatbot for the Ukrainian government hotline 2345.
                Connects users with 50+ psychologists, handles appointment scheduling, and provides
                emergency resources.
              </p>
              <div className={styles.metrics}>
                <div><strong>20,000+</strong> users in first week</div>
                <div><strong>50+</strong> psychologists connected</div>
                <div><strong>24/7</strong> availability</div>
              </div>
              <Link href="/en/cases/2345">Read case study</Link>
            </article>

            <article className={styles.case_card}>
              <h3>CHANGER — Premium Car Rental</h3>
              <span className={styles.platform}>Telegram Mini App</span>
              <p>
                Full-featured Telegram Mini App for a premium car rental company in Ukraine. Customers browse
                available vehicles, select dates, and complete bookings entirely within Telegram.
              </p>
              <div className={styles.metrics}>
                <div><strong>80%</strong> bookings automated</div>
                <div><strong>+50%</strong> customer LTV</div>
                <div><strong>2x</strong> faster booking process</div>
              </div>
              <Link href="/en/cases/changer">Read case study</Link>
            </article>

            <article className={styles.case_card}>
              <h3>ChestVape — Loyalty Program Bot</h3>
              <span className={styles.platform}>Telegram</span>
              <p>
                Comprehensive loyalty program chatbot for a retail store chain in Ukraine. QR code cards,
                bonus points, purchase history, referral programs, and targeted push campaigns.
              </p>
              <div className={styles.metrics}>
                <div><strong>+130%</strong> repeat purchases</div>
                <div><strong>2.3x</strong> customer return rate</div>
                <div><strong>3x</strong> revenue during promotions</div>
              </div>
              <Link href="/en/cases/chestvape">Read case study</Link>
            </article>

            <article className={styles.case_card}>
              <h3>DIROM — Construction E-commerce</h3>
              <span className={styles.platform}>Telegram</span>
              <p>
                E-commerce chatbot for a construction materials retailer in Ukraine. Product catalog,
                order management, delivery tracking, and customer support all within Telegram.
              </p>
              <div className={styles.metrics}>
                <div><strong>20%</strong> orders via bot</div>
                <div><strong>0</strong> manager calls needed</div>
                <div><strong>+35%</strong> customer satisfaction</div>
              </div>
              <Link href="/en/cases/dirom">Read case study</Link>
            </article>

            <article className={styles.case_card}>
              <h3>Dr Estet Vel — Cosmetic Clinic</h3>
              <span className={styles.platform}>Telegram</span>
              <p>
                Appointment automation chatbot for a cosmetic clinic in Ukraine. Patients browse services,
                select doctors, and book appointments through the bot.
              </p>
              <div className={styles.metrics}>
                <div><strong>40%</strong> appointments via bot</div>
                <div><strong>-80%</strong> admin workload</div>
                <div><strong>+25%</strong> repeat visits</div>
              </div>
              <Link href="/en/cases/dr-estet-vel">Read case study</Link>
            </article>

            <article className={styles.case_card}>
              <h3>SpeakEasy — English School</h3>
              <span className={styles.platform}>Telegram</span>
              <p>
                Marketing and enrollment chatbot for an English language school in Ukraine. Automated lead
                qualification, trial lesson booking, and student communication.
              </p>
              <div className={styles.metrics}>
                <div><strong>2x</strong> new students</div>
                <div><strong>-40%</strong> teacher workload</div>
                <div><strong>+60%</strong> lead conversion</div>
              </div>
              <Link href="/en/cases/speakeasy">Read case study</Link>
            </article>

            <article className={styles.case_card}>
              <h3>NOVA CLUB — Business Community</h3>
              <span className={styles.platform}>Telegram</span>
              <p>
                Subscription management chatbot for a business networking community in Ukraine. Automated
                onboarding, payment processing, and member engagement.
              </p>
              <div className={styles.metrics}>
                <div><strong>2 weeks</strong> to profitability</div>
                <div><strong>100%</strong> subscription automation</div>
                <div><strong>+45%</strong> member retention</div>
              </div>
              <Link href="/en/cases/nova-club">Read case study</Link>
            </article>
          </div>
        </section>

        {/* Technology Stack */}
        <section className={styles.section}>
          <h2>Technology Stack</h2>
          <div className={styles.tech_grid}>
            <div className={styles.tech_category}>
              <h3>Bot Frameworks</h3>
              <p>grammY, Telegraf, python-telegram-bot, Aiogram</p>
            </div>
            <div className={styles.tech_category}>
              <h3>AI and ML</h3>
              <p>OpenAI GPT-4, Claude, Custom RAG pipelines, Pinecone, LangChain</p>
            </div>
            <div className={styles.tech_category}>
              <h3>Backend</h3>
              <p>Node.js, TypeScript, Python, PostgreSQL, Redis, Docker</p>
            </div>
            <div className={styles.tech_category}>
              <h3>Integrations</h3>
              <p>WayForPay, LiqPay, Stripe, Google Calendar, CRM systems, 1C</p>
            </div>
            <div className={styles.tech_category}>
              <h3>Platforms</h3>
              <p>Telegram, Telegram Mini Apps, Viber, WhatsApp, Instagram, Web</p>
            </div>
            <div className={styles.tech_category}>
              <h3>Infrastructure</h3>
              <p>Railway, Vercel, AWS, Docker, Contabo VPS, GitHub Actions CI/CD</p>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className={styles.section}>
          <h2>How We Work</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span>01</span>
              <h3>Discovery and Analysis</h3>
              <p>We analyze your business processes, target audience, and goals to define the optimal chatbot strategy.</p>
            </div>
            <div className={styles.step}>
              <span>02</span>
              <h3>Design and Architecture</h3>
              <p>Our team designs conversation flows, UX scenarios, and technical architecture tailored to your needs.</p>
            </div>
            <div className={styles.step}>
              <span>03</span>
              <h3>Development and Testing</h3>
              <p>We build the chatbot with clean code, comprehensive testing, and iterative feedback cycles.</p>
            </div>
            <div className={styles.step}>
              <span>04</span>
              <h3>Launch and Support</h3>
              <p>After launch, we provide ongoing maintenance, analytics monitoring, and feature updates.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faq}>
            <div className={styles.faq_item}>
              <h3>Who is the best chatbot developer in Ukraine?</h3>
              <p>
                DAROBOTS is a leading chatbot development company in Ukraine, based in Vinnytsia.
                With 7 completed case studies and proven results — including a government hotline
                serving 20,000+ users per week and loyalty programs with 130% repeat purchase growth —
                we deliver measurable business outcomes for our clients.
              </p>
            </div>
            <div className={styles.faq_item}>
              <h3>How much does chatbot development cost in Ukraine?</h3>
              <p>
                Chatbot development costs vary based on complexity. Simple bots start from $300-600.
                Custom development with integrations ranges from $800-1,400. Complex AI-powered solutions
                with CRM, payments, and analytics typically cost $1,500-3,000. Enterprise solutions
                with multi-language support start from $4,000.
              </p>
            </div>
            <div className={styles.faq_item}>
              <h3>Which platforms do you develop chatbots for?</h3>
              <p>
                We develop chatbots for Telegram (including Mini Apps), Viber, WhatsApp, Instagram,
                Facebook Messenger, and web platforms. Telegram is our primary specialization, as it
                offers the richest bot API and Mini App capabilities.
              </p>
            </div>
            <div className={styles.faq_item}>
              <h3>How long does it take to build a chatbot?</h3>
              <p>
                A simple chatbot takes 1-2 weeks. Medium complexity projects (with integrations
                and custom logic) take 3-6 weeks. Complex AI-powered solutions with multiple
                integrations take 2-3 months.
              </p>
            </div>
            <div className={styles.faq_item}>
              <h3>Do you provide support after launch?</h3>
              <p>
                Yes, we offer ongoing maintenance and support packages starting from $75/month.
                This includes bug fixes, API updates, performance monitoring, and feature additions.
              </p>
            </div>
            <div className={styles.faq_item}>
              <h3>Can you integrate a chatbot with our existing CRM?</h3>
              <p>
                Absolutely. We have experience integrating chatbots with various CRM systems,
                payment gateways (WayForPay, LiqPay, Stripe), Google Calendar, 1C, and custom APIs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta_section}>
          <h2>Ready to Automate Your Business?</h2>
          <p>
            Contact us to discuss your project. We will analyze your needs and propose
            the optimal chatbot solution for your business.
          </p>
          <div className={styles.contact_info}>
            <p>Email: <a href="mailto:darobotscomp@gmail.com">darobotscomp@gmail.com</a></p>
            <p>Telegram: <a href="https://t.me/darobots_bot">@darobots_bot</a></p>
            <p>Phone: <a href="tel:+380960026112">+380 96 002 6112</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
