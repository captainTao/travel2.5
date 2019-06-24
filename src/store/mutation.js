export default {
     changeCity(state, city){
         state.city = city
         try{
             localStorage.city = city
         }catch(e){
                if(e.name == 'QuotaExceededError'){
                // 已经超出本地存储限定大小！可进行超出限定大小之后的操作，如下面可以先清除记录，再次保存
                    localStorage.clear();
                }
         }
     }
}