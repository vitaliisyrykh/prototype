"use sttict";

//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr3);

/* Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */

const arrPush = [1, 2, 3];
const arrUnshift = [1, 2, 3];

arrPush.push(4, 5, 6);

arrUnshift.unshift(4, 5, 6);

/**
  *  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

  */

const arrShift = ["js", "css", "jq"];
const arrPop = ["js", "css", "jq"];

arrShift.shift();
arrPop.pop();

/**
 * Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
 *  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
 */

const arrSlice1 = [1, 2, 3, 4, 5];
const arrSlice2 = [1, 2, 3, 4, 5];
arrSlice.slice(0, 3);
arrSlice2.slice(3);

/**
     *  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

     */

const arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(1, 2);

const arrSplice1 = [1, 2, 3, 4, 5];
arrSplice1.splice(0, 1);
arrSplice1.splice(3, 1);

const arrSplice2 = [1, 2, 3, 4, 5];
arrSplice2.splice(3, 0, "a", "b", "c");

const arrSplice3 = [1, 2, 3, 4, 5];
arrSplice3.splice(1, 0, "a", "b");
arrSplice3.splice(6, 0, "c");

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arrSort = [3, 4, 1, 2, 7];

arrSort.sort();

//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

const obj = {
  js: "test",
  jq: "hello",
  css: "word",
};

console.log(Object.keys(obj));

//

function getMinAndMaxNumbers() {
  return [getMinValue(arguments), getMaxValue(arguments)];
}

function getMinValue() {
  let min = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}

function getMaxValue() {
  let max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

//Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const array = [12, 15, 20, 25, 59, 79];
function abc() {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

/*=========(Math.random)==========
Выведите на экран случайное целое число от 1 до 100.
Заполните массив 10-ю случайными целыми числами.*/

const arrRandom = [];
for (i = 0; i <= 10; i++) {
  arrRandom.push(Math.floor(Math.random() * 101));
}
