
base_ATK = base_ATK.value;
favorability_ATK = favorability_ATK.value,
back_row_ATK = back_row_ATK.value,
equip_ATK = equip_ATK.value,
passive_skill_ATK = passive_skill_ATK.value;
var total_ATK = 1;

function display(){
    let el = document.getElementById('output');
    total_ATK = (base_ATK + favorability_ATK + back_row_ATK) * (1 + 0.01 * equip_ATK + 0.01 * passive_skill_ATK);
    console.log(total_ATK);
    el.textContent = total_ATK;
}