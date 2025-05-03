const books = [
    "image/book_1.jpg",
    "image/blog_2.jpg",
    "image/blog_3.jpg",
    "image/book_4.jpg",
    "image/book_5.jpg",
    "image/book_6.jpg",
    "image/book_7.png",
    "image/book_8.png",
    "image/book_9.jpg",
    "image/book_10.png",
    "image/book_11.jpg",
    "image/book_12.png",
    "image/book_13.png",
    "image/book_14.png",
    "image/book_15.png"
  ];
  function createBookCard(imageSrc) {
    return `
      <div class="book-card">
        <img src="${imageSrc}" alt="Book">
        <div class="Featured-Books"><span>Featured</span> <span>Books</span></div>
        <div><span class="jone-Deo">john Deo</span></div>
        <div class="Romance">
          <span>Thiller</span>, <span>Horror</span>, <span>Romance</span>
        </div>
        <div class="cost-Book"><span>$25.50</span></div>
        <div class="cost-past"><span><del>$28.60</del></span></div>
        <input class="button-learn3" type="button" value="Learn More">
      </div>
    `;
  }
  const container = document.getElementById("Books-name");
container.innerHTML = books.map(createBookCard).join("");
    