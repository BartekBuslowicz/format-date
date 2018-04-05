const formatDate = (timeInSeconds) => {
 	var hours = Math.floor(timeInSeconds/3600);
 	var minutes = Math.floor(timeInSeconds%3600/60);
 	var seconds = timeInSeconds%60;
 	if( timeInSeconds>0&&timeInSeconds<60) {
 		return `${timeInSeconds}s`;
 	} else if(timeInSeconds==null) {
 		return '0s';
 		} else if(timeInSeconds>=60&&timeInSeconds<3600) { 			
 			if(seconds==0) {
 				return `${minutes}m`;
 			} else {
 				return `${minutes}m ${seconds}s`;
 			}
 		} else if(timeInSeconds>=3600) {
 			if(hours>0&&minutes>0&&seconds>0) {
 				return `${hours}h ${minutes}m ${seconds}s`
 			} else if(hours>0&&minutes==0&&seconds==0) {
 				return  `${hours}h`;
 			} else if(hours>0&&minutes>0&&seconds==0) {
 				return `${hours}h ${minutes}m`
 			} else if(hours>0&&minutes==0&&seconds>0) {
 				return `${hours}h ${seconds}s`
 			}
 		}
}

module.exports = formatDate;


