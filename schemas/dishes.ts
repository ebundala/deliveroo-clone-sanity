import { defineType } from "sanity";

export default defineType({
    name:"dishes",
    title:"Dishes",
    type:"document",
    fields:[
        {
          name:"name" ,
          title:"Dish name",
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
            name:"price" ,
            title:"Price",
            type:"number",
            validation:(rule) =>rule.min(0).required()
          },
        {
            name:"restaurants" ,
            type:"array",
            title:"Restaurants",
            of:[{
                type:"reference",
                name:"Restaurant",
                 to:[{type:"restaurant"}]}]
            
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