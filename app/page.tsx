// "use client"
import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import Link from "next/link"
import Trial from "@/components/Trial";
import CategoryList from "@/components/CategoryList";
// import { useState } from "react";

export default function Home() {

  return (
    <div>

      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-64">
        <h1 className="text-2xl"> Featured Product </h1>
        <ProductList />
        </div>
        
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-64 mb-12"> Categories </h1>
        <CategoryList />
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-64">
        <h1 className="text-2xl"> New Product </h1>
        <ProductList />
      </div>

    </div>
    
  );
}
