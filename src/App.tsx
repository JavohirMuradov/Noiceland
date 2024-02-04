import { Header } from "./Header";
import { Footer } from "./Footer";
import { Section1 } from "./Main/Section1";
import { Section2 } from "./Main/Section2";
import { Section3 } from "./Main/Section3";
import { Section4 } from "./Main/Section4";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />
    </>
  )
}

export default App