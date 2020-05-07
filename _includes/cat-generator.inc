<div class="container-fluid">
    <div class="row">
        <div class="col-12 text-center" style="margin: 15px 0;">
            <canvas id="game-layer" width="450" height="340"></canvas>
            <div class="col-12 text-center btn-container">
                <div id="spawn" class="btn">Spawn</div>
                <div id="destroy" class="btn">Destroy</div>
            </div>
        </div>
    </div>
</div>

<script src="/assets/js/game-preview.js"></script>

<style>
	p {
		margin-top: 1.2rem;
	}
	
	label {
		vertical-align: middle;
		padding: 0 5px;
	}
	
	/*.container-fluid {
		/*background-color: #B0F0EF;*/
		background-color: #edfeff;
		height: 100vh;
		font-weight: 600;
	}*/
	
	.row {
		margin: 0 !important;
	}
	
	/*.title {
		margin-top: 20px;
		margin-bottom: 28px;
		font-size: 40px;
		font-weight: 600;
	}*/
	
	#game-layer {
		border-radius: 5px;
		height: 340px;
		max-width: 450px;
	}

	@media (max-width: 519px) { 
		#game-layer {
			width: 250px;
			height: 190px;
		}

		.btn-container {
			display: none;
		}
	}
	
	.control-panel {
		background-color: #a1a1a1;
		/*background-color: rgba(108,179,196,1);*/
		border-radius: 10px;
		color: white;
		padding: 0 35px 25px 35px;
	}
	
	.control-title {
		font-size: 22px;
	}
	
	.setting {
		font-size: 17px;
	}
	
	.myslider {
	  -webkit-appearance: none;
	  appearance: none;
	  width: 75%;
	  height: 15px;
	  border-radius: 5px;  
	  background: #e8e8e8;
	  outline: none;
	  opacity: 0.85;
	  -webkit-transition: .2s;
	  cursor: pointer;
	}
	
	.myslider:hover {
	  opacity: 1;
	}

	.myslider::-webkit-slider-thumb {
	  -webkit-appearance: none;
	  appearance: none;
	  width: 20px;
	  height: 20px;
	  border-radius: 50%; 
	  background: pink;
	}

	.myslider::-moz-range-thumb {
	  width: 20px;
	  height: 20px;
	  border-radius: 50%;
	  background: pink;
	}

	.cat-icon-container {
		display: flex;
		justify-content: center;
	}
	
	.cat-icon {
		max-height: 110px;
		max-width: 130px;
		padding: 8px;
		margin-left: 5px;
		margin-right: 5px;
		background: none;
		border: 2px solid pink;
		border-radius: 5px;
	}
	
	#catImg1 {
		padding-top: 0;
		padding-bottom: 0;
		padding-left: 15px;
		padding-right: 15px;
	}
	
	.cat-icon:hover {
		border-color: pink;
		box-shadow: 0 3px 6px 0 pink;
		cursor: pointer;
	}
	
	.background-container {
		display: flex;
		justify-content: center;
	}
	
	.background-img {
		max-height: 105px;
		margin-left: 5px;
		margin-right: 5px;
		border-radius: 5px;
	}
	
	.background-img:hover {
		box-shadow: 0 9px 8px 0 rgba(0,0,0,0.2);
		cursor: pointer;
	}
	
	.btn {
		background-color: pink;
		border-radius: 5px;
		margin: 5px 22px;
		width: 160px;
		font-size: 14px;
		font-weight: 600;
	}
	
	.btn:hover {
		/*background-color: #955FF4;*/
		background-color: #8dd2e3;
		color: white;
	}

    .btn-container {
        position: absolute;
        bottom: 10px;
        left: 0;
    }

</style>