const config = {
    password: "password",
    passcodes: {
        easy: ["passcode","uploaded","database","gigabyte","software","hardware","readonly","wildcard","intranet","freeware","firewall","download","metadata"], //These MUST be 8 characters | Anything with numbers makes it difficult!
        medium: ["12345678","75493342","98741252"],
        hard: ["f1r3w4ll","1nt3rn3t","p455c0d3","g1g4byt3"],
    },
};

const input = document.querySelector("#myInput");
const submitForm = document.querySelector("#submitForm");
const progressBar = document.querySelector("#progress");
const textArea = document.querySelector("#textArea");
var [loggedIn,injected,askFormat,askBkdr,formatDrive,attempts] = [false,false,false,false,null,3];
var [difficulty,timer] = ["easy",30];

textArea.value = ``;

const start = function (data) {
    reset();
    difficulty = data.difficulty;
    timer = data.timer;
    fadeIn();
    setTimeout(() => {
        goProgress()
    }, 500);
};

const reset = function () {
    clearInterval(progressBar.interval);
    [loggedIn,injected,askFormat,askBkdr,formatDrive,attempts] = [false,false,false,false,null,3];
    textArea.value = ``;
}

const fadeIn = function () {
    $("#all").fadeIn();
};

const fadeOut = function () {
    $("#all").fadeOut();
}

const goProgress = function () {
    textArea.value = ``;
    progressBar.classList.remove("prAmber");
    progressBar.classList.remove("prRed");
    textArea.classList.remove("red");
    [hack, loggedIn, injected, askFormat, askBkdr] = [false, false, false, false, false];
    progressBar.classList.remove("hidden");
    input.disabled = true;
    input.value = "";
    textArea.value = `Accessing F:/... Please wait. `;
    progressBar.interval = setInterval(increaseVal, 20, progressBar);
};

const increaseVal = function (progressBar) {
    if (progressBar.value < 100) {
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.classList.add("hidden");
        clearCommand();
        input.disabled = false;
        input.focus();
        progressBar.value = 0;
        textArea.value += "Device ready!";
        setTimeout(() => {
            textArea.value += "\nPassword:";
        },500);
    }
};

const installHack = function () {
    progressBar.classList.remove("hidden");
    input.disabled = true;
    input.value = "";
    textArea.value += "\nInstalling hack... ";
    progressBar.interval = setInterval(increaseValHack, 20, progressBar);
};

const increaseValHack = function (progressBar) {
    if (progressBar.value < 100) {
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.classList.add("hidden");
        input.disabled = false;
        input.focus();
        progressBar.value = 0;
        textArea.value += "Installed!\nF:/ ";
        installedPackages.push("hack");
        textArea.scrollTop = textArea.scrollHeight;
    }
};

const injectHack = function () {
    textArea.value += "Starting injection...\n";
    progressBar.classList.remove("hidden");
    input.disabled = true;
    input.value = "";
    progressBar.interval = setInterval(increaseValInject1, 10, progressBar);
};

const increaseValInject1 = function (progressBar) {
    if (progressBar.value < 100) {
        if (progressBar.value == 1) {
            textArea.value += "Reading OS\n";
            textArea.scrollTop = textArea.scrollHeight;
        }
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.value = 0;
        textArea.value += "OS confirmed\n";
        textArea.scrollTop = textArea.scrollHeight;
        progressBar.interval = setInterval(increaseValInject2, 25, progressBar);
    }
};

const increaseValInject2 = function (progressBar) {
    if (progressBar.value < 100) {
        if (progressBar.value == 1) {
            textArea.value += "usb@2.5.14 fetching F:\\bin\\lib\\src\\inject\\winx64\\protocol.js\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 5) {
            textArea.value += "Successfully found F:\\bin\\lib\\src\\inject\\winx64\\protocol.js\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 8) {
            textArea.value += "Copying protocols\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 50) {
            textArea.value += "usb@2.5.14 fetching F:\\bin\\lib\\src\\inject\\winx64\\config.js\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 55) {
            textArea.value += "Successfully found F:\\bin\\lib\\src\\inject\\winx64\\config.js\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 58) {
            textArea.value += "Finishing protocol configuration\n";
            textArea.scrollTop = textArea.scrollHeight;
        }
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.value = 0;
        textArea.value += "Success: Protocols copied\n";
        textArea.scrollTop = textArea.scrollHeight;
        progressBar.interval = setInterval(increaseValInject3, 10, progressBar);
    } 
};

