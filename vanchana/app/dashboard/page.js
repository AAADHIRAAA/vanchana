"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";


const Dashboard = () => {
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/login"
      );
      const data = await response.json();

      
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  
  }, []);

  

  return (
    <>
 
     
    </>
  );
};

export default Dashboard;
