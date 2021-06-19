import { PropsWithChildren } from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/header.module.css";

interface Props {
  hideNavigation?: boolean;
}

export const Header: React.FC<PropsWithChildren<Props>> = ({
  hideNavigation = false,
}) => (
  <header className={styles.header}>
    <div className={styles.colorBoxListWrapper}>
      <div className={styles.colorboxBlue}></div>
      <div className={styles.colorboxRed}></div>
      <div className={styles.colorboxYellow}></div>
      <div className={styles.colorboxLightBlue}></div>
      <div className={styles.colorboxGreen}></div>
    </div>
    <div className={styles.colorBoxBorderWrapper}>
      <div className={styles.colorboxCyan}></div>
    </div>
    {hideNavigation && <Navigation />}
  </header>
);

export default Header;
