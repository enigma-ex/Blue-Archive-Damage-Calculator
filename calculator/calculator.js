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

    el.textContent = "ATK: " + Math.floor(total_ATK);
}
function add_input_check(){
    let fileItem = document.createElement('div');
	fileItem.className = 'add-item';

	let input = document.createElement('input');
	input.type = "text";
    input.placeholder = "被動(預設+0%)(%)";
	fileItem.appendChild(input);
	
    let delete_button = document.createElement('button');
	delete_button.textContent = '刪除';
    delete_button.onclick = "delete_input_check()";
	fileItem.appendChild(delete_button);
	
    let add_input = document.getElementById("add_input");
	add_input.appendChild(fileItem);
    /*
    const list = document.getElementById('add_input');
    list.innerHTML = list.innerHTML + '<input type = "text" placeholder = "被動(預設+0%)(%)" />';
    list.innerHTML = list.innerHTML + '<button id = "' + a + '" onclick = "">刪除</button><br>';
    */
}

function delete_input_check(){
    let add_input = document.getElementById("add_input");
    add_input.removeChild(this.parentNode);
    this.parentNode.remove();
}
/*
btn.addEventListener('click',function(){
    //刪除當前按鈕節點所在父節點
$('file-box').removeChild(this.parentNode);
this.parentNode.remove();
}*/