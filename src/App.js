import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ItemsCategoricalPreview from "./components/ItemsCategoricalPreview/ItemsCategoricalPreview";
import ItemsPreview from "./components/ItemsPreview/ItemsPreview";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  // List of categories maybe fetched from api
  const categories = ["men", "women", "kids"];

  //Object with key as category and value as list of items
  const categoriesItems = {
    men: [
      {
        name: "RACER BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 399,
      },
      {
        name: "VALOUR BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 299,
      },
      {
        name: "JORDAN MARS 270 LONDON",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 499,
      },
      {
        name: "RACER BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 399,
      },
    ],
    women: [
      {
        name: "RACER BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 399,
      },
      {
        name: "VALOUR BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 299,
      },
      {
        name: "JORDAN MARS 270 LONDON",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 499,
      },
      {
        name: "RACER BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 399,
      },
      {
        name: "RACER BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 399,
      },
      {
        name: "VALOUR BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 299,
      },
      {
        name: "JORDAN MARS 270 LONDON",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 499,
      },
    ],
    kids: [
      {
        name: "RACER BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 399,
      },
      {
        name: "VALOUR BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 299,
      },
      {
        name: "JORDAN MARS 270 LONDON",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 499,
      },
      {
        name: "RACER BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 399,
      },
      {
        name: "RACER BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 399,
      },
      {
        name: "VALOUR BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 299,
      },
      {
        name: "JORDAN MARS 270 LONDON",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 499,
      },
      {
        name: "RACER BLUE",
        imageURL:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price: 399,
      },
    ],
  };

  // Function to map categoriesItems to items list for homepage
  const mapCategoriesToItems = () => {
    let shoes = [];
    categories.forEach((category) => {
      shoes = [...shoes, ...categoriesItems[category]];
    });
    return shoes;
  };

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemsPreview items={mapCategoriesToItems()} />}
        />
        <Route path="/store">
          {categories.map((category, idx) => (
            <Route
              key={idx}
              path={`${category}`}
              element={
                <ItemsCategoricalPreview
                  category={category}
                  items={categoriesItems[category]}
                />
              }
            />
          ))}
        </Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
