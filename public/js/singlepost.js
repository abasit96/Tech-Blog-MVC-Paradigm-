const commentForm = document.querySelector(".new-comment-form")

function handleSubmit (event) {
    event.preventDefault();

    // get the values
    const comment = document.querySelector("#post-comment").value;
    const post_id = window.location.href.split("/")[4]

    // send the values via a fetch request
    fetch("/api/comments", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body:  JSON.stringify({
            comment,
            post_id
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        window.location.href = "/posts/" + post_id
    })

}

commentForm.addEventListener("submit", handleSubmit)