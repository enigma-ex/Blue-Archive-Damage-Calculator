function get_json(){
    let jsonData;
    console.log(1);
    fetch('output.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        jsonData = myJson;
    });
    console.log(jsonData);
    return jsonData;
}
get_json();
console.log(get_json());
// test