const increaseValInject3 = function (progressBar) {
    if (progressBar.value < 100) {
        if (progressBar.value == 1) {
            textArea.value += "usb@2.5.14 fetching F:\\bin\\lib\\src\\inject\\malware.bin\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 15) {
            textArea.value += "Successfully found F:\\bin\\lib\\src\\inject\\malware.bin\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 20) {
            textArea.value += "Unpacking malware\n";
            textArea.scrollTop = textArea.scrollHeight;
        }
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.value = 0;
        textArea.value += "Malware unpacked\n";
        textArea.scrollTop = textArea.scrollHeight;
        progressBar.interval = setInterval(increaseValInject4, 20, progressBar);
    }
};

const increaseValInject4 = function (progressBar) {
    if (progressBar.value < 100) {
        if (progressBar.value == 1) {
            textArea.value += "Attaching malware to protocol endpoints\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 50) {
            textArea.value += "Checking endpoint integrity\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 70) {
            textArea.value += "Cloaking embedded malware\n";
            textArea.scrollTop = textArea.scrollHeight;
        }
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.value = 0;
        textArea.value += "Success: Cloaking complete\n";
        textArea.scrollTop = textArea.scrollHeight;
        progressBar.interval = setInterval(increaseValInject5, 15, progressBar);
    }
};

const increaseValInject5 = function (progressBar) {
    if (progressBar.value < 100) {
        if (progressBar.value == 1) {
            textArea.value += "Cleaning up files\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 20) {
            textArea.value += "Deleting trace files\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value == 70) {
            textArea.value += "Finishing up\n";
            textArea.scrollTop = textArea.scrollHeight;
        }
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.value = 0;
        textArea.value += "Finished cleaning up\n";
        textArea.scrollTop = textArea.scrollHeight;
        failed = 0;
        failedAt = null;
        progressBar.interval = setInterval(increaseValInject6, 60, progressBar);
    }
};

const getRanNum = max => {
    return (Math.floor(Math.random()*max)+1)
};

const getRanHex = size => {
    let result = [];
    let hexRef = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  
    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
};

const getRanHexAdd = size => {
    let result = [];
  
    for (let n = 0; n < size; n++) {
      result.push(getRanHex(2));
    }
    return result.join(':');
};

var failed = 0;
var failedAt = null;
const increaseValInject6 = function (progressBar) {
    if (progressBar.value < 100) {
        if (progressBar.value == 1) {
            textArea.value += "Starting backdoor scan\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (failed === 0) {
            if (getRanNum(20) === 10 && progressBar.value < 89) {
                failedAt = "("+getRanNum(245)+"."+getRanNum(245)+"."+getRanNum(245)+"."+getRanNum(245)+") at "+getRanHexAdd(6)+" on en0 ";
                failed = progressBar.value;
                textArea.value += failedAt+"[Failed]\n";
                textArea.scrollTop = textArea.scrollHeight;
            } else {
                textArea.value += "("+getRanNum(245)+"."+getRanNum(245)+"."+getRanNum(245)+"."+getRanNum(245)+") at "+getRanHexAdd(6)+" on en0 [Passed]\n";
                textArea.scrollTop = textArea.scrollHeight;
            }
        } else {
            if (failed === (progressBar.value-10)) {
                textArea.value += failedAt+"[Passed]\n";
                textArea.scrollTop = textArea.scrollHeight;
                failed = 0;
            } else if (failed === (progressBar.value-1)) {
                const ip = failedAt.slice(failedAt.indexOf("(")+1,failedAt.indexOf(")"));
                textArea.value += "Opening backdoor @ "+ip+"\n";
                textArea.scrollTop = textArea.scrollHeight;
            }
        }
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.value = 0;
        textArea.value += "Backdoor structure verified\n";
        textArea.scrollTop = textArea.scrollHeight;
        progressBar.interval = setInterval(increaseValInject7, 35, progressBar);
    }
};

const getEnc = size => {
    let result = [];
    let hexRef = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * hexRef.length)]);
    }
    return result;
};

var [passcode, index, count] = [null, 0, 0];
const increaseValInject7 = function (progressBar) {
    if (progressBar.value < 100) {
        if (progressBar.value == 1) {
            passcode = config.passcodes[difficulty][Math.floor(Math.random()*config.passcodes[difficulty].length)];
            index = Math.floor(Math.random()*9);
            count = 0;
            textArea.value += "Generating encrypted passcode...\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value === 5 || progressBar.value === 95) {
            textArea.value += getEnc(10).join(" ")+"\n";
            textArea.scrollTop = textArea.scrollHeight;
        } else if (progressBar.value === ((count+1)*10)+5) {
            var line = getEnc(9);
            line.splice(index,0,passcode.charAt(count))
            textArea.value += line.join(" ")+"\n";
            textArea.scrollTop = textArea.scrollHeight;
            count = count+1;
        }
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.classList.add("hidden");
        input.disabled = false;
        input.focus();
        progressBar.value = 0;
        textArea.value += "Passcode generated\nF:/ ";
        textArea.scrollTop = textArea.scrollHeight;
        injected = true;
        bkdrHack();
    }
};

