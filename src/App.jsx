
import { jsPDF } from "jspdf"
import 'jspdf-autotable'

import './App.css'
import Factura from "./Factura";

function App() {
  
  const facturaData = {
    numero: '123456',
    producto: 'Pizza',
    cantidad: 5,
    precio: 20,
    fecha: '2023-09-11',
    cliente: 'Angelo',
    total: 100.00,
  }

  // const generarPDF = () => {
  //   const doc = new jsPDF();
  //   doc.text(`Número de factura: ${facturaData.numero}`, 10, 10);
  //   doc.text(`Fecha: ${facturaData.fecha}`, 10, 20);
  //   doc.text(`Cliente: ${facturaData.cliente}`, 10, 30);
  //   doc.text(`Total: $${facturaData.total}`, 10, 40);
  //   // Agregar otros datos y elementos de la factura al PDF

  //   // Guardar el PDF con un nombre específico
  //   doc.save(`factura_${facturaData.numero}.pdf`);
  // };

  const generarPDF = () => {
    const doc = new jsPDF();

    // Encabezado de la factura
    doc.text('Factura', 95, 20);
    // doc.text(`Número de factura: ${facturaData.numero}`, 10, 20);
    // doc.text(`Fecha: ${facturaData.fecha}`, 10, 30);
    // doc.text(`Cliente: ${facturaData.cliente}`, 10, 40);
    // doc.text(`Total: $${facturaData.total}`, 10, 50);

    // Crear una tabla para los detalles de la factura
    const columns = ['Numero','Producto', 'Cantidad', 'Precio', 'fecha', 'Total'];
    const data = [
      [`${facturaData.numero}`,`${facturaData.producto}`, `${facturaData.cantidad}`, `${facturaData.precio}`,`${facturaData.fecha}`, `${facturaData.total}`],
      // ['Producto 2', '1', '$30.00', '$30.00'],
      // ['Producto 2', '1', '$30.00', `${facturaData.total}`]
      // Agrega más filas según sea necesario
    ];

    doc.autoTable({
      startY: 30,
      head: [columns],
      body: data,
    });

    // Guardar el PDF con un nombre específico
    doc.save(`factura_${facturaData.numero}.pdf`);
  };


  return (
    <div>
      {/* <h1>Factura</h1>
      <h4>Aqui va el logo</h4>
      <p>Número de factura: {facturaData.numero}</p>
      <p>Fecha: {facturaData.fecha}</p>
      <p>Cliente: {facturaData.cliente}</p>
      <p>Total: ${facturaData.total}</p>
      <button onClick={generarPDF}>Generar PDF</button>

      <br /> */}
      <Factura />
    </div>
  );
}

export default App
