from flask import Flask, render_template, request, redirect, url_for, jsonify
app=Flask(__name__)

#db 기본 코드 
import os
from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'database.db')

db = SQLAlchemy(app)

class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    artist = db.Column(db.String(100), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(10000), nullable=False)

    def __repr__(self):
        return f'{self.title} {self.artist} 추천 by {self.username}'


with app.app_context():
    db.create_all()



@app.route("/")
def home():
    song_list=Song.query.all()
    return render_template("music.html", data=song_list)




@app.route('/music/create')
def music_create():
#form에서 보낸 데이터 받아오기
    username_receive=request.args.get('username')
    title_receive=request.args.get('title')
    artist_receive=request.args.get('artist')
    username_receive=request.args.get('username')
    image_receive=request.args.get('img_url')

#데이터를 db에 저장하기 
    song=Song(username=username_receive, title=title_receive, artist=artist_receive, image_url=image_receive)
    db.session.add(song)
    db.session.commit()
    #return redirect(url_for('render_music_filter',username=username_receive))
    return render_template('music_create', username=username_receive )



@app.route('/delete/<int:song_id>', methods=['POST'])
def delete_song(song_id):
    song = Song.query.get(song_id)
    if song:
        db.session.delete(song)
        db.session.commit()
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})



if __name__ == "__main__":
    app.run(debug=True)