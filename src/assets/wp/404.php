<?php

/**
 * The 404 page file
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
            <p>404 Not Found</p>
            <p>お探しのページが見つかりませんでした。削除されたか、名前が変更されたか、または最初から存在しなかった可能性があります。</p>
		</div>
	</div>
</main>
	<?php
	get_footer();