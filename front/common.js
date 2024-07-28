//데이터 받은후 form에 삽입
function formSetting(data) {
    for (key in data) {
        $("#" + key).val(data[key]);
    };
}