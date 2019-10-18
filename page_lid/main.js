$(function () {

    $('.create_inquiry').on('click', () => {
        $('.form_inquiry_conteiner').css({ 'display': 'block' })
        $('.info_lid_conteiner').css({ 'border': '1px solid #000' })
        $('.info_lid_conteiner').css({ 'display': 'block' })
    })


    $('.select_type').on('click', () => {

        let y = $('#type_inquiry option:selected').text()

        switch (y) {
            case 'Негабарит':
                y = 'notOverall'
                $('.info_inquiry_block').css({ 'display': 'none' })
                $('.notOverall_inquiry_block').css({ 'display': 'block' })
                break;
            case 'FTL':
                $('.info_inquiry_block').css({ 'display': 'none' })
                $('.FTL_inquiry_block').css({ 'display': 'block' })
                break;
            case 'LTL':
                $('.info_inquiry_block').css({ 'display': 'none' })
                $('.LTL_inquiry_block').css({ 'display': 'block' })
                break;
            case 'FCL':
                $('.info_inquiry_block').css({ 'display': 'none' })
                $('.FCL_inquiry_block').css({ 'display': 'block' })
                break;
        }

        let data = {}

        $('.save_inquiry').on('click', () => {

            let input = $(`.${y}_inquiry_block`).find('input')
            let select = $(`.${y}_inquiry_block`).find('select')

            input.each((index, el) => {
                data[el.name] = $(el).val()
            })
            select.each((index, el) => {
                let indexs = el.options.selectedIndex
                data[el.name] = el[indexs].text
            })

            let typeInquiry = $('#sourse_inquiry option:selected').text()

            $('.inquiry_list_conteiner').append(`
                <div class="inquiry_item_block" value="0">
                    <div class="inquiry_main_info">
                        <div>
                            <h2>Номер запроса: ${$('#nomber_inquiry').text()}</h2>
                        </div>
                        <select id="status_inquiry">
                            <option>Не закончен</option>
                            <option>Не обработан</option>
                            <option>Принят</option>
                            <option>В обработке</option>
                            <option>Обработан</option>
                            <option>Возврат/уточнение</option>
                            <option>Завершен</option>
                            <option>Требует обратной связи</option>
                            <option>Обратная связь</option>
                        </select>
                    </div>
                    <div class="inquiry_sec_info">
                        <div>
                            <h4>Источник запроса: ${$('#sourse_inquiry option:selected').text()}</h4>
                            <h4>Тип запроса: ${$('#type_inquiry option:selected').text()}</h4>
                        </div>
                        <button id="show_info_inq">Развернуть</button>
                    </div>
                    <p class="information_inquiry">
                        <b>Тип транспорта:</b> ${data.type_car}<br>
                        <b>Способ погрузки:</b> ${data.variant_loading}<br>
                        <b>Устловия поставки:</b> ${data.delivery_condition}<br>
                    </p>
                    <p class="information_inquiry">
                        <b>Страна погрузки:</b> ${data.country_loading}<br>
                        <b>Адрес погрузки:</b> ${data.address_loading}<br>
                        <b>Адрес таможенного оформления:</b> ${data.address_tamoj_in}<br>
                    </p>
                    <p class="information_inquiry">
                        <b>Страна разгрузки:</b> ${data.country_unloading}<br>
                        <b>Адрес разгрузки:</b> ${data.address_unloading}<br>
                        <b>Адрес таможенного офрмления:</b> ${data.address_tamoj_from}<br>
                    </p>
                    <div class="inquiry_third_info">
                        <p class="information_inquiry">
                            <b>Характеристика груза:</b> ${data.type_cargo}<br>
                            <b>Стоимость груза:</b> ${data.price_cargo}<br>
                            <b>Вес груза:</b> ${data.weight_cargo}<br>
                            <b>Страна в инфосах:</b> ${data.country_invoise}<br>
                            <b>Кол-во кодо ТНВЭД:</b> ${data.code_tnvad}<br>
                            <b>Упаковка:</b> ${data.packing_cargo}<br>
                            <b>Класс опасности:</b> ${data.class_dunger}<br>
                            <b>Регулярность грузоперевозок:</b> ${data.traffic}<br>
                            <b>Температурный режим:</b> ${data.tempr}<br>
                            <b>Габариты груза:</b> ${data.size_cargo}<br>
                        </p>
                        <button id="hide_info_inq">Свернуть</button>
                    </div>
                </div>
            `)
            $('.form_inquiry_conteiner').css({ 'display': 'none' })
            $('.info_lid_conteiner').css({ 'display': 'none' })
            $('.info_inquiry_block').css({ 'display': 'none' })

            //Развернуть описание запроса
            $('#show_info_inq').on('click', () => {
                $('.information_inquiry').css({ 'display': 'block' })
                $('#show_info_inq').css({ 'display': 'none' })
                $('#hide_info_inq').css({ 'display': 'block' })
            })
            
            //Свернуть описание запроса
            $('#hide_info_inq').on('click', () => {
                $('.information_inquiry').css({ 'display': 'none' })
                $('#hide_info_inq').css({ 'display': 'none' })
                $('#show_info_inq').css({ 'display': 'block' })
            })

        })
    })

    //Кнопка редактирования данных о компании
    $('#switch_datas_company').on('click', () => {
        $('#switch_datas_company').css({'display': 'none'})
        $('#save_changes_company').css({'display': 'block'})
        $('.company_info').css({'display': 'none'})
        $('.company_inp').css({'display': 'block'})
    })
    //Кнопка сохранения данных о компании
    $('#save_changes_company').on('click', () => {
        $('#switch_datas_company').css({'display': 'block'})
        $('#save_changes_company').css({'display': 'none'})
        $('.company_info').css({'display': 'block'})
        $('.company_inp').css({'display': 'none'})
    })



    //Кнопка изменения данных о контактах
    $('#switch_datas_contacts').on('click', () => {
        $('#switch_datas_contacts').css({'display': 'none'})
        $('#save_datas_contacts').css({'display': 'block'})
        $('.contacts_info').css({'display': 'none'})
        $('.contacts_inp').css({'display': 'block'})
    })
    //Кнопка сохранения данных о контактах
    $('#save_datas_contacts').on('click', () => {
        $('#switch_datas_contacts').css({'display': 'block'})
        $('#save_datas_contacts').css({'display': 'none'})
        $('.contacts_info').css({'display': 'block'})
        $('.contacts_inp').css({'display': 'none'})
    })

})