"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["", "", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * todo
 * String 
 * methods
 */
// =================================================================
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var secondStr = '1234567890';
var regexp = /[A-D]/gi;
/**
 * 1
 * String.prototype[@@iterator]()
 * next() - возвращает { value: '', done: false }
 */

console.group('iterator');
var iter = str[Symbol.iterator](); //* StringIterator

console.log(iter.next()); //* {value: 'A', done: false}

console.log(iter.next().value); //* B

console.log(iter.next().value); //* C

console.groupEnd();
/**
 * 2
 * String.prototype.charAt()
 * str.charAt(index)
 * возвращает указанный символ из строки по индексу
 */

console.group('chartAt');
console.log(str.charAt(0)); //* A

console.groupEnd();
/**
 * 3
 * String.prototype.charCodeAt()
 * str.charCodeAt(index)
 * возвращает числовое значение Юникода для символа по указанному индексу
 */

console.group('charCodeAt');
console.log(str.charCodeAt(0)); //* 65

console.groupEnd();
/**
 * 4
 * String.prototype.codePointAt()
 * str.codePointAt(pos)
 * возвращает неотрицательное целое число, являющееся закодированным в UTF-16 значением кодовой точки
 */

console.group('codePointAt');
console.log(str.codePointAt(1)); //* 66

console.log(str.codePointAt(40)); //* undefined

console.groupEnd();
/**
 * 5
 * String.prototype.concat()
 * str.concat(string2, string3[, ..., stringN])
 * объединяет текст из двух или более строк и возвращает новую строку
 */

console.group('concat');
console.log(str.concat(secondStr)); //* ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890

console.groupEnd();
/**
 * 6
 * String.prototype.endsWith()
 * str.endsWith(searchString[, length]
 * searchString - Символы, искомые в конце строки
 * length - Необязательный параметр. Позволяет искать внутри строки, обрезая её по диапазону; по умолчанию равен длине строки.
 * позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соответственно, true или false
 */

console.group('endsWith');
console.log(str.endsWith('XYZ')); //* true

console.log(str.endsWith('ABC')); //* false

console.groupEnd();
/**
 * 7
 * String.fromCharCode()
 * String.fromCharCode(num1[, ...[, numN]])
 * num1, ..., numN -
 * последовательность чисел, являющихся значениями единиц кода UTF-16. Диапазон составляет от 0 до 65535 (0xFFFF)
 * возвращает строку, созданную из указанной последовательности значений единиц кода UTF-16
 */

console.group('fromCharCode');
console.log(String.fromCharCode(65, 66, 67)); //* ABC

console.groupEnd();
/**
 * 8
 * String.fromCodePoint()
 * String.fromCodePoint(num1[, ...[, numN]])
 * num1, ..., numN -
 * последовательность кодовых точек
 * возвращает строку, созданную из указанной последовательности кодовых точек
 */

console.group('fromCodePoint');
console.log(String.fromCodePoint(36)); //* $

console.groupEnd();
/**
 * 9
 * String.prototype.includes()
 * str.includes(searchString[, position])
 * searchString - cтрока для поиска в данной строке
 * position - позиция в строке, с которой начинать поиск строки  searchString, по умолчанию 0.
 * проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false
 */

console.group('includes');
console.log(str.includes('A')); //* true

console.groupEnd();
/**
 * 10
 * String.prototype.indexOf()
 * str.indexOf(searchValue, [fromIndex])
 * searchValue - cтрока, представляющая искомое значение
 * fromIndex - местоположение внутри строки, откуда начинать поиск
 * возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено
 */

console.group('indexOf');
console.log(str.indexOf('B')); //* 1

console.groupEnd();
/**
 * 11
 * String.prototype.lastIndexOf()
 * str.lastIndexOf(searchValue[, fromIndex])
 * searchValue - cтрока, представляющая искомое значение
 * fromIndex - местоположение внутри строки, откуда начинать поиск, нумерация индексов идёт слева направо
 * возвращает индекс последнего вхождения указанного значения в строковый объект String, на котором он был вызван, или -1, если ничего не было найдено
 */

console.group('lastIndexOf');
console.log(str.lastIndexOf('B')); //* 1

var lastIndexOfString = 'dolor';
console.log(lastIndexOfString.lastIndexOf('o')); //* 3

console.groupEnd();
/**
 * 12
 * String.prototype.localeCompare()
 * str.localeCompare(compareString[, locales[, options]])
 * compareString - cтрока, с которой сравнивается данная
 * locales - cтрока с языковой меткой BCP 47, либо массив таких строк
 * options - oбъект с некоторыми или всеми из следующих свойств:
 * localeMatcher, usage, sensitivity, ignore­Punctua­tion, numeric, caseFirst
 *  возвращает число, указывающее, должна ли данная строка находиться до, после или в том же самом месте, что и строка, переданная через параметр, при сортировке этих строк
 */

