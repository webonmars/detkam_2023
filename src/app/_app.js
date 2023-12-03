import '../globals.css'; // oder der korrekte Pfad zu Ihrer CSS-Datei
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
