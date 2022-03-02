import time
from flask import Flask, request
from wordle.game import Game
from wordle.guess import Guess 
import json 

app = Flask(__name__)
app.g = Game()

def init_game():
    app.g.api_init("wordle-answers-alphabetical.txt", "wordle-allowed-guesses.txt")
    print(len(app.g.full_word_list))
    # print(g.data)

@app.route('/words')
def get_words():
    init_game()
    return json.dumps(list(app.g.data.words))

# @app.route('/validate', methods=['GET'])
# def validate_word():
#     word = request.args.get('word')
#     return Guess.static_validate(word)    

@app.route('/filter', methods=['POST'])
def filter_words():
    # print(request.json)
    guess = request.json['text'].lower()
    mask = request.json['mask']
    words = list(request.json['words'].split(','))
    gg = Guess(None)
    # print(gg.full_word_list)
    words = gg.have_a_guess(guess, mask, words)
    return json.dumps(list(words))
