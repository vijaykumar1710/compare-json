let search = require('./search.js');

var product= { };
var userdetails={ };

var d = ['3- and 5-lead ECG', 'Philips ST analysis', 'Impedance respiration', 'Philips NBP', 'Dual continuous temp'];
var list = [{
    id: '1',
    name: "efficia_CM10",
    acuity: "mid_range",
    screen_type: "non_touch_screen",
    screen_size: "10_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP']
},
{
    id: '2',
    name: 'efficia_CM12',
    acuity: "mid_range",
    screen_type: "non_touch_screen",
    screen_size: "12_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP']
},
{
    id: '3',
    name: "efficia_CM100",
    acuity: "mid_range",
    screen_type: "touch_screen",
    screen_size: "10_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP']
},
{
    id: '4',
    name: "efficia_CM120",
    acuity: "mid_range",
    screen_type: "touch_screen",
    screen_size: "12_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP']
},
{
    id: '5',
    name: "efficia_CM150",
    acuity: "mid_range",
    screen_type: "touch_screen",
    screen_size: "15_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP']
},
{
    id: '6',
    name: "Goldway_G30E",
    acuity: "low_range",
    screen_type: "non_touch_screen",
    screen_size: "10_inch",
    basic_feautures: d,
    add_ons: null
},
{
    id: '7',
    name: "Goldway_G40E",
    acuity: "low_range",
    screen_type: "non_touch_screen",
    screen_size: "12_inch",
    basic_feautures: d,
    add_ons: null
},
{
    id: '8',
    name: "IntelliVue_MX400",
    acuity: "high_range",
    screen_type: "touch_screen",
    screen_size: "10_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP','etCO2 Oridion']
},
{
    id: '9',
    name: "IntelliVue_MX450",
    acuity: "high_range",
    screen_type: "touch_screen",
    screen_size: "12_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP','etCO2 Oridion']
},
{
    id: '10',
    name: "IntelliVue_MX500",
    acuity: "high_range",
    screen_type: "touch_screen",
    screen_size: "12_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP','etCO2 Oridion','etCO2 Respironics','12-lead ECG']
},
{
    id: '11',
    name: "IntelliVue_MX550",
    acuity: "high_range",
    screen_type: "touch_screen",
    screen_size: "15_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP']
},
{
    id: '12',
    name: "IntelliVue_MX700",
    acuity: "high_range",
    screen_type: "touch_screen",
    screen_size: "15_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP','etCO2 Oridion','etCO2 Respironics','12-lead ECG']
},
{
    id: '13',
    name: "IntelliVue_MX800",
    acuity: "high_range",
    screen_type: "touch_screen",
    screen_size: "15_inch",
    basic_feautures: d,
    add_ons: ['SpO2','Masimo SET', 'Dual IBP','etCO2 Oridion','etCO2 Respironics','12-lead ECG','Cardiac output']
}


];


const prompts = require('readline').createInterface(process.stdin, process.stdout);

