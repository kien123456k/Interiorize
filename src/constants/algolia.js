const airtableQuery = `
{
  allAirtable(filter: {table: {eq: "Projects"}}) {
    nodes {
      id
      data {
        date
        name
        type
        image {
          localFiles {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
}
`

const pageToAlgoliaRecord = ({ id, data: { name, type, date, image } }) => {
  return {
    objectID: id,
    name,
    type,
    date,
    image: { ...image.localFiles[0] },
  }
}

const queries = [
  {
    query: airtableQuery,
    transformer: ({ data }) => data.allAirtable.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
