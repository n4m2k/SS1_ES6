datas = [{
    name:"Alice",
    number:"(816)-403-5456"
},
{
    name:"Bob",
    number:"(512)-566-2397"
},
{
    name:"Cris",
    number:"(864)-309-4841"
},
{
    name:"Daniel",
    number:"(816)-403-5456"
},
{
    name:"Nam",
    number:"(037)-357-5340"
},
];
let listData = [];
if (localStorage.getItem("listData")) {
  listData = JSON.parse(localStorage.getItem("listData"));
} else {
  localStorage.setItem("listData", JSON.stringify(datas));
}

//Sắp xếp
function sapxep(data){
    data.sort(function(a,b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
    if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
    return 0;
})
}
sapxep(listData);

//Render danh sách
function loadData(data1){
let list_num = document.querySelector(".list_num");
function listDatas(datas){
    return `
            <div class="item_num">
                <p class="name-item">${datas.name}</p>
                <p class="phone-item">${datas.number}</p>
            </div>
    `
}
list_num.innerHTML = data1.map(listDatas).join("");
}

loadData(listData);

//Thêm số
let btn_add = document.querySelector('.btn_add');
btn_add.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.querySelector(".name");
    let phone = document.querySelector(".phone");
    let arr = {name:name.value, number:phone.value}
    listData.push(arr);
    localStorage.setItem("listData", JSON.stringify(listData));
    sapxep(listData);
    loadData(listData);
    name.value ="";
    phone.value ="";
});

//Tìm kiếm theo tên hoặc số điện thoại

let search = document.querySelector('.btn_search');
search.addEventListener("click", function(e) {
    e.preventDefault();
    let input = document.querySelector('.search');
    let filter = input.value.toUpperCase();
    let num_item = document.querySelectorAll('.item_num');
    for(i=0; i<num_item.length; i++) {
        let p = num_item[i].querySelector('.name-item');
        let name = p.textContent;
        let p1 = num_item[i].querySelector('.phone-item');
        let phone = p1.textContent;
        if(name.toUpperCase().indexOf(filter) > -1 ||phone.toUpperCase().indexOf(filter) > -1){
            num_item[i].style.display = '';
        }else{
            num_item[i].style.display = 'none';
        }
    }
})

//Xóa trùng lặp
let btn_delete = document.querySelector('.btn_delete');
btn_delete.addEventListener('click', function(e) {
    e.preventDefault();
    for (let i = 0; i < listData.length; i++) {
        for (let j = i+1; j < listData.length; j++) {
            if (listData[i].number == listData[j].number) {
                listData.splice(j, 1)
            }
        }
    }
    localStorage.setItem("listData", JSON.stringify(listData));
    sapxep(listData);
    loadData(listData);
})
