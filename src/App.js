import './App.scss';
import { Header, CTA, ShareHomeSection, NewsletterSection, SharedPaymentSection, ComingSoonSection, Footer } from './containers'


function App() {
  return (
    <div className="Wrapper">
        <Header />
        <CTA />
        <ShareHomeSection />
        <NewsletterSection />
        <SharedPaymentSection />
        <ComingSoonSection />
        <Footer />

    </div>
  );
}

export default App;
