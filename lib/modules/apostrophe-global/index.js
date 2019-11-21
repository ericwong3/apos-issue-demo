module.exports = {
  addFields: [
    {
      type: 'joinByOne',
      name: '_linkLocation',
      label: 'Link to Location',
      withType: 'location',
    },
  ]
}
