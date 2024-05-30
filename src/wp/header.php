<?php

/**
 * Header file for the [template] WordPress default theme.
 *
 * @package [template]
 * @since 1.0.0
 */

// <body>タグにTOPページと下層ページでクラスを付与
if (is_home() || is_front_page()) {
	$bodyClass = "top";
	$bodyData = "data-page-index";
} else {
	$bodyClass = "lower";
	$bodyData = "data-page-lower";
}

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> prefix="og: http://ogp.me/ns#">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <title><?php the_title(); ?></title>
    <meta name="Description" content="ダミーテキスト。このテキストはdummyです。">

    <!-- favicon -->
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/assets/img/common/favicon.ico">
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/assets/img/common/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/img/common/android-chrome-192x192.png">

    <?php wp_head(); ?>
</head>

<body class="<?php echo $bodyClass; ?>" <?php echo $bodyData; ?>>
    <header id="header" class="c-header">
        <nav class="c-header__content">
            <div class="c-header-logo">
                <a class="c-header-logo__item" href="<?php echo esc_url(home_url('/')); ?>">
                    <img src="https://placehold.jp/b5b5b5/ffffff/180x48.png?text=LOGO" alt="">
                </a>
            </div>
            <button class="c-header-menu" data-menu-btn>
                <span class="c-header-menu-btn" data-menu-btn-inner>
                    <span class="c-header-menu-btn__line"></span>
                    <span class="c-header-menu-btn__line"></span>
                    <span class="c-header-menu-btn__line"></span>
                </span>
            </button>
            <div class="c-header-box" data-header-nav>
                <nav class="c-header-box__content" aria-label="サイト内メニュー">
                    <a class="c-header-sp-logo" href="./">
                        <img src="https://placehold.jp/b5b5b5/ffffff/180x48.png?text=LOGO" alt="">
                    </a>
                    <ul class="c-header-list">
                        <li class="c-header-dropdown" data-dropdown>
                            <a class="c-header-list-item<?php if (is_page('info')) { echo ' is-current'; } ?>" href="<?php echo esc_url(home_url('/')); ?>info/">新着情報</a>
                            <button class="c-header-dropdown__btn" data-dropdown-btn></button>
                            <ul class="c-header-dropdown-list" data-dropdown-list>
                                <li>
                                    <a class="c-header-dropdown-list__link" href="<?php echo esc_url(home_url('/')); ?>info_cat/press/">プレスリリース</a>
                                </li>
                                <li>
                                    <a class="c-header-dropdown-list__link" href="<?php echo esc_url(home_url('/')); ?>info_cat/topics/">トピックス</a>
                                </li>
                                <li>
                                    <a class="c-header-dropdown-list__link" href="<?php echo esc_url(home_url('/')); ?>info_cat/other/">その他</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="c-header-list-item<?php if (is_page('service')) { echo ' is-current'; } ?>" href="<?php echo esc_url(home_url('/')); ?>service/">サービス</a>
                        </li>
                        <li>
                            <a class="c-header-list-item<?php if (is_page('product')) { echo ' is-current'; } ?>" href="<?php echo esc_url(home_url('/')); ?>product/">製品情報</a>
                        </li>
                        <li class="c-header-dropdown" data-dropdown>
                            <a class="c-header-list-item<?php if (is_page('recruit')) { echo ' is-current'; } ?>" href="<?php echo esc_url(home_url('/')); ?>recruit/">採用情報</a>
                            <button class="c-header-dropdown__btn" data-dropdown-btn></button>
                            <ul class="c-header-dropdown-list" data-dropdown-list>
                                <li>
                                    <a class="c-header-dropdown-list__link" href="<?php echo esc_url(home_url('/')); ?>recruit_cat/kisotsu/">中途採用</a>
                                </li>
                                <li>
                                    <a class="c-header-dropdown-list__link" href="<?php echo esc_url(home_url('/')); ?>recruit_cat/keiyaku/">契約社員採用</a>
                                </li>
                                <li>
                                    <a class="c-header-dropdown-list__link" href="<?php echo esc_url(home_url('/')); ?>recruit_cat/fresh/">新卒採用</a>
                                </li>
                                <li>
                                    <a class="c-header-dropdown-list__link" href="<?php echo esc_url(home_url('/')); ?>recruit_cat/barrierfree/">障がい者採用</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="c-header-list-item<?php if (is_page('contact')) { echo ' is-current'; } ?>" href="<?php echo esc_url(home_url('/')); ?>contact/">お問い合わせ</a>
                        </li>
                    </ul>
                    <ul class="c-header-sns">
                        <li>
                            <a class="c-header-sns-item" href="https://twitter.com/intent/tweet?text=%E3%83%80%E3%83%9F%E3%83%BC%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%80%81%E3%81%93%E3%81%AE%E3%81%A6%E3%81%8D%E3%81%99%E3%81%A8%E3%81%AF%E3%81%A0%E3%81%BF%E3%83%BC%E3%81%A7%E3%81%99%E3%80%82https%3A%2F%2Fwww.hoge.co.jp%2Fhoge%2F" target="_blank">
                                <img src="https://placehold.jp/00ccff/ffffff/48x48.png?text=Twitter" alt="Twitter">
                            </a>
                        </li>
                        <li>
                            <a class="c-header-sns-item" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.hoge.co.jp%2Fhoge%2F" target="_blank">
                                <img src="https://placehold.jp/4800ff/ffffff/48x48.png?text=Facebook" alt="Facebook">
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </header>
    <!-- /header -->