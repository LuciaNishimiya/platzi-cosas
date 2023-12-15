import Card from "../../Components/Card";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { ProductsByCategoryContext } from "../../Context/ProductsByCategory";
import { useContext } from "react";
import { SearchProductContext } from "../../Context/search";

function Category() {
  const params = useParams();
  const { Products, getCategory } = useContext(ProductsByCategoryContext);
  getCategory(params.CategoryName);
  const { Search, searchState, filteredProducts } = useContext(SearchProductContext);
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
      onChange={(event) => { Search(event); }} /><div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg px-2'>
        <RenderView />
        <Loading loading={Products.isLoading} error={Products.error}></Loading>
      </div></>
  );
}

export default Category;
