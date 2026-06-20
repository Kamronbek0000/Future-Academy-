document.getElementById("form").addEventListener("submit", async (e) => {

    e.preventDefault();

    let formData = new FormData(e.target);

    let response = await fetch("contact.php", {
        method: "POST",
        body: formData
    });

    let result = await response.text();

    if(result === "success"){
        alert("Xabar yuborildi!");
        e.target.reset();
    } else {
        alert("Xatolik yuz berdi!");
    }

});
