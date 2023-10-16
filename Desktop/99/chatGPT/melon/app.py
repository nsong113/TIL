from flask import Flask, render_template
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

@app.route('/')
def home():
    #멜론 크롤링
    url = "https://www.melon.com/chart/"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(url, headers=headers)
    melon_data = BeautifulSoup(data.text, 'html.parser')

    #코드 작성
    melon_list=[]
    trs=melon_data.select('table>tbody>tr')
    for tr in trs:
        title=tr.select_one('.rank01>span>a').text
        singer=tr.select_one('.rank02>a').text
        rank=tr.select_one('.rank ')
        image=tr.select_one('table img')['src']
        final_data={
            'title':title,
            'singer':singer,
            'rank':rank,
            'img':image
        }
        melon_list.append(final_data)


    #html에 멜론 데이터 넘기기
    return render_template('index.html', data=melon_list)

if __name__ == '__main__':
    app.run(debug=True)