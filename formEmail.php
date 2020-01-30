<?php 
if(isset($_POST['submit'])){
    $to = "sweetsare42@example.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $subject = "Form submission";
    $subjectTwo = "Copy of your form submission";
    $message = $fname . " " . $lname . " wrote the following:" . "\n\n" . $_POST['message'];
    $messageTwo = "Here is a copy of your message " . $firstName . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headersTwo = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subjectTwo,$messageTwo,$headersTwo); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $firstName . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>