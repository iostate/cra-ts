import React from 'react'
import Tag from './index'

// This just shows that it can be defined differently. This is the 
// default export
export default {
     title: 'Tag title',
     component: Tag
}
export const Basic = () => (
     <Tag />
)
export const Second = () => (
     <Tag title="My second tag" />
)

export const Third = () => {
     <Tag title="My little man" />
}