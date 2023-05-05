import Post from './Post'
import ToTop from './ToTop'
import Island from './Island'

export default function App() {
  return (
    <div>
      <Post />
      <Island componentName='ToTop'>
        <ToTop backgroundColor='red' />
      </Island>
    </div>
  )
}
