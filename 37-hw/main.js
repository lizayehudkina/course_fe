let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.790, lng: 30.120 },
    zoom: 12,
  });

  const locations = [
    {
        position: new google.maps.LatLng(49.81137916887363, 30.0646661704408),
        title: 'Парк Олександрія',
        info: 'Олександрі́я - державний дендрологічний парк Національної академії наук України.Це найбільший (400га) архітектурно оформлений ландшафтний парк в Україні. Парк розташований на площі 400,67 гектарів на березі річки Рось. Площа декоративних водойм парку (ставки та р. Рось) становить 21 га. Загальна довжина алей і доріжок становить понад 20 км[джерело?]. Парк є зразком пейзажної паркової композиції, основу якої складають рослини, архітектурні споруди, скульптури, водна гладь річки Рось та ставків.',
        image: '<img src="https://bez-tabu.com.ua/wp-content/uploads/Kytajskyj_mistok_dendropark_Oleksandriya_Bila_TSerkva_4-2000x1325-2-880x528.jpg">',
    },

    {
        position: new google.maps.LatLng(49.79153903519705, 30.110130731689864),
        title: 'Замкова гора',
        info: 'Пам"ятка археології XI—XIII століть.',
        image: '<img src="https://poglyad.tv/wp-content/uploads/2019/09/2_Zamkova-gora.jpg">',
    },

    {
        position: new google.maps.LatLng(49.8016303932138, 30.098993086152607),
        title: 'Кафе "Теплиця"',
        info: 'квіти🌿кава🌿вино',
        image: '<img src="img/teplytsia.PNG">',
    },

    {
        position: new google.maps.LatLng(49.80598343507685, 30.11020604146116),
        title: 'Школа №9',
        info: 'Білоцерківська спеціалізована школа І-ІІІ ступенів №9 з поглибленим вивченням іноземних мов',
        image: '<img src="http://photos.wikimapia.org/p/00/00/92/06/48_big.jpg">',
    },
  ]

  const infoWindow = new google.maps.InfoWindow()

  for(let i = 0; i < locations.length; i++) {
    const marker =  new google.maps.Marker ({
        position: locations[i].position,
        map:map,
    })

    const content = `
    <p class="title">${locations[i].title}</p>
    <p class="description">${locations[i].info}</p>
    <div class="img-holder">${locations[i].image}</div>
    `;

    marker.addListener('click', () => {
        infoWindow.setContent(content);
        infoWindow.open({
            anchor:marker,
            map,
        })
    })
  }
}

window.initMap = initMap;