<?php

/**
 * [template] functions and definitions
 *
 * @package [template]
 * @since 1.0.0
 */

//---------------------------------------------------------------------------
// WordPress 基本設定
//---------------------------------------------------------------------------
// ツールバーを非表示
add_filter('show_admin_bar', '__return_false');

// WordPressバージョン情報の削除
remove_action('wp_head', 'wp_generator');

// デフォルトのjQuery読み込み禁止
wp_deregister_script('jquery');

// セキュリティ対策 X-Frame-Options
add_action('send_headers', function () {
	header('X-Frame-Options: DENY');
});

// アイキャッチ画像有効化
add_theme_support('post-thumbnails');

// 画像サイズ追加
add_image_size('slider', 2000, 600, array('center', 'center'));
add_image_size('slider-sp', 640, 500, array('center', 'center'));
add_image_size('single-thumbnail', 640, 480, array('center', 'center'));
add_image_size('single-kv', 2000, 1000, array('center', 'center'));

// 画像URLからIDを取得
function get_attachment_id_by_url($url)
{
	global $wpdb;
	$sql = "SELECT ID FROM {$wpdb->posts} WHERE post_name = %s";
	preg_match('/([^\/]+?)(-e\d+)?(-\d+x\d+)?(\.\w+)?$/', $url, $matches);
	$post_name = $matches[1];
	return (int) $wpdb->get_var($wpdb->prepare($sql, $post_name));
}

// 画像をサムネイルで出力
function catch_that_image()
{
	global $post;
	$first_img = '';
	$output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
	$first_img_src = $matches[1][0];
	$attachment_id = get_attachment_id_by_url($first_img_src);
	$first_img = wp_get_attachment_image($attachment_id, 'rect', false, array('class' => 'archive-thumbnail'));
	if (empty($first_img)) {
		$first_img = '<img class="attachment_post_thumbnail" src="' . get_stylesheet_directory_uri() . '/image/common/noimage.png" alt="No image" />';
	}
	return $first_img;
}

// 特殊文字が自動変換されるのを回避
add_filter( 'run_wptexturize', '__return_false' );

//---------------------------------------------------------------------------
// サイトURLを取得するショートコードを作成
//---------------------------------------------------------------------------
//投稿内で [url] と記述する
function shortcode_url()
{
	return get_bloginfo('url');
}
add_shortcode('url', 'shortcode_url');


//---------------------------------------------------------------------------
// テーマフォルダのパスを取得するショートコードを作成
//---------------------------------------------------------------------------
//投稿内で [template_url] と記述する
function shortcode_templateurl()
{
	return get_template_directory_uri('template_url');
}
add_shortcode('template_url', 'shortcode_templateurl');

// <source>タグや<srcset>タグを使用した際も表示する
add_filter('wp_kses_allowed_html', 'my_wp_kses_allowed_html', 10, 2);
function my_wp_kses_allowed_html($tags, $context)
{
	$tags['source']['srcset'] = true;
	return $tags;
}


// 親ページか子ページかを判断（is_child()が使用可能）
function is_child($slug = "")
{
	if (is_singular()) : //投稿ページのとき（固定ページ含）
		global $post;
		if ($post->post_parent) { //現在のページに親がいる場合
			$post_data = get_post($post->post_parent); //親ページの取得
			if ($slug != "") { //$slugが空じゃないとき
				if (is_array($slug)) { //$slugが配列のとき
					for ($i = 0; $i <= count($slug); $i++) {
						if ($slug[$i] == $post_data->post_name || $slug[$i] == $post_data->ID || $slug[$i] == $post_data->post_title) { //$slugの中のどれかが親ページのスラッグ、ID、投稿タイトルと同じのとき
							return true;
						}
					}
				} elseif ($slug == $post_data->post_name || $slug == $post_data->ID || $slug == $post_data->post_title) { //$slugが配列ではなく、$slugが親ページのスラッグ、ID、投稿タイトルと同じのとき
					return true;
				} else {
					return false;
				}
			} else { //親ページは存在するけど$slugが空のとき
				return true;
			}
		} else { //親ページがいない
			return false;
		}
	endif;
}


