import './App.scss';
import { Header, CTA, ShareHomeSection, NewsletterSection, SharedPaymentSection, ComingSoonSection, Footer, FeatureSection } from './containers'


function App() {
  return (
    <div className="Wrapper">
        <Header />
        <CTA />
        <ShareHomeSection />
        <NewsletterSection />
        <SharedPaymentSection />
        <FeatureSection />
        <ComingSoonSection />
        <Footer />

    </div>
  );
}

export default App;
