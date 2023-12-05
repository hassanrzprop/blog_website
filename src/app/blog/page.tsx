import Navbar from "../(components)/navbar/page"
import Image from "next/image"
import Link from "next/link"
import { it } from "node:test"
import { title } from "process"
// import blog from "./[slug]/page"
interface Item{
    id:number,
    title:string,
    Briefing:string,
    imageInBlogRow:string,
    discription:string
}
async function fetchData(): Promise<Item[]> {
    const response = await fetch("http://localhost:3000/api", {
      next: {
        revalidate: 30,
      },
    });
    const result = await response.json();
    return result as Item[];
  }
  
export  default async function Bloog(){
    const items=  await fetchData()
    return(
      
      <div className="blogPage">
        
        <div className="blogSection">
        <Navbar/>
        
        <div className="centered-content">
  <h1 className="text1"><b>Scroll Down</b></h1>
  <h3 className="text2">To view our latest blogs</h3>
</div>

          </div>
          <div>
          <div className=".container">
            <div className="">
            {items.map((item,index) => (
              <div className="blogTitle" key={index}>
                <div className="material">
               <h1> {item.title}</h1><br/>
               </div>
                <Image className="bor" src={item.imageInBlogRow} alt="blogi" width={'600'} height={'400'} /><br/>
                <p className="brief">{item.Briefing}</p>
                <Link className="read" href={`/blog/${item.title}`}>
                  <button className="button"><b>Read More</b></button>
                
              </Link>
              </div>

              
            
        ))}
            </div>
          </div>
        </div>
      </div>
    )
}
