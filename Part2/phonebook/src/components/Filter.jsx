const Filter = ({ filter, onChange }) => {
    return (
      <div>
          filter: <input value={filter} onChange={onChange} />
      </div>
    )
}

export default Filter