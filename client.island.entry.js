import ToTop from './src/ToTop'
import {hydrateRoot} from 'react-dom/client'

function hydrateIslands(islands) {
  document.querySelectorAll('[data-tropical-hydration-component]').forEach((island) => {
    const Component = islands[island.dataset.tropicalHydrationComponent]

    if (!Component) {
      console.warn(
        `Found a server-rendered Tropical Island for ${island.dataset.tropicalHydrationComponent} but that component was not passed to hydrateIslands`
      )
      return
    }

    const hydrationProps = JSON.parse(island.dataset.tropicalHydrationProps)
    hydrateRoot(
      island,
      <Component {...hydrationProps} />
    )
  })
}

hydrateIslands({
  ToTop
})