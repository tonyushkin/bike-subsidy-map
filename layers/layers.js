var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NationalSubsidyStatus_1 = new ol.format.GeoJSON();
var features_NationalSubsidyStatus_1 = format_NationalSubsidyStatus_1.readFeatures(json_NationalSubsidyStatus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalSubsidyStatus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalSubsidyStatus_1.addFeatures(features_NationalSubsidyStatus_1);
var lyr_NationalSubsidyStatus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalSubsidyStatus_1,
maxResolution:28004.466152261964,
 minResolution:840.1339845678589,

                style: style_NationalSubsidyStatus_1,
                popuplayertitle: 'National Subsidy Status',
                interactive: true,
    title: 'National Subsidy Status<br />\
    <img src="styles/legend/NationalSubsidyStatus_1_0.png" /> Both National scheme and Local incentives<br />\
    <img src="styles/legend/NationalSubsidyStatus_1_1.png" /> Incentives available in the past<br />\
    <img src="styles/legend/NationalSubsidyStatus_1_2.png" /> Local incentives available<br />\
    <img src="styles/legend/NationalSubsidyStatus_1_3.png" /> National Scheme only<br />\
    <img src="styles/legend/NationalSubsidyStatus_1_4.png" /> No incentives available<br />\
    <img src="styles/legend/NationalSubsidyStatus_1_5.png" /> <br />' });
var format_RegionalSubsidyStatus_2 = new ol.format.GeoJSON();
var features_RegionalSubsidyStatus_2 = format_RegionalSubsidyStatus_2.readFeatures(json_RegionalSubsidyStatus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionalSubsidyStatus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionalSubsidyStatus_2.addFeatures(features_RegionalSubsidyStatus_2);
var lyr_RegionalSubsidyStatus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionalSubsidyStatus_2,
maxResolution:840.1339845678589,
 minResolution:0.14002233076130982,

                style: style_RegionalSubsidyStatus_2,
                popuplayertitle: 'Regional Subsidy Status',
                interactive: true,
    title: 'Regional Subsidy Status<br />\
    <img src="styles/legend/RegionalSubsidyStatus_2_0.png" /> Both regional scheme and Local incentives<br />\
    <img src="styles/legend/RegionalSubsidyStatus_2_1.png" /> Local incentives available<br />\
    <img src="styles/legend/RegionalSubsidyStatus_2_2.png" /> <br />' });
var format_LocalSubsidyStatus_3 = new ol.format.GeoJSON();
var features_LocalSubsidyStatus_3 = format_LocalSubsidyStatus_3.readFeatures(json_LocalSubsidyStatus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalSubsidyStatus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalSubsidyStatus_3.addFeatures(features_LocalSubsidyStatus_3);
var lyr_LocalSubsidyStatus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalSubsidyStatus_3,
maxResolution:840.1339845678589,
 
                style: style_LocalSubsidyStatus_3,
                popuplayertitle: 'Local Subsidy Status',
                interactive: true,
                title: '<img src="styles/legend/LocalSubsidyStatus_3.png" /> Local Subsidy Status'
            });

