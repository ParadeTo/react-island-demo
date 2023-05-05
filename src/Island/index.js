import React from 'react'

export default function Island({children, componentName}) {
  const hydrationProps = JSON.stringify(React.Children.only(children).props)
  return (
    <div
      data-hydration-component={componentName}
      data-hydration-props={hydrationProps}>
      {children}
    </div>
  )
}
