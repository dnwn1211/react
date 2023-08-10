import { useParams } from 'react-router-dom';
import styled from 'styled-components'

let Btn = styled.button`
  background : ${props=>props.bg};
  color : black;
  padding : 10px;
`
let Box =styled.div`
  background : grey;
  padding : 20px
`

function Detail(props){

  let {id} =useParams();

  return(
    <div className="container">
      <Box>
        <Btn bg='blue'>button</Btn>
        <Btn bg='orange'>button</Btn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes_data[id].title}</h4>
          <p>{props.shoes_data[id].content}</p>
          <p>{props.shoes_data[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;