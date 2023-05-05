export default function ToTop({backgroundColor}) {
  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0)
      }}
      style={{
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        borderRadius: '15px',
        textAlign: 'center',
        position: 'fixed',
        right: '10px',
        bottom: '10px',
        backgroundColor: backgroundColor || 'orange',
      }}>
      ↑
    </div>
  )
}
