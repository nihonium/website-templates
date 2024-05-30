<?php

/**
 * front page template file
 *
 * @package [template]
 * @since 1.0.0
 */

get_header();
?>
<div class="c-slider-area">
	<div class="c-slider">
		<div class="c-slider__content" data-slider-mv>
			<?php if( have_rows('mv_slider01') ): ?>
				<div class="c-slider__item">
				<?php while( have_rows('mv_slider01') ): the_row(); 
					$image = get_sub_field('mv_slider_image');
					$imageSP = get_sub_field('mv_slider_image_sp');
					$size = 'slider';
					$sizeSP = 'slider-sp';
					$src = $image['sizes'][$size];
					$srcSP = $imageSP['sizes'][$sizeSP];
					$link = get_sub_field('mv_slider_url');
					$alt = get_sub_field('mv_slider_alt');
					$width = $image['sizes'][$size . '-width'] / 2;
					$height = $image['sizes'][$size . '-height'] / 2;
				?>
					<?php if($image && $imageSP && $link) : ?>
						<a class="c-slider__link" href="<?php echo esc_url( $link ); ?>">
							<picture>
								<source srcset="<?php echo $srcSP ?>" media="(max-width: 767px)">
								<img src="<?php echo $src ?>" <?php echo esc_attr( $alt ); ?> width="<?php echo $width ?>" height="<?php echo $height ?>">
							</picture>
						</a>
					<?php elseif (($image) && ($imageSP) && (! $link)) :?>
						<picture>
							<source srcset="<?php echo $srcSP ?>" media="(max-width: 767px)">
							<img src="<?php echo $src ?>" <?php echo esc_attr( $alt ); ?> width="<?php echo $width ?>" height="<?php echo $height ?>">
						</picture>
					<?php elseif($image && $link) : ?>
						<div class="c-slider__item">
							<a class="c-slider__link" href="<?php echo esc_url( $link ); ?>">
								<img src="<?php echo $src ?>" alt="<?php echo esc_attr( $alt ); ?>">
							</a>
						</div>
					<?php elseif (($image) && (! $link)) :?>
						<div class="c-slider__item">
							<img src="<?php echo $src ?>" alt="<?php echo esc_attr( $alt ); ?>">
						</div>
					<?php endif; ?>
				<?php endwhile; ?>
				</div>
			<?php endif; //スライダー画像01 ?>

			<?php if( have_rows('mv_slider02') ): ?>
				<div class="c-slider__item">
				<?php while( have_rows('mv_slider02') ): the_row(); 
					$image = get_sub_field('mv_slider_image');
					$imageSP = get_sub_field('mv_slider_image_sp');
					$size = 'slider';
					$sizeSP = 'slider-sp';
					$src = $image['sizes'][$size];
					$srcSP = $imageSP['sizes'][$sizeSP];
					$link = get_sub_field('mv_slider_url');
					$alt = get_sub_field('mv_slider_alt');
					$width = $image['sizes'][$size . '-width'] / 2;
					$height = $image['sizes'][$size . '-height'] / 2;
				?>
					<?php if($image && $imageSP && $link) : ?>
						<a class="c-slider__link" href="<?php echo esc_url( $link ); ?>">
							<picture>
								<source srcset="<?php echo $srcSP ?>" media="(max-width: 767px)">
								<img src="<?php echo $src ?>" <?php echo esc_attr( $alt ); ?> width="<?php echo $width ?>" height="<?php echo $height ?>">
							</picture>
						</a>
					<?php elseif (($image) && ($imageSP) && (! $link)) :?>
						<picture>
							<source srcset="<?php echo $srcSP ?>" media="(max-width: 767px)">
							<img src="<?php echo $src ?>" <?php echo esc_attr( $alt ); ?> width="<?php echo $width ?>" height="<?php echo $height ?>">
						</picture>
					<?php elseif($image && $link) : ?>
						<div class="c-slider__item">
							<a class="c-slider__link" href="<?php echo esc_url( $link ); ?>">
								<img src="<?php echo $src ?>" alt="<?php echo esc_attr( $alt ); ?>">
							</a>
						</div>
					<?php elseif (($image) && (! $link)) :?>
						<div class="c-slider__item">
							<img src="<?php echo $src ?>" alt="<?php echo esc_attr( $alt ); ?>">
						</div>
					<?php endif; ?>
				<?php endwhile; ?>
				</div>
			<?php endif; //スライダー画像02 ?>

			<?php if( (get_sub_field('mv_slider_image') || get_sub_field('mv_slider_image_sp')) ): ?>
				<div class="c-slider__item">
				<?php while( have_rows('mv_slider03') ): the_row(); 
					$image = get_sub_field('mv_slider_image');
					$imageSP = get_sub_field('mv_slider_image_sp');
					$size = 'slider';
					$sizeSP = 'slider-sp';
					$src = $image['sizes'][$size];
					$srcSP = $imageSP['sizes'][$sizeSP];
					$link = get_sub_field('mv_slider_url');
					$alt = get_sub_field('mv_slider_alt');
					$width = $image['sizes'][$size . '-width'] / 2;
					$height = $image['sizes'][$size . '-height'] / 2;
				?>
					<?php if($image && $imageSP && $link) : ?>
						<a class="c-slider__link" href="<?php echo esc_url( $link ); ?>">
							<picture>
								<source srcset="<?php echo $srcSP ?>" media="(max-width: 767px)">
								<img src="<?php echo $src ?>" <?php echo esc_attr( $alt ); ?> width="<?php echo $width ?>" height="<?php echo $height ?>">
							</picture>
						</a>
					<?php elseif (($image) && ($imageSP) && (! $link)) :?>
						<picture>
							<source srcset="<?php echo $srcSP ?>" media="(max-width: 767px)">
							<img src="<?php echo $src ?>" <?php echo esc_attr( $alt ); ?> width="<?php echo $width ?>" height="<?php echo $height ?>">
						</picture>
					<?php elseif($image && $link) : ?>
						<div class="c-slider__item">
							<a class="c-slider__link" href="<?php echo esc_url( $link ); ?>">
								<img src="<?php echo $src ?>" alt="<?php echo esc_attr( $alt ); ?>">
							</a>
						</div>
					<?php elseif (($image) && (! $link)) :?>
						<div class="c-slider__item">
							<img src="<?php echo $src ?>" alt="<?php echo esc_attr( $alt ); ?>">
						</div>
					<?php endif; ?>
				<?php endwhile; ?>
				</div>
			<?php endif; //スライダー画像03 ?>
		</div>
	</div>
</div>
<!-- /Slider -->
<main id="main" class="c-main">
	<div class="c-section">
		<div class="c-section__content">
			<?php
			if (have_posts()) {

				while (have_posts()) {
					the_post();

					the_content();
				}
			}
			?>

			<div class="c-article-card">
				<div class="c-article-card__content">
				<?php
					// すべてのカスタム投稿タイプ名（スラッグ）を取得
					$public = [
						'public' => true,
						'_builtin' => false
					];
					$result = get_post_types($public);

					$args = array(
						'paged' => $paged,
						'post_type' => $result, // 取得する投稿タイプのスラッグ
						'orderby' => 'date', //日付で並び替え
						'order' => 'DESC', // 降順 or 昇順
						'posts_per_page' => 6 // 表示する投稿数
					);
					$my_query = new WP_Query($args);
					if ($my_query->have_posts()) :
					while ($my_query->have_posts()) : $my_query->the_post();
				?>
				<article class="c-article-card__item">
					<a class="c-article-card__link" href="<?php echo get_permalink($post->ID); ?>">
						<?php
							// キービジュアル
							$image = get_field('kv');
							$size = 'single-thumbnail';
							$src = $image['sizes'][$size];
							$width = $image['sizes'][$size . '-width'] / 2;
							$height = $image['sizes'][$size . '-height'] / 2;

							if ($image) {
								echo '<div class="c-article-card__head"><img src="' . $src . '" width="' . $width .'" height="' . $height . '" alt=""></div>';
							} else {
								// 画像が登録されていなかったときの画像
								echo '<div class="c-article-card__head"><img src="' . get_template_directory_uri() . '/assets/img/common/no_image.png" width="320" height="240" alt="no image"></div>';
							}
						?>
						<div class="c-article-card__body">
							<h2 class="c-article-card__title">
								<?php
									// スラッグ名を取得
									$cp_slug = esc_html(get_post_type_object(get_post_type($post->ID))->name);

									// ターム名を表示
									$taxonomy_names = get_object_taxonomies(get_post($post->ID));
									$terms = get_the_terms($post->ID, $taxonomy_names[1]); // タームが所属するタクソノミースラッグを指定

									// カスタム投稿名を表示
									$object = esc_html(get_post_type_object(get_post_type($post->ID))->label);

									echo '<span class="c-article-card-label c-article-card-label--' . $cp_slug . '">' . $object . '</span>';

									if (!empty($terms)) { // ターム名を出力
										$output = array();
										foreach ($terms as $term) {
											$output[] = $term->name;
										}
										for ($count = 0; $count < count($output); $count++) {
											echo '<span class="c-article-card-label c-article-card-label--' .$cp_slug. '-cat">' . $output[$count]. '</span>';
										}
									}
								?>
								<span><?php echo get_the_title($post->ID); ?></span>
							</h2>
							<p class="c-article-card__text">
								<?php
									// リード文
									$field_lead = get_field('lead');
									$field_lead_trim = wp_trim_words($field_lead, 30 , '…' );

									if($field_lead) {
										echo $field_lead_trim;
									}
								?>
							</p>
							<span class="c-article-card__data"><?php the_time('Y.m.d') ?></span>
						</div>
					</a>
				</article>
				<?php endwhile; ?>
				<?php wp_reset_query();endif; ?>
				</div>
			</div>
		</div>
	</div>
</main>
	<?php
	get_footer();
