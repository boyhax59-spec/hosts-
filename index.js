import * as cheerio from 'cheerio'
import axios from 'axios'
import express from 'express'
import cors from 'cors'


let app=express()
let port=3000
app.use(express.json())
app.use(cors())

app.get("/api",async(req,res)=>{

const {q}=req.query
console.log(q)
async function scrap(api,q){
let list=[]
let result=await axios.get(api,{params:{search:q}})

let array=result?.data
let result2


for (let data of array){
     let movies={}
     let  $=cheerio.load(data.content.rendered)

     let links=$("a").toArray()
     let trailer=$("iframe").toArray()

    movies.id=data.id
    movies.title=data.title.rendered
    movies.image=data.meta.fifu_image_url
    movies.about=data.excerpt.rendered

for (let trail of trailer){
  let vid=$(trail).attr("src")
  movies.trailer=vid

 }

for (let link of links){

     let first = $(link).attr("href")

if (first.includes("/generate-link-page?link=https://cineza.store/download")){

     let yes=first.split("link=")[1]

     result2=await axios.get(yes)

     let yy=result2?.data

     let $$=cheerio.load(yy)
     let tt=$$("a").toArray();
     for (let kk of tt){

        let ss=$$(kk).attr("href")
        if(ss.startsWith("https://cineza.store/wp-content/themes/kadence/downlo")){

        movies.link=ss
        list.push(movies)


       }
    }
}}



}
return list
}

let mvlist=await scrap("https://fzmovies.web.za/wp-json/wp/v2/posts",q)
res.json(mvlist)
 
})
app.listen(port)
console.log("server started on port",port)
