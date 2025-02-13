import styles from "./RowSkeleton.module.less";

interface RowSkeletonProps {
  columns: number;
}

const RowSkeleton = ({ columns }: RowSkeletonProps) => {
  return (
    <tr className={styles["container"]} >
      <td colSpan={columns}>
        <div className={styles["loading-skeleton"]}></div>
      </td>
    </tr>
  );
};

export default RowSkeleton;
