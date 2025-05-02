
<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the raw POST data
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);
    
    // Check if data was successfully decoded
    if (!$data) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON data"]);
        exit;
    }
    
    // Recipient email address
    $to = "baigabdulwasay7@gmail.com";
    
    // Subject
    $subject = "New Staff Request from " . htmlspecialchars($data["company"]);
    
    // Prepare the email body
    $message = "
    <html>
    <head>
        <title>New Staff Request</title>
    </head>
    <body>
        <h2>New Staff Request Details</h2>
        <table style='border-collapse: collapse; width: 100%;'>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Company:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["company"]) . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Contact Person:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["contact"]) . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Email:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["email"] ?? "Not provided") . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Phone:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["phone"] ?? "Not provided") . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Country:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["country"]) . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Industry:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["industry"]) . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Number of Positions:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["positions"]) . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Job Roles Needed:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["roles"]) . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Timeline:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["timeline"]) . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Additional Notes:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["notes"] ?? "None") . "</td>
            </tr>
            <tr>
                <td style='border: 1px solid #ddd; padding: 8px;'><strong>Submitted At:</strong></td>
                <td style='border: 1px solid #ddd; padding: 8px;'>" . htmlspecialchars($data["submittedAt"]) . "</td>
            </tr>
        </table>
    </body>
    </html>
    ";
    
    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . htmlspecialchars($data["email"] ?? "noreply@find4staff.com") . "\r\n";
    
    // Send email
    $mail_sent = mail($to, $subject, $message, $headers);
    
    // Check if mail was sent successfully
    if ($mail_sent) {
        http_response_code(200);
        echo json_encode(["message" => "Email sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send email"]);
    }
} else {
    // Handle non-POST requests
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
