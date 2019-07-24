var requirement = { 
  acuity: 'high_range',
  screen_type: 'touch_screen',
  screen_size: '10_inch',
  basic_feautures:
   [ '3- and 5-lead ECG',
     'Philips ST analysis',
     'Impedance respiration',
     'Philips NBP',
     'Dual continuous temp' ],
  add_ons: [ 'SpO2', 'Masimo SET', 'Dual IBP', 'etCO2 Oridion' ]
 }

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

var v = list[7];



function compare(list,product){
    var p = [];

        S1 = JSON.stringify(product);
        S2 = JSON.stringify(list);

        p.push(similarity(S1,S2));
    
        console.log(p.length);
        console.log(p);
        return p;
}

function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return parseFloat(((longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)) * 100);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}


module.exports = {callfuntionCompre : compare};
console.log(v);
compare(v,requirement);


