import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useCallback } from 'react'

import { Spinner } from '../ui/Spinner'

const options = {}

const containerStyle = {
  width: '100%',
  height: '100%',
}

const center = { lat: 29.78269, lng: -95.527908 }

export default function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyA9gI4BBQUBKM2i8Tm_aLp9LOjhX19kKAk', // ,
    // ...otherOptions
  })

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    // const onLoad = useCallback(function onLoad(mapInstance) {

    // })
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={11}
        center={center}
        options={options}
      >
        <Marker
          icon={{
            path: 'M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z',
            fillColor: 'yellow',
            fillOpacity: 0.9,
            scale: 2,
            strokeColor: 'gold',
            strokeWeight: 2,
          }}
          position={center}
        />
      </GoogleMap>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <Spinner size="lg" />
}
