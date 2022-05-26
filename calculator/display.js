function get_json(){
    let jsonData;
    fetch('output.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        jsonData = myJson;
    });
    return jsonData;
}

console.log(get_json());