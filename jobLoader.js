
module.exports.datalocationv2 = function(cells, currentDataRow){
    //npm run gdocsync -- -minrow=1 -maxrow=3 -sheetnumber=0 -gdoc=1PyMqH5ts4g-I_19q8awi09yL00iFk404RdtRTXX-OEE -storagekey=localstorage-locationv2 -job=datalocationv2
    var list=[];
    var tempRow = '';
    var theKey = '';
    var dataJson = {};
    var dataRow = currentDataRow || {};
    var lang = '';

    var keyLevel1='';
    var keyLevel2='';
    var keyLevel3='';
    var keyLevel4='';

    var level1_lat='';
    var level2_lat='';
    var level3_lat='';
    var level4_lat='';

    var level1_long='';
    var level2_long='';
    var level3_long='';
    var level4_long='';
    cells.forEach(function(v,k){
                        if(v.col < 17 && v.row > 1 && v.value!=''){
        //                    if(tempRow != v.row){

                                if(v.col==1 && keyLevel1 != v.value && v.value != ''){
                                    keyLevel1 = v.value;
                                    keyLevel1 = keyLevel1.toLowerCase();
                                    keyLevel1 = keyLevel1.replace(/-/g, ' ');
                                    dataRow[keyLevel1] = dataRow[''+keyLevel1] || {};
                                    dataRow[keyLevel1]['name'] = keyLevel1;
                                    dataRow[keyLevel1]['level'] = 1;
                                    dataRow[keyLevel1]['level1'] = keyLevel1;
                                }
                                if(v.col==3){
                                    if(v.value != '') level1_lat = v.value;
        //                            dataRow[keyLevel1] = dataRow[''+keyLevel1] || {};
                                    dataRow[keyLevel1]['lat'] = level1_lat;
                                }
                                if(v.col==4){
                                    if(v.value != '') level1_long = v.value;
        //                            dataRow[''+keyLevel1] = dataRow[''+keyLevel1] || {};
                                    dataRow[''+keyLevel1]['long'] = level1_long;
                                }
                                if(v.col==5 && keyLevel2 != v.value && v.value != ''){
                                    keyLevel2 = v.value;
                                    keyLevel2 = keyLevel2.toLowerCase();
                                    keyLevel2 = keyLevel2.replace(/-/g, ' ');
                                    dataRow[keyLevel1+'-'+keyLevel2] = dataRow[keyLevel1+'-'+keyLevel2] || {};
                                    dataRow[keyLevel1+'-'+keyLevel2]['name'] = keyLevel2;
                                    dataRow[keyLevel1+'-'+keyLevel2]['level'] = 2;
                                    dataRow[keyLevel1+'-'+keyLevel2]['level1'] = keyLevel1;
                                    dataRow[keyLevel1+'-'+keyLevel2]['level2'] = keyLevel2;
                                }
                                if(v.col==7){
                                    if(v.value != '') level2_lat = v.value;
        //                            dataRow[keyLevel1][keyLevel2] = dataRow[keyLevel1][keyLevel2] || {};
                                    dataRow[keyLevel1+'-'+keyLevel2]['lat'] = level2_lat;
                                }
                                if(v.col==8){
                                    if(v.value != '') level2_long = v.value;
        //                            dataRow[keyLevel1][''+keyLevel2] = dataRow[keyLevel1][''+keyLevel2] || {};
                                    dataRow[keyLevel1+'-'+keyLevel2]['long'] = level2_long;
                                }
                                if(v.col==9 && keyLevel3 != v.value && v.value != ''){
                                    keyLevel3 = v.value;
                                    keyLevel3 = keyLevel3.toLowerCase();
                                    keyLevel3 = keyLevel3.replace(/-/g, ' ');
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3] = dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3] || {};
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3]['name'] = keyLevel3;
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3]['level'] = 3;
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3]['level1'] = keyLevel1;
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3]['level2'] = keyLevel2;
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3]['level3'] = keyLevel3;
                                }
                                if(v.col==11){
                                    if(v.value != '') level3_lat = v.value;
        //                            dataRow[keyLevel1][''+keyLevel2][keyLevel3] = dataRow[keyLevel1][''+keyLevel2][keyLevel3] || {};
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3]['lat'] = level3_lat;
                                }
                                if(v.col==12){
                                    if(v.value != '') level3_long = v.value;
        //                            dataRow[keyLevel1][''+keyLevel2][keyLevel3] = dataRow[keyLevel1][''+keyLevel2][keyLevel3] || {};
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3]['long'] = level3_long;
                                }
                                if(v.col==13 && keyLevel4 != v.value && v.value != ''){
                                    keyLevel4 = v.value;
                                    keyLevel4 = keyLevel4.toLowerCase();
                                    keyLevel4 = keyLevel4.replace(/-/g, ' ');
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4] = dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4] || {};
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4]['name'] = keyLevel4;
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4]['level'] = 4;
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4]['level1'] = keyLevel1;
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4]['level2'] = keyLevel2;
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4]['level3'] = keyLevel3;
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4]['level4'] = keyLevel4;
                                }
                                if(v.col==15){
                                    if(v.value != '') level4_lat = v.value;
        //                            dataRow[keyLevel1][''+keyLevel2][keyLevel3][keyLevel4] = dataRow[keyLevel1][''+keyLevel2][keyLevel3][keyLevel4] || {};
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4]['lat'] = level4_lat;
                                }
                                if(v.col==16){
                                    if(v.value != '') level4_long = v.value;
        //                            dataRow[keyLevel1][''+keyLevel2][keyLevel3][keyLevel4] = dataRow[keyLevel1][''+keyLevel2][keyLevel3][keyLevel4] || {};
                                    dataRow[keyLevel1+'-'+keyLevel2+'-'+keyLevel3+'-'+keyLevel4]['long'] = level4_long;
                                }

                                if(tempRow != v.row && v.value != ''){
                                    tempRow = v.row;
                                    theKey = v.value;
                                    theKey = theKey.toLowerCase();

                                }
        //                        if(v.col==3) lang = 'en';
        //                        var val = v.value;
        ////                        val = val.toLowerCase();


                            console.log('Cell R'+v.row+' C'+v.col+' = '+v.value);
                        }
                    });

    dataJson = dataRow;
    return dataJson;
    }
