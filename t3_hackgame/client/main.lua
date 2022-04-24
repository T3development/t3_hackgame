hackCallback = {}

AddEventHandler('t3_hackgame:start', function(difficulty,timer,callback)
    hackCallback = callback
    SetNuiFocus(true, true)
    SendNuiMessage({
        action = "start",
        data = {difficulty = difficulty, timer = timer},
    })
end)

RegisterNUICallback("endHack", function(data)
    SetNuiFocus(false, false)
    hackCallback(data.success)
end)