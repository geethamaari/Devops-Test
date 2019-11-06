import React, { Component } from 'react';
import { CardBody } from 'reactstrap';

class Map extends Component {
    constructor(props) {
        super(props);
        this.displayInfobox = this.displayInfobox.bind(this);
        this.state = {
            sendMap: [],
            sendInfoBox: []
        };
    }

    componentDidMount() {
        setTimeout(() => this.getMapDetails(), 1000);
    }
    getMapDetails() {
        var map, heatGradientData;
        var maxPopulation = 10;
        map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            /* No need to set credentials if already passed in URL */
            center: new Microsoft.Maps.Location(39.01, -98.48),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 4,
        });

        var dataLayer = new Microsoft.Maps.EntityCollection();
        map.entities.push(dataLayer);

        var infoboxLayer = new Microsoft.Maps.EntityCollection();
        map.entities.push(infoboxLayer);

        var infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false });
        infoboxLayer.push(infobox);
        //Create a legend.
        createLegend(maxPopulation);
        //Load the Bing Spatial Data Services module.
        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialDataService', () => {
            var worldBounds = Microsoft.Maps.LocationRect.fromEdges(90, -180, -90, 180);
            //Get all states by doing an intersection test against a bounding box of the world and have up to 52 results returned.
            var queryOptions = {
                queryUrl: 'https://spatial.virtualearth.net/REST/v1/data/755aa60032b24cb1bfb54e8a6d59c229/USCensus2010_States/States',
                spatialFilter: {
                    spatialFilterType: 'intersects',
                    intersects: worldBounds
                },
                top: 52
            };
            var mapData;
            var mapData1 = $.ajax({
                url: "https://cdnlogapi.azurewebsites.net/api/CdnLogapi/CDNPLByCDNLocation?Start_Date=2018-10-05&End_Date=2018-10-12", async: false, success: (result) => {
                    mapData = JSON.parse(result);
                }
            });
            //var t = mapData[1].RebufferPercent;
            Microsoft.Maps.SpatialDataService.QueryAPIManager.search(queryOptions, map, (data) => {
                //Loop through results and set the fill color of the polygons based on the population property.
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < mapData.length; j++) {
                        if (mapData[j].Distr_id_geo === data[i].metadata.StateCode) {
                            data[i].metadata.Population = mapData[j].PeakTrafficRate;
                            data[i].setOptions({
                                fillColor: getLegendColor(data[i].metadata.Population, maxPopulation)
                            });
                            data[i].Metadata = {
                                title: mapData[j].Distr_id_geo,
                                description: mapData[j].PeakTrafficRate
                            };
                            Microsoft.Maps.Events.addHandler(data[i], 'mouseover', this.displayInfobox);
                        }
                    }
                }
                //Add results to the map.
                map.entities.push(data);
            });
        });
        this.setState({
            sendMap: map,
            sendInfoBox: infobox
        })
        function createLegend(maxValue) {
            var canvas = document.getElementById('legendCanvas');
            var ctx = canvas.getContext('2d');
            //Create a linear gradient for the legend.
            var colorGradient = {
                '0.00': 'rgba(0,255,0,255)',
                '0.50': 'rgba(255,255,0,255)',
                '1.00': 'rgba(255,0,0,255)' // Red
            };
            var grd = ctx.createLinearGradient(0, 0, 256, 0);
            for (var c in colorGradient) {
                grd.addColorStop(c, colorGradient[c]);
            }
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            //Store the pixel information from the legend.
            heatGradientData = ctx.getImageData(0, 0, canvas.width, 1);
        }
        function getLegendColor(value, maxValue) {
            value = (value > maxValue) ? maxValue : value;
            //Calculate the pixel data index from the ratio of value/maxValue.
            var idx = Math.round((value / maxValue) * 256) * 4 - 4;
            if (idx < 0) {
                idx = 0;
            }
            //Create an RGBA color from the pixel data at the calculated index.
            return 'rgba(' + heatGradientData.data[idx] + ',' + heatGradientData.data[idx + 1] + ',' + heatGradientData.data[idx + 2] + ',' + '0.5)';
        }
    }
    displayInfobox(e) {
        if (e.target) {
            var point = new Microsoft.Maps.Point(e.getX(), e.getY());
            var loc = this.state.sendMap.tryPixelToLocation(point);

            this.state.sendInfoBox.setLocation(loc);

            //var opt = e.target.metadata;
            if (e.targetType === 'polygon') {

                this.state.sendInfoBox.setLocation(e.location);
                this.state.sendInfoBox.setOptions({
                    visible: true, title: "State: " + e.target.Metadata.title, description: "PeakTrafficRate: " + e.target.Metadata.description, actions: [{
                        label: 'View Details', eventHandler: () => this.toggleMapDD(e.target.Metadata.title, 1)
                    }]
                });
            }
        }
    }
    render() {
        return (
            <div className="animated fadeIn">
                <CardBody className="cardBodyheight">
                    <div id='myMap1' className="mapStyle" />
                    <div id="legend1" />
                </CardBody>
            </div>
        );
    }
}

export default (Map);