// // //LOCATE SA,TX COORDINATES........
// geocode("Garcias Mexican San Antonio, Texas", mapboxToken).then(function(result) {
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(20);
// });
//
// var garcias = new mapboxgl.Popup()
//     .setLngLat([-98.513307, 29.451758])
//     .addTo(map);
// garcias.setPopUp(marker);



mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
//    zoom: 10,
//    zoom: 20,
    center: [-98.4951, 29.4246]
});



var favoriteRestaurants = [
    {
        name: "Bistro09",
        website: "https://www.bistr09.com/",
        address: "6106 BROADWAY, SAN ANTONIO, TX 78209",
        tel: "(210) 784-6774",
        details: "Best Hamburgers in SA",
        image: "<img src=https://www.bistr09.com/images/flow2.jpg>",
        coordinates: {
            latitude: -98.46611,
            longitude: 29.48315
        }
    },
    {
        name: "2M Smokehouse",
        website: "https://www.2msmokehouse.com/",
        address: "2731 S WW White Rd, San Antonio, TX 78222",
        tel: "(210) 534-0984",
        details: "Open till 3AM (Fri & Sat)",
        image: "<img src=https://www.2msmokehouse.com/wp-content/uploads/2018/11/image428031.png>",
        coordinates: {
            latitude: -98.404919,
            longitude: 29.382473
        }
    },
    {
        name: "Range",
        website: "http://rangesa.com/",
        address: "125 Houston Street, San Antonio, Tx 78205",
        tel: "(210) 634-9874",
        details: "Pastries Baked on Site",
        image: "<img src=http://rangesa.com/wp-content/uploads/2019/07/IMG_6563.jpg>",
        coordinates: {
            latitude: -98.492773,
            longitude: 29.426612
        }
    }
];


// FOREACH - ITERATE THROUGH RESTAURANT ARRAY
favoriteRestaurants.forEach(function(restaurant) {
   //console.log(restaurant);

    // CONVERT STREET RESTAURANT & RETURN GEOGRAPHIC COORDINATES
    geocode(restaurant.address, mapboxToken).then(function (result) {
       // console.log(result); // VERIFY COORDINATES ARE RETURNED

        //POPUP FOR RESTAURANT NAME TEL & EXTRA DETAILS //
        var popup = new mapboxgl.Popup({offset: 5})
            .setLngLat(result)
            // .setHTML("<p>"+ restaurant.name + "</p>")
            .setHTML(
                '<a href="' + restaurant.website + '"><p>' + restaurant.name + '</p></a>'
                + '<p>' + restaurant.address + '</p>'
                + '<p>' + restaurant.tel + '</p>'
                + '<em><p>' + restaurant.details + '</p></em>'
                + '<p>' + restaurant.image + '</p>')

            .addTo(map);


    // MARKER FOR RESTAURANTS
    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat(result)
        .addTo(map)
        .setPopup(popup) // sets a popup on this marker
        .togglePopup()

    })

});

// Add Markers for Favorite Restaurant
var markerOptions = {
    color: "Red",
};

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());





