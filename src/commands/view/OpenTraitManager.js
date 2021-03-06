define(function() {

		return {

			run: function(editor, sender) {
				var config = editor.Config;
				var pfx = config.stylePrefix;
				var tm = editor.TraitManager;
				if(!this.obj){
          var tmView = tm.getTraitsViewer();
					this.obj = $('<div/>').get(0);
					this.obj.appendChild(tmView.render().el);
					var panels = editor.Panels;
					if(!panels.getPanel('views-container'))
						panelC = panels.addPanel({id: 'views-container'});
					else
						panelC = panels.getPanel('views-container');
					panelC.set('appendContent', this.obj).trigger('change:appendContent');
				}

				this.obj.style.display = 'block';
			},

			stop: function() {
				if(this.obj)
					this.obj.style.display = 'none';
			}
		};
	});
