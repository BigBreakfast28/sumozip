"use client"

import { useState } from "react"

const [open, setOpen] = useState<boolean>(false)

export default function Home() {
  
  return(
    <div id="top">
      <div>
          <div className="container-xl bg-slate-400 p-20">
            <div className="leading-loose text-3xl text-white container" id="graph1">
              Welcome to EVA where we will design your dream from scratch. 
              This is a one stop shop for bring your dreams to life. 
              As an agency we are committed to bringing you the best possible package for the most affordable price.
              Take the first step to designing your website...
            </div>
            Image will go here
          </div>
          <div className="p-40">
           
          </div>
          <div className="bg-slate-400 p-48">
            <h1 className="text-7xl font-bold underline flex justify-center hover:font-extrabold">What is EVA?</h1>
              <div className="text-wrap text-3xl leading-loose text-white">
                  EVA originated from my background in chemistry. EVA is a abbreviation for a polymer typically used in the industrial industry. 
                  Polymers are used in different products for the process of holding materials together. This may be a difficult concept to grap
                  so for comparison think of the process of eggs in baked goods. Polymers serves this same purpose in cementitous products. 
                  Without polymer, concrete would just consist of cement, sand & clay. This binding process ties directly back to the purpose of 
                  this business. Having an online prescence is todays age is essential for success. Every successful company has a website or someway
                  for their audience to reach them through the internet. The sole purpose of EVA is to bring all of your ideas together and bind them 
                  to create a longlasting, successful prescence online. 
                  Creating an online business is the first step to cementing your business. We will simplify complex concepts,
                  create scalable models, and work closely until your business comes to life. We desire to give products that are user friendly!
              </div>
            </div>
            <div  className="bg-white border-solid border-black border-4"> This is a test for the border function.</div>
      </div>
      <div className="">
      </div>
    </div>
  )
}
