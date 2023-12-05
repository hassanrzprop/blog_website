import Navbar from "@/app/(components)/navbar/page";
import Link from "next/link";

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
    const result= await response.json();
    return result as Item[];
}

export default async function blog({ params }: { params: { slug: string } }) {
    const item = await fetchData()
    const result= item.find((it)=>it.title===params.slug)
    return(
        <>
        
          {result ? (
          <div className="blogipage">
            
            <div className="blog-container-single" >
            <Navbar/>
              <div className="blog-text">
              </div>
              <p className="blog-text-single_title"><b>{result.title}</b></p>
              <br />
              <p className="blog-text-single">{result.discription}</p>
            </div>
          </div>  
          ) : (
            <h2>Not Found</h2>
          )}
        </>

    )
}
