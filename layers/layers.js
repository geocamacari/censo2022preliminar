var wms_layers = [];

var lyr_RMS_1998ConderBa_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.conder.ba.gov.br/arcgis/services/MOSAICO/Salvador_1998/ImageServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "RMS_1998 (Conder-Ba)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RMS_1998ConderBa_0, 1]);
var lyr_SalvadorCamaari_1992ConderBa_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.conder.ba.gov.br/arcgis/services/MOSAICO/Salvador_1992/ImageServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Salvador/Camaçari_1992 (Conder-Ba)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SalvadorCamaari_1992ConderBa_1, 1]);
var lyr_Ortofoto2017PMC_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2017 (PMC)",
                            opacity: 1.000000,
                            
maxResolution:84.0133984567859,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_Ortofoto2017PMC_2, 1]);
var lyr_Ortofoto2022PMC_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2022 (PMC)",
                            opacity: 1.000000,
                            
maxResolution:70.0111653806549,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_Ortofoto2022PMC_3, 1]);

        var lyr_GoogleSatellite_4 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WazeWorld_5 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_6 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_BDGExSEIBa25k_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bdgex.eb.mil.br/mapcache",
    attributions: ' ',
                              params: {
                                "LAYERS": "ctm25",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "BDGEx / SEI-Ba 25k",
                            opacity: 0.700000,
                            
maxResolution:84.0133984567859,

                            minResolution:0.5600893230452393,

                          });
              wms_layers.push([lyr_BDGExSEIBa25k_7, 1]);
var lyr_MalhadeLotesGeomais_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "lote_inscricao_geometria",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Malha de Lotes (Geomais)",
                            opacity: 0.500000,
                            
maxResolution:70.0111653806549,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_MalhadeLotesGeomais_8, 1]);
var lyr_UnidadesImobiliriasGeomais_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "unidade_inscricao_geometria",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Unidades Imobiliárias (Geomais)",
                            opacity: 0.500000,
                            
maxResolution:70.0111653806549,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_UnidadesImobiliriasGeomais_9, 1]);
var lyr_Curvas_de_nivel_intermediariaGeomais_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "st_curvas_de_nivel_intermediaria",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Curvas_de_nivel_intermediaria (Geomais)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curvas_de_nivel_intermediariaGeomais_10, 1]);
var lyr_Curvas_de_nivel_mestraGeomais_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "st_curvas_de_nivel_mestra",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Curvas_de_nivel_mestra (Geomais)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curvas_de_nivel_mestraGeomais_11, 1]);

        var lyr_GoogleTraffic_12 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_13 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriBoundariesandPlaces_14 = new ol.layer.Tile({
            'title': 'Esri Boundaries and Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_reasdeQuilombolasInemaINCRA_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.inema.ba.gov.br/Vetor_Recursos_Ambientais/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "quilomb_incra_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Áreas de Quilombolas (Inema/INCRA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_reasdeQuilombolasInemaINCRA_15, 1]);
var lyr_ImvelRuralLimitesInemaINCRA_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.inema.ba.gov.br/wms?version%3D1.1.1%26layers%3DVetor_Recursos_Ambientais:uc_inema_2023%26transparent%3Dtrue%26tiled%3Dtrue",
    attributions: ' ',
                              params: {
                                "LAYERS": "Vetor_Recortes_Tematicos:cefir_imovel_rural_limite_inema",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Imóvel Rural - Limites (Inema/INCRA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ImvelRuralLimitesInemaINCRA_16, 1]);
var lyr_LimitesdeAssentamentosInemaINCRA_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.inema.ba.gov.br/wms?version%3D1.1.1%26layers%3DVetor_Recursos_Ambientais:uc_inema_2023%26transparent%3Dtrue%26tiled%3Dtrue",
    attributions: ' ',
                              params: {
                                "LAYERS": "Vetor_Recortes_Tematicos:cefir_assentamento_limite_inema",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Limites de Assentamentos (Inema/INCRA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LimitesdeAssentamentosInemaINCRA_17, 1]);
var lyr_ProcessosminerriosativosANM_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geo.anm.gov.br/arcgis/services/SIGMINE/dados_anm/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Processos minerários ativos (ANM)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ProcessosminerriosativosANM_18, 1]);
var format_reasmidasVeredasPMSBCamaari_19 = new ol.format.GeoJSON();
var features_reasmidasVeredasPMSBCamaari_19 = format_reasmidasVeredasPMSBCamaari_19.readFeatures(json_reasmidasVeredasPMSBCamaari_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasmidasVeredasPMSBCamaari_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasmidasVeredasPMSBCamaari_19.addFeatures(features_reasmidasVeredasPMSBCamaari_19);
var lyr_reasmidasVeredasPMSBCamaari_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasmidasVeredasPMSBCamaari_19,
maxResolution:56.00893230452392,
 minResolution:0.5600893230452393,

                style: style_reasmidasVeredasPMSBCamaari_19,
                popuplayertitle: "Áreas Úmidas/Veredas (PMSB - Camaçari)",
                interactive: true,
                title: '<img src="styles/legend/reasmidasVeredasPMSBCamaari_19.png" /> Áreas Úmidas/Veredas (PMSB - Camaçari)'
            });
var format_RiosIntermitentesPMSBeConder2010_20 = new ol.format.GeoJSON();
var features_RiosIntermitentesPMSBeConder2010_20 = format_RiosIntermitentesPMSBeConder2010_20.readFeatures(json_RiosIntermitentesPMSBeConder2010_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosIntermitentesPMSBeConder2010_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosIntermitentesPMSBeConder2010_20.addFeatures(features_RiosIntermitentesPMSBeConder2010_20);
var lyr_RiosIntermitentesPMSBeConder2010_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosIntermitentesPMSBeConder2010_20,
maxResolution:56.00893230452392,
 minResolution:0.5600893230452393,

                style: style_RiosIntermitentesPMSBeConder2010_20,
                popuplayertitle: "Rios Intermitentes (PMSB e Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/RiosIntermitentesPMSBeConder2010_20.png" /> Rios Intermitentes (PMSB e Conder 2010)'
            });
