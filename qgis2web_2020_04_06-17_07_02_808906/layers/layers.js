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
var format_AgrigentoMSNASheet1_1 = new ol.format.GeoJSON();
var features_AgrigentoMSNASheet1_1 = format_AgrigentoMSNASheet1_1.readFeatures(json_AgrigentoMSNASheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgrigentoMSNASheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgrigentoMSNASheet1_1.addFeatures(features_AgrigentoMSNASheet1_1);
var lyr_AgrigentoMSNASheet1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgrigentoMSNASheet1_1, 
                style: style_AgrigentoMSNASheet1_1,
                interactive: true,
                title: '<img src="styles/legend/AgrigentoMSNASheet1_1.png" /> Agrigento MSNA - Sheet1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AgrigentoMSNASheet1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AgrigentoMSNASheet1_1];
lyr_AgrigentoMSNASheet1_1.set('fieldAliases', {'PROVINCI': 'PROVINCI', 'COMUNE IN CUI HA SEDE LA STRUTTURA': 'COMUNE IN CUI HA SEDE LA STRUTTURA', 'DENOMINAZIONE DELL'ISTITUZIONE': 'DENOMINAZIONE DELL\'ISTITUZIONE', 'INDIRIZZO DELLA STRUTTURA': 'INDIRIZZO DELLA STRUTTURA', 'TIPOLOGIA': 'TIPOLOGIA', 'NUMERO UTENTI': 'NUMERO UTENTI', 'x': 'x', 'y': 'y', });
lyr_AgrigentoMSNASheet1_1.set('fieldImages', {'PROVINCI': '', 'COMUNE IN CUI HA SEDE LA STRUTTURA': '', 'DENOMINAZIONE DELL'ISTITUZIONE': '', 'INDIRIZZO DELLA STRUTTURA': '', 'TIPOLOGIA': '', 'NUMERO UTENTI': '', 'x': '', 'y': '', });
lyr_AgrigentoMSNASheet1_1.set('fieldLabels', {'PROVINCI': 'no label', 'COMUNE IN CUI HA SEDE LA STRUTTURA': 'no label', 'DENOMINAZIONE DELL'ISTITUZIONE': 'no label', 'INDIRIZZO DELLA STRUTTURA': 'no label', 'TIPOLOGIA': 'no label', 'NUMERO UTENTI': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_AgrigentoMSNASheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});