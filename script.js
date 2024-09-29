document.getElementById('registrationForm').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    try {
        const response = await axios.post('http://localhost:8070/api/users/register', {
            name: name,
            address: address
        });
    
        document.getElementById('message').innerText = response.data.message;
        document.getElementById('registrationForm').reset(); 
    } catch (error) {
        console.error('Error:', error); 
        const errorMessage = error.response ? error.response.data.message : 'An unexpected error occurred';
        document.getElementById('message').innerText = 'An error occurred: ' + errorMessage;
    }
    
});
