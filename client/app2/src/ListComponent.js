import React from 'react';
 
import './App.css';
 
//jQuery libraries
 
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
 
class ListComponent extends React.Component {
  componentDidMount() {

    //initialize datatable
    $(document).ready(function () {
        
        // dynimacally adding row
        var t = $('#example2').DataTable();
        // var counter = 0;

            $('#addRow2').on('click', function () {
                // t.row.add(['Firstname Lastname', 'firstname.lastname@gmail.com']).draw(); //for single row

                // adding multiple rows by looping
                for(let i=0; i<500; i++) {
                    t.rows.add([
                        ["Firstname Lastname", "first.last@names.com"]
                    ]).draw();
                }
           });

        // setting timeout
        setTimeout(function(){
        $('#example2').DataTable();
         } ,1000);
    });
 }
  render(){
    //Datatable HTML
  return (
    <div className="MainDiv"> 
      <div className="jumbotron text-center">
          <h3>IT 7131 Project</h3>
      </div>
      <br /><br />
       
      <div className="container">
          {/* Button to add new table row dynamically */}
          <button id="addRow2">Add new rows</button>
          <table id="example2" className="table table-hover table-bordered display">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          </table>
          <br /><br /> 
        </div>
      </div>
  );
 }
}
export default ListComponent;