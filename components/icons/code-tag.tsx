import type { ComponentProps, FC } from 'react'

type SVGProps = FC<ComponentProps<'svg'>>

export const CodeTag: SVGProps = (props) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        {...props}
      >
        <path
          stroke='#71717A'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M6.778 8.519L3 12.297l3.778 3.779M17.222 8.519L21 12.297l-3.778 3.779M9.271 18.595L14.73 6'
        ></path>
      </svg>
    </>
  )
}