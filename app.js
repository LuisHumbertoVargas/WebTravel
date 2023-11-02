var content = {
    espanol: {
        navInicio: 'Inicio',
        navBlog: 'Blog',
        navOfertas: 'Ofertas',
        navServicios: 'Servicios',
        navContactos: 'Contactos',
        headerTitle: 'Viajes',
        headerText:
            'Emprende un viaje de toda la vida y explora los destinos más impresionantes del mundo con nuestros expertos consejos de viaje.',
        journeyTitle: 'Comienza tu viaje',
        journeySubtitle: 'Los países más buscados en diciembre',
        bannerTitle: 'Descuento del 20-30%',
        bannerText:
            'Viaja por el mundo con un presupuesto reducido gracias a nuestras increíbles ofertas de viaje.',
        displayTitle: 'Por qué elegirnos',
        displaySubtitle:
            'El momento más feliz en la vida humana es partir hacia tierras desconocidas.',
        cardH4_1: 'Viajes apasiona',
        cardP_1:
            'Alimenta tu pasión por la aventura y descubre nuevos horizontes.',
        cardH4_2: 'Lugares hermosos',
        cardP_2: 'Descubre los lugares más impresionantes del mundo.',
        footerText:
            'Viajar nos hace modestos. Nos hace ver cuán pequeño es nuestro lugar en el mundo.',
    },

    english: {
        navInicio: 'Home',
        navBlog: 'Blog',
        navOfertas: 'Offers',
        navServicios: 'Services',
        navContactos: 'Contacts',
        headerTitle: 'Travel',
        headerText:
            "Embark on a journey of a lifetime and explore the world's most breathtaking destinations with our expert travel advice.",
        journeyTitle: 'Start Your Journey',
        journeySubtitle: 'The most searched countries in December',
        bannerTitle: 'Discount 20-30% Off',
        bannerText:
            'Travel the world on a budget with our unbeatable discounted travel deals.',
        displayTitle: 'Why Choose Us',
        displaySubtitle:
            'The gladdest moment in human life is a departure into unknown lands.',
        cardH4_1: 'Passionate Travel',
        cardP_1: 'Fuel your passion for adventure and discover new horizons.',
        cardH4_2: 'Beautiful Places',
        cardP_2: 'Discover the most breathtaking places in the world.',
        footerText:
            'Travel makes one modest. You see what a tiny place you occupy in the world.',
    },
};

var languageButton = document.getElementById('languageButton');
var currentLanguage = 'espanol'; // Establece el idioma inicial

languageButton.addEventListener('click', function () {
    if (currentLanguage === 'espanol') {
        currentLanguage = 'english';
    } else {
        currentLanguage = 'espanol';
    }
    updateContent();
});

function updateContent() {
    var navInicio = document.getElementById('navInicio');
    var navBlog = document.getElementById('navBlog');
    var navOfertas = document.getElementById('navOfertas');
    var navServicios = document.getElementById('navServicios');
    var navContactos = document.getElementById('navContactos');
    var headerTitle = document.getElementById('headerTitle');
    var headerText = document.getElementById('headerText');
    var journeyTitle = document.getElementById('journeyTitle');
    var journeySubtitle = document.getElementById('journeySubtitle');
    var bannerTitle = document.getElementById('bannerTitle');
    var bannerText = document.getElementById('bannerText');
    var cardH4_1 = document.getElementById('cardH4_1');
    var cardP_1 = document.getElementById('cardP_1');
    var cardH4_2 = document.getElementById('cardH4_2');
    var cardP_2 = document.getElementById('cardP_2');
    var displayTitle = document.getElementById('displayTitle');
    var displaySubtitle = document.getElementById('displaySubtitle');
    var footerText = document.getElementById('footerText');

    if (currentLanguage === 'espanol') {
        navInicio.textContent = content.espanol.navInicio;
        navBlog.textContent = content.espanol.navBlog;
        navOfertas.textContent = content.espanol.navOfertas;
        navServicios.textContent = content.espanol.navServicios;
        navContactos.textContent = content.espanol.navContactos;
        headerTitle.textContent = content.espanol.headerTitle;
        headerText.textContent = content.espanol.headerText;
        journeyTitle.textContent = content.espanol.journeyTitle;
        journeySubtitle.textContent = content.espanol.journeySubtitle;
        bannerTitle.textContent = content.espanol.bannerTitle;
        bannerText.textContent = content.espanol.bannerText;
        cardH4_1.textContent = content.espanol.cardH4_1;
        cardP_1.textContent = content.espanol.cardP_1;
        cardH4_2.textContent = content.espanol.cardH4_2;
        displayTitle.textContent = content.espanol.displayTitle;
        displaySubtitle.textContent = content.espanol.displaySubtitle;
        footerText.textContent = content.espanol.footerText;
        languageButton.textContent = ' Es';
    } else {
        navInicio.textContent = content.english.navInicio;
        navBlog.textContent = content.english.navBlog;
        navOfertas.textContent = content.english.navOfertas;
        navServicios.textContent = content.english.navServicios;
        navContactos.textContent = content.english.navContactos;
        headerTitle.textContent = content.english.headerTitle;
        headerText.textContent = content.english.headerText;
        journeyTitle.textContent = content.english.journeyTitle;
        journeySubtitle.textContent = content.english.journeySubtitle;
        bannerTitle.textContent = content.english.bannerTitle;
        bannerText.textContent = content.english.bannerText;
        cardH4_1.textContent = content.english.cardH4_1;
        cardP_1.textContent = content.english.cardP_1;
        cardH4_2.textContent = content.english.cardH4_2;
        cardP_2.textContent = content.english.cardP_2;
        displayTitle.textContent = content.english.displayTitle;
        displaySubtitle.textContent = content.english.displaySubtitle;
        footerText.textContent = content.english.footerText;
        languageButton.textContent = ' En';
    }
}

// Llama a la función updateContent para establecer el idioma inicial
updateContent();
