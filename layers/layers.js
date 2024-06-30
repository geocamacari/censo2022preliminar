var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_3 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriBoundariesandPlaces_4 = new ol.layer.Tile({
            'title': 'Esri Boundaries and Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleTraffic_5 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });
var format_Trecho_Massa_DaguaConder2010_6 = new ol.format.GeoJSON();
var features_Trecho_Massa_DaguaConder2010_6 = format_Trecho_Massa_DaguaConder2010_6.readFeatures(json_Trecho_Massa_DaguaConder2010_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trecho_Massa_DaguaConder2010_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trecho_Massa_DaguaConder2010_6.addFeatures(features_Trecho_Massa_DaguaConder2010_6);
var lyr_Trecho_Massa_DaguaConder2010_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trecho_Massa_DaguaConder2010_6,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_Trecho_Massa_DaguaConder2010_6,
                popuplayertitle: "Trecho_Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Trecho_Massa_DaguaConder2010_6.png" /> Trecho_Massa_Dagua (Conder 2010)'
            });
var format_Massa_DaguaConder2010_7 = new ol.format.GeoJSON();
var features_Massa_DaguaConder2010_7 = format_Massa_DaguaConder2010_7.readFeatures(json_Massa_DaguaConder2010_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Massa_DaguaConder2010_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Massa_DaguaConder2010_7.addFeatures(features_Massa_DaguaConder2010_7);
var lyr_Massa_DaguaConder2010_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Massa_DaguaConder2010_7,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_Massa_DaguaConder2010_7,
                popuplayertitle: "Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Massa_DaguaConder2010_7.png" /> Massa_Dagua (Conder 2010)'
            });
var format_INCRAAssentRuraismaio2021_8 = new ol.format.GeoJSON();
var features_INCRAAssentRuraismaio2021_8 = format_INCRAAssentRuraismaio2021_8.readFeatures(json_INCRAAssentRuraismaio2021_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INCRAAssentRuraismaio2021_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INCRAAssentRuraismaio2021_8.addFeatures(features_INCRAAssentRuraismaio2021_8);
var lyr_INCRAAssentRuraismaio2021_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INCRAAssentRuraismaio2021_8,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_INCRAAssentRuraismaio2021_8,
                popuplayertitle: "INCRA - Assent. Rurais (maio/2021)",
                interactive: true,
                title: '<img src="styles/legend/INCRAAssentRuraismaio2021_8.png" /> INCRA - Assent. Rurais (maio/2021)'
            });
var format_LinhaFrreaFCA_9 = new ol.format.GeoJSON();
var features_LinhaFrreaFCA_9 = format_LinhaFrreaFCA_9.readFeatures(json_LinhaFrreaFCA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaFrreaFCA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaFrreaFCA_9.addFeatures(features_LinhaFrreaFCA_9);
var lyr_LinhaFrreaFCA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaFrreaFCA_9, 
                style: style_LinhaFrreaFCA_9,
                popuplayertitle: "Linha Férrea (FCA)",
                interactive: true,
                title: '<img src="styles/legend/LinhaFrreaFCA_9.png" /> Linha Férrea (FCA)'
            });
var format_EixosRodEstSEINFRABa2021_10 = new ol.format.GeoJSON();
var features_EixosRodEstSEINFRABa2021_10 = format_EixosRodEstSEINFRABa2021_10.readFeatures(json_EixosRodEstSEINFRABa2021_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixosRodEstSEINFRABa2021_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixosRodEstSEINFRABa2021_10.addFeatures(features_EixosRodEstSEINFRABa2021_10);
var lyr_EixosRodEstSEINFRABa2021_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EixosRodEstSEINFRABa2021_10, 
                style: style_EixosRodEstSEINFRABa2021_10,
                popuplayertitle: "Eixos Rod. Est. (SEINFRA-Ba/2021)",
                interactive: true,
                title: '<img src="styles/legend/EixosRodEstSEINFRABa2021_10.png" /> Eixos Rod. Est. (SEINFRA-Ba/2021)'
            });
