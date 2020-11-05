
  let state = {
      profilePage: {
        posts: [
            { id: 1, message: 'Hi this my first phost', likesCount: 11, dislike: 12 },
            { id: 2, message: 'Ok', likesCount: 1, dislike: 3 },
            { id: 3, message: 'Five million dolars!', likesCount: 2, dislike: 3 },
          ],
         
      },
      dialogsPage:{
        dialogs: [
            { id: 1, name: 'Roma' },
            { id: 2, name: 'Nikita' },
            { id: 3, name: 'Vlad' },
            { id: 4, name: 'Ignat' },
          ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How much did you earn?' },
            { id: 3, message: 'Five million dolars!' },
          ]
      },
      sidebar:{}
  }
  export default state; 