<?php

/**
 * The main template file
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
					the_post();

					the_content();
				}
			}
			?>
			<div class="c-mt20">
				<a class="c-btn c-btn--center" href="<?php echo esc_url(home_url('/')); ?>">
					<span class="c-btn-content c-btn-content--left">TOPページへ戻る</span>
				</a>
			</div>
		</div>
	</div>
</main>
	<?php
	get_footer();
