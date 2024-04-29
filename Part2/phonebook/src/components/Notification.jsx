const Notification = ({ data }) => {
    if (data === null) {
      return null
    }

    const { message, type } = data

    if (type === 'error') {
      return (
        <div className='error'>
          {message}
        </div>
      )
    }
  
    return (
      <div className='notification'>
        {message}
      </div>
    )
}

export default Notification