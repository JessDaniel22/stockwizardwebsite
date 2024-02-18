# Base code for the flask needs linking to the pages (will do later)


import sqlite3
from flask import Flask, login_required, render_template, request, url_for, flash, redirect
from flask_login import login_required, current_user, login_user, LoginManager, UserMixin, logout_user
from flask_mail import Mail

from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.exceptions import abort


app = Flask(__name__)
login_manager = LoginManager(app)
login_manager.login_view = 'auth.login'
login_manager.init_app(app)
mail = Mail(app)
app.config['SECRET_KEY'] = 'asdf' #secret key allows secure sessions
# SHOULD BE LONG RANDOM STRING SO CHANGE (maybe generate random string so not hardcoded?)


#############################
#IMPORT AND INITIALISE ANY DBs
# from DB_file import DB_name
#############################
# SORT RESETTING DBs
# resetdb = False
# if resetdb:
#     with app.app_context():
#         # drop everything, create all the tables, then put some data into the tables
#         db.drop_all()
#         db.create_all()
#############################


@login_manager.user_loader
def load_user(userID):
    pass
    #return User.query.get(int(userID)) 



################ MAIN ROUTING ################
#REDIRECT AFTER LOGIN RELATED FUNCTIONS (POST METHODS), RENDER TEMPLATE ELSE



@app.route('/')
def homepage():
    #############################
    #GET ALL NEWS ARTICLES
    #############################
    #GET ALL SENTIMENTS
    #############################
    #GET ALL SUMMARIES
    #############################
    
    articles = [] # TO BE REMOVED
    sentiments = [] # TO BE REMOVED
    summaries = [] # TO BE REMOVED
    return render_template('homepage.html', articles=articles, sentiments=sentiments, summaries=summaries)


@app.route('/<string:companyTicker>') #Allows for variable company ticker URLs
def companyInfo():
    #############################
    #GET ALL NEWS ARTICLES
    #############################
    #GET ALL DATA
    #############################

    articles = [] # TO BE REMOVED
    data = [] # TO BE REMOVED
    return render_template('companyInfo.html', articles=articles, data=data)


@app.route('/search_results_for_<string:searchQuery>/')
def search_results():
    #############################
    #GET ALL COMPANIES
    #############################
    return render_template('search.html')



################ AUTHENTICATED USERS ONLY PAGES ################



@app.route('/following_news')
@login_required
def followingNews():
    #############################
    #GET ALL NEWS ARTICLES
    #############################
    articles = [] # TO BE REMOVED
    return render_template('followingNews.html', articles=articles)
    

@app.route('/following_stocks')
@login_required
def followingStocks():
    #############################
    #GET ALL DATA
    #############################
    data = [] # TO BE REMOVED
    return render_template('followingNews.html', data=data)


@app.route('/follow_company')
@login_required
def followCompany():
    #############################
    #GET COMPANY TO FOLLOW 
    #############################
    #ADD INTO DB
    #############################
    return


@app.route('/unfollow_company')
@login_required
def unfollowCompany():
    #############################
    #GET COMPANY TO UNFOLLOW
    #############################
    #AMEND DB
    #############################
    return



################ LOGIN AND SIGN UP ROUTING ################



@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('/'))


@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('/following_news'))
    else:
        #############################
        #VERIFY LOGIN DETAILS WITH DB
        #############################

        validDetails = True ### TO BE REMOVED
        if validDetails:
            return redirect(url_for('/following_news'))
        else:
            #############################
            #DISPLAY ERROR MESSAGE
            #############################
            pass


@app.route('/signup', methods=['POST'])
def signup():
    # code to validate and add user to database goes here
    email = request.form.get('email')
    name = request.form.get('name')
    password = request.form.get('password')

    #############################
    #LOGIN DB CODE:
    # user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database
    #############################
    
    user = True ### TO BE REMOVED
    if user: # if a user is found, we want to redirect back to signup page so user can try again
        return redirect(url_for('login'))

    #############################
    #VALIDATION OF NEW USER CODE:
    #############################

    validDetails = True ### TO BE REMOVED
    if validDetails:
        return redirect(url_for('/following_news'))
    else:
        #############################
        #DISPLAY ERROR MESSAGE
        #############################
        pass
