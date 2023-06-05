function users(selector, data) {
    let HTML = '';
    
    for (const user of data) {
        HTML += `<div class="user">
                    <h3 class="service-title">${user.name}</h3>
                </div>`;
    }

    document.getElementById(selector).innerHTML = HTML;
}

export { users };