# Dynamic Portfolio Website

## Overview
This project is a dynamic portfolio website built using [PHP Framework]. It showcases skills, projects, and professional information dynamically with a clean, modern design. The website allows easy customization and expansion to fit individual needs.

---

## Features
- **Dynamic Content Management**: Easily add and update projects, blogs, and personal information.
- **Responsive Design**: Works seamlessly across desktops, tablets, and mobile devices.
- **Contact Form**: Includes a secure and functional contact form.
- **Customizable**: Modular structure allows for customization and scalability.

---

## Requirements
- **PHP**: Version 8.0 or higher
- **Composer**: Dependency manager for PHP
- **Web Server**: Apache/Nginx with `mod_rewrite` enabled
- **Database**: MySQL/MariaDB
- **Node.js** (optional): For front-end asset compilation (if applicable)

---

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yoni-shewas/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**:
   ```bash
   composer install
   ```

3. **Set Environment Variables**:
   Rename `.env.example` to `.env` and update the following:
   ```env
   APP_URL=http://localhost
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=portfolio
   DB_USERNAME=root
   DB_PASSWORD=
   ```

4. **Database Setup**:
   ```bash
   php artisan migrate
   ```

5. **Serve the Application**:
   ```bash
   php artisan serve
   ```
   Access the application at `http://localhost:8000`.

---

## File Structure
```
project-folder/
├── app/
├── public/
├── resources/
├── routes/
├── storage/
├── .env
├── composer.json
├── README.md
```
- **`app/`**: Core application logic
- **`public/`**: Publicly accessible files
- **`resources/`**: Views and assets
- **`routes/`**: Web routes
- **`.env`**: Environment variables
- **`composer.json`**: Composer dependencies

---

## Usage
1. **Adding Projects**:
   Update the database or use an admin dashboard (if implemented).

2. **Customizing Design**:
   Modify styles in `resources/css/` or front-end assets.

3. **Deploying**:
   Use a hosting service (e.g., Heroku, AWS, DigitalOcean) and set environment variables for production.

---

## Future Enhancements
- Admin panel for content management
- Blog section
- Light/Dark mode toggle
- Integration with external APIs (e.g., GitHub or LinkedIn)

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

