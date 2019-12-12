import { connect } from "dva"
import { useEffect, useState } from "react";
import SampleChart from '../../components/SampleChart';
import { Table, Modal, Button, Form, Input } from 'antd';
const FormItem = Form.Item;

function mapStateToProps(state) {
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
        statistic: state.cards.statistic
    }
}

function List(props) {
    const [visible, setVisible] = useState(false)
    const [statisticVisible, setStatisticVisible] = useState(false)
    const [id, setId] = useState(null)
    const { form: { getFieldDecorator } } = props;
    const columns = [
        { title: '名称', dataIndex: 'name' },
        { title: '描述', dataIndex: 'desc' },
        { title: '链接', dataIndex: 'url', render: value => <a href={value}>{value}</a> },
        {
            title: '', dataIndex: '_',
            render: (_, { id }) => (<Button onClick={() => { showStatistic(id) }}>图表</Button>)
        },
    ]
    useEffect(() => {
        props.dispatch({ type: 'cards/queryList' })
    }, [])

    function showModal() { setVisible(true) }
    function handleCancel() { setVisible(false) }
    function handleOk() {
        const { dispatch, form: { validateFields } } = props;
        validateFields((err, values) => {
            if (!err) {
                dispatch({ type: 'cards/addOne', payload: values })
            }
            setVisible(false)
        })
    }

    function showStatistic(id) {
        props.dispatch({ type: 'cards/getStatistic', payload: id })
        setId(id)
        setStatisticVisible(true)
    }

    function handleStatisticCancel() { setStatisticVisible(false) }

    return (
        <div>
            <Table columns={columns} dataSource={props.cardsList} loading={props.cardsLoading} rowKey="id"></Table>
            <Button onClick={showModal}>新建</Button>
            <Modal title="新建记录" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                <Form>
                    <FormItem label="名称">
                        {getFieldDecorator('name', { rules: [{ required: true }] })(<Input />)}
                    </FormItem>
                    <FormItem label="描述">
                        {getFieldDecorator('desc')(<Input />)}
                    </FormItem>
                    <FormItem label="链接">
                        {getFieldDecorator('url', { rules: [{ type: 'url' }] })(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
            <Modal visible={statisticVisible} footer={null} onCancel={handleStatisticCancel}>
                <SampleChart data={props.statistic[id]} />
            </Modal>
        </div>
    )
}
export default connect(mapStateToProps)(Form.create()(List))