var format_RiosPerenesPMSBeConder2010_21 = new ol.format.GeoJSON();
var features_RiosPerenesPMSBeConder2010_21 = format_RiosPerenesPMSBeConder2010_21.readFeatures(json_RiosPerenesPMSBeConder2010_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosPerenesPMSBeConder2010_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosPerenesPMSBeConder2010_21.addFeatures(features_RiosPerenesPMSBeConder2010_21);
var lyr_RiosPerenesPMSBeConder2010_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosPerenesPMSBeConder2010_21,
maxResolution:56.00893230452392,
 minResolution:0.5600893230452393,

                style: style_RiosPerenesPMSBeConder2010_21,
                popuplayertitle: "Rios Perenes (PMSB e Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/RiosPerenesPMSBeConder2010_21.png" /> Rios Perenes (PMSB e Conder 2010)'
            });
var format_RiosPerenesSEIBa25k_22 = new ol.format.GeoJSON();
var features_RiosPerenesSEIBa25k_22 = format_RiosPerenesSEIBa25k_22.readFeatures(json_RiosPerenesSEIBa25k_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosPerenesSEIBa25k_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosPerenesSEIBa25k_22.addFeatures(features_RiosPerenesSEIBa25k_22);
var lyr_RiosPerenesSEIBa25k_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosPerenesSEIBa25k_22,
maxResolution:56.00893230452392,
 minResolution:0.5600893230452393,

                style: style_RiosPerenesSEIBa25k_22,
                popuplayertitle: "Rios Perenes (SEI-Ba, 25k)",
                interactive: true,
                title: '<img src="styles/legend/RiosPerenesSEIBa25k_22.png" /> Rios Perenes (SEI-Ba, 25k)'
            });
var format_Trecho_Massa_DaguaConder2010_23 = new ol.format.GeoJSON();
var features_Trecho_Massa_DaguaConder2010_23 = format_Trecho_Massa_DaguaConder2010_23.readFeatures(json_Trecho_Massa_DaguaConder2010_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trecho_Massa_DaguaConder2010_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trecho_Massa_DaguaConder2010_23.addFeatures(features_Trecho_Massa_DaguaConder2010_23);
var lyr_Trecho_Massa_DaguaConder2010_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trecho_Massa_DaguaConder2010_23,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_Trecho_Massa_DaguaConder2010_23,
                popuplayertitle: "Trecho_Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Trecho_Massa_DaguaConder2010_23.png" /> Trecho_Massa_Dagua (Conder 2010)'
            });
var format_Massa_DaguaConder2010_24 = new ol.format.GeoJSON();
var features_Massa_DaguaConder2010_24 = format_Massa_DaguaConder2010_24.readFeatures(json_Massa_DaguaConder2010_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Massa_DaguaConder2010_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Massa_DaguaConder2010_24.addFeatures(features_Massa_DaguaConder2010_24);
var lyr_Massa_DaguaConder2010_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Massa_DaguaConder2010_24,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_Massa_DaguaConder2010_24,
                popuplayertitle: "Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Massa_DaguaConder2010_24.png" /> Massa_Dagua (Conder 2010)'
            });
var format_INCRAAssentRuraismaio2021_25 = new ol.format.GeoJSON();
var features_INCRAAssentRuraismaio2021_25 = format_INCRAAssentRuraismaio2021_25.readFeatures(json_INCRAAssentRuraismaio2021_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INCRAAssentRuraismaio2021_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INCRAAssentRuraismaio2021_25.addFeatures(features_INCRAAssentRuraismaio2021_25);
var lyr_INCRAAssentRuraismaio2021_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INCRAAssentRuraismaio2021_25,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_INCRAAssentRuraismaio2021_25,
                popuplayertitle: "INCRA - Assent. Rurais (maio/2021)",
                interactive: true,
                title: '<img src="styles/legend/INCRAAssentRuraismaio2021_25.png" /> INCRA - Assent. Rurais (maio/2021)'
            });
var format_LogradourosOficializadoseouCepeados_26 = new ol.format.GeoJSON();
var features_LogradourosOficializadoseouCepeados_26 = format_LogradourosOficializadoseouCepeados_26.readFeatures(json_LogradourosOficializadoseouCepeados_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosOficializadoseouCepeados_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosOficializadoseouCepeados_26.addFeatures(features_LogradourosOficializadoseouCepeados_26);
var lyr_LogradourosOficializadoseouCepeados_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosOficializadoseouCepeados_26,
maxResolution:56.00893230452392,
 minResolution:0.42006699228392946,

                style: style_LogradourosOficializadoseouCepeados_26,
                popuplayertitle: "Logradouros Oficializados e/ou Cepeados",
                interactive: true,
                title: '<img src="styles/legend/LogradourosOficializadoseouCepeados_26.png" /> Logradouros Oficializados e/ou Cepeados'
            });
var format_LinhaFrreaFCA_27 = new ol.format.GeoJSON();
var features_LinhaFrreaFCA_27 = format_LinhaFrreaFCA_27.readFeatures(json_LinhaFrreaFCA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaFrreaFCA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaFrreaFCA_27.addFeatures(features_LinhaFrreaFCA_27);
var lyr_LinhaFrreaFCA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaFrreaFCA_27, 
                style: style_LinhaFrreaFCA_27,
                popuplayertitle: "Linha Férrea (FCA)",
                interactive: true,
                title: '<img src="styles/legend/LinhaFrreaFCA_27.png" /> Linha Férrea (FCA)'
            });
var format_EixosRodEstSEINFRABa2021_28 = new ol.format.GeoJSON();
var features_EixosRodEstSEINFRABa2021_28 = format_EixosRodEstSEINFRABa2021_28.readFeatures(json_EixosRodEstSEINFRABa2021_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixosRodEstSEINFRABa2021_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixosRodEstSEINFRABa2021_28.addFeatures(features_EixosRodEstSEINFRABa2021_28);
var lyr_EixosRodEstSEINFRABa2021_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EixosRodEstSEINFRABa2021_28, 
                style: style_EixosRodEstSEINFRABa2021_28,
                popuplayertitle: "Eixos Rod. Est. (SEINFRA-Ba/2021)",
                interactive: true,
                title: '<img src="styles/legend/EixosRodEstSEINFRABa2021_28.png" /> Eixos Rod. Est. (SEINFRA-Ba/2021)'
            });
