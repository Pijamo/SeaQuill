import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function Jobs(jobs){

    function salaryFormatter(cell, row) {
       
        return (
          <span>$ { cell.toLocaleString() }</span>
        );
    }

    const data = jobs
    const options = {
      sizePerPageList: [{text: '5', value: 5}, {text: '10', value: 10}, {text: '20', value: 20}
    ] };

    const columns = [
            {
              text: 'Job Title',
              dataField: 'title', 
              sort: true
            },
            {
              text: 'Average Salary',
              dataField: 'mean_salary',
              formatter: salaryFormatter,
              sort: true

            },
            {
                text: 'Total',
                dataField: 'total_jobs',
                sort: true

              },
              {
                text: 'Hotspot',
                dataField: 'location_quotient',
                sort: true
              },
          ]

        
        
    return <BootstrapTable  
              keyField={'title'} 
              data={data} 
              noDataIndication="Table is Empty" 
              columns={columns} 
              pagination={paginationFactory(options)}
            />

}
