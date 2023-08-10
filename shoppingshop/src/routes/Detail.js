import React, { useEffect } from 'react'
import {useState} from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

// class Detail2 extends React.Component{
//   componentDidMount(){

//   }
//   componentDidUpdate(){

//   }
//   componentWillUnmount(){

//   }
// }

function Detail(props){

  let[alert, setAlert]=useState(true)

  useEffect(()=>{
    //mount, update시 실행
    // html 렌더링 후에 동작함
    //어려운 연산
    // 서버에서 데이터 가져오는 작업
    // 타이머
    let a = setTimeout(()=>{ setAlert(false)},2000)

    return ()=>{
      //useEffect 실행전 실행함
      clearTimeout(a)
    }
  })

  let {id} =useParams();

  return(
    <div className="container">
      {
        alert == true ? <div className='alert-container'>
        2초이내
      </div>: null
      }
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