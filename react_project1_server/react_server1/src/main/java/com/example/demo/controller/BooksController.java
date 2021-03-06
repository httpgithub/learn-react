package com.example.demo.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.demo.config.HttpClientConfig;
import com.example.demo.dao.model.Book;
import com.example.demo.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * <p/>Project Name:react_project1_server
 * <p/>cretate user:mayxys
 * <p/>Date:2019/1/22 15:26
 * <p/>Copyright (c) 2019, All Rights Reserved.
 */
@RestController
@RequestMapping("/books")
@Slf4j
public class BooksController {
    @Autowired
    private HttpClientConfig httpClientConfig;
    @Autowired
    private BookService bookService;

    private static String s = "[{\"small_image_url\":\"https://images.gr-assets.com/books/1361039443s/41865.jpg\",\"author\":{\"name\":\"Stephenie Meyer\",\"id\":\"941441\"},\"image_url\":\"http://img3m1.ddimg.cn/42/2/25859931-1_w_6.jpg\",\"id\":\"41865\",\"title\":\"Twilight (Twilight, #1)\"},{\"small_image_url\":\"https://images.gr-assets.com/books/1474154022s/3.jpg\",\"author\":{\"name\":\"J.K. Rowling\",\"id\":\"1077326\"},\"image_url\":\"http://img3m8.ddimg.cn/78/2/26475648-2_w_2.jpg\",\"id\":\"3\",\"title\":\"Harry Potter and the Sorcerer's Stone (Harry Potter, #1)\"},{\"small_image_url\":\"https://images.gr-assets.com/books/1328559506s/13335037.jpg\",\"author\":{\"name\":\"Veronica Roth\",\"id\":\"4039811\"},\"image_url\":\"http://img3m2.ddimg.cn/93/28/26456952-1_w_2.jpg\",\"id\":\"13335037\",\"title\":\"Divergent (Divergent, #1)\"}]";

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String search(@RequestParam String q) throws IOException {
		/*HttpGet httpGet = new HttpGet(String.format("https://www.goodreads.com/search/index.xml?key=JONkecpSbGjMjI0fCx6xYA&q=%s", q));
		httpGet.setHeader("Accept-Encoding", "gzip, deflate, br");
		httpGet.setHeader("Accept-Language", "zh-CN,zh;q=0.9");
		httpGet.setHeader("Connection", "keep-alive");
		httpGet.setHeader("Cookie", "csid=BAhJIhg4NjMtNTY4MjEyMS05MTI1ODUyBjoGRVQ%3D--5a8ee6c2b94e5e8d89000ba36e359e806fd8df68; locale=zh");
		httpGet.setHeader("Host", "www.goodreads.com");
		httpGet.setHeader("Upgrade-Insecure-Requests", "1");
		httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36");
		CloseableHttpResponse closeableHttpResponse = httpClientConfig.httpClientProxy().execute(httpGet);

		HttpEntity entity = closeableHttpResponse.getEntity();
		String s = EntityUtils.toString(entity, "UTF-8");*/
        //{ "GoodreadsResponse": { "Request": { "authentication": "true", "key": "JONkecpSbGjMjI0fCx6xYA", "method": "search_index" }, "search": { "query": "1", "results-start": "1", "results-end": "20", "total-results": "1279782", "source": "Goodreads", "query-time-seconds": "0.59", "results": { "work": [ { "id": "3212258", "books_count": "251", "ratings_count": "4338009", "text_reviews_count": "98163", "original_publication_year": "2005", "original_publication_month": "10", "original_publication_day": "5", "average_rating": "3.58", "best_book": { "id": "41865", "title": "Twilight (Twilight, #1)", "author": { "id": "941441", "name": "Stephenie Meyer" }, "image_url": "https://images.gr-assets.com/books/1361039443m/41865.jpg", "small_image_url": "https://images.gr-assets.com/books/1361039443s/41865.jpg" } }, { "id": "4640799", "books_count": "645", "ratings_count": "5730172", "text_reviews_count": "91611", "original_publication_year": "1997", "original_publication_month": "6", "original_publication_day": "26", "average_rating": "4.46", "best_book": { "id": "3", "title": "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)", "author": { "id": "1077326", "name": "J.K. Rowling" }, "image_url": "https://images.gr-assets.com/books/1474154022m/3.jpg", "small_image_url": "https://images.gr-assets.com/books/1474154022s/3.jpg" } }, { "id": "13155899", "books_count": "240", "ratings_count": "2532810", "text_reviews_count": "104300", "original_publication_year": "2011", "original_publication_month": "4", "original_publication_day": "25", "average_rating": "4.21", "best_book": { "id": "13335037", "title": "Divergent (Divergent, #1)", "author": { "id": "4039811", "name": "Veronica Roth" }, "image_url": "https://images.gr-assets.com/books/1328559506m/13335037.jpg", "small_image_url": "https://images.gr-assets.com/books/1328559506s/13335037.jpg" } }, { "id": "1708725", "books_count": "319", "ratings_count": "2226138", "text_reviews_count": "65186", "original_publication_year": "2005", "original_publication_month": "8", "original_publication_day": {"nil": "true"}, "average_rating": "4.13", "best_book": { "id": "2429135", "title": "The Girl with the Dragon Tattoo (Millennium, #1)", "author": { "id": "706255", "name": "Stieg Larsson" }, "image_url": "https://images.gr-assets.com/books/1327868566m/2429135.jpg", "small_image_url": "https://images.gr-assets.com/books/1327868566s/2429135.jpg" } }, { "id": "24732221", "books_count": "22", "ratings_count": "28906", "text_reviews_count": "743", "original_publication_year": "2012", "original_publication_month": "12", "original_publication_day": "4", "average_rating": "4.48", "best_book": { "id": "17694052", "title": "ワンパンマン 1 [Wanpanman 1] (Onepunch-Man, #1)", "author": { "id": "7020317", "name": "ONE" }, "image_url": "https://images.gr-assets.com/books/1364262171m/17694052.jpg", "small_image_url": "https://images.gr-assets.com/books/1364262171s/17694052.jpg" } }, { "id": "3338963", "books_count": "351", "ratings_count": "2331816", "text_reviews_count": "26816", "original_publication_year": "2000", "original_publication_month": "5", "original_publication_day": {"nil": "true"}, "average_rating": "3.88", "best_book": { "id": "960", "title": "Angels & Demons (Robert Langdon, #1)", "author": { "id": "630", "name": "Dan Brown" }, "image_url": "https://images.gr-assets.com/books/1527091700m/960.jpg", "small_image_url": "https://images.gr-assets.com/books/1527091700s/960.jpg" } }, { "id": "3204327", "books_count": "522", "ratings_count": "2052101", "text_reviews_count": "17906", "original_publication_year": "1954", "original_publication_month": "7", "original_publication_day": "29", "average_rating": "4.35", "best_book": { "id": "34", "title": "The Fellowship of the Ring (The Lord of the Rings, #1)", "author": { "id": "656983", "name": "J.R.R. Tolkien" }, "image_url": "https://images.gr-assets.com/books/1298411339m/34.jpg", "small_image_url": "https://images.gr-assets.com/books/1298411339s/34.jpg" } }, { "id": "14863741", "books_count": "171", "ratings_count": "679174", "text_reviews_count": "77866", "original_publication_year": "2011", "original_publication_month": "8", "original_publication_day": "16", "average_rating": "4.28", "best_book": { "id": "9969571", "title": "Ready Player One (Ready Player One, #1)", "author": { "id": "31712", "name": "Ernest Cline" }, "image_url": "https://images.gr-assets.com/books/1500930947m/9969571.jpg", "small_image_url": "https://images.gr-assets.com/books/1500930947s/9969571.jpg" } }, { "id": "2267189", "books_count": "209", "ratings_count": "1402973", "text_reviews_count": "55733", "original_publication_year": "2007", "original_publication_month": "3", "original_publication_day": "27", "average_rating": "4.11", "best_book": { "id": "256683", "title": "City of Bones (The Mortal Instruments, #1)", "author": { "id": "150038", "name": "Cassandra Clare" }, "image_url": "https://images.gr-assets.com/books/1432730315m/256683.jpg", "small_image_url": "https://images.gr-assets.com/books/1432730315s/256683.jpg" } }, { "id": "1466917", "books_count": "317", "ratings_count": "1694209", "text_reviews_count": "49713", "original_publication_year": "1996", "original_publication_month": "8", "original_publication_day": "6", "average_rating": "4.45", "best_book": { "id": "13496", "title": "A Game of Thrones (A Song of Ice and Fire, #1)", "author": { "id": "346732", "name": "George R.R. Martin" }, "image_url": "https://images.gr-assets.com/books/1436732693m/13496.jpg", "small_image_url": "https://images.gr-assets.com/books/1436732693s/13496.jpg" } }, { "id": "3178011", "books_count": "235", "ratings_count": "1260391", "text_reviews_count": "19948", "original_publication_year": "2002", "original_publication_month": "6", "original_publication_day": {"nil": "true"}, "average_rating": "3.88", "best_book": { "id": "113436", "title": "Eragon (The Inheritance Cycle, #1)", "author": { "id": "8349", "name": "Christopher Paolini" }, "image_url": "https://images.gr-assets.com/books/1366212852m/113436.jpg", "small_image_url": "https://images.gr-assets.com/books/1366212852s/113436.jpg" } }, { "id": "4790821", "books_count": "554", "ratings_count": "1835691", "text_reviews_count": "17880", "original_publication_year": "1950", "original_publication_month": "10", "original_publication_day": "16", "average_rating": "4.21", "best_book": { "id": "100915", "title": "The Lion, the Witch and the Wardrobe (Chronicles of Narnia, #1)", "author": { "id": "1069006", "name": "C.S. Lewis" }, "image_url": "https://images.gr-assets.com/books/1353029077m/100915.jpg", "small_image_url": "https://images.gr-assets.com/books/1353029077s/100915.jpg" } }, { "id": "3346751", "books_count": "193", "ratings_count": "1653854", "text_reviews_count": "51617", "original_publication_year": "2005", "original_publication_month": "6", "original_publication_day": "28", "average_rating": "4.24", "best_book": { "id": "28187", "title": "The Lightning Thief (Percy Jackson and the Olympians, #1)", "author": { "id": "15872", "name": "Rick Riordan" }, "image_url": "https://images.gr-assets.com/books/1400602609m/28187.jpg", "small_image_url": "https://images.gr-assets.com/books/1400602609s/28187.jpg" } }, { "id": "15732562", "books_count": "198", "ratings_count": "1630501", "text_reviews_count": "76805", "original_publication_year": "2011", "original_publication_month": "6", "original_publication_day": "20", "average_rating": "3.66", "best_book": { "id": "10818853", "title": "Fifty Shades of Grey (Fifty Shades, #1)", "author": { "id": "4725841", "name": "E.L. James" }, "image_url": "https://images.gr-assets.com/books/1385207843m/10818853.jpg", "small_image_url": "https://images.gr-assets.com/books/1385207843s/10818853.jpg" } }, { "id": "849585", "books_count": "327", "ratings_count": "937737", "text_reviews_count": "18177", "original_publication_year": "1977", "original_publication_month": "1", "original_publication_day": "28", "average_rating": "4.20", "best_book": { "id": "11588", "title": "The Shining (The Shining, #1)", "author": { "id": "3389", "name": "Stephen King" }, "image_url": "https://images.gr-assets.com/books/1353277730m/11588.jpg", "small_image_url": "https://images.gr-assets.com/books/1353277730s/11588.jpg" } }, { "id": "2792775", "books_count": "311", "ratings_count": "5605359", "text_reviews_count": "161173", "original_publication_year": "2008", "original_publication_month": "9", "original_publication_day": "14", "average_rating": "4.33", "best_book": { "id": "7285601", "title": "The Hunger Games (The Hunger Games, #1)", "author": { "id": "153394", "name": "Suzanne Collins" }, "image_url": "https://images.gr-assets.com/books/1327962782m/7285601.jpg", "small_image_url": "https://images.gr-assets.com/books/1327962782s/7285601.jpg" } }, { "id": "3078186", "books_count": "294", "ratings_count": "1185266", "text_reviews_count": "24575", "original_publication_year": "1979", "original_publication_month": "10", "original_publication_day": "12", "average_rating": "4.22", "best_book": { "id": "386162", "title": "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)", "author": { "id": "4", "name": "Douglas Adams" }, "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png", "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png" } }, { "id": "3295655", "books_count": "640", "ratings_count": "641961", "text_reviews_count": "24990", "original_publication_year": "1967", "original_publication_month": "6", "original_publication_day": "5", "average_rating": "4.06", "best_book": { "id": "320", "title": "One Hundred Years of Solitude", "author": { "id": "13450", "name": "Gabriel García Márquez" }, "image_url": "https://images.gr-assets.com/books/1327881361m/320.jpg", "small_image_url": "https://images.gr-assets.com/books/1327881361s/320.jpg" } }, { "id": "265616", "books_count": "123", "ratings_count": "836816", "text_reviews_count": "25348", "original_publication_year": "1958", "original_publication_month": {"nil": "true"}, "original_publication_day": {"nil": "true"}, "average_rating": "4.31", "best_book": { "id": "1617", "title": "Night (The Night Trilogy, #1)", "author": { "id": "1049", "name": "Elie Wiesel" }, "image_url": "https://images.gr-assets.com/books/1473495285m/1617.jpg", "small_image_url": "https://images.gr-assets.com/books/1473495285s/1617.jpg" } }, { "id": "2422333", "books_count": "238", "ratings_count": "983289", "text_reviews_count": "40577", "original_publication_year": "1985", "original_publication_month": {"nil": "true"}, "original_publication_day": {"nil": "true"}, "average_rating": "4.30", "best_book": { "id": "375802", "title": "Ender's Game (Ender's Saga, #1)", "author": { "id": "589", "name": "Orson Scott Card" }, "image_url": "https://images.gr-assets.com/books/1408303130m/375802.jpg", "small_image_url": "https://images.gr-assets.com/books/1408303130s/375802.jpg" } } ] } } } }


        JSONArray resultJSONArray = JSON.parseArray(s);


        log.info("result:{}", resultJSONArray.toJSONString());
        return resultJSONArray.toJSONString();
    }

    @RequestMapping("/fetchPages")
    public JSONObject fetchPages(@RequestParam String goodreadsId) {
        JSONArray resultJSONArray = JSON.parseArray(s);
        goodreadsId = Objects.isNull(goodreadsId) ? "" : goodreadsId;
        String finalGoodreadsId = goodreadsId;
        Optional<Object> o = resultJSONArray.stream().filter(d -> (finalGoodreadsId.equals(((JSONObject) d).getString("id")))).findFirst();
        return (JSONObject) o.orElse(null);
    }

    @RequestMapping("/fetchAll")
    public List<Book> getBooksByEmail(@RequestParam String email) {
        return bookService.getBooksByEmail(email);
    }

    @RequestMapping("/createBook")
    public JSONObject createBook(@RequestBody Book book,@RequestHeader("authorization") String authorization) {
        DecodedJWT jwt = UserController.decode(authorization.split(" ")[1]);
        String email = JSON.parseObject(jwt.getSubject()).get("email")+"";
        bookService.saveBook(email,book);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("returnCode", "000000");
        jsonObject.put("returnMessage", "success");
        return jsonObject;
    }


}
