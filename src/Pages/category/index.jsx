import Card from "../../Components/Card"
import { useParams } from "react-router-dom";

import Loading from "../../Components/Loading"
import { category } from "../../Services/products"
function Category() {
  const params = useParams();

  const { data, isLoading, error } = category(params.CategoryName)
  return (
    <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg px-2'>

      {
        data.map(item =>
          (<Card data key={item?.id} id={item?.id} price={item?.price} title={item?.title} category={item?.category} image={item?.image}></Card>))
      }
      <Loading loading={isLoading} error={error}></Loading>
    </div>
  )
}

export default Category 