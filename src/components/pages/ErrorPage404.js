import React from "react"
import { Container, Row, Col } from 'mdbreact'

export default function ErrorPage404() {
  return (
    <div>
      <Container>
        <h1 className="mt-5 mb-5 text-center text-green mytitle" style={{fontSize:'9rem'}}>
          {" "}
          Oops!
        </h1>
        <Row>
          <Col sm="12">
            <p className="text-center text-green mytitle"> 404 - PAGE NON TROUVEE</p>
            <p className="text-center text-green mytitle"> La page que vous essayez de chercher est introuvable ou peut etre a ete supprimee.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
