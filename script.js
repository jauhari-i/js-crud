var selectedRow = null

function onSubmit() {

    var formData = readFormData();

    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
    
}

function readFormData() {
    var formData = {};
    formData["nama"] = document.getElementById("nama").value;
    formData["kelas"] = document.getElementById("kelas").value;
    formData["alamat"] = document.getElementById("alamat").value;
    formData["sekolah"] = document.getElementById("sekolah").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nama;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.kelas;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.alamat;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.sekolah;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a class="btn btn-md btn-info" onClick="onEdit(this)">Edit</a>
                       <a class="btn btn-md btn-danger" onClick="onDelete(this)">Delete</a>`;

    

}

function resetForm() {
    document.getElementById("nama").value = "";
    document.getElementById("kelas").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("sekolah").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nama").value = selectedRow.cells[0].innerHTML;
    document.getElementById("kelas").value = selectedRow.cells[1].innerHTML;
    document.getElementById("alamat").value = selectedRow.cells[2].innerHTML;
    document.getElementById("sekolah").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nama;
    selectedRow.cells[1].innerHTML = formData.kelas;
    selectedRow.cells[2].innerHTML = formData.alamat;
    selectedRow.cells[3].innerHTML = formData.sekolah;
}

function onDelete(td) {
    if (confirm('Anda yakin mau menghapus data ini ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}