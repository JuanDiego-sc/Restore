import { Typography } from "@mui/material";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogAPI";

export default function Catalog() {
  const {data, isLoading} = useFetchProductsQuery();

  if(isLoading || !data) return <Typography>Loading...</Typography>
  return (
    <>
      <ProductList products={data} />
    </>
  );
}
