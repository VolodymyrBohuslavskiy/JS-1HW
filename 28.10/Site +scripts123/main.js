// 3. Завантажити з мережі будь-який шаблон сайту.
//     Підключити до нього свій скріпт-файл.
//     У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id

let elementById = [document.getElementById('q1'),document.getElementById('q2'),document.getElementById('q3')];
for (let obj of elementById) {
    console.log(obj);
}

// - знайти всі параграфи ,та змінити текст на hello oktenweb!
let p = document.querySelectorAll('p');
for (let obj of p) {
    obj.innerText='hello oktenweb'
}
console.log(p);

//     - знайти всі div та змінити ім колір на червоний
let d = document.querySelectorAll('div');
console.log(d);
for (let obj of d) {
    obj.style.color='red';
}
































