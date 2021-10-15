---
title: "Latest Code: Sort posts by title on Wordpress category page"
date: 2021-10-16T01:19:37+13:00
draft: false
---

Messed around with Wordpress for a bit today (which isn't used for this site but tons of people do use it including my workplace). <!--more-->

I've been making a plugin to make TOCs slightly less tedious (I think I got pretty far in a day?). Well, mainly just looking for stuff to do since I code more than I translate. Plus I'm lazy so it'll probably never get released lol. The snippet below is a small portion of my plugin with slight changes because ya'll getting the non-plugin version.

Anyway, it's really simple to sort posts by title on all Wordpress category pages.

{{< highlight php >}}
<?php
/**
* This function overrides the default sort order for categories
*
* @since     1.0.0
* @author	 axkeyz
* 
* @param string	    $query		url query string
*/
function ak_order_by_post_title( $query ){
    // Check if page is category page
    if ( $query->is_category() ){
        // Order by ascending title
        $query->set( 'orderby', 'title' );
        $query->set( 'order', 'asc' );
    }
}

// Hook function to wordpress action
add_action( 'pre_get_posts', 'ak_order_by_post_title');
{{< / highlight >}}

Dump it in your theme's functions.php file (it's like the installation_root/wp-content/themes/your-theme/functions.php file). Of course, don't forget to remove line 1 (the <?php tag)! If you're worried about tampering with your website code, make sure to back it up before you do something weird with it...

The nice thing about this is that it'll pick out your main post with the other links on it first (assuming your main post doesn't have a Chapter XXX). It'll also place chapter 10.5 between 10 and 11 even if you posted chapter 11 first. The sad thing is that it'll place chapter 10 before chapter 2, unless you labelled it as chapter 02.