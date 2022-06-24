import React, { Component } from 'react'

import './index.css'

export default class Youxitese extends Component {
  render() {
    return (
      <div className='main'>
        <div className='head'>
          <img src="http://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20190626150721_85796c.png" alt='' />
        </div>
        <div className='body'>
          <h2>手机版</h2><h4>Android 0.2 / iPhone 0.1</h4><img className='newIco' src="https://sqimg.qq.com/qq_product_operations/im/2015/newicon.png" alt='' />
          <button onClick={this.AndroidBtn}>🤖下载</button>
          <button onClick={this.AndroidBtn}>🍎下载</button>
        </div>
        <div className='foot'>
          <p>
            - 优化了部分体验问题
            <br />
            - 提升了版本稳定性
          </p>
        </div>

      </div>
    )
  }
}
