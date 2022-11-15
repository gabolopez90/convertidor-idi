import React from 'react'
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Calc() {
  const [formData,setFormData] = React.useState({
    monto: 0,
    tipo: ""
  })
  window.api.leer();
  

  function handleChange(event){
    const {name,value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
    console.log(formData);
  }
    
  function handleSubmit(event){    
    event.preventDefault();
    const dolar = parseFloat(document.getElementById("dolar").innerHTML);
    const idi = parseFloat(document.getElementById("idi").innerHTML);
    var a = 0;
    var b = 0;
    if(formData.tipo === 'bs'){
      a = formData.monto / idi;
      b = formData.monto / dolar;
      document.getElementById("res-1").innerHTML = "<strong>Monto en UVC:</strong> " + a.toFixed(2);
      document.getElementById("res-2").innerHTML = "<strong>Monto en $:</strong> " + b.toFixed(2);
    }
    else if(formData.tipo === 'idi'){
      a = formData.monto * idi;
      b = a / dolar;
      document.getElementById("res-1").innerHTML = "<strong>Monto en Bs:</strong> " + a.toFixed(2);
      document.getElementById("res-2").innerHTML = "<strong>Monto en $:</strong> " + b.toFixed(2);
    }
    else if(formData.tipo === 'dolar'){
      a = formData.monto * dolar;
      b = a / idi;
      document.getElementById("res-1").innerHTML = "<strong>Monto en Bs:</strong> " + a.toFixed(2);
      document.getElementById("res-2").innerHTML = "<strong>Monto en UVC:</strong> " + b.toFixed(2);
    }else{
      document.getElementById("res-1").innerHTML = "<strong>Seleccione un tipo de operación</strong>";
      document.getElementById("res-2").innerHTML = "<strong>Seleccione un tipo de operación</strong>";
    }

    console.log(formData)
  }

  return (
    <div className='calc'>
      <div  className='diario'>
        <Form className='calculadora' onSubmit={handleSubmit}>
          <h1 className='text-center mb-3'><strong>Convertidor</strong></h1>
          <Container className='text-center'>
            <span className='text-center'><strong>Fecha: </strong><span id='hoy'></span></span>
            <span className='text-center' ><strong>Dolar: </strong><span id='dolar'></span></span>
            <span className='text-center'><strong>IDI: </strong><span id='idi'></span></span>
          </Container>
          <InputGroup className='w-100 my-5'>
            <Form.Select className='w-25'
            onChange={handleChange}
            value={formData.tipo}
            name="tipo"
            >
              <option> - </option>
              <option value="idi">UVC</option>
              <option value="dolar">$</option>
              <option value="bs">Bs.</option>
            </Form.Select>
            <Form.Control className='w-50'
              type="number"
              placeholder="Ingrese Numero"
              onChange={handleChange}
              name="monto"
              value={formData.monto}
              min="0"            
              step="any"
            />
            <Button type='submit' variant="secondary" className='w-25'>Convertir</Button>
          </InputGroup>

          <p className='text-center'><span id="res-1"></span></p>
          <p className='text-center'><span id="res-2"></span></p>
                    
          <div id="respuesta"></div>
        </Form>
        
      </div>
    </div>
  )
}

export default Calc;