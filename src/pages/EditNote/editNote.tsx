import { Col, Row } from 'antd';
import "./editNote.css"
import { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as dashboardActions from "../../redux/actions/dashboard.actions"
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const { TextArea } = Input;

const EditNote = (props: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const dashboard = useSelector((data: any) => data.dashboard)
    useEffect(() => {
        dispatch(dashboardActions.getData())
    }, [])
    return <>

        <Row className='row '>
            <Input size="large" placeholder="Enter title" />

        </Row>
        <Row className='row'>
            <TextArea rows={6} placeholder="Enter note"/>
        </Row>
        <Row className='row'>
            <Col style={{width:"87vh"}}>
            <Button size="large" type="primary" danger className="button" onClick= {()=> navigate('/')}> Save </Button>
            </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Col style={{width:"87vh"}}>
            <Button size="large"  className="button" onClick= {()=> navigate('/')}> Cancel </Button>
            </Col>
        </Row>
    </>
}
export default EditNote