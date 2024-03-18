import {token} from '../Helpers/helper'
const apiUrl = "https://localhost:44397/api";

const getAllData = (entityName, setEntities) => {
    fetch(`${apiUrl}/${entityName}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            setEntities(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

const handleDelete = async (id, setUpdate, entityName, token) => {
    const response = await fetch(`${apiUrl}/${entityName}?id=${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    if (response.ok) {
        console.log(`${entityName} with ID ${id} deleted successfully`);
        setUpdate();
    } else {
        console.error(`Error deleting ${entityName} with ID ${id}:`, response.statusText);
    }
};

export { apiUrl, getAllData, handleDelete }