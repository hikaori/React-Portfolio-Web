import React, { Component } from 'react'
// class name は、データ名と同じにするのが基本だが、ここではわかりやすく為、あえて別名 
 export default class ParentComponent extends Component {
   render(){
     return(
       <ChildComponent text= {"これは親Componentから送られて来たテキストです。"}/>
     )
   }
 }

 export class ChildComponent extends Component{
   render(){
     return(
       <div>
         {this.props.text}
       </div>
     )
   }
 }