console.group('localeCompare'); //! Результаты, предоставляемые методом localeCompare(), сильно различаются в зависимости от языка
// отрицательное значение: в немецком буква ä идёт рядом с буквой

console.log('ä'.localeCompare('z', 'de')); //* -1
// положительное значение: в шведском буква ä следует после буквы z

console.log('ä'.localeCompare('z', 'sv')); //* 1

console.groupEnd();
/**
 * 13
 * String.prototype.match()
 * str.match(regexp)
 * regexp - oбъект регулярного выражения
 * возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением
 */

console.group('match');
var matchesArray = str.match(regexp);
console.log(matchesArray); //* ['A', 'B', 'C', 'D']

console.groupEnd();
/**
 * 14
 * String.prototype.matchAll()
 * str.matchAll(regexp)
 * возвращает итератор по всем результатам при сопоставлении строки с регулярным выражением
 */

console.group('matchAll');

var array = _toConsumableArray(str.matchAll(regexp)); //* [Array(1), Array(1), Array(1), Array(1)]


console.log(array); // 0: ['A', index: 0, input: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', groups: undefined]
// 1: ['B', index: 1, input: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', groups: undefined]
// 2: ['C', index: 2, input: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', groups: undefined]
// 3: ['D', index: 3, input: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', groups: undefined]

console.groupEnd();
/**
 * !15
 * String.prototype.normalize()
 * str.normalize([form])
 * form 0 - Одно из значений "NFC", "NFD", "NFKC" или "NFKD", определяющих форму нормализации Юникода
 * возвращает форму нормализации Юникода данной строки (если значение не является строкой, сначала оно будет в неё преобразовано).
 */

console.group('normalize');
console.log("\u1E9B\u0323".normalize()); //* ẛ̣

console.groupEnd();
/**
 * 16
 * String.prototype.padEnd()
 * str.padEnd(targetLength [, padString])
 * targetLength - длина результирующей строки, после того как текущая строка была дополнена
 * padString - строка для дополнения текущей строки
 * дополняет текущую строку с помощью заданной строки (в конечном счёте повторяя), так чтобы результирующая строка достигла заданной длины
 */

console.group('padEnd');
console.log(str.padEnd(35, secondStr)); //* ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789

console.log('123'.padEnd(4, str)); //* 123A

console.groupEnd();
/**
 * 17
 * String.prototype.padStart()
 * str.padEnd(targetLength [, padString])
 * targetLength - длина итоговой строки после дополнения текущей строки. Если значение меньше, чем длина текущей строки, текущая строка будет возвращена без изменений
 * padString - строка для дополнения текущей строки
 * строка для заполнения текущей строки. Если эта строка слишком длинная для заданной длины, она будет обрезана
 */

console.group('padStart');
console.log(str.padStart(35, secondStr)); //* 123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ

console.groupEnd();
/**
 * 18
 * String.raw()
 * String.raw(callSite, ...substitutions)
 * String.raw`templateString`
 * callSite - правильно сформированный объект вызова, например { raw: 'string' }
 * ...substitutions - значения подстановок
 * templateString - шаблонная строка
 * является теговой функцией для шаблонных строк
 */

console.group('raw');
console.log(String.raw(_templateObject(), str, 2 + 3)); //* ABCDEFGHIJKLMNOPQRSTUVWXYZ5

console.log(String.raw({
  raw: str
}, 1, 2, 3)); //*  A1B2C3DEFGHIJKLMNOPQRSTUVWXYZ

console.groupEnd();
/**
 * 19
 * String.prototype.repeat()
 * str.repeat(count)
 * count - Целое число от 0 до +∞: [0, +∞), определяющее число повторений строки во вновь создаваемой и возвращаемой строке
 * конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван
 */

console.group('repeat');
console.log(str.repeat(2)); //* ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ

console.groupEnd();
/**
 * 20
 * String.prototype.replace()
 * str.replace(regexp|substr, newSubStr|function[, flags])
 * substr - cтрока, заменяемая на newSubStr
 * newSubStr - cтрока, заменяющая подстроку из первого параметра
 * конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван
 */

console.group('replace');
var stringToReplace = 'It was the night before Xmas...';
var replacedString = stringToReplace.replace(/xmas/i, 'Christmas');
console.log(replacedString); //* It was the night before Christmas...

console.groupEnd();
/**
 * 21
 * String.prototype.replaceAll()
 * const newStr = str.replaceAll(regexp|substr, newSubstr|function)
 * substr - cтрока, заменяемая на newSubStr
 * newSubStr - cтрока, заменяющая подстроку из первого параметра
 * возвращает новую строку со всеми совпадениями pattern , который меняется на replacement. pattern может быть строкой или регулярным выражением
 */

console.group('replaceAll');
var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replaceAll('dog', 'monkey')); //* The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?

console.groupEnd();
/**
 * 22
 * String.prototype.search()
 * str.search([regexp])
 * выполняет поиск сопоставления между регулярным выражением и этим объектом String.
 */

console.group('search');
console.log(p.search('quick')); //* 4

console.groupEnd();
/**
 * 23
 * String.prototype.slice()
 * str.slice(beginIndex[, endIndex])
 * выполняет поиск сопоставления между регулярным выражением и этим объектом String.
 */

console.group('slice');
var strToSlice = str.slice(0, 1);
console.log(strToSlice); //* A

console.groupEnd();
/**
 * 24
 * String.prototype.split()
 * str.split([separator[, limit]]
 * разбивает объект String на массив строк путём разделения строки указанной подстрокой.
 */

console.group('split');
var splitedString = str.split('');
console.log(splitedString); //* ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

console.groupEnd();
/**
 * 25
 * String.prototype.startsWith()
 * str.startsWith(searchString[, position])
 * помогает определить, начинается ли строка с символов указанных в скобках, возвращая, соответственно, true или false
 */

console.group('startsWith');
console.log(str.startsWith('ABC')); //* true

console.groupEnd();
/**
 * 26
 * String.prototype.substring()
 * str.substring(indexA[, indexB])
 * возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
 */

console.group('substring');
console.log(str.substring(0, 2)); //* AB

console.groupEnd();
/**
 * 27
 * String.prototype.toLocaleLowerCase()
 * str.toLocaleLowerCase()
 * возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр согласно правилам преобразования регистра локали
 */

console.group('toLocaleLowerCase');
console.log(str.toLocaleLowerCase()); //* abcdefghijklmnopqrstuvwxyz

console.groupEnd();
/**
 * 27
 * String.prototype.toLocaleUpperCase()
 * str.toLocaleUpperCase()
 * возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр согласно правилам преобразования регистра локали.
 */

console.group('toLocaleUpperCase');
var lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(lowerCaseAlphabet.toLocaleUpperCase()); //* ABCDEFGHIJKLMNOPQRSTUVWXYZ

console.groupEnd();
/**
 * 28
 * String.prototype.toLowerCase()
 * str.toLowerCase()
 * возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.
 */

console.group('toLowerCase');
console.log(str.toLowerCase()); //* abcdefghijklmnopqrstuvwxyz

console.groupEnd();
/**
 * 29
 * String.prototype.toLocaleUpperCase()
 * str.toLocaleUpperCase()
 *  возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр
 */

console.group('toUpperCase');
console.log(lowerCaseAlphabet.toUpperCase()); //* ABCDEFGHIJKLMNOPQRSTUVWXYZ

console.groupEnd();
/**
 * 30
 * String.prototype.toString()
 * str.toString()
 * возвращает строку, представляющую указанный объект.
 */

console.group('toString');
var newString = new String('Hello, World');
console.log(newString); //* String {'Hello, World'}

console.log(newString.toString()); //* Hello, World

console.groupEnd();
/**
 * 31
 * String.prototype.trim()
 * str.trim()
 * удаляет пробельные символы с начала и конца строки
 */

console.group('trim');
var trimString = ' trim ';
console.log(trimString.trim());
console.groupEnd();
/**
 * 32
 * String.prototype.trimRight()
 * str.trimRight()
 * удаляет пробельные символы с правого конца строки.
 */

console.group('trimRight');
var trimRightSpaces = '   trimRight    ';
console.log(trimRightSpaces.trimRight()); //*    trimRight

console.groupEnd();
/**
 * 33
 * String.prototype.trimLeft()
 * str.trimLeft()
 * удаляет пробельные символы с левого конца строки.
 */

console.group('trimLeft');
var trimLeftSpaces = '   trimLeft    ';
console.log(trimLeftSpaces.trimLeft()); //* trimLeft    ;

console.groupEnd();
/**
 * 34
 * String.prototype.valueOf()
 * str.trimLeft()
 * удаляет пробельные символы с левого конца строки.
 */

console.group('valueOf');
var stringValueOf = new String('valueOf');
console.log(stringValueOf); //* String {'valueOf'}

console.log(stringValueOf.valueOf()); //* valueOf

console.groupEnd();
/**
 * 35
 * str.length
 * Длинна строки
 */

console.group('length');
console.log('string'.length); //* 6

console.groupEnd();