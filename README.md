# Mineradio

Mineradio 是一款 Windows 桌面沉浸式音乐播放器，由 [XxHuberrr](https://github.com/XxHuberrr) 设计与开发，将天气电台、搜索播放、歌词舞台、粒子视觉和 3D 歌单架融合为一个接近现场感的私人音乐空间。

## 功能概览

**音乐播放**
- 网易云音乐 / QQ 音乐 / 酷狗音乐 三平台登录、搜索、播放
- 三平台首页切换，热门歌单与排行榜
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
- 弹幕评论飘浮，支持完整 DIY 调节

**3D 歌单架**
- 右键唤起 3D 歌单架，以卡片形式浏览歌单和队列
- 支持动态/静态镜头、自动隐藏/常驻模式
- 播客歌单独立开关、收藏歌单合并开关
- PSP 风格机械齿轮选择音效

**天气电台**
- 基于 Open-Meteo 实时天气数据
- 根据城市、天气 mood 自动生成播放队列
- 搜索驱动，无需登录

**视觉控制台（DIY 模式）**
- 4 个用户存档槽位，可保存和导出完整视觉参数
- 8+ 个取色器：界面高亮、视觉主色、Home 填充、图标色、歌词色、发光色、歌单架色等
- 歌词布局完整控制 + 高级性能设置（后台策略 / 画质档位）
- 弹幕 DIY：气泡大小/颜色/字体/位置/行程/数量全可控
- 时间页 DIY：时钟/问候/天气/歌词的字号/颜色/字体/间距全可控

## 界面预览

![首页](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/home.png)

![播放页](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/play.png)

![全屏模式](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/fullscreen.png)

![v1.1.2 新功能](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/v1.1.2-1.png)

![v1.1.2 新功能](https://raw.githubusercontent.com/JS1Lan/Lanote/main/docs/assets/screenshots/v1.1.2-2.png)

## v1.1.2 更新内容

**🆕 新功能**

- **酷狗音乐接入**：支持酷狗扫码登录、搜索歌曲、播放音乐
- **三平台首页切换**：时间页右上角 NE | QQ | KG 切换键，首页卡片随平台切换
- **弹幕 DIY 控制台**：独立「弹幕」tab——大小/颜色/字体/位置/行程/数量/循环全可控
- **时间页 DIY 控制台**：独立「时间页」tab——时钟/问候/天气/歌词的字号/颜色/字体/间距全可控
- **软件内更新检测**：右上角铃铛常驻，新版本红点提醒，一键下载安装

**🔧 优化**

- 天气电台改为搜索驱动，未登录也能用
- 队列面板懒加载，500 首以上不卡顿
- 弹幕全屏自适应、去边缘化
- 首页六张卡结构统一，无封面自动取专辑图
- 登录/用户面板三平台完整支持

**🐛 修复**

- QQ 登录报错、弹幕恢复不保存、hover 掉位、切歌残留、全屏字号不生效
- 时间页恢复默认无效、城市胶囊重启变"上海"
- 卸载程序误删标记文件后拒绝卸载

## 下载安装

- **GitHub**：[Releases](https://github.com/JS1Lan/Lanote/releases) 下载 `Mineradio-1.1.2-Setup.exe`
- **夸克网盘**：[https://pan.quark.cn/s/27509f85c03d](https://pan.quark.cn/s/27509f85c03d)

v1.1.0 / v1.1.1 用户手动下载覆盖安装。v1.1.2 起支持软件内自动更新。

## 版权

Copyright (C) 2026 XxHuberrr. GPL-3.0 授权。原始项目：[XxHuberrr/Mineradio](https://github.com/XxHuberrr/Mineradio)
