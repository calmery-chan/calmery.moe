import * as React from "react";
import { Biography } from "~/components/Biography";
import { Booth } from "~/containers/Booth";
import { Caption } from "~/components/Caption";
import { Fanbox } from "~/containers/Fanbox";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { LineStickers } from "~/containers/LineStickers";
import { Menu } from "~/containers/Menu";
import styles from "./Top.scss";

export const Top: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <main className={styles.container}>
        <article className={styles.contents}>
          <Caption />
          <Biography />
          <LineStickers />
          <Fanbox />
          <Booth />
          <Footer />
        </article>
      </main>
    </React.Fragment>
  );
};