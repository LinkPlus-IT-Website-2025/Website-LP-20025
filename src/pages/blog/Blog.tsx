import React from "react";
import styles from "./Blog.module.scss";

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 2v4M16 2v4M3 9h18" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M7 17l7-7M10 7h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface Post {
  id: string;
  img: string;
  date: string;
  author: string;
  title: string;
  href?: string;
}

const posts: Post[] = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    date: "October 16, 2024",
    author: "Admin",
    title: "Holistic Healing: Exploring Health Coaching Techniques",
    href: "#",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    date: "October 16, 2024",
    author: "Admin",
    title: "Getting started with digital transformation",
    href: "#",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    date: "October 16, 2024",
    author: "Admin",
    title: "The Art of Self-Care: Lessons from Health Coaching",
    href: "#",
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
    date: "October 16, 2024",
    author: "Admin",
    title: "Leading high-performing teams in hybrid workplaces",
    href: "#",
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
    date: "October 16, 2024",
    author: "Admin",
    title: "Change management that actually sticks",
    href: "#",
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop",
    date: "October 16, 2024",
    author: "Admin",
    title: "Agile rituals that drive outcomes (not chaos)",
    href: "#",
  },
];

const Blog: React.FC = () => {
  return (
    <div className={styles.blog}>
      {/* HERO (keep whatever you like here) */}
      <section className={styles.hero} aria-label="Blog hero">
        {/* <img
          className={styles.heroBg}
          alt="People collaborating in an office"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop"
        /> */}
        <div className={styles.heroShade} />
        <div className={styles.heroDecor} aria-hidden />
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <a href="#">Home</a>
            <span className={styles.bcSep}>/</span>
            <span>Blog</span>
          </div>
          <h1 className={styles.heroTitle}>Blog</h1>
        </div>
      </section>

      <main className={styles.wrap}>
        <div className={styles.grid}>
          {posts.map((p) => (
            <article key={p.id} className={styles.card}>
              <a className={styles.thumb} href={p.href}>
                <img src={p.img} alt={p.title} loading="lazy" />
              </a>

              <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                  <CalendarIcon />
                  <span>{p.date}</span>
                </span>
                <span className={styles.dot} aria-hidden>•</span>
                <span className={styles.metaItem}>
                  <UserIcon />
                  <span>by {p.author}</span>
                </span>
              </div>

              <h3 className={styles.title}>
                <a href={p.href}>{p.title}</a>
              </h3>

              <a className={styles.readMore} href={p.href}>
                Read more <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
