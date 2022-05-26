function get_json(){
    let jsonData;
    fetch('output.json')
    .then(function(response) {
        console.log( response.json());
    })
    // return jsonData;
    console.log(jsonData);
}
console.log(get_json());