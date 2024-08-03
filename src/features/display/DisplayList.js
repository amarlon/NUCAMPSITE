import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectedFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectedFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
const DisplayList = () => {
    const items = [selectedFeaturedCampsite(), selectedFeaturedPromotion(), selectFeaturedPartner()];
    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx} >
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );

};

export default DisplayList;