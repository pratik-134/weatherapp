import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './main.css'
const Tempapp=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("indore");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9d15fbca55ff9e9db8f0212e620c69b6`;
            const response=await fetch(url);
            const resjson=await response.json();
            // console.log(resjson);
            setCity(resjson.main);

            console.log(resjson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className="container">
        <div className="box">
        <h1 className="head">Weather app</h1>
            <div className="inputData">
                <input type="search" className="inputField" onChange={(event)=>{
                    setSearch(event.target.value);          
                }} defaultValue="Indore"/>
            </div>
            {!city?(
                <p className="errorMsg">No data found</p>
            ):(
            <div className="info">
                <h2 className="location">
                {search}
                </h2>
                <h1 className="temp">
                    {city.temp}°Cel
                </h1>
                <h3 className="tempin_max">
                    Min : {city.temp_min}°Cel | Min : {city.temp_max}°Cel 
                </h3>
            </div>
            )}
        </div>
        <div className="wave1"></div>
        <div className="wave1 wave2"></div>
        <div className="wave1 wave3"></div>
        </div>
        </>
    )
}
export default Tempapp;