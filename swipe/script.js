$(() => {

    function loop (li) {
        li.css({ left: '-150px' })
        li.animate({ left: '100%' }, 10000, 'linear', () => {
            loop(li)
        })
    }

    const lis = $("li")
    let time = 0
    for (let i = 0; i < lis.length; i++) {
        setTimeout(() => {
            loop(lis.eq(i))
        }, time)
        time += 2000
    }
})