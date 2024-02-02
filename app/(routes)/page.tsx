import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Separator } from "@/components/ui/separator"

import React from "react"



export default function Home() {
  return(
    <div>
      <div className="container-lg text-2xl leading-loose bg-gradient-to-r from-neutral-100 to-lime-800">
        <div className="container">
        Welcome to EVA where we will design your dream from scratch. 
        This is a one stop shop for bring your dreams to life. 
        As an agency we are committed to bringing you the best possible package for the most affordable price.
        Take the first step to designing your website...
      </div>
      <div className="container">
        <Carousel>
        <CarouselContent className="-ml-2">
        <CarouselItem className="pl-4 box-decoration-clone bg-gradient-to-r from-rose-600 to-teal-400 text-white text-6xl">
          Determine what your ideas are!
        </CarouselItem>
        <CarouselItem className="pl-4 box-decoration-clone bg-gradient-to-r from-rose-600 to-teal-400 text-white text-6xl">
          Determine the type of website!
          </CarouselItem>
        <CarouselItem className="pl-4 box-decoration-clone bg-gradient-to-r from-rose-600 to-teal-400 text-white text-6xl">
          Start the design process!
        </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>

    <Separator className="bg-black mt-3"/>

    <div className="">

    </div>

  
    </div>
  )
}