function registerMap() {
  L.mapbox.accessToken = 'pk.eyJ1IjoibGFuMzk0NTY2MyIsImEiOiJja3UwYThsYWQyM3AzMnJxdDh5cDhwMGRnIn0.QZJ4Y2w_sHI2JnimfEqD6g';

  let map = L.mapbox.map('map')
    .setView([48.86091, 2.3364], 16)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'));

    L.marker([48.86091, 2.3364]).addTo(map);
    L.marker([48.8602, 2.3333]).addTo(map);
    L.marker([48.8607, 2.3397]).addTo(map);
    L.marker([48.8619, 2.3330]).addTo(map);
    L.marker([48.8625, 2.3365]).addTo(map);


    // const nav = new mapboxgl.NavigationControl({
    //   visualizePitch: true
    //   });
    // map.addControl(nav, 'top-right');
}

export { registerMap }
