const types =['新订单','未审核','已拨单','已完成','暂无状态']
const getState=(id)=>{
    switch(id){
        case 0:
        return "新订单";
        case 1:
        return "未审核";
        case 2:
        return "已接单";
        case 3:
        return "已完成";
        default :
        return "暂无状态";
    }
}
export const handleState=(arr)=>{
    arr.map(item=>{
        item.handleState=getState(item.handleState);
       item.key=item.id;
       return item;
    })
}

export {types}


export const idType=['信用贷','压房贷','房乐岱','车乐岱'];

export const servieName=['李大唯','李小冉','李莉','张玲','李家豪']