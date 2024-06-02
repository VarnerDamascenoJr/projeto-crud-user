import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User } from '../../domain/entities/User';

const userSchema = z.object({
  nome: z.string().nonempty(),
  idade: z.string(),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
  rg: z.string().regex(/^\d{2}\.\d{3}\.\d{3}-\d{1}$/),
  data_nasc: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  sexo: z.string(),
  signo: z.string(),
  mae: z.string(),
  pai: z.string(),
  email: z.string().email(),
  senha: z.string().min(6),
  cep: z.string().regex(/^\d{5}-\d{3}$/),
  endereco: z.string(),
  numero: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string().length(2),
  telefone_fixo: z.string().regex(/^\(\d{2}\) \d{4}-\d{4}$/),
  celular: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/),
  altura: z.string(),
  peso: z.string(),
  tipo_sanguineo: z.string(),
  cor: z.string()
});

interface AddUserFormProps {
  onAddNewUser: (data: User) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onAddNewUser }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<User>({
    resolver: zodResolver(userSchema)
  });

  const onSubmit: SubmitHandler<User> = async (data) => {
    await onAddNewUser(data);
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add New User</h2>
      <div>
        <label>Nome</label>
        <Controller
          name="nome"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
        {errors.nome && <span>{errors.nome.message}</span>}
      </div>
      <div>
        <label>Idade</label>
        <Controller
          name="idade"
          control={control}
          render={({ field }) => <input type="number" {...field} />}
        />
        {errors.idade && <span>{errors.idade.message}</span>}
      </div>
      <div>
        <label>CPF</label>
        <Controller
          name="cpf"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
        {errors.cpf && <span>{errors.cpf.message}</span>}
      </div>
      <div>
        <label>RG</label>
        <Controller
          name="rg"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
        {errors.rg && <span>{errors.rg.message}</span>}
      </div>
      <div>
        <label>Data de Nascimento</label>
        <Controller
          name="data_nasc"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
        {errors.data_nasc && <span>{errors.data_nasc.message}</span>}
      </div>
      <div>
        <label>Sexo</label>
        <Controller
          name="sexo"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
        {errors.sexo && <span>{errors.sexo.message}</span>}
      </div>
      <div>
        <label>Signo</label>
        <Controller
          name="signo"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
        {errors.signo && <span>{errors.signo.message}</span>}
      </div>
      <div>
        <label>Nome da Mãe</label>
        <Controller
          name="mae"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
        {errors.mae && <span>{errors.mae.message}</span>}
        </div>
         <div>
           <label>Nome do Pai</label>
           <Controller
             name="pai"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.pai && <span>{errors.pai.message}</span>}
         </div>
         <div>
           <label>Email</label>
           <Controller
             name="email"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.email && <span>{errors.email.message}</span>}
         </div>
         <div>
           <label>Senha</label>
           <Controller
             name="senha"
             control={control}
             render={({ field }) => <input type="password" {...field} />}
           />
           {errors.senha && <span>{errors.senha.message}</span>}
         </div>
         <div>
           <label>CEP</label>
           <Controller
             name="cep"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.cep && <span>{errors.cep.message}</span>}
         </div>
         <div>
           <label>Endereço</label>
           <Controller
             name="endereco"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.endereco && <span>{errors.endereco.message}</span>}
         </div>
         <div>
           <label>Número</label>
           <Controller
             name="numero"
             control={control}
             render={({ field }) => <input type="number" {...field} />}
           />
           {errors.numero && <span>{errors.numero.message}</span>}
         </div>
         <div>
           <label>Bairro</label>
           <Controller
             name="bairro"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.bairro && <span>{errors.bairro.message}</span>}
         </div>
         <div>
           <label>Cidade</label>
           <Controller
             name="cidade"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.cidade && <span>{errors.cidade.message}</span>}
         </div>
         <div>
           <label>Estado</label>
           <Controller
             name="estado"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.estado && <span>{errors.estado.message}</span>}
         </div>
         <div>
           <label>Telefone Fixo</label>
           <Controller
             name="telefone_fixo"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.telefone_fixo && <span>{errors.telefone_fixo.message}</span>}
         </div>
         <div>
           <label>Celular</label>
           <Controller
             name="celular"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.celular && <span>{errors.celular.message}</span>}
         </div>
         <div>
           <label>Altura</label>
           <Controller
             name="altura"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.altura && <span>{errors.altura.message}</span>}
         </div>
         <div>
           <label>Peso</label>
           <Controller
             name="peso"
             control={control}
             render={({ field }) => <input type="text   " {...field} />}
           />
           {errors.peso && <span>{errors.peso.message}</span>}
         </div>
         <div>
           <label>Tipo Sanguíneo</label>
           <Controller
             name="tipo_sanguineo"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.tipo_sanguineo && <span>{errors.tipo_sanguineo.message}</span>}
         </div>
         <div>
           <label>Cor</label>
           <Controller
             name="cor"
             control={control}
             render={({ field }) => <input type="text" {...field} />}
           />
           {errors.cor && <span>{errors.cor.message}</span>}
         </div>
         <button type="submit">Add User</button>
       </form>
     );
   };
   
   export default AddUserForm;