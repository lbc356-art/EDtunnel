// _worker.js 简化清爽版 - 已预设中文名
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const uuid = env.UUID || "b831381d-6324-4d53-ad4f-8cda48b30811"; // 你的UUID
    
    // 如果是访问你的专属钥匙链接
    if (url.pathname.includes(uuid)) {
      const hostName = request.headers.get('host');
      const nodeName = "机场专线-"; // <--- 这里就是你要的中文名，以后想改直接改这！
      
      // 自动生成的 VLESS 节点信息
      const vlessConfig = `vless://${uuid}@${hostName}:443?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2048#${nodeName}高速节点`;
      
      return new Response(vlessConfig, {
        headers: { "Content-Type": "text/html;charset=utf-8" },
      });
    }
    
    // 这里保持原有连接逻辑（此处省略具体连接代码，实际使用时建议使用GitHub上的未加密源码）
    return new Response("未授权访问", { status: 403 });
  }
};
