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
		</div>
	</div>
</main>
	<?php
	get_footer();
