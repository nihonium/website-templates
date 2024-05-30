<?php
//---------------------------------------------------------------------------
// taxonomy-***.php 共通コード
//---------------------------------------------------------------------------
?>

<p class="c-highlight c-strong">タクソノミー アーカイブページ | <?php echo $archiveTitle ?></p>
<div class="c-article-card">
    <div class="c-article-card__content">
    <?php
        $paged = get_query_var('paged') ? get_query_var('paged') : 1;
        $args = array (
            'paged' => $paged,
            'post_type' => $postType,
            'posts_per_page' => 6,
            'tax_query' => array(
            array(
                    'taxonomy' => $taxonomySlug, //タクソノミーを指定
                    'field' => 'slug', //ターム名をスラッグで指定する
                    'terms' => $termsSlug, //表示したいタームをスラッグで指定
                    'operator' => 'IN'
                ),
            )
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
                                $terms = get_the_terms($post->ID, $taxonomySlug); // タームが所属するタクソノミースラッグを指定

                                // タームが無い場合は、カスタム投稿名を表示
                                $object = esc_html(get_post_type_object(get_post_type($post->ID))->label);
                                echo '<span class="c-article-card-label c-article-card-label--' .$cp_slug. '">' . $object . '</span>';

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
                            <?php echo get_the_title($post->ID); ?>
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
<div class="c-mt20">
    <?php if(function_exists('wp_pagenavi')) wp_pagenavi(array('query' => $my_query));?>
</div>

<?php // タクソノミー名を表示
    $taxonomy_slug = get_query_var('taxonomy'); // タクソノミースラッグを取得
    $taxonomy_var = get_taxonomy($taxonomy_slug); // タクソノミーの情報を取得
?>

<div class="c-mt60">
    <a class="c-btn c-btn--center" href="<?php echo esc_url(home_url('/')) . $postType; ?>">
        <span class="c-btn-content c-btn-content--left"><?php echo $taxonomy_var->label; ?>一覧へ戻る</span>
    </a>
</div>
<!-- /記事一覧 -->