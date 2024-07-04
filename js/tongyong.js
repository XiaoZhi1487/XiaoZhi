$(document).ready(function () {
    var content = $('.btandnr');
    content.css('transform', 'translateX(0)'); // 将位置恢复到正常位置

    // 音乐文件路径数组
    var musicList = [
        'music/winD - かわいい (可可爱爱).ogg',
        
    ];
    var currentMusicIndex = 0;
    var audioElement = $('<audio>', {
        controls: 'controls',
        // loop: true,
        muted: true,
    }).css('display', 'none').prependTo('body').on('ended', function() {
        currentMusicIndex = (currentMusicIndex + 1) % musicList.length; // 计算下一首歌曲的索引
        audioElement.find('source').attr('src', musicList[currentMusicIndex]); // 更新source元素的src属性
        audioElement[0].load(); // 加载新的音频文件
        audioElement[0].play(); // 播放新的音频文件
    });

    // 为audio元素添加source子元素
    $.each(musicList, function(index, musicSrc) {
        $('<source>').attr('src', musicSrc).appendTo(audioElement);
    });

    // 点击头像隐藏/显示主体
    $('.touxiang').click(function () {
        var isVisible = $('#zhu').is(':visible');
        var zhu = $('#zhu');
        var tx = $('#touxiang');
        if (tx.is(':animated')) { return; }
        if (isVisible) {
            zhu.animate({ opacity: 0 }, 500, function () {
                zhu.hide();
                tx.show();
                tx.animate({ opacity: 1 }, 500);
                currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
                audioElement.empty(); // 清空当前的source元素
                $('<source>').attr('src', musicList[currentMusicIndex]).appendTo(audioElement);
                audioElement[0].load(); // 加载新的音频文件
                audioElement[0].play(); // 播放新的音频文件
                $('.touxiang').addClass('bounce-fast').addClass('bounce-slow');
            });
        } else {
            tx.animate({ opacity: 0 }, 500, function () {
                tx.hide();
                zhu.show();
                zhu.animate({ opacity: 1 }, 500);
                // audioElement[0].pause();
            });
        }
    })

    var pages = [
        { id: 'page1', text: '首页' },
        { id: 'page2', text: '常用网站' },
        { id: 'page3', text: '数据库' },
        // { id: 'page5', text: '个人简介' },
        { id: 'kuake', text: '资源下载' },
        { id: 'bilibili', text: '本人b站' }
    ];

    // 创建导航栏
    $.each(pages, function (index, page) {
        var button = $('<button>').addClass('dh_button').attr('id', page.id).text(page.text);
        $('.daohang').append(button.clone());
        var button2 = $('<button>').addClass('sj_button').attr('id', page.id).text(page.text);
        $('.daohang2').append(button2);
        //导航点击事件
        $('#page1, #page2, #page3, #page5').click(function () {
            var target = $(this).attr('id').replace('page', 'p'); // 从id中提取目标并替换
            $('#' + target).show().siblings().hide(); // 显示对应的内容，并隐藏其他所有内容
            if (target == 2){
                var local = getData();
                load(local);
            }
            $('.cebianlan').show()
            $('.daohang2').show()
        });

        $('#kuake').click(function () { window.open('https://pan.quark.cn/s/e01b97096ab7#/list/share/7f5d50753f6a4d5fa83e54b2c567b0f3-%E8%B5%84%E6%BA%90%E4%B8%8B%E8%BD%BD') })
        $('#bilibili').click(function () { window.open('https://space.bilibili.com/1932421629?spm_id_from=333.1007.0.0') })
    });
});


