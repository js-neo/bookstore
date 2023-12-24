export function generateId() {
    const characters = "abcdefghijklmnopqrstuvwxyz",
        numbers = "0123456789";
    let id = "";

    for (let i = 0; i < 24; i++) {
        if (i % 2 === 0) {
            id += numbers.charAt(Math.floor(Math.random() * numbers.length));
        } else {
            id += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
    }

    return `${id}`;
}

export function generateUniqueId() {
    const letters = "abcdefghijklmnopqrstuvwxyz",
        numbers = "0123456789";
    let id = "";

    // Генерация первых двух символов (числа от 0 до 9)
    id += numbers.charAt(Math.floor(Math.random() * 10));
    id += numbers.charAt(Math.floor(Math.random() * 10));

    // Генерация следующих четырех символов (буквы латинского алфавита в нижнем регистре)
    for (let i = 0; i < 4; i++) {
        id += letters.charAt(Math.floor(Math.random() * 26));
    }

    // Генерация следующего символа (число от 0 до 9)
    id += numbers.charAt(Math.floor(Math.random() * 10));

    // Генерация следующих трех символов (буквы латинского алфавита в нижнем регистре)
    for (let i = 0; i < 3; i++) {
        id += letters.charAt(Math.floor(Math.random() * 26));
    }

    // Генерация следующего символа (число от 0 до 9)
    id += numbers.charAt(Math.floor(Math.random() * 10));

    // Генерация следующего символа (буква латинского алфавита в нижнем регистре)
    id += letters.charAt(Math.floor(Math.random() * 26));

    // Генерация следующего символа (число от 0 до 9)
    id += numbers.charAt(Math.floor(Math.random() * 10));

    // Генерация следующих пяти символов (буквы латинского алфавита в нижнем регистре)
    for (let i = 0; i < 5; i++) {
        id += letters.charAt(Math.floor(Math.random() * 26));
    }

    // Генерация следующих шести символов (числа от 0 до 9)
    for (let i = 0; i < 6; i++) {
        id += numbers.charAt(Math.floor(Math.random() * 10));
    }

    return id;
}

// Пример использования
const uniqueId = generateUniqueId();
console.log(uniqueId);
