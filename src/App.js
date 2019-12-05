import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Omskolen from "./components/Omskolen/omskolen";
import Langekurser from "./components/Langekurser/langekurser";
import Kortekurser from "./components/Kortekurser/kortekurser";
import Studieture from "./components/Studieture/studieture";
import Kursuscenter from "./components/Kursuscenter/kursuscenter";
import priser from "./components/Priser&tilskud/pristilskud";
import Linjefag from "./components/Linjefag/linjefag";
import Fagvis from "./components/Linjefag/Fagvis";
import TilmeldLang from "./components/Tilmelding/TilmeldLang";
import TilmeldKort from "./components/Tilmelding/TilmeldKort";
import Searchbox from "./components/Header/Søg";
import Danskfilmhistorie from "./components/Kortekurser/Kurser/Danskfilmhistorie";
import Jagtnatur from "./components/Kortekurser/Kurser/Jagtnatur";
import Kajak from "./components/Kortekurser/Kurser/Kajak";
import Kor from "./components/Kortekurser/Kurser/Kor";
import Krimi from "./components/Kortekurser/Kurser/Krimi";
import Mad from "./components/Kortekurser/Kurser/Mad";
import Yoga from "./components/Kortekurser/Kurser/Yoga";
import Øl from "./components/Kortekurser/Kurser/Øl";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Omskolen} />
        <Route path="/langekurser" component={Langekurser} />
        <Route path="/kortekurser" component={Kortekurser} />
        <Route path="/Danskfilmhistorie" component={Danskfilmhistorie} />
        <Route path="/Jagtnatur" component={Jagtnatur} />
        <Route path="/Kajak" component={Kajak} />
        <Route path="/Kor" component={Kor} />
        <Route path="/Krimi" component={Krimi} />
        <Route path="/Mad" component={Mad} />
        <Route path="/Yoga" component={Yoga} />
        <Route path="/Øl" component={Øl} />
        <Route path="/studieture" component={Studieture} />
        <Route path="/kursuscenter" component={Kursuscenter} />
        <Route path="/omskolen" component={Omskolen} />
        <Route path="/priser" component={priser} />
        <Route path="/linjefag" component={Linjefag} />
        <Route path="/Fagvis" component={Fagvis} />
        <Route path="/Søg" component={Searchbox} />
        <Route path="/TilmeldLang" component={TilmeldLang} />
        <Route path="/TilmeldKort" component={TilmeldKort} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
