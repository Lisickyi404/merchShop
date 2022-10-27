
import MakingHeader from "../MakingPage/MakingHeader"
import { useParams } from "react-router-dom"
import { categories } from "../MakingPage/categories"
export default function CategoryPage(){

    const  params = useParams()
    const prodId = params.id

    let category = categories.find(el=>el.id = params.id)
    
    return(
        <div className="CategoryPage" >
            <MakingHeader
            title = {category.title}
            img = {category.img}
            />
        </div>

    )
}