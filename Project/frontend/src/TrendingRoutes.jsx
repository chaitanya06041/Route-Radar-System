import React from 'react'
import { useParams } from 'react-router-dom'
function TrendingRoutes() {
    const Params = useParams();
  return (
    <div>
      Trending Routes of {Params.bus}
    </div>
  )
}

export default TrendingRoutes