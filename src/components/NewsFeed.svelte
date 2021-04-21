<script>
    const newsEntries = [
        {
            title: 'v0.0.3 - title3',
            text: 'This is a news text 3',
            date: ''
        },
        {
            title: 'v0.0.2 - title2',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium ex non nisi vestibulum tristique. Nulla facilisi. Praesent augue ex, pellentesque nec gravida suscipit, sagittis eu mi. Fusce fringilla ante massa, ac interdum dolor ullamcorper a. Mauris a sapien suscipit, mattis ex at, sollicitudin felis. Praesent eget gravida felis. Nullam accumsan risus enim, vel iaculis eros suscipit a.

Fusce semper felis id lacus pulvinar accumsan. Donec vitae iaculis neque. Ut porta nisl ac mollis aliquet. Suspendisse vel felis eget ipsum vestibulum pellentesque in a sapien. Vivamus quis sagittis neque. Ut malesuada leo lectus. Nulla id felis nec sem efficitur cursus. Proin eleifend diam a porta lacinia. In vel lectus felis. Proin in felis vitae quam ultrices convallis. Pellentesque in gravida libero. Nunc vehicula facilisis lorem, nec tincidunt ante ornare eu. Mauris ac porttitor erat.`,
            date: ''
        },
        {
            title: 'v0.0.1 - title1',
            text: `Sed accumsan lorem metus, in sollicitudin ligula viverra maximus. Pellentesque non quam eleifend, egestas lectus sed, faucibus urna. Fusce cursus quam at consectetur varius. Quisque tortor tellus, interdum ac molestie eu, ullamcorper luctus mauris. Sed non hendrerit ante, quis viverra leo. Fusce lectus massa, semper quis maximus sed, rhoncus efficitur nulla. Aenean tincidunt sit amet sem in auctor. Donec tincidunt velit at nisl elementum, ut scelerisque ex lobortis. Nullam sed augue tortor. Cras rhoncus accumsan molestie. Fusce non ligula congue, malesuada velit in, malesuada erat. Curabitur scelerisque est turpis, in euismod augue ultricies id. Nunc a nisi a turpis feugiat finibus eu in augue.`,
            date: ''
        }
    ];
</script>

<div id="news-container">

    <h4>News</h4>

    <div id="news-entries">
        {#each newsEntries as entry}
            <div class="entry">
                <div class="entry-title">{entry.title}</div>
                <div class="entry-text">{entry.text}</div>
            </div>
        {/each}
    </div>


</div>
<style>
    h4  {
        margin: auto;
        text-align: center;
        font-size: 1.8rem;
        text-transform: uppercase;
        letter-spacing: 4px;
    }
    div#news-container {
        background: #292929 17%;
        width: 400px;
        height: 300px;
    }

    div#news-entries {
        max-height: 263px;
        overflow-y: scroll;
        margin: 0 20px;
    }

    div.entry {
        background: #FFFFFF 55%;
        color: black;
        margin-bottom: 20px;
        padding: 10px;
    }

    div.entry-title {
        font-size: 0.9rem;
    }

    div.entry-text {
        font-size: 0.75rem;
    }
</style>