import { useState } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function Layout(props) {
    return (
        <div className="two-cols-layout">
            <div className="sidebar" style={{ color: "red" }}>
                {props.children[0]}
            </div>
            <div className="main" style={{ color: "blue" }}>
                {props.children[1]}
            </div>
        </div>
    )
}

export default () => {
    return (
        <Layout>
            <div>sidebar</div>
            <div>main</div>
        </Layout>
    );
}