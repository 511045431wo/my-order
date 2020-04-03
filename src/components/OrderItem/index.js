import React, { Component } from 'react';
import './style.css'

class OrderItem extends Component {
    render() {//页面ui部分
        // 定义数据
        const {shop,product,price,picture,isCommented}=this.props.data;
        return (
            <div className="orderItem">
                {/* 图片 */}
                <div className="orderItem__picContainer">
                    <img className="orderItem__pic" src={picture} alt=""/>
                </div>
                {/* 产品详情 */}
                <div className="orderItem__content">
                    <div className="orderItem__product">{product}</div>
                    <div className="orderItem__shop">{shop}</div>
                    <div className="orderItem__detail">
                        <div className="orderItem__price">{price}</div>
                        <div>
                            {
                                isCommented?<button className="orderItem__btn orderItem__btn--gray">已评价</button>:<button className="orderItem__btn orderItem__btn--red">评价</button>

                            }
                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;