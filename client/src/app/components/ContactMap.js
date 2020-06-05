/* eslint-disable */
import pointerImg from '../_static/images/pointer.png';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xlZHVtIiwiYSI6ImNrM3ptNDUxMjA1OXgzbG10b3F6aWd6b2oifQ.HUr3HOCurEsD2nZjpvGpww';

class ContactMap {
  async render () {
    const map = new mapboxgl.Map({
      container: 'contactMap',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [3.670820, 51.087551],
      zoom: 12,
    });


    map.addControl(new mapboxgl.NavigationControl());
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
    map.scrollZoom.disable();
    map.on('load', () => {
      map.loadImage(
        pointerImg,
        (error, image) => {
          if (error) throw error;
          map.addImage('pointer', image);
          map.addLayer({
            id: 'points',
            type: 'symbol',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [{
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [3.670820, 51.087551],
                  },
                }],
              },
            },
            layout: {
              'icon-image': 'pointer',
              'icon-size': 0.05,
            },
          });
        }
      );
    });
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }
}

export default ContactMap;
