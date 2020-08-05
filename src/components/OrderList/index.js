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
                // console.log(result.json())
                result.json().then(data=>{
                    console.log(data)
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
                        return <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit}/>
                    })
                }
                
            </div>
        );
    }
    handleSubmit=(id,comment,stars)=>{
        // fetch("/saveComment").then(()=>{

        // })
        // 新数据
        const newData=this.state.data.map(item=>{
            return item.id===id?
            {
                ...item,
                comment,
                stars,
                isCommented:true
            }:item;
        })
        this.setState({
            data:newData
        })
    }
}

export default OrderList;