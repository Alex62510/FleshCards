import { SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M21 6h-5V4.3A2.4 2.4 0 0 0 13.5 2h-3A2.4 2.4 0 0 0 8 4.3V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2ZM10 4.3c0-.1.2-.3.5-.3h3c.3 0 .5.2.5.3V6h-4V4.3Z'
        }
        fill={'#000'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h24v24H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const DeleteForever = memo(ForwardRef)
