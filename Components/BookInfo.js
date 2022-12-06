const BookInfo = (details, x, y) =>  {
    let html = `<div class="book-list__details absolute border-neutral-900 border-2 bg-white" id="bookDetail" style="top:${y}; left:${x}">
                <img src=${details.coverImage} alt="Image not found" class="inline-block">
                <p class="inline-block">
                Author: ${details.author} <br>
                Title: ${details.title} <br>
                Pages: ${details.pages} <br>
                Release date: ${details.releaseDate} 
                </p>       
              </div>`;

    return html;
}

// When a new div element is created the top and left are set to the retrieved mouse coordinate values. Additionally the details from the URL are placed into the div.