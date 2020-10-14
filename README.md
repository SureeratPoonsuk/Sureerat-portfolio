## Setup Notes
Sureerat Poonsuk Id111

1. Kör `npm install` i både `student_frontend` och `student_backend` mapparna.
2. Gå in i `student_backend\extensions\upload\config\settings.json` och ändra api nyckel och secret till din egen från ditt Cloudinary konto.
3. Gå in i `student_frontend\src\pages\contact.js` och ändra formspree url till din egen.
4. Kör kommandot `strapi develop` i `student_backend` mappen för starta Strapi.
5. Gå till `http://localhost:1337/admin` i din webbläsare, skapar ett konto och lägg till innehåll för varje content type. Detta är viktigt eftersom man annars får problem när man ska starta Gatsby senare.
6. Kör kommandot `gatsby develop` i `student_frontend` mappen för starta Gatsby.
7. Gå till `http://localhost:8000` i din webbläsare för att se hemsidan.