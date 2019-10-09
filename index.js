const A = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("success");
        }, 3000);
    })
}

const B = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("done");
            // reject("error");
        }, 1000);
    })
}

//Promise + then
A().then(res => {
        if (res == "success") {
            return B();
        }else{
            console.log("error");
        }
    })
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });

//async
(async () => {
    try {
        const a = await A();
        if (a == "success") {
            const b = await B();
            console.log(b);
        }else{
            console.log("error");
        }
    } catch (error) {
        console.log(error);
    }
})();

document.body.innerHTML = "starting";
