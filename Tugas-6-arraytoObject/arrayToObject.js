function arrayToObject(orang) {
    var now = new Date();
    var thisYear = now.getFullYear();
    Object.keys(orang).map(function (objectKey, index) {
        var value = orang[objectKey];
        var age;

        age = value[3] && value[3] <= thisYear ? thisYear - value[3] : "Invalid"
        // if(value[3] && value[3] <= thisYear ){
        //     age = thisYear - value[3];
        // }else{
        //     age = "Invalid";
        // }
        let orang1 = {
            'firstname ': value[0],
            'lastname':value[1],
            'gender' :value[2],
            'age':age,
        }

        console.log((parseInt(objectKey) + 1) + '. ' + value[0], value[1] + ':'+JSON.stringify(orang1));
    });
}
var orang = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female", 2030] ];
arrayToObject(orang);


    // console.log("1. ", orang1.Firstname, orang1.Lastname, ": { firstname : ", '"', orang1.Firstname,'",', "lastName : ",'"', orang1.Lastname, '",', "gender : ", orang1.Gender, '",', "age : ", thisYear-orang1.Birthyear, "}")

