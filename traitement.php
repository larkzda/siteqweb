<?php
header('Content-Type: application/json; charset=utf-8');

// N'autoriser que les requêtes POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// Récupérer les données brutes envoyées en JSON par fetch()
$raw_data = file_get_contents('php://input');
$data = json_decode($raw_data, true);

// Si ce n'est pas du JSON, essayer de récupérer les données POST standards
if (empty($data)) {
    $data = $_POST;
}

// Destinataire des réponses
$to = 'Julijajuric1@iCloud.com';

// Sujet de l'email
$subject = '=?UTF-8?B?' . base64_encode("Nouveau rendez-vous - Julija's Royal Dobermans") . '?=';

// Extraction et nettoyage des variables
$prenom = isset($data['prenom']) ? strip_tags(trim($data['prenom'])) : '';
$nom = isset($data['nom']) ? strip_tags(trim($data['nom'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$telephone = isset($data['telephone']) ? strip_tags(trim($data['telephone'])) : '';
$objet_raw = isset($data['objet']) ? strip_tags(trim($data['objet'])) : '';
$date_pref = isset($data['date-pref']) ? strip_tags(trim($data['date-pref'])) : '';
$heure_pref = isset($data['heure-pref']) ? strip_tags(trim($data['heure-pref'])) : '';
$message = isset($data['message']) ? nl2br(strip_tags(trim($data['message']))) : '';

// Validation de sécurité minimale
if (empty($prenom) || empty($nom) || empty($email) || empty($objet_raw) || empty($date_pref)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Veuillez remplir tous les champs obligatoires.']);
    exit;
}

// Mappage de l'objet pour un rendu français propre dans l'email
$objets = [
    'visite' => "Visite de l'élevage",
    'chiot-disponible' => "Réserver un chiot disponible",
    'chiot-futur' => "S'inscrire pour une future portée",
    'info-reproduction' => "Information sur la reproduction",
    'autre' => "Autre demande"
];
$objet = isset($objets[$objet_raw]) ? $objets[$objet_raw] : $objet_raw;

// Rendu HTML élégant de l'email (Thème noir & or premium de l'élevage)
$body = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: "Outfit", "Helvetica Neue", Helvetica, Arial, sans-serif; background-color: #0b0b0b; margin: 0; padding: 20px; color: #f5f5f5; }
        .card { max-width: 600px; margin: 0 auto; background-color: #121212; border: 1px solid #c99a2e; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
        .header { background-color: #0b0b0b; border-bottom: 2px solid #c99a2e; padding: 25px; text-align: center; }
        .title { color: #c99a2e; font-size: 22px; margin: 15px 0 0 0; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
        .content { padding: 30px; }
        .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .table td { padding: 12px 10px; border-bottom: 1px solid #222; font-size: 15px; vertical-align: top; }
        .label { color: #c99a2e; font-weight: bold; width: 180px; }
        .val { color: #ffffff; }
        .message-box { background-color: #1a1a1a; border-left: 3px solid #c99a2e; padding: 15px; margin-top: 10px; border-radius: 4px; color: #e0e0e0; font-style: italic; line-height: 1.5; font-size: 14px; }
        .footer { background-color: #0b0b0b; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #222; }
        .footer a { color: #c99a2e; text-decoration: none; }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <h1 class="title">Nouveau Rendez-vous</h1>
            <p style="margin: 5px 0 0 0; color: #888; font-size: 14px;">Julija\'s Royal Dobermans</p>
        </div>
        <div class="content">
            <table class="table">
                <tr>
                    <td class="label">Nom complet</td>
                    <td class="val">' . htmlspecialchars($prenom . ' ' . $nom) . '</td>
                </tr>
                <tr>
                    <td class="label">Courriel</td>
                    <td class="val"><a href="mailto:' . htmlspecialchars($email) . '" style="color: #ffffff; text-decoration: underline;">' . htmlspecialchars($email) . '</a></td>
                </tr>
                <tr>
                    <td class="label">Téléphone</td>
                    <td class="val">' . ($telephone ? htmlspecialchars($telephone) : 'Non renseigné') . '</td>
                </tr>
                <tr>
                    <td class="label">Objet de la visite</td>
                    <td class="val" style="font-weight: bold; color: #c99a2e;">' . htmlspecialchars($objet) . '</td>
                </tr>
                <tr>
                    <td class="label">Date demandée</td>
                    <td class="val">' . htmlspecialchars($date_pref) . '</td>
                </tr>
                <tr>
                    <td class="label">Heure souhaitée</td>
                    <td class="val">' . htmlspecialchars($heure_pref) . '</td>
                </tr>
            </table>';

if (!empty($message)) {
    $body .= '
            <div style="font-size: 15px; color: #c99a2e; font-weight: bold; margin-top: 20px;">Message du client :</div>
            <div class="message-box">' . $message . '</div>';
}

$body .= '
        </div>
        <div class="footer">
            Ce message a été envoyé depuis le formulaire de contact de <a href="https://www.royaledoberman.ca">royaledoberman.ca</a>
        </div>
    </div>
</body>
</html>
';

// Configuration des en-têtes (headers) de l'email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: Julija's Royal Dobermans <noreply@royaledoberman.ca>" . "\r\n";
$headers .= "Reply-To: " . htmlspecialchars($email) . "\r\n";

// Envoi de l'email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du courriel par le serveur PHP.']);
}
?>
