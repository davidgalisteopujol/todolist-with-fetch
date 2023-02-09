export const getList = async () => {
    
    try {
            
        const response = await fetch(`https://assets.breatheco.de/apis/fake/todos/user/david`); 
        const responseJSON = await response.json();

        if(response.status <=200 && response.status <=300) {

            console.log("esto funciona");
            console.log("esto es lo que devuelve el responseJSON:" +responseJSON)

            return responseJSON;


        } else if(response.status >=400) {

            console.log("esto falla")

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify([]);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://assets.breatheco.de/apis/fake/todos/user/david", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
        
    }catch (error) {
        console.error("GET error: ", error);
    }
}