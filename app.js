var app = angular.module("mapApp", ["leaflet-directive"]);

app.controller('MapController', function($scope){
    angular.extend($scope, {
        america: {
            lat: 38,
            lng: -94,
            zoom: 4
        },

        layers: {
            baselayers: {
                osm: {
                    name: 'Huarui\s map',
                    url: 'http://api.tiles.mapbox.com/v3/huaruiwu.i0ka23ad/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
                cloudmade2: {
                    name: 'Cloudmade Tourist',
                    type: 'xyz',
                    url: 'http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png',
                    layerParams: {
                        key: '007b9471b4c74da4a6ec7ff43552b16f',
                        styleId: 7
                    }
                },
                googleRoadmap: {
                    name: 'Google Streets',
                    layerType: 'ROADMAP',
                    type: 'google'
                }
            },
            overlays: {
                wms: {
                    name: 'EEUU States (WMS)',
                    type: 'wms',
                    visible: true,
                    url: 'http://suite.opengeo.org/geoserver/usa/wms',
                    layerParams: {
                        layers: 'usa:states',
                        format: 'image/png',
                        transparent: true
                    }
                }
            }
        },
        defaults: {
        }
    });
    // $scope.tiles = {
    //     url: 'http://api.tiles.mapbox.com/v3/huaruiwu.i0ka23ad/{z}/{x}/{y}.png'
    // };

});
