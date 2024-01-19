"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useUser} from "@clerk/nextjs";
const Dashboard = () => {
  const router= useRouter();
  const { user } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    age: "",
    gender: "",
    ph_no: "",
  });
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const data = {
          name: formData.name,
          location: formData.location,
          age: formData.age,
          gender: formData.gender,
          ph_no: formData.ph_no,
          email: user.primaryEmailAddress
        };
        console.log(data);
        const response = await fetch(
          "http://localhost:5000/api/v1/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        console.log("frontend");
        
        if (response.ok) {
          router.push('/userdashboard');
          
        } else {
          console.error("Failed to submit the form to the backend");
        }
      }
     catch (error) {
      console.error("Error submitting the form:", error);
    }
  };



  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/info",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email:user.primaryEmailAddress }),
      }
      );
      const data = await response.json();
      if(data=='exists'){
        router.push('/userdashboard');
      }
      
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
      <main className="flex flex-col items-center justify-center p-24 mt-4 ">
        <div className="rounded-lg shadow-custom p-8 w-full md:w-2/3 lg:w-1/2 bg-sky-200">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
              <div className="flex flex-col gap-8 text-blue-600">
                <label>
                  Name<span style={{ color: "red" }}>*</span>:
                </label>
                <label>
                  Location<span style={{ color: "red" }}>*</span>:
                </label>
                <label>
                  Age<span style={{ color: "red" }}>*</span>:
                </label>
                <label>
                  Gender<span style={{ color: "red" }}>*</span>:
                </label>
                <label>Phone_no:</label>
              </div>
              <div className="flex flex-col gap-8">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="input-field bg-sky-100"
                />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="input-field bg-sky-100"
                />
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="input-field bg-sky-100"
                >
                  <option value="" disabled>
                    Select Age Group
                  </option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-45">36-45</option>
                  <option value="46+">46+</option>
                </select>
                <div className="flex">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleInputChange}
                    required
                    className="mr-2"
                  />
                  <label className="mr-4">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleInputChange}
                    required
                    className="mr-2"
                  />
                  <label>Female</label>
                </div>
                <input
                  type="number"
                  name="ph_no"
                  value={formData.ph_no}
                  onChange={handleInputChange}
                  className="input-field bg-sky-100"
                />
              </div>
            </div>
            <div className="mt-4 ml-auto w-full md:w-40">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};



export default Dashboard;
