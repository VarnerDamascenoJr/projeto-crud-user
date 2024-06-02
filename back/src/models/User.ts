import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class User extends Model {
  public id!: number;
  public nome!: string;
  public idade!: number;
  public cpf!: string;
  public rg!: string;
  public data_nasc!: Date;
  public sexo!: string;
  public signo!: string;
  public mae!: string;
  public pai!: string;
  public email!: string;
  public senha!: string;
  public cep!: string;
  public endereco!: string;
  public numero!: number;
  public bairro!: string;
  public cidade!: string;
  public estado!: string;
  public telefone_fixo!: string;
  public celular!: string;
  public altura!: string;
  public peso!: number;
  public tipo_sanguineo!: string;
  public cor!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nasc: {
    type: DataTypes.DATE,
    allowNull: false
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  signo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mae: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pai: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone_fixo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  celular: {
    type: DataTypes.STRING,
    allowNull: false
  },
  altura: {
    type: DataTypes.STRING,
    allowNull: false
  },
  peso: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tipo_sanguineo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User'
});

export default User;