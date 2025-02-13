import styles from './WidgetCard.module.less';
import CartSvg from "../../../../assets/svg/Cart.svg";
import Total from "../../../../assets/svg/Total.svg";
import OutStock from "../../../../assets/svg/OutStock.svg";
import Category from "../../../../assets/svg/Category.svg";

type SvgType = "CartSvg" | "Total" | "OutStock" | "Category";

const SvgMap = {
    CartSvg,
    Total,
    OutStock,
    Category
}

interface WidgetCardProps {
    icon: SvgType;
    text: string;
    value: number;
}

const WidgetCard = ({icon, text, value}: WidgetCardProps) => {
  const Svg = SvgMap[icon];
  return (
    <div className={styles["cardContainer"]} >
        <div className={styles["cardContainer__content"]} >
            <div><Svg /></div>
            <div>
                <h3 className={styles["cardContainer__content--title"]} >{text}</h3>
                <h2 className={styles["cardContainer__content--value"]} >{value}</h2>
            </div>
        </div>
    </div>
  )
}

export default WidgetCard