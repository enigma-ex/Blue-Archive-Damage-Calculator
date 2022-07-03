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
        
    if (base_ATK.value !== '' && favorability_ATK.value !== '' && equip_ATK.value !== '') {
        ATKdict["base"] = Number(base_ATK.value);
        ATKdict["fav"] = Number(favorability_ATK.value);
        ATKdict["equip"] = Number(equip_ATK.value);
    }
    else {
        alert("存在必填項無填入值");
        return;
    }

    if(back_row_ATK.value !== '')
        ATKdict["back"] = Number(back_row_ATK.value);
    else
        ATKdict["back"] = 0;

    if(unique_weapon_ATK.value !== '')
        ATKdict["uni"] = Number(unique_weapon_ATK.value);
    else
        ATKdict["uni"] = 0;

    if(buff_value_ATK.value !== ''){
        let buffvATK_set = document.getElementsByClassName("buff_value_ATK");
        console.log(buffvATK_set, "V");
        let buffvATK_set_sum = Number(buff_value_ATK.value);
        for (let i=0;i<buffvATK_set.length;i++){
            buffvATK_set_sum += Number(buffvATK_set[i].value);
        }
        console.log(buffvATK_set_sum);
        ATKdict["buffv"] = Number(buffvATK_set_sum);
    }
    else
        ATKdict["buffv"] = 0;
 
    if(buff_percentage_ATK.value !== ''){
        let buffpATK_set = document.getElementsByClassName("buff_percentage_ATK");
        let buffpATK_set_sum = Number(buff_percentage_ATK.value);
        for (let i=0;i<buffpATK_set.length;i++){
            buffpATK_set_sum += Number(buffpATK_set[i].value);
        }
        console.log(buffpATK_set_sum);
        ATKdict["buffp"] = Number(buffpATK_set_sum);
    }
    else
        ATKdict["buffp"] = 0;

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

//parameter can more
function not_number(){
    let value = arguments;
    for (let i=0;i<value.length;i++){
        if (isNaN(value[i]))
            return true;
    }
    return false;
}

function fold_atk(){

    let atk_field = document.getElementById("atk-field");
    let fold_button_atk = document.getElementById("fold-button-atk");

    if(atk_field.style.height === "auto") {
        atk_field.style.height = 0;
        fold_button_atk.textContent = "顯示攻擊力";
    }
    else {
        atk_field.style.height = "auto";
        fold_button_atk.textContent = "隱藏攻擊力";
    }

}