import { defineType } from "sanity";

export default defineType({
    name:"promotion",
    title:"Promotions",
    type:"document",
    fields:[
        {
          name:"name" ,
          title:"Name",
          type:"string",
          validation:(rule) =>rule.min(3).max(50).required()
        },
        {
            name:"description" ,
            title:"Short description",
            type:"text",
            validation:(rule) =>rule.min(3).max(50).required()
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
          
    ]
})