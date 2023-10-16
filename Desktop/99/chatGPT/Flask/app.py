from flask import Flask, render_template, request
import random
import requests
app = Flask(__name__)


@app.route('/')
def home():
    name = '송지우'
    lotto = [7, 10, 19, 34, 40, 44]

    # random lotto
    def generate_lotto_numbers():
        numbers = random.sample(range(1, 46), 6)
        return sorted(numbers)

    random_lotto = generate_lotto_numbers()
    print("추출된 로또 번호:", random_lotto)
    # random lotto ends

    # 똑같은게 몇개인지
    def count_common_elements(lotto, random_lotto):
        common_elements = set(lotto) & set(random_lotto)
        return len(common_elements)

    common_count = count_common_elements(lotto, random_lotto)
    print("두 리스트에서 공통된 요소의 개수:", common_count)
    # 똑같은게 몇개인지 ends

    context = {
        'name': name,
        'lotto': lotto,
        'random_lotto': random_lotto,
        'common_count': common_count,
    }

    return render_template('index.html', data=context)


@app.route('/mypage')
def mypage():
    return 'This is mypage!'


# movie
@app.route('/movie')
def movie():
    query = request.args.get('query')

    res = requests.get(
        f"http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&movieNm={query}"
    )
    rjson = res.json()
    movie_list = rjson["movieListResult"]["movieList"]

    return render_template('movie.html', data=movie_list)
# movie ends


if __name__ == '__main__':
    app.run(debug=True)
