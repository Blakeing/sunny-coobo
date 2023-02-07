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
    googleMapsApiKey: 'AIzaSyA9gI4BBQUBKM2i8Tm_aLp9LOjhX19kKAk', // ,
  })

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={11}
        center={center}
        options={options}
      >
        <Marker
          icon={` <svg
            className="w-10 h-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 145 149.03"
          >
            <path
              d="M96.55 100.2c-4.5 3.29-10.69 5.53-16.78 5.53-7.8 0-14.24-2.69-19.33-8.03-5.1-5.36-7.64-12.35-7.64-21 0-8.39 2.57-15.29 7.73-20.68 5.15-5.38 11.6-8.08 19.34-8.08 6.1 0 11.35 1.59 15.77 4.76 3.23-6.72 7.71-13.69 14.21-18.68-1.62-1.17-2.19-1.48-3.97-2.5-8.24-4.69-17.06-7.03-26.43-7.03C66.5 24.49 55.03 29 45.05 38 33.67 48.35 27.98 61.28 27.98 76.79c0 14.48 5.04 26.79 15.11 36.92 10.07 10.13 22.23 15.19 36.46 15.19 9.67 0 18.52-2.29 26.56-6.88 1.71-.98 2.4-1.39 3.95-2.52-5.39-4.49-10.8-13.16-13.51-19.3z"
              fill="#ffffff"
            />
            <path
              d="M65.28 63.03h7.99l6.56 21.99 6.56-21.99h7.94v28.93H89.4V69.13h-.58l-6.48 21.66h-5.02L70.8 69.13h-.63v22.83h-4.89V63.03z"
              fill="#ffffff"
            />
          </svg>`}
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