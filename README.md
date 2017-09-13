# 文档
ReactNative中文网：http://reactnative.cn <br/>
ReactNavigation导航：https://reactnavigation.org <br/>
Redux 中文文档：http://cn.redux.js.org/<br/>
Redux-saga 中文文档：http://leonshi.com/redux-saga-in-chinese/index.html<br/>

# API
[干货集中营API](http://gank.io/api) <br/>
[知乎日报API](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)


# 常用命令
以下命令只针对Windows平台

 1. 查看已连接设备：
   > adb devices
 2. 查看Android模拟器列表：
   > android list avd
 3. 指定name，启动模拟器：
   > emulator -avd [name] 
 4. 部署Apk，并运行：
   > react-native run-android 
 5. 开启开发者菜单【Ctrl+M】：
   > adb shell input keyevent 82 
 6. 开启packager服务【操作4部署apk同时也会开启packager服务】
   > react-native start 
 7. Android平台JS打包生成bundle文件：
   > react-native bundle --platform android --entry-file index.android.js --reset-cache --bundle-output android/app/src/main/assets/index.android.bundle --dev false --assets-dest android/app/src/main/res/
 8. Debug模式链接：
   > http://localhost:8081/debugger-ui
   
# Yarn、React Native的命令行工具（react-native-cli）

Yarn是Facebook提供的替代npm的工具，可以加速node模块的下载。React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

> npm install -g yarn react-native-cli

安装完yarn后同理也要设置镜像源：

> yarn config set registry https://registry.npm.taobao.org --global<br/>
> yarn config set disturl https://npm.taobao.org/dist --global

如果你遇到`EACCES: permission denied`权限错误，可以尝试运行下面的命令（限linux系统）： `sudo npm install -g yarn react-native-cli.`

安装完yarn之后就可以用yarn代替npm了，例如用`yarn`代替`npm install`命令，用`yarn add 某第三方库名`代替`npm install --save 某第三方库名`。

注意：目前npm5（发文时最新版本为5.0.4）存在安装新库时会删除其他库的问题，导致项目无法正常运行。请尽量使用yarn代替npm操作。

# 效果展示
![16.gif](https://github.com/JxSx/RNDemo/blob/master/gif/demo.gif)
