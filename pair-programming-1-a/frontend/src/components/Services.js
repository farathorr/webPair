import { services } from "../data";
import Service from "./Service";
import Title from "./Title";
import { useState,useEffect } from "react";



  
    const UseEffectService = () => {
      const apiUrl="http://localhost:3001/api/services";
      const [servicesData, setServicesData] = useState(services);

      async function getServices() {
        const response = await fetch(apiUrl);
        const json = await response.json();
        console.log(json);
        setServicesData(json);
      }


      useEffect(() => {
        console.log('useEffect called');
        getServices();
      },[]);
    
      return (
        <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
      );
    };
  
export default UseEffectService;