//---------------------------------------------------------------------------
// 抜粋の文字数、記号を変更
//---------------------------------------------------------------------------
function twpp_change_excerpt_length($length)
{
	$length = 100;
	return $length;
}

add_filter('excerpt_length', 'twpp_change_excerpt_length', 999);

function twpp_change_excerpt_more($more)
{
	return '...';
}
add_filter('excerpt_more', 'twpp_change_excerpt_more');


//---------------------------------------------------------------------------
// ショートコードを追加する
// 記述例
// [myphp file='hoge']
//---------------------------------------------------------------------------
function my_php_Include($params = array())
{
	extract(shortcode_atts(array('file' => 'default'), $params));
	ob_start();
	include(STYLESHEETPATH . "/component/$file.php");
	return ob_get_clean();
}
add_shortcode('myphp', 'my_php_Include');


//---------------------------------------------------------------------------
// Contact Form 7のreCAPTCHA v3 を必要なページのみ設置
//---------------------------------------------------------------------------
function contact_form_customize()
{
	if (is_page([
		'contact',
		'inquiry',
		'check',
	])) return;
	wp_deregister_script('google-recaptcha');
}

add_action('wp_enqueue_scripts', 'contact_form_customize', 100, 0);


//---------------------------------------------------------------------------
// cssとJavaScriptの読み込みを指定
//---------------------------------------------------------------------------

/* cssを<head>内に挿入
   ========================================================================== */
function template_css()
{
	$theme_version = wp_get_theme()->get('Version');

	// 全てのページ
	wp_enqueue_style('style-common', get_template_directory_uri() . '/assets/css/common.css', array(), $theme_version);

	// TOPページのみ
	if (is_home() || is_front_page()) {
		wp_enqueue_style('vendor-slick', get_template_directory_uri() . '/assets/vendor/slick/slick.css', array(), $theme_version);
		wp_enqueue_style('vendor-slick-theme', get_template_directory_uri() . '/assets/vendor/slick/slick-theme.css', array(), $theme_version);
		wp_enqueue_style('style-top', get_template_directory_uri() . '/assets/css/top.css', array(), $theme_version);
	}

	// お問い合わせページ、お問い合わせ確認ページのみ
	if (is_page(array('contact', 'check'))) {
		wp_enqueue_style('style-contact', get_template_directory_uri() . '/assets/css/contact.css', array(), $theme_version);
	}

	// お問い合わせ完了ページ、タクソノミーのアーカイブページのみ
	if (is_page('finish') || is_tax(array('info_cat', 'recruit_cat'))) {
		wp_enqueue_style('style-layout', get_template_directory_uri() . '/assets/css/layout.css', array(), $theme_version);
	}

	// 指定したページのみ
	// if (is_page(array('page1', 'page2'))) {
	// }
}
add_action('wp_enqueue_scripts', 'template_css');


/* JavaScriptを</body>の前に挿入
   ========================================================================== */
function template_js()
{

	$theme_version = wp_get_theme()->get('Version');

	// 全ページ
	wp_enqueue_script('vendor-jquery', get_template_directory_uri() . '/assets/vendor/jquery-3.6.0.min.js', array(), $theme_version, true);
	wp_enqueue_script('script-common', get_template_directory_uri() . '/assets/js/common.js', array(), $theme_version, true);

	// TOPページのみ
	if (is_home() || is_front_page()) {
		wp_enqueue_script('vendor-slick-min', get_template_directory_uri() . '/assets/vendor/slick/slick.min.js', array(), $theme_version, true);
		wp_enqueue_script('script-top', get_template_directory_uri() . '/assets/js/top.js', array(), $theme_version, true);
	}

	// 特定ページのみ(単一)
	// if (is_page('hoge')) {
	// }

	// 特定ページのみ(複数)
	// if (is_page(array('page1', 'page2'))) {
	// }
}
add_action('wp_enqueue_scripts', 'template_js');
