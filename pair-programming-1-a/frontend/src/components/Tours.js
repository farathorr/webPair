import React, { useState, useEffect } from "react";
import Tour from "./Tour";
import Title from "./Title";
import AddTour from "./AddTour";

function Tours() {
  const [toursData, setToursData] = useState([]);
  const apiUrl = "http://localhost:3001/api/tours";
  async function getTours() {
    try {
      const response = await fetch(apiUrl);
      const newJson = await response.json();
      setToursData(newJson);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  }
  useEffect(() => {
    console.log("useEffect called");
    getTours(); // Call the function directly here
    // Note: Since we want this to run only once, we provide an empty dependency array
  }, [toursData]); // <-- Empty dependency array

  const handleDeleteItem = (itemId) => {
    const updatedItems = toursData.filter((item) => item.id !== itemId);
    setToursData(updatedItems);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} handleDelete={handleDeleteItem} />
          ))}
        </div>
      </section>
      <div>
      <AddTour />
      </div>
    </div>
  );
}

export default Tours;
