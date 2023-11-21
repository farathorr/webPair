import Tour from "./Tour";
import Title from "./Title";
import { useState,useEffect } from "react";
import AddTour from "./AddTour";

function Tours() {
  const [toursData, setToursData] = useState([]);
  const apiUrl="http://localhost:3001/api/tours";
  const UseEffectTours = () => {
  async function getTours() {
    const response = await fetch(apiUrl);
    const newJson = await response.json();
    if (JSON.stringify(newJson) !== JSON.stringify(toursData)) {
      setToursData(newJson);
    }
    setToursData(newJson);
  }
  useEffect(() => {
    console.log('useEffect called');
    getTours();
  });

  return (<div>
    <section className="section" id="tours">
      <Title title="featured" span="tours" />
      <div className="section-center featured-center">
        {toursData.map((tour) => (
          <Tour key={tour.id} {...tour} handleDelete={handleDeleteItem} />
        ))}
      </div>
    </section>
  </div>);

        }
  const handleDeleteItem = (itemId) => {
    console.log(itemId);
    const updatedItems = toursData.filter((item) => item.id !== itemId);
    setToursData(updatedItems);
  };

  return (
    <>
    <UseEffectTours/>
    <AddTour/>
    </>
  );
}

export default Tours;