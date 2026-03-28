// scripts.js
const chips = ["All","Music","Gaming","Live","Sports","News","Podcasts","Mixes","Recently uploaded","Watched","Programming","Comedy","Movies"];
const mockVideos = [
    {id:1, thumb:"https://picsum.photos/id/1015/320/180", title:"MrBeast Gave Away $1,000,000", channel:"MrBeast", views:"142M", time:"2 days ago", duration:"12:45"},
    {id:2, thumb:"https://picsum.photos/id/201/320/180", title:"Billie Eilish - BIRDS OF A FEATHER", channel:"Billie Eilish", views:"48M", time:"4 hours ago", duration:"4:18"},
    {id:3, thumb:"https://picsum.photos/id/237/320/180", title:"iPhone 17 Pro - Official Trailer", channel:"Apple", views:"9.2M", time:"1 day ago", duration:"3:59"},
    // 9 more cards (full version includes 12)
];

function populateChips() {
    const container = document.querySelector('.chips-scroll');
    chips.forEach((text,i) => {
        const div = document.createElement('div');
        div.className = `chip px-4 py-1 ${i===0?'active':''}`;
        div.textContent = text;
        container.appendChild(div);
    });
}

function createVideoCard(v) {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
        <div class="video-card position-relative">
            <img src="${v.thumb}" class="w-100 rounded" alt="${v.title}">
            <span class="duration">${v.duration}</span>
            <div class="pt-3">
                <div class="d-flex gap-3">
                    <div class="rounded-circle bg-secondary flex-shrink-0" style="width:36px;height:36px;"></div>
                    <div class="flex-grow-1">
                        <div class="fw-bold line-clamp-2">${v.title}</div>
                        <div class="small text-muted mt-1">${v.channel}</div>
                        <div class="small text-muted">${v.views} views • ${v.time}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return col;
}

function populateVideos() {
    const grid = document.getElementById('videoGrid');
    mockVideos.forEach(v => grid.appendChild(createVideoCard(v)));
}

// Infinite scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        const grid = document.getElementById('videoGrid');
        for (let i = 0; i < 4; i++) {
            const fake = {...mockVideos[Math.floor(Math.random() * mockVideos.length)]};
            grid.appendChild(createVideoCard(fake));
        }
    }
});

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    sb.classList.toggle('d-none');
}

function showCreateModal() {
    alert("Upload video or Shorts (demo replica)");
}

document.addEventListener('DOMContentLoaded', () => {
    populateChips();
    populateVideos();
});
