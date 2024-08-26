
        /**
         * call back function
         * Pass the argument for the another function
         * */
        function work(work_1){
            document.getElementById("working").innerHTML = work_1;
            }
            function first(){
                work("moorthy");    
            }
            function secound(){
                work("where are you.?");
            }
            first();
            secound();
            function calculator(work_2){
                document.getElementsByClassName("sum")[0].innerHTML=work_2;
            }
            function mycalce(num1,num2){
                let sum1 = num1*num2;
                return sum1;
            }
            function mycalce_secound(num1,num2){
                let sum_2 = num1 % num2;
                return sum_2;
            }
    
    
            //if not declear the return the value is undefined.
    
            let total_value =  mycalce (23,7);
            calculator(total_value);
    
            let total_value_1 = mycalce_secound(34,2);
            calculator(total_value_1);
    
    
            function check(new_value){
                document.getElementById("value").innerHTML = new_value
            }
    
            function calculator_1(num1,num2,mycallback){
                let sum_3 = num1-num2;
                mycallback(sum_3);
            }
            calculator_1(45,40,check);
    
    
            /**
             * the function is run the  after set time out  .
            */
            setTimeout(check_1,5000);
    
            function check_1(){
                document.getElementsByTagName("h1")[0].innerHTML = "workig is still going on"
            }
            
    
            setTimeout(function(){newfunction("this is working good");},3000)
    
            function newfunction(value){
                document.getElementById("demo_1").innerHTML = value;
            }
    
    
            setInterval(myTime,1000);
    
            function myTime(){
                let date = new Date();
                document.getElementById("value_date").innerHTML =
                date.getHours()+":"+ date.getMinutes()+":"+
                date.getSeconds();
            }
            /** Promise
             *  then() is tack two argument one is success and another is failure
             * */
    
            let mynewpromise = new Promise(function (myResolve,myReject){
    
                let a = 10;
                if(a == 10){
                    myResolve("the value of a is 10");
                }else{
                    myReject("the a value is not  equal to 10");
                }
            });
            mynewpromise.then(
                function(value){demo_4(value);},
                function(error){demo_4(error);}
            );
            function demo_4(some){
                document.getElementsByName("demo_4")[0].innerHTML=some;
             }
    
                     /**
             * asyn function
             * */
     
             async function data() {
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        const success = true;
                        if(success){
                            resolve("the data value is currect");
                        }else{
                            reject("the data valueis reject");
                        }
                    },2000)
                });
                
             }
             async function getdata() {
    
                const resultdata = document.getElementById("result")
                try{
                    const result = await data();
                    resultdata = result;
                }catch(error){
                    resultdata = error;
                }
             }
             getdata();