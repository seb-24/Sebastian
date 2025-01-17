import type { ComponentProps, FC } from 'react'

const Tag: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide-icon lucide lucide-tag"
  >
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
  </svg>
)

export default Tag
