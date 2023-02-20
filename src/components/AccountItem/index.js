import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/db3a2f35dc52de6816ee785c92f4a0be~c5_300x300.webp?x-expires=1677096000&x-signature=Kln2U6zm3bDD1ZcBrKgj6mLTd5Q%3D"
        alt="asss"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyeenx Van A</span>
          <FontAwesomeIcon className={cx("checkicon")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>Nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
