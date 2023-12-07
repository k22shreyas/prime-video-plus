export const applyStyles = (OriginalComponent) => {
  const NewComponent = () => {
    const yellowContainer = {
      background : 'yellow',
      color: '#000',
      padding: '20px'
    }
    return (
      <div style={yellowContainer}>
        <OriginalComponent />
      </div>
    )
  }
  return NewComponent;
}