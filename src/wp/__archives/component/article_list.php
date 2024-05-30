<?php
//---------------------------------------------------------------------------
// 投稿の一覧出力
// [myphp file='article_list']
//---------------------------------------------------------------------------
?>

<div class="c-article-card">
    <div class="c-article-card__content">
    <?php
    $args = array(
        'paged' => $paged,
        'post_type' => 'post', // 取得する投稿タイプのスラッグ
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
                // アイキャッチ画像を取得
                $thumbnail_id = get_post_thumbnail_id($post->ID);
                $thumb_url = wp_get_attachment_image_src($thumbnail_id, 'small');
                if (get_post_thumbnail_id($post->ID)) {
                    echo '<div class="c-article-card__head"><img src="' . $thumb_url[0] . '" alt=""></div>';
                } else {
                    // アイキャッチ画像が登録されていなかったときの画像
                    echo '<div class="c-article-card__head"><img src="' . get_template_directory_uri() . '/assets/img/common/no_image.png" alt="no image"></div>';
                }
                ?>
                <div class="c-article-card__body">
                    <h2 class="c-article-card__title">
                        <?php
                            // ターム名を表示
                            $terms = get_the_terms($post->ID, 'info_cat'); // タームが所属するタクソノミースラッグを指定
                            if (!empty($terms)) { // タームが複数選択されていたら区切りで表示
                                $output = array();
                                foreach ($terms as $term) {
                                    $output[] = $term->name;
                                }
                                if (count($output)) {
                                    echo '<span class="c-article-card-label">' . join(" | ", $output) . '</span>';
                                } else {
                                    echo '<span class="c-article-card-label">' . $term->name . '</span>';
                                }
                            } else {
                                // タームが無い場合は、カスタム投稿名を表示
                                $object = esc_html(get_post_type_object(get_post_type($post->ID))->label);
                                echo '<span class="c-article-card-label">' . $object . '</span>';
                            }
                        ?>
                        <?php echo get_the_title($post->ID); ?>
                    </h2>
                    <p class="c-article-card__text">
                        <?php
                            // 投稿テキストを取得し、HTMLタグとショートコードを削除して出力
                            $remove_array = ["\r\n", "\r", "\n", " ", "　"];
                            $content = wp_trim_words(strip_shortcodes(get_the_content()), 66, '…' );
                            $content = str_replace($remove_array, '', $content);
                            echo $content;
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