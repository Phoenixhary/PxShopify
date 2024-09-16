 // "use client"
import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import Link from "next/link"
import Trial from "@/components/Trial";
import CategoryList from "@/components/CategoryList";
import { WixClientContext } from "@/context/wixContext";
import { Suspense } from "react";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
// import { useState } from "react";

const Home = async () => {

//   const wixClient = useWixClient()
// 
//   useEffect(() => {
// 
//     
 //    const getProducts = async () => {
 //      const res = await wixClient.products.queryProducts().find();
// 
 //      console.log(res)
  //   };
  //     getProducts();
//   }, [wixClient]);

// const wixClient = await wixClientServer();

// const res = await wixClient.products.queryProducts().find();
// console.log(res);

  return (
    <div>

      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-64">
        <h1 className="text-2xl"> Featured Product </h1>
        <Suspense fallback={'loading'}>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} 
        limit={4} 
        />
      </Suspense>
        </div>
        
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-64 mb-12"> Categories </h1>
        <Suspense fallback={'loading'}>
        <CategoryList />
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-64">
        <h1 className="text-2xl"> New Product </h1>
        <Suspense fallback={'loading'}>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
        limit={4}
        />
        </Suspense>
      </div>

    </div>
    
  );

};

export default Home;
