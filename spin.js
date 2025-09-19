const spin = (countWheelDivisions = 8) => {
    //TODO написать условие при котором мы получаем countWheelDivisions с тега и передаём необходимый
    const resultWrapper = document.querySelector(".form-container"); // заменить на name необходимого класса контейнера
    const wheelWrarpper = document.querySelector(".wheel-wrarpper"); // заменить на name необходимого класса контейнера
    const wheel = document.querySelector(".wheel-img"); // заменить на name необходимого класса контейнера
    const wheelCursor = document.querySelector(".wheel-cursor"); // заменить на name необходимого класса контейнера
    if (!wheelCursor.classList.contains('rotat')) {
        wheelCursor.classList.add('rotat'); // добавляем класс 
        if (countWheelDivisions < 16) {
            if (wheel.classList.contains("rotated")) {
                resultWrapper.classList.toggle('show');
            } else {
                wheel.classList.add("super-rotation");
                setTimeout(() => {
                    wheelWrarpper.classList.toggle('hide');
                    resultWrapper.classList.toggle('show');
                    start_timer();
                }, 7500);
                wheel.classList.add("rotated");
            }
        }
        else {
            if (wheel.classList.contains("rotated")) {
                resultWrapper.classList.toggle('show');
            } else {
                wheel.classList.add("super-rotation16");
                setTimeout(() => {
                    wheelWrarpper.classList.toggle('hide');
                    resultWrapper.classList.toggle('show');
                    start_timer();
                }, 7500);
                wheel.classList.add("rotated");
            }
        }
    }
}

