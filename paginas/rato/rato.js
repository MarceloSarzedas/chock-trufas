const produtos = [
    {
        "produto": "caixa da promoção",
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": "Beijinho",
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": " chokito",
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": " palha italiana",
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": "Limon",
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": " paçoca",
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$7.00",
        "quantidade": "1"
    },
    {
        "produto": "Caputino",
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": "Menta",
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": "Napolitano",
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": "Torta de maracuja",
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": "Sensaçao",
        "preco": "R$14.00",
        "quantidade": "1"
    },
    {
        "produto": null,
        "preco": "R$14.00",
        "quantidade": "1"
    }
]


// Função para retira todo os produto com null
function retiraNull(array) {
    return array.filter(function (item) {
        return item.produto!== null;
    });
}
console.log(retiraNull(produtos));