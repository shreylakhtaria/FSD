function storeDetails() {
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mobileNo = document.getElementById('mobileNo').value;

    var userDetails = {
        name: name,
        gender: gender,
        email: email,
        password: password,
        mobileNo: mobileNo
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    alert('Signup details saved successfully!');
}