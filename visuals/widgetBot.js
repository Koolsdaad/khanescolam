if(!device.mobile) {
    const script = Object.assign(document.createElement('script'), {
        src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3',
        async: true,
        onload: () => {
            const discEmbed = new Crate({ server: '1338605927116574730', channel: '1338605927972077663',
                location: ['bottom', 'right'], notifications: true, indicator: true, allChannelNotifications: true,
                defer: false, color: '#000000'
            });
            plppdo.on('domChanged', () => window.location.href.includes("khanacademy.org/profile") ? discEmbed.show() : discEmbed.hide() );
        }
    });
    document.body.appendChild(script);
}
