import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const List = props => {
    const colorList = ['#D3E4CD','#99A799','#F2DDC1','#E2C2B9']
    const buttonColorList = ['#DAD992','#E6DF9A','#F3ED9E','#FFFEA9']

    const randomColor = () => {
        let color = colorList[Math.floor(Math.random() * colorList.length)]
        return color
    }

    const randomButtonColor = () => {
        let color = buttonColorList[Math.floor(Math.random() * buttonColorList.length)]
        return color
    }

  return (
    <div style={{
        marginTop: '5%',
    }} >
        <Container>
            {props.TodoList.map((item)=>(
                <Container key={item} style={{
                    backgroundColor: randomColor(),
                    borderRadius: '10px',
                    marginTop: '2%',
                    marginBottom: '2%',
                    paddingTop:'2%',
                    paddingBottom:'2%',
                }} >
                    <Row>
                        <Col xs={2}>
                        <button onClick={() => props.deleteItem(item)}  style={{
                            border: 'none',
                            backgroundColor: randomButtonColor(),
                            color: '#FFAB4C',
                            borderRadius: '5px',
                            padding: '5%',
                        }}>Completed</button>
                        </Col>
                        <Col style={{
                            color: 'white',
                        }} >{item}</Col>
                    </Row>
                </Container>
            ))}
        </Container>
    </div>
  )
}

export default List