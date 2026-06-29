# Mineradio

Mineradio 是一款 Windows 桌面沉浸式音乐播放器，由 [XxHuberrr](https://github.com/XxHuberrr) 设计与开发，将天气电台、搜索播放、歌词舞台、粒子视觉和 3D 歌单架融合为一个接近现场感的私人音乐空间。

## 原作者功能

**音乐播放**
- 网易云音乐账号登录，支持搜索、歌单、播客、每日推荐、私人电台
- QQ 音乐搜索与登录态音源补充
- 本地音乐文件导入播放
- 音质选择：超清母带 / 高清臻音 / 无损 SQ / 极高 HQ / 标准
- 播放模式：顺序循环、随机、单曲循环
- 自定义专辑封面上传与裁剪

**视觉体验**
- 7 种视觉预设：emily 封面粒子、滚筒隧道、星球雕塑、虚空、唱片、星河壁纸、安魂骷髅点云
- 电影镜头系统：基于 BPM 节奏自动运镜
- 歌词舞台：3D 歌词支持 12 种字体、自由调节大小/位置/角度/景深
- 粒子溢光、歌词发光、鼓点溢光、轮廓高亮等叠加效果
- 桌面歌词独立窗口，支持锁定穿透和电影震动
- 银河壁纸首页背景

**3D 歌单架**
- 右键唤起 3D 歌单架，以卡片形式浏览歌单和队列
- 支持动态/静态镜头、自动隐藏/常驻模式
- 播客歌单独立开关、收藏歌单合并开关
- PSP 风格机械齿轮选择音效

**天气电台**
- 基于 Open-Meteo 实时天气数据
- 根据城市、天气 mood 自动生成播放队列

**视觉控制台（DIY 模式）**
- 4 个用户存档槽位，可保存和导出完整视觉参数
- 7 个取色器：界面高亮、视觉主色、Home 填充、图标色、歌词色、发光色、歌单架色
- 歌词布局完整控制 + 高级性能设置（后台策略 / 画质档位）
- 摄像头手势识别（需摄像头）

## 界面预览

![首页](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/home.png)

![播放页](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/play.png)

![全屏模式](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/fullscreen.png)

![v1.1.2 新功能](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/v1.1.2-1.png)

![v1.1.2 新功能](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/v1.1.2-2.png)

## 本仓库改动（v1.1.2）

在原版 Mineradio 基础上做了以下调整：

**🆕 新增**
- **酷狗音乐接入**：支持酷狗扫码登录、搜索歌曲、播放音乐
- **三平台首页切换**：时间页右上角 NE | QQ | KG 切换键，首页卡片随平台切换不同内容
- **弹幕评论**：控制栏弹幕开关 + 视觉控制台「弹幕」DIY tab（大小/颜色/字体/位置/行程/数量/循环）
- **时间页 DIY**：视觉控制台「时间页」tab（时钟/问候/天气/歌词的字号/颜色/字体/间距）
- **软件内更新检测**：右上角铃铛常驻，新版本红点提醒，一键下载安装

**🔧 优化**
- 天气电台改为搜索驱动，未登录也能生成播放列表；三平台混合搜索
- 队列面板懒加载，500 首以上不卡顿
- 弹幕全屏/拉伸自适应、去边缘化
- 首页六张卡片结构统一，无封面时自动取歌单/队列专辑图
- 登录面板三平台 tab 完整，用户面板三平台切换与补登

**🐛 修复**
- QQ 音乐登录报错（函数名冲突）
- 弹幕恢复默认不保存、设置中途不生效、hover 掉位、文字重复、切歌残留
- 全屏下弹幕字号/宽度不生效
- 时间页字号/颜色恢复默认无效
- 城市胶囊重启后始终显示"上海"、IP 定位覆盖手动设置
- 天气 API 增加重试
- 卸载程序标记文件误删后阻止卸载

**界面**
- 窗口缩放 50%（原版 75%），最小 820×520
- Hero 区域全新排版：实时时钟 + 天气问候语 + 俏皮话 + 歌词轮播（104首）
- 首页卡片区与 Hero 底部对齐，无留白
- 全屏模式增加宽高阈值，文字和弹幕等比缩放

程序本体保留 Mineradio 命名与品牌，版权归原作者所有。

## 下载安装

- **GitHub**：[Releases](https://github.com/JS1Lan/Lanote/releases) 下载 `Mineradio-1.1.2-Setup.exe`
- **夸克网盘**：[https://pan.quark.cn/s/27509f85c03d](https://pan.quark.cn/s/27509f85c03d)

v1.1.0 / v1.1.1 用户手动下载覆盖安装。v1.1.2 起支持软件内自动更新。

## 版权

Copyright (C) 2026 XxHuberrr. GPL-3.0 授权。原始项目：[XxHuberrr/Mineradio](https://github.com/XxHuberrr/Mineradio)
