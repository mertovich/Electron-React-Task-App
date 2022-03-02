import React,{useState} from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'

const TopBar = props => {
  const [TodoTask, setTodoTask] = useState('')
  return (
    <div>
      <Container style={{
        marginTop: '5%',
      }} >
        <Row className='text-center' >
          <Col xs={10} >
              <Form.Control style={{
                borderRadius: '15px',
                
              }}
                type="text"
                aria-describedby="passwordHelpBlock"
                placeholder='Add Task'
                onChange={e => setTodoTask(e.target.value)}
                value={TodoTask}
              />
          </Col>
          <Col>
          <button onClick={() => {
            props.addTodo(TodoTask)
            setTodoTask('')
          }} style={{
            padding: '5%',
            border: 'none',
            backgroundColor: '#87BBA2',
            color: 'white',
            borderRadius: '5px',
            paddingLeft: '20%',
            paddingRight: '20%',
          }} >Add</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TopBar