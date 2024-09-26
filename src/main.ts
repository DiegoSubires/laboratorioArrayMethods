import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const cuentaPacientesPorEspecialidad: number[] = [];
pacientes.forEach(function (x: string | any) {
  cuentaPacientesPorEspecialidad[x.especialidad] =
    (cuentaPacientesPorEspecialidad[x.especialidad] || 0) + 1;
});
console.log(cuentaPacientesPorEspecialidad);

const obtenPacientesAsignadosAPediatria = pacientes.filter(
  (pacientes) => pacientes.especialidad === "Pediatra"
);
console.log(obtenPacientesAsignadosAPediatria);

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = pacientes.filter(
  (pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10
);
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios);

const activarProtocoloUrgencia = pacientes.find(
  (pacientes) =>
    pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39
);
console.log(activarProtocoloUrgencia);

const reasignaPacientesAMedicoFamilia: Pacientes[] = pacientes
  .filter((pacientes) => pacientes.especialidad === "Pediatra")
  .map((pacientes) => ({
    ...pacientes,
    especialidad: "Medico de familia",
  }));
const pacientesNoReasignados = pacientes.filter(
  (pacientes) => pacientes.especialidad !== "Pediatra"
);

const pacientesNuevo = [
  ...pacientesNoReasignados,
  ...reasignaPacientesAMedicoFamilia,
];

const HayPacientesDePediatria: Boolean = pacientesNuevo.some(
  (pacientes) => pacientes.especialidad === "Pediatra"
);

console.log(HayPacientesDePediatria);
