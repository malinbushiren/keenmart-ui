import React from "react";
const img = "/assets/0837d.svg";
const imgImage7 = "/assets/735bb.png";
type ComponentProps = {
    className?: string;
    propValue?: "global";
    propValue1?: "加购";
    propValue2?: "双列商卡（小）";
};
function Component({ className, propValue = "global", propValue1 = "加购", propValue2 = "双列商卡（小）" }: ComponentProps) {
    return (<div className={className || "f53241b7460"} data-node-id="1:843">
      <div className="f9de947d72d" data-node-id="1:844" data-name="加购">
        <div className="f8a0ff48924" data-node-id="1:845" data-name="形状结合">
          <img alt="" className="f8faf267d30" src={img}/>
        </div>
      </div>
    </div>);
}
export default function Component1() {
    return (<div className="fed7d94a159" data-node-id="1:3677" data-name="商卡">
      <div className="f7fc9bb2776" data-node-id="I1:3677;233:2923" style={{ width: 135, height: 135 }}>
        <div className="fc09a9a9c3a" data-node-id="I1:3677;215:964" data-name="请在右侧面板选择对应商品替换">
          <div className="fdc00b603b3" data-node-id="I1:3677;215:964;3:68" data-name="image 7">
            <img alt="" className="f6296272086" src={imgImage7}/>
          </div>
        </div>
        <Component className="f9c0e8cd0b6"/>
      </div>
      <div className="f2c44a0b36b" data-node-id="I1:3677;177:1128" data-name="Content">
        <div className="f27d9292f3a" data-node-id="I1:3677;250:511" data-name="价格组">
          <div className="f6dc5f46fc4" data-node-id="I1:3677;250:511;177:1170" data-name="价格组">
            <div className="f3e12d05f70" data-node-id="I1:3677;250:511;177:1171" data-name="现价">
              <div className="f6b969bf24a" data-node-id="I1:3677;250:511;177:1172">
                <p className="fe32ac1aeb2">SAR</p>
              </div>
              <div className="fb26714f28d" data-node-id="I1:3677;250:511;177:1173">
                <p className="fe32ac1aeb2">38.76</p>
              </div>
            </div>
          </div>
        </div>
        <div className="f2186b65671" data-node-id="I1:3677;177:1135" data-name="标题+规格">
          <p className="f11c8734301" data-node-id="I1:3677;215:1157" style={{ width: 123, height: 19, flex: "0 0 auto" }}>{` Broccoli-Spain  `}</p>
          <p className="f80d6f16754" dir="auto" data-node-id="I1:3677;177:1138" style={{ width: 123, height: 18, flex: "0 0 auto" }}>
            700g
          </p>
        </div>
      </div>
    </div>);
}
