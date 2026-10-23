import React from "react";
const imgImage7 = "/assets/735bb.png";
type ComponentProps = {
    className?: string;
    propValue?: "Global";
    propValue1?: "小商卡";
};
function Component({ className, propValue = "Global", propValue1 = "小商卡" }: ComponentProps) {
    return (<div className={className || "f59a510fc3f"} data-node-id="7:752">
      <div className="f810c334a52" data-node-id="7:753"/>
      <div className="fddd8a7d499" data-node-id="7:754">
        <div className="f76d596903c" data-node-id="7:755"/>
        <p className="fce282375bc" data-node-id="7:756">
          Available Soon
        </p>
      </div>
    </div>);
}
export default function Component1() {
    return (<div className="fed7d94a159" data-node-id="1:3682" data-name="商卡">
      <div className="f7fc9bb2776" data-node-id="I1:3682;233:2923" style={{ width: 135, height: 135 }}>
        <div className="fc09a9a9c3a" data-node-id="I1:3682;215:964" data-name="请在右侧面板选择对应商品替换">
          <div className="fdc00b603b3" data-node-id="I1:3682;215:964;3:68" data-name="image 7">
            <img alt="" className="f6296272086" src={imgImage7}/>
          </div>
        </div>
        <Component className="f526dde66bc"/>
      </div>
      <div className="f2c44a0b36b" data-node-id="I1:3682;177:1128" data-name="Content">
        <div className="f27d9292f3a" data-node-id="I1:3682;250:511" data-name="价格组">
          <div className="f68657928b0" data-node-id="I1:3682;250:511;177:1161" data-name="价格组">
            <div className="f778483dde2" data-node-id="I1:3682;250:511;177:1162" data-name="现价">
              <div className="f6b969bf24a" data-node-id="I1:3682;250:511;177:1163">
                <p className="fe32ac1aeb2">SAR</p>
              </div>
              <div className="fbc1cedf1e4" data-node-id="I1:3682;250:511;177:1164">
                <p className="fe32ac1aeb2">38.76</p>
              </div>
            </div>
            <div className="f8e0c9fe7cc" data-node-id="I1:3682;250:511;177:1165">
              <p className="f579c544ce5">40.76</p>
            </div>
          </div>
        </div>
        <div className="f2186b65671" data-node-id="I1:3682;177:1135" data-name="标题+规格">
          <p className="f11c8734301" data-node-id="I1:3682;215:1157" style={{ width: 123, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain  `}</p>
          <p className="f80d6f16754" dir="auto" data-node-id="I1:3682;177:1138" style={{ width: 123, height: 18, flex: "0 0 auto" }}>
            700g
          </p>
        </div>
      </div>
    </div>);
}
