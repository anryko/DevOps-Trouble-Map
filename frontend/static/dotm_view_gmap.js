function loadGMap(stage, locations) {
	// Clean everything
	clearStatus(stage);
	$(stage).html("<div id='gmap'></div>");
	$("#gmap").gmap3({
		map:{
			options: {
				zoom:3
			}
		},
		marker:{
			values:locations,
			options: {
				icon: new google.maps.MarkerImage('http://maps.google.com/mapfiles/marker_grey.png')
			},
		events:{
		      click: function(marker, event, context){
			loadNode(context.data.node);
		      },
		      mouseover: function(marker, event, context){
			$(this).gmap3(
			  {clear:"overlay"},
			  {
			  overlay:{
			    latLng: marker.getPosition(),
			    options:{
			      content:  "<div class='mapbullet'>" +
				          "<div class='text'>" + context.data.node + " (" + context.data.ip + ")</div>" +
				        "</div>",
			      offset: {
				x:-46,
				y:-73
			      }
			    }
			  }
			});
		      },
		      mouseout: function(){
			$(this).gmap3({clear:"overlay"});
		      }
	  	}
		}
	});

	/* Autofit if >1 marker (with 1 marker only too deep zoom in) */
	if(locations.length > 1)
		$("#gmap").gmap3('autofit');
}

