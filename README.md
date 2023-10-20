# Welcome to my image gallery!

## General Info

To start the app:
`npm i`
`npm start`

I wanted to make this as realistic and robust as possible, so expect a good amount of intentional errors to be returned from the mock api when you're performing operations. If you want to make these more or less frequent adjust as needed in `mockApi.ts`. Also expect some fake delays to show off those 'async' loading states! past these things the app should be a good reflection of the simple wireframe provided.

when you first load the app, 5 sample images will be seeded. The top app bar contains the search input and an upload button that will toggle a modal to allow you to select and preview your image/name. To delete an image or see its name, hover over any image on the home page.

This work took me an afternoon - let's call it 4-5hr. I enjoyed this one :)

## Screenshots

General Flow:
![sw1](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/544fa072-a6d0-4241-9327-6174e12e6df9)
![2](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/2a7467a6-9099-4a50-9075-07565ecfd0f3)
![sw3](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/e5c4f4d5-42be-4a3b-9094-4a9c9bc6db88)
![sw4](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/dd77dda9-961d-448d-b40a-20c525363f59)

Error handling:
![e1](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/8f233361-ec59-42fc-9814-b20215540fda)
![e2](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/317baa52-df37-413a-9b60-2d084ba23666)

## My Wish list
- I would have liked to make a real back-end and make this a monorepo
  so they can be started together
- In the backend actually prohibit non images from being uploaded, the file input on the front end is simply asking nicely not actually validating. 
- I would have liked to spend time on some caching
  mechanism so images don't have to be totally reloaded as much.
- More style. I think it is functional and looks solid, but I would have enjoyed adding some more transitions and making the modal feel a little more like the home page. custom pallet. Sometimes the error banner can be off screen.
- debounce the search term, there is a lot of re-renders here in particular
