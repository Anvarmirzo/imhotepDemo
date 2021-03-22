  
<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];

$token = "1740704680:AAHF_6qLlwO6a_p482vkeQrCUa6B-cEZKzw";
$chat_id = "-576526509";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

$sendToTelegram2 = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram && $sendToTelegram2) {
    header('Location: index-uz.html');
} else {
    echo "Error";
}
?>