var format_PassarelasemRodovias_11 = new ol.format.GeoJSON();
var features_PassarelasemRodovias_11 = format_PassarelasemRodovias_11.readFeatures(json_PassarelasemRodovias_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PassarelasemRodovias_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassarelasemRodovias_11.addFeatures(features_PassarelasemRodovias_11);
var lyr_PassarelasemRodovias_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PassarelasemRodovias_11, 
                style: style_PassarelasemRodovias_11,
                popuplayertitle: "Passarelas em Rodovias",
                interactive: true,
                title: '<img src="styles/legend/PassarelasemRodovias_11.png" /> Passarelas em Rodovias'
            });
var format_PontosdeRefernciadiversos2023_12 = new ol.format.GeoJSON();
var features_PontosdeRefernciadiversos2023_12 = format_PontosdeRefernciadiversos2023_12.readFeatures(json_PontosdeRefernciadiversos2023_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeRefernciadiversos2023_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeRefernciadiversos2023_12.addFeatures(features_PontosdeRefernciadiversos2023_12);cluster_PontosdeRefernciadiversos2023_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PontosdeRefernciadiversos2023_12
});
var lyr_PontosdeRefernciadiversos2023_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PontosdeRefernciadiversos2023_12,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_PontosdeRefernciadiversos2023_12,
                popuplayertitle: "Pontos de Referência diversos (2023)",
                interactive: true,
                title: '<img src="styles/legend/PontosdeRefernciadiversos2023_12.png" /> Pontos de Referência diversos (2023)'
            });
var format_Localidadesdiversas2023_13 = new ol.format.GeoJSON();
var features_Localidadesdiversas2023_13 = format_Localidadesdiversas2023_13.readFeatures(json_Localidadesdiversas2023_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdiversas2023_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdiversas2023_13.addFeatures(features_Localidadesdiversas2023_13);
var lyr_Localidadesdiversas2023_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidadesdiversas2023_13,
maxResolution:28.00446615226196,
 minResolution:0.5600893230452393,

                style: style_Localidadesdiversas2023_13,
                popuplayertitle: "Localidades diversas (2023)",
                interactive: true,
                title: '<img src="styles/legend/Localidadesdiversas2023_13.png" /> Localidades diversas (2023)'
            });
var format_SetoresCensitariosRuraisIBGE2024_14 = new ol.format.GeoJSON();
var features_SetoresCensitariosRuraisIBGE2024_14 = format_SetoresCensitariosRuraisIBGE2024_14.readFeatures(json_SetoresCensitariosRuraisIBGE2024_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SetoresCensitariosRuraisIBGE2024_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SetoresCensitariosRuraisIBGE2024_14.addFeatures(features_SetoresCensitariosRuraisIBGE2024_14);
var lyr_SetoresCensitariosRuraisIBGE2024_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SetoresCensitariosRuraisIBGE2024_14,
maxResolution:84.0133984567859,
 minResolution:0.28004466152261964,

                style: style_SetoresCensitariosRuraisIBGE2024_14,
                popuplayertitle: "Setores Censitarios Rurais (IBGE/2024)",
                interactive: true,
                title: '<img src="styles/legend/SetoresCensitariosRuraisIBGE2024_14.png" /> Setores Censitarios Rurais (IBGE/2024)'
            });
var format_SetoresCensitariosUrbanosIBGE2024_15 = new ol.format.GeoJSON();
var features_SetoresCensitariosUrbanosIBGE2024_15 = format_SetoresCensitariosUrbanosIBGE2024_15.readFeatures(json_SetoresCensitariosUrbanosIBGE2024_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SetoresCensitariosUrbanosIBGE2024_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SetoresCensitariosUrbanosIBGE2024_15.addFeatures(features_SetoresCensitariosUrbanosIBGE2024_15);
var lyr_SetoresCensitariosUrbanosIBGE2024_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SetoresCensitariosUrbanosIBGE2024_15,
maxResolution:84.0133984567859,
 minResolution:0.28004466152261964,

                style: style_SetoresCensitariosUrbanosIBGE2024_15,
                popuplayertitle: "Setores Censitarios Urbanos (IBGE/2024)",
                interactive: true,
                title: '<img src="styles/legend/SetoresCensitariosUrbanosIBGE2024_15.png" /> Setores Censitarios Urbanos (IBGE/2024)'
            });
