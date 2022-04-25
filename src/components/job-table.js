import React from 'react';
import Table from 'rc-table';


export default function Jobs(jobs){

    const data = jobs

    const columns = [
            {
              title: 'Job Title',
              dataIndex: 'title', 
              width: 500
            },
            {
              title: 'Average Salary',
              dataIndex: 'mean_salary',
              width: 150
            },
            {
                title: 'Total',
                dataIndex: 'total_jobs',
                width: 80
              },
              {
                title: 'Hotspot',
                dataIndex: 'location_quotient',
              },
          ]

        
        
    return <Table data={data} columns={columns} />

}
