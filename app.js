const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");
const currents = document.querySelectorAll(".current")
const previous = document.querySelectorAll(".previous")


const fetchDay = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    const daily_collection = [];
    for (let item of response) {
        const daily = item.timeframes.daily;
        daily_collection.push(daily)
    }
    vari(daily_collection, "Yesterday");
}

const fetchWeek = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    const weekly_collection = [];
    for (let item of response) {
        const weekly = item.timeframes.weekly;
        weekly_collection.push(weekly)
    }
    vari(weekly_collection, "Last Week")
}

const fetchMonth = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    const monthly_collection = [];
    for (let item of response) {
        const weekly = item.timeframes.monthly;
        monthly_collection.push(weekly)
    }
    vari(monthly_collection, "Last Month")
}

function vari(input, change) {
    for (let i = 0; i < currents.length; i++) {
        currents[i].innerHTML = input[i].current + "hrs";
    }
    for (let i = 0; i < previous.length; i++) {
        previous[i].innerHTML = change + " - " + input[i].previous + "hrs";
    }
}

daily.addEventListener("click", fetchDay)
weekly.addEventListener("click", fetchWeek)
monthly.addEventListener("click", fetchMonth)