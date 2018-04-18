import { connect } from "react-redux"
import React, {
	Component
} from 'react';
import '../css/gameguide.css'
import '../css/hreo.css'
import '../css/gamefoot.css'
import { HashRouter, Route, Link } from "react-router-dom";
class Gameguide extends Component {
	render() {
		return(  
			<div className="gameguide">
 					 <div id="container">
                <div className="wraperCon">
                    <div className="wraperConArea">
                      
                        <div className="ui-breadcrumbs">
                            <span className="font_gray"></span>
                            <a href="/home" target="_blank">炉石传说</a> &gt; <a className="active" href="javascript:void(0);">游戏指南</a>
                        </div>
                        
                        <div className="gameguideIntro">
                            <div className="desc">
                                <h2>游戏指南</h2>
                                <p>想要自己组建一副套牌，然后用它来和其他玩家对战？现在马上就<a href="../download/" target="_blank">下载《炉石传说》</a>并投入游戏吧，没有什么比参与实战更能让你学到东西的了！而如果你在完成教学关卡之后仍有一些疑惑，这个页面的内容将帮助你补充所有遗漏的游戏知识。</p>
                            </div>
                            
                        </div>
                        <h3 className="title">版本<a name="version"></a></h3>
                        <ul className="justified-list justified-list--expansion clearFix">
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--witchwood" href="/gameguide/the-witchwood/">
                                    <img className="expansion-link__logo expansion-link__logo--witchwood" alt="" src="http://hearthstone.nos.netease.com/3/newbie/witchwood-logo_3reware.png?v1"/>
                                </a>
                            </li>                             
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--kobolds" href="/gameguide/kobolds-catacombs/">
                                    <img className="expansion-link__logo expansion-link__logo--kobolds" alt="" src="http://hearthstone.nos.netease.com/3/newbie/kobolds/kobolds-logo.png?v1"/>
                                </a>
                            </li> 
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--knight" href="/gameguide/knights-of-the-frozen-throne/">
                                    <img className="expansion-link__logo expansion-link__logo--knight" alt="" src="http://hearthstone.nos.netease.com/3/newbie/knight/logo.png?v1"/>
                                </a>
                            </li>                        
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--ungoro" href="/gameguide/ungoro/">
                                    <img className="expansion-link__logo expansion-link__logo--ungoro" alt="" src="http://hearthstone.nos.netease.com/3/newbie/ungoro/logo.png"/>
                                </a>
                            </li>
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--msog" href="/gameguide/msog/">
                                    <img style={{width:" 78%",left:" 42%",top:"45%"}} className="expansion-link__logo expansion-link__logo--msog" alt="" src="http://hearthstone.nos.netease.com/3/newbie/msog/logo.png"/>
                                </a>
                            </li>
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--krz" href="/gameguide/karazhan/">
                                    <img style={{width:" 90%" ,left:" 42%"}} className="expansion-link__logo expansion-link__logo--wotog" alt="" src="http://hearthstone.nos.netease.com/3/newbie/karazhan/logo.png"/>
                                </a>
                            </li>
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--wotog" href="/gameguide/oldgods/">
                                    <img className="expansion-link__logo expansion-link__logo--wotog" alt="" src="http://hearthstone.nos.netease.com/3/newbie/wotog/logo.png"/>
                                </a>
                            </li>
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--loe" href="/gameguide/loe/">
                                    <img className="expansion-link__logo expansion-link__logo--loe" alt="" src="http://hearthstone.nos.netease.com/3/newbie/loe/index.png"/>
                                </a>
                            </li>
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--tgt" href="/gameguide/thegrandtourney/">
                                    <img className="expansion-link__logo expansion-link__logo--tgt" alt="" src="http://hearthstone.nos.netease.com/3/newbie/tgt/index.png"/>
                                </a>
                            </li>
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--brm" href="/gameguide/brm/">
                                    <img className="expansion-link__logo expansion-link__logo--brm" alt="" src="http://hearthstone.nos.netease.com/3/v2015/gameguide/brm-logo.png"/>
                                </a>
                            </li>
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--goblins-vs-gnomes" href="/gameguide/goblins-vs-gnomes/">
                                    <img className="expansion-link__logo expansion-link__logo--goblins-vs-gnomes" alt="" src="http://hearthstone.nos.netease.com/3/v2015/gameguide/gvg-logo.png"/>
                                </a>
                            </li>
                            <li className="grid-50--sm expansion-container">
                                <a className="expansion-link expansion-link--naxxramas" href="/gameguide/naxxramas/">
                                    <img className="expansion-link__logo expansion-link__logo--naxxramas" alt="" src="http://hearthstone.nos.netease.com/3/v2015/gameguide/naxx-logo.png"/>
                                </a>
                            </li>
                        </ul>
                        <h3 className="title" id="gameguide">基础知识<a name="basic"></a></h3>
                        <ul className="baseList clearFix">
                            <li>
                                <a href="../gameguide/basic#xinshou" target="_blank">
                                    <span className="icon zl"></span>
                                    <span className="title">界面总览</span>
                                </a>
                            </li>
                            <li>
                                <a href="../gameguide/basic#step" target="_blank">
                                    <span className="icon bz"></span>
                                    <span className="title">回合步骤</span>
                                </a>
                            </li>
                            <li>
                                <a href="../gameguide/card" target="_blank">
                                    <span className="icon card"></span>
                                    <span className="title">卡牌和套牌</span>
                                </a>
                            </li>
                            <li>
                                <a href="../gameguide/skill" target="_blank">
                                    <span className="icon jn"></span>
                                    <span className="title">技能和特效</span>
                                </a>
                            </li>
                            <li>
                                <a href="../gameguide/rank" target="_blank">
                                    <span className="icon ms"></span>
                                    <span className="title">游戏模式</span>
                                </a>
                            </li>
                            <li>
                                <a href="../gameguide/quest" target="_blank">
                                    <span className="icon cj"></span>
                                    <span className="title">任务成就</span>
                                </a>
                            </li>
                            <li>
                                <a href="../gameguide/chat" target="_blank">
                                    <span className="icon sj"></span>
                                    <span className="title">社交互动</span>
                                </a>
                            </li>
                            <li>
                                <a href="../gameguide/craft" target="_blank">
                                    <span className="icon fj"></span>
                                    <span className="title">打造分解</span>
                                </a>
                            </li>
                        </ul>
                        <h3 className="title" id="heroes">九大职业 为你而战</h3>
                        <p className="heroesDes">在《炉石传说》中，你扮演的是游戏中九个职业。每个职业都具有独特的英雄技能以及专属的职业卡牌。你可以在这个章节中了解这些职业独到的玩法。你可以在练习模式中可以逐一解锁他们。尝试着了解各个职业的特色，作出选择，然后开始你的《炉石传说》之旅吧！</p>
                        <div className="hreo-list" id="heroAnchor">
                            <ul className="btn-list">
                                <li>
                                    <a href="javascript:void(0)" className="on">
                                        <span className="hreo hero1"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="hreo hero2"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="hreo hero3"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="hreo hero4"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="hreo hero5"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="hreo hero6"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="hreo hero7"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="hreo hero8"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="hreo hero9"></span>
                                    </a>
                                </li>
                            </ul>
                            <div className="intro-list">
                                <ul className="img">
                                    <li className="hero1" style={{display:"block"}}>
                                        <div className="detail">
                                            <h4><span>法师</span>吉安娜·普罗德摩尔</h4>
                                            <p className="hero-intro">
                                                若要说谁最擅长把法力转化成燃烧的烈焰，恐怕没有人能和吉安娜相比。她会把套牌中大量的直接伤害法术肆无忌惮地砸在对手身上，包括许多强大的清场法术。再加上她那能够有效地对付小型随从的英雄技能，以及各种奥秘，吉安娜可算得上是一个全面而致命的对手。
                                            </p>
                                            <div className="skill">
                                                <span className="skill-icon1"></span><strong>火焰冲击：</strong>造成1点伤害
                                            </div>
                                            <div className="character">
                                                <h5>特性简介</h5>
                                                <p>法师是掌控魔法的智者。吉安娜•普罗德摩尔在魔兽系列中，已是一名历经数战的著名大法师。她能熟练地掌控奥术、冰霜和火焰魔法，拥有丰富的法术和强大的火力输出。</p>
                                                <p>火焰冲击能无视嘲讽对任意目标造成伤害。作为拥有秘能卡的英雄之一，吉安娜能通过<a data-cards="mage_Ice Barrier" href="javascript:void(0);">寒冰护体</a>来保护自己，也能使用<a data-cards="mage_Mirror Entity" href="javascript:void(0);">镜像实体</a>来复制对手的随从。她拥有强大的AOE能力，同时，她的<a data-cards="mage_Fireball" href="javascript:void(0);">火球术</a>和<a data-cards="mage_Pyroblast" href="javascript:void(0);">炎爆术</a>，更是极为强大的火力输出。而法师的招牌技能——<a data-cards="mage_PolyMorph" href="javascript:void(0);">变形术</a>，也为吉安娜提供了控制对手的手段，往往能为战局带来更多变化和惊喜</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hero2">
                                        <div className="detail">
                                            <h4><span className="yello">猎人</span>雷克萨</h4>
                                            <p className="hero-intro">如果说音乐能够平息野兽狂野的怒火，那么对于雷克萨来说，没有什么音乐能比他的野兽们撕裂猎物时所发出的声音更动听的了。他很沉稳，却也很狂野，这听上去有些矛盾，但这正是我们想说的。</p>
                                            <div className="skill">
                                                <span className="skill-icon2"></span><strong className="yello">稳固射击：</strong> 对敌方英雄造成2点伤害
                                            </div>
                                            <div className="character">
                                                <h5>特性简介</h5>
                                                <p>英雄技能稳固射击能固定地对敌方英雄造成伤害，<a data-cards="hunter_Arcane Shot" href="javascript:void(0);">奥术射击</a>、<a data-cards="hunter_Multi-Shot" href="javascript:void(0);">多重射击</a>等法术卡也能带来可观的输出。作为奥秘卡的<a data-cards="hunter_Explosive Trap" href="javascript:void(0);">爆炸陷阱</a>、<a data-cards="hunter_Freezing Trap" href="javascript:void(0);">冰冻陷阱</a>等，经常能带来意想不到的收获。而作为一个猎人，最可怕的并不是这些——猎人可是万兽之王！雷克萨的增强法术能够将最弱小的野兽随从变成杀戮机器，甚至召唤出传说中的古老<a data-cards="hunter_King Krush" href="javascript:void(0);">暴龙王</a>！而他箭筒里暗藏着的各种直接攻击法术则能消灭任何阻挡他的野兽前进的敌人。狩猎开始了！</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hero3">
                                        <div className="detail">
                                            <h4><span className="pink">圣骑士</span>乌瑟尔•光明使者</h4>
                                            <p className="hero-intro">设想你是一个随从，你更愿意加入谁的套牌呢？是会把你喂给恶魔的古尔丹，还是会增强你，治疗你，然后派遣大量援军支持你的乌瑟尔？想一想吧。乌瑟尔能够赐予一个弱小的随从以攻无不克的钢铁之躯，也能够让一个强大的随从在忏悔中变得软弱。他还能够不断地将白银之手新兵招至麾下，所以他几乎永远不会缺少随从。</p>
                                            <div className="skill">
                                                <span className="skill-icon3"></span><strong className="pink">白银新兵：</strong>召唤一个1/1的白银之手新兵
                                            </div>
                                            <div className="character">
                                                <h5>特性简介</h5>
                                                <p>乌瑟尔能源源不断地召唤白银之手新兵加入战斗，并用骑士特有的各种祝福来强化他们。他能使用圣光为自己治疗，也能使用惩戒的力量来制裁邪恶，甚至复活已经阵亡的随从。请不要放过圣骑士的每一个随从，因为骑士的祝福随时都能让他们变成可怕的对手！</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hero4">
                                        <div className="detail">
                                            <h4><span className="yello">战士</span>加尔鲁什•地狱咆哮</h4>
                                            <p className="hero-intro">作为艾泽拉斯最强大的战士，加尔鲁什所带到场上的不仅有各种战斗兵器，大群嗜血的随从，还带来了一种愈战愈勇的战斗模式。这么说并不夸张——加尔鲁什的套牌能够在制造大量伤害的同时，将随从受到的伤害转化成让他们更加强大的力量。而当他那些浴血奋战的疯狂随从们在被召唤后就直接向你扑面而来的时候，可别被惊呆了。</p>
                                            <div className="skill">
                                                <span className="skill-icon4"></span><strong className="yello">全副武装：</strong>获得2点护甲值
                                            </div>
                                            <div className="character">
                                                <h5>特性简介</h5>
                                                <p>全副武装能每回合给自己叠加2护甲，敌人需要更多的输出来打破它们。加尔鲁什能号令麾下的勇士冲锋，也能斩杀受伤的弱者，更能利用自己的盾牌进行反击！并且，由于战士们都拥有熟练地使用武器的技巧，加尔鲁什能使用的武器，也是《炉石传说》中数量最多的！加尔鲁什甚至能召唤他的父亲——<a data-cards="warrior_Grommash Hellscream" href="javascript:void(0);">格罗玛什•地狱咆哮</a>！在战士的怒吼中颤抖吧!</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hero5">
                                        <div className="detail black">
                                            <h4><span className="red">德鲁伊</span>玛法里奥•怒风</h4>
                                            <p className="hero-intro">对于玛法里奥来说，这款游戏是他展现德鲁伊多才多艺，无所不能的又一个舞台。他的许多法术可以从两种效果中选择一种进行施放，甚至他的随从都能够变身成为不同的形态来适应当时的需要。他能够加速法力值的增长，在资源上超越对手，然后施放强大的伤害性法术和清场技能，宛如一只巨熊横扫一切。</p>
                                            <div className="skill">
                                                <span className="skill-icon5"></span><strong className="red">变形术：</strong>本回合+1攻击力，+1护甲值
                                            </div>
                                            <div className="character">
                                                <h5>特性简介</h5>
                                                <p>变形术奠定了德鲁伊攻守兼备的优势，不仅能叠加护甲，还能每回合进行攻击。玛法里奥能使用自然的能量来治愈自己，也能召唤自然卫士来保卫他的领土。他能使用<a data-cards="druid_Moonfire" href="javascript:void(0);">月火术</a>和<a data-cards="druid_Starfire" href="javascript:void(0);">星火术</a>来打击敌人，也能使用<a data-cards="druid_Claw" href="javascript:void(0);">爪击</a>和<a data-cards="druid_Swipe" href="javascript:void(0);">横扫</a>让敌人知道激怒德鲁伊的后果。玛法里奥还能召唤他的恩师——<a data-cards="druid_Cenarius" href="javascript:void(0);">塞纳留斯</a>，与他并肩作战。</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hero6">
                                        <div className="detail">
                                            <h4><span className="purple">术士</span>古尔丹</h4>
                                            <p className="hero-intro">恶魔法术非常强大，但是会令施法者付出沉痛的代价。古尔丹对这一点了然于心。他所能控制的恶魔数量令人咋舌，尽管有些恶魔会因为太过强大或是太容易被召唤而造成一些“与众不同”的效果。由于古尔丹的英雄技能的存在，他想要建立起卡牌优势可谓轻而易举，这位年迈的术士让任何对手都无法小觑。</p>
                                            <div className="skill">
                                                <span className="skill-icon6"></span><strong className="purple">生命分流：</strong>抽一张牌并受到2点伤害
                                            </div>
                                            <div className="character">
                                                <h5>特性简介</h5>
                                                <p>古尔丹能通过生命分流来获得额外的手牌。同时，他与黑暗进行了交易，能从他人身上汲取生命来治疗自己。古尔丹也能支配各种各样的恶魔，小鬼、<a data-cards="warlock_Succubus" href="javascript:void(0);">魅魔</a>、<a data-cards="warlock_Voidwalker" href="javascript:void(0);">虚空行者</a>，甚至可怕的<a data-cards="warlock_Dread Infernal" href="javascript:void(0);">地狱火</a>都是被他支配的随从。不仅如此，他还能以自身为代价召唤强大的<a data-cards="warlock_Lord Jaraxxus" href="javascript:void(0);">加拉克苏斯大王</a>！谁敢阻挡术士的道路，那他一定会面对死亡！</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hero7">
                                        <div className="detail">
                                            <h4><span className="blue">萨满祭司</span>萨尔</h4>
                                            <p className="hero-intro">当一个萨满凭一己之力将整个世界多次从彻底崩坏的边缘拯救出来之后，他下一步会做什么呢？当然是到旅店里坐下来玩玩牌啦！萨尔的套牌仿佛是一个锦囊，包含着各种增强卡牌、伤害法术、治疗法术以及各种凶悍的随从。在和这位部落前任大酋长对战时，他看似均衡却全面的法术和随从组合总是能够出奇制胜。</p>
                                            <div className="skill">
                                                <span className="skill-icon7"></span><strong className="blue">召唤图腾：</strong>随机召唤一个图腾
                                            </div>
                                            <div className="character">
                                                <h5>特性简介</h5>
                                                <p>萨尔有四种功能各异的图腾，有些能给对手带来麻烦，有些则能给自身带来增益。他是所有英雄中唯一拥有“过载”天赋的英雄——带有过载效果的卡牌往往能以极低的耗费带来可观的收益，但相应的下一回合却将受到惩罚。这决定了萨满能在一回合能打出伤害可观的爆发，加上<a data-cards="shaman_Windfury" href="javascript:void(0);">风怒</a>、<a data-cards="shaman_Flame tongue Totem" href="javascript:void(0);">火舌图腾</a>、<a data-cards="shaman_Bloodlust" href="javascript:void(0);">嗜血</a>等萨满招牌技能……大地母亲在护佑着你！ 过载：过载的法力水晶数量将从下回合的可用法力水晶数量中扣除
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hero8">
                                        <div className="detail black">
                                            <h4><span className="purple">牧师</span>安度因•乌瑞恩</h4>
                                            <p className="hero-intro">我们知道你现在的想法：他是个牧师，那么他要如何击败我呢？就靠它的治疗技能？没错，安度因的套牌中确实有许多强力而特别的治疗法术，然而他的暗影法术会立即让你大惊失色，然后，他能够使用诸如<a data-cards="priest_Mind Control" href="javascript:void(0);">精神控制</a>这样强大的控场法术击败你，而给于你最后一击的，可能还是你自己的随从。</p>
                                            <div className="skill">
                                                <span className="skill-icon8"></span><strong className="purple">次级治疗术：</strong>恢复2点生命值
                                            </div>
                                            <div className="character">
                                                <h5>特性简介</h5>
                                                <p>安度因的治疗能力十分强大，可以很好的保证自己和随从的存活。他能使用<a data-cards="priest_Power Word Shield" href="javascript:void(0);">真言术：盾</a>等卡牌来提高随从的生命上限，也能用<a data-cards="priest_Mass Dispel" href="javascript:void(0);">群体驱散</a>来沉默对手所有的随从，甚至能使用<a data-cards="priest_Holy Nova" href="javascript:void(0);">神圣新星</a>来同时达到群体治疗和AOE的效果。但牧师们往往光影相生，如有必要，安度因也可以使用暗影天赋来进行战斗，将治疗天赋变为强大的进攻能力。
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="hero9">
                                        <div className="detail">
                                            <h4><span className="kelly">潜行者</span>瓦莉拉•萨古纳尔</h4>
                                            <p className="hero-intro">潜行者们总是善于偷袭、刺探和诡计，而瓦莉拉也不例外。这不仅仅是因为她的套牌中含有出色的直接攻击法术和强力的移除手段，她的卡牌之间还能打出连击效果，造成极为致命的威胁。更糟糕的是（对于他的对手而言），她能够掏出暗藏的匕首，这意味着在必要时，她会亲自来到战场上，把一些麻烦的随从轻易地解决掉。</p>
                                            <div className="skill">
                                                <span className="skill-icon9"></span><strong className="kelly">匕首精通：</strong>
                                                <p>装备一把1/2的匕首</p>
                                            </div>
                                            <div className="character">
                                                <h5>特性简介</h5>
                                                <p>瓦莉拉•萨古纳尔是一名出色的潜行者，匕首精通配合她的毒药，能让武器伤害变得异常恐怖。瓦莉拉的战斗以快节奏著称，众多低耗费的卡牌让她习惯于速战速决。而潜行者所独具的特色——连击，更可以为她带来强大的爆发和意想不到的收获。如果你喜欢干脆利落、不给对手任何喘息机会的战斗，瓦莉拉是你最好的选择！</p>
                                                <p>连击：当你在使用带有连击效果的卡牌前已经使用过其他卡牌（任何类型，例如法术、武器、随从等），那么就会触发连击效果。</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                             
                            </div>
                        </div>
                        <h3 className="title" id="events">炉石大事件<a name="event"></a></h3>
                        <div className="timelineBox">
                            <ul id="eventsList">
                                <li>
                                    <a href="" target="_blank" className="eventsLink">
                                        <img className="imgload" src="http://hearthstone.nos.netease.com/3/common/loading.gif" alt=""/>
                                        <img className="eventsphoto" src="" alt=""/>
                                        <span className="eventsDec"></span>
                                    </a>
                                </li>
                            </ul>
                            <div className="textmask"></div>
                        </div>
                        <div className="timeline">
                            <div className="dateList">
                                <ul id="timeline">
                                </ul>
                            </div>
                            <a href="javascript:void(0);" className="prev"></a>
                            <a href="javascript:void(0);" className="next"></a>
                        </div>
                        <div className="conlist clearFix" id="tools">
                            <div className="left-module">
                                <dl className="faq-list">
                                    <dt>常见问题</dt>
                                    <dd className="noline"><a href="/articles/27/756#Q1" target="_blank"><span className="icon"></span>什么是炉石传说？</a></dd>
                                    <dd><a href="/articles/27/756#Q4" target="_blank"><span className="icon"></span>有哪些游戏模式？</a></dd>
                                    <dd><a href="/articles/27/756#Q9" target="_blank"><span className="icon"></span>如何获取卡牌？</a></dd>
                                    <dd><a href="https://www.battlenet.com.cn/support/zh/article/%E5%AE%A2%E6%9C%8D%E7%94%B5%E8%AF%9D%E6%9C%8D%E5%8A%A1%E6%8C%87%E5%BC%95" target="_blank"><span className="icon"></span>客服电话服务</a></dd>
                                    <dd><a href="https://www.battlenet.com.cn/support/zh/games/hearthstone" target="_blank"><span className="icon"></span>技术支持文章</a></dd>
                                </dl>
                            </div>
                            <div className="middle-module">
                             
                                <dl className="patch-list">
                                    <dt>了解更多</dt>
                                    <dd><a target="_blank" href="/download"><span className="icon"></span>下载游戏</a></dd>
                                    <dd><a target="_blank" href="/pay/"><span className="icon"></span>充值指引</a></dd>
                                    <dd><a target="_blank" href="/standings/"><span className="icon"></span>中国区世锦赛积分</a></dd>
                                    <dd><a target="_blank" href="http://gold.blizzard.cn/"><span className="icon"></span>黄金系列赛</a></dd>
                                    <dd><a target="_blank" href="http://www.blizzardtv.cn/"><span className="icon"></span>暴雪游戏频道</a></dd>
                                </dl>
                            </div>
                            <div className="right-module">
                                <dl className="tool-list">
                                    <dt>工具</dt>
                                    <dd className="noline"><a target="_blank" href="/cards/builder/"><span className="icon"></span>卡牌工具</a></dd>
                                    <dd><a target="_blank" href="/ladder/"><span className="icon"></span>英雄榜</a></dd>
                                    <dd><a target="_blank" href="/minisite/appsite"><span className="icon"></span>随身炉石APP</a></dd>
                                </dl>
                            </div>
                        </div>
                     
                    </div>
                   
                </div>
                
                <div className="wraperConBot"></div>
          
    
     
    </div>
 			</div>
   		)
	}
}
export default Gameguide