import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function Home() {
  return(
  <div className="container mx-auto">
    <div>
      Welcome to Sumzip where we will design your dream from scratch. 
      This is a one stop shop for bring your dreams to life. 
      As an agency we are committed to bringing you the best possible package for the most affordable price.
    </div>
    <Carousel>
  <CarouselContent>
    <CarouselItem>Bacon</CarouselItem>
    <CarouselItem>Eggs</CarouselItem>
    <CarouselItem>Ham</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  </div>
  )
}