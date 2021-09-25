const progress = document.querySelector('.range');
const progress1 = document.querySelector('.video__volume');

progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})

progress1.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})
// , [2.3333, 48.8602], [2.3397, 48.8607], [], []
L.mapbox.accessToken = 'pk.eyJ1IjoibGFuMzk0NTY2MyIsImEiOiJja3UwYThsYWQyM3AzMnJxdDh5cDhwMGRnIn0.QZJ4Y2w_sHI2JnimfEqD6g';
var map = L.mapbox.map('map')
    .setView([48.86091, 2.3364], 16)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'));
    
    L.marker([48.86091, 2.3364]).addTo(map);
    L.marker([48.8602, 2.3333]).addTo(map);
    L.marker([48.8607, 2.3397]).addTo(map);
    L.marker([48.8619, 2.3330]).addTo(map);
    L.marker([48.8625, 2.3365]).addTo(map);
