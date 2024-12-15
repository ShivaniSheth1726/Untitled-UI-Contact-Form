import React from "react";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Form from "@/components/Form";

const Home = () => {
  return (
    <div className="p-4 w-full">
      <Header />

      <div className="grid grid-cols-8">
        <div className="bg-green-300 col-span-2 hidden md:block">
          <Aside />
        </div>
        <div className="md:bg-lime-400 md:col-span-6 col-span-full">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;