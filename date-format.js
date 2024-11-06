const moment = require("moment");

const now = moment();

const formattedDate1 = now.format(`DD-MM-YYYY`);
const formattedDate2 = now.format(`MMM Do YY`);
const formattedDate3 = now.format(`dddd`);

console.log(formattedDate1);
console.log(formattedDate2);
console.log(formattedDate3);
