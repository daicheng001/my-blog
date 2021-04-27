import React from "react"
import Layout from "../components/layout"
import styles from '../styles/home.styl'
const Home = () => {
  const data = [
    {
      title: "文章的标题",
      description: "ZeroTier是一款基于P2P的内网穿透工具，对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。",
      date: "2021-04-27",
      link: "链接的地址",
      type: "javaScript",
      img: require("../../static/images/1.jpeg"),
    },
    {
      title: "文章的标题",
      description: "ZeroTier是一款基于P2P的内网穿透工具，对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。",
      date: "2021-04-27",
      link: "链接的地址",
      type: "java",
      img: require("../../static/images/1.jpeg"),
    },
    {
      title: "文章的标题",
      description: "ZeroTier是一款基于P2P的内网穿透工具，对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。",
      date: "2021-04-27",
      link: "链接的地址",
      type: "Node.js",
      img: require("../../static/images/1.jpeg"),
    },
    {
      title: "文章的标题",
      description: "ZeroTier是一款基于P2P的内网穿透工具，对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。",
      date: "2021-04-27",
      link: "链接的地址",
      type: "webpack",
      img: require("../../static/images/1.jpeg"),
    },
    {
      title: "文章的标题",
      description: "ZeroTier是一款基于P2P的内网穿透工具，对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。",
      date: "2021-04-27",
      link: "链接的地址",
      type: "javaScript",
      img: require("../../static/images/1.jpeg"),
    }
  ]
  return (
      <Layout title="首页" description="首页">
       <div className={ styles["home_content"] }>
        {data.map((item, index) => {
          return (
            <div className={ styles["home_item"] }>
              <div className={ styles["home_item_left"] }>
                <div className={ styles["title"] }>{item.title}</div>
                <div className={ styles["description"] }>{item.description}</div>
                <div className={ styles["options"] }>
                  <div className={ styles["time"] }>{item.date}</div>
                  <div className={ styles["type"] }>{item.type}</div>
                </div>
              </div>
              <div className={ styles["home_item_right"] }>
                <img src={ item.img } alt=""/>
              </div>
            </div>
          )
        })}
       </div>
       <div className={ styles["home_footer"] }>
         <div className={ styles["footer_content"] }>
           <div className="motto">
             <p></p>
             <p></p>
           </div>
         </div>
       </div>
      </Layout>
  )
}

export default Home
