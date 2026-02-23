import React, { useMemo, useState } from "react";
import { Card, Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { LayoutGroup, motion } from "framer-motion";
import styles from "./TechScroller.module.scss";
import defaultHeaderIcon from "../../assets/icons/technologies (1).svg";

export type TechItem = {
  id: string;
  name: string;
  logoSrc: string;
  sizeHint?: "sm" | "md" | "lg" | "xl";
};

type Props = {
  title?: string;
  items: TechItem[];
  showNames?: boolean;
  initialIndex?: number;
  headerIconSrc?: string;
  showArrows?: boolean;
  centerLogo?: boolean;
  solo?: boolean;
  bigLast?: boolean;
};

const TechScroller: React.FC<Props> = ({
  title = "Technologies",
  items,
  showNames = true,
  initialIndex = 0,
  headerIconSrc,
  showArrows = true,
  centerLogo = false,
  solo = false,
  bigLast = false,
}) => {
  if (solo) {
    const item = items[0] ?? { id: "logo", name: "", logoSrc: "" };
    const soloSizeClass =
      item.sizeHint === "xl"
        ? styles.logoXL
        : item.sizeHint === "lg"
        ? styles.logoLG
        : item.sizeHint === "sm"
        ? styles.logoSM
        : styles.logoMD;

    return (
      <LayoutGroup id={`tech-card-${title}-solo`}>
        <div className={`${styles.wrapSingle} ${styles.isSolo}`}>
          <Card bordered className={styles.card} bodyStyle={{ padding: 24 }}>
            <div className={styles.headerRow}>
              <Space size={8} align="center" className={styles.headerCenter}>
                <img
                  src={headerIconSrc ?? defaultHeaderIcon}
                  alt=""
                  className={styles.techIconImg}
                  loading="lazy"
                  width={16}
                  height={16}
                />
                <span className={styles.titleText}>{title}</span>
              </Space>
            </div>

            <div className={styles.soloCenter}>
              <motion.div
                layout
                layoutId={`solo-logo-${title}`}
                className={`${styles.soloHolder} ${soloSizeClass}`}
                transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
              >
                <img
                  className={`${styles.logo} ${soloSizeClass}`}
                  src={item.logoSrc}
                  alt={item.name || title}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          </Card>
        </div>
      </LayoutGroup>
    );
  }

  const [index, setIndex] = useState(initialIndex);
  const len = Math.max(items.length, 1);
  const mod = (n: number, m: number) => ((n % m) + m) % m;
  const item = useMemo(() => items[mod(index, len)], [index, len, items]);

  const hasMultiple = len > 1;
  const shouldShowArrows = showArrows && hasMultiple && !centerLogo;

  const isLast = mod(index, len) === len - 1;
  const lastBoost = bigLast && isLast;

  const hintClass =
    item.sizeHint === "xl"
      ? styles.logoXL
      : item.sizeHint === "lg"
      ? styles.logoLG
      : item.sizeHint === "sm"
      ? styles.logoSM
      : styles.logoMD;

  const rootCls = `${styles.wrapSingle} ${centerLogo ? styles.isCentered : ""}`;

  return (
    <LayoutGroup id={`tech-card-${title}`}>
      <div className={rootCls}>
        <Card bordered className={styles.card} bodyStyle={{ padding: 24 }}>
          <div className={styles.cardInner}>
            <div className={styles.headerRow}>
              <Space size={8} align="center" className={styles.headerCenter}>
                <img
                  src={headerIconSrc ?? defaultHeaderIcon}
                  alt=""
                  className={styles.techIconImg}
                  loading="lazy"
                  width={16}
                  height={16}
                />
                <span className={styles.titleText}>{title}</span>
              </Space>
            </div>

            <div
              className={styles.logoRow}
              style={{ gridTemplateColumns: shouldShowArrows ? "36px 1fr 36px" : "1fr" }}
            >
              {shouldShowArrows && (
                <Button
                  type="text"
                  className={`${styles.chevBtn} ${styles.chevLeft}`}
                  icon={<LeftOutlined />}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setIndex((i) => i - 1)}
                  aria-label="Previous"
                />
              )}

              <div className={styles.logoArea}>
                <motion.div
                  layout
                  layoutId={`logo-${title}`}
                  className={`${styles.logoHolder} ${hintClass} ${lastBoost ? styles.logoBig : ""}`}
                  transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                >
                  <motion.img
                    className={`${styles.logo} ${hintClass} ${lastBoost ? styles.logoBig : ""}`}
                    src={item.logoSrc}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    initial={false}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </motion.div>

                {showNames && !centerLogo && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className={styles.caption}
                  >
                    {item.name}
                  </motion.div>
                )}
              </div>

              {shouldShowArrows && (
                <Button
                  type="text"
                  className={`${styles.chevBtn} ${styles.chevRight}`}
                  icon={<RightOutlined />}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setIndex((i) => i + 1)}
                  aria-label="Next"
                />
              )}
            </div>
          </div>
        </Card>
      </div>
    </LayoutGroup>
  );
};

export default React.memo(TechScroller);
