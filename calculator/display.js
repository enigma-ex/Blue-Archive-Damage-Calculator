async function default_input_button(){
    const src = "./output.json";
    const response = await fetch(src);
    const input_data = await response.json();
    const default_data = input_data["default"];

    let input_value = document.getElementsByClassName("inputValue")[0];
    let ATK_input, hint_div, hint_img, hint_p;
    input_value.innerHTML += "<br>";
    for (let i=0;i < default_data.length; i++){
        ATK_input = document.createElement("input");
        hint_div = document.createElement("div");
        hint_img = document.createElement("img");
        hint_p = document.createElement("p");
        
        input_value.append(default_data[i]["text"]);
        // hint set
        hint_div.className = "hint";
        hint_img.src = "../images/buttons/information_button.svg";
        hint_p.className = "hint_text";
        hint_p.textContent = default_data[i]["hint_text"];

        // ATK input set
        ATK_input.type = "text";
        ATK_input.id = default_data[i]["id"];
        ATK_input.placeholder = default_data[i]["placeholder"];
        ATK_input.setAttribute("onkeydown", "handle_enter(event)");

        hint_div.appendChild(hint_img);
        hint_div.appendChild(hint_p);
        input_value.appendChild(hint_div);
        input_value.appendChild(ATK_input);

        //if buff_value or buff_percentage
        if ((i === 5) || (i === 6)){
            let v_p="";
            if (i === 5)
                v_p = "value";
            else
                v_p = "percentage";
                
            input_value.innerHTML += '<button class = "button_type1" id = "add_input_check" \
                                            onclick = "add_input_check(\''+v_p+'\')">增加</button>';
            input_value.innerHTML += '<div id = "add_input_'+v_p+'"></div>';
        }
        input_value.innerHTML += "<br>";
    }
}

default_input_button();