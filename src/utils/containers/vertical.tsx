import { CSSProperties, ReactNode } from 'react'

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  height: 'min-content',
  padding: '20px',
  border: '1px solid #ccc',
}

type VerticalContainerProps = {
  children: ReactNode
}

export const VerticalContainer = ({ children }: VerticalContainerProps) => {
  return <div style={styles}>{children}</div>
}
