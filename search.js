
let compare = require('./compare');
function searchAll(list,product){

    /** for( i =0; i<list.length; i++){
        if(JSON.stringify(product) === JSON.stringify(list[i])){
            console.log(list[i]);
        }else{
            console.log("No matches found.....")
        }
    } */

    for( i =0; i<list.length; i++){
        if(list[i].acuity == product.acuity){
            if((list[i].screen_type == product.screen_type) && (list[i].screen_size == product.screen_size)){
                    var v = list[i];
                    var key = "id";
                    var key1 = "name";

                    delete v[key];
                    delete v[key1];
                    console.log(v);

                    compare.callfuntionCompre(v,product);
            }else{
                console.log("not matched with "+list[i]);
            }   
        }else{
            console.log("no produtcs in this required acquity");
        }
        
    }
}


module.exports = {callfuntionSearch : searchAll};  
