import {
  Navbar,
  Hero,
  CardGrid,
  About,
  CTA,
  Footer,
} from "../components/index";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CardGrid />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