lyr_OSMStandard_0.setVisible(true);lyr_NationalSubsidyStatus_1.setVisible(true);lyr_RegionalSubsidyStatus_2.setVisible(true);lyr_LocalSubsidyStatus_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NationalSubsidyStatus_1,lyr_RegionalSubsidyStatus_2,lyr_LocalSubsidyStatus_3];
lyr_NationalSubsidyStatus_1.set('fieldAliases', {'NUTS_ID': 'NUTS_ID', 'LEVL_CODE': 'LEVL_CODE', 'CNTR_CODE': 'CNTR_CODE', 'NAME_LATN': 'NAME_LATN', 'NUTS_NAME': 'NUTS_NAME', 'MOUNT_TYPE': 'MOUNT_TYPE', 'URBN_TYPE': 'URBN_TYPE', 'COAST_TYPE': 'COAST_TYPE', 'national_data_Country_Name': 'national_data_Country_Name', 'national_data_Status': 'national_data_Status', 'national_data_Description': 'national_data_Description', });
lyr_RegionalSubsidyStatus_2.set('fieldAliases', {'NUTS_ID': 'NUTS_ID', 'LEVL_CODE': 'LEVL_CODE', 'CNTR_CODE': 'CNTR_CODE', 'NAME_LATN': 'NAME_LATN', 'NUTS_NAME': 'NUTS_NAME', 'MOUNT_TYPE': 'MOUNT_TYPE', 'URBN_TYPE': 'URBN_TYPE', 'COAST_TYPE': 'COAST_TYPE', 'regional_data_Region_Name': 'regional_data_Region_Name', 'regional_data_Subsidy_Type': 'regional_data_Subsidy_Type', 'regional_data_Subsidy_Details': 'regional_data_Subsidy_Details', 'regional_data_Target_Group': 'regional_data_Target_Group', });
lyr_LocalSubsidyStatus_3.set('fieldAliases', {'Municipality': 'Municipality', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vehicle_Type': 'Vehicle_Type', 'Subsidy_Amount': 'Subsidy_Amount', 'Target_Group': 'Target_Group', });
lyr_NationalSubsidyStatus_1.set('fieldImages', {'NUTS_ID': 'TextEdit', 'LEVL_CODE': 'Range', 'CNTR_CODE': 'TextEdit', 'NAME_LATN': 'TextEdit', 'NUTS_NAME': 'TextEdit', 'MOUNT_TYPE': 'Range', 'URBN_TYPE': 'Range', 'COAST_TYPE': 'Range', 'national_data_Country_Name': 'TextEdit', 'national_data_Status': 'TextEdit', 'national_data_Description': 'TextEdit', });
lyr_RegionalSubsidyStatus_2.set('fieldImages', {'NUTS_ID': 'TextEdit', 'LEVL_CODE': 'Range', 'CNTR_CODE': 'TextEdit', 'NAME_LATN': 'TextEdit', 'NUTS_NAME': 'TextEdit', 'MOUNT_TYPE': 'Range', 'URBN_TYPE': 'Range', 'COAST_TYPE': 'Range', 'regional_data_Region_Name': 'TextEdit', 'regional_data_Subsidy_Type': 'TextEdit', 'regional_data_Subsidy_Details': 'TextEdit', 'regional_data_Target_Group': 'TextEdit', });
lyr_LocalSubsidyStatus_3.set('fieldImages', {'Municipality': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vehicle_Type': 'TextEdit', 'Subsidy_Amount': 'TextEdit', 'Target_Group': 'TextEdit', });
lyr_NationalSubsidyStatus_1.set('fieldLabels', {'NUTS_ID': 'hidden field', 'LEVL_CODE': 'hidden field', 'CNTR_CODE': 'hidden field', 'NAME_LATN': 'hidden field', 'NUTS_NAME': 'hidden field', 'MOUNT_TYPE': 'hidden field', 'URBN_TYPE': 'hidden field', 'COAST_TYPE': 'hidden field', 'national_data_Country_Name': 'inline label - visible with data', 'national_data_Status': 'inline label - visible with data', 'national_data_Description': 'inline label - visible with data', });
lyr_RegionalSubsidyStatus_2.set('fieldLabels', {'NUTS_ID': 'hidden field', 'LEVL_CODE': 'hidden field', 'CNTR_CODE': 'hidden field', 'NAME_LATN': 'hidden field', 'NUTS_NAME': 'hidden field', 'MOUNT_TYPE': 'hidden field', 'URBN_TYPE': 'hidden field', 'COAST_TYPE': 'hidden field', 'regional_data_Region_Name': 'inline label - visible with data', 'regional_data_Subsidy_Type': 'inline label - visible with data', 'regional_data_Subsidy_Details': 'inline label - visible with data', 'regional_data_Target_Group': 'inline label - visible with data', });
lyr_LocalSubsidyStatus_3.set('fieldLabels', {'Municipality': 'inline label - visible with data', 'Region': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Vehicle_Type': 'inline label - visible with data', 'Subsidy_Amount': 'inline label - visible with data', 'Target_Group': 'inline label - visible with data', });
lyr_LocalSubsidyStatus_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});