// styles.js
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  height: 950px;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  background: white;
  font-family: 'Arial', sans-serif;
`;

const StyledTitle = styled.div`
  margin-top: -950px;
  margin-left: 320px;
  font-size: 20px;
`;

const StyledTableWrapper = styled.div`
  overflow-x: auto;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  max-width: 100%;
  margin: 20px auto;

  table {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    background-color: #f4f4f4;
    color: #333;
    border-radius: 8px; /* Bordes redondeados para un aspecto más suave */
    overflow: hidden; /* Oculta el desbordamiento del contenido */
  }

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #e0e0e0;
    font-weight: bold;
  }
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  overflow: hidden;
  width:900px;

  .modal-header {
    background-color:#ddd;
    color: #fff;
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    border-radius: 12px 12px 0 0;
  }

  .subtitle {
    margin: 0;
    background-color:#ddd;
    font-size: 24px;
    font-weight: bold;
    text-align:center;
  }
  .close{
    float: right;
    margin-top:-20px;
    cursor: pointer;
    color:red;
    height:30px;
    &:hover {
      opacity: 0.7;
    }
  }
  .modal-content {
    max-height: 400px;
    overflow-y: auto;
  }

  table {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    background-color: #f9f9f9;
    color: #333;
    border-radius: 0 0 12px 12px;
    overflow: auto; /* Agregado para habilitar el scroll en la tabla */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 16px;
    text-align: left;
  }

  th {
    background-color: #e0e0e0;
    font-weight: bold;
  }
`;
const StyledTableContent = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

export { StyledHome, StyledTitle, StyledModal, StyledTableWrapper, StyledTableContent, StyledOverlay };