import Benefits from '@/components/Benefits/Benefits';
import BlogSection from '@/components/Blog/BlogSection';
import CompanyWorkers from '@/components/CompanyWorkers/CompanyWorkers';
import DiscusionCard from '@/components/DiscusionCard/DiscusionCard';
import ExpertsBlock from '@/components/ExpertsBlock/ExpertsBlock';
import Footer from '@/components/Footer/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Integrations from '@/components/Integrations/Integrations';
import PartnersBlock from '@/components/PartnersBlock/PartnersBlock';
import Questions from '@/components/Questions/Questions';
import WelcomeBlock from '@/components/WelcomeBlock/WelcomeBlock';
import WorkCases from '@/components/WorkCases/WorkCases';
import WorkStages from '@/components/WorkStages/WorkStages';

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <WelcomeBlock />
      <PartnersBlock />
      <Benefits />
      <WorkCases />
      <ExpertsBlock />
      <WorkStages />
      <Integrations />
      <CompanyWorkers />
      <BlogSection />
      <Questions />
      <DiscusionCard />
      <Footer />
    </>
  );
}
