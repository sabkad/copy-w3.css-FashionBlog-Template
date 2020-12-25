// Replies show & hide
const repliesBtn = document.querySelectorAll('.replies-btn');

function hideReplies(id) {
    let x = document.getElementById(id);

    x.classList.toggle('show-replies');
}

// Click like button/ Like the entry
const likeBtn = document.querySelectorAll('.like-btn');

likeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML.includes("Liked")) {
            btn.innerHTML = '<i class="fa fa-thumbs-up"></i> Like';
        } else {
            btn.style.fontWeight = "700";
            btn.innerHTML = "&#10004; Liked";
        }
    });
});
