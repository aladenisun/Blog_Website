import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedPosts: [
      {
        title: 'In-house Plant Care',
        id: '1',
        date: '2020-09-10',
        src:
          'https://hgtvhome.sndimg.com/content/dam/images/hgtv/editorial/blogs/fullset/Danasia/RX-Debbie-Patterson-Dorling-Kindersley-English-Ivy.jpg.rend.hgtvcom.1280.853.suffix/1496166616339.jpeg',
        flex: 12,
        text:
          'text1-Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.'
      },
      {
        title: 'In the Shadows',
        id: '2',
        date: '2020-10-10',
        src: 'https://c0.wallpaperflare.com/preview/199/394/541/plant-leaf-fern-animal.jpg',
        flex: 6,
        text:
          'text2-Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.'
      },
      {
        title: 'Minimalistic Lifestyle',
        id: '3',
        src: 'https://i.pinimg.com/originals/52/10/88/5210881f37ca995ae6d28f7a0e6b302a.jpg',
        flex: 6,
        text:
          'text5-Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.'
      },
      {
        title: 'New York',
        id: '4',
        src: 'https://cdn.theculturetrip.com/wp-content/uploads/2019/06/feature_m50kc5.jpg',
        flex: 12,
        text:
          'text5-Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.'
      }
    ],

    user: {
      id: '123'
    }
  },

  //change the states
  mutations: {},

  //dispatch mutations
  actions: {},

  //get the store in components
  getters: {
    loadedPosts(state) {
      return state.loadedPosts.sort((postA, postB) => {
        return postA.date > postB.date
      })
    },
    featuredPosts(state, getters) {
      return getters.loadedPosts.slice(0, 3)
    },

    loadedPost(state) {
      return postId => {
        return state.loadedPosts.find(post => {
          return post.id === postId
        })
      }
    }
  }
})

const httpPost = async (apiEndPoint, postData) => {
  await axios({
    method: 'POST',
    url: apiEndPoint,
    data: postData,
    config: { headers: { 'Content-Type': 'application/json' } }
  })
}
