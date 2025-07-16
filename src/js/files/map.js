//Яндекс карта
const map = document.querySelector('#map');

if (map) {
	ymaps.ready(init);

	function init() {
		var myMap = new ymaps.Map('map', {
			center: [55.699781, 37.619423],
			zoom: 16,
			controls: ['zoomControl'],
			behaviors: ['drag']
		});
		var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			latitude: 55.699781,
			longitude: 37.619423,
		}, {
			//iconLayout: 'default#image',
			//iconImageHref: 'img/icons/map.svg',
			iconColor: '#3339b9',
			iconImageSize: [105, 140],
			iconImageOffset: [-57, -137],
		});

		myMap.geoObjects.add(myPlacemark);
	};
}