const bkdrHack = function () {
    textArea.value += "Opening backdoor protocol...\n";
    textArea.scrollTop = textArea.scrollHeight;
    input.value = "";
    if (injected) {
        progressBar.classList.remove("hidden");
        progressBar.value = 100;
        textArea.value += "Counting down until detection\n";
        progressBar.interval = setInterval(decreaseValBkdr, timer*10, progressBar);
        setTimeout(() => {
            textArea.value += "Enter passcode: ";
            textArea.scrollTop = textArea.scrollHeight;
            askBkdr = true;
        }, 400);
    } else {
        setTimeout(() => {
            textArea.value += "ERROR: No injected malware detected.\nF:/ ";
            textArea.scrollTop = textArea.scrollHeight;
        }, 800);
    }
};

const decreaseValBkdr = function (progressBar) {
    if (progressBar.value > 0) {
        if (progressBar.value === 50) {
            progressBar.classList.add("prAmber");
        } else if (progressBar.value === 25) {
            progressBar.classList.add("prRed");
        }
        progressBar.value = progressBar.value - 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.classList.add("hidden");
        progressBar.classList.remove("prAmber");
        progressBar.classList.remove("prRed");
        input.disabled = true;
        progressBar.value = 0;
        textArea.value += "\nBREACH DETECTED!!!\n";
        textArea.scrollTop = textArea.scrollHeight;
        setTimeout(() => {
            textArea.value += "Protecting identity\n";
            textArea.scrollTop = textArea.scrollHeight;
            setTimeout(() => {
                textArea.value += "LOCKED F:/\n";
                textArea.scrollTop = textArea.scrollHeight;
                textArea.classList.add("red");
            },500)
        },500)
    }
};

const success = function () {
    clearInterval(progressBar.interval);
    progressBar.value = 0;
    progressBar.classList.remove("hidden");
    progressBar.classList.remove("prAmber");
    progressBar.classList.remove("prRed");
    input.disabled = true;
    input.value = "";
    textArea.value += "Hacking...\n";
    textArea.scrollTop = textArea.scrollHeight;
    progressBar.interval = setInterval(increaseValHacking, 10, progressBar);
};

const increaseValHacking = function (progressBar) {
    if (progressBar.value < 100) {
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.classList.add("hidden");
        input.disabled = false;
        input.focus();
        progressBar.value = 0;
        textArea.value += "Success: Hack completed via backdoor protocol breach\nF:/ ";
        textArea.scrollTop = textArea.scrollHeight;
        setTimeout(() => {
            fadeOut();
            $.post("https://t3_hackgame/endHack", JSON.stringify({success: true}));
        }, 3000);
    }
};

const fail = function () {
    clearInterval(progressBar.interval);
    input.disabled = true;
    input.value = "";
    textArea.value += "ERROR. Passcode incorrect...\n";
    textArea.scrollTop = textArea.scrollHeight;
    setTimeout(() => {
        textArea.value += "Malware has been detected by firewall\n";
        textArea.scrollTop = textArea.scrollHeight;
        setTimeout(() => {
            textArea.value += "Protecting identity\n";
            textArea.scrollTop = textArea.scrollHeight;
            setTimeout(() => {
                textArea.value += "LOCKED F:/\n";
                textArea.scrollTop = textArea.scrollHeight;
                textArea.classList.add("red");
            },500)
        },500)
    },500)
};

const format = function () {
    askFormat = false;
    textArea.value += "Formatting "+formatDrive+"... ";
    progressBar.classList.remove("hidden");
    input.disabled = true;
    input.value = "";
    progressBar.interval = setInterval(increaseValFormat, 50, progressBar);
};

const increaseValFormat = function (progressBar) {
    if (progressBar.value < 100) {
        progressBar.value = progressBar.value + 1;
    } else {
        clearInterval(progressBar.interval);
        progressBar.classList.add("hidden");
        input.disabled = false;
        input.focus();
        progressBar.value = 0;
        textArea.value += "Formatted "+formatDrive+"!\nF:/ ";
        textArea.scrollTop = textArea.scrollHeight;
    }
};

const helpHackList = [
    "",
    "Hack commands:",
    "node inject.js - Inject malware",
    "node bkdr.js - Open back door protocol",
    "F:/ "
];

const helpHack = function () {
    const arrJoin = helpHackList.join("\n");
    textArea.value += arrJoin;
    textArea.scrollTop = textArea.scrollHeight;
    input.value = "";
};

const commandList = [
"",
"Available commands:",
"format [drive]",
"npm",
"npm install [package]",
"node help [package]",
"node [script]",
"F:/ "
];

