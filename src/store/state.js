let defaultCity = '上海'
//对于不支持localstorage的浏览器进行异常处理
try{
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
}
catch(e){
    if(e.name == 'QuotaExceededError'){
        // 已经超出本地存储限定大小！可进行超出限定大小之后的操作，如下面可以先清除记录，再次保存
        localStorage.clear();
    }
}

export default{
    city: defaultCity
}

