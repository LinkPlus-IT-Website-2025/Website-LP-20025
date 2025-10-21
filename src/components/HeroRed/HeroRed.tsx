import React from "react";
import s from "./HeroRed.module.scss";

type Props = {
  title: string;
  crumb?: string;
  className?: string;
};

const HeroRed: React.FC<Props> = ({ title, crumb, className }) => {
  return (
    <section className={`${s.hero} ${className || ""}`}>
      <div className={s.inner}>
        {crumb ? <p className={s.crumb}>{crumb}</p> : null}
        <h1 className={s.title}>{title}</h1>
      </div>
    </section>
  );
};

export default HeroRed;
