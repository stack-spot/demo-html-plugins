$(function() {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(({products}) => {
      products.map(item => {
        $("#{{table_id}}-body").append(
          '<tr class="product-list-row">' +
          {% for item in attr_list.split(';') %}
          `<td class="{{item}}">${item.{{item}}}</td>` +
          {% endfor %}
          '</tr>'
        )
      })
    })
});
