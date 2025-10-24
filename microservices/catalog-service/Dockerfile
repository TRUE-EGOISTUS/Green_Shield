# Основа для Node.js
FROM node:18

# Рабочая директория
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json .
RUN npm install

# Копируем код
COPY . .

# Запускаем сервис
CMD ["npm", "start"]