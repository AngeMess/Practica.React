import React, { useState } from 'react';
//import './Calculadora.css';

const Calculadora = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta);
    };

    const handleMultiplicar = () => {
        const multiplicar = parseFloat(num1) * parseFloat(num2);
        setResultado(multiplicar);
    };


    const handleDividir = () => {
        const division = parseFloat(num1) / parseFloat(num2);
        setResultado(division);
    };

    const handleLimpiar = () => {
        setNum1('');
        setNum2('');
        setResultado(null);
    };


    return (
        <div className="calculadora">
            <div class="card text-center">
                <div class="card-header">
                <h1>Calculadora</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Numero 1:</label>
                <input
                    class="form-control"
                    type="number"
                    placeholder="Número 1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Numero 2:</label>
                <input
                    class="form-control"
                    type="number"
                    placeholder="Número 2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)} />
            </div>
            <button onClick={handleSumar}>Sumar</button><space>  </space>
            <button onClick={handleRestar}>Restar</button><space>  </space>
            <button onClick={handleMultiplicar}>Multiplicar</button><space>  </space>
            <button onClick={handleDividir}>Dividir</button><br /><br />
            <button type="button" class="btn btn-outline-dark" onClick={handleLimpiar}>Limpiar</button>
            <br /><br />
            {resultado !== null && <p>Resultado: {resultado}</p>}
                </div>
            </div>
        </div>
    );
};

export default Calculadora;