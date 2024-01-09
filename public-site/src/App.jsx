import "./App.css";
import Card from "./components/card";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <div style={{margin: 0, padding: 0, boxSizing: "border-box", backgroundColor: "#EEF5FF"}}>
        <Header />
        {/* <Carousel /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center", flexWrap: "wrap",
          gap: 20, paddingTop: 48, paddingBottom: 48, paddingLeft: 24, paddingRight: 24}}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
