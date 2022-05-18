class Character {
    constructor(ATK) {
        this.ATK = ATK;
    }

}

class Atk {
    constructor(base_ATK, favorability_ATK, back_row_ATK, equip_ATK, passive_skill_ATK) {
        this.back_row_ATK = base_ATK;
        this.favorability_ATK = favorability_ATK;
        this.back_row_ATK = back_row_ATK;
        this.equip_ATK = equip_ATK;
        this.passive_skill_ATK = passive_skill_ATK;
    }

    getATK() {
        
        var total_ATK = 1;
        total_ATK = (base_ATK + favorability_ATK + back_row_ATK) * (1 + 0.01 * equip_ATK + 0.01 * passive_skill_ATK);

        return total_ATK;

    }

}

function display(){

    base_ATK = base_ATK.value;
    favorability_ATK = favorability_ATK.value,
    back_row_ATK = back_row_ATK.value,
    equip_ATK = equip_ATK.value,
    passive_skill_ATK = passive_skill_ATK.value;

    console.log(base_ATK, favorability_ATK, back_row_ATK, equip_ATK, passive_skill_ATK);
    var ATK = new Atk(back_row_ATK, favorability_ATK, back_row_ATK, equip_ATK, passive_skill_ATK);
    total_ATK = ATK.getATK();
    console.log(total_ATK);

    let el = document.getElementById('output');
    el.textContent = total_ATK;

}