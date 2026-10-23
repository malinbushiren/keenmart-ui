import React from "react";
const imgLeft = "/assets/27331.svg";
const imgFrame42469 = "/assets/089c2.png";
const imgRightSide = "/assets/2d220.svg";
const imgTime = "/assets/3e9a5.svg";
const imgHeadphones = "/assets/8d76b.svg";
const imgCopy = "/assets/482f6.svg";
const img = "/assets/76e59.svg";
const imgProgressIndicatorDefault = "/assets/b8e15.svg";
const imgReceipt = "/assets/56e0d.svg";
const imgGroup1312321054 = "/assets/46e47.svg";
const imgGroup1312321049 = "/assets/c4123.svg";
const imgGroup1312321053 = "/assets/392c3.svg";
type HomeIndicatorProps = {
    className?: string;
    mode?: "Light";
};
function HomeIndicator({ className, mode = "Light" }: HomeIndicatorProps) {
    return (<div className={className || "f256dffeea6"} data-node-id="23:14291">
      <div className="fa031d726e9" data-node-id="23:14292" data-name="Home Indicator"/>
    </div>);
}
type Left2Props = {
    className?: string;
    size?: "24";
};
function Left2({ className, size = "24" }: Left2Props) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="1:14">
      <div className="f541c1883c0" data-node-id="1:15" data-name="Left">
        <div className="f0a05deba1a">
          <img alt="" className="facc3667e96" src={imgLeft}/>
        </div>
      </div>
    </div>);
}
export default function Component() {
    return (<div className="fabcb1a40ba" data-node-id="34:32718" data-name="支付失败">
      <div className="f51368a6cde" data-node-id="34:32719">
        <div className="fa1401a3621" data-node-id="34:32720" data-name="Status bar (Notch, iPhone X or newer)">
          <div className="f306c4c220b" data-node-id="I34:32720;6893:622;6893:614" data-name="Status bar (Notch, iPhone X or newer)">
            <div className="f7379dde60f" data-node-id="I34:32720;6893:622;6893:614;6893:585" data-name="Right Side">
              <img alt="" className="f8faf267d30" src={imgRightSide}/>
            </div>
            <div className="f1f0f99ceae" data-node-id="I34:32720;6893:622;6893:614;6893:601" data-name="Left Side">
              <div className="ffd009f8265" data-node-id="I34:32720;6893:622;6893:614;6893:602" data-name="Time">
                <img alt="" className="f8faf267d30" src={imgTime}/>
              </div>
            </div>
          </div>
        </div>
        <div className="f7271611d24" data-node-id="34:32721" data-name="Left, Title, Right">
          <div className="fa5d8981ab3" data-node-id="34:32722" data-name="左">
            <Left2 className="f15cc5ceed7"/>
          </div>
          <div className="f8e9c2dfed3" data-node-id="34:32724" data-name="✏️ Title"/>
          <div className="f02b60058bb" data-node-id="34:32725" data-name="back">
            <div className="feaa60f1c42" data-node-id="34:32726" data-name="Headphones">
              <img alt="" className="f8faf267d30" src={imgHeadphones}/>
            </div>
            <p className="f7e7fd1d6f5" data-node-id="34:32727">
              Support
            </p>
          </div>
        </div>
      </div>
      <div className="ff5a8128f25" data-node-id="34:32748">
        <div className="f1a91cb3b7b" data-node-id="34:32749">
          <div className="fec22b3efc9" data-node-id="34:32750">
            <div className="f3cd69cc6e3" data-node-id="34:32751">
              <p className="fbf919b50f6">Arriving</p>
            </div>
            <div className="f1c2d390a11" data-node-id="34:32752">
              <div className="f37560d2f7d" data-node-id="34:32754">
                <p className="f294c8f0b4f">Today,Expedite deliver 06:33</p>
              </div>
            </div>
          </div>
          <div className="ff362390f0b" data-node-id="34:32755">
            <div className="fa54c8e7573" data-node-id="34:32756" data-name="按钮">
              <div className="f4580fea797" data-node-id="34:32757" data-name="Button/_Button Large">
                <div className="faf1736cda0" data-node-id="34:32758" data-name="Text">
                  <div className="f518729bbd8" data-node-id="34:32759">
                    <p className="f4120bb12fd" dir="auto">
                      Repay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="f9492d9230c" data-node-id="34:32769" data-name="订单">
          <div className="f153c0a1809" data-node-id="34:32770">
            <div className="f153c0a1809" data-node-id="34:32771">
              <div className="f72683dd842" data-node-id="34:32772" data-name="订单信息">
                <div className="fe8210ba625" data-node-id="34:32773">
                  <div className="fbae636cd8c" data-node-id="34:32774">
                    <p className="fbac9886996" data-node-id="34:32775">
                      Order
                    </p>
                    <div className="fbae636cd8c" data-node-id="34:32776" data-name="订单信息">
                      <div className="fc2bd19fbd3" data-node-id="34:32777">
                        <p className="fd452ad70ec" data-node-id="34:32778">
                          No.
                        </p>
                        <p className="fd452ad70ec" data-node-id="34:32779">
                          2410291209730120070
                        </p>
                      </div>
                      <div className="fc51752dc8c" data-node-id="34:32780" data-name="Copy">
                        <div className="f6adfe59485" data-node-id="I34:32780;1041:23514" data-name="Copy">
                          <div className="f6004d4b7d5">
                            <img alt="" className="facc3667e96" src={imgCopy}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f0934cfa237" data-node-id="34:32781" data-name="按钮">
                  <div className="feeddbfaaa8" data-node-id="I34:32781;410:1661" data-name="Button/_Button Medium">
                    <div className="fe8210ba625" data-node-id="I34:32781;410:1663" data-name="Text">
                      <div className="fa21a968e48" data-node-id="I34:32781;410:1664">
                        <p className="fbf919b50f6" dir="auto">
                          View details
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fa31a36b864" data-node-id="34:32782" data-name="总金额">
              <p className="fd452ad70ec" data-node-id="34:32783">
                9 items
              </p>
              <div className="fbae636cd8c" data-node-id="34:32784">
                <p className="fd452ad70ec" data-node-id="34:32785">
                  Total
                </p>
                <p className="fd452ad70ec" data-node-id="34:32786">
                  SAR
                </p>
                <p className="fd452ad70ec" data-node-id="34:32787">
                  38.76
                </p>
              </div>
            </div>
          </div>
          <div className="f38e6be2cf7" data-node-id="34:32788" data-name="商品缩略">
            <div className="f37a53bf81c" data-node-id="34:32789">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:32790">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:32791">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:32792">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:32793">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:32794">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="f9492d9230c" data-node-id="34:32795" data-name="尽快送达">
          <div className="f3aba02151a" data-node-id="34:32796" data-name="标题">
            <p className="fbac9886996" data-node-id="34:32798">
              Delivery details
            </p>
          </div>
          <div className="f9ae431b5d9" data-node-id="34:32799">
            <div className="f452d346712" data-node-id="34:32800" data-name="list">
              <div className="fd8e5059ca2" data-node-id="34:32801">
                <p className="f0f5b3553dd" data-node-id="34:32802">
                  Time
                </p>
              </div>
              <div className="fb61eee823d" data-node-id="34:32803">
                <p className="ffa1d24360d" data-node-id="34:32804">
                  Today,expedite deliver 06:33
                </p>
              </div>
            </div>
            <div className="f452d346712" data-node-id="34:32805" data-name="list">
              <div className="fd8e5059ca2" data-node-id="34:32806">
                <p className="f0f5b3553dd" data-node-id="34:32807">
                  Address
                </p>
              </div>
              <div className="fd159307faf" data-node-id="34:32808">
                <p className="fae24368461" data-node-id="34:32809">
                  Home
                </p>
                <div className="f80b1e00572" data-node-id="34:32810">
                  <p className="f67366dcb7c" data-node-id="34:32811">{`King Saud University `}</p>
                  <p className="f92dd2d44ef" data-node-id="34:32812">{`Dingxiaodong  +86 16660654099`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeIndicator className="f6eb5e85531"/>
      <div className="f9359316a68" data-node-id="34:32814" data-name="Title + description">
        <div className="fe7dfe57133" data-node-id="34:32815">
          <div className="ff369ed3543" data-node-id="34:32816">
            <div className="f44edf14544" data-node-id="34:32817">
              <p className="ff62dcabf0a">Payment failed</p>
            </div>
            <p className="fbd85662840" data-node-id="34:32818">
              Please complete within 10 minutes, otherwise the order will be cancelled
            </p>
          </div>
          <div className="fa5c1c82555" data-node-id="34:32819" data-name="成功">
            <div className="fba0f179c23">
              <img alt="" className="facc3667e96" src={img}/>
            </div>
          </div>
        </div>
        <div className="fadeded8241" data-node-id="34:32831">
          <div className="f363bcd2b2a" data-node-id="34:32832" style={{ width: 28, height: 28 }}>
            <div className="fb8416e9900" data-node-id="34:32833" data-name="progress-indicator / default">
              <img alt="" className="f8faf267d30" src={imgProgressIndicatorDefault}/>
            </div>
            <div className="fbcada88e4d" data-node-id="34:32834" data-name="Receipt">
              <div className="fda527321a4" data-node-id="I34:32834;453:17557" data-name="Receipt">
                <div className="fed15cfda7e">
                  <img alt="" className="facc3667e96" src={imgReceipt}/>
                </div>
              </div>
            </div>
          </div>
          <div className="f7ec36d1f8b" data-node-id="34:32835">
            <div className="f36fbc45d3d" data-node-id="34:32850" data-name="Elements / Track line"/>
          </div>
          <div className="f4c75708aa1" data-node-id="34:32851">
            <img alt="" className="f8faf267d30" src={imgGroup1312321054}/>
          </div>
          <div className="f7ec36d1f8b" data-node-id="34:32858">
            <div className="f36fbc45d3d" data-node-id="34:32873" data-name="Elements / Track line"/>
          </div>
          <div className="f4c75708aa1" data-node-id="34:32874">
            <img alt="" className="f8faf267d30" src={imgGroup1312321049}/>
          </div>
          <div className="f7ec36d1f8b" data-node-id="34:32882">
            <div className="f36fbc45d3d" data-node-id="34:32897" data-name="Elements / Track line"/>
          </div>
          <div className="f2d3663d59a" data-node-id="34:32898">
            <img alt="" className="f8faf267d30" src={imgGroup1312321053}/>
          </div>
        </div>
      </div>
    </div>);
}
