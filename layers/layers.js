var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_0.png" /> ASEMROWO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_1.png" /> BENOWO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_2.png" /> BUBUTAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_3.png" /> CERME<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_4.png" /> DRIYOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_5.png" /> DUKUHPAKIS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_6.png" /> GAYUNGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_7.png" /> GENTENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_8.png" /> GUBENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_9.png" /> GUNUNGANYAR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_10.png" /> JAMBANGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_11.png" /> KARANGPILANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_12.png" /> KEBOMAS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_13.png" /> KENJERAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_14.png" /> KREMBANGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_15.png" /> LAKARSANTRI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_16.png" /> MENGANTI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_17.png" /> MULYOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_18.png" /> PABEANCANTIKAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_19.png" /> RUNGKUT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_20.png" /> SAWAHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_21.png" /> SEMAMPIR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_22.png" /> SIMOKERTO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_23.png" /> SUKOLILO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_24.png" /> SUKOMANUNGGAL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_25.png" /> TAMAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_26.png" /> TAMBAKSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_27.png" /> TANDES<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_28.png" /> TEGALSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_29.png" /> TENGGILISMEJOYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_30.png" /> WARU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_31.png" /> WIYUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_32.png" /> WONOCOLO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_33.png" /> WONOKROMO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_34.png" /> <br />' });
var format_AR_CurahHujan_1 = new ol.format.GeoJSON();
var features_AR_CurahHujan_1 = format_AR_CurahHujan_1.readFeatures(json_AR_CurahHujan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_CurahHujan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_CurahHujan_1.addFeatures(features_AR_CurahHujan_1);
var lyr_AR_CurahHujan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_CurahHujan_1, 
                style: style_AR_CurahHujan_1,
                popuplayertitle: 'AR_CurahHujan',
                interactive: true,
    title: 'AR_CurahHujan<br />\
    <img src="styles/legend/AR_CurahHujan_1_0.png" /> Rendah<br />' });
var format_AR_Sungai_2 = new ol.format.GeoJSON();
var features_AR_Sungai_2 = format_AR_Sungai_2.readFeatures(json_AR_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_Sungai_2.addFeatures(features_AR_Sungai_2);
var lyr_AR_Sungai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_Sungai_2, 
                style: style_AR_Sungai_2,
                popuplayertitle: 'AR_Sungai',
                interactive: true,
    title: 'AR_Sungai<br />\
    <img src="styles/legend/AR_Sungai_2_0.png" /> Aman<br />\
    <img src="styles/legend/AR_Sungai_2_1.png" /> Agak Rawan<br />\
    <img src="styles/legend/AR_Sungai_2_2.png" /> Cukup Rawan<br />\
    <img src="styles/legend/AR_Sungai_2_3.png" /> Rawan<br />\
    <img src="styles/legend/AR_Sungai_2_4.png" /> Sangat Rawan<br />' });
var format_AR_Landuse_3 = new ol.format.GeoJSON();
var features_AR_Landuse_3 = format_AR_Landuse_3.readFeatures(json_AR_Landuse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_Landuse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_Landuse_3.addFeatures(features_AR_Landuse_3);
var lyr_AR_Landuse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_Landuse_3, 
                style: style_AR_Landuse_3,
                popuplayertitle: 'AR_Landuse',
                interactive: true,
    title: 'AR_Landuse<br />\
    <img src="styles/legend/AR_Landuse_3_0.png" /> Lahan Kosong<br />\
    <img src="styles/legend/AR_Landuse_3_1.png" /> Permukiman<br />\
    <img src="styles/legend/AR_Landuse_3_2.png" /> Sawah/Rawa<br />\
    <img src="styles/legend/AR_Landuse_3_3.png" /> Vegetasi<br />' });
