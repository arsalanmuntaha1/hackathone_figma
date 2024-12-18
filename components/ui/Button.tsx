import React from 'react'

type TYPE_BUTTON = {
    title: string,
    className?: string
}

export default function Button({ title, className }:TYPE_BUTTON) {
  return (
    <button className={`bg-primary3 text-lg p-2 ${className}`}>
        { title }             
    </button>
  )
}
