'use client';

import axios from 'axios'

export const SendMail = () => {

  const onSendEMail = async () => {
    try {
      await axios.post("/api/contact", {
        name: 'РИТОЧКА',
        email: "160201@bk.ru",
        message: 'ЗАЕЧКА Я ТЕБЯ ОЧЕН ЬСИЛЬНО ЛЮБЛЮ!',
      });
    } catch (error) {
    }
  }

  return (
    <button onClick={onSendEMail}>SEND EMAIL</button>
  )
}