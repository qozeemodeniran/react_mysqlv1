import React from 'react';
 
import './App.css';
 
//jQuery libraries
 
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
 
//For API Requests
import axios from 'axios';
 
class ListComponent extends React.Component {
 
  // State array variable to save and show data
  constructor(props) {
    super(props)
      this.state = {
        data: [],
        
      }}
  componentDidMount() {
       //Get all users details in bootstrap table
        axios.get('http://localhost/react_mysqlv1/server/server.php').then(res => 
        {
          //Storing users detail in state array object
          this.setState({data: res.data});
         
        }); 
    //initialize datatable
    $(document).ready(function () {
        setTimeout(function(){
        $('#example').DataTable();
         } ,1000);
    });
 }
  render(){
    //Datatable HTML
  return (
    <div className="MainDiv">
      <div className="jumbotron text-center">
          <h3>Datatbale in React.js</h3>
      </div>
       
      <div className="container">
           
          <table id="example" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result, index) => {
            return (
              
                 <tr key={index}>
                  <td>{result.name}</td>
                  <td>{result.email}</td>
                </tr>
              
            )
          })}
            
             
          </tbody>
        </table>
           
        </div>
      </div>
  );
 }
}
export default ListComponent;