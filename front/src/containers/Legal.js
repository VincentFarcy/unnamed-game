// npm imports
import { connect } from 'react-redux';


// local imports
import Legal from '../components/Legal';

// state
const mapStateToProps = () => ({
  legalTitle: 'Mentions légales',
  introLegal: 'Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site Unnamed.game les informations suivantes :',
  articles: [
    {
      name: 'info',
      title: '1. INFORMATIONS LÉGALES',
      content: "L'ensemble de ce site a été réalisé par les élèves O'clock de la Promotion Asgard dans un but pédagogique et à des fins de validation de leur cursus de formation. L'ensemble des membres de l'équipe ainsi que leurs contacts peuvent être trouvés en vous rendant dans la section Présentation de l'équipe du site ou par email: unnamed.game.oclock.io@gmail.com",
    },
    {
      name: 'pres',
      title: '2. PRÉSENTATION ET PRINCIPE',
      content: "Est désigné ci-après : Utilisateur, tout internaute se connectant et utilisant le site Unnamed.game. Le site Unname.game regroupe un ensemble de services, dans l’état,  mis à la disposition des utilisateurs. Il est précisé que ce site a été créé à des fins non commerciales mais pédagogiques dans le cadre d'un projet de fin d'études au sein de l'école O'clock. En l'état actuel du site, l'histoire présentée au sein du jeu Unnamed.Game contient des propos ou des visuels qui pourraient ne pas convenir à des enfants de moins de 12 ans. ",
    },
    {
      name: 'access',
      title: '3. ACCESSIBILITÉ',
      content: "Le site Unnamed.game est par principe accessible aux utilisateurs 24/24h, 7/7j, sauf interruption, programmée ou non, pour les besoins de sa maintenance ou en cas de force majeure. En cas d’impossibilité d’accès au service, Unnamed.game s’engage à faire son maximum afin de rétablir l’accès au service et s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.  N’étant soumis qu’à une obligation de moyen, Unnamed.game ne saurait être tenu pour responsable de tout dommage, quelle qu’en soit la nature, résultant d’une indisponibilité du service.",
    },
    {
      name: 'hosting',
      title: '4. HÉBERGEMENT',
      content: "L'ensemble du site est hebergé via Amazon Web Services Educate (https://aws.amazon.com/fr/education/awseducate/)",
    },
    {
      name: 'cookies',
      title: '5. LIENS HYPERTEXTES ET COOKIES',
      content: "Le site Unnamed.game contient un certain nombre de liens hypertextes vers d’autres sites (linkedIn, GitHub, ArtStation) mis en place avec l’autorisation des auteurs du site. Cependant, l'équipe n’a pas la possibilité de vérifier l’ensemble du contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quand aux risques éventuels de contenus illicites. L'utilisation des cookies effectuée sur le site n'enregistre aucune information personnelle liée à l'utilisateur et ne servent qu'au bon fonctionnement du site. Le paramétrage du logiciel de navigation permet d’informer de la présence de cookies et éventuellement, de la refuser de la manière décrite à l’adresse suivante : www.cnil.fr. L’utilisateur peut toutefois configurer le navigateur de son ordinateur pour refuser l’installation des cookies, sachant que le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. Pour tout bloquage des cookies, tapez dans votre moteur de recherche : bloquage des cookies sous Chrome, IE ou Firefox et suivez les instructions en fonction de votre version.",
    },
    {
      name: 'rgpd',
      title: '6. PROTECTION DES BIENS ET DES PERSONNES – GESTION DES DONNÉES PERSONNELLES',
      content: "En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.  Sur le Unnamed.game, l'équipe ne collecte des informations personnelles ( suivant l’article 4 loi n°78-17 du 06 janvier 1978) relatives à l’utilisateur que pour le besoin du système de sauvegarde de la partie. L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site Unnamed.game l’obligation ou non de fournir ces informations.  Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles le concernant. Pour l’exercer, il a la possibilité, une fois connecté, de modifier ou de supprimer son compte. En cas de suppression, le compte sera ensuite complètement effacé des bases de données du site.  Aucune information personnelle de l’utilisateur du site Unnamed.game n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.",
    },
    {
      name: 'intel',
      title: '7. PROPRIÉTÉ INTELLECTUELLE',
      content: "L'ensemble du contenu du site unnamed.game est la propriété exclusive des membres de l'équipe Unnamed.game de la promotion Asgard de l'école O'clock. A l'exception de l'ensemble des visuels et contenus externes pour lesquels l'équipe du site remercie ses créateurs, propriétaires et ayant droit dans la section remmerciements du site. Vous pouvez utiliser ce matériel à des fins personnelles et non commerciales conformément aux principes régissant le droit de la propriété intellectuelle. Toute autre utilisation ou modification du contenu du site Web de Unnamed.game sans l’autorisation écrite préalable de l'équipe (unnamed.game.oclock.io@gmail.com) est interdite.",
    },
  ],
});

// actions
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(Legal);
