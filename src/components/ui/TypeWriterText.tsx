'use client'

import Typewriter, { ITypewriterProps } from 'react-ts-typewriter'

export default function TypeWriterText(
  props: JSX.IntrinsicAttributes & ITypewriterProps
) {
  return <Typewriter {...props} />
}
