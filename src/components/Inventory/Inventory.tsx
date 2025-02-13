import { useEffect, useState } from "react";
import Table from "../core/Table";
import styles from "./Inventory.module.less";
import Widgets from "./components/Widgets";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventoryData } from "../../redux/actions/inventory";
import { RootState } from "../../redux/store";
import { USER } from "../../redux/slices/userSlice";
import {
  Product,
  deleteProduct,
  editProduct,
  updateVisibliity,
} from "../../redux/slices/inventorySlice";
import Modal from "../core/Modal/Modal";
import Edit from "./components/Edit";
import { EditState } from "../types/commonTypes";

const Inventory = () => {
  const dispatch = useDispatch();
  const { products, productLoading } =
    useSelector((state: RootState) => state.inventory) || {};
  const { userType } = useSelector((state: RootState) => state.user) || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [values, setValues] = useState<EditState>({
    category: "",
    price: "",
    quantity: 0,
    value: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (productLoading) {
      dispatch(fetchInventoryData());
    }
  }, [productLoading]);

  const columns: { key: keyof Product | "actions"; label: string }[] = [
    { key: "name", label: "Name" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price" },
    { key: "quantity", label: "Quantity" },
    { key: "value", label: "Value" },
    { key: "actions", label: "Actions" },
  ];

  const handleEdit = (row: Product, index: number) => {
    setSelectedProduct(index);
    setValues({
      category: row.category,
      price: row.price,
      quantity: row.quantity,
      value: row.value,
    });
    setIsModalOpen(true);
  };

  const handleView = (row: Product, index: number) => {
    dispatch(updateVisibliity(index));
  };

  const handleDelete = (row: Product, index: number) => {
    dispatch(deleteProduct(index));
  };

  const onConfirm = () => {
    setIsModalOpen(false);
    dispatch(
      editProduct({
        ...values,
        index: selectedProduct,
      })
    );
  }

  const finalProducts =
    userType === USER
      ? products.filter((product) => !product.isHidden)
      : products;

  return (
    <div className={styles["inventoryContainer"]}>
      <h1>Inventory stats</h1>
      <Widgets />
      <Table
        columns={columns}
        data={finalProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        loading={productLoading}
        actionsDisabled={userType === USER}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit product"
        onConfirm={onConfirm}
      >
        <Edit values={values} onChange={onChange} />
      </Modal>
    </div>
  );
};

export default Inventory;
