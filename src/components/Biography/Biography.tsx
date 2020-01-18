import * as React from "react";
import classNames from "classnames";
import { Card, CardDirection } from "~/components/Card";
import styles from "./Biography.scss";

const BiographyHelper: React.FC = () => (
  <React.Fragment>
    <div className={styles.title}>かるめりちゃんとは？</div>
    <div className={styles.text}>
      かるめりちゃんは明るく好奇心旺盛な女の子で名前は愛々璃（あめり）ちゃん！誕生日は
      3/27 だよ！
    </div>
  </React.Fragment>
);

export const Biography: React.FC = () => (
  <React.Fragment>
    <Card
      direction={CardDirection.ROW}
      className={classNames(styles.container, styles.pc)}
      thumbnail={[
        {
          type: "webp",
          url: "images/biography.jpg.webp"
        },
        {
          url: "images/biography.jpg"
        }
      ]}
    >
      <BiographyHelper />
    </Card>
    <Card
      className={classNames(styles.container, styles.sp)}
      thumbnail={[
        {
          type: "webp",
          url: "images/biography.jpg.webp"
        },
        {
          url: "images/biography.jpg"
        }
      ]}
    >
      <BiographyHelper />
    </Card>
  </React.Fragment>
);