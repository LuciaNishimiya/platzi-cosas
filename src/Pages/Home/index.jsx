import Card from "../../Components/Card"
import Loading from "../../Components/Loading"
import { products } from "../../Services/products"
function Home() {
  const { data, isLoading, error } = products()
  return (
    <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg px-2'>

      {
        data.map(item =>
          (<Card key={item?.id} id={item?.id} price={item?.price} title={item?.title} category={item?.category} image={item?.image} description={item?.description}></Card>))
      }
      <Loading loading={isLoading} error={error}></Loading>
    </div>
  )
}

export default Home 