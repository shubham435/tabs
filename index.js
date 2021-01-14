$(document).ready(function(){
    $('#history').click(function(){
        $('#history').css('border', '2px solid black')
        $('#vision').css('border', 'none')
        $('#goals').css('border', 'none')
        $('.history').css('display', 'block');
        $('.vision').css('display', 'none');
        $('.goals').css('display', 'none');
    })
    $('#vision').click(function(){
        $('#vision').css('border', '2px solid black')
        $('#history').css('border', 'none')
        $('#goals').css('border', 'none')
        $('.vision').css('display', 'block');
        $('.history').css('display', 'none');
        $('.goals').css('display', 'none');
    })
    $('#goals').click(function(){
        $('#goals').css('border', '2px solid black')
        $('#history').css('border', 'none')
        $('#vision').css('border', 'none')
        $('.goals').css('display', 'block');
        $('.history').css('display', 'none');
        $('.vision').css('display', 'none');
    })
})