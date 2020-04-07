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
var format_Displaced_1 = new ol.format.GeoJSON();
var features_Displaced_1 = format_Displaced_1.readFeatures(json_Displaced_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Displaced_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Displaced_1.addFeatures(features_Displaced_1);
var lyr_Displaced_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Displaced_1, 
                style: style_Displaced_1,
                interactive: true,
    title: 'Displaced<br />\
    <img src="styles/legend/Displaced_1_0.png" /> 8<br />\
    <img src="styles/legend/Displaced_1_1.png" /> 9<br />\
    <img src="styles/legend/Displaced_1_2.png" /> 10<br />\
    <img src="styles/legend/Displaced_1_3.png" /> 11<br />\
    <img src="styles/legend/Displaced_1_4.png" /> 12<br />\
    <img src="styles/legend/Displaced_1_5.png" /> 13<br />\
    <img src="styles/legend/Displaced_1_6.png" /> 14<br />\
    <img src="styles/legend/Displaced_1_7.png" /> 15<br />\
    <img src="styles/legend/Displaced_1_8.png" /> 20<br />\
    <img src="styles/legend/Displaced_1_9.png" /> 24<br />\
    <img src="styles/legend/Displaced_1_10.png" /> 26<br />\
    <img src="styles/legend/Displaced_1_11.png" /> 30<br />\
    <img src="styles/legend/Displaced_1_12.png" /> 35<br />\
    <img src="styles/legend/Displaced_1_13.png" /> 40<br />\
    <img src="styles/legend/Displaced_1_14.png" /> 44<br />\
    <img src="styles/legend/Displaced_1_15.png" /> 47<br />\
    <img src="styles/legend/Displaced_1_16.png" /> 55<br />\
    <img src="styles/legend/Displaced_1_17.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Displaced_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Displaced_1];
lyr_Displaced_1.set('fieldAliases', {'PROVINCI': 'PROVINCI', 'COMUNE IN CUI HA SEDE LA STRUTTURA': 'COMUNE IN CUI HA SEDE LA STRUTTURA', 'DENOMINAZIONE DELL\'ISTITUZIONE': 'DENOMINAZIONE DELL\'ISTITUZIONE', 'INDIRIZZO DELLA STRUTTURA': 'INDIRIZZO DELLA STRUTTURA', 'TIPOLOGIA': 'TIPOLOGIA', 'NUMERO UTENTI': 'NUMERO UTENTI', 'x': 'x', 'y': 'y', });
lyr_Displaced_1.set('fieldImages', {'PROVINCI': 'TextEdit', 'COMUNE IN CUI HA SEDE LA STRUTTURA': 'TextEdit', 'DENOMINAZIONE DELL\'ISTITUZIONE': 'TextEdit', 'INDIRIZZO DELLA STRUTTURA': 'TextEdit', 'TIPOLOGIA': 'TextEdit', 'NUMERO UTENTI': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Displaced_1.set('fieldLabels', {'PROVINCI': 'no label', 'COMUNE IN CUI HA SEDE LA STRUTTURA': 'no label', 'DENOMINAZIONE DELL\'ISTITUZIONE': 'no label', 'INDIRIZZO DELLA STRUTTURA': 'no label', 'TIPOLOGIA': 'no label', 'NUMERO UTENTI': 'inline label', 'x': 'no label', 'y': 'no label', });
lyr_Displaced_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});