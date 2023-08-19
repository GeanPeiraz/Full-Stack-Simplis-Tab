import { db } from "../db.js";

// importando o db para facilitar o entendimento na leitura do controller

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuario";

  // Não é necessario req ( então se ultiliza _)

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};



//Erro que volta com a listagem dos usuarios 

// Adicionando Usuarios ao Banco

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuario(`nome`, `email`, `password`, `date`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.password,
    req.body.date,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

// Atualizando usuario no banco de dados 

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuario SET `nome` = ?, `email` = ?, `password` = ?, `date` = ? WHERE `id` = ?";

    const values = [
      req.body.nome,
      req.body.email,
      req.body.password,
      req.body.date,
    ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

// deletando usuario no banco de dados 

export const deleteUser = (req, res) => {

  const q = "DELETE FROM usuario WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
