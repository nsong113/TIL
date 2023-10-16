#1. string
name = 'bob'

#2. number
num = 12 

#3. boolean
is_number = True 

#4. array, object
print(is_number)

#1. array 선언
a_list = ["사과", "배", "감"]  

#2. array index 값으로 출력
print(a_list[0])  

#3. append로 뒤에 추가
a_list.append('망고')
print(a_list) # ['사과', '배', '감', '망고']

#1. 빈 object 만들기
a_dict = {} 

#2. data 있는 object 만들기
#key는 무조건 문자열만 가능하고  ' ' 로 감싸져 있어야 함 (js는 그냥 쓰잖아)
a_dict = {'name':'영수','age':24}

#3. 출력
print(a_dict) #{'name':'영수','age':24}
print(a_dict['name']) #'영수