var format_PassarelasemRodovias_29 = new ol.format.GeoJSON();
var features_PassarelasemRodovias_29 = format_PassarelasemRodovias_29.readFeatures(json_PassarelasemRodovias_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PassarelasemRodovias_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassarelasemRodovias_29.addFeatures(features_PassarelasemRodovias_29);
var lyr_PassarelasemRodovias_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PassarelasemRodovias_29, 
                style: style_PassarelasemRodovias_29,
                popuplayertitle: "Passarelas em Rodovias",
                interactive: true,
                title: '<img src="styles/legend/PassarelasemRodovias_29.png" /> Passarelas em Rodovias'
            });
var format_PontosdeRefernciadiversos2023_30 = new ol.format.GeoJSON();
var features_PontosdeRefernciadiversos2023_30 = format_PontosdeRefernciadiversos2023_30.readFeatures(json_PontosdeRefernciadiversos2023_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeRefernciadiversos2023_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeRefernciadiversos2023_30.addFeatures(features_PontosdeRefernciadiversos2023_30);cluster_PontosdeRefernciadiversos2023_30 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PontosdeRefernciadiversos2023_30
});
var lyr_PontosdeRefernciadiversos2023_30 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PontosdeRefernciadiversos2023_30,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_PontosdeRefernciadiversos2023_30,
                popuplayertitle: "Pontos de Referência diversos (2023)",
                interactive: true,
                title: '<img src="styles/legend/PontosdeRefernciadiversos2023_30.png" /> Pontos de Referência diversos (2023)'
            });
var format_AerodrmoscadastradosCOMAER2022_31 = new ol.format.GeoJSON();
var features_AerodrmoscadastradosCOMAER2022_31 = format_AerodrmoscadastradosCOMAER2022_31.readFeatures(json_AerodrmoscadastradosCOMAER2022_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AerodrmoscadastradosCOMAER2022_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AerodrmoscadastradosCOMAER2022_31.addFeatures(features_AerodrmoscadastradosCOMAER2022_31);
var lyr_AerodrmoscadastradosCOMAER2022_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AerodrmoscadastradosCOMAER2022_31,
maxResolution:42.00669922839295,
 minResolution:0.28004466152261964,

                style: style_AerodrmoscadastradosCOMAER2022_31,
                popuplayertitle: "Aerodrómos cadastrados (COMAER/2022)",
                interactive: true,
                title: '<img src="styles/legend/AerodrmoscadastradosCOMAER2022_31.png" /> Aerodrómos cadastrados (COMAER/2022)'
            });
var format_ParadasdeOnibus_rodoviasCPPSedur_32 = new ol.format.GeoJSON();
var features_ParadasdeOnibus_rodoviasCPPSedur_32 = format_ParadasdeOnibus_rodoviasCPPSedur_32.readFeatures(json_ParadasdeOnibus_rodoviasCPPSedur_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParadasdeOnibus_rodoviasCPPSedur_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParadasdeOnibus_rodoviasCPPSedur_32.addFeatures(features_ParadasdeOnibus_rodoviasCPPSedur_32);
var lyr_ParadasdeOnibus_rodoviasCPPSedur_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParadasdeOnibus_rodoviasCPPSedur_32,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_ParadasdeOnibus_rodoviasCPPSedur_32,
                popuplayertitle: "Paradas de Onibus_rodovias (CPP/Sedur)",
                interactive: true,
                title: '<img src="styles/legend/ParadasdeOnibus_rodoviasCPPSedur_32.png" /> Paradas de Onibus_rodovias (CPP/Sedur)'
            });
var format_Localidadesdiversas2023_33 = new ol.format.GeoJSON();
var features_Localidadesdiversas2023_33 = format_Localidadesdiversas2023_33.readFeatures(json_Localidadesdiversas2023_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdiversas2023_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdiversas2023_33.addFeatures(features_Localidadesdiversas2023_33);
var lyr_Localidadesdiversas2023_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidadesdiversas2023_33,
maxResolution:28.00446615226196,
 minResolution:0.5600893230452393,

                style: style_Localidadesdiversas2023_33,
                popuplayertitle: "Localidades diversas (2023)",
                interactive: true,
                title: '<img src="styles/legend/Localidadesdiversas2023_33.png" /> Localidades diversas (2023)'
            });
var format_SetoresCensitariosRuraisIBGE2024_34 = new ol.format.GeoJSON();
var features_SetoresCensitariosRuraisIBGE2024_34 = format_SetoresCensitariosRuraisIBGE2024_34.readFeatures(json_SetoresCensitariosRuraisIBGE2024_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SetoresCensitariosRuraisIBGE2024_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SetoresCensitariosRuraisIBGE2024_34.addFeatures(features_SetoresCensitariosRuraisIBGE2024_34);
var lyr_SetoresCensitariosRuraisIBGE2024_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SetoresCensitariosRuraisIBGE2024_34,
maxResolution:84.0133984567859,
 minResolution:0.28004466152261964,

                style: style_SetoresCensitariosRuraisIBGE2024_34,
                popuplayertitle: "Setores Censitarios Rurais (IBGE/2024)",
                interactive: true,
                title: '<img src="styles/legend/SetoresCensitariosRuraisIBGE2024_34.png" /> Setores Censitarios Rurais (IBGE/2024)'
            });
var format_SetoresCensitariosUrbanosIBGE2024_35 = new ol.format.GeoJSON();
var features_SetoresCensitariosUrbanosIBGE2024_35 = format_SetoresCensitariosUrbanosIBGE2024_35.readFeatures(json_SetoresCensitariosUrbanosIBGE2024_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SetoresCensitariosUrbanosIBGE2024_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SetoresCensitariosUrbanosIBGE2024_35.addFeatures(features_SetoresCensitariosUrbanosIBGE2024_35);
var lyr_SetoresCensitariosUrbanosIBGE2024_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SetoresCensitariosUrbanosIBGE2024_35,
maxResolution:84.0133984567859,
 minResolution:0.28004466152261964,

                style: style_SetoresCensitariosUrbanosIBGE2024_35,
                popuplayertitle: "Setores Censitarios Urbanos (IBGE/2024)",
                interactive: true,
                title: '<img src="styles/legend/SetoresCensitariosUrbanosIBGE2024_35.png" /> Setores Censitarios Urbanos (IBGE/2024)'
            });
