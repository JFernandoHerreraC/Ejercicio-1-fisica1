document.getElementById('guardar').addEventListener('click', function cap(e) {
    e.preventDefault();
    let gradosF = document.getElementById('inputF').value;
    if (gradosF < -274.14 || gradosF > 9932 || gradosF === '') {
        alert('Out of range');
    } else {
        let res = (gradosF - 32) * 5 / 9;
        document.getElementById('inputF').value = "";
        let celetorRes = document.getElementById('outcome');
        celetorRes.innerHTML = Math.round(res);
    }
    //Make by JFHC
})