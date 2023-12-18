import { SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'} fill={'#000'}>
      <path
        d={
          'M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM5 18l4.3-.4a2 2 0 0 0 1.2-.6l9-9a2 2 0 0 0-.1-2.7l-2.7-2.7a2 2 0 0 0-2.7 0l-9 9a2 2 0 0 0-.6 1.1L4 17a1 1 0 0 0 1 1ZM15.3 4 18 6.7l-2 2L13.3 6l2-2Zm-9 9L12 7.2l2.7 2.7-5.6 5.6-3 .3.3-3Z'
        }
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

export const Edit = memo(ForwardRef)
