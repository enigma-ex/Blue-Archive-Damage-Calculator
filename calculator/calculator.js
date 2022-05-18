class Character {
    constructor(ATK, Damage) {
        this.ATK = ATK;
        this.Damage = Damage;
        //TODO
    }
}

class Atk {
    constructor(base_ATK, favorability_ATK, back_row_ATK, equip_ATK, passive_skill_ATK, site_suitability) {
        this.base_ATK = base_ATK;
        this.favorability_ATK = favorability_ATK;
        this.back_row_ATK = back_row_ATK;
        this.equip_ATK = equip_ATK;
        this.passive_skill_ATK = passive_skill_ATK;
        this.site_suitability = site_suitability;
    }

    getATK() {
        var total_ATK = (this.base_ATK + this.favorability_ATK + this.back_row_ATK) * (1 + 0.01 * this.equip_ATK + 0.01 * this.passive_skill_ATK) * this.site_suitability;
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

    var bATK, fATK, brATK, eATK, psATK;

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

    if(passive_skill_ATK.value !== '')
        psATK = Number(passive_skill_ATK.value);
    else
        psATK = 0;

    mood = Number(site_suitability.value);

    console.log(bATK, fATK, brATK, eATK, psATK, mood);
    var ATK = new Atk(bATK, fATK, brATK, eATK, psATK, mood);
    var total_ATK = ATK.getATK();

    let el = document.getElementById('output');
    el.textContent = total_ATK;

}