module.exports = {

    specIntelliVue: function () {
        prompts.resume();
        prompts.question("\n\nall IntelliVue products have touch screen. What is your preferred screen size?\n1. 10 inch\n2. 12 inch\n3. 15 inch\nEnter your option:", function (screen_size) {
            product["screen_type"] = "touch_screen";
            product["screen_size"] = module.exports.intelliVue_screenSize(screen_size);
            product["basic_features"] = d;
            if(screen_size==1){
                prompts.question("\n\nBasic features available are " + product['basic_features'] + "\nDo you need any extra add-on: \n1.SpO2\n2.Masimo SET\n3.Dual IBP\n4.All\n5.None\nEnter your option:", function (addon) {
                
                    product["add_ons"] = module.exports.ten_inch_intelliVue_addontype(addon);
                    search.callfuntionSearch(list,product);

                    process.exit();
    
                });
            }
            else if(screen_size==2){
                prompts.question("\n\nBasic features available are " + product['basic_features'] + "\nDo you need any extra add-on: \n1.SpO2\n2.Masimo SET\n3.Dual IBP\n4.etCO2 Oridion\n5.etCO2 Respironics\n6.12-lead ECG\n7.All\n8.None\nEnter your option:", function (addon) {
                
                    product["add_ons"] = module.exports.addontype(addon);
                    search.callfuntionSearch(list,product);
                    process.exit();
    
                });
            }
            else if(screen_size==3){
                prompts.question("\n\nBasic features available are " + product['basic_features'] + "\nDo you need any extra add-on: \n1.SpO2\n2.Masimo SET\n3.Dual IBP\n4.etCO2 Oridion\n5.etCO2 Respironics\n6.12-lead ECG\n7.Cardiac output\n8.All\n9.None\nEnter your option:", function (addon) {
                
                    product["add_ons"] = module.exports.addontype(addon);
                    search.callfuntionSearch(list,product);
                    process.exit();
    
                });
            }
            

        });


    },

    specEfficia: function () {
        prompts.resume();
        prompts.question("\n\nDo you want a PMS with:\n1.Touch\n2.Non-touch\nEnter your option:", function (screen_type) {
            if (screen_type == 1) {
                prompts.question("\n\nWhat is your preferred screen size?\n1. 10 inch\n2. 12 inch\n3. 15 inch\nEnter your option:", function (screen_size) {
                    prompts.question("\n\nBasic features available are " + product['basic_features'] + "\nDo you need any extra add-on: \n1.SpO2\n2.Masimo SET\n3.Dual IBP\n4.All the above\n5.None\nEnter your option:", function (addon) {
                        product["screen_type"] = module.exports.screenType(screen_type);
                        product["screen_size"] = module.exports.touch_screenSize(screen_size);
                        product["basic_features"] = d;
                        product["add_ons"] = module.exports.addontype(addon);
                        search.callfuntionSearch(list,product);
                        process.exit();
                    });
                });
            }
            else if (screen_type == 2) {
                prompts.question("\n\nWhat is your preferred screen size?\n1. 10 inch\n2. 12 inch\n", function (screen_size) {
                    prompts.question("\n\nDo you need any extra add-on: \n1.SpO2\n2.Masimo SET\n3.Dual IBP\n4.All the above\n5.None\n ", function (addon) {
                        product["screen_type"] = module.exports.screenType(screen_type);
                        product["screen_size"] = module.exports.non_touch_screenSize(screen_size);
                        product["basic_features"] = d;
                        product["add_ons"] = module.exports.addontype(addon);
                        search.callfuntionSearch(list,product);
                        process.exit();
                    });
                });
            }
        });
    },

    specGW: function () {
        prompts.resume();
        prompts.question("\n\nDo you want a PMS with:\n1.Touch\n2.Non-touch\nEnter your option:", function (screen_type) {
            if (screen_type == 1) {
                prompts.question("\n\nWhat is your preferred screen size?\n1. 10 inch\n2. 12 inch\nEnter your option:", function (screen_size) {
                    product["screen_type"] = module.exports.screenType(screen_type);
                    product["screen_size"] = module.exports.touch_screenSize(screen_size);
                    product["basic_features"] = d;
                    search.callfuntionSearch(list,product);
                    process.exit();
                });
            }
            else if (screen_type == 2) {
                prompts.question("\n\nWhat is your preferred screen size?\n1. 10 inch\n2. 12 inch\nEnter your option:", function (screen_size) {

                    product["screen_type"] = module.exports.screenType(screen_type);
                    product["screen_size"] = module.exports.non_touch_screenSize(screen_size);
                    product["basic_features"] = d;
                    search.callfuntionSearch(list,product);
                    process.exit();
                });
            }
        });
    },

    intro: function () {
        prompts.question("Hello. Enter your name:\n", function (user_name) {
            prompts.question("\n\nEnter Your Mobile No. \n", function (mobile) {
                prompts.question("\n\nFor what type of hospital do you need Patient Monitoring System(PMS)," + user_name + "?\n1.Tier-1 hospital(4 or more beds in ICU)\n2.Tier-2 hospital(less than 4 beds in ICU)\n3.Nursing Home or Clinic\nEnter your option:", function (user_type) {
                    userdetails["user_type"] = user_type;
                    userdetails["mobile_number"] = mobile;
                    if (user_type == 1) {
                        prompts.question("\n\nThese are the devices available for you:\n1.Medium Acuity(Efficia Series products - When both budget and quality matter)\n2.Low Acuity(GW Series products - cost-effective, easy to use, and easy to support patient monitor)\n3.High Acuity(IntelliVue Series products - powerful monitoring supplying comprehensive patient information at a glance)\nEnter your option:", function (acuity) {
                            product["acuity"] = module.exports.acuityType(acuity);
                            prompts.pause();
                            if (acuity == 1) {
                                module.exports.specEfficia();
                            }
                            else if (acuity == 2) {
                                module.exports.specGW();
                            }
                            else if (acuity == 3) {
                                module.exports.specIntelliVue();
                            }
                            process.exit;
                        });
                    }
                    else if (user_type == 2 || user_type == 3) {
                        prompts.question("\n\nThese are the devices available for you:\n1.Medium Acuity(Efficia Series products - When both budget and quality matter)\n2.Low Acuity(GW Series products - cost-effective, easy to use, and easy to support patient monitor)\nEnter your option:", function (acuity) {
                            product["acuity"] = module.exports.acuityType(acuity);
                            prompts.pause();
                            if (acuity == 1) {
                                module.exports.specEfficia();
                            }
                            else if (acuity == 2) {
                                module.exports.specGW();
                            }
                            process.exit;
                        });
                    }
                });
            });
        });
    },


    acuityType : function(option){
        
            switch(option){
                case '1':
                    return "mid_range";
                case '2':
                    return "low_range";
                case '3':
                    return "high_range";
            }
        
    
    },

    screenType : function(option){
        switch(option){
            case '1':
                return "touch_screen";
            case '2':
                return "non_touch_screen";
        }
    },

    intelliVue_screenSize : function(option){
        switch(option){
            case '1':
                return "10_inch";
            case '2':
                return "12_inch";
            case '3':
                return "15_inch";
        }
        
    },
    efficia_touch_screenSize : function(option){
        switch(option){
            case '1':
                return "10_inch";
            case '2':
                return "12_inch";
            case '3':
                return "15_inch";
        }
        
    },
    efficia_non_touch_screenSize : function(option){
        switch(option){
            case '1':
                return "10_inch";
            case '2':
                return "12_inch";
            
        }
        
    },
    gw_non_touch_screenSize : function(option){
        switch(option){
            case '1':
                return "10_inch";
            case '2':
                return "12_inch";
            
        }
        
    },
    
    intelliVue_addontype : function(selected_option){
        switch(selected_option){
            case '1':
                return "SpO2";
            case '2':
                return "Masimo SET";
            case '3':
                return "Dual IBP";
            case '4':
                return "etCO2 Oridion";
            case '5':
                return "etCO2 Respironics"
            case '6':
                return ['SpO2','Masimo SET', 'Dual IBP','etCO2 Oridion','etCO2 Respironics','12-lead ECG'];
            case '7':
                return "None"
        }
    },
    
    addontype : function(selected_option){
        switch(selected_option){
            case '1':
                return "SpO2";
            case '2':
                return "Invasive Blood pressure";
            case '3':
                return "ECG";
            case '4' :
                return ['invasive_bp', 'ecg', 'co2'];
            case '5':
                return "None"
        }
    }
}

let specsflow = require('./bot.js');
specsflow.intro();