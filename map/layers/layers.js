var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SBARCHIONGSheet1_1 = new ol.format.GeoJSON();
var features_SBARCHIONGSheet1_1 = format_SBARCHIONGSheet1_1.readFeatures(json_SBARCHIONGSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBARCHIONGSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBARCHIONGSheet1_1.addFeatures(features_SBARCHIONGSheet1_1);
var lyr_SBARCHIONGSheet1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SBARCHIONGSheet1_1, 
                style: style_SBARCHIONGSheet1_1,
                interactive: true,
                title: '<img src="styles/legend/SBARCHIONGSheet1_1.png" /> SBARCHI ONG - Sheet1'
            });
var format_Displaced_2 = new ol.format.GeoJSON();
var features_Displaced_2 = format_Displaced_2.readFeatures(json_Displaced_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Displaced_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Displaced_2.addFeatures(features_Displaced_2);
var lyr_Displaced_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Displaced_2, 
                style: style_Displaced_2,
                interactive: true,
                title: '<img src="styles/legend/Displaced_2.png" /> Displaced'
            });
var format_Displaced_3 = new ol.format.GeoJSON();
var features_Displaced_3 = format_Displaced_3.readFeatures(json_Displaced_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Displaced_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Displaced_3.addFeatures(features_Displaced_3);
var lyr_Displaced_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Displaced_3, 
                style: style_Displaced_3,
                interactive: true,
                title: '<img src="styles/legend/Displaced_3.png" /> Displaced'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SBARCHIONGSheet1_1.setVisible(true);lyr_Displaced_2.setVisible(true);lyr_Displaced_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SBARCHIONGSheet1_1,lyr_Displaced_2,lyr_Displaced_3];
lyr_SBARCHIONGSheet1_1.set('fieldAliases', {'DATE': 'DATE', 'BOAT/NGO': 'BOAT/NGO', 'PORT': 'PORT', 'NUMBER': 'NUMBER', 'X': 'X', 'Y': 'Y', });
lyr_Displaced_2.set('fieldAliases', {'DATE': 'DATE', 'BOAT/NGO': 'BOAT/NGO', 'PORT': 'PORT', 'NUMBER': 'NUMBER', 'X': 'X', 'Y': 'Y', });
lyr_Displaced_3.set('fieldAliases', {'DATE': 'DATE', 'BOAT/NGO': 'BOAT/NGO', 'PORT': 'PORT', 'NUMBER': 'NUMBER', 'X': 'X', 'Y': 'Y', });
lyr_SBARCHIONGSheet1_1.set('fieldImages', {'DATE': '', 'BOAT/NGO': '', 'PORT': '', 'NUMBER': '', 'X': '', 'Y': '', });
lyr_Displaced_2.set('fieldImages', {'DATE': '', 'BOAT/NGO': '', 'PORT': '', 'NUMBER': '', 'X': '', 'Y': '', });
lyr_Displaced_3.set('fieldImages', {'DATE': '', 'BOAT/NGO': '', 'PORT': '', 'NUMBER': '', 'X': '', 'Y': '', });
lyr_SBARCHIONGSheet1_1.set('fieldLabels', {'DATE': 'no label', 'BOAT/NGO': 'no label', 'PORT': 'no label', 'NUMBER': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Displaced_2.set('fieldLabels', {'DATE': 'no label', 'BOAT/NGO': 'no label', 'PORT': 'no label', 'NUMBER': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Displaced_3.set('fieldLabels', {'DATE': 'no label', 'BOAT/NGO': 'no label', 'PORT': 'no label', 'NUMBER': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Displaced_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});