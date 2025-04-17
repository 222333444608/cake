const base = {
    get() {
        return {
            url : "http://localhost:8080/cakeshop/",
            name: "cakeshop",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cakeshop/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上蛋糕商城系统"
        } 
    }
}
export default base
