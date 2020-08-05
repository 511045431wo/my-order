import React, { Component } from 'react';
import star_red from "../../assets/img/star-red.png"
import star_gray from "../../assets/img/star-gray.png"

import './style.css'

class OrderItem extends Component {
    constructor(props){
        super(props);
        this.state={
            editing:false,//是否正在评论
            stars:props.data.stars||0,//星星评价
            comment:props.data.comment||""//评论内容
        }
    }
    render() {//页面ui部分
        // 定义数据
        const {shop,product,price,picture,isCommented}=this.props.data;
        return (
            <div className="orderItem">
                <div className="orderItem_top">
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
                                isCommented?<button className="orderItem__btn orderItem__btn--gray">已评价</button>:<button className="orderItem__btn orderItem__btn--red" onClick={this.handleOpenEdit}>评价</button>

                            }
                
                        </div>
                    </div>
                </div>
                </div>
                {this.state.editing?this.renderEditerArea():null}
            </div>
            
        );
    }
    // 新增评价区域
    renderEditerArea(){
        return(
            <div className="orderItem__commentContainer">
                <textarea className="orderItem__comment" rows="5" onChange={this.handleCommentChange} value={this.state.comment}></textarea>
                {this.renderStarS()}
                <button className="orderItem__btn orderItem__btn--red" onClick={this.handleSubmitComment}>提交</button>
                <button className="orderItem__btn orderItem__btn--gray" onClick={this.handleCancelComment}>取消</button>
            </div>
        )   
    }
    // 星星页面区域
    renderStarS(){
        const {stars} =this.state;
        // console.log(stars)
        return(
            <div>
                {
                    [1,2,3,4,5].map((item,index)=>{
                        return(
                            <span key={index} onClick={this.handleClickStars.bind(this,item)} className="img__span">
                                {stars >= item ? <img src={star_red} alt="" className="starImg"/> : <img src={star_gray} alt="" className="starImg"/>}
                            </span>            
                        )
                    })
                }
               
            </div>
        )
    }
    // 评价事件处理函数
    handleOpenEdit=()=>{
        this.setState({
            editing:true
        })
    }
    // 评价输入框内容改变函数
    handleCommentChange=(e)=>{
        this.setState({
            comment:e.target.value
        })
    }
    // 评分点击事件
    handleClickStars=(stars)=>{
        this.setState({
            stars:stars
        })
    }
    // 取消事件
    handleCancelComment=()=>{
        this.setState({
            editing:false,
            comment:this.props.data.comment||"",
            stars:this.props.data.stars||0
        })
    }
    // 提交事件
    handleSubmitComment=()=>{
        const {id} =this.props.data;
        const {comment,stars}=this.state;
        this.setState({
            editing:false
            
        })
        this.props.onSubmit(id,comment,stars)
    }

}

export default OrderItem;