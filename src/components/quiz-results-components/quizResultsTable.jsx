import React from "react";

const resultsTable = () => {

    let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
            <table class="table w-75 m-auto">
                <thead>
                    <tr>
                        <th scope = "col">#</th>
                        <th scope = "col">County</th>
                        <th scope = "col">State Name</th>
                        <th scope = "col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Broomfield</td>
                        <td>CO</td>
                        <td>68.41</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Carver</td>
                        <td>MN</td>
                        <td>68.27</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Douglas</td>
                        <td>CO</td>
                        <td>67.31</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Ouray</td>
                        <td>CO</td>
                        <td>66.73</td>
                    </tr>
                </tbody>
            </table>
        </div>
}

export default resultsTable;