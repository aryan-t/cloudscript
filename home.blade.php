@extends('layouts.app')

@section('content')
@section('title', 'Homepage' )

<!-- banner 1 -->
<!-- banner 1 -->
<section class="section bannerslider">
	<div class="owl-carousel owl-carousel01 owl-theme">
			@foreach ($slider_first as $first)
			<div class="item">
					<img src="{{ $first->image }}" alt="" class="img-fluid">
				</div>

			@endforeach
	</div>
</section>

<!-- introduction tab -->
<section class="section intro-section">
	<div class="container">
		<div class="row">
			<div class="col-lg-3">
				<div class="side-bar">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs tabs-left text-uppercase">
						@foreach ($pages as $key => $page)
							@php
							$act = '';

								if($key == 0){
									$act = 'active';
								}
							@endphp
								<li><a href="#home-{{$page->id}}" data-toggle="tab" class="{{	$act }}">{{ $page->title }}</a></li>
						@endforeach
						{{-- <li><a href="#home-r" data-toggle="tab"  class="active">About Us</a></li>
						<li><a href="#module-r" data-toggle="tab">Modules</a></li>
						<li><a href="#profile-r" data-toggle="tab">Pricing</a></li>
						<li><a href="#messages-r" data-toggle="tab">Legal</a></li>
						<li><a href="#settings-r" data-toggle="tab">Contact Us</a></li> --}}
					</ul>
				</div>
			</div>
			<div class="col-lg-9">
				<!-- Tab panes -->
				<div class="tab-content pad-l-30">
					@foreach ($pages as $key => $page)
						@php
						$act1 = '';

							if($key == 0){
								$act1 = 'active';
							}
						@endphp

						<div class="tab-pane {{ $act1 }}" id="home-{{ $page->id }}">
							<div class="content-text">
								<div data-simplebar>
									{{-- <h2 class="title">{{ $page->title }}</h2> --}}
									{!! $page->content !!}
								</div>
						</div>
					</div>

					@endforeach

					{{-- <div class="tab-pane active" id="home-r">
						<div class="content-text">
							<h2 class="title">About CloudScript</h2>
							<p>Ut enim ad minim veniam, quis nostrud  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.

							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
							ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
						</div>
					</div>

					<div class="tab-pane" id="module-r">
							<div class="content-text">
								<h2 class="title">Modules</h2>
								<p>Ut enim ad minim veniam, quis nostrud  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.

								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
							</div>
					</div>

					<div class="tab-pane" id="profile-r">
							<div class="content-text">
								<h2 class="title">Pricing</h2>
								<p>Ut enim ad minim veniam, quis nostrud  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.

								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
							</div>
					</div>

					<div class="tab-pane" id="messages-r">
							<div class="content-text">
								<h2 class="title">Legal</h2>
								<p>Ut enim ad minim veniam, quis nostrud  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.

								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
							</div>
					</div>

					<div class="tab-pane" id="settings-r">
							<div class="content-text">
								<h2 class="title">Contact Us</h2>
								<p>Ut enim ad minim veniam, quis nostrud  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.

								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
								ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

								<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
							</div>
					</div> --}}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- banner 2 -->
<section class="section bannerslider">
	<div class="owl-carousel owl-carousel01 owl-theme">
		@foreach ($slider_second as $second)
		<div class="item">
				<img src="{{ $second->image }}" alt="" class="img-fluid">
			</div>

		@endforeach
		{{-- <div class="item">
			<img src="{{ asset('images/slider01-img01.jpg') }}" alt="" class="img-fluid">
		</div>
		<div class="item">
			<img src="{{ asset('images/slider01-img02.jpg') }}" alt="" class="img-fluid">
		</div>
		<div class="item">
			<img src="{{ asset('images/slider01-img01.jpg') }}" alt="" class="img-fluid">
		</div>
		<div class="item">
			<img src="{{ asset('images/slider01-img02.jpg') }}" alt="" class="img-fluid">
		</div> --}}
	</div>
</section>

<!-- chart -->
<section class="section chart-section">
	<div class="container">
		<div class="top center-title">
			<h6 class="center-topic btn-lg pri-bg text-uppercase">{{   $options['main_topic_text'] }}</h6>
		</div>

		<div class="chart clearfix">
			@foreach ($topics as $key => $topic)
				<div class="chart-block">
					<div class="center-title mar-b-20">
						<h6 class="topic btn-lg pri-bg text-uppercase">{{ $topic->title }}</h6>
					</div>
				{!! $topic->content !!}
				</div>
			@endforeach

		</div>
	</div>
</section>

<!-- contact form -->
<section class="section cnt-block pri-bg">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-md-6">
				<div class="cnt-form" id="contact_form">
					<h2 class="title">{{ $options['contact_title'] }} </h2>
					<p>{{   $options['contact_short_text'] }} </p>

					@if ($message = Session::get('con_success'))
				<div class="alert alert-success alert-dismissible" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
				<i class="fa fa-check-circle"></i> {{ $message}}
				</div>
				@endif

				
				

					{!! Form::open(['method' => 'POST', 'route' => 'contact.save', 'class' => 'form-horizontal']) !!}
					
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group{{ $errors->has('con_fname') ? ' has-error' : '' }}">
											{!! Form::text('con_fname', null, ['class' => 'form-control','placeholder'=> 'First Name']) !!}
											<small class="text-danger">{{ $errors->first('con_fname') }}</small>
									</div>								
								</div>
								<div class="col-sm-6">
									<div class="form-group{{ $errors->has('con_lname') ? ' has-error' : '' }}">
											{!! Form::text('con_lname', null, ['class' => 'form-control','placeholder'=> 'Last Name']) !!}
											<small class="text-danger">{{ $errors->first('con_lname') }}</small>
									</div>
								</div>
							</div>

							<div class="form-group{{ $errors->has('con_email') ? ' has-error' : '' }}">
							    {!! Form::text('con_email', null, ['class' => 'form-control','placeholder'=> 'Your Email']) !!}
							    <small class="text-danger">{{ $errors->first('con_email') }}</small>
							</div>

							<div class="form-group{{ $errors->has('con_phone') ? ' has-error' : '' }}">
							    {!! Form::text('con_phone', null, ['class' => 'form-control', 'placeholder' => 'contact no.']) !!}
							    <small class="text-danger">{{ $errors->first('con_phone') }}</small>
							</div>

							<div class="form-group{{ $errors->has('con_msg') ? ' has-error' : '' }}">
							    {!! Form::textarea('con_msg', null, ['class' => 'form-control', 'rows' => '5', 'placeholder' => 'Your message']) !!}
							    <small class="text-danger">{{ $errors->first('con_msg') }}</small>
							</div>

					    <div class="btn-group pull-right">

					        {!! Form::submit("Submit", ['class' => 'btn btn-lg btn-sec mar-t-10']) !!}
					    </div>
					{!! Form::close() !!}

				</div>
			</div>

			<div class="col-lg-6 col-md-6">
					<a class="twitter-timeline" data-height="550" href="https://twitter.com/{{   $options['tw_username'] }}">Tweets by {{   $options['tw_username'] }}</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
					{{-- <a class="twitter-timeline" href="https://twitter.com/TwitterDev">Tweets by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
				<div class="fb-page" data-href="https://www.facebook.com/1stwebdesigner/" data-tabs="timeline" data-width="500" data-height="400" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/1stwebdesigner/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/1stwebdesigner/">1stWebDesigner</a></blockquote></div>
				</div> --}}
			</div>
		</div>
	</div>
</section>
@endsection
