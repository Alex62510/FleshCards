import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={16}
    ref={ref}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#a)'}>
      <path
        d={
          'm8.94 8 2.867-2.86a.67.67 0 0 0-.947-.947L8 7.06 5.14 4.193a.67.67 0 0 0-.947.947L7.06 8l-2.867 2.86a.667.667 0 0 0-.146.73.666.666 0 0 0 .146.217.667.667 0 0 0 .947 0L8 8.94l2.86 2.867a.668.668 0 0 0 .217.146.668.668 0 0 0 .513 0 .667.667 0 0 0 .217-.146.667.667 0 0 0 0-.947L8.94 8Z'
        }
        fill={'#fff'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h16v16H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Close = memo(ForwardRef)
