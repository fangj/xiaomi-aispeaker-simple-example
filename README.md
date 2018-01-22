# xiaomi-aispeaker-simple-example
小米AI音箱简单示例


为小米AI音箱开发技能的简单示例

* 前提条件：

1. 在小米水滴平台(https://shuidi.mi.com)  成为开发者。
2. 你得有个域名。
3. 有这个域名的证书。可以从阿里云取得一个免费证书。（https://yundun.console.aliyun.com/?p=cas#/cas/home）
3. 你得有个服务器。


* 使用步骤：

1. 将阿里云的证书下载解压到keys目录。修改app.js中的文件地址为你的私钥和证书。
```
const options = {
  key: fs.readFileSync('./keys/214051319980677.key'),//你的私钥
  cert: fs.readFileSync('./keys/214051319980677.pem')//你的证书
};
```
2. 在myroute.js中写你的应答逻辑。
3. 将应用部署到你的服务器。安装:`npm i` 运行:`node app.js`
4. 在小米水滴平台创建技能(https://shuidi.mi.com/skills/create/list)  ,在"配置信息"中写你的https://你的域名
