"use client"

import styles from "./glitch.module.css"

export default function GlitchText({ text = "Glitch" }: { text?: string }) {
  return (
    <span className={`${styles.glitch} inline-block px-2`} data-text={text} aria-label={text}>
      {text}
    </span>
  )
}
