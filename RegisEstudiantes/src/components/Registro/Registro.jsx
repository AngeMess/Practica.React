import React, { useState } from "react";

const UserList = () => {
    // Estado para manejar la lista de usuarios
    const [users, setUsers] = useState([]);
    // Estado para manejar los valores de los inputs
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [carnet, setCarnet] = useState("");

    // Función para agregar un nuevo usuario
    const addUser = () => {
        if (name.trim() === "" || age.trim() === "" || carnet.trim() === "") return; // Evitar agregar usuarios con campos vacíos
        setUsers([...users, { id: Date.now(), name, age, carnet }]);
        setName(""); // Limpiar el input de nombre
        setAge(""); // Limpiar el input de edad
        setCarnet(""); // Limpiar el input de carnet
    };

    // Función para eliminar un usuario
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="flex justify-center items-center min-h-screen">

            <div class="card text-center">
                <div class="card-header">
                    Registro de Estudiantes
                </div>
                <div class="card-body">
                    <div className="flex space-x-10 mb-10">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Nombre:</span>
                            <input
                                type="text"
                                class="form-control"
                                aria-describedby="basic-addon1"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon2">Edad:</span>
                            <input
                                type="number"
                                class="form-control"
                                aria-describedby="basic-addon2"
                                value={age}
                                onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon3">Carnet:</span>
                            <input
                                type="text"
                                class="form-control"
                                aria-describedby="basic-addon3"
                                value={carnet}
                                onChange={(e) => setCarnet(e.target.value)} />
                        </div>

                        <button
                            type="button" 
                            class="btn btn-outline-success"
                            onClick={addUser}
                            className="bg-red-500 text-black p-2 rounded-md hover:bg-red-700 focus:outline-none">
                            Agregar Usuario
                        </button>
                    </div>
                </div>
                <div class="card-footer text-body-secondary">
                <div className="flex flex-wrap space-x-6 space-y-6 mt-12">
                    {users.map((user) => (
                        <div key={user.id} className="flex items-center bg-gray-100 p-10 rounded-md w-80">
                            <div className="flex flex-col flex-1 mr-10">
                                <p className="font-semibold">{user.name}</p>
                                <p className="font-semibold">Edad: {user.age}</p>
                                <p>Carnet: {user.carnet}</p>
                                
                            </div>

                            <button
                                type="button" 
                                class="btn btn-outline-danger"
                                onClick={() => deleteUser(user.id)}
                                className="text-red-300 hover:text-red-700">
                                Eliminar
                            </button>
                            <hr />
                        </div>
                    ))}
                </div>             
                </div>
            </div>
        </div>
    );
};

export default UserList;