const runHelp = function (obj) {
    if (obj) {
        var x = notFound;
        availPackages.forEach(e => {
            if (e.name == obj) {
                installedPackages.forEach(f => {
                    if (f == obj) {
                        x = e.help;
                    }
                })
            }
        })
        return x(obj);
    } else {
        const arrJoin = commandList.join("\n");
        textArea.value += arrJoin;
        input.value = "";
    }
};

const clearCommand = function () {
    textArea.value = "";
    input.value = "";
};

const notInAvail = function (obj) {
    textArea.value += "ERROR: 404\n404: Not Found\n404: '"+obj+"' not in registry.\nF:/ ";
    input.value = "";
}

const isInAvail = function (obj) {
    var x = notInAvail;
    availPackages.forEach(e => {
        if (e.name == obj) {
            x= e.function;
        }
    });
    return x(obj);
}

const notFound = function (obj) {
    textArea.value += "'"+obj+"' not found. Are you sure the module has been installed?\nF:/ ";
    input.value = "";
}

const nodeFile = function (obj) {
    var x = notFound;
    files.forEach(e => {
        if (e.name == obj) {
            if(e.package) {
                installedPackages.forEach(f => {
                    if (e.package == f) {
                        x = e.function;
                    }
                })
            } else {
                x=e.function;
            }
        }
    })
    return x(obj);
}

const availPackages = [
    {name:"hack",function:installHack,help:helpHack},
];
const files = [
    {name:"inject.js",package:"hack",function:injectHack},
    {name:"bkdr.js",package:"hack",function:bkdrHack},
];
var installedPackages = [];

submitForm.addEventListener("submit", function (e) {
    args = input.value.split(" ");
    e.preventDefault();
    if (!loggedIn) {
        if (args[0] === config.password) {
            textArea.value += "\nLogged in successfully.";
        setTimeout(() => {
            textArea.value += "\nF:/ ";
        },500);
            input.value = "";
            loggedIn = true;
        } else {
            attempts = attempts-1;
            if (attempts > 0) {
                textArea.value += "\nERROR. Password incorrect... Attempts remaining: "+attempts+"\nPassword:";
                input.value = "";
            } else {
                textArea.value += "\nERROR. Password incorrect...\nLOCKED F:/";
                input.value = "";
                input.disabled = true;
                textArea.classList.add("red");
            }
        }
    } else {
        if (args[0] === "npm") {
            if (args[1] === "install" || args[1] === "i") {
                if (args[2]) {
                    isInAvail(args[2])
                } else {
                    textArea.value += "Please choose a package to install.\nF:/ ";
                    input.value = "";
                }
            } else {
                textArea.value += "ERROR: '"+args[1]+"' is not recognized as a command.\nF:/ ";
                input.value = "";
            }
        } else if (args[0] === "node") {
            if (args[1] === "help") {
                if (args[2]) {
                    runHelp(args[2]);
                } else {
                    runHelp();
                }
            } else {
                nodeFile(args[1]);
            }
        } else if (args[0] === "format") {
            if (args[1] === "c:") {
                textArea.value += "Cannot format volume "+args[1]+". OS detected!\nF:/ ";
                input.value = "";
            } else if (args[1] === "d:" || args[1] === "e:") {
                textArea.value += "Are you sure you want to format "+args[1]+"? Y/N?\nF:/ ";
                input.value = "";
                askFormat = true;
                formatDrive = args[1];
            }
        } else if (askFormat) {
            if (args[0] === "y") {
                textArea.value += args[0]+"\nF:/ ";
                format()
            } else if (args[0] === "n") {
                textArea.value += args[0]+"\nF:/ ";
                askFormat = false;
                input.value = "";
            }
        } else if (askBkdr) {
            if (args[0] === passcode) {
                textArea.value += args[0]+"\n";
                success()
            } else {
                textArea.value += args[0]+"\n";
                fail()
            }
        } else {
            textArea.value += "'"+args[0]+"' is not recognized as an internal or external command,\noperable program or batch file.\nF:/ ";
            input.value = "";
        }
    }
    textArea.scrollTop = textArea.scrollHeight;
});

document.onkeyup = function(e) {
    e = e || window.event;
    var c = e.keyCode || e.which;
    if (c == 27) {
        fadeOut();
        setTimeout(() => {
            reset()
            $.post("https://t3_hackgame/endHack", JSON.stringify({success: false}));
        }, 500);
    }
}

input.addEventListener("input", function (e) {
    input.value = input.value.toLowerCase();
});

window.onload = function() {
    var eventCallback = {
        start: function(data){
            start(data)
        },
    }
	
	window.addEventListener('message', function(event) {
        eventCallback[event.data.action](event.data.data);
    })
	
}