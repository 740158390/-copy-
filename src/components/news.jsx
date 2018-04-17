import { connect } from "react-redux"
import React, {
	Component
} from 'react';

import { HashRouter, Route, Link } from "react-router-dom";
import '../css/news.css'
class News extends Component {
	render() {
		return(
			<div>
			  <div id="container">

					<div className="wraperCon wraperNewList">

						<div className="wraperConArea newsListWrap">

							<div className="ui-breadcrumbs">
								<span className="font_gray"></span>
								<a href="/home">炉石传说</a> &gt;
							 	<a href="javascript:void(0)" className="active">新闻</a>
							</div>
							<div className="newsWrap">
								<div id="newsEye">
									<ul className="featured-news">

										<li topic-key="A-12654" data-type="5">
											<div className="article-wrapper">

												<a href="http://hs.blizzard.cn/gameguide/the-witchwood/cards/" className="featured-news-link" target="_blank">

													<div className="article-image">
														<img src="http://hearthstone.nos.netease.com/a/images/2018/3/27/e6feaf737d5e9e9a01abcddc1282b031.jpg" alt=""/>
													</div>
													<div className="article-content">
														<span className="article-title">“女巫森林”扩展包卡牌预览</span>
														<span className="article-summary">你可以在这里了解到最新扩展包“女巫森林”中已经公布的卡牌。</span>
													</div>
												</a>

												<div className="article-meta">

													<span className="comments"></span>

													<span className="publish-date">2018-03-14</span>
												</div>
											</div>
										</li>

										<li topic-key="A-12397" data-type="5">
											<div className="article-wrapper">

												<a href="http://hs.blizzard.cn/article/16/12628" className="featured-news-link" target="_blank">

													<div className="article-image">
														<img src="http://hearthstone.nos.netease.com/a/images/2018/3/12/d03ded779d846605f972afcabd2501ff.jpg" alt=""/>
													</div>
													<div className="article-content">
														<span className="article-title">一起来“女巫森林”探险吧！</span>
														<span className="article-summary">最新扩展包“女巫森林”现已公布。预购即获赠总计70包卡牌包以及“黑暗森林”卡背。</span>
													</div>
												</a>

												<div className="article-meta">

													<span className="comments"></span>

													<span className="publish-date">2018-02-07</span>
												</div>
											</div>
										</li>

										<li topic-key="A-4539" data-type="5">
											<div className="article-wrapper">

												<a href="http://hs.blizzard.cn/article/23/12632" className="featured-news-link" target="_blank">

													<div className="article-image">
														<img src="http://hearthstone.nos.netease.com/1/news/201407/patchnotes.jpg" alt=""/>
													</div>
													<div className="article-content">
														<span className="article-title">《炉石传说》10.4版本更新</span>
														<span className="article-summary">本次更新带来了《炉石传说》最新扩展包“女巫森林”的预购！</span>
													</div>
												</a>

												<div className="article-meta">

													<span className="comments"></span>

													<span className="publish-date">2017-11-23</span>
												</div>
											</div>
										</li>

									</ul>
									<a id="news_13"></a>
									<a id="news_16"></a>
									<a id="news_115"></a>
									<a id="news_98"></a>
									<a id="news_112"></a>
								</div>
							</div>
							
							<div className="newsArea">
								<div className="newsListArea">
									<ul className="newsTab">
										<li className="nav1">
											<a href="javascript:void(0);" className="active" data-tag="new" data-cid="13">最新</a>
										</li>
										<li className="nav2">
											<a href="javascript:void(0);" data-tag="blog" data-cid="16" className="">博文</a>
										</li>
										<li className="nav3">
											<a href="javascript:void(0);" data-tag="match" data-cid="115">赛事</a>
										</li>
										<li className="nav4">
											<a href="javascript:void(0);" data-tag="events" data-cid="112">活动</a>
										</li>
										<li className="nav5">
											<a href="javascript:void(0);" data-tag="media" data-cid="98">媒体</a>
										</li>
									</ul>
									<div id="newsList" className="listNews">

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12895" data-type="1">

											<a className="listNewsItem" href="/article/16/12895" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/4/12/73ffc142304a2d5f28bc2547c7c644ef.jpg" alt=""/>
												<h4>
                                                                                    现在就开始探索女巫森林吧！
                                                                                </h4>
												<p className="listNewsIntro">
													“女巫森林”现已隆重登场！现在登录即可免费领取1张随机职业传说卡牌和3包“女巫森林”卡牌包！
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-13</span>
											</p>
										</div>

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12891" data-type="1">

											<a className="listNewsItem" href="/article/20/12891" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/4/12/5c0d0768342d7df9d336be6b80451af2.jpg" alt=""/>
												<h4>
                                                                                    《黄金竞技场》第六期4月17日打响 安德罗妮狙击不二
                                                                                </h4>
												<p className="listNewsIntro">
													《黄金竞技场》第六期将在4月17日-4月19日每天18点进行，擂主不二最后一关将要迎战的是人气主播安德罗妮。
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-12</span>
											</p>
										</div>

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12903" data-type="1">

											<a className="listNewsItem" href="/article/20/12903" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/3/22/5dd9aee515bcb3d331312cf77ecba9e2.jpg" alt=""/>
												<h4>
                                                                                    参赛拿卡背 全民实力赛春季赛4月14日参赛须知
                                                                                </h4>
												<p className="listNewsIntro">
													2018全民实力赛春季赛《炉石传说》项目第五周的比赛将于4月14日（星期六）在全国15个城市同时开启。
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-12</span>
											</p>
										</div>

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12901" data-type="1">

											<a className="listNewsItem" href="/article/20/12901" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/3/22/9b3ac670000f2556cca86368329e2d21.jpg" alt=""/>
												<h4>
                                                                                    高校星联赛春季赛4月15日参赛须知
                                                                                </h4>
												<p className="listNewsIntro">
													高校星联赛春季赛第四周的比赛将于4月15日（星期日）在全国10个城市同时开启。
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-12</span>
											</p>
										</div>

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12888" data-type="1">

											<a className="listNewsItem" href="/article/16/12888" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/4/12/fce54c5cae55b6caf833a89462611f9e.jpg" alt=""/>
												<h4>
                                                                                    乱斗模式——“一切都是命运”现已开放
                                                                                </h4>
												<p className="listNewsIntro">
													听说你喜欢随机卡牌！选择一个职业，用随机的带有随机效果的随机卡牌随机组成卡组！
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-12</span>
											</p>
										</div>

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12885" data-type="1">

											<a className="listNewsItem" href="/article/16/12885" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/4/11/f01f5d605dcebb7a0e43533d162b9dfb.jpg" alt=""/>
												<h4>
                                                                                    女巫森林——神秘信函
                                                                                </h4>
												<p className="listNewsIntro">
													在面对女巫森林里的邪恶怪物时，先了解一下即将展开的故事中的关键人物绝对是明智之举。
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-12</span>
											</p>
										</div>

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12877" data-type="1">

											<a className="listNewsItem" href="/article/23/12877" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/4/11/6cc5484ee7f186d219fcb63058715b62.jpg" alt=""/>
												<h4>
                                                                                    《炉石传说》11.0版本更新——4月11日
                                                                                </h4>
												<p className="listNewsIntro">
													我们即将迎来全新的炉石年！本次将为“渡鸦年”做好准备。
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-11</span>
											</p>
										</div>

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12872" data-type="1">

											<a className="listNewsItem" href="/article/20/12872" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/4/9/768fb6e3b754eab3fe64fdf1025a36e9.png" alt=""/>
												<h4>
                                                                                    [媒体推荐]知名主播点评“女巫森林”卡牌
                                                                                </h4>
												<p className="listNewsIntro">
													从4月10日起，多位《炉石传说》主播将给大家带来新卡的点评。
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-09</span>
											</p>
										</div>

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12860" data-type="1">

											<a className="listNewsItem" href="/article/16/12860" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/4/6/68ef99d6efcdd77ac6a43740df167f36.jpg" alt=""/>
												<h4>
                                                                                    “女巫森林”将于4月13日正式开放！
                                                                                </h4>
												<p className="listNewsIntro">
													自4月13日起，加入吉尔尼斯最最勇敢的怪物猎人团队，前往“女巫森林”追寻哈加莎的踪迹吧！
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-06</span>
											</p>
										</div>

										<div className="listNewsWrap listNewsWrapF" topic-key="A-12843" data-type="1">

											<a className="listNewsItem" href="/article/16/12843" target="_blank">

												<img src="http://hearthstone.nos.netease.com/a/images/2018/4/5/cc110ebe003a77094cc153401ea93c3a.jpg" alt=""/>
												<h4>
                                                                                    乱斗模式——“渡鸦祝福”现已开放
                                                                                </h4>
												<p className="listNewsIntro">
													“女巫森林”已渐渐向我们逼近！这次渡鸦想玩点新花样——选择一个职业，并获取一副受渡鸦祝福的套牌。
												</p>
											</a>
											<p className="listNewsComment">

												<span className="comments"></span>

												<span className="time">2018-04-05</span>
											</p>
										</div>

									</div>

									<div className="showMore">
										<div className="newsMore" data-page="1" data-cid="13">
											<a className="borderLink" href="javascript:void(0);">更多新闻</a>
										</div>
									</div>

								</div>
							</div>
							
						</div>
						
						<div className="wraperConBot" style="{bottom:-11px;}"></div>
					</div>
					
				</div>
			
			</div>
		)
		}
	}
export default News;