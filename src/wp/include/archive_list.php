<?php
//---------------------------------------------------------------------------
// archive-***.php 共通コード
//---------------------------------------------------------------------------
?>

<p class="c-highlight c-strong">アーカイブページ | <?php echo $archiveTitle ?></p>
<?php
    // タクソノミーがある場合はリンク一覧を表示
    $taxonomy_names = get_object_taxonomies(get_post($post->ID));

    if (!empty($taxonomy_names[1])) {
        $termsList = get_terms($taxonomy_names[1]);
        foreach ( $termsList as $termList ){
            echo '<div class="c-mt10"><a class="c-link" href="'.get_term_link($termList->slug,$taxonomy_names[1]).'">'.$termList->name.'</a></div>';
        }
    }
?>
<div class="c-article-card">
    <div class="c-article-card__content">
        <?php
            $paged = get_query_var('paged')? get_query_var('paged') : 1;
            $args = array(
                'paged' => $paged,
                'post_type' => array($archiveType), // 取得する投稿タイプのスラッグ
                'orderby' => 'date', //日付で並び替え
                'order' => 'DESC', // 降順 or 昇順
                'posts_per_page' => 6 // 1ページ内の表示数
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
<div class="c-mt20">
    <?php if(function_exists('wp_pagenavi')) wp_pagenavi(array('query' => $my_query));?>
</div>
<!-- /記事一覧 -->