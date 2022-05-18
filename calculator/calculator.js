


function display(){
    base_ATK = Number(base_ATK.value);
    favorability_ATK = Number(favorability_ATK.value),
    back_row_ATK = Number(back_row_ATK.value),
    equip_ATK = Number(equip_ATK.value),
    passive_skill_ATK = Number(passive_skill_ATK.value);
    var total_ATK = 1;
    let el = document.getElementById('output');
    total_ATK = (base_ATK + favorability_ATK) * (1 + 0.01 * equip_ATK + 0.01 * passive_skill_ATK);
    console.log(total_ATK);
    console.log(base_ATK, favorability_ATK, equip_ATK, passive_skill_ATK);
    el.textContent = total_ATK;
}