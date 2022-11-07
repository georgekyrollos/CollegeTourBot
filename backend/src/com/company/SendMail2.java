package com.company;

import javax.mail.internet.InternetAddress;
import java.util.Properties;
import java.util.Properties;
import javax.mail.*;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;




public class SendMail2
{

public SendMail2(String to, String subject, String mess)
{
    String from = "info@collegetourbot.com";  



    final String username ="";
    final String password = "";

    Properties props = System.getProperties();
    props.put("mail.smtp.auth", "");
    props.put("mail.smtp.starttls.enable", "");
    props.put("mail.smtp.host", "");
    props.put("mail.smtp.port", "");

    Session session = Session.getInstance(props, new javax.mail.Authenticator() {
        protected PasswordAuthentication getPasswordAuthentication() {
            return new PasswordAuthentication(username, password);
        }
    });

    try {
        Message message = new MimeMessage(session);

        message.setFrom(new InternetAddress(from));
        message.setRecipients(Message.RecipientType.TO,
                InternetAddress.parse(to)
        );

        message.setSubject(subject);
        message.setContent("<html>"+mess+"</html>",  "text/html; charset=utf-8");

        Transport.send(message);
        System.out.println("Sent message successfully....");

    }
    catch (MessagingException e) {
        throw new RuntimeException(e);
    }
}
}

