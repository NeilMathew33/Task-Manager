import React, { useEffect, useState } from 'react'
import TaskNavbar from './TaskNavbar'
import axios from 'axios'

const ViewAllTasks = () => {

    const [viewalltasksData, setviewalltasksData] = new useState([])

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response) => {
                setviewalltasksData(response.data)
            }
        ).catch()
    }

    useEffect(() => {fetchData()} , [])
    return (
        <div>
            <TaskNavbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">UserID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {viewalltasksData.map(
                                    (value,index) => {
                                        return (
                                            <tr>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.userId}</td>
                                    <td>{value.title}</td>
                                    <td>{value.completed ? <p className="text-success">done</p> : <p className="text-danger">not done</p> }</td>
                                </tr>
                                        )
                                    }
                                )}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllTasks