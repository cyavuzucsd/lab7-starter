class CustomRecipeCard extends HTMLElement {
    // Called once when document.createElement('recipe-card') is called, or
    // the element is written into the DOM directly as <recipe-card>
    constructor() {
        super(); // Inherit everything from HTMLElement

        // EXPOSE - START (All expose numbers start with A)
        // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
        // A2. TODO - Create an <article> element - This will hold our markup once our data is set
        // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
        // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag)
        // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
        this.attachShadow({ mode: 'open' });
        const cardArticle = document.createElement('article');
        const cardStyle = document.createElement('style');
        cardStyle.textContent = `
      * {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      article {
        align-items: center;
        border: 1px solid rgb(223, 225, 229);
        border-radius: 10px;
        display: grid;
        grid-template-rows: 120px 60px 14px 18px 16px 40px;
        height: auto;
        row-gap: 6px;
        padding: 0 18px 18px 18px;
        width: 180px;
      }
      div.rating {
        align-items: center;
        column-gap: 6px;
        display: flex;
      }
      div.rating>img {
        height: auto;
        display: inline-block;
        object-fit: scale-down;
        width: 80px;
      }
      article>img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 120px;
        object-fit: cover;
        margin-left: -18px;
        width: calc(100% + 36px);
      }
      p.ingredients {
        height: 34px;
        line-height: 17px;
        padding-top: 5px;
        overflow: hidden;
      }
      p.organization {
        color: black !important;
      }
      p.title {
        display: -webkit-box;
        font-size: 17px;
        height: 38px;
        line-height: 19px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p:not(.title),
      span,
      time {
        color: #70757A;
        font-size: 13px;
      }
    `;
        this.shadowRoot.append(cardStyle, cardArticle);
    }

    /**
     * Called when the .data property is set on this element.
     *
     * For example:
     * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
     * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
     *
     * @param {Object} data - The data to pass into the <recipe-card> must be of the
     *                        following format:
     *                        {
     *                          "imgSrc": "string",
     *                          "imgAlt": "string",
     *                          "titleLnk": "string",
     *                          "titleTxt": "string",
     *                          "organization": "string",
     *                          "rating": number,
     *                          "numRatings": number,
     *                          "lengthTime": "string",
     *                          "ingredients": "string"
     *                        }
     */
    set data(recipeData) {
        // If nothing was passed in, return
        if (!recipeData) return;

        // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
        // A7. TODO - Set the contents of the <article> with the <article> template given in
        //           cardTemplate.html and the data passed in (You should only have one <article>,
        //           do not nest an <article> inside another <article>). You should use template
        //           literals (template strings) and element.innerHTML for this.
        //           Do NOT include the <article> tags within the innerHTML of the element you create.
        //           Remember to replace all the placeholders in the template with the data passed in.
        //           i.e. imgSrc, titleLnk, etc
        const cardArticle = this.shadowRoot.querySelector('article');
        cardArticle.innerHTML = `
      <img src="${recipeData.imgSrc}" alt="${recipeData.imgAlt}">
      <p class="title">
        <a href="${recipeData.titleLnk}">${recipeData.titleTxt}</a>
      </p>
      <p class="organization">${recipeData.organization}</p>
      <div class="rating">
        <span>${recipeData.rating}</span>
        <img src="/assets/images/icons/5-star.svg" alt="${recipeData.rating} stars">
        <span>(${recipeData.numRatings})</span>
      </div>
      <time>${recipeData.lengthTime}</time>
      <p class="ingredients">${recipeData.ingredients}</p>
    `;
    }
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', CustomRecipeCard);
