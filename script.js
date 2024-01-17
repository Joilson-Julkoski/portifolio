document.getElementById("go_to_about").addEventListener("click", () => { scroll({ top: screen.height, behavior: "smooth" }) })
document.getElementById("go_to_projects").addEventListener("click", () => { scroll({ top: 1.8 * screen.height, behavior: "smooth" }) })


function copy_to_clipboard() {
    navigator.clipboard.writeText('joilson7548@gmail.com');
    const text_box = document.getElementById('teste2')
    text_box.textContent = 'Copiado 👍'
    text_box.className = "copy_click"
    setTimeout(() => { navigator.clipboard.writeText('teste'); document.getElementById('teste2').textContent = "Email" }, 5000)
}









function change_orden() {

    var offsets = document.getElementById('disappear').getBoundingClientRect();
    var small_width = offsets.width
    

    var offsets = document.getElementById('grow').getBoundingClientRect();
    var pos_grow = offsets.right;

    var offsets = document.getElementById('decrease').getBoundingClientRect();
    var pos_decrease = offsets.right;

    var offsets = document.getElementById('disappear').getBoundingClientRect();
    var pos_disappear = offsets.right;



    var anim_grow = grow.animate([{ right: `0px`, width: "20%", filter: "blur(2px)" }, { right: `${(pos_grow - pos_decrease )}px`, width: "40%", filter: "blur(0px)" }], {
        fill: "forwards",
        // easing: "steps(4, end)",
        duration: 1000
    },)


    var anim_decrease = decrease.animate([{ right: "0px", width: "40%", filter: "blur(0px)" }, { right: `${(pos_decrease - pos_disappear - small_width)}px`, width: "20%", filter: "blur(2px)" }], {
        fill: "forwards",
        // easing: "steps(4, end)",
        duration: 1000
    },)


    var anim_disappear = disappear.animate([{ right: "0px" }, { right: `${(pos_disappear - pos_grow)}px` }], {
        fill: "forwards",
        // easing: "steps(4, end)",
        duration: 1000
    },)


    console.log("A")
    anim_grow.play()
    anim_decrease.play()
    anim_disappear.play()


    document.getElementById("grow").id = "decrease"
    document.getElementById("decrease").id = "disappear"
    document.getElementById("disappear").id = "grow"

    document.getElementById("grow").onclick = change_orden
    




}