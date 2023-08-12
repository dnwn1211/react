import React, { useEffect } from 'react'
import {useState} from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import {Nav} from 'react-bootstrap'

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
  let[tab, setTab]=useState(0)

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
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(0)}} eventKey='link0'>0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(1)}} eventKey='link1'>1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(2)}} eventKey='link2'>2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent shoes_data={props.shoes_data} tab={tab}/>
    </div> 
  )
}
function TabContent({tab, shoes_data}){
  // if(props.tab==0){
  //   return <div>내용0</div>
  // }
  // else if(props.tab==1){
  //   return <div>내용1</div>
  // }
  // else if(props.tab==2){
  //   return <div>내용2</div>
  // }
  //tab 변경 때마다 작동
  let [fade, setFade]=useState('')
  useEffect(()=>{
    setTimeout(()=>{setFade('end')},100)
    return()=>{
      setFade('')
    }
  },[tab])
  //if 필요 없는 방법
  return <div className={'start'+fade}>{
    [<div>{shoes_data[0].title}</div>,<div>내용1</div>,<div>내용2</div>][tab]
  }</div>
}


export default Detail;