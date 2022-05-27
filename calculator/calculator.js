class Character {
    constructor(ATK, Damage) {
        this.ATK = ATK;
        this.Damage = Damage;
        //TODO
    }
}

class Atk {
    constructor(base_ATK, favorability_ATK, equip_ATK, back_row_ATK, buff_percentage_ATK, site_suitability) {
        this.base_ATK = base_ATK;
        this.favorability_ATK = favorability_ATK;
        this.equip_ATK = equip_ATK;
        this.back_row_ATK = back_row_ATK;
        this.buff_percentage_ATK = buff_percentage_ATK;
        this.site_suitability = site_suitability;
    }

    getATK() {
        var total_ATK = (this.base_ATK + this.favorability_ATK + this.back_row_ATK) * (1 + 0.01 * this.equip_ATK + 0.01 * this.buff_percentage_ATK) * this.site_suitability;
        console.log(total_ATK);
        return total_ATK;
    }
}

class Damage {
    constructor(ATK) {
        this.ATK = ATK;
        //TODO
    }
}

function display(){
    var bATK, fATK, brATK, eATK, buffpATK;

    if(base_ATK.value !== '' && favorability_ATK.value !== '' && equip_ATK.value !== '') {
        bATK = Number(base_ATK.value);
        fATK = Number(favorability_ATK.value);
        eATK = Number(equip_ATK.value);
    }
    else {
        alert("存在必填項無填入值");
        return;
    }

    if(back_row_ATK.value !== '')
        brATK = Number(back_row_ATK.value);
    else
        brATK = 0;

    if(buff_percentage_ATK.value !== ''){
        let buffpATK_set = document.getElementsByClassName("buff_percentage_ATK");
        let buffpATK_set_sum = Number(buff_percentage_ATK.value);
        for (let i=0;i<buffpATK_set.length;i++){
            buffpATK_set_sum += Number(buffpATK_set[i].value);
        }
        console.log(buffpATK_set_sum);
        buffpATK = Number(buffpATK_set_sum);
    }
    else
        buffpATK = 0;

    mood = Number(site_suitability.value);
    console.log(bATK, fATK, eATK, brATK, buffpATK, mood);
    var ATK = new Atk(bATK, fATK, eATK, brATK, buffpATK, mood);
    var total_ATK = ATK.getATK();

    let elTitle = document.getElementById('output-title');
    let elValue = document.getElementById('output-value');

    elTitle.textContent = "角色攻擊力";
    elValue.textContent = Math.floor(total_ATK);
    
    popup();

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