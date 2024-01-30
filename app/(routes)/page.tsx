import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import brainstorm from "@/public/brainstorm.jpg"
import Image from "next/image"
import React from "react"



export default function Home() {
  return(
    <div className="container">
      <div className="container text-2xl leading-loose">
        Welcome to Sumzip where we will design your dream from scratch. 
        This is a one stop shop for bring your dreams to life. 
        As an agency we are committed to bringing you the best possible package for the most affordable price.
        What are the first steps to designing your website?
      </div>
      
      <Carousel>
    <CarouselContent className="-ml-2">
      <CarouselItem className="pl-4 box-decoration-clone bg-gradient-to-r from-orange-600 to-amber-400 text-white text-9xl">
        Determine what your ideas are!
      </CarouselItem>
      <CarouselItem className="pl-4 box-decoration-clone bg-gradient-to-r from-orange-600 to-amber-400 text-white text-9xl">
        Determine the type of website!
        </CarouselItem>
      <CarouselItem className="pl-4 box-decoration-clone bg-gradient-to-r from-orange-600 to-amber-400 text-white text-9xl">
        Start the design process!
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>

  <div>
    Not only do we help design your desired website but we can help will help you create a plan for your social media page!
    We are committed to helping you achieve your goals!
  </div>

    </div>
  )
}