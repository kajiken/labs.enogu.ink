import Image from "next/image";
import styles from "../styles/avatar.module.css";

export default function GitHubIcon() {
  return (
    <Image
      src="/images/me.jpeg"
      className={styles.avatar}
      width={"64"}
      height={"64"}
      alt="Kensuke KAJIWARA"
    />
  );
}
