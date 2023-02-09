function addWeb(params = {}) {
  const templateCard = document.querySelector("#cards");
  const containerCard = document.querySelector(".home__container-madre");

  templateCard.content.querySelector(".home__card-title").textContent =
    params.title;
  templateCard.content.querySelector(".home__card-parrafo").textContent =
    params.description;
  templateCard.content.querySelector(".home__compu1").src = params.image;

  const clone = document.importNode(templateCard.content, true);
  containerCard.appendChild(clone);
}

function getWeb() {
  return fetch(
    "https://cdn.contentful.com/spaces/s8m98t3h4njq/environments/master/entries?access_token=P2TqSqA4J0EfO7b6x0iOs6EBzfv-VDIsV8z9sRsQArE&&content_type=portfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldscollections = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion.content[0].content[0].value,
          image: data.includes.Asset[1].fields.file.url,
        };
      });
      return fieldscollections;
    });
}

function main() {
  const componentHeader = document.querySelector(".component-header");
  componenteHeader(componentHeader);

  const componentBienvenida = document.querySelector(".component-bienvenida");
  componenteBienvenida(componentBienvenida);

  const componentCard = document.querySelector(".component-card");
  componenteCard(componentCard);

  const componentForm = document.querySelector(".component-form");
  componenteForm(componentForm);

  const componentFooter = document.querySelector(".component-footer");
  componenteFooter(componentFooter);

  getWeb().then(function (works) {
    for (const w of works) {
      addWeb(w);
    }
  });
}
main();
