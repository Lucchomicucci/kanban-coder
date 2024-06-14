import { DeleteFilled } from '@ant-design/icons';
import { Select } from 'antd';

const Task = ({ task }) => {
  return(
    <div>
      <h2>{task.title}</h2>
      {/* Hacer que el icono de borrar funcione */}
      <DeleteFilled />

      {/* Hacer que el select funcione para ir cambiando de estados una tarea */}
      {/* <Select
        defaultValue=""
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      /> */}
    </div>
  )
}

export default Task