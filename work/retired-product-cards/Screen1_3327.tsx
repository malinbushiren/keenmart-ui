import React from "react";
const imgDownloader2 = "/assets/5a9f6.png";
const imgDownloader1 = "/assets/5a75e.svg";
const img = "/assets/0837d.svg";

export default function Component() {
  return (
    <div className="fed7d94a159" data-node-id="1:3327" data-name="商卡">
      <div className="f7fc9bb2776" data-node-id="I1:3327;233:2412" style={{width:165,height:165}}>
        <div className="f78e0b83503" data-node-id="I1:3327;195:1353" data-name="请在右侧面板选择对应商品替换">
          <div className="f25660566da" data-node-id="I1:3327;195:1353;3:117" style={{maskSize:"165px 165px",maskPosition:"71.7750015258789px 0px", maskImage: `url("${imgDownloader1}")` }} data-name="[Downloader 1">
            <img alt="" className="f6296272086" src={imgDownloader2} />
          </div>
        </div>
        <div className="f9358c12fcb" data-node-id="I1:3327;422:3190" data-name="加购按钮">
          <div className="fdcffcc18ac" data-node-id="I1:3327;422:3190;215:1049" data-name="加购">
            <div className="f8a0ff48924" data-node-id="I1:3327;422:3190;215:1050" data-name="形状结合">
              <img alt="" className="f8faf267d30" src={img} />
            </div>
          </div>
        </div>
      </div>
      <div className="f41fa29e7aa" data-node-id="I1:3327;35:1200" data-name="Content">
        <div className="f6dc5f46fc4" data-node-id="I1:3327;35:1329" data-name="价格组">
          <div className="f3e12d05f70" data-node-id="I1:3327;35:1329;35:1234" data-name="现价">
            <div className="f6b969bf24a" data-node-id="I1:3327;35:1329;35:1235">
              <p className="fe32ac1aeb2" dir="auto">
                SAR
              </p>
            </div>
            <div className="fa3e8787b17" data-node-id="I1:3327;35:1329;250:487" data-name="价格">
              <div className="f711e947f8b" data-node-id="I1:3327;35:1329;250:488">
                <p className="fefcc9af6d1">38</p>
              </div>
              <div className="f46374de1ee" data-node-id="I1:3327;35:1329;250:489">
                <p className="fbf919b50f6">.76</p>
              </div>
            </div>
          </div>
        </div>
        <div className="f7720d25f95" data-node-id="I1:3327;35:1212" data-name="标题+规格">
          <p className="fed0247318b" data-node-id="I1:3327;215:951" style={{width:153,height:38,flex:"0 0 auto"}}>
            Ningxia Mini Fresh Broccoli-Spain Spai ...
          </p>
          <p className="f0c4694868e" data-node-id="I1:3327;35:1215" style={{width:153,height:18,flex:"0 0 auto"}}>
            500-700g
          </p>
        </div>
      </div>
    </div>
  );
}