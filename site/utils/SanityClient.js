const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: "iw0q5kzp",
  dataset: "production",
  useCdn: true 
})

module.exports = client;