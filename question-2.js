const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
// ให้กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50 => เพิ่มคะแนนนักเรียนแต่ละคน 10% => หาผลรวมของคะแนนทั้งหมดจากข้อ 2

function checkTotalscore(student) {
  const filteredStudent =  
  student
  .filter((person) => person.score > 50 )
  .map((person)=> person.score + (person.score*0.1))
  .reduce((acu,cur)=> acu+cur); 
  return `Total score is ${filteredStudent}`;

}

console.log(checkTotalscore(students));


// let result = checkTotalscore(students)
// console.log(`Total score is ${result}`);




