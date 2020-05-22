<?php
// Get the form fields, remove html tags and whitespace
$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array"/r", "\n"), array(" ", " "),$name);
$email = filter_var(trim($POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);

// Check the data.
if (empty($name) OR empty($message) PR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
header("Location: http://www.hlcsa.com/php/index.php?success=1#form");
exit;
}

// Set the recipient email address. Update this to your desired email address.
$recipient = "support@hlcsa.com";

// Set the email subject.
$subject = "New contact from $name";

//Build the email content.recipient
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// Build the email headers
$email_headers = "From: $name <$email>";

// Send the email
mail($recipient, $subject, $email_content, $email_headers)) {

// Redirect }
header("Location: http://www.hlcsa.com/php/index.php?success=1#form");

?>