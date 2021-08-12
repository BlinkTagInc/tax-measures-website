import React, { useState } from 'react'
import ReactMapGL, { NavigationControl } from 'react-map-gl'
import MapLayer from '../components/map-layer.js'
import { getViewport } from '../lib/util.js'

const ProjectMap = ({ project, grantees, geojsons }) => {
  /* eslint-disable-next-line new-cap */
  const { layers, bbox } = MapLayer([project], geojsons, grantees)
  const [viewport, setViewport] = useState(getViewport(bbox))

  if (!geojsons || layers.length === 0) {
    return null
  }

  return (
    <div className="map">
      <ReactMapGL
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        width="100%"
        height="100%"
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        scrollZoom={false}
      >
        {layers}
        <div className="nav map-nav">
          <NavigationControl onViewportChange={viewport => setViewport(viewport)} />
        </div>
      </ReactMapGL>
      <style jsx>{`
        .map {
          height: 200px;
        }

        .map-nav {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px;
        }

        @media print {
          .map {
            height: 600px;
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectMap
