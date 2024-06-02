import React, { useCallback } from 'react';
import { User } from '../../domain/entities/User';

interface UserDetailsProps {
  user: User;
  editMode: boolean;
  editedUser: User | null;
  onEdit: () => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  user,
  editMode,
  editedUser,
  onEdit,
  onSaveEdit,
  onCancelEdit,
  onInputChange
}) => {
  const handleEdit = useCallback(() => onEdit(), [onEdit]);
  const handleSaveEdit = useCallback(() => onSaveEdit(), [onSaveEdit]);
  const handleCancelEdit = useCallback(() => onCancelEdit(), [onCancelEdit]);
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e), [onInputChange]);

  return (
    <div>
      <h2>User Details</h2>
      {!editMode ? (
        <>
          <p>Nome: {user.nome}</p>
          <p>Email: {user.email}</p>
          <p>Idade: {user.idade}</p>
          <p>CPF: {user.cpf}</p>
          <p>RG: {user.rg}</p>
          <p>Data de Nascimento: {user.data_nasc}</p>
          <p>Sexo: {user.sexo}</p>
          <p>Signo: {user.signo}</p>
          <p>Mãe: {user.mae}</p>
          <p>Pai: {user.pai}</p>
          <p>Senha: {user.senha}</p>
          <p>CEP: {user.cep}</p>
          <p>Endereço: {user.endereco}</p>
          <p>Número: {user.numero}</p>
          <p>Bairro: {user.bairro}</p>
          <p>Cidade: {user.cidade}</p>
          <p>Estado: {user.estado}</p>
          <p>Telefone Fixo: {user.telefone_fixo}</p>
          <p>Celular: {user.celular}</p>
          <p>Altura: {user.altura}</p>
          <p>Peso: {user.peso}</p>
          <p>Tipo Sanguíneo: {user.tipo_sanguineo}</p>
          <p>Cor: {user.cor}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" name="nome" value={editedUser?.nome || ''} onChange={handleInputChange} placeholder="Nome" />
          <input type="text" name="email" value={editedUser?.email || ''} onChange={handleInputChange} placeholder="Email" />
          <input type="number" name="idade" value={editedUser?.idade || ''} onChange={handleInputChange} placeholder="Idade" />
          <input type="text" name="cpf" value={editedUser?.cpf || ''} onChange={handleInputChange} placeholder="CPF" />
          <input type="text" name="rg" value={editedUser?.rg || ''} onChange={handleInputChange} placeholder="RG" />
          <input type="text" name="data_nasc" value={editedUser?.data_nasc || ''} onChange={handleInputChange} placeholder="Data de Nascimento" />
          <input type="text" name="sexo" value={editedUser?.sexo || ''} onChange={handleInputChange} placeholder="Sexo" />
          <input type="text" name="signo" value={editedUser?.signo || ''} onChange={handleInputChange} placeholder="Signo" />
          <input type="text" name="mae" value={editedUser?.mae || ''} onChange={handleInputChange} placeholder="Nome da Mãe" />
          <input type="text" name="pai" value={editedUser?.pai || ''} onChange={handleInputChange} placeholder="Nome do Pai" />
          <input type="text" name="senha" value={editedUser?.senha || ''} onChange={handleInputChange} placeholder="Senha" />
          <input type="text" name="cep" value={editedUser?.cep || ''} onChange={handleInputChange} placeholder="CEP" />
          <input type="text" name="endereco" value={editedUser?.endereco || ''} onChange={handleInputChange} placeholder="Endereço" />
          <input type="number" name="numero" value={editedUser?.numero || ''} onChange={handleInputChange} placeholder="Número" />
          <input type="text" name="bairro" value={editedUser?.bairro || ''} onChange={handleInputChange} placeholder="Bairro" />
          <input type="text" name="cidade" value={editedUser?.cidade || ''} onChange={handleInputChange} placeholder="Cidade" />
          <input type="text" name="estado" value={editedUser?.estado || ''} onChange={handleInputChange} placeholder="Estado" />
          <input type="text" name="telefone_fixo" value={editedUser?.telefone_fixo || ''} onChange={handleInputChange} placeholder="Telefone Fixo" />
          <input type="text" name="celular" value={editedUser?.celular || ''} onChange={handleInputChange} placeholder="Celular" />
          <input type="text" name="altura" value={editedUser?.altura || ''} onChange={handleInputChange} placeholder="Altura" />
          <input type="number" name="peso" value={editedUser?.peso || ''} onChange={handleInputChange} placeholder="Peso" />
          <input type="text" name="tipo_sanguineo" value={editedUser?.tipo_sanguineo || ''} onChange={handleInputChange} placeholder="Tipo Sanguíneo" />
          <input type="text" name="cor" value={editedUser?.cor || ''} onChange={handleInputChange} placeholder="Cor" />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default React.memo(UserDetails);