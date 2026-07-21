# v50

> [!TIP]
>
> 数据持续更新中，欢迎 [提交新文案](https://github.com/vikiboss/v50/issues/new?template=add_kfc_copy.yaml)。

一系列高质量的 KFC 疯狂星期四文案，目前已收录 [450+](https://github.com/vikiboss/v50/blob/main/static/v50.json) 条。

## 使用

你可以通过下面任意一种方式获取本仓库的文案数据。

- 通过 API 获取：https://v50.viki.moe
- 直接拷贝 JSON 数据使用：`./static/v50.json`
- 通过 CDN 获取最新的 JSON 数据

### API

| 端点 | 说明 | 返回格式 |
|------|------|----------|
| `/` 或 `/random` | 随机返回一条文案 | `text/plain` |
| `/list` | 返回所有文案 | `application/json` |

> [!TIP]
>
> 一些可用 CDN 链接
> 
> - GitHub Raw URL: https://raw.githubusercontent.com/vikiboss/v50/refs/heads/main/static/v50.json
> - jsDelivr CDN: https://cdn.jsdelivr.net/gh/vikiboss/v50@main/static/v50.json
> - jsDelivr Mirror CDN: https://cdn.jsdmirror.com/gh/vikiboss/v50@main/static/v50.json

## 文案格式规范

> 这是当前仓库文案遵循的格式规范，同时也是贡献文案时的参考标准。

- 符合「盘古之白」空格规范
- 专有名词统一写法（如 KFC 而不是 kfc）
- 去除首尾多余空格
- 转换 Unicode 字符为 ASCII 字符
- 统一换行符为 LF

## Credits

> [!IMPORTANT]
>
> 免责声明
> 
> 本仓库文案数据均收集自公开互联网，如有侵权请 [联系我](hi@viki.moe) 删除。

其中，大部分数据来源于以下项目，尤其感谢他们的贡献。

- [zkl2333/vme](https://github.com/zkl2333/vme)
- [whitescent/KFC-Crazy-Thursday](https://github.com/whitescent/KFC-Crazy-Thursday)
- [FriedRiceNoodles/AyachiNene](https://github.com/FriedRiceNoodles/AyachiNene)

## License

[MIT](license) License © 2025-present Viki
