import React from "react";
const imgHide = "/assets/a5006.svg";
const imgHide1 = "/assets/de887.svg";
const imgGroup9099 = "/assets/32c5d.svg";
const imgHide2 = "/assets/5d64c.svg";

export default function Component() {
  return (
    <div className="f10e4a3f920" data-node-id="23:17279" data-name="底部导航">
      <div className="fa6be5472c2" data-node-id="I23:17279;7454:24790" data-name="Home Indicator">
        <div className="fd7c1bc6e54" data-node-id="I23:17279;7454:24790;248:73401" data-name="Home Indicator" />
      </div>
      <div className="f40ef44f425" data-node-id="I23:17279;7454:24791" data-name="tab">
        <div className="f9a39a55c2b" data-node-id="I23:17279;7454:24792" data-name="首页">
          <div className="f75f2c6b5ad" data-node-id="I23:17279;7454:24793" data-name="Hide/首页">
            <img alt="" className="f8faf267d30" src={imgHide} />
          </div>
          <p className="f215611ef8d" data-node-id="I23:17279;7454:24794">
            Home
          </p>
        </div>
        <div className="f9a39a55c2b" data-node-id="I23:17279;7454:24795" data-name="分类">
          <div className="f75f2c6b5ad" data-node-id="I23:17279;7454:24796" data-name="Hide/分类">
            <img alt="" className="f8faf267d30" src={imgHide1} />
          </div>
          <p className="f1b6ddd81c3" data-node-id="I23:17279;7454:24797">
            Category
          </p>
        </div>
        <div className="f9a39a55c2b" data-node-id="I23:17279;7454:24801" data-name="购物车">
          <div className="f561667463d" data-node-id="I23:17279;7454:24802" data-name="Hide/购物车">
            <div className="fcf480e483f" data-node-id="I23:17279;7454:24802;7432:22381">
              <div className="f474f518632">
                <img alt="" className="facc3667e96" src={imgGroup9099} />
              </div>
            </div>
          </div>
          <p className="f1b6ddd81c3" data-node-id="I23:17279;7454:24803">
            Cart
          </p>
        </div>
        <div className="f9a39a55c2b" data-node-id="I23:17279;7454:24804" data-name="我的">
          <div className="f75f2c6b5ad" data-node-id="I23:17279;7454:24805" data-name="Hide/我的">
            <img alt="" className="f8faf267d30" src={imgHide2} />
          </div>
          <p className="f1b6ddd81c3" data-node-id="I23:17279;7454:24806">
            Account
          </p>
        </div>
      </div>
    </div>
  );
}