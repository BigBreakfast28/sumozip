import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { ScrollArea } from "@/components/ui/scroll-area"


import React from "react"



export default function Home() {
  return(
    <div className="">
      <div className="container text-xl">
        <div className="container-lg text-2xl leading-loose bg-gradient-to-r from-neutral-100 to-teal-400 pr-4 pl-5">
          Welcome to EVA where we will design your dream from scratch. 
          This is a one stop shop for bring your dreams to life. 
          As an agency we are committed to bringing you the best possible package for the most affordable price.
          Take the first step to designing your website...
        </div>
        <ScrollArea className="h-[200px]  rounded-md border p-4">
          <div className="leading-loose from-white to-blue-300 text-wrap">
            Creating an online business is the first step to cementing your business. We will simplify complex concepts,
            create scalable models, and work closely until your business comes to life. We desire to give products that are user friendly!
          </div>
          <h1 className="text-7xl font-extrabold underline">What is EVA?</h1>
            <div className="text-wrap text-2xl leading-loose ">
              EVA originated from my background in chemistry. EVA is a abbreviation for a polymer typically used in the industrial industry. 
              Polymers are used in different products for the process of holding materials together. This may be a difficult concept to grap
              so for comparison think of the process of eggs in baked goods. Polymers serves this same purpose in cementitous products. 
              Without polymer, concrete would just consist of cement, sand & clay. This binding process ties directly back to the purpose of 
              this business. Having an online prescence is todays age is essential for success. Every successful company has a website or someway
              for their audience to reach them through the internet. The sole purpose of EVA is to bring all of your ideas together and bind them 
              to create a longlasting, successful prescence online. 
            </div>
        </ScrollArea>

    </div>

  
    <div className="container">
        <Carousel>
        <CarouselContent className="-ml-2">
        <CarouselItem className="pl-4 box-decoration-clone bg-gradient-to-r from-teal-600 to-rose-400 text-white text-6xl">
          Determine what your ideas are!
        </CarouselItem>
        <CarouselItem className="pl-4 box-decoration-clone bg-gradient-to-r from-teal-600 to-rose-400 text-white text-6xl">
          Determine the type of website!
          </CarouselItem>
        <CarouselItem className="pl-4 box-decoration-clone bg-gradient-to-r from-teal-600 to-rose-400 text-white text-6xl">
          Start the design process!
        </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    <div className="">

    </div>

  
    </div>
  )
}