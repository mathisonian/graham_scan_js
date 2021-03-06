function initialize() {

   var coords = [
        {'lat' : '50.35', 'lon' : '6.5'},
        {'lat' : '50.2333', 'lon' : '6.41667'},
        {'lat' : '50.1667', 'lon' : '6.38333'},
        {'lat' : '50.1833', 'lon' : '6.35'},
        {'lat' : '50.1833', 'lon' : '6.36667'},
        {'lat' : '50.2333', 'lon' : '6.46667'},
        {'lat' : '50.1333', 'lon' : '6.3'},
        {'lat' : '50.2167', 'lon' : '6.5'},
        {'lat' : '50.1833', 'lon' : '6.26667'},
        {'lat' : '50.1667', 'lon' : '6.51667'},
        {'lat' : '50.301225', 'lon' : '6.33757'},
        {'lat' : '50.1167', 'lon' : '6.35'},
        {'lat' : '50.2667', 'lon' : '6.48333'},
        {'lat' : '50.1333', 'lon' : '6.36667'},
        {'lat' : '50.15', 'lon' : '6.3'},
        {'lat' : '50.15', 'lon' : '6.38333'},
        {'lat' : '50.127949', 'lon' : '6.34825'},
        {'lat' : '50.2833', 'lon' : '6.46667'},
        {'lat' : '50.2667', 'lon' : '6.46667'},
        {'lat' : '50.3333', 'lon' : '6.45'},
        {'lat' : '50.1667', 'lon' : '6.33333'},
        {'lat' : '50.3', 'lon' : '6.48333'},
        {'lat' : '50.2', 'lon' : '6.45'},
        {'lat' : '50.15', 'lon' : '6.5'},
        {'lat' : '50.1333', 'lon' : '6.31667'},
        {'lat' : '50.2', 'lon' : '6.53333'},
        {'lat' : '50.2333', 'lon' : '6.28333'},
        {'lat' : '50.2167', 'lon' : '6.31667'},
        {'lat' : '50.2333', 'lon' : '6.31667'},
        {'lat' : '50.25', 'lon' : '6.3'},
        {'lat' : '50.25', 'lon' : '6.26667'},
        {'lat' : '50.2333', 'lon' : '6.36667'},
        {'lat' : '50.2333', 'lon' : '6.25'},
        {'lat' : '50.35', 'lon' : '6.43333'},
        {'lat' : '50.35', 'lon' : '6.41667'},
        {'lat' : '50.15', 'lon' : '6.43333'},
        {'lat' : '50.1833', 'lon' : '6.45'},
        {'lat' : '50.1333', 'lon' : '6.43333'},
        {'lat' : '50.1667', 'lon' : '6.43333'},
        {'lat' : '50.1333', 'lon' : '6.45'},
        {'lat' : '50.1667', 'lon' : '6.41667'},
        {'lat' : '50.15', 'lon' : '6.41667'},
        {'lat' : '50.213686', 'lon' : '6.212561'},
        {'lat' : '50.1333', 'lon' : '6.16667'},
        {'lat' : '50.1167', 'lon' : '6.16667'},
        {'lat' : '50.136235', 'lon' : '6.253813'},
        {'lat' : '50.1166667', 'lon' : '6.3833333'},
        {'lat' : '50.147869', 'lon' : '6.24628'},
        {'lat' : '50.1167', 'lon' : '6.2'},
        {'lat' : '50.1833', 'lon' : '6.21667'},
        {'lat' : '50.1333', 'lon' : '6.21667'},
        {'lat' : '50.15', 'lon' : '6.23333'},
        {'lat' : '50.137051', 'lon' : '6.21823'},
        {'lat' : '50.1167', 'lon' : '6.3'},
        {'lat' : '50.1', 'lon' : '6.2'},
        {'lat' : '50.1167', 'lon' : '6.18333'},
        {'lat' : '50.1167', 'lon' : '6.21667'},
        {'lat' : '50.151539', 'lon' : '6.24935'},
        {'lat' : '50.1167', 'lon' : '6.38333'},
        {'lat' : '50.1333', 'lon' : '6.38333'},
        {'lat' : '50.0833', 'lon' : '6.33333'},
        {'lat' : '50.091938', 'lon' : '6.363765'},
        {'lat' : '50.1', 'lon' : '6.35'},
        {'lat' : '50.1167', 'lon' : '6.36667'},
        {'lat' : '50.1', 'lon' : '6.36667'},
        {'lat' : '50.05', 'lon' : '6.28333'},
        {'lat' : '49.9667', 'lon' : '6.2'},
        {'lat' : '50.0333', 'lon' : '6.33333'},
        {'lat' : '49.9833', 'lon' : '6.23333'},
        {'lat' : '50', 'lon' : '6.18333'},
        {'lat' : '50.05', 'lon' : '6.26667'},
        {'lat' : '50.0667', 'lon' : '6.16667'},
        {'lat' : '50.057331', 'lon' : '6.29292'},
        {'lat' : '50.0167', 'lon' : '6.23333'},
        {'lat' : '49.9667', 'lon' : '6.16667'},
        {'lat' : '49.995602', 'lon' : '6.24571'},
        {'lat' : '50.0667', 'lon' : '6.33333'},
        {'lat' : '50.02454', 'lon' : '6.26061'},
        {'lat' : '49.9833', 'lon' : '6.26667'},
        {'lat' : '49.9667', 'lon' : '6.25'},
        {'lat' : '50.0167', 'lon' : '6.3'},
        {'lat' : '50.0333', 'lon' : '6.28333'},
        {'lat' : '50.010163', 'lon' : '6.295068'},
        {'lat' : '49.9833', 'lon' : '6.2'},
        {'lat' : '50.0667', 'lon' : '6.21667'},
        {'lat' : '50.03672', 'lon' : '6.15229'},
        {'lat' : '50.0833', 'lon' : '6.18333'},
        {'lat' : '50.0667', 'lon' : '6.25'},
        {'lat' : '50.21764', 'lon' : '6.418925'},
        {'lat' : '50.301225', 'lon' : '6.33757'},
        {'lat' : '50.139037', 'lon' : '6.347223'},
        {'lat' : '50.308023', 'lon' : '6.384857'},
        {'lat' : '50.204374', 'lon' : '6.527217'},
        {'lat' : '50.218556', 'lon' : '6.252401'},
        {'lat' : '50.253096', 'lon' : '6.262949'},
        {'lat' : '50.156949', 'lon' : '6.465449'},
        {'lat' : '50.147959', 'lon' : '6.186598'},
        {'lat' : '50.157677', 'lon' : '6.214198'},
        {'lat' : '50.136235', 'lon' : '6.253813'},
        {'lat' : '49.96503', 'lon' : '6.206825'},
        {'lat' : '49.982153', 'lon' : '6.232356'},
        {'lat' : '49.988421', 'lon' : '6.161605'},
        {'lat' : '50.001905', 'lon' : '6.223443'},
        {'lat' : '50.014097', 'lon' : '6.251456'},
        {'lat' : '50.027203', 'lon' : '6.179071'},
        {'lat' : '50.001262', 'lon' : '6.148231'}

    ];

    var centrePoint = new google.maps.LatLng(50.15, 6.41);

    var mapOptions = {
        zoom: 10,
        center: centrePoint,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var poly;
    var polyHull;
    var convexHull = new ConvexHullGrahamScan();


    poly = new google.maps.Polygon({
        paths: coords.map(function(item){
            return new google.maps.LatLng(item.lat, item.lon);
        }),
        strokeColor: '#000',
        strokeOpacity: 0.2,
        strokeWeight: 2,
        fillColor: '#000',
        fillOpacity: 0.1
    });


    coords.forEach(function (item) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.lat, item.lon),
            map: map
        });
        convexHull.addPoint(item.lon, item.lat);
    });


    if (convexHull.points.length > 0) {
        var hullPoints = convexHull.getHull();



        //Convert to google latlng objects
        hullPoints = hullPoints.map(function (item) {
            return new google.maps.LatLng(item.y, item.x);
        });

        console.log(hullPoints);

        polyHull = new google.maps.Polygon({
            paths: hullPoints,
            strokeColor: '#000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#000',
            fillOpacity: 0.35
        });

        polyHull.setMap(map);

    }
}

google.maps.event.addDomListener(window, 'load', initialize);