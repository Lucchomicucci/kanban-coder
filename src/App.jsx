import './App.css'
import { useState } from 'react'
import Column from './containers/column/column'
import { Button, Modal, Input, Select } from 'antd';

function App() {

  const mockEstado = [
    {
      value: 1,
      label: 'Pendiente'
    },
    {
      value: 2,
      label: 'En progreso'
    },
    {
      value: 3,
      label: 'Finalizado'
    }
  ]

  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState();
  const [estado, setEstado] = useState();
  const [showModal, setShowModal] = useState(false)

  const handleChange = (value) => {
    setEstado(value);
  };

  const handleSave = () => {
    setTareas([...tareas, { title: input, status: estado}])
    setInput('')
    setEstado(null)
    setShowModal(false)
  };

  return (
    <>
    <div className="columnContainer">
      <Column title={'Pendiente'} tareas={tareas.filter((tarea) => tarea.status == 1)}/>
      <Column title={'En progreso'} tareas={tareas.filter((tarea) => tarea.status == 2)}/>
      <Column title={'Finalizado'} tareas={tareas.filter((tarea) => tarea.status == 3)}/>
    </div>

    {/* Pasar esto a un componente: */}
    <Button type="primary" onClick={() => setShowModal(true)}>
      Agregar tarea
    </Button>
      <Modal title="Agregar nuevo tarea" open={showModal} onOk={handleSave} onCancel={() => setShowModal(false)}>
        <Input value={input} placeholder="Agrega tu tarea..." onChange={(event) => setInput(event.target.value)}/>
        <Select
        value={estado}
        defaultValue=""
        style={{ width: 120 }}
        onChange={handleChange}
        options={mockEstado}
      />
      </Modal>
    </>
  )
}

export default App
