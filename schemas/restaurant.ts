import { defineType } from "sanity";

export default defineType({
    name:"restaurant",
    title:"Restaurant",
    type:"document",
    fields:[
        {
          name:"name" ,
          title:"Restaurant name",
          type:"string",
          validation:(rule) =>rule.min(3).max(50).required()
        },
        {
            name:"description" ,
            title:"Short description",
            type:"text",
            validation:(rule) =>rule.min(3).max(150).required()
          },
          {
            name:"address" ,
            title:"Address",
            type:"text",
            validation:(rule) =>rule.min(3).max(150).required()
          },
          {
            name:"rating" ,
            title:"rating",
            type:"number",
            validation:(rule) =>rule.min(0).max(5).required()
          },
        {
            name:"location" ,
            type:"geopoint",
            title:"Location",
            
          },
          {

            name: "image",      
            title: "Image",      
            type: "image",      
            options: {      
              hotspot: true,      
            },}
    ]
})
