module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define(
        "Aluno",{
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            }, 
            numero: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        });
        return Aluno;
};