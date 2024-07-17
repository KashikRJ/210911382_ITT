function calculateSquaresAndCubes() {
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    for (let i = 0; i <= 10; i++) {
        let row = `<tr>
            <td>${i}</td>
            <td>${i * i}</td>
            <td>${i * i * i}</td>
        </tr>`;
        tableBody.innerHTML += row;
    }
}
