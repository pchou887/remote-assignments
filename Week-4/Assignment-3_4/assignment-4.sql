SELECT article.title Title, article.content Content, user.email Author 
    FROM article
    INNER JOIN user ON article.user_id = user.id ORDER BY article.id;

SELECT * FROM article LIMIT 6, 6;