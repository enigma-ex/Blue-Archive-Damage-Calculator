const ERROR = -1;

class Character {
    constructor(ATK, Damage) {
        this.ATK = ATK;
        this.Damage = Damage;
        //TODO
    }
}

class Atk {
    constructor(ATKdict) {
        this.ATKdict = ATKdict;
    }

    getATK() {
        let radix = this.ATKdict["base"] + this.ATKdict["fav"] + this.ATKdict["back"] + this.ATKdict["uni"] + this.ATKdict["buffv"];
        let multiplier = 1 + (this.ATKdict["equip"] + this.ATKdict["buffp"]) * 0.01;
        let total_ATK = Math.round(radix * multiplier * this.ATKdict["mood"]);
        console.log("radix =", radix, "multiplier =", multiplier, "total_ATK =", total_ATK);
        return total_ATK;
    }
}

//TODO
class Damage {
    constructor(ATK, DamageDict) {
        this.ATK = ATK;
        this.dDict = DamageDict;
    }
}

function display(){
    let ATKdict = {base: null, fav: null, equip: null, back: null, uni: null, buffv: null, buffp: null, mood: null};

    if (not_number(base_ATK.value, favorability_ATK.value, equip_ATK.value,  
    back_row_ATK.value, unique_weapon_ATK.value, 
    buff_percentage_ATK.value, buff_value_ATK.value)){
        alert("請輸入數字");
        return;
    }
    
    if(requiredField(ATKdict, base_ATK.value, "base", favorability_ATK.value, "fav", equip_ATK.value, "equip") == ERROR)
        return;

    defaultField(ATKdict, back_row_ATK.value, "back", 0, unique_weapon_ATK.value, "uni", 0);

    flexibleField(ATKdict, buff_value_ATK.value, "buffv", "buff_value_ATK", 0, buff_percentage_ATK.value, "buffp", "buff_percentage_ATK", 0);

    ATKdict["mood"] = Number(site_suitability.value);
    for (key in ATKdict) {
        console.log(key, ATKdict[key]);
    }
    let ATK = new Atk(ATKdict);
    let total_ATK = ATK.getATK();

    let elValue = document.getElementsByClassName('output-value')[0];
    elValue.textContent = total_ATK;
    
    popup();
    Tip();
}

// parameter can more
function not_number(){
    let value = arguments;
    for (let i=0;i<value.length;i++){
        if (isNaN(value[i]))
            return true;
    }
    return false;
}

// example: requiredField(Dict, fieldValue1, DictKey1, fieldValue2, DictKey2, ... );
// values[i]:     fieldValue
// values[i + 1]: DictKey
function requiredField(Dict) {

    let values = arguments;
    for(let i = 1;i < values.length;i+=2) {

        if(values[i] == '') {
            alert("存在必填項無填入值");
            return ERROR;
        }
        else
            Dict[values[i + 1]] = Number(values[i]);
        
    }

    return 0;

}

// example: defaultField(Dict, fieldValue1, DictKey1, defaultValue1, fieldValue2, DictKey2, defaultValue2, ... );
// values[i]:     fieldValue
// values[i + 1]: DictKey
// values[i + 2]: defaultValue
function defaultField(Dict) {

    let values = arguments;
    for(let i = 1;i < values.length;i+=3) {

        if(values[i] == '')
            Dict[values[i + 1]] = values[i + 2];
        else
            Dict[values[i + 1]] = Number(values[i]);

    }

}

// example: flexibleField(Dict, fieldValue1, DictKey1, ClassName1, defaultValue1, fieldValue2, DictKey2, ClassName2, defaultValue2, ... );
// values[i]:     fieldValue
// values[i + 1]: DictKey
// values[i + 2]: CalssName
// values[i + 3]: defaultValue
function flexibleField(Dict) {

    let values = arguments;
    for(let i = 1;i < values.length;i+=4) {

        if(values[i] !== ''){

            let set = document.getElementsByClassName(values[i + 2]);
            let set_sum = Number(values[i]);
            for (let j = 0;j < set.length;j++){
                set_sum += Number(set[j].value);
            }
            console.log(set_sum);
            Dict[values[i + 1]] = Number(set_sum);

        }
        else
            Dict[values[i + 1]] = values[i + 3];

    }

}