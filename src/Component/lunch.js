import React, { Component } from 'react'
import db from '../config';
import { Table, Button } from "reactstrap";

// import { useFirebaseApp, useDatabaseList } from "reactfire";
 
export default class Lunch extends Component {

    state = {
        items: []
    }
// snapshot es la respuesta que nos da la peticion get sobre todos los documentos "docs"
    componentDidMount () {
        db.collection("lunch").get().then((snapShots) => {
            this.setState({
                items: snapShots.docs.map(doc => {
                    return { id:doc.id, 
                             data:doc.data()}
                })
            })
        })
    }


    render () {
        const { items } = this.state;
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        { items && items !== undefined ? items.map((item, key) => (
                            <tr key={key}>
                                <td>{item.data.name}</td>
                                <td>{item.data.price}</td>
                                <td><Button>Agregar</Button></td>
                                <td><Button>Eliminar</Button></td>
                            </tr>

                        ) ):null } 
                    </tbody>
                </Table>

            </div>
        )  
    }
}