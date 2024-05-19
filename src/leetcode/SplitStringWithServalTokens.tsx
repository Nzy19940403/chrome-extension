export default function SplitStringWithServalTokens(){
    function mySplit(originStr:string,tokens:string[]){
        let tempList:string[] = []; 
        let res:string[] = [];

        const helper = ()=>{
             
            let isChanged = false

            for(let token of tokens){
                let len = tempList.length;
                if(len<token.length) continue;
                let lastStr = tempList.slice(-token.length).join('');
                 
                if(lastStr==token){
                    tempList.splice(len-token.length);
                    isChanged = true;
                }
            }

            if(isChanged){
                res.push(tempList.slice().join(''));
                tempList = []
            }
        }

        for(let str of originStr){
            tempList.push(str);
            helper();
        }
        
        console.log(res)

    }

    mySplit('a&&&b&&c&-d-e-fg',['&&','-','&'])


    return (
        <div>
            分割字符串
            用栈存放字符串，循环tokens，看看最后入栈的字符串是不是等于token，如果是 pop掉token，最后筛选出来的直接join之后放入结果数组

        </div>
    )


}
 