let URL = "http://localhost:3000/";
let allEmployes = [];
const employesList =  document.querySelector(".allemployes");


function fetchDataEmployes(id){
    return fetch(URL + id)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }
        return response.text(); // Obtén el cuerpo de la respuesta como texto
    })
    .then((data) => {
        if (data.trim() !== "") {
            // Si el cuerpo no está vacío, intenta analizarlo como JSO
            const datajson = JSON.parse(data);
            showEmployes(datajson);
        } else {
            console.log("Empty response");
        }
    })
    .catch((error) => {
        console.error("Error fetching or parsing data:", error);
    });
}

const fetchPromises = [];
for (let i = 1; i < 16; i++) {
   fetchPromises.push(fetchDataEmployes(i));
}


function showEmployes(data){

const div = document.createElement('div');
    div.classList.add("card");
    div.innerHTML = `
        <div class="card">
        <p class="tittle">Employ #${data.id}</p>
        <hr>
        <p class="subtittle">Name</p>
        <p class="content name">${data.nombre}</p>
        <p class="subtittle">Salary</p>
        <p class="content salary">${data.salario}$</p>
        </div>
    `;

    employesList.append(div);

}

