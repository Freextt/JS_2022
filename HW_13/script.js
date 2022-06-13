//За допомогою промісів та асинхронності написати розпорядок дня
function wakeUp(yesOrNo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (yesOrNo === 'No'){
                reject('Я не виспався!');
            }
            resolve('Доброго ранку,я відпочив!');
        },2000)
    })
}
function goWork(money,timeOnWork){
    return new Promise(resolve => {
        setTimeout(()=>{
            money *= timeOnWork;
            if(timeOnWork){
                console.log(`Here your payment ${money}`);
                resolve(money);
            }
        },3498)
    })
}

function buyFood(money,price){
    return new Promise((resolve, reject) =>
    setTimeout(()=>{
        if(money >= price){
            money -= price;
            console.log(`Bon apetite,here is your rest ${money}`);
            resolve(money);
        }else {
            reject('Sorry,i can not pay fpr tou,fo earn some money and come back');
        }
    },2473)
    )}
function buyTicketForBus(money,cost){
    return new Promise((resolve, reject) =>
    setTimeout(()=>{
        if (money >= cost){
            money -= cost;
            console.log(`Here is your res ${money}`)
            resolve(money);
        }else {
            reject('Go on your foot!');
        }
    },4500)
    )
}
function goToSleep(time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(time >= 22){
                resolve('Go to sleep');
            }else{
                reject('You can do what u want,you have enough time yet');
            }
        })
    })
}

async function schedule(){
    try {
        const awake = await wakeUp('Yes');
        console.log(awake);
        const gWork = await goWork(100,8);
        console.log(gWork);
        const buyFod = await buyFood(gWork,55);
        console.log(buyFod);
        const buyTicket = await buyTicketForBus(buyFod,200);
        console.log(buyTicket);
        const sleepTime = await goToSleep(22);
        console.log(sleepTime);
    }
    catch (e){
        console.log('Your schedule is broken!!!');
    }
}
schedule();