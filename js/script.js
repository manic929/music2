// NOW CLICK album-poster TO GET CURRENT SONG ID
		$(".album-poster").on('click', function(e){
			var dataSwitchId = $(this).attr('data-switch');
			//console.log(dataSwitchId);

			// and now i use aplayer switch function see
			ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

			// aplayer play function
			// when i click any song to play
			ap.play();

			// click to slideUp player see
			$("#aplayer").addClass('showPlayer');
		});

		const ap = new APlayer({
		    container: document.getElementById('aplayer'),
		    listFolded: true,
		    audio: [
		    {
		        name: 'I Knew You Were Trouble',
		        artist: 'Taylor Swift',
		        url: 'source/trouble.mp3',
		        cover: 'images/red.jpg',
		    },
			{
		        name: 'Deja Vu',  // SONG NAME
		        artist: 'Olivia Rodrigo', //ARTIST NAME
		        url: 'source/deja-vu.mp3', // PATH NAME AND SONG URL
		        cover: 'images/sour.jpg' // COVER IMAGE
		    },
            {
		        name: 'Purge the Poison',  // SONG NAME
		        artist: 'Marina and the Diamonds', //ARTIST NAME
		        url: 'source/purge-the-poison.mp3', // PATH NAME AND SONG URL
		        cover: 'images/dreams.jpg' // COVER IMAGE
		    },
            {
		        name: 'Love Me More',  // SONG NAME
		        artist: 'Mitski', //ARTIST NAME
		        url: 'source/love-me-more.mp3', // PATH NAME AND SONG URL
		        cover: 'images/mitski.jpg' // COVER IMAGE
		    },
            {
		        name: 'Sacrifice',  // SONG NAME
		        artist: 'The Weeknd', //ARTIST NAME
		        url: 'source/sacrifice.mp3', // PATH NAME AND SONG URL
		        cover: 'images/dawn.jpg' // COVER IMAGE
		    },
            {
		        name: 'Easy on Me',  // SONG NAME
		        artist: 'Adele', //ARTIST NAME
		        url: 'source/easy-on-me.mp3', // PATH NAME AND SONG URL
		        cover: 'images/adele.png' // COVER IMAGE
		    },
            {
		        name: 'Kiss Me More (feat. SZA)',  // SONG NAME
		        artist: 'Doja Cat', //ARTIST NAME
		        url: 'source/kiss-me-more.mp3', // PATH NAME AND SONG URL
		        cover: 'images/planet.jpg' // COVER IMAGE
		    },
            {
		        name: 'Higher Power',  // SONG NAME
		        artist: 'Coldplay', //ARTIST NAME
		        url: 'source/higher-power.mp3', // PATH NAME AND SONG URL
		        cover: 'images/coldplay.jpg' // COVER IMAGE
		    },
		    ]
		});
        