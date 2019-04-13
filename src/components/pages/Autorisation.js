import React from 'react'
import {Container, Row, Col} from 'mdbreact'
import {Table} from 'reactstrap'
import '../styles/autorisation.css'
import {documents, tableheader} from '../documents/documents'

export default function Quartiers() {
  return(
    <div>
    <div>
      <Container>
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">Demande d'autorisation</h3>
        <Row>
          <Col sm="12">
            <Table bordered hover responsive>
              <thead>
                <tr>
                  {
                  tableheader.map((i) =>(
                    <th className="text-center font-weight-bold">{i.title}</th>
                  ))
                }
                </tr>
              </thead>
              <tbody>
                {
                  documents.map((i)=>(
                    <tr className="text-center">
                      <td>{i.title}</td>
                      <td>
                        <img src={i.filetype} alt="download" className="img-fluid filetype"/>
                      </td>
                      <td className="text-center">
                        <a href={i.doc} download>
                          <img src={i.icones} alt="download" className="img-fluid icons"/>
                        </a>                        
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}
