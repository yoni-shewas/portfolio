export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="py-5 text-center text-gray-200">
            <p>Made with 💙 &copy; {currentYear}</p>
        </div>
    );
}
