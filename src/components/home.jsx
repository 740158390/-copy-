import { connect } from "react-redux"
import React, {
	Component
} from 'react';

import { HashRouter, Route, Link } from "react-router-dom";
import '../css/home.css'
class Home extends Component {
	render() {
		return(
			<div id="container">
                    <div className="wraperCon homeCon">
                        <div className="wraperConArea clearFix">
                            <div className="homeConMain">
                                <div className="homeConMain-top">
                                    <div id="eye">
                                    	<div className="eye_wraper">
                                                <ul className="eye_pic clearFix">                          
                                                            <li><img src="http://hearthstone.nos.netease.com/a/images/2018/4/13/4dfae2f743e1f1ed462339f29bc25116.jpg" alt="“女巫森林”扩展包现已上线"
                                                                    width="640" /></li>
                                                            
                                                            <li><img src="http://hearthstone.nos.netease.com/a/images/2018/4/12/58000bb1d4be8f8b63e14728fcc83008.jpg" alt="《黄金竞技场》第六期4月17日打响"
                                                                    width="640" /></li>
                                                            
                                                            <li><img src="http://hearthstone.nos.netease.com/a/images/2018/3/16/f689a7b7d89dec67de8256ea860ce710.jpg" alt="2018高校星联赛春季赛报名开启"
                                                                    width="640" /></li>
                                                            
                                                            <li><img src="http://hearthstone.nos.netease.com/a/images/2018/3/8/720c2f7068c36d2001b4a59d1083fec8.jpg" alt="2018全民实力赛春季赛报名开启"
                                                                    width="640"/></li>              
                                                </ul>
                                            </div>
                                            <ul className="eye_link">
                                                            <li className="active"><a href="http://hs.blizzard.cn/article/16/12895" target="_blank"></a></li>
                                                          	     <li><a href="http://hs.blizzard.cn/article/20/12891" target="_blank"></a></li>
                                                                  <li><a href="http://csl.blizzard.cn/" target="_blank"></a></li>
                                                                  <li><a href="http://hs.blizzard.cn/article/20/12602" target="_blank"></a></li>
                                            </ul>
                                            <ul className="eye_small">
                                            	<li className="active"><a href="javascript:void(0);"><img src="http://hearthstone.nos.netease.com/a/images/2018/4/13/4dfae2f743e1f1ed462339f29bc25116.jpg" alt="“女巫森林”扩展包现已上线" width="62"/></a></li>
                                                                <li><a href="javascript:void(0);"><img src="http://hearthstone.nos.netease.com/a/images/2018/4/12/58000bb1d4be8f8b63e14728fcc83008.jpg" alt="《黄金竞技场》第六期4月17日打响" width="62" /></a></li>
                                                                <li><a href="javascript:void(0);"><img src="http://hearthstone.nos.netease.com/a/images/2018/3/16/f689a7b7d89dec67de8256ea860ce710.jpg" alt="2018高校星联赛春季赛报名开启" width="62"/></a></li>
                                                                <li><a href="javascript:void(0);"><img src="http://hearthstone.nos.netease.com/a/images/2018/3/8/720c2f7068c36d2001b4a59d1083fec8.jpg" alt="2018全民实力赛春季赛报名开启" width="62"/></a></li>
                                            </ul>
                                            <ul className="txtList">
                                                            <li className="active"> “女巫森林”扩展包现已上线 </li>
                                                                <li>《黄金竞技场》第六期4月17日打响 </li>
                                                                <li>2018高校星联赛春季赛报名开启  </li>
                                                                <li>2018全民实力赛春季赛报名开启      </li>
                                            </ul>
                                    </div>
                                    <ul className="videoEye clearFix">
                                        
                                            
                                                
                                                    
                                                        
                                                            <li className="videoEyeFirst">
                                                                
                                                                            <a href="http://hs.blizzard.cn/gameguide/the-witchwood/cards/" target="_blank">
                                                        <img src="http://hearthstone.nos.netease.com/a/images/2018/3/27/ffd670239285682281455f58a72dd58e.jpg" alt=""/>
                                                    </a>
                                                                            <p>
                                                                                “女巫森林”扩展包全部卡牌一览                                                                            </p>
                                                                    </li>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <li>
                                                                        
                                                                            <a href="http://hs.blizzard.cn/article/16/12869" target="_blank">
                                                        <img src="http://hearthstone.nos.netease.com/a/images/2018/4/8/844101eb9dd600e3ba88c0219513170d.jpg" alt=""/>
                                                    </a>
                                                                            <p>
                                                                                四月赛季——月光阁楼                                                                            </p>
                                                                    </li>                                                                 
                                    </ul>
                                    <div className="homeNews">            
                                                            <div className="homeNewsWrap homeNewsWrapF" topic-key="A-12895" data-type="1">
                                                                
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/16/12895" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/12/73ffc142304a2d5f28bc2547c7c644ef.jpg" alt="现在就开始探索女巫森林吧！" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    现在就开始探索女巫森林吧！
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    “女巫森林”现已隆重登场！现在登录即可免费领取1张随机职业传说卡牌和3包“女巫森林”卡牌包！
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-13</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12891" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/20/12891" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/12/5c0d0768342d7df9d336be6b80451af2.jpg" alt="《黄金竞技场》第六期4月17日打响 安德罗妮狙击不二" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    《黄金竞技场》第六期4月17日打响 安德罗妮狙击不二
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    《黄金竞技场》第六期将在4月17日-4月19日每天18点进行，擂主不二最后一关将要迎战的是人气主播安德罗妮。
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-12</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12903" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/20/12903" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/3/22/5dd9aee515bcb3d331312cf77ecba9e2.jpg" alt="参赛拿卡背 全民实力赛春季赛4月14日参赛须知" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    参赛拿卡背 全民实力赛春季赛4月14日参赛须知
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    2018全民实力赛春季赛《炉石传说》项目第五周的比赛将于4月14日（星期六）在全国15个城市同时开启。
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-12</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12901" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/20/12901" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/3/22/9b3ac670000f2556cca86368329e2d21.jpg" alt="高校星联赛春季赛4月15日参赛须知" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    高校星联赛春季赛4月15日参赛须知
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    高校星联赛春季赛第四周的比赛将于4月15日（星期日）在全国10个城市同时开启。
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-12</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12888" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/16/12888" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/12/fce54c5cae55b6caf833a89462611f9e.jpg" alt="乱斗模式——“一切都是命运”现已开放" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    乱斗模式——“一切都是命运”现已开放
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    听说你喜欢随机卡牌！选择一个职业，用随机的带有随机效果的随机卡牌随机组成卡组！
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-12</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12885" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/16/12885" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/11/f01f5d605dcebb7a0e43533d162b9dfb.jpg" alt="女巫森林——神秘信函" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    女巫森林——神秘信函
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    在面对女巫森林里的邪恶怪物时，先了解一下即将展开的故事中的关键人物绝对是明智之举。
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-12</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12877" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/23/12877" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/11/6cc5484ee7f186d219fcb63058715b62.jpg" alt="《炉石传说》11.0版本更新——4月11日" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    《炉石传说》11.0版本更新——4月11日
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    我们即将迎来全新的炉石年！本次将为“渡鸦年”做好准备。
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-11</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12872" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/20/12872" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/9/768fb6e3b754eab3fe64fdf1025a36e9.png" alt="[媒体推荐]知名主播点评“女巫森林”卡牌" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    [媒体推荐]知名主播点评“女巫森林”卡牌
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    从4月10日起，多位《炉石传说》主播将给大家带来新卡的点评。
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-09</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12860" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/16/12860" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/6/68ef99d6efcdd77ac6a43740df167f36.jpg" alt="“女巫森林”将于4月13日正式开放！" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    “女巫森林”将于4月13日正式开放！
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    自4月13日起，加入吉尔尼斯最最勇敢的怪物猎人团队，前往“女巫森林”追寻哈加莎的踪迹吧！
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-06</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12843" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/16/12843" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/5/cc110ebe003a77094cc153401ea93c3a.jpg" alt="乱斗模式——“渡鸦祝福”现已开放" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    乱斗模式——“渡鸦祝福”现已开放
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    “女巫森林”已渐渐向我们逼近！这次渡鸦想玩点新花样——选择一个职业，并获取一副受渡鸦祝福的套牌。
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-05</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12821" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/20/12821" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/2/5fb43464ad291f724222d6671fe1912c.jpg" alt="黄金公开赛石家庄站落幕 风华绝代丨皮小丘夺冠" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    黄金公开赛石家庄站落幕 风华绝代丨皮小丘夺冠
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    黄金公开赛石家庄站圆满落幕，风华绝代丨皮小丘战胜CC直播丶黑哥夺冠，咯小噔与达尔则分获三四名。
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-02</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12801" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/16/12801" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/3/29/2d0a77963726d33df017d6604b42cd8a.jpg" alt="[愚人节快乐]《炉石传说》热烈欢迎鱼人玩家进驻旅店！" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    [愚人节快乐]《炉石传说》热烈欢迎鱼人玩家进驻旅店！
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    Mrrlrglrl grlrlsmmrl mfgrm.lgmlrllg flmrmlr-mrrmlglsfl lrmrmgl。
                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-01</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                        
                                                                    <div className="homeNewsWrap" topic-key="A-12869" data-type="1">
                                                                        
                                                                            
                                                                                        <a className="homeNewsItem" href="/article/16/12869" target="_blank">
                                                                                            
                                                                                                <img src="http://hearthstone.nos.netease.com/a/images/2018/4/8/844101eb9dd600e3ba88c0219513170d.jpg" alt="排名对战2018年四月赛季——月光阁楼" width="200" height="100"/>
                                                                                                <h4>
                                                                                                    排名对战2018年四月赛季——月光阁楼
                                                                                                </h4>
                                                                                                <p className="homeNewsIntro">
                                                                                                    《炉石传说》2018年四月对战赛季已经打响——而我们又将为大家带来新的卡牌背面图案！

                                                                                                </p>
                                                                                        </a>

                                                                                        <p className="homeNewsComment">
                                                                                            
                                                                                                <span className="comments"></span>
                                                                                                
                                                                                                    <span className="time">2018-04-01</span>
                                                                                        </p>
                                                                    </div>
                                                                    
                                                                        
                                                    
                                                                        
                                                    
                                                                        
                                                    
                                                                        
                                                    
                                                                        
                                                    
                                                                        
                                                    
                                                                        
                                                    
                                                                        
                                                                            
                                                            </div>
                                                            <div className="homeShowMore">
                                                                <div className="newsMore">
                                                                    <a className="borderLink" href="/news?new">更多新闻</a>
                                                                </div>
                                                            </div>
                                                            <div className="homeConMain-bot"></div>
                                    </div>
                                </div>
                                
                                <div className="homeConBar">
                                    <div className="features">
                                        
                                        <a href="/gameguide/the-witchwood/" target="_blank" className="logo"></a>
                                        <a href="/gameguide/the-witchwood/" target="_blank" className="logo_fix"></a>
                                       
                                        <div className="download">
                                            <ul className="deviceIcon clearFix">
                                                <li>
                                                    <a href="javascript:void(0);" className="pc active" data-url="http://www.battlenet.com.cn/download/getInstallerForGame?os=win&locale=zhCN&version=LIVE&gameProgram=HEARTHSTONE 
                                        "></a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="ios" data-url="https://itunes.apple.com/cn/app/lu-shi-chuan-shuo-mo-shou/id841140063?mt=8&ign-mpt=uo%3D4"><img src="http://hearthstone.nos.netease.com/3/home/ewm.jpg" /></a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="android" data-url="/download/"><img src="http://hearthstone.nos.netease.com/3/download/1498818557.png"/></a>
                                                </li>
                                            </ul>
                                            <a href="http://www.battlenet.com.cn/download/getInstallerForGame?os=win&locale=zhCN&version=LIVE&gameProgram=HEARTHSTONE"
                                                target="_blank" className="clientDownload pcClient"></a>
                                           
                                      
                                            <video id="flashBox" autoPlay="autoplay" loop="true" preload="auto" width="220" height="60">
                                                <source src="http://hearthstone.nos.netease.com/3/home/20151115/home_download_btn.webm" type="video/webm"/>
                                                <source src="http://hearthstone.nos.netease.com/3/home/20151115/home_download_btn.mp4" type="video/mp4"/>
                                            </video>
                                            <div className="downloadBtn">
                                            </div>
                                        </div>
                                        <div className="wyw-icon"></div>
									</div>
                                    
                                   
                                    <div className="dragWrapper">
                                        <div className="rightModule module_media">
                                            <div className="rightModuleSub">
                                                <div className="dragBtn"></div>
                                                <div className="mid">
                                                    <div className="top">
                                                        <div className="bot">
                                                            <h3><span className="iconCommon iconZh"></span>电竞赛事</h3>
                                                            <div className="esport">
                                                                <div className="esportCon">
                                                                    <ul className="eye_pic">
                                                                        <li><img src="http://hearthstone.nos.netease.com/3/common/loading.gif"
                                                                                className="loading" /></li>
                                                                    </ul>
                                                                </div>
                                                                <a href="javascript:void(0);" className="prev"></a>
                                                                <a href="javascript:void(0);" className="next"></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="rightModule module_media" rel="media">
                                            <div className="rightModuleSub">
                                                <div className="dragBtn"></div>
                                                <div className="mid">
                                                    <div className="top">
                                                        <div className="bot">
                                                            <h3><span className="iconCommon iconZh"></span>游戏直播</h3>
                                                            <div className="videoBox">
                                                               
                                                                <a href="http://hs.blizzard.cn/article/98/2493 " className="playBtn" target="_blank"></a>
                                                                <img src="http://hearthstone.nos.netease.com/3/home/v5/live.jpg" alt=""/>
                                                                <span className="over"></span>
                                                            </div>
                                                          
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="rightModule module_recommend clearFix" rel="recommend">
                                            <div className="rightModuleSub">
                                                <div className="dragBtn"></div>
                                                <div className="mid">
                                                    <div className="top">
                                                        <div className="bot">
                                                            <h3><a><span className="iconCommon iconMt"></span>媒体推荐</a>
                                                            </h3>
                                                            <ul className="bbsList mediaRec clearFix">
                                                                
                                                                    
                                                                        
                                                                            
                                                                                
                                                                                        <li><a href="/article/98/2493"
                                                                                                target="_blank" title="《炉石传说》直播汇总"><span className="iconCommon iconSmallArrow"></span><span className="mediaSource">【本周直播】</span><span className="mTitle">《炉石传说》直播汇总</span></a></li>
                                                                                        
                                                                                            
                                                                                                
                                                                            
                                                                                
                                                                                        <li><a href="/article/98/12061"
                                                                                                target="_blank" title="元旦特辑：九职业大作战"><span className="iconCommon iconSmallArrow"></span><span className="mediaSource">【斗鱼】</span><span className="mTitle">元旦特辑：九职业大作战</span></a></li>
                                                                                        
                                                                                            
                                                                                                
                                                                            
                                                                                
                                                                                        <li><a href="/article/98/11628"
                                                                                                target="_blank" title="关于加入暴雪的8个小建议"><span className="iconCommon iconSmallArrow"></span><span className="mediaSource">【爱玩】</span><span className="mTitle">关于加入暴雪的8个小建议</span></a></li>
                                                                                        
                                                                                            
                                                                                                
                                                                            
                                                                                
                                                                                        <li><a href="/article/98/11430"
                                                                                                target="_blank" title="网易爱玩带你亲历2017暴雪嘉年华"><span className="iconCommon iconSmallArrow"></span><span className="mediaSource">【网易爱玩】</span><span className="mTitle">网易爱玩带你亲历2017暴雪嘉年华</span></a></li>
                                                                                        
                                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                                                    
                                                            </ul>
                                                            <a className="moreBtn" href="/news?media#news" target="_blank">查看更多</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                        <div className="rightModule module_events clearFix" rel="events">
                                            <div className="rightModuleSub">
                                                <div className="dragBtn"></div>
                                                <div className="mid">
                                                    <div className="top">
                                                        <div className="bot">
                                                            <h3><a><span className="iconCommon iconTj"></span>第三方赛事推荐</a>
                                                            </h3>
                                                            <ul className="bbsList mediaRec clearFix">
                                                                
                                                                    
                                                                        
                                                                            
                                                                                
                                                                                        <li><a href="/article/124/12276"
                                                                                                target="_blank" title="熊猫炉石天梯接力赛1月27日开始"><span className="iconCommon iconSmallArrow"></span><span className="mTitle">熊猫炉石天梯接力赛1月27日开始</span></a></li>
                                                                                        
                                                                                            
                                                                                                
                                                                            
                                                                                
                                                                                        <li><a href="/article/124/11097"
                                                                                                target="_blank" title="斗鱼十一天梯竞速赛"><span className="iconCommon iconSmallArrow"></span><span className="mTitle">斗鱼十一天梯竞速赛</span></a></li>
                                                                                        
                                                                                            
                                                                                                
                                                                            
                                                                                
                                                                                        <li><a href="/article/124/9924"
                                                                                                target="_blank" title="斗鱼天梯24小时马拉松活动即将开启"><span className="iconCommon iconSmallArrow"></span><span className="mTitle">斗鱼天梯24小时马拉松活动即将开启</span></a></li>
                                                                                        
                                                                                            
                                                                                                
                                                                            
                                                                                
                                                                                        <li><a href="/article/124/9270"
                                                                                                target="_blank" title="《炉石大冒险》第三期"><span className="iconCommon iconSmallArrow"></span><span className="mTitle">《炉石大冒险》第三期</span></a></li>
                                                                                        
                                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                            
                                                                                                
                                                                                                    
                                                                                                        <li><a href="/article/124/9270"
                                                                                                                target="_blank"
                                                                                                                title="《炉石大冒险》第三期"><span className="iconCommon iconSmallArrow"></span><span className="mTitle">《炉石大冒险》第三期</span></a></li>
                                                            </ul>
                                                            <a target="_blank" className="moreBtn" href="/news?match#news">查看更多</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="rightModule-normal module_normal" rel="normal">
                                            <div className="subModule services">
                                                <div className="text">
                                                    <h4>暴雪游戏安全中心</h4>
                                                </div>
                                                <a href="http://wow.blizzard.cn/services/security/" className="icon services-icon" target="_blank"></a>
                                            </div>                                          
                                            <div className="subModule">
                                                <div className="text">
                                                    <h4>充值指引</h4>
                                                </div>
                                                <a href="/pay/" className="icon guide" target="_blank"></a>
                                            </div>
                                            <div className="subModule">
                                                <div className="text">
                                                    <h4>随身炉石App</h4>
                                                </div>
                                                <a href="http://hs.blizzard.cn/minisite/appsite" className="icon appsite" target="_blank"></a>
                                            </div>
                                           
                                                        <div className="text">
                                                            <h4>第十届暴雪嘉年华</h4>
                                                            <p>暴雪25周年庆典</p>
                                                        </div>
                                                        <a href="http://blizzcon.blizzard.cn/" className="icon blzIcon" target="_blank"></a>
                                                    </div> -->
                                            <div className="subModule bmall">
                                                <div className="text">
                                                    <h4>官方周边商城</h4>
                                                    <p>bmall.163.com</p>
                                                </div>
                                                <a href="http://bmall.163.com/" className="icon bmallIcon" target="_blank"></a>
                                            </div>
                                            <div className="subModule tmall">
                                                <div className="text">
                                                    <h4>官方充值旗舰店(天猫)</h4>
                                                    <p>blz.tmall.com</p>
                                                </div>
                                                <a href="http://blz.tmall.com" className="icon tmallIcon" target="_blank"></a>
                                            </div>
                                            <div className="subModule reward">
                                                <div className="text">
                                                    <h4>积分奖励系统</h4>
                                                    <p>reward.battlenet.com.cn</p>
                                                </div>
                                                <a href="http://reward.battlenet.com.cn/" className="icon rewardIcon" target="_blank"></a>
                                            </div>
                                            <div className="subModule joinUs">
                                                <div className="text">
                                                    <h4>加入我们</h4>
                                                    <p>wangzhiyi.zhiye.com</p>
                                                </div>
                                                <a href="http://wangzhiyi.zhiye.com" className="icon joinUsIcon" target="_blank" onclick='neteaseTracker(false, "http://hs.blizzard.cn/home/joinus", "招聘", "hs9click");'></a>
                                            </div>
                                          
                                                        <div className="text">
                                                            <h4>商务合作伙伴</h4>
                                                        </div>
                                                        <a href="mailto:business@battlenet.com.cn" className="apply">申请合作</a>
                                                        <div className="communityJoinMedia">
                                                            <ul className="eye_pic">
                                                                <li><a className="img" href="http://cn.razerzone.com/" target="_blank"><img src="http://hearthstone.nos.netease.com/3/v2015/logo/logo_razer.jpg" alt="razer"/></a></li>
                                                                <li><a className="img" href="http://samsung.myamd.net/" target="_blank"><img src="http://hearthstone.nos.netease.com/3/v2015/logo/logo_amd.jpg" alt="amd"/></a></li>
                                                                <li><a className="img" href="http://www.asus.com.cn/" target="_blank"><img src="http://hearthstone.nos.netease.com/3/v2015/logo/logo_asus.jpg" alt="asus"/></a></li>
                                                            </ul>
                                                            <a href="javascript:void(0);" className="prev"></a>
                                                            <a href="javascript:void(0);" className="next"></a>
                                                        </div>
                                                    </div>

                                        
                                        <div className="rightModule module_sns" rel="sns">
                                            <div className="rightModuleSub">
                                                <div className="dragBtn"></div>
                                                <div className="mid">
                                                    <div className="top">
                                                        <div className="bot">
                                                            <h3><span className="iconCommon iconChui"></span>互动社区</h3>
                                                            <ul className="comm_share clearFix">
                                                                <li className="weixin borderR" className="">
                                                                    <span className="bds_button_weixin_icon"></span>
                                                                    <a href="javascript:void(0)" className="bds_button_weixin bds_tip weixin_dy">
                                                                <em className="thumb_op5">
                                                                                <img width="92" src="http://hearthstone.nos.netease.com/3/v2015/layout/weixin_dingyue.jpg" alt="" />
                                                                                </em> 微信
                                                                <i>订阅号</i>
                                                            </a>
                                                                    <a href="javascript:void(0)" className="bds_button_weixin bds_tip weixin_fw">
                                                                <em className="thumb_op5">
                                                                                <img width="92" src="http://hearthstone.nos.netease.com/3/v2015/layout/weixin_fuwu.jpg" alt=""/>
                                                                                </em> 微信
                                                                <i>服务号</i>
                                                            </a>
                                                                </li>
                                                                <li>
                                                                    <a href="http://weibo.com/playhearthstone" className="bds_button_tsina" target="_blank">
                                                                <span></span> 新浪微博
                                                            </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0)" className="bds_button_webapp bds_tip">
                                                                <span></span>
                                                                <em className="thumb_op5">
                                                                                <img width="92" height="92" src="http://hearthstone.nos.netease.com/3/v2015/layout/code_webapp.jpg" alt=""/>
                                                                                </em> 手机版官网
                                                            </a>
                                                                </li>
                                                                <li className="borderR mail">
                                                                    官方邮箱
                                                                    <a href="mailto:hs@battlenet.com.cn" className="font-small">hs@battlenet.com.cn</a>
                                                                </li>
                                                                <li className="tel">
                                                                    客服热线<b className="font-small">0571-28090163</b>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="homeConBar-bot"></div>
                                        </div>
                                    
                                </div>
		)
	}
}

export default Home;