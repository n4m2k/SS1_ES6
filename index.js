// 1.2
// 2.1
// 3.1
// 4.3
// 5.4
// 6.1
// 7.3
// 8.2
// 9.3
//10.2
//11.1
//12.2
//13.4


//Bài 1: Đảo ngược
// function daonguoc(a) {
//     newStr = a.split("").reverse().join("");
//     console.log(newStr);
// }

// function daong() {
//     const string = "abcdeee";
//     let string2 = "";
//     for (let i = string.length - 1; i < 0; i--) {
//         string2 += string
//     }
//     console.log(string2);
// }
// daong();
// daong('abcdeee')
// daonguoc('baaaaasdc')

//Bài 2: Xóa trùng lặp
let mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 6, 6];
// function xoatrunglap(a) {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] == a[j]) {
//                 a.splice(j, 1)
//             }
//         }
//     }
//     console.log(a);
// }
// xoatrunglap(mang)

//Bài 3: Lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
function demtrunglap(a) {
    let max = 0;
    let value;
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[i] == a[j]) {
                count++;
                if (max < count) {
                    max = count;
                    value = a[i];
                }
            }
        }
    }
    console.log(`value: ${value}, count: ${max}`);
}
demtrunglap(mang);
