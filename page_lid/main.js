window.onload = () => {

    $('.create_inquiry').on('click', () => {
        $('.form_inquiry_conteiner').css({'display': 'block'})
    })


    $('.select_type').on('click', () => {
        let y = $('#type_inquiry option:selected').text()

        switch (y) {
            case 'Негабарит':
                $('.info_inquiry_block').css({'display': 'none'})
                $('.notOverall_inquiry_block').css({'display': 'block'})
                break;
            case 'FTL':
                $('.info_inquiry_block').css({'display': 'none'})
                $('.FTL_inquiry_block').css({'display': 'block'})
                break;
            case 'LTL':
                $('.info_inquiry_block').css({'display': 'none'})
                $('.LTL_inquiry_block').css({'display': 'block'})
                break;
            case 'FCL':
                $('.info_inquiry_block').css({'display': 'none'})
                $('.FCL_inquiry_block').css({'display': 'block'})
                break;
        }

        

        let data = {}
        

        $('.save_inquiry').on('click', () => {

            $(`.${y}_inquiry_block`).find('input, select').each( (index, el) => {
                data[el.name] = $(el).val() 
            })
            console.log( data)
            $('.inquiry_list_conteiner').append(`
                <div class="inquiry_item_block">
                    <h2>Номер задачи:</h2>
                    <h4>Источник запроса:</h4>
                    <p class="information_inquiry">
                        Тип транспорта: ${data.type_car}<br>
                        Устловия поставки: ${data.delivery_condition}<br>
                        Страна погрузки: ${data.country_loading}<br>
                        Адрес погрузки: ${data.address_loading}<br>
                        Адрес таможенного оформления: ${data.address_tamoj}<br>
                        Страна разгрузки: ${data.country_unloading}<br>
                        Адресс разгрузки: ${data.address_unloading}<br>
                        Адрес таможенного офрмления: ${data.address_tamoj_oforml}<br>
                        Характеристика груза: ${data.type_cargo}<br>
                        Стоимость груза: ${data.price_cargo}<br>
                        Вес груза: ${data.weight_cargo}<br>
                        Страна в инфосах: ${data.country_invoise}<br>
                        Кол-во кодо ТНВЭД: ${data.code_tnvad}<br>
                        Упаковка: ${data.packing_cargo}<br>
                        Класс опасности: ${data.class_dunger}<br>
                        Регулярность грузоперевозок: ${data.traffic}<br>
                        Температурный режим: ${data.tempr}<br>
                        Габариты груза: ${data.size_cargo}<br>
                    </p>
                </div>
            `)
            $('.form_inquiry_conteiner').css({'display': 'none'})
        
        
        })
})

    $('.inquiry_list_conteiner').on('click', () => {
        $('.information_inquiry').css({'display': 'block'})
    })
    
}