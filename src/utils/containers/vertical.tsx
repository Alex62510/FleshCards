import { CSSProperties, ReactNode } from 'react'

const styles: CSSProperties = {
  border: '1px solid #ccc',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  height: 'min-content',
  padding: '20px',
}

type VerticalContainerProps = {
  children: ReactNode
}

export const VerticalContainer = ({ children }: VerticalContainerProps) => {
  return <div style={styles}>{children}</div>
}
