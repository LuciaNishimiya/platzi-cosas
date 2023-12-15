import { useContext } from "react";
import Card from "../../Components/Card"
import Loading from "../../Components/Loading"
import { SearchProductContext } from "../../Context/search";
import { ProductsContext } from "../../Context/Products";

function Home() {
  const { Search, searchState, filteredProducts } = useContext(SearchProductContext);
  const { Products } = useContext(ProductsContext);
  const RenderView = () => {
    function itemsToRender() {
      if (searchState === '') {
        return Products.data
      } else {
        return filteredProducts(Products.data)
      }
    }
    if (filteredProducts(Products.data).length > 0) {
      return itemsToRender().map(item => (<Card key={item?.id} id={item?.id} price={item?.price} title={item?.title} category={item?.category} image={item?.image} description={item?.description}></Card>))
    } else {
      if (!Products.isLoading) {
        return <p>There are no results for your search</p>
      }

    }

  };

  return (
    <><input
      type="text"
      placeholder='Search a product'
      className='rounded-lg border border-black w-80 p-1 mb-2 text-black'
      onChange={(event) => { Search(event) }} />
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg px-2'>
        <RenderView />
        <Loading loading={Products.isLoading} error={Products.error}></Loading>
      </div></>
  )
}

export default Home 