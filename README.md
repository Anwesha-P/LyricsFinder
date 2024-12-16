# LyricsFinder

LyricsFinder is a web application designed to provide users with quick and efficient access to song metadata, such as the artist's name, release date, and album information. Additionally, it provides a direct link to the Genius website for viewing the song lyrics, as the lyrics cannot be displayed within the app due to copyright restrictions. With an intuitive interface and functionality to mark favorite songs, the platform serves as a one-stop solution for music enthusiasts who want to save and revisit their favorite songs.


This project was developed as the final assignment for CS336, showcasing our expertise in front-end development and backend integration.

## Features

- **Song Search:** Search for songs using the Genius API and view song metadata such as title, artist, release date, and album artwork.
- **Favorites Management:** Mark songs as favorites and store them in a personalized list for easy access later.
- **Authentication:** Secure user accounts using Firebase Authentication for login, registration, and password reset.
- **Responsive Design:** A user-friendly and consistent interface for desktop and mobile devices.

## Tech Stack

- **Frontend:** Angular
- **Backend:** Firestore (NoSQL database)
- **Authentication:** Firebase Authentication
- **API:** Genius API
- **Hosting:** Firebase

## Website

Visit the deployed website on Firebase: [LyricsFinder](https://lyricsfinder-7446e.web.app)

## Project Structure

### Components

1. **Navbar:** Navigation bar with "Home" and "Favorites" tabs.
2. **Home Component:** Allows users to search for songs using a search bar and displays results.
3. **Song Result Component:** Lists songs matching the search query in card components.
4. **Favorites Component:** Displays songs marked as favorites in a structured list.
5. **Card Component:** Displays song details (title, artist, album image, release date, and lyrics URL).
6. **Authentication Components:**
   - **Login:** User login page.
   - **Register:** User registration page.
   - **Verify-Email:** Email verification page.
   - **Reset-Password:** Page for password resets.
   - **Check-Email:** Confirmation page for password reset email.

### Services

1. **API Service:** Handles interactions with the Genius API to fetch song data.
2. **Data Service:** Manages favorite songs (create, read, delete operations) in the Firestore database.
3. **Authentication Service:** Handles Firestore Authentication for user login, register, and reset password.

## Future Improvements

- Enhance UI design for better user experience.
- Add functionality to directly display lyrics if copyright restrictions allow.
- Implement advanced search filters (e.g., by genre or album).

## Credits

- **Team Members:** Anwesha Pradhananga, Daniel Park
- **Acknowledgments:** Genius API, Firebase, Firestore
