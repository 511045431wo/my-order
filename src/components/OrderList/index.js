import React, { Component } from 'react';
import OrderItem from '../OrderItem'


class OrderList extends Component {
    // 构造数据
    constructor(props){
        super(props);
        this.state={data:[]}
    }
    // 挂载
    componentDidMount(){
        fetch('/mock/orders.json').then(result=>{
            if(result.ok){
                console.log(result)
                result.json().then(data=>{
                    this.setState({
                        data
                    })
                })
            }
        })
    }
    // 页面渲染
    render() {
        return (
            <div>
                {
                    this.state.data.map(item=>{
                        return <OrderItem key={item.id} data={item}/>
                    })
                }
                
            </div>
        );
    }
}

export default OrderList;