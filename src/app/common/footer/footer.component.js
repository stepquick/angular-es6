import controller from './footer.controller';

const FooterComponent = {
	controller,
	template: `
		<footer class="footer">
		    <div class="container">
		        <div class="row">
		            <div class="col-md-12">
		                <p class="text-muted"><user-info></user-info> {{$ctrl.year}}</p>
		            </div>
		        </div>
		    </div>
		</footer>
	`,
};

export default FooterComponent;
