import React from 'react';
import { Button, View } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const MailSender = () => {

  const handleComposeMail = async () => {
    try {
      const { status } = await MailComposer.composeAsync({
        recipients: ['recipient@example.com'],
        subject: 'Hello from Expo Mail Composer!',
        body: 'This is the body of the email',
        isHtml: false,
      });
      if (status === 'sent') {
        console.log('Email sent!');
      } else {
        console.log('Email not sent');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Compose Email" onPress={handleComposeMail} />
    </View>
  );
};

export default MailSender;
