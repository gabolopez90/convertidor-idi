import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Diario() {  
  const [formData,setFormData] = React.useState(
    {
      fecha: "",
      dolar:"",
      idi:""
    }
  )
  
  function handleChange(event){    
    const {name, value} = event.target;      
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: value        
      }
    })
  }

  function handleSubmit(event) {
      event.preventDefault();
      const fecha = formData.fecha.substring(8,10) + "-" +formData.fecha.substring(5,7)+ "-" + formData.fecha.substring(0,4);
      const data = [fecha,formData.dolar, formData.idi];
      window.api.guardar(data);
}

  return (
    <div  className='diario'>      
      <Form className='forma' onSubmit={handleSubmit}>
        <h1 className='text-center mb-3'><strong>IDI / $</strong></h1> 

        <InputGroup className='mb-3'>
          <InputGroup.Text>Fecha</InputGroup.Text>
          <Form.Control 
            type="date" 
            selected={formData.fecha} 
            onChange={handleChange}            
            name='fecha'            
            value={formData.fecha}
            format='dd-MM-yyyy'
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control 
            type="number"
            placeholder="Dolar"
            onChange={handleChange}
            name="dolar"
            value={formData.dolar}
            min="0"            
            step="any" 
          />        
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>IDI</InputGroup.Text>
          <Form.Control            
            type="number"
            placeholder="IDI"
            onChange={handleChange}
            name="idi"
            value={formData.day} 
            min="0"
            step="any"            
          />        
        </InputGroup>      
        
        <InputGroup className="">
          <Button type='submit' variant="secondary" className='boton my-3'>Guardar</Button>
        </InputGroup>
        
        <div id="respuesta"></div>
      </Form>      
    </ div>
  )
}

export default Diario