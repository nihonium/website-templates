<?php

/**
 * Single template file
 *
 * @package [template]
 * @since 1.0.0
 */

get_header();
?>

<main id="main" class="c-main">
	<div class="c-section">
		<div class="c-section__content">

			<?php
			if (have_posts()) {

				while (have_posts()) {
					// 見出しを取得
					$the_title = '<br><span class="c-single-title-main">' . get_the_title() . '</span></h2>';

					// スラッグ名を取得
					$cp_slug = esc_html(get_post_type_object(get_post_type($post->ID))->name);

					// URLを取得
					$cp_slug_path = esc_url(home_url('/')) . get_query_var('post_type');

					// ターム名を表示
					$taxonomy_names = get_object_taxonomies(get_post($post->ID));
					$terms = get_the_terms($post->ID, $taxonomy_names[1]); // タームが所属するタクソノミースラッグを指定
					$terms_name = '';

					// カスタム投稿名を取得
					$object = esc_html(get_post_type_object(get_post_type($post->ID))->label);
					$object_label = '<h2 class="c-single-title"><a class="c-single-title-label c-single-title-label--' .$cp_slug. '" href="' . $cp_slug_path . '">' . $object . '</a>';

					if (!empty($terms)) { // ターム名とURLを取得
						$output_name = array();
						$output_url = array();
						foreach ($terms as $term) {
							$output_name[] = $term->name;
							$output_url[] = esc_url(home_url('/')) . $taxonomy_names[1] . '/' .$term->slug;
						}
						for ($count = 0; $count < count($output_name); $count++) {
							$terms_label .= '<a class="c-single-title-label c-single-title-label--' .$cp_slug. '-cat" href="' . $output_url[$count] . '">' . $output_name[$count]. '</a>';
						}
					}

					echo $object_label . $terms_label . $the_title;

					// キービジュアル
					$field_kv = get_field('kv');
					$size = 'single-kv';
					$src = $field_kv['sizes'][$size];
					$width = $field_kv['sizes'][$size . '-width'] / 2;
					$height = $field_kv['sizes'][$size . '-height'] / 2;
					$field_kv_alt = get_field('kv_alt');
					$field_kv_caption = get_field('kv_caption');

					if($field_kv_caption && $field_kv) {
						echo '<figure class="c-single-figure"><img src="'. $src . '" alt="' . $field_kv_alt . '" width="' . $width .'" height="' . $height . '"><figcaption class="c-single-figure__text">' . $field_kv_caption . '</figcaption></figure>';
					} elseif ($field_kv){
						echo '<figure class="c-single-figure"><img src="'. $src . '" alt="' . $field_kv_alt . '" width="' . $width .'" height="' . $height . '"></figure>';
					}

					// リード文
					$field_lead = get_field('lead');
					if($field_lead) {
						echo '<div class="c-single-text">'. $field_lead .'</div>';
					}

					the_post();
					the_content();
				}
			}
			?>

			<?php
				$prev_post = get_previous_post(); // 前の投稿を取得
				$next_post = get_next_post(); // 次の投稿を取得
			?>
			<?php if( $prev_post || $next_post ): //次の記事か前の記事かどちらかあれば ?>
			<ul class="c-post-list">
				<?php if ($prev_post): // 前の記事 ?>
				<li class="c-post-list-item c-post-list-item--prev">
					<a class="c-post-list-link" href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>">
						<span class="c-post-list-link__strong">前の投稿</span><br><span class="c-post-list-link__title"><?php echo get_the_title($prev_post->ID); ?></span>
					</a>
				</li>
				<?php endif; ?>
				<?php if ($next_post): // 次の記事 ?>
				<li class="c-post-list-item c-post-list-item--next">
					<a class="c-post-list-link" href="<?php echo esc_url(get_permalink($next_post->ID)); ?>">
						<span class="c-post-list-link__strong">次の投稿</span><br><span class="c-post-list-link__title"><?php echo get_the_title($next_post->ID); ?></span>
					</a>
				</li>
				<?php endif; ?>
			</ul>
			<?php endif; ?>

			<?php
			// 現在のページURLを取得してURLエンコード
			$url_encode = urlencode( get_permalink() );
			// 現在のページのタイトルを取得してURLエンコード
			$title_encode = urlencode( get_the_title() );

			$tw_intent = 'https://twitter.com/intent/tweet?&text=' . $title_encode . '&url=' . $url_encode;
			?>

			<ul class="sns-list c-mt40">
				<li class="sns-twitter">
					<a class="sns-link c-link" href="<?php echo ($tw_intent); ?>" target="_blank" rel="nofollow noopener">Twitter</a>
				</li>
				<li class="sns-fb">
					<a class="sns-link c-link" href="<?php echo esc_url( 'https://www.facebook.com/sharer/sharer.php?u=' . $url_encode ); ?>" target="_blank" rel="nofollow noopener">Facebook</a>
				</li>
				<li class="sns-line">
					<a class="sns-link c-link" href="<?php echo esc_url( 'https://social-plugins.line.me/lineit/share?url=' . $url_encode ); ?>" target="_blank" rel="nofollow noopener">LINE</a>
				</li>
			</ul>
		</div>
	</div>
</main>
	<?php
	get_footer();