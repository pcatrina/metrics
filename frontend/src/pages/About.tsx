import React from "react";

export function About() {
    return(
        <div className="container mx-auto max-w-2xl pt-5">
            <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
                <h1 className="font-bold">Тестовое задание для собесодования :</h1>
                <br/>
                <div>
                    <h2>
                        Тестовое задание – разработать бэкенд и фронтэнд (частично, как
                        дополнительное задание) для системы агрегации данных об
                        уникальных посещениях пользователями сайтов и получения этих
                        данных. Система является высоконагруженной. Должно быть
                        минимальное количество потерь при регистрации посещений.
                    </h2>
                    <span className=" py-2 px-4 rounded flex flex-col items-center mb-2">Бэкенд:</span>
                    <h2>
                        разработать, используя Spring Framework, Hibernate+JPA,
                        lombok, logback + slf4j
                        АПИ для регистрации уникального посещения
                        пользователем сайта:
                        входящие параметры: уникальный идентификатор
                        пользователя, URL сайта, время посещения
                        на выходе: 200 OK, если запрос обработан
                        АПИ для получения количества уникальных посещений
                        сайта за определенную дату:
                        входящие параметры: URL сайта, дата
                        исходящие данные: количество уникальных
                        посещений
                    </h2>
                    <span className=" py-2 px-4 rounded flex flex-col items-center mb-2">Фронтэнд:</span>
                    <h2>
                        Angular или React на выбор
                        Разработать простенькую страницу для ввода URL сайта и
                        даты для получения и отображения данных о количестве
                        уникальных посещений сайта за указанную дату.
                    </h2>
                </div>
            </div>
        </div>
    )
}