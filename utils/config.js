export default {
	// 请求地址
	//URL:"http://127.0.0.1/api/v1",
	//URL:"http://127.0.0.1:9050", // 沸点中心
	URL:"http://localhost:8090/api/v1", // Zuul服务网关
	
	// websocket地址
	//WsUrl: "wss://127.0.0.1:8088/connect"
	WsUrl: "ws://localhost:8081/connect"
	//WsUrl: "ws://localhost:9999"  // nginx
}