const students = [
  { name: "João", note1: 8, note2: 7 },
  { name: "Maria", note1: 6, note2: 8 },
  { name: "Pedro", note1: 7, note2: 6 },
  { name: "Ana", note1: 9, note2: 9 }
];

function verifyAproved(note) {
  return note >= 7 ? "Aprovado" : "Reprovado";
}


for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const status1 = verifyAproved(student.note1);
  const status2 = verifyAproved(student.note2);
  const statusGeral = (status1 === "Aprovado" && status2 === "Aprovado") ? "Aprovado" : "Reprovado";

  alert(`${student.name}:
  Matter 1 - note: ${student.note1}. Status: ${status1}.
  Matter 2 - note: ${student.note2}. Status: ${status2}.
  Status Geral: ${statusGeral}`);
}