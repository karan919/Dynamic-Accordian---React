import { useState } from "react";
import styles from "./Accordian.module.css";

function Accordian({ data, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accordian}>
      <div
        className={`${styles.flex} ${styles.animate}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span
          className={`${children ? styles.arrow : ""} ${
            children ? (open ? styles.right : styles.down) : ""
          }`}
        ></span>
        {data}
      </div>
      {open && children && <div style={{ marginLeft: "10px" }}>{children}</div>}
    </div>
  );
}

export default Accordian;
