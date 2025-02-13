import WidgetCard from "../WidgetCard";
import styles from "./Widgets.module.less";
import useGetWidgetDatauseGetWidgetData from "./hooks/useGetWidgetData";

const Widgets = () => {
  const { totalProduct, totalValue, outOfStock, totalCategories } =
    useGetWidgetDatauseGetWidgetData();

  return (
    <div className={styles["widgetsContainer"]}>
      <WidgetCard icon="CartSvg" text="Total product" value={totalProduct} />
      <WidgetCard icon="Total" text="Total store value" value={totalValue} />
      <WidgetCard icon="OutStock" text="Out of stocks" value={outOfStock} />
      <WidgetCard
        icon="Category"
        text="No of Category"
        value={totalCategories}
      />
    </div>
  );
};

export default Widgets;
