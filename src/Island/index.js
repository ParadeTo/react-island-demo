import React from 'react'

export default function Island({children, componentName}) {
  const hydrationProps = JSON.stringify(React.Children.only(children).props)
  return (
    <div
      data-tropical-hydration-component={componentName}
      data-tropical-hydration-props={hydrationProps}>
      {children}
    </div>
  )
}
