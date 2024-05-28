let myPhone = new PhoneManager('Phone');
let list = myPhone.listPhone;
showPhones();
function showPhones(){
    document.getElementById('result').innerHTML=`
    <table border = '1' cellspacing="0" cellpadding="10">
    <tr>
    <td>Madienthoai</td>
    <td>Tendienthoai</td>
    <td>Hangsanxuat</td>
    <td>Gia</td>
    </tr>
    <tbody id="listPhone">
    </tbody>
</table>
    `
    let html=``;
    for (let i = 0; i <list.length; i++) {
        html+=`
 <tr>
    <td>${list[i].Madienthoai}</td>
    <td>${list[i].Tendienthoai}</td>
    <td>${list[i].Hangsanxuat}</td>
    <td>${list[i].Gia}</td>
  </tr>
        `
    }
    document.getElementById('listPhone').innerHTML=html;
}
function showFormAdd(){
    document.getElementById('result').innerHTML=`
    <input type="text" id="code" placeholder="code">
    <input type="text" id="name" placeholder="Name">
    <input type="text" id="manufacturer" placeholder="manufacturer">
    <input type="text" id="price" placeholder="price">
    <button onclick="add()">Add</button>
    `
}
function add(){
    let code = document.getElementById('code').value;
    let name = document.getElementById('name').value;
    let manufacturer = document.getElementById('manufacturer').value;
    let price = document.getElementById('price').value;
    let newProduct= new Phone(code, name,manufacturer, price);
    myPhone.add(newProduct);
    showPhones();
}