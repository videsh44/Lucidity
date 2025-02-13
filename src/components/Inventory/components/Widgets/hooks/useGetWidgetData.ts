import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { getOutOfStock, getTotalCategories, getTotalValue } from "../helper";

const useGetWidgetDatauseGetWidgetData = () => {
  const { products } = useSelector((state: RootState) => state.inventory) || {};

  const totalProduct = products?.length || 0;
  const totalValue = getTotalValue(products) || 0;
  const outOfStock = getOutOfStock(products) || 0;
  const totalCategories = getTotalCategories(products) || 0;

  return { totalProduct, totalValue, outOfStock, totalCategories };
};

export default useGetWidgetDatauseGetWidgetData;
