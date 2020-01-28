import * as React from "react";
import { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { Card } from "~/components/Card";
import { Logo, LogoService } from "~/components/Logo";
import { getLine, LineStickerItem } from "~/helpers/api";
import styles from "./LineStore.scss";

const useIntersectionObserver = (
  root: Element
): [React.RefObject<Element>, number] => {
  const ref = useRef<Element>(null);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const observer = new IntersectionObserver(
      changes =>
        changes.forEach(({ intersectionRatio }) => setRatio(intersectionRatio)),
      { root, threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, ratio];
};

const LineSticker: React.FC<{
  thumbnailImageUrl: string;
  id: number;
  root: Element;
}> = ({ id, thumbnailImageUrl, root }) => {
  const [ref, ratio] = useIntersectionObserver(root) as [
    React.RefObject<HTMLAnchorElement>,
    number
  ];

  return (
    <a
      href={`https://store.line.me/stickershop/product/${id}/ja`}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
    >
      <Card
        className={classNames(styles.sticker)}
        style={{
          opacity: ratio
        }}
        thumbnail={[
          {
            url: thumbnailImageUrl
          }
        ]}
      />
    </a>
  );
};

export const LineStore: React.FC = () => {
  const [data, setData] = useState<LineStickerItem[] | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const data = await getLine();

      if (!unmounted) {
        setData(data);
      }
    };

    getData();

    return () => {
      unmounted = true;
    };
  }, []);

  const element = ref.current;

  return (
    <React.Fragment>
      <Logo service={LogoService.LINE_STORE} />
      <div ref={ref} className={styles.container}>
        <div className={classNames(styles.horizontal)}>
          {element &&
            data &&
            data.map(({ id, thumbnailImageUrl }, index) => (
              <LineSticker
                root={element}
                key={index}
                id={id}
                thumbnailImageUrl={thumbnailImageUrl}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};