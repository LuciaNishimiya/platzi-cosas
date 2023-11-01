import Card from "../../Components/Card"
import { products } from "../../Services/products"
function Home() {
  const { data, isLoading, error } = products()
  return (
    <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg px-2'>

      {
        data.map(item =>
          (<Card key={item?.id} price={item?.price} title={item?.title} category={item?.category} image={item?.image}></Card>))
      }
    </div>
  )
}

export default Home 