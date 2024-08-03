import { Col, Row } from 'reactstrap';
import Partner from "./Partner";
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
    const partners = selectAllPartners();
    return (
        <Row className='ms-auto'>
            <Col className='mt-4' >
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner} />
                        </div>
                    );
                })}
            </Col>
        </Row>
    );
};

export default PartnersList;