var format_MacroareasPopulacionaisSEDUR2024_36 = new ol.format.GeoJSON();
var features_MacroareasPopulacionaisSEDUR2024_36 = format_MacroareasPopulacionaisSEDUR2024_36.readFeatures(json_MacroareasPopulacionaisSEDUR2024_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MacroareasPopulacionaisSEDUR2024_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacroareasPopulacionaisSEDUR2024_36.addFeatures(features_MacroareasPopulacionaisSEDUR2024_36);
var lyr_MacroareasPopulacionaisSEDUR2024_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacroareasPopulacionaisSEDUR2024_36,
maxResolution:84.0133984567859,
 minResolution:0.5600893230452393,

                style: style_MacroareasPopulacionaisSEDUR2024_36,
                popuplayertitle: "Macroareas Populacionais (SEDUR/2024)",
                interactive: true,
    title: 'Macroareas Populacionais (SEDUR/2024)<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_0.png" /> Eixo Central<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_1.png" /> Região Abrantes Leste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_2.png" /> Região Abrantes Oeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_3.png" /> Região Monte Gordo Leste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_4.png" /> Região Monte Gordo Oeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_5.png" /> Região Nordeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_6.png" /> Região Noroeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_7.png" /> Região Norte (área industrial)<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_8.png" /> Região Rural 1<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_9.png" /> Região Rural 2<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_10.png" /> Região Rural 3<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_11.png" /> Região Rural 4<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_12.png" /> Região Rural 5<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_13.png" /> Região Rural 6<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_14.png" /> Região Rural 7<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_15.png" /> Região Rural 8<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_16.png" /> Região Sudeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_17.png" /> Região Sudoeste<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_18.png" /> Região Sul<br />\
    <img src="styles/legend/MacroareasPopulacionaisSEDUR2024_36_19.png" /> <br />'
        });
var format_BairrosurbanosvigentesSEDUR2022_37 = new ol.format.GeoJSON();
var features_BairrosurbanosvigentesSEDUR2022_37 = format_BairrosurbanosvigentesSEDUR2022_37.readFeatures(json_BairrosurbanosvigentesSEDUR2022_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BairrosurbanosvigentesSEDUR2022_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BairrosurbanosvigentesSEDUR2022_37.addFeatures(features_BairrosurbanosvigentesSEDUR2022_37);
var lyr_BairrosurbanosvigentesSEDUR2022_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BairrosurbanosvigentesSEDUR2022_37,
maxResolution:84.0133984567859,
 minResolution:1.1201786460904786,

                style: style_BairrosurbanosvigentesSEDUR2022_37,
                popuplayertitle: "Bairros urbanos vigentes (SEDUR/2022)",
                interactive: true,
                title: '<img src="styles/legend/BairrosurbanosvigentesSEDUR2022_37.png" /> Bairros urbanos vigentes (SEDUR/2022)'
            });
var format_DistritosMunicipais2020_38 = new ol.format.GeoJSON();
var features_DistritosMunicipais2020_38 = format_DistritosMunicipais2020_38.readFeatures(json_DistritosMunicipais2020_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosMunicipais2020_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosMunicipais2020_38.addFeatures(features_DistritosMunicipais2020_38);
var lyr_DistritosMunicipais2020_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosMunicipais2020_38,
maxResolution:84.0133984567859,
 minResolution:14.00223307613098,

                style: style_DistritosMunicipais2020_38,
                popuplayertitle: "Distritos Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/DistritosMunicipais2020_38.png" /> Distritos Municipais (2020)'
            });
var format_LimitesMunicipais2020_39 = new ol.format.GeoJSON();
var features_LimitesMunicipais2020_39 = format_LimitesMunicipais2020_39.readFeatures(json_LimitesMunicipais2020_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicipais2020_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicipais2020_39.addFeatures(features_LimitesMunicipais2020_39);
var lyr_LimitesMunicipais2020_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicipais2020_39, 
                style: style_LimitesMunicipais2020_39,
                popuplayertitle: "Limites Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicipais2020_39.png" /> Limites Municipais (2020)'
            });
var format_LimitesMunicpiosRMS2020_40 = new ol.format.GeoJSON();
var features_LimitesMunicpiosRMS2020_40 = format_LimitesMunicpiosRMS2020_40.readFeatures(json_LimitesMunicpiosRMS2020_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicpiosRMS2020_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicpiosRMS2020_40.addFeatures(features_LimitesMunicpiosRMS2020_40);
var lyr_LimitesMunicpiosRMS2020_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicpiosRMS2020_40, 
                style: style_LimitesMunicpiosRMS2020_40,
                popuplayertitle: "Limites Municípios/RMS (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicpiosRMS2020_40.png" /> Limites Municípios/RMS (2020)'
            });

