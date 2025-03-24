---
title: Rules
thumbnail: /assets/thumbnails/looking-at-papers.jpeg
---

## Rules

### Definitions

- GAPC: The Groningen Algorithm Programming Contest 2025
- Organisation: The event is organised by the members and friends of Fully Connected Graph
- Website: The website is maintained by the organisation and available at <a href="https://gapc.svcover.nl/" target="_blank">here</a>.
- Discord: The GAPC discord is the FCG discord <a href="https://discord.com/invite/JfzxyBHPsH" target="_blank">FCG Discord</a>.
- Jury: The group responsible for creating the problem set and checking the solutions submitted by the participants.
- Technical staff: The group of people responsible for the system (the digital environment, jury system, printing, etc.).
- Runners: Volunteers responsible for answering questions and other tasks supervised by the organisation.
- Crew: Organisation, Jury, Technical staff and Runners.
- Participant: Member of a participating team that competes in the GAPC.

## Contact

For any questions related to the contest, please contact the organiser either by sending a message on the GAPC discord or by sending an email to programming_committee@svcover.nl.

## Participation

### Introduction

- Participation is made in teams of 1, 2 or 3 persons.
- The team captain is the only one who needs to register the team.
- You can register alone and then be added to a random team.

### Teams

This is an open contest to all students within Groningen region.

All the teams:

- Participate for free.
- Participate in the teams' pool for the title “Winner of the Groningen Algorithm Programming Contest 2025”.

### Photos and videos

There will be 1 or more people that will capture digital content (photo, video etc). The materials will be made publicly available afterwards. If you do not want to appear in the photos or want to be removed from them afterwards, please contact the organisation.

## Contest

### Introduction

- The language of the contest is English. All written contest materials will be in English.
- The contest lasts for 4 hours.
- From the beginning until one hour before the end of the GAPC, the scores are displayed.
- A team is allowed a dictionary from English to their native language. The dictionary should have no notes written in them.
- A team is allowed to bring up to 25 A4-sized pages, printed one-sided or up to 12.5 A4-sized pages, printed two-sided, of documentation. Each team member is allowed one identical copy. Text and illustrations must be readable by a person with correctable eyesight without magnification from a distance of ½ meter. It may include handwritten comments and corrections on the fronts of pages only. The team name must be written on the front page.
- A team is allowed to bring one non-programmable wired mouse and/or keyboard. The keyboard and/or mouse needs to be handed-in during the Teams check-in session, to be checked by the jury.
- The TCR and/or dictionary needs to be handed-in during the Teams check-in session, to be checked by the jury.

### Problems

- At least six problems will be posted. The jury intends to develop problems with minimal dependence on detailed knowledge of a particular application area or a particular contest language.
- A contestant may submit a claim of ambiguity or error for a problem statement by submitting a clarification request to a judge. If the judges agree that an ambiguity or error exists, a clarification will be issued to all contestants.
- The jury has the right to change or withdraw problems during the contest before informing all teams.
- A solution for a problem has to be written in C99, C++ (version 14 or later will be available), Python (versions 3 will be available), Java (version 11 or later), unless problem statement explicitly states otherwise.

# System

- A team is disqualified if they submit a harmful code that disrupts the contest.
- A submission can use the standard library of the language, which means that libraries such as "numpy" are not available.

## Contest machine

- The contest machine is provided by the organisers and it will be a HP 450 G8 laptop (Intel Core i5-1135G7 Processor, 4 cores (HT disabled), 2.4 GHz, turbo disabled, 8GB RAM) (subject to change).

## Software

### OS

- Ubuntu 22.04 LTS

### Desktop

- GNOME

### Editors

- vim
- gvim
- nano
- neovim
- emacs
- gedit
- geany
- kate

### IDEs

o IntelliJ IDEA Community

- Version: 2023.3.2
- Workspace is set up
- Plugins:
  - IdeaVim

o CLion

- Version: 2023.3.2
- Workspace is set up
- Plugins:
  - IdeaVim

o PyCharm Community

- Version: 2023.3.2
- Workspace is set up
- Plugins:
  - IdeaVim

o Visual Studio Code

- Version: 1.88.1
- Plugins:
  - C/C++ - Microsoft
  - C# - Microsoft
  - Code Runner - Jun Han
  - Debugger for Java - Microsoft
  - ESLint - Dirk Baeumer
  - Language Support for Java - Red Hat
  - Pylance - Microsoft
  - Python - Microsoft
  - Python Debugger - Microsoft
  - TSLint - Microsoft

o Code::Blocks

- Version: 20.03

## Languages

The following languages are allowed during the contest:

o C

- Compiler version: 11.4.0
- Standard: gnu17

o C++

- Compiler version: 11.4.0
- Standard: gnu++20

o Python

- Version: PyPy 7.3.9 (Python 3.8.13)

o Java

- Version: 11.0.22

## Compilation of Submissions

During the contest, teams will submit proposed solutions to the contest problems to the Judges using the DOMjudge contest control system (version 8.1). This can be done through the web interface, or using the submit client. Source files submitted to the Judges will be compiled using the following command line arguments for the respective language:

o C:

- gcc -std=gnu17 -x c -Wall -O2 -static -pipe -o $1 "$1.c" -lm

o C++:

- g++ -std=gnu++20 -x c++ -Wall -O2 -static -pipe -o $1 "$1.cpp" -lm

o Python 3:

- pypy3 $@

o Java:

- javac -encoding UTF-8 -sourcepath . -d . $@

## Execution of Submissions

- For each language, if the above compilation step is successful then the submission will be executed as follows:
- For C/C++: the executable file generated by the compiler will be executed to generate the output of the submission.
- For Python 3: the main source file will be executed by the PyPy3 Python3 interpreter to generate the output of the submission.
- For Java: the compiled main class will be executed using the following command:
  java -Dfile.encoding=UTF-8 -XX:+UseSerialGC -Xss65536k -Xms1966080k -Xmx1966080k $@

Compilation and execution as described above will take place in a “sandbox” on a dedicated judging machine. The judging machine will be identical to the machines used by teams (see Hardware).

The sandbox will allocate 2 GiB of memory; the entire program, including its runtime environment, must execute within this memory limit. For interpreted languages (Python, Java, and Kotlin) the runtime environment includes the interpreter (that is, the PyPy3 interpreter for Python and the JVM for Java/Kotlin). The sandbox memory allocation size will be the same for all languages and all contest problems. For Java and Kotlin, the above commands show the stack size and heap size settings that will be used when the program is run in the sandbox.

## Documentation / Specification / Reference material

The following reference materials will be available on the teams’ workstations through the browser:

- C reference from cppreference.com
- C++ reference from cppreference.com
- Python 3.8.13 documentation
- Java® Platform, Standard Edition & Java Development Kit Version 17 API Specification
- DOMjudge Team Manual (As PDF)

## Judgement

- Each run is judged as accepted or rejected by the judging system, and the team is notified of the results.
- For each problem, the jury has a correct solution and test data.
- The winner of the pool is decided by (in order):
  - The team with the most solved problems.
  - The team with the least total time. The total time is the sum of the time elapsed from the beginning of the contest to the submission of the accepted run, plus 20 penalty minutes for every rejected run for that problem regardless of the submission time. Time is not consumed when the problem is not solved.
  - The team that first submitted its last accepted problem is ranked higher. When a tie still remains, the team that first submitted its second-last accepted problem is ranked higher, and so on. When this does not resolve the tie, the ranks will be determined by chance.
- The problem set is the responsibility of the jury.
- The jury must be contacted through a “Clarification Request”.

## Judging system

- As a judging system, we will be using DomJudge. After making a submission to the judging system, the possible messages that can be received per submission are:

  - CORRECT The submission passed all tests: you solved this problem! Correct submissions do not incur penalty time.
  - COMPILER-ERROR There was an error when compiling your program. Note that when compilation takes more than 30 seconds, it is aborted and this counts as a compilation error. Compilation errors do not incur penalty time.
  - TIMELIMIT Your program took longer than the maximum allowed time for this problem. Therefore it has been aborted. This might indicate that your program hangs in a loop or that your solution is not efficient enough.
  - RUN-ERROR There was an error during the execution of your program. This can have a lot of different causes like division by zero, incorrectly addressing memory (e.g. by indexing arrays out of bounds), trying to use more memory than the limit, etc. Also check that your program exits with exit code 0!
  - NO-OUTPUT Your program did not generate any output. Check that you write to standard out.
  - OUTPUT-LIMIT Your program generated more output than the allowed limit. The output was truncated and considered incorrect.
  - WRONG-ANSWER The output of your program was incorrect. This can happen simply because your solution is not correct, but remember that your output must comply exactly with the specifications of the judges.
  - TOO-LATE Bummer, you submitted after the contest ended! Your submission is stored but will not be processed anymore.

- A link to the documentation of the judging system is <a  href="https://www.domjudge.org/snapshot/manual/team.html" target="_blank">here </a>. As a side note, not all the aspects presented in the link apply to this contest.

## Score and Leaderboard

- The winner of the pool is decided by (in order):
  - The team with most correctly solved problems (CORRECT).
  - The team with the least total time. The total time is the sum of the time elapsed from the beginning of the contest to the submission of the accepted run plus 20 penalty minutes for every rejected run for that problem regardless of the submission time. There is no time consumed for a problem that is not solved.
  - The team that first submitted its last accepted problem is ranked higher. In case a tie still remains, the team that first submitted its second-last accepted problem is ranked higher, and so on. In the event that this does not resolve the tie, the ranks will be determined by chance.

## Special Rules

- A team may be disqualified by the organisation or jury for any activity that jeopardises the contest, such as dislodging extension cords, unauthorised modification, unintended use of contest materials, using a forbidden function or library calls, or distracting behaviour.
- The participants don’t have access to their phones or any other device besides the contest machine that the team is using, during the contest.
- The organisation has the right to stop the contest, extend the contest time, temporarily block submissions for all teams, or change the scores in exceptional conditions.
- In situations where no rule applies, or there is ambiguity about the rules, the organisation decides the outcome.
- If necessary, the organisation can make changes and exceptions to these rules.