var format_MacroareasPopulacionaisSEDUR2024_16 = new ol.format.GeoJSON();
var features_MacroareasPopulacionaisSEDUR2024_16 = format_MacroareasPopulacionaisSEDUR2024_16.readFeatures(json_MacroareasPopulacionaisSEDUR2024_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MacroareasPopulacionaisSEDUR2024_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacroareasPopulacionaisSEDUR2024_16.addFeatures(features_MacroareasPopulacionaisSEDUR2024_16);
var lyr_MacroareasPopulacionaisSEDUR2024_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacroareasPopulacionaisSEDUR2024_16,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_MacroareasPopulacionaisSEDUR2024_16,
                popuplayertitle: "Macroareas Populacionais (SEDUR/2024)",
                interactive: true,
    title: 'Macroareas Populacionais (SEDUR/2024)<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_0.png" /> Eixo Central<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_1.png" /> Região Abrantes Leste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_2.png" /> Região Abrantes Oeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_3.png" /> Região Monte Gordo Leste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_4.png" /> Região Monte Gordo Oeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_5.png" /> Região Nordeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_6.png" /> Região Noroeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_7.png" /> Região Norte (área industrial)<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_8.png" /> Região Rural 1<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_9.png" /> Região Rural 2<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_10.png" /> Região Rural 3<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_11.png" /> Região Rural 4<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_12.png" /> Região Rural 5<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_13.png" /> Região Rural 6<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_14.png" /> Região Rural 7<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_15.png" /> Região Rural 8<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_16.png" /> Região Sudeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_17.png" /> Região Sudoeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_18.png" /> Região Sul<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_16_19.png" /> <br />'
        });
var format_BairrosurbanosvigentesSEDUR2022_17 = new ol.format.GeoJSON();
var features_BairrosurbanosvigentesSEDUR2022_17 = format_BairrosurbanosvigentesSEDUR2022_17.readFeatures(json_BairrosurbanosvigentesSEDUR2022_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BairrosurbanosvigentesSEDUR2022_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BairrosurbanosvigentesSEDUR2022_17.addFeatures(features_BairrosurbanosvigentesSEDUR2022_17);
var lyr_BairrosurbanosvigentesSEDUR2022_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BairrosurbanosvigentesSEDUR2022_17,
maxResolution:84.0133984567859,
 minResolution:1.1201786460904786,

                style: style_BairrosurbanosvigentesSEDUR2022_17,
                popuplayertitle: "Bairros urbanos vigentes (SEDUR/2022)",
                interactive: true,
                title: '<img src="styles/legend/BairrosurbanosvigentesSEDUR2022_17.png" /> Bairros urbanos vigentes (SEDUR/2022)'
            });
var format_DistritosMunicipais2020_18 = new ol.format.GeoJSON();
var features_DistritosMunicipais2020_18 = format_DistritosMunicipais2020_18.readFeatures(json_DistritosMunicipais2020_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosMunicipais2020_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosMunicipais2020_18.addFeatures(features_DistritosMunicipais2020_18);
var lyr_DistritosMunicipais2020_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosMunicipais2020_18,
maxResolution:84.0133984567859,
 minResolution:14.00223307613098,

                style: style_DistritosMunicipais2020_18,
                popuplayertitle: "Distritos Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/DistritosMunicipais2020_18.png" /> Distritos Municipais (2020)'
            });
var format_LimitesMunicipais2020_19 = new ol.format.GeoJSON();
var features_LimitesMunicipais2020_19 = format_LimitesMunicipais2020_19.readFeatures(json_LimitesMunicipais2020_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicipais2020_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicipais2020_19.addFeatures(features_LimitesMunicipais2020_19);
var lyr_LimitesMunicipais2020_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicipais2020_19, 
                style: style_LimitesMunicipais2020_19,
                popuplayertitle: "Limites Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicipais2020_19.png" /> Limites Municipais (2020)'
            });
