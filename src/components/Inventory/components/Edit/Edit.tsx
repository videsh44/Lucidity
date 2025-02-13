import Input from "../../../core/Input";
import styles from "./Edit.module.less";
import { Product } from "../../../../redux/slices/inventorySlice";
import { EditState } from "../../../types/commonTypes";

interface EditProps {
    values: EditState;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Edit: React.FC<EditProps> = ({ values, onChange }) => {

  return (
    <div className={styles["editContainer"]}>
      <Input
        label="Category"
        id="category"
        name="category"
        type="text"
        value={values["category"]}
        onChange={onChange}
        placeholder="Type here..."
      />
      <Input
        label="Price"
        id="price"
        name="price"
        type="text"
        value={values["price"]}
        onChange={onChange}
        placeholder="Type here..."
      />
      <Input
        label="Quantity"
        id="quantity"
        name="quantity"
        type="text"
        value={values["quantity"]}
        onChange={onChange}
        placeholder="Type here..."
      />
      <Input
        label="Value"
        id="value"
        name="value"
        type="text"
        value={values["value"]}
        onChange={onChange}
        placeholder="Type here..."
      />
    </div>
  );
};

export default Edit;
