import { useQuery } from 'react-query'

import fetch from '../libs/fetch'

function useRepository(id) {
  return useQuery(['repository', { id }], () => fetch('/api/data?id=' + id))
}

export default useRepository
