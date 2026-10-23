import React from "react";
const imgClose = "/assets/cd24d.svg";

export default function Component() {
  return (
    <div className="fc789b63539" data-node-id="34:24326" data-name="提交评价弹窗">
      <div className="fbc1de9cab6" data-node-id="34:24327" data-name="弹窗-部分提交确认">
        <div className="fabb6a423be" data-node-id="34:24354" data-name="选择退款商品">
          <div className="f28d36442b5" data-node-id="34:24355" data-name="标题">
            <div className="f1e6bd52de6" data-node-id="34:24356" data-name="主标题">
              <div className="f4d4777b96d" data-node-id="34:24357" data-name="左间距" />
              <div className="f39a83c7496" data-node-id="34:24358" data-name="标题">
                <p className="f746f7f24d5" dir="auto" data-node-id="34:24359" style={{width:291,height:21,flex:"0 0 auto"}}>
                  Confirm submission of rating？
                </p>
              </div>
              <div className="fc04fa71972" data-node-id="34:24360" data-name="关闭按钮">
                <div className="feaa60f1c42" data-node-id="34:24361" data-name="Close">
                  <img alt="" className="f8faf267d30" src={imgClose} />
                </div>
              </div>
            </div>
          </div>
          <div className="fac986374f9" data-node-id="34:24364">
            <p className="f67a0042caa" data-node-id="34:24365">
              Currently, only a portion has been rated. The rest can be rated again next time.
            </p>
          </div>
        </div>
        <div className="f0a6ccfdcb9" data-node-id="34:24366" data-name="btn">
          <div className="fbc9c116913" data-node-id="34:24367" data-name="全局/主按钮/默认">
            <div className="f9a39a55c2b" data-node-id="34:24368" data-name="按钮">
              <div className="f0a5b75a0ec" data-node-id="I34:24368;410:1432" data-name="Button/_Button XLarge">
                <div className="fe8210ba625" data-node-id="I34:24368;410:1434" data-name="Text">
                  <div className="f79b404c3f1" data-node-id="I34:24368;410:1435">
                    <p className="fc3dc13096a" dir="auto">
                      Continue Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="f95b047f169" data-node-id="34:24369" data-name="按钮">
              <div className="f08b6cd2397" data-node-id="I34:24369;410:1408" data-name="Button/_Button XLarge">
                <div className="fe8210ba625" data-node-id="I34:24369;410:1410" data-name="Text">
                  <div className="f958fdc6594" data-node-id="I34:24369;410:1411">
                    <p className="fc3dc13096a" dir="auto">
                      Submit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f35ac9c9bad" data-node-id="34:24370" data-name="Home Indicator - On Light">
            <div className="f2470d7fb46" data-node-id="I34:24370;0:3675" />
          </div>
        </div>
        <div className="f30c78ed848" data-node-id="34:24371">
          <p className="f8a3ede2ed5">弹窗高度随内容撑高：</p>
          <p className="f8a3ede2ed5">最小高度：screenheight*0.35</p>
          <p className="f8a3ede2ed5">最大高度：screenheight*0.88</p>
          <p className="fe32ac1aeb2">达到最大高度，内容区支持滑动查看更多</p>
        </div>
      </div>
    </div>
  );
}