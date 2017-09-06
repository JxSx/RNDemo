# 文档
ReactNative中文网：http://reactnative.cn <br/>
ReactNavigation导航：https://reactnavigation.org <br/>
Redux 中文文档：http://cn.redux.js.org/<br/>
Redux-saga 中文文档：http://leonshi.com/redux-saga-in-chinese/index.html<br/>

# API
干货集中营API:http://gank.io/api <br/>


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
 7. Debug模式链接：
   > http://localhost:8081/debugger-ui
