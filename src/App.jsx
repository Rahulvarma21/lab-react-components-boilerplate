import React from "react";
import lake from "../src/image/lake.jpg";
import GallaryFooter from "./components/GallaryFooter";
import Header from "../src/components/header";
import Body from "../src/components/body";
import imageData from "../src/components/data";

function App() {
  return (
    <div>
      <Header />
      <Body imageData={imageData} />
      <GallaryFooter/>
    </div>
  );
}

export default App;
