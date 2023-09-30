const Patient = require('./models/paciente.model.js');

const Doctor = require('./models/medico.models.js');

const Consulta = require('./models/consulta.models.js');


/* O cógico abaixo faz o export dos dados das tabelas 
de Doctor e Patient para a tabela Consultas. Mas ainda não foi testado.*/

const exportConsulta = async () => {
    try {
        const doctors = await
        Doctor.findAll();
        const patients = await
        Patient.findAll();

        for (const Doctor of doctors) {
            for (const Patient of patients)
            {
                await Consulta.create({
                    date: new Date(),
                    doctorId: doctor.id,
                    patientId: patients.id,
                });
            }
        }
        console.log(' Dados exportados com sucesso para a tabela de Consultas');
    } catch (err) {
        console.error('Erro ao exportar os dados para a tabela de Consultas:', err);
    }
};

exportConsulta();