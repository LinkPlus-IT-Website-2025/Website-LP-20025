import React, { useMemo, useState } from "react";
import { Card, Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { LayoutGroup, motion } from "framer-motion";
import styles from "./TechScroller.module.scss";
import defaultHeaderIcon from "../../assets/icons/technologies (1).svg"; // safe fallback

export type TechItem = { id: string; name: string; logoSrc: string };

type Props = {
  title?: string;
  items: TechItem[];
  showNames?: boolean;
  initialIndex?: number;
  headerIconSrc?: string;   // pass /icons/*.svg
  showArrows?: boolean;
  centerLogo?: boolean;     // legacy “centered” style (kept for compat)
  /** NEW: render a totally isolated, minimal layout (no arrows/caption).
   *  Use this ONLY for the 6th card so other cards aren't affected. */
  solo?: boolean;
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
}) => {
  // ---- SOLO VARIANT (used for the 6th card) ----
  if (solo) {
    // only one image expected, but still guard
    const item = items[0] ?? { id: "logo", name: "", logoSrc: "" };
    return (
      <LayoutGroup id={`tech-card-${title}-solo`}>
        <div className={`${styles.wrapSingle} ${styles.isSolo}`}>
          <Card bordered className={styles.card} bodyStyle={{ padding: 24 }}>
            {/* Header */}
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

            {/* Perfectly centered logo zone */}
            <div className={styles.soloCenter}>
              <motion.div
                layout
                layoutId={`solo-logo-${title}`}
                className={styles.soloHolder}
                transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
              >
                <img
                  className={styles.logo}
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

  // ---- DEFAULT VARIANT (for the other 5 cards) ----
  const [index, setIndex] = useState(initialIndex);
  const len = Math.max(items.length, 1);
  const mod = (n: number, m: number) => ((n % m) + m) % m;
  const item = useMemo(() => items[mod(index, len)], [index, len, items]);
  const hasMultiple = len > 1;
  const shouldShowArrows = showArrows && hasMultiple && !centerLogo;

  const rootCls = `${styles.wrapSingle} ${centerLogo ? styles.isCentered : ""}`;

  return (
    <LayoutGroup id={`tech-card-${title}`}>
      <div className={rootCls}>
        <Card bordered className={styles.card} bodyStyle={{ padding: 24 }}>
          <div className={styles.cardInner}>
            {/* Header */}
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

            {/* Arrows + logo */}
            <div
              className={styles.logoRow}
              style={{ gridTemplateColumns: shouldShowArrows ? "36px 1fr 36px" : "1fr" }}
            >
              {shouldShowArrows && (
                <Button
                  type="text"
                  className={`${styles.chevBtn} ${styles.chevLeft}`}
                  icon={<LeftOutlined />}
                  onClick={() => setIndex((i) => i - 1)}
                  aria-label="Previous"
                />
              )}

              <div className={styles.logoArea}>
                <motion.div
                  layout
                  layoutId={`logo-${title}`}
                  className={styles.logoHolder}
                  transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                >
                  <motion.img
                    className={styles.logo}
                    src={item.logoSrc}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    width={180}
                    height={110}
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
