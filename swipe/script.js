$(() => {
    const lis = $("li")
    let time = 0
    for (let i = 0; i < lis.length; i++) {
        setTimeout(() => {
            lis.eq(i).animate({ left: '100%' }, 10000,'linear')
        }, time)
        time += 2000
    }
})