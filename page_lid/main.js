$(function () {

    $('.create_inquiry').on('click', () => {
        $('.form_inquiry_conteiner').css({ 'display': 'block' })
        $('.info_lid_conteiner').css({ 'border': '1px solid #000' })
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
                <div class="inquiry_item_block" >
                    <h2>Номер задачи: ${$('#nomber_inquiry').text()}</h2>
                    <h4>Источник запроса: ${$('#sourse_inquiry option:selected').text()}</h4>
                    <h4>Тип запроса: ${$('#type_inquiry option:selected').text()}</h4>
                    <p class="information_inquiry" >
                        Тип транспорта: ${data.type_car}<br>
                        Способ погрузки: ${data.variant_loading}<br>
                        Устловия поставки: ${data.delivery_condition}<br>
                        Страна погрузки: ${data.country_loading}<br>
                        Адрес погрузки: ${data.address_loading}<br>
                        Адрес таможенного оформления: ${data.address_tamoj_in}<br>
                        Страна разгрузки: ${data.country_unloading}<br>
                        Адрес разгрузки: ${data.address_unloading}<br>
                        Адрес таможенного офрмления: ${data.address_tamoj_from}<br>
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
                    <button class="show_desc btn" id="show_desc">Развернуть</button>
                    <button class="collapse_desc btn" id="collapse_desc">Свернуть</button>
                </div>
            `)
            $('.form_inquiry_conteiner').css({ 'display': 'none' })
            $('.info_inquiry_block').css({ 'display': 'none' })

            $('#show_desc').on('click', () => {
                $('.information_inquiry').css({ 'display': 'block' })
                $('.collapse_desc').css({ 'display': 'block' })
                $('#show_desc').css({ 'display': 'none' })
            })
            $('#collapse_desc').on('click', () => {
                $('.information_inquiry').removeAttr('style')
                $('.collapse_desc').removeAttr('style')
                $('#show_desc').css({ 'display': 'block' })
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