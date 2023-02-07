import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

import { Spinner } from '../ui/Spinner'

const options = {}

const containerStyle = {
  width: '100%',
  height: '100%',
}

const center = { lat: 29.78269, lng: -95.527908 }

export default function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '', // ,
  })

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={11}
        center={center}
        options={options}
      >
        <Marker position={center} />
      </GoogleMap>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <Spinner size="lg" />
}
