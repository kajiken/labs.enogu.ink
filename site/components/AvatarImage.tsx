import Image from "next/image";
import styles from "../styles/avatar.module.css";

export default function GitHubIcon() {
  return (
    <Image
      src="/images/me.jpeg"
      className={styles.avatar}
      width={"64"}
      height={"64"}
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmHGmHgAD6QHldFz/TQAAAABJRU5ErkJggg=="
      placeholder="blur"
      alt="Kensuke KAJIWARA"
    />
  );
}
