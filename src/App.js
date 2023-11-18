import "./App.css";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Main } from "./Main";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <div className="nav-flex-box header-nav">
        <Header />
        <Navigation />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
