#!/usr/local/bin/python3
# https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming

from functools import reduce
import random


# ------------------------------------------------------------------------------
# Operating on a list

# Not Functional
names = ['Mary', 'Isla', 'Sam']
for i in range(len(names)):
    names[i] = hash(names[i])
print(names)

# Functional
names = ['Mary', 'Isla', 'Sam']
hashed_names = map(hash, names)
print(list(hashed_names))


# ------------------------------------------------------------------------------
# Computing the average

# Not Functional
people = [{'name': 'Mary', 'height': 160},
          {'name': 'Isla', 'height': 80},
          {'name': 'Sam'}]
height_total = 0
height_count = 0
for person in people:
    if 'height' in person:
        height_total += person['height']
        height_count += 1
if height_count > 0:
    average_height = height_total / height_count
print(average_height)

# Functional
people = [{'name': 'Mary', 'height': 160},
          {'name': 'Isla', 'height': 80},
          {'name': 'Sam'}]
heights = list(filter(lambda x: 'height' in x, people))
total_height = reduce(lambda a, x: a + x['height'], heights, 0)
if len(heights) > 0:
    average_height = total_height / len(heights)
print(average_height)


# ------------------------------------------------------------------------------
# Make it more declarative

# Original
def rule_sequence(s, rules):
    for rule in rules:
        s = rule(s)
        if s == None:
            break
    return s

# New
def rule_sequence2(s, rules):
    if s == None or not rules:
        return s
    rule_sequence2(rules[0](s), rules[1:])


# ------------------------------------------------------------------------------
# Pipelining

def assoc(_d, key, value):
    from copy import deepcopy
    d = deepcopy(_d)
    d[key] = value
    return d

# Higher Order Functions
def call(fn, key):
    def apply_fn(record):
        return assoc(record, key, fn(record.get(key)))
    return apply_fn

def pluck(keys):
    def pluck_fn(record):
        return reduce(lambda a, x: assoc(a, x, record[x]), keys, dict())
    return pluck_fn

# Pipeline
def pipeline_each(data, actions):
    return list(reduce(lambda a, x: map(x, a), actions, data))

set_canada_as_country = call(lambda x: 'Canada', 'country')
strip_punctuation_from_name = call(lambda x: x.replace('.', ''), 'name')
capitalize_names = call(str.title, 'name')
extract_name_and_country = pluck(['name', 'country'])

bands = [{'name': 'sunset rubdown', 'country': 'UK', 'active': False},
         {'name': 'women', 'country': 'Germany', 'active': False},
         {'name': 'a silver mt. zion', 'country': 'Spain', 'active': True}]

bands_refactored = pipeline_each(bands, [set_canada_as_country,
                                         strip_punctuation_from_name,
                                         capitalize_names,
                                         extract_name_and_country])
print(bands_refactored)

