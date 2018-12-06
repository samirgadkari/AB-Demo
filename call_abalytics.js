ABalytics.init({
    experiment1: [
        {
            name: 'variant1',
            'experiment1_text': 'Pretty please click the button with sugar on top!',
            'experiment1_button':
            '<input type="button" value="Click me!" onclick="ga(\'send\', \'event\', \'buttonclick\', \'nice\'); alert(\'Thanks!\');">'
        },
        {
            name: 'variant2',
            'experiment1_text': 'You better click that button...',
            'experiment1_button':
            '<input type="button" value="Click me, OR ELSE" onclick="ga(\'send\', \'event\', \'buttonclick\', \'stern\'); alert(\'You will be spared.\');">'
        }
    ]
});
ga('send', 'pageview');

window.onload = function() {
    ABalytics.applyHtml();
};