lyr_RMS_1998ConderBa_0.setVisible(false);lyr_SalvadorCamaari_1992ConderBa_1.setVisible(false);lyr_Ortofoto2017PMC_2.setVisible(false);lyr_Ortofoto2022PMC_3.setVisible(false);lyr_GoogleSatellite_4.setVisible(true);lyr_WazeWorld_5.setVisible(false);lyr_OSMStandard_6.setVisible(false);lyr_BDGExSEIBa25k_7.setVisible(false);lyr_MalhadeLotesGeomais_8.setVisible(false);lyr_UnidadesImobiliriasGeomais_9.setVisible(false);lyr_Curvas_de_nivel_intermediariaGeomais_10.setVisible(false);lyr_Curvas_de_nivel_mestraGeomais_11.setVisible(false);lyr_GoogleTraffic_12.setVisible(false);lyr_GoogleLabels_13.setVisible(false);lyr_EsriBoundariesandPlaces_14.setVisible(false);lyr_reasdeQuilombolasInemaINCRA_15.setVisible(false);lyr_ImvelRuralLimitesInemaINCRA_16.setVisible(false);lyr_LimitesdeAssentamentosInemaINCRA_17.setVisible(false);lyr_ProcessosminerriosativosANM_18.setVisible(false);lyr_reasmidasVeredasPMSBCamaari_19.setVisible(false);lyr_RiosIntermitentesPMSBeConder2010_20.setVisible(false);lyr_RiosPerenesPMSBeConder2010_21.setVisible(false);lyr_RiosPerenesSEIBa25k_22.setVisible(true);lyr_Trecho_Massa_DaguaConder2010_23.setVisible(true);lyr_Massa_DaguaConder2010_24.setVisible(true);lyr_INCRAAssentRuraismaio2021_25.setVisible(true);lyr_LogradourosOficializadoseouCepeados_26.setVisible(false);lyr_LinhaFrreaFCA_27.setVisible(true);lyr_EixosRodEstSEINFRABa2021_28.setVisible(true);lyr_PassarelasemRodovias_29.setVisible(true);lyr_PontosdeRefernciadiversos2023_30.setVisible(false);lyr_AerodrmoscadastradosCOMAER2022_31.setVisible(true);lyr_ParadasdeOnibus_rodoviasCPPSedur_32.setVisible(true);lyr_Localidadesdiversas2023_33.setVisible(true);lyr_SetoresCensitariosRuraisIBGE2024_34.setVisible(false);lyr_SetoresCensitariosUrbanosIBGE2024_35.setVisible(false);lyr_MacroareasPopulacionaisSEDUR2024_36.setVisible(true);lyr_BairrosurbanosvigentesSEDUR2022_37.setVisible(false);lyr_DistritosMunicipais2020_38.setVisible(false);lyr_LimitesMunicipais2020_39.setVisible(false);lyr_LimitesMunicpiosRMS2020_40.setVisible(true);
var layersList = [lyr_RMS_1998ConderBa_0,lyr_SalvadorCamaari_1992ConderBa_1,lyr_Ortofoto2017PMC_2,lyr_Ortofoto2022PMC_3,lyr_GoogleSatellite_4,lyr_WazeWorld_5,lyr_OSMStandard_6,lyr_BDGExSEIBa25k_7,lyr_MalhadeLotesGeomais_8,lyr_UnidadesImobiliriasGeomais_9,lyr_Curvas_de_nivel_intermediariaGeomais_10,lyr_Curvas_de_nivel_mestraGeomais_11,lyr_GoogleTraffic_12,lyr_GoogleLabels_13,lyr_EsriBoundariesandPlaces_14,lyr_reasdeQuilombolasInemaINCRA_15,lyr_ImvelRuralLimitesInemaINCRA_16,lyr_LimitesdeAssentamentosInemaINCRA_17,lyr_ProcessosminerriosativosANM_18,lyr_reasmidasVeredasPMSBCamaari_19,lyr_RiosIntermitentesPMSBeConder2010_20,lyr_RiosPerenesPMSBeConder2010_21,lyr_RiosPerenesSEIBa25k_22,lyr_Trecho_Massa_DaguaConder2010_23,lyr_Massa_DaguaConder2010_24,lyr_INCRAAssentRuraismaio2021_25,lyr_LogradourosOficializadoseouCepeados_26,lyr_LinhaFrreaFCA_27,lyr_EixosRodEstSEINFRABa2021_28,lyr_PassarelasemRodovias_29,lyr_PontosdeRefernciadiversos2023_30,lyr_AerodrmoscadastradosCOMAER2022_31,lyr_ParadasdeOnibus_rodoviasCPPSedur_32,lyr_Localidadesdiversas2023_33,lyr_SetoresCensitariosRuraisIBGE2024_34,lyr_SetoresCensitariosUrbanosIBGE2024_35,lyr_MacroareasPopulacionaisSEDUR2024_36,lyr_BairrosurbanosvigentesSEDUR2022_37,lyr_DistritosMunicipais2020_38,lyr_LimitesMunicipais2020_39,lyr_LimitesMunicpiosRMS2020_40];
lyr_reasmidasVeredasPMSBCamaari_19.set('fieldAliases', {'Id': 'Id', 'Descricao': 'Descricao', 'Coef__Defl': 'Coef__Defl', 'Categorias': 'Categorias', 'AREA': 'AREA', });
lyr_RiosIntermitentesPMSBeConder2010_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'Shape_Leng': 'Shape_Leng', 'Layer': 'Layer', 'Base': 'Base', });
lyr_RiosPerenesPMSBeConder2010_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'Shape_Leng': 'Shape_Leng', 'Layer': 'Layer', 'Base': 'Base', });
lyr_RiosPerenesSEIBa25k_22.set('fieldAliases', {'Id': 'Id', 'nome': 'nome', 'regime': 'regime', });
lyr_Trecho_Massa_DaguaConder2010_23.set('fieldAliases', {'FID_HID_Tr': 'FID_HID_Tr', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'tipoTrecho': 'tipoTrecho', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Massa_DaguaConder2010_24.set('fieldAliases', {'FID_HID_Ma': 'FID_HID_Ma', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'tipoMassaD': 'tipoMassaD', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_INCRAAssentRuraismaio2021_25.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', 'origem': 'origem', });
lyr_LogradourosOficializadoseouCepeados_26.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'webmap': 'webmap', 'compriment': 'compriment', });
lyr_LinhaFrreaFCA_27.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'nomeabrev': 'nomeabrev', 'geometriaa': 'geometriaa', 'codtrechof': 'codtrechof', 'posicaorel': 'posicaorel', 'tipotrecho': 'tipotrecho', 'bitola': 'bitola', 'eletrifica': 'eletrifica', 'nrlinhas': 'nrlinhas', 'emarruamen': 'emarruamen', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'cargasupor': 'cargasupor', });
lyr_EixosRodEstSEINFRABa2021_28.set('fieldAliases', {'Name': 'Name', 'fid': 'fid', 'Codigo SRE': 'Codigo SRE', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Local Iní': 'Local Iní', 'Km Inicial': 'Km Inicial', 'Km Final': 'Km Final', 'Extensão': 'Extensão', 'Situação': 'Situação', 'Descriçã': 'Descriçã', 'Tipo de Re': 'Tipo de Re', 'Descriç_1': 'Descriç_1', 'Coincide_3': 'Coincide_3', 'Identifica': 'Identifica', 'Extensã_1': 'Extensã_1', 'Status': 'Status', });
lyr_PassarelasemRodovias_29.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Numero': 'Numero', 'Rodovia': 'Rodovia', 'Gestao': 'Gestao', 'Bairro': 'Bairro', 'Distrito': 'Distrito', });
lyr_PontosdeRefernciadiversos2023_30.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_AerodrmoscadastradosCOMAER2022_31.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'descriçã': 'descriçã', 'observacao': 'observacao', 'link': 'link', 'fonte': 'fonte', 'org.': 'org.', });
lyr_ParadasdeOnibus_rodoviasCPPSedur_32.set('fieldAliases', {'id': 'id', 'name': 'name', 'via': 'via', 'bairro_loc': 'bairro_loc', 'distrito': 'distrito', 'bases': 'bases', 'org.': 'org.', });
lyr_Localidadesdiversas2023_33.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_SetoresCensitariosRuraisIBGE2024_34.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'perímetro': 'perímetro', 'área_Km²': 'área_Km²', 'CD_SETOR_2': 'CD_SETOR_2', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'area_ha': 'area_ha', 'Dens_ha': 'Dens_ha', });
lyr_SetoresCensitariosUrbanosIBGE2024_35.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'AREA_KM2': 'AREA_KM2', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'perímetro': 'perímetro', 'área_Km²': 'área_Km²', 'CD_SETOR_2': 'CD_SETOR_2', 'v0001': 'v0001', 'v0002': 'v0002', 'v0003': 'v0003', 'v0004': 'v0004', 'v0005': 'v0005', 'v0006': 'v0006', 'v0007': 'v0007', 'area_ha': 'area_ha', 'Dens_ha': 'Dens_ha', 'v3_v7': 'v3_v7', });
lyr_MacroareasPopulacionaisSEDUR2024_36.set('fieldAliases', {'perímetro': 'perímetro', 'área_Km²': 'área_Km²', 'v0001': 'v0001', 'v0002': 'v0002', 'area_ha': 'area_ha', 'Dens_ha': 'Dens_ha', 'id': 'id', 'layer': 'layer', 'Dens_km2': 'Dens_km2', 'fonte': 'fonte', 'org.': 'org.', 'Med_morado': 'Med_morado', });
lyr_BairrosurbanosvigentesSEDUR2022_37.set('fieldAliases', {'id': 'id', 'nm_bairro': 'nm_bairro', 'cod_bairro': 'cod_bairro', 'distrito': 'distrito', 'situação': 'situação', 'bairros': 'bairros', 'rotulos': 'rotulos', 'CNEFE 2022': 'CNEFE 2022', 'Hab_Dom': 'Hab_Dom', 'PopEst_22': 'PopEst_22', 'area_Ha': 'area_Ha', 'area_Km2': 'area_Km2', 'Perim_km': 'Perim_km', 'Dens_Ha': 'Dens_Ha', 'Dens_Km2': 'Dens_Km2', });
lyr_DistritosMunicipais2020_38.set('fieldAliases', {'id': 'id', 'cd_mun': 'cd_mun', 'cd_dist': 'cd_dist', 'nm_dist': 'nm_dist', 'Perímetro': 'Perímetro', 'Área': 'Área', 'percentual': 'percentual', 'cg_majorit': 'cg_majorit', 'cb_heigh': 'cb_heigh', });
lyr_LimitesMunicipais2020_39.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'Est_P_2021': 'Est_P_2021', 'Dens_2021': 'Dens_2021', 'Pop_2010': 'Pop_2010', 'Dom_2010': 'Dom_2010', 'Dens_2010': 'Dens_2010', 'IDH-m_2010': 'IDH-m_2010', 'cg_majorit': 'cg_majorit', 'cg_major_1': 'cg_major_1', 'cg_major_2': 'cg_major_2', 'cg_major_3': 'cg_major_3', 'cb_heigh': 'cb_heigh', 'cg_major_4': 'cg_major_4', });
lyr_LimitesMunicpiosRMS2020_40.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_reasmidasVeredasPMSBCamaari_19.set('fieldImages', {'Id': 'Range', 'Descricao': 'TextEdit', 'Coef__Defl': 'TextEdit', 'Categorias': 'TextEdit', 'AREA': 'TextEdit', });
lyr_RiosIntermitentesPMSBeConder2010_20.set('fieldImages', {'OBJECTID': 'Range', 'OBJECTID_1': 'Range', 'Shape_Leng': 'TextEdit', 'Layer': 'TextEdit', 'Base': 'TextEdit', });
lyr_RiosPerenesPMSBeConder2010_21.set('fieldImages', {'OBJECTID': 'Range', 'OBJECTID_1': 'Range', 'Shape_Leng': 'TextEdit', 'Layer': 'TextEdit', 'Base': 'TextEdit', });
lyr_RiosPerenesSEIBa25k_22.set('fieldImages', {'Id': 'TextEdit', 'nome': 'TextEdit', 'regime': 'TextEdit', });
lyr_Trecho_Massa_DaguaConder2010_23.set('fieldImages', {'FID_HID_Tr': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'tipoTrecho': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Massa_DaguaConder2010_24.set('fieldImages', {'FID_HID_Ma': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'tipoMassaD': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_INCRAAssentRuraismaio2021_25.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', 'origem': 'TextEdit', });
lyr_LogradourosOficializadoseouCepeados_26.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'webmap': 'TextEdit', 'compriment': 'TextEdit', });
lyr_LinhaFrreaFCA_27.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'nomeabrev': 'TextEdit', 'geometriaa': 'TextEdit', 'codtrechof': 'TextEdit', 'posicaorel': 'TextEdit', 'tipotrecho': 'TextEdit', 'bitola': 'TextEdit', 'eletrifica': 'TextEdit', 'nrlinhas': 'TextEdit', 'emarruamen': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'cargasupor': 'TextEdit', });
lyr_EixosRodEstSEINFRABa2021_28.set('fieldImages', {'Name': 'TextEdit', 'fid': 'TextEdit', 'Codigo SRE': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Local Iní': 'TextEdit', 'Km Inicial': 'TextEdit', 'Km Final': 'TextEdit', 'Extensão': 'TextEdit', 'Situação': 'TextEdit', 'Descriçã': 'TextEdit', 'Tipo de Re': 'TextEdit', 'Descriç_1': 'TextEdit', 'Coincide_3': 'TextEdit', 'Identifica': 'TextEdit', 'Extensã_1': 'TextEdit', 'Status': 'TextEdit', });
lyr_PassarelasemRodovias_29.set('fieldImages', {'id': 'TextEdit', 'Layer': 'TextEdit', 'Numero': 'Range', 'Rodovia': 'TextEdit', 'Gestao': 'TextEdit', 'Bairro': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_PontosdeRefernciadiversos2023_30.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_AerodrmoscadastradosCOMAER2022_31.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'descriçã': 'TextEdit', 'observacao': 'TextEdit', 'link': 'TextEdit', 'fonte': 'TextEdit', 'org.': 'TextEdit', });
lyr_ParadasdeOnibus_rodoviasCPPSedur_32.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'via': 'TextEdit', 'bairro_loc': 'TextEdit', 'distrito': 'TextEdit', 'bases': 'TextEdit', 'org.': 'TextEdit', });
lyr_Localidadesdiversas2023_33.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_SetoresCensitariosRuraisIBGE2024_34.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'perímetro': 'TextEdit', 'área_Km²': 'TextEdit', 'CD_SETOR_2': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'area_ha': 'TextEdit', 'Dens_ha': 'TextEdit', });
lyr_SetoresCensitariosUrbanosIBGE2024_35.set('fieldImages', {'CD_SETOR': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'perímetro': 'TextEdit', 'área_Km²': 'TextEdit', 'CD_SETOR_2': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'v0003': 'TextEdit', 'v0004': 'TextEdit', 'v0005': 'TextEdit', 'v0006': 'TextEdit', 'v0007': 'TextEdit', 'area_ha': 'TextEdit', 'Dens_ha': 'TextEdit', 'v3_v7': 'Range', });
lyr_MacroareasPopulacionaisSEDUR2024_36.set('fieldImages', {'perímetro': 'TextEdit', 'área_Km²': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'area_ha': 'TextEdit', 'Dens_ha': 'TextEdit', 'id': 'Range', 'layer': 'TextEdit', 'Dens_km2': 'TextEdit', 'fonte': 'TextEdit', 'org.': 'TextEdit', 'Med_morado': 'TextEdit', });
lyr_BairrosurbanosvigentesSEDUR2022_37.set('fieldImages', {'id': 'TextEdit', 'nm_bairro': 'TextEdit', 'cod_bairro': 'TextEdit', 'distrito': 'TextEdit', 'situação': 'TextEdit', 'bairros': 'TextEdit', 'rotulos': 'TextEdit', 'CNEFE 2022': 'TextEdit', 'Hab_Dom': 'TextEdit', 'PopEst_22': 'TextEdit', 'area_Ha': 'TextEdit', 'area_Km2': 'TextEdit', 'Perim_km': 'TextEdit', 'Dens_Ha': 'TextEdit', 'Dens_Km2': 'TextEdit', });
lyr_DistritosMunicipais2020_38.set('fieldImages', {'id': 'TextEdit', 'cd_mun': 'TextEdit', 'cd_dist': 'TextEdit', 'nm_dist': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', 'percentual': 'TextEdit', 'cg_majorit': 'TextEdit', 'cb_heigh': 'TextEdit', });
lyr_LimitesMunicipais2020_39.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', 'AREA_KM2': '', 'Est_P_2021': '', 'Dens_2021': '', 'Pop_2010': '', 'Dom_2010': '', 'Dens_2010': '', 'IDH-m_2010': '', 'cg_majorit': '', 'cg_major_1': '', 'cg_major_2': '', 'cg_major_3': '', 'cb_heigh': '', 'cg_major_4': '', });
lyr_LimitesMunicpiosRMS2020_40.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_reasmidasVeredasPMSBCamaari_19.set('fieldLabels', {'Id': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'Coef__Defl': 'inline label - visible with data', 'Categorias': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_RiosIntermitentesPMSBeConder2010_20.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Base': 'inline label - visible with data', });
lyr_RiosPerenesPMSBeConder2010_21.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Base': 'inline label - visible with data', });
lyr_RiosPerenesSEIBa25k_22.set('fieldLabels', {'Id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'regime': 'inline label - visible with data', });
lyr_Trecho_Massa_DaguaConder2010_23.set('fieldLabels', {'FID_HID_Tr': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'geometriaA': 'inline label - visible with data', 'regime': 'inline label - visible with data', 'nomeAbrev': 'inline label - visible with data', 'ID_Trecho_': 'inline label - visible with data', 'tipoTrecho': 'inline label - visible with data', 'salinidade': 'inline label - visible with data', 'FID_Articu': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'MI': 'inline label - visible with data', 'Escala': 'inline label - visible with data', 'Nome_Carta': 'inline label - visible with data', 'Ano_Aquisi': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'BLOCO': 'inline label - visible with data', 'Equidistan': 'inline label - visible with data', 'Ano_Aqui_1': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Ar_1': 'inline label - visible with data', 'SHAPE_Le_2': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_Massa_DaguaConder2010_24.set('fieldLabels', {'FID_HID_Ma': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'geometriaA': 'inline label - visible with data', 'regime': 'inline label - visible with data', 'nomeAbrev': 'inline label - visible with data', 'tipoMassaD': 'inline label - visible with data', 'salinidade': 'inline label - visible with data', 'FID_Articu': 'inline label - visible with data', 'OBJECTID_1': 'inline label - visible with data', 'MI': 'inline label - visible with data', 'Escala': 'inline label - visible with data', 'Nome_Carta': 'inline label - visible with data', 'Ano_Aquisi': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'BLOCO': 'inline label - visible with data', 'Equidistan': 'inline label - visible with data', 'Ano_Aqui_1': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Ar_1': 'inline label - visible with data', 'Shape_Le_2': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_INCRAAssentRuraismaio2021_25.set('fieldLabels', {'cd_sipra': 'inline label - visible with data', 'uf': 'inline label - visible with data', 'nome_proje': 'inline label - visible with data', 'municipio': 'inline label - visible with data', 'area_hecta': 'inline label - visible with data', 'capacidade': 'inline label - visible with data', 'num_famili': 'inline label - visible with data', 'fase': 'inline label - visible with data', 'data_de_cr': 'inline label - visible with data', 'forma_obte': 'inline label - visible with data', 'data_obten': 'inline label - visible with data', 'area_calc_': 'inline label - visible with data', 'sr': 'inline label - visible with data', 'descricao_': 'inline label - visible with data', 'origem': 'inline label - visible with data', });
lyr_LogradourosOficializadoseouCepeados_26.set('fieldLabels', {'id': 'inline label - visible with data', 'codlog_': 'inline label - visible with data', 'logradour_': 'inline label - visible with data', 'parcelame_': 'inline label - visible with data', 'bairro_': 'inline label - visible with data', 'distrito_': 'inline label - visible with data', 'cep_': 'inline label - visible with data', 'obs_1': 'inline label - visible with data', 'obs_2': 'inline label - visible with data', 'webmap': 'inline label - visible with data', 'compriment': 'inline label - visible with data', });
lyr_LinhaFrreaFCA_27.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'nomeabrev': 'inline label - visible with data', 'geometriaa': 'inline label - visible with data', 'codtrechof': 'inline label - visible with data', 'posicaorel': 'inline label - visible with data', 'tipotrecho': 'inline label - visible with data', 'bitola': 'inline label - visible with data', 'eletrifica': 'inline label - visible with data', 'nrlinhas': 'inline label - visible with data', 'emarruamen': 'inline label - visible with data', 'jurisdicao': 'inline label - visible with data', 'administra': 'inline label - visible with data', 'concession': 'inline label - visible with data', 'operaciona': 'inline label - visible with data', 'situacaofi': 'inline label - visible with data', 'cargasupor': 'inline label - visible with data', });
lyr_EixosRodEstSEINFRABa2021_28.set('fieldLabels', {'Name': 'inline label - visible with data', 'fid': 'inline label - visible with data', 'Codigo SRE': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Local Iní': 'inline label - visible with data', 'Km Inicial': 'inline label - visible with data', 'Km Final': 'inline label - visible with data', 'Extensão': 'inline label - visible with data', 'Situação': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'Tipo de Re': 'inline label - visible with data', 'Descriç_1': 'inline label - visible with data', 'Coincide_3': 'inline label - visible with data', 'Identifica': 'inline label - visible with data', 'Extensã_1': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_PassarelasemRodovias_29.set('fieldLabels', {'id': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'Numero': 'inline label - visible with data', 'Rodovia': 'inline label - visible with data', 'Gestao': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', });
lyr_PontosdeRefernciadiversos2023_30.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'base': 'inline label - visible with data', 'fonte': 'inline label - visible with data', });
lyr_AerodrmoscadastradosCOMAER2022_31.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'descriçã': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'link': 'inline label - visible with data', 'fonte': 'inline label - visible with data', 'org.': 'inline label - visible with data', });
lyr_ParadasdeOnibus_rodoviasCPPSedur_32.set('fieldLabels', {'id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'via': 'inline label - visible with data', 'bairro_loc': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'bases': 'inline label - visible with data', 'org.': 'inline label - visible with data', });
lyr_Localidadesdiversas2023_33.set('fieldLabels', {'id': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'base': 'inline label - visible with data', 'fonte': 'inline label - visible with data', });
lyr_SetoresCensitariosRuraisIBGE2024_34.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'inline label - visible with data', 'NM_DIST': 'inline label - visible with data', 'perímetro': 'inline label - visible with data', 'área_Km²': 'inline label - visible with data', 'CD_SETOR_2': 'inline label - visible with data', 'v0001': 'inline label - visible with data', 'v0002': 'inline label - visible with data', 'v0003': 'inline label - visible with data', 'v0004': 'inline label - visible with data', 'v0005': 'inline label - visible with data', 'v0006': 'inline label - visible with data', 'v0007': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'Dens_ha': 'inline label - visible with data', });
lyr_SetoresCensitariosUrbanosIBGE2024_35.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'CD_DIST': 'inline label - visible with data', 'NM_DIST': 'inline label - visible with data', 'perímetro': 'inline label - visible with data', 'área_Km²': 'inline label - visible with data', 'CD_SETOR_2': 'inline label - visible with data', 'v0001': 'inline label - visible with data', 'v0002': 'inline label - visible with data', 'v0003': 'inline label - visible with data', 'v0004': 'inline label - visible with data', 'v0005': 'inline label - visible with data', 'v0006': 'inline label - visible with data', 'v0007': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'Dens_ha': 'inline label - visible with data', 'v3_v7': 'inline label - visible with data', });
lyr_MacroareasPopulacionaisSEDUR2024_36.set('fieldLabels', {'perímetro': 'inline label - visible with data', 'área_Km²': 'inline label - visible with data', 'v0001': 'inline label - visible with data', 'v0002': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'Dens_ha': 'inline label - visible with data', 'id': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Dens_km2': 'inline label - visible with data', 'fonte': 'inline label - visible with data', 'org.': 'inline label - visible with data', 'Med_morado': 'inline label - visible with data', });
lyr_BairrosurbanosvigentesSEDUR2022_37.set('fieldLabels', {'id': 'inline label - visible with data', 'nm_bairro': 'inline label - visible with data', 'cod_bairro': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'situação': 'inline label - visible with data', 'bairros': 'inline label - visible with data', 'rotulos': 'inline label - visible with data', 'CNEFE 2022': 'inline label - visible with data', 'Hab_Dom': 'inline label - visible with data', 'PopEst_22': 'inline label - visible with data', 'area_Ha': 'inline label - visible with data', 'area_Km2': 'inline label - visible with data', 'Perim_km': 'inline label - visible with data', 'Dens_Ha': 'inline label - visible with data', 'Dens_Km2': 'inline label - visible with data', });
lyr_DistritosMunicipais2020_38.set('fieldLabels', {'id': 'inline label - visible with data', 'cd_mun': 'inline label - visible with data', 'cd_dist': 'inline label - visible with data', 'nm_dist': 'inline label - visible with data', 'Perímetro': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'percentual': 'inline label - visible with data', 'cg_majorit': 'inline label - visible with data', 'cb_heigh': 'inline label - visible with data', });
lyr_LimitesMunicipais2020_39.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', 'Est_P_2021': 'inline label - visible with data', 'Dens_2021': 'inline label - visible with data', 'Pop_2010': 'inline label - visible with data', 'Dom_2010': 'inline label - visible with data', 'Dens_2010': 'inline label - visible with data', 'IDH-m_2010': 'inline label - visible with data', 'cg_majorit': 'inline label - visible with data', 'cg_major_1': 'inline label - visible with data', 'cg_major_2': 'inline label - visible with data', 'cg_major_3': 'inline label - visible with data', 'cb_heigh': 'inline label - visible with data', 'cg_major_4': 'inline label - visible with data', });
lyr_LimitesMunicpiosRMS2020_40.set('fieldLabels', {'CD_MUN': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA_UF': 'inline label - visible with data', 'AREA_KM2': 'inline label - visible with data', });
lyr_LimitesMunicpiosRMS2020_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});