function handle_enter(event){
    let input_value = document.getElementsByClassName('inputValue')[0].getElementsByTagName('input');
    let arr = Array.prototype.slice.call(input_value);
    if (event.key === "Enter" && arr.indexOf(event.target) < arr.length - 1){
        console.log(arr);
        arr[arr.indexOf(event.target) + 1].focus();
    }
}

function add_input_check(){
    let add_item = document.createElement("div");
    add_item.className = "add_item";

    add_item.innerHTML += "<br>";

    let input_check = document.createElement("input");
    input_check.text = "text";
    input_check.className = "passive_skill_ATK";
    input_check.placeholder = "被動&輔助技能(%)(預設+0%)";
    add_item.appendChild(input_check);

    let delete_button = document.createElement("button");
    delete_button.textContent = "刪除";
    delete_button.className = "button_type2";
    add_item.append(delete_button);

    let add_input = document.getElementById("add_input");
    add_input.appendChild(add_item);
    delete_button.addEventListener('click',function(){
        this.parentNode.remove();
    })

    input_check.addEventListener('keydown',function(event){
        let enter_to_add_input = document.getElementById('add_input').getElementsByTagName('input');
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