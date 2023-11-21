
import { useState,useEffect } from "react";

const AddTour=()=>{
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [info, setInfo] = useState("");
    const [location, setLocation] = useState("");
    const [duration, setDuration] = useState("");
    const [cost, setCost] = useState("");
    const apiUrl="http://localhost:3001/api/tours";
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const tour={
            image,
            date,
            title,
            info,
            location,
            duration,
            cost
        };
        const response=await fetch(apiUrl,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "role":"admin"
            },
            body:JSON.stringify(tour)
        });}

    return (
        <div>
            <h1>Add Tour</h1>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <label for="image">Image:</label>
            <input value={image} onChange={(e)=>{setImage(e.target.value)}} type="text" placeholder="Enter image url"/>
            <label for="date">Date:</label>
            <input value={date} onChange={(e)=>{setDate(e.target.value)}} type="text" placeholder="Enter date"/>
            <label for="title">Title:</label>
            <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Enter title"/>
            <label for="info">Info:</label>
            <input value={info} onChange={(e)=>{setInfo(e.target.value)}} type="text" placeholder="Enter info"/>
            <label for="location">Location:</label>
            <input value={location} onChange={(e)=>{setLocation(e.target.value)}} type="text" placeholder="Enter location"/>
            <label for="duration">Duration:</label>
            <input value={duration} onChange={(e)=>{setDuration(e.target.value)}} type="text" placeholder="Enter duration"/>
            <label for="cost">Cost:</label>
            <input value={cost} onChange={(e)=>{setCost(e.target.value)}} type="text" placeholder="Enter cost"/>
            <button type="submit">Submit</button>
            </form>
        </div>);

}
export default AddTour;