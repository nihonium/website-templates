<?php

/**
 * Archives page template file
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
				$archiveTitle = '中途採用';
				$postType = 'recruit';
				$taxonomySlug = 'recruit_cat';
				$termsSlug = 'kisotsu';
				include(get_template_directory() . '/include/taxonomy_list.php');
			?>
		</div>
	</div>
</main>
<?php
get_footer();
