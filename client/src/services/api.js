// The methods for each kind of request we'll make
import axios from 'axios';

export function saveLoadouts(){
    return axios.post("api/loadouts", loadouts);
}

export function getLoadouts() {
    return axios.get("api/loadouts")
        .then(
            function(res) {
                return res.data
            }
        ); 
}

// export function saveExample(example) {
//     return axios.post("api/examples", example);
// }

// export function getExamples() {
//     return axios.get("api/examples").then(
//         function(res) {
//             return res.data;
//         }
//     );
// }

// export function getExample(id) {
//     return axios.get("api/examples/" + id).then(
//         function(res) {
//             return res.data;
//         }
//     );
// }

// export function deleteExample(id) {
//     return axios.delete("api/examples/" + id);
// }
