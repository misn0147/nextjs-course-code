import Link from "next/Link";
import styles from "./button.module.css";

export default function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={styles.btn}>{props.children}</a>
            </Link>
        );
    }

    return (
        <button className={styles.btn} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
