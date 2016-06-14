const footer = {
	template: `
		<footer class="footer">
		    <div class="container">
		        <div class="row">
		            <div class="col-md-12">
		                <p class="text-muted"><user-info name="$ctrl.name"></user-info> {{$ctrl.year}}</p>
		            </div>
		        </div>
		    </div>
		</footer>
	`,
	bindings: {
		name: '<',
		year: '<'
	}
};

export default footer;
