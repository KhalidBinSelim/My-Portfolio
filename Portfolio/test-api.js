const fetch = require('node-fetch'); // Or use native fetch

fetch('https://corsproxy.io/?https://leetcode.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
      query userBadges($username: String!) {
        matchedUser(username: $username) {
          badges {
            id
            name
            shortName
            displayName
            icon
            hoverText
            medal {
              slug
              config {
                iconGif
                iconGifBackground
              }
            }
            creationDate
            category
          }
          upcomingBadges {
            name
            icon
          }
        }
      }
    `,
    variables: { username: 'Shadow0fTwilight' }
  })
})
.then(res => res.json())
.then(data => console.log(JSON.stringify(data, null, 2)))
.catch(err => console.error(err));
