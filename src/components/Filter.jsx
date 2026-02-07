import { useDispatch, useSelector } from 'react-redux'
import { clearFilters, setNameFilter } from '../features/filters/filtersSlice'

function Filter() {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.filters.name)

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Ara..."
        value={value}
        onChange={(event) => dispatch(setNameFilter(event.target.value))}
      />
      {value ? (
        <button
          className="button button--ghost"
          type="button"
          onClick={() => dispatch(clearFilters())}
        >
          Temizle
        </button>
      ) : null}
    </div>
  )
}

export default Filter
