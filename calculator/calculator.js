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
    console.log(base_ATK.value, favorability_ATK.value, back_row_ATK.value, equip_ATK.value, passive_skill_ATK.value);

    const bATK = Number(base_ATK.value);
    const fATK = Number(favorability_ATK.value);
    const brATK = Number(back_row_ATK.value);
    const eATK = Number(equip_ATK.value);
    const psATK = Number(passive_skill_ATK.value);
    const mood = Number(site_suitability.value);

    console.log(bATK, fATK, brATK, eATK, psATK, mood);
    var ATK = new Atk(bATK, fATK, brATK, eATK, psATK, mood);
    var total_ATK = ATK.getATK();

    let el = document.getElementById('output');
    el.textContent = total_ATK;
}

function add_input_check(){
    const list = document.getElementById('add_input');
    console.log(list[0]);
    list.innerHTML = list.innerHTML + '<input type = "text" placeholder = "被動1(預設+0%)" />%<br>';
}

