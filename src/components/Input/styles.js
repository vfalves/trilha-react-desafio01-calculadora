import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #2A2A2A; /* Cinza médio para o visor */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 15px; /* Espaço entre o visor e os botões */
    border-radius: 8px; /* Cantos arredondados no visor também */

    input {
        width: 100%;
        height: 75px;
        background-color: transparent;
        border: 0;
        text-align: right;
        padding: 0 20px;
        font-size: 36px;
        font-family: 'Roboto', sans-serif;
        color: #F5F5F5; /* Texto em um tom de branco muito suave (off-white) */
    }
`