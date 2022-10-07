//Citations are in References&Citations sheet

class information { //constructor with parameters author, section, type that every object in the library will use to store information
	constructor(author, section, type){
		this.author = author;
		this.section = section;
		this.type = type;
	}
}

var library = { //storing list of resources that user can scroll through in search bar
	'Audio/Video Hymns': new information('N/A', 'Hymns', 'Video Playlist'),
	'Basic Breakdown of Early Church History': new information('N/A', 'History', 'Video Playlist'),
	'Character: Chronic Complaining, Negative Attitudes Directly Affect Spiritual Growth': new information('HG Bishop Youssef', 'Spiritual', 'Book'),
	'Communion': new information('N/A', 'Rites', 'Lesson'),
	'Contemplations on The Resurrection': new information('Pope Shenouda III', 'Spiritual', 'Book'),
	'Coptic Curriculum': new information('N/A', 'Hymns', 'Lesson'),
	'Coptic Dates': new information('N/A', 'Rites', 'Table'),
	'Coptic Hymns in English': new information('N/A', 'Hymns', 'Link'),
	'Early History of the Coptic Church': new information('N/A', 'History', 'Link'),
	'Ecumenical Councils': new information('N/A', 'History', 'Table'),
	'History Basics of the Coptic Church': new information('N/A', 'History', 'Link'),
	'History of Coptic Hymns': new information('N/A', 'Hymns', 'Link'),
	'History of Specific Traditions, Beliefs and Practices in the Coptic Church': new information('N/A', 'History', 'Link'),
	'Hymns Curriculum': new information('N/A', 'Hymns', 'Lesson'),
	'Hymns/Coptic Quizzes': new information('N/A', 'Hymns', 'Quizzes'),
	'Introduction to the Coptic Orthodox Church': new information('Fr.Tadros Malaty', 'History', 'Book'),
	'Life of Faith': new information('Pope Shenouda III', 'Spiritual', 'Book'),
	'Liturgy Time Table': new information('N/A', 'Spiritual', 'Table'),
	'Lyrics for Coptic Hymns': new information('N/A', 'Hymns', 'Link'),
	'Matthew Chapter 6': new information('N/A', 'Spiritual', 'Lesson'),
	'Matthew Chapter 7': new information('N/A', 'Spiritual', 'Lesson'),
	'Matthew Chapter 9': new information('N/A', 'Spiritual', 'Lesson'),
	'Quizzes on The Holy Bible': new information('Pope Shenouda III', 'Spiritual', 'Book'),
	'Rites for Deacons': new information('N/A', 'Rites', 'Link'),
	'Rites for Feasts of the Church': new information('N/A', 'Rites', 'Link'),
	'Rites for Sacraments': new information('N/A', 'Rites', 'Link'),
	'Spiritual Growth': new information('N/A', 'Spiritual', 'Link'),
	'Spiritual Talks': new information('N/A', 'Spiritual', 'Link'),
	'Spirituality of the Coptic Horologion': new information('N/A', 'Spiritual', 'Link'),
	'Talks and Sermons': new information('N/A', 'Spiritual', 'Video Playlist'),
	'The Beholder of God Mark the Evangelist Saint and Martyr': new information('Pope Shenouda III', 'History', 'Book'),
	'The Nature of Christ': new information('Pope Shenouda III', 'Rites', 'Book'),
	'The Seven Words of Our Lord on The Cross': new information('Pope Shenouda III', 'Spiritual', 'Book'),
	'The Spirituality of the Rites of the Holy Liturgy in the Coptic Orthodox Church': new information('HG Bishop Mettaous', 'Rites', 'Book'),
	'The Priesthood': new information('Pope Shenouda III', 'Rites', 'Book'),
	'Understanding the Liturgy': new information('Fr.Athanasius Iskander', 'Rites', 'Book'),

};

class Search { 
	static execute() { //function that stores the user's input and checks to see if it is in library
		var input = document.getElementById("searchValue");
		var searchValue = input.value; 
		if (library[searchValue] !== undefined) { //alert is displayed with information depending on whether or not user's input is in the library
			alert('Author: ' + library[searchValue].author + '  ' +'Section: ' + library[searchValue].section + '  ' + 'Type: ' + library[searchValue].type);	
		} else {
			alert('Please select an option from the drop down menu');
		} 		
	}
}