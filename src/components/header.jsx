import { connect } from "react-redux"
import React, {
	Component
} from 'react';

import { HashRouter, Route, Link } from "react-router-dom";
class Header extends Component {
		constructor(props) {
      super(props);
       this.state = {
          name:1
        };
 
     };
	render() {
		return(
			        		<div id="content-bot">
		 					<ul id="scene" className="card-features">
		        			        <li className="layer card-1" data-depth="0.15"><img src="http://hearthstone.nos.netease.com/3/activities/wd7cfderw/home_card_01.png"/></li>
       								<li className="layer card-2" data-depth="0.25"><img src="http://hearthstone.nos.netease.com/3/activities/wd7cfderw/home_card_02.png"/></li>
      							    <li className="layer card-3" data-depth="0.13"><img src="http://hearthstone.nos.netease.com/3/activities/wd7cfderw/home_card_03.png"/></li>
							        <li className="layer card-4" data-depth="0.30"><img src="http://hearthstone.nos.netease.com/3/activities/wd7cfderw/home_card_04.png"/></li>
        							<li className="layer card-5" data-depth="0.20"><img src="http://hearthstone.nos.netease.com/3/activities/wd7cfderw/home_card_05.png"/></li>
</ul>
				<div id="header">
		   				 <h1 className="logo">
		   				 <Link to="/home" name="home"></Link>
						        
						</h1>
		   				 <div className="c-search" id="j-search">
		   		   	 	 <input type="text" value="" maxLength="50" placeholder="输入关键字" />
		        		<a hidefocus="true" href="javascript:;"></a>
		    	</div>
		    	<div id="navWrap">
		        	<ul className="clearFix" id="nav">
		        	    <li className="nav1">
		        	      <Link to="/home"></Link>
		        	    </li>
		        	    <li className="nav2">
		            	    <Link to="/news"></Link>
		            <ul>
		               	    <li>
		                        <a href="/news?new#news">最新</a>
		                    </li>
		                    <li>
		                        <a href="/news?blog#news">博文</a>
		                    </li>
		                    <li>
		                        <a href="/news?match#news">赛事</a>
		                    </li>
		                    <li>
		                        <a href="/news?events#news">活动</a>
		                    </li>
		                    <li>
		                        <a href="/news?media#news">媒体</a>
		                    </li>
		                </ul>
		            </li>
		            <li className="nav3">
		                <Link to="/gameguide" ></Link>
		                <ul>
		                    <li>
		                        <a href="/gameguide/#version">版本</a>
		                    </li>
		                    <li>
		                        <a href="/gameguide/#basic">基础知识</a>
		                    </li>
		                    <li>
		                        <a href="/gameguide/#event">炉石大事件</a>
		                    </li>
		                </ul>
		            </li>
		            <li className="nav4">
		                <a hidefocus="true" href="/media/" ></a>
		                <ul>
		                    <li>
		                        <a href="/media/#video">视频</a>
		                    </li>
		                    <li>
		                        <a href="/media/#pictures">截图</a>
		                    </li>
		                    <li>
		                        <a href="/media/#wallpaper">壁纸</a>
		                    </li>
		                </ul>
		            </li>
		            <li className="nav5">
		                <a hidefocus="true" href="/cards/" ></a>
		            </li>
		            <li className="nav6">
		                <a hidefocus="true" href="/download/" ></a>
		            </li>
		            <li className="nav7">
		                <a hidefocus="true" href="javascript:;" ></a>
		                <ul>
		                    <li>
		                        <a href="/standings/">积分排名</a>
		                    </li>
		                </ul>
		            </li>
		            <li className="nav8">
		                <a hidefocus="true" href="http://bbs.hs.blizzard.cn/" target="_blank" ></a>
		            </li>
		            <li className="sprite-left"></li>
		            <li className="sprite-right"></li>
		        </ul>
		    </div>
		</div>
   	 </div>
		)
		}
	}

export default Header;