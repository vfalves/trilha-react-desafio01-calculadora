import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: none; /* Removemos a borda para um visual mais limpo */
    border-radius: 8px; /* Arredondamos os cantos */
    margin: 3px; /* Espaço de respiro entre os botões */
    background-color: #333333; /* Fundo base dos botões */
    color: #F5F5F5; /* Texto claro */
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    transition: background-color 0.2s ease; /* Transição suave de cor */

    &:hover {
        background-color: #5C1A1F; /* Um tom de vermelho profundo, seco e sofisticado */
        cursor: pointer;
    }
`