function handle_enter(event){
    let input_value = document.getElementsByClassName('inputValue')[0].getElementsByTagName('input');
    let arr = Array.prototype.slice.call(input_value);
    if (event.key === "Enter" && arr.indexOf(event.target) < arr.length - 1){
        console.log(arr);
        arr[arr.indexOf(event.target) + 1].focus();
    }
}

function add_input_check(value_or_percentage){
    let add_item = document.createElement("div");
    add_item.className = "add_item";
    add_item.innerHTML += "<br>";
    let input_check = document.createElement("input");
    input_check.text = "text";

    if (value_or_percentage === "value") {
        input_check.className = "buff_value_ATK";
        input_check.placeholder = "增益/減益效果(預設+0)";
    }
    else if (value_or_percentage === "percentage") {
        input_check.className = "buff_percentage_ATK";
        input_check.placeholder = "增益/減益效果(預設+0%)";
   }
    add_item.appendChild(input_check);
    let delete_button = document.createElement("button");
    delete_button.textContent = "刪除";
    delete_button.className = "button_type2";
    add_item.append(delete_button);

    let add_input = document.getElementById("add_input_"+value_or_percentage);
    add_input.appendChild(add_item);
    delete_button.addEventListener('click',function(){
        this.parentNode.remove();
    })

    input_check.addEventListener('keydown',function(event){
        let enter_to_add_input = document.getElementById('add_input_'+value_or_percentage).getElementsByTagName('input');
        let arr = Array.prototype.slice.call(enter_to_add_input);
        if (event.key === "Enter" && arr.indexOf(event.target) < arr.length - 1){
            arr[arr.indexOf(event.target) + 1].focus();
        }
    })
}

document.getElementById("close-button").addEventListener("click", close_window);

function popup(){

    let win = document.getElementsByClassName("box-output")[0];
    win.style.opacity = 1;
    win.style.transform = 'scale(1, 1)';

}

function close_window(){

    let win = document.getElementsByClassName("box-output")[0];
    win.style.opacity = 0;
    win.style.transform = 'scale(0, 0)';

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

async function Tip(){
    const src = "./Tip.json";
    const response = await fetch(src);
    const Tip_file = await response.json();
    const Tip_data = Tip_file["Tip"];
    let Tip_output = document.getElementsByClassName("output-value")[1];
    Tip_output.textContent = Tip_data[Math.floor(Math.random()*Tip_data.length)];
    console.log(Math.floor(Math.random()*Tip_data.length));
}