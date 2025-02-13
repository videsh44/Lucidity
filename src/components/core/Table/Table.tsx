import styles from "./Table.module.less";
import Edit from "../../../assets/svg/Edit.svg";
import Eye from "../../../assets/svg/Eye.svg";
import Delete from "../../../assets/svg/Delete.svg";
import EyeCrossed from "../../../assets/svg/EyeCrossed.svg";
import RowSkeleton from "./component/RowSkeleton";
import { Product } from "../../../redux/slices/inventorySlice";

interface TableProps {
  columns: { key: keyof Product | "actions"; label: string }[];
  data: Product[];
  onEdit?: (row: Product, index: number) => void;
  onDelete?: (row: Product, index: number) => void;
  onView?: (row: Product, index: number) => void;
  loading?: boolean;
  actionsDisabled: boolean;
}

const Table = ({
  columns,
  data,
  onEdit,
  onDelete,
  onView,
  loading,
  actionsDisabled
}: TableProps) => {
    const disabledStyle = actionsDisabled ? styles["icon__disabled"] : "";
    const getEditStyle = (row: Product) => {
      if (actionsDisabled || row?.isHidden) {
        return styles["icon__disabled"];
      }
      return "";
    }
  return (
    <div className={styles["table-container"]}>
      <table className={styles["custom-table"]}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key as string}>
                <span className={styles["custom-table__headerTag"]}>
                  {col.label}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <>
            <RowSkeleton columns={columns?.length} />
            <RowSkeleton columns={columns?.length} />
            <RowSkeleton columns={columns?.length} />
            <RowSkeleton columns={columns?.length} />
            </>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col) => (
                  <td key={col.key as string}>
                    {col.key === "actions" ? (
                      <>
                        {onEdit && (
                          <span
                            className={styles["icon"]}
                            onClick={actionsDisabled || row?.isHidden ? () => {} : () => onEdit(row, rowIndex)}
                          >
                            <Edit className={getEditStyle(row)} />
                          </span>
                        )}
                        {onView && (
                          <span
                            className={styles["icon"]}
                            onClick={actionsDisabled ? () => {} : () => onView(row, rowIndex)}
                          >
                           {row?.isHidden ? <EyeCrossed className={disabledStyle} /> : <Eye className={disabledStyle} /> }
                          </span>
                        )}
                        {onDelete && (
                          <span
                            className={styles["icon"]}
                            onClick={actionsDisabled ? () => {} : () => onDelete(row, rowIndex)}
                          >
                            <Delete className={disabledStyle} />
                          </span>
                        )}
                      </>
                    ) : (
                      String(row[col.key as keyof Product])
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
