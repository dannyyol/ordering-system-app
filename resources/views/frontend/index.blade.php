
@extends('layouts.master')
@section('content')    
    {{-- <transition name="animate_content">
    <router-view></router-view>
       </transition> --}}
         {{-- <transition name="page" mode="out-in">
            <router-view></router-view>
        </transition> --}}

        {{-- <transition mode="out-in"
 enter-active-class="animate__animated animate__fadeIn"
 leave-active-class="animate__animated animate__fadeOut"
>
  <router-view />
</transition> --}}

<vue-page-transition name="fade-in-right">
  <router-view/>
</vue-page-transition>

@endsection 

    