var format_LimitesMunicpiosRMS2020_20 = new ol.format.GeoJSON();
var features_LimitesMunicpiosRMS2020_20 = format_LimitesMunicpiosRMS2020_20.readFeatures(json_LimitesMunicpiosRMS2020_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicpiosRMS2020_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicpiosRMS2020_20.addFeatures(features_LimitesMunicpiosRMS2020_20);
var lyr_LimitesMunicpiosRMS2020_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicpiosRMS2020_20, 
                style: style_LimitesMunicpiosRMS2020_20,
                popuplayertitle: "Limites Municípios/RMS (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicpiosRMS2020_20.png" /> Limites Municípios/RMS (2020)'
            });

lyr_WazeWorld_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_GoogleLabels_3.setVisible(false);lyr_EsriBoundariesandPlaces_4.setVisible(true);lyr_GoogleTraffic_5.setVisible(false);lyr_Trecho_Massa_DaguaConder2010_6.setVisible(true);lyr_Massa_DaguaConder2010_7.setVisible(true);lyr_INCRAAssentRuraismaio2021_8.setVisible(true);lyr_LinhaFrreaFCA_9.setVisible(true);lyr_EixosRodEstSEINFRABa2021_10.setVisible(true);lyr_PassarelasemRodovias_11.setVisible(true);lyr_PontosdeRefernciadiversos2023_12.setVisible(false);lyr_Localidadesdiversas2023_13.setVisible(true);lyr_SetoresCensitariosRuraisIBGE2024_14.setVisible(false);lyr_SetoresCensitariosUrbanosIBGE2024_15.setVisible(false);lyr_MacroareasPopulacionaisSEDUR2024_16.setVisible(true);lyr_BairrosurbanosvigentesSEDUR2022_17.setVisible(false);lyr_DistritosMunicipais2020_18.setVisible(false);lyr_LimitesMunicipais2020_19.setVisible(false);lyr_LimitesMunicpiosRMS2020_20.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_OSMStandard_1,lyr_GoogleSatellite_2,lyr_GoogleLabels_3,lyr_EsriBoundariesandPlaces_4,lyr_GoogleTraffic_5,lyr_Trecho_Massa_DaguaConder2010_6,lyr_Massa_DaguaConder2010_7,lyr_INCRAAssentRuraismaio2021_8,lyr_LinhaFrreaFCA_9,lyr_EixosRodEstSEINFRABa2021_10,lyr_PassarelasemRodovias_11,lyr_PontosdeRefernciadiversos2023_12,lyr_Localidadesdiversas2023_13,lyr_SetoresCensitariosRuraisIBGE2024_14,lyr_SetoresCensitariosUrbanosIBGE2024_15,lyr_MacroareasPopulacionaisSEDUR2024_16,lyr_BairrosurbanosvigentesSEDUR2022_17,lyr_DistritosMunicipais2020_18,lyr_LimitesMunicipais2020_19,lyr_LimitesMunicpiosRMS2020_20];
lyr_Trecho_Massa_DaguaConder2010_6.set('fieldAliases', {'FID_HID_Tr': 'FID_HID_Tr', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'tipoTrecho': 'tipoTrecho', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Massa_DaguaConder2010_7.set('fieldAliases', {'FID_HID_Ma': 'FID_HID_Ma', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'tipoMassaD': 'tipoMassaD', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_INCRAAssentRuraismaio2021_8.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', 'origem': 'origem', });
lyr_LinhaFrreaFCA_9.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'nomeabrev': 'nomeabrev', 'geometriaa': 'geometriaa', 'codtrechof': 'codtrechof', 'posicaorel': 'posicaorel', 'tipotrecho': 'tipotrecho', 'bitola': 'bitola', 'eletrifica': 'eletrifica', 'nrlinhas': 'nrlinhas', 'emarruamen': 'emarruamen', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'cargasupor': 'cargasupor', });
lyr_EixosRodEstSEINFRABa2021_10.set('fieldAliases', {'Name': 'Name', 'fid': 'fid', 'Codigo SRE': 'Codigo SRE', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Local Iní': 'Local Iní', 'Km Inicial': 'Km Inicial', 'Km Final': 'Km Final', 'Extensão': 'Extensão', 'Situação': 'Situação', 'Descriçã': 'Descriçã', 'Tipo de Re': 'Tipo de Re', 'Descriç_1': 'Descriç_1', 'Coincide_3': 'Coincide_3', 'Identifica': 'Identifica', 'Extensã_1': 'Extensã_1', 'Status': 'Status', });
lyr_PassarelasemRodovias_11.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Numero': 'Numero', 'Rodovia': 'Rodovia', 'Gestao': 'Gestao', 'Bairro': 'Bairro', 'Distrito': 'Distrito', });
lyr_PontosdeRefernciadiversos2023_12.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_Localidadesdiversas2023_13.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_SetoresCensitariosRuraisIBGE2024_14.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'perímetro': 'perímetro', 'área_Km²': 'área_Km²', 'CD_SETOR_2': 'CD_SETOR_2', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'area_ha': 'area_ha', 'Dens_ha': 'Dens_ha', });
lyr_SetoresCensitariosUrbanosIBGE2024_15.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'perímetro': 'perímetro', 'área_Km²': 'área_Km²', 'CD_SETOR_2': 'CD_SETOR_2', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'area_ha': 'area_ha', 'Dens_ha': 'Dens_ha', 'v3_v7': 'v3_v7', });
lyr_MacroareasPopulacionaisSEDUR2024_16.set('fieldAliases', {'perímetro': 'perímetro', 'área_Km²': 'área_Km²', 'v0001': 'v0001', 'v0002': 'v0002', 'area_ha': 'area_ha', 'Dens_ha': 'Dens_ha', 'id': 'id', 'layer': 'layer', 'Dens_km2': 'Dens_km2', 'fonte': 'fonte', 'org.': 'org.', 'Med_morado': 'Med_morado', });
lyr_BairrosurbanosvigentesSEDUR2022_17.set('fieldAliases', {'id': 'id', 'nm_bairro': 'nm_bairro', 'cod_bairro': 'cod_bairro', 'distrito': 'distrito', 'situação': 'situação', 'bairros': 'bairros', 'rotulos': 'rotulos', 'CNEFE 2022': 'CNEFE 2022', 'Hab_Dom': 'Hab_Dom', 'PopEst_22': 'PopEst_22', 'area_Ha': 'area_Ha', 'area_Km2': 'area_Km2', 'Perim_km': 'Perim_km', 'Dens_Ha': 'Dens_Ha', 'Dens_Km2': 'Dens_Km2', });
lyr_DistritosMunicipais2020_18.set('fieldAliases', {'id': 'id', 'cd_mun': 'cd_mun', 'cd_dist': 'cd_dist', 'nm_dist': 'nm_dist', 'Perímetro': 'Perímetro', 'Área': 'Área', 'percentual': 'percentual', 'cg_majorit': 'cg_majorit', 'cb_heigh': 'cb_heigh', });
lyr_LimitesMunicipais2020_19.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'Est_P_2021': 'Est_P_2021', 'Dens_2021': 'Dens_2021', 'Pop_2010': 'Pop_2010', 'Dom_2010': 'Dom_2010', 'Dens_2010': 'Dens_2010', 'IDH-m_2010': 'IDH-m_2010', 'cg_majorit': 'cg_majorit', 'cg_major_1': 'cg_major_1', 'cg_major_2': 'cg_major_2', 'cg_major_3': 'cg_major_3', 'cb_heigh': 'cb_heigh', 'cg_major_4': 'cg_major_4', });
lyr_LimitesMunicpiosRMS2020_20.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Trecho_Massa_DaguaConder2010_6.set('fieldImages', {'FID_HID_Tr': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'tipoTrecho': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Massa_DaguaConder2010_7.set('fieldImages', {'FID_HID_Ma': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'tipoMassaD': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_INCRAAssentRuraismaio2021_8.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', 'origem': 'TextEdit', });
lyr_LinhaFrreaFCA_9.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'nomeabrev': 'TextEdit', 'geometriaa': 'TextEdit', 'codtrechof': 'TextEdit', 'posicaorel': 'TextEdit', 'tipotrecho': 'TextEdit', 'bitola': 'TextEdit', 'eletrifica': 'TextEdit', 'nrlinhas': 'TextEdit', 'emarruamen': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'cargasupor': 'TextEdit', });
lyr_EixosRodEstSEINFRABa2021_10.set('fieldImages', {'Name': 'TextEdit', 'fid': 'TextEdit', 'Codigo SRE': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Local Iní': 'TextEdit', 'Km Inicial': 'TextEdit', 'Km Final': 'TextEdit', 'Extensão': 'TextEdit', 'Situação': 'TextEdit', 'Descriçã': 'TextEdit', 'Tipo de Re': 'TextEdit', 'Descriç_1': 'TextEdit', 'Coincide_3': 'TextEdit', 'Identifica': 'TextEdit', 'Extensã_1': 'TextEdit', 'Status': 'TextEdit', });
lyr_PassarelasemRodovias_11.set('fieldImages', {'id': 'TextEdit', 'Layer': 'TextEdit', 'Numero': 'Range', 'Rodovia': 'TextEdit', 'Gestao': 'TextEdit', 'Bairro': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_PontosdeRefernciadiversos2023_12.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_Localidadesdiversas2023_13.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_SetoresCensitariosRuraisIBGE2024_14.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'perímetro': 'TextEdit', 'área_Km²': 'TextEdit', 'CD_SETOR_2': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'area_ha': 'TextEdit', 'Dens_ha': 'TextEdit', });
lyr_SetoresCensitariosUrbanosIBGE2024_15.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'perímetro': 'TextEdit', 'área_Km²': 'TextEdit', 'CD_SETOR_2': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'area_ha': 'TextEdit', 'Dens_ha': 'TextEdit', 'v3_v7': 'Range', });
lyr_MacroareasPopulacionaisSEDUR2024_16.set('fieldImages', {'perímetro': 'TextEdit', 'área_Km²': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'area_ha': 'TextEdit', 'Dens_ha': 'TextEdit', 'id': 'Range', 'layer': 'TextEdit', 'Dens_km2': 'TextEdit', 'fonte': 'TextEdit', 'org.': 'TextEdit', 'Med_morado': 'TextEdit', });
lyr_BairrosurbanosvigentesSEDUR2022_17.set('fieldImages', {'id': 'TextEdit', 'nm_bairro': 'TextEdit', 'cod_bairro': 'TextEdit', 'distrito': 'TextEdit', 'situação': 'TextEdit', 'bairros': 'TextEdit', 'rotulos': 'TextEdit', 'CNEFE 2022': 'TextEdit', 'Hab_Dom': 'TextEdit', 'PopEst_22': 'TextEdit', 'area_Ha': 'TextEdit', 'area_Km2': 'TextEdit', 'Perim_km': 'TextEdit', 'Dens_Ha': 'TextEdit', 'Dens_Km2': 'TextEdit', });
lyr_DistritosMunicipais2020_18.set('fieldImages', {'id': 'TextEdit', 'cd_mun': 'TextEdit', 'cd_dist': 'TextEdit', 'nm_dist': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', 'percentual': 'TextEdit', 'cg_majorit': 'TextEdit', 'cb_heigh': 'TextEdit', });
lyr_LimitesMunicipais2020_19.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', 'AREA_KM2': '', 'Est_P_2021': '', 'Dens_2021': '', 'Pop_2010': '', 'Dom_2010': '', 'Dens_2010': '', 'IDH-m_2010': '', 'cg_majorit': '', 'cg_major_1': '', 'cg_major_2': '', 'cg_major_3': '', 'cb_heigh': '', 'cg_major_4': '', });
lyr_LimitesMunicpiosRMS2020_20.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Trecho_Massa_DaguaConder2010_6.set('fieldLabels', {'FID_HID_Tr': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'geometriaA': 'inline label - visible with data', 'regime': 'inline label - visible with data', 'nomeAbrev': 'inline label - visible with data', 'ID_Trecho_': 'inline label - visible with data', 'tipoTrecho': 'inline label - visible with data', 'salinidade': 'inline label - visible with data', 'FID_Articu': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'MI': 'inline label - visible with data', 'Escala': 'inline label - visible with data', 'Nome_Carta': 'inline label - visible with data', 'Ano_Aquisi': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'BLOCO': 'inline label - visible with data', 'Equidistan': 'inline label - visible with data', 'Ano_Aqui_1': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Ar_1': 'inline label - visible with data', 'SHAPE_Le_2': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_Massa_DaguaConder2010_7.set('fieldLabels', {'FID_HID_Ma': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'geometriaA': 'inline label - visible with data', 'regime': 'inline label - visible with data', 'nomeAbrev': 'inline label - visible with data', 'tipoMassaD': 'inline label - visible with data', 'salinidade': 'inline label - visible with data', 'FID_Articu': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'MI': 'inline label - visible with data', 'Escala': 'inline label - visible with data', 'Nome_Carta': 'inline label - visible with data', 'Ano_Aquisi': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'BLOCO': 'inline label - visible with data', 'Equidistan': 'inline label - visible with data', 'Ano_Aqui_1': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Ar_1': 'inline label - visible with data', 'Shape_Le_2': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_INCRAAssentRuraismaio2021_8.set('fieldLabels', {'cd_sipra': 'inline label - visible with data', 'uf': 'inline label - visible with data', 'nome_proje': 'inline label - visible with data', 'municipio': 'inline label - visible with data', 'area_hecta': 'inline label - visible with data', 'capacidade': 'inline label - visible with data', 'num_famili': 'inline label - visible with data', 'fase': 'inline label - visible with data', 'data_de_cr': 'inline label - visible with data', 'forma_obte': 'inline label - visible with data', 'data_obten': 'inline label - visible with data', 'area_calc_': 'inline label - visible with data', 'sr': 'inline label - visible with data', 'descricao_': 'inline label - visible with data', 'origem': 'inline label - visible with data', });
lyr_LinhaFrreaFCA_9.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'nomeabrev': 'inline label - visible with data', 'geometriaa': 'inline label - visible with data', 'codtrechof': 'inline label - visible with data', 'posicaorel': 'inline label - visible with data', 'tipotrecho': 'inline label - visible with data', 'bitola': 'inline label - visible with data', 'eletrifica': 'inline label - visible with data', 'nrlinhas': 'inline label - visible with data', 'emarruamen': 'inline label - visible with data', 'jurisdicao': 'inline label - visible with data', 'administra': 'inline label - visible with data', 'concession': 'inline label - visible with data', 'operaciona': 'inline label - visible with data', 'situacaofi': 'inline label - visible with data', 'cargasupor': 'inline label - visible with data', });
lyr_EixosRodEstSEINFRABa2021_10.set('fieldLabels', {'Name': 'inline label - visible with data', 'fid': 'inline label - visible with data', 'Codigo SRE': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Local Iní': 'inline label - visible with data', 'Km Inicial': 'inline label - visible with data', 'Km Final': 'inline label - visible with data', 'Extensão': 'inline label - visible with data', 'Situação': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'Tipo de Re': 'inline label - visible with data', 'Descriç_1': 'inline label - visible with data', 'Coincide_3': 'inline label - visible with data', 'Identifica': 'inline label - visible with data', 'Extensã_1': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_PassarelasemRodovias_11.set('fieldLabels', {'id': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Numero': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Gestao': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', });
lyr_PontosdeRefernciadiversos2023_12.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'base': 'inline label - visible with data', 'fonte': 'inline label - visible with data', });
lyr_Localidadesdiversas2023_13.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'base': 'inline label - visible with data', 'fonte': 'inline label - visible with data', });
lyr_SetoresCensitariosRuraisIBGE2024_14.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'inline label - visible with data', 'NM_DIST': 'inline label - visible with data', 'perímetro': 'inline label - visible with data', 'área_Km²': 'inline label - visible with data', 'CD_SETOR_2': 'inline label - visible with data', 'v0001': 'inline label - visible with data', 'v0002': 'inline label - visible with data', 'v0003': 'inline label - visible with data', 'v0004': 'inline label - visible with data', 'v0005': 'inline label - visible with data', 'v0006': 'inline label - visible with data', 'v0007': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'Dens_ha': 'inline label - visible with data', });
lyr_SetoresCensitariosUrbanosIBGE2024_15.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'inline label - visible with data', 'NM_DIST': 'inline label - visible with data', 'perímetro': 'inline label - visible with data', 'área_Km²': 'inline label - visible with data', 'CD_SETOR_2': 'inline label - visible with data', 'v0001': 'inline label - visible with data', 'v0002': 'inline label - visible with data', 'v0003': 'inline label - visible with data', 'v0004': 'inline label - visible with data', 'v0005': 'inline label - visible with data', 'v0006': 'inline label - visible with data', 'v0007': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'Dens_ha': 'inline label - visible with data', 'v3_v7': 'inline label - visible with data', });
lyr_MacroareasPopulacionaisSEDUR2024_16.set('fieldLabels', {'perímetro': 'inline label - visible with data', 'área_Km²': 'inline label - visible with data', 'v0001': 'inline label - visible with data', 'v0002': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'Dens_ha': 'inline label - visible with data', 'id': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Dens_km2': 'inline label - visible with data', 'fonte': 'inline label - visible with data', 'org.': 'inline label - visible with data', 'Med_morado': 'inline label - visible with data', });
lyr_BairrosurbanosvigentesSEDUR2022_17.set('fieldLabels', {'id': 'inline label - visible with data', 'nm_bairro': 'inline label - visible with data', 'cod_bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'situação': 'inline label - visible with data', 'bairros': 'inline label - visible with data', 'rotulos': 'inline label - visible with data', 'CNEFE 2022': 'inline label - visible with data', 'Hab_Dom': 'inline label - visible with data', 'PopEst_22': 'inline label - visible with data', 'area_Ha': 'inline label - visible with data', 'area_Km2': 'inline label - visible with data', 'Perim_km': 'inline label - visible with data', 'Dens_Ha': 'inline label - visible with data', 'Dens_Km2': 'inline label - visible with data', });
lyr_DistritosMunicipais2020_18.set('fieldLabels', {'id': 'inline label - visible with data', 'cd_mun': 'inline label - visible with data', 'cd_dist': 'inline label - visible with data', 'nm_dist': 'inline label - visible with data', 'Perímetro': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'percentual': 'inline label - visible with data', 'cg_majorit': 'inline label - visible with data', 'cb_heigh': 'inline label - visible with data', });
lyr_LimitesMunicipais2020_19.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'Est_P_2021': 'inline label - visible with data', 'Dens_2021': 'inline label - visible with data', 'Pop_2010': 'inline label - visible with data', 'Dom_2010': 'inline label - visible with data', 'Dens_2010': 'inline label - visible with data', 'IDH-m_2010': 'inline label - visible with data', 'cg_majorit': 'inline label - visible with data', 'cg_major_1': 'inline label - visible with data', 'cg_major_2': 'inline label - visible with data', 'cg_major_3': 'inline label - visible with data', 'cb_heigh': 'inline label - visible with data', 'cg_major_4': 'inline label - visible with data', });
lyr_LimitesMunicpiosRMS2020_20.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_LimitesMunicpiosRMS2020_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});