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
    <path
      d={
        'M4.667 4a.667.667 0 0 0 0-1.333H3.333a.667.667 0 0 0-.666.666v9.334a.667.667 0 0 0 .666.666h1.334a.666.666 0 0 0 .666-.666.667.667 0 0 0-.666-.667H4V4h.667Zm9.213 3.613L12 4.947a.667.667 0 1 0-1.087.773l1.147 1.613H6.667a.667.667 0 0 0 0 1.334H12l-1.2 1.6a.667.667 0 0 0 1.067.8l2-2.667a.667.667 0 0 0 .135-.391.667.667 0 0 0-.122-.396Z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Logout = memo(ForwardRef)