var format_AR_JenisTanah_4 = new ol.format.GeoJSON();
var features_AR_JenisTanah_4 = format_AR_JenisTanah_4.readFeatures(json_AR_JenisTanah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_JenisTanah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_JenisTanah_4.addFeatures(features_AR_JenisTanah_4);
var lyr_AR_JenisTanah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_JenisTanah_4, 
                style: style_AR_JenisTanah_4,
                popuplayertitle: 'AR_JenisTanah',
                interactive: true,
    title: 'AR_JenisTanah<br />\
    <img src="styles/legend/AR_JenisTanah_4_0.png" /> Aluvial<br />\
    <img src="styles/legend/AR_JenisTanah_4_1.png" /> Grumosol<br />\
    <img src="styles/legend/AR_JenisTanah_4_2.png" /> Hidromorf<br />\
    <img src="styles/legend/AR_JenisTanah_4_3.png" /> Kelabu<br />' });
var format_AR_KemiringanLereng_5 = new ol.format.GeoJSON();
var features_AR_KemiringanLereng_5 = format_AR_KemiringanLereng_5.readFeatures(json_AR_KemiringanLereng_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_KemiringanLereng_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_KemiringanLereng_5.addFeatures(features_AR_KemiringanLereng_5);
var lyr_AR_KemiringanLereng_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_KemiringanLereng_5, 
                style: style_AR_KemiringanLereng_5,
                popuplayertitle: 'AR_KemiringanLereng',
                interactive: true,
    title: 'AR_KemiringanLereng<br />\
    <img src="styles/legend/AR_KemiringanLereng_5_0.png" /> 0 - 8%<br />\
    <img src="styles/legend/AR_KemiringanLereng_5_1.png" /> 8 - 15%<br />\
    <img src="styles/legend/AR_KemiringanLereng_5_2.png" /> 15 - 25%<br />\
    <img src="styles/legend/AR_KemiringanLereng_5_3.png" /> 25 - 40%<br />\
    <img src="styles/legend/AR_KemiringanLereng_5_4.png" /> >40%<br />' });
var format_AR_RawanBanjir_6 = new ol.format.GeoJSON();
var features_AR_RawanBanjir_6 = format_AR_RawanBanjir_6.readFeatures(json_AR_RawanBanjir_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_RawanBanjir_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_RawanBanjir_6.addFeatures(features_AR_RawanBanjir_6);
var lyr_AR_RawanBanjir_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_RawanBanjir_6, 
                style: style_AR_RawanBanjir_6,
                popuplayertitle: 'AR_RawanBanjir',
                interactive: true,
    title: 'AR_RawanBanjir<br />\
    <img src="styles/legend/AR_RawanBanjir_6_0.png" /> Sangat Rawan<br />\
    <img src="styles/legend/AR_RawanBanjir_6_1.png" /> Rawan<br />\
    <img src="styles/legend/AR_RawanBanjir_6_2.png" /> Tidak Rawan<br />' });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_AR_CurahHujan_1.setVisible(true);lyr_AR_Sungai_2.setVisible(true);lyr_AR_Landuse_3.setVisible(true);lyr_AR_JenisTanah_4.setVisible(true);lyr_AR_KemiringanLereng_5.setVisible(true);lyr_AR_RawanBanjir_6.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0,lyr_AR_CurahHujan_1,lyr_AR_Sungai_2,lyr_AR_Landuse_3,lyr_AR_JenisTanah_4,lyr_AR_KemiringanLereng_5,lyr_AR_RawanBanjir_6];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AR_CurahHujan_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_AR_Sungai_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_AR_Landuse_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_AR_JenisTanah_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Jenis_Tana': 'Jenis_Tana', });
lyr_AR_KemiringanLereng_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_AR_RawanBanjir_6.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'keterangan': 'keterangan', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AR_CurahHujan_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AR_Sungai_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AR_Landuse_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AR_JenisTanah_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Jenis_Tana': 'TextEdit', });
lyr_AR_KemiringanLereng_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AR_RawanBanjir_6.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'header label - always visible', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_AR_CurahHujan_1.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Keterangan': 'header label - always visible', });
lyr_AR_Sungai_2.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Keterangan': 'header label - always visible', });
lyr_AR_Landuse_3.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Keterangan': 'header label - always visible', });
lyr_AR_JenisTanah_4.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Jenis_Tana': 'header label - always visible', });
lyr_AR_KemiringanLereng_5.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Keterangan': 'header label - always visible', });
lyr_AR_RawanBanjir_6.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'keterangan': 'header label - always visible', });
lyr_AR_RawanBanjir_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});