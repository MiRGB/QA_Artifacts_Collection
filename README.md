# 📂 QA Test Portfolio

This repository contains a set of sample testing materials that showcase my experience in software testing. It includes artifacts from various stages of the QA process, generated using popular testing tools.

## 📚 Purpose of the repository

The purpose of this repository is to demonstrate my practical experience in:
- documenting and reporting bugs,
- planning and executing manual and automated tests,
- API testing and system performance testing.

## 🧰 Repository contents

### 📄 `Bug_reports/`
Contains sample bug reports generated from various defect management tools:
- `Jira_Generated_Sample_Bug_Tickets_for_Skleptest.pdf` – Jira reports related to the Skleptest application.
- `Sample_Bug_Tickets.pdf` – general sample bug reports.
- `Trello_Generated_Sample_Bug_Tickets_for_MrBuggy7.pdf` – Trello reports for the MrBuggy7 project.

### 📈 `JMeter_performance_tests/`
Contains performance test scenarios in `.jmx` format:
- `Sample_JSONplaceholder_API_performance_tests.jmx` – performance tests for JSONPlaceholder API.
- `Sample_MrBuggy_performance_tests.jmx` – performance tests for the MrBuggy application.

### 🔌 `Postman_API_tests/`
A set of API test files created with Postman:
- `Production environment.postman_environment.json` – production environment configuration.
- `Trelllo.postman_collection.json` – API test collection for Trello.
- `Trelllo.postman_test_run.json` – exported test run results.

### 📝 `TestLink_test_plan_&_test_cases/`
Exported files from TestLink documenting test plans and test cases:
- `TestLink_Sample_Test_Suites_for_AcademyBugs.xml` – test suites for the AcademyBugs project.
- `TestLink_Test_Cases_for_DEIMIC_app.xml` – test cases for the DEIMIC application.
- `TestLink_Sample_Test_Plan_Execution_Report_for_AcademyBugs.pdf` – test plan execution report for AcademyBugs.

## 💡 How to use

### Importing files into testing tools

- **Apache JMeter**  
  1. Launch JMeter.  
  2. In the menu, select **File > Open** and choose a `.jmx` file (e.g., `Sample_JSONplaceholder_API_performance_tests.jmx`).  
  3. You can run the tests by clicking the green **Start** button.

- **Postman**  
  1. Open the Postman application.  
  2. To import a collection or environment, click **Import** (top left).  
  3. Select the appropriate `.json` file (e.g., `Trelllo.postman_collection.json` or `Production environment.postman_environment.json`).  
  4. After import, you can run tests and review saved requests.

- **TestLink**  
  1. Log into your TestLink instance.  
  2. Go to the import section (usually found in project settings).  
  3. Select an XML file with test cases or test plans (e.g., `TestLink_Sample_Test_Suites_for_AcademyBugs.xml`).  
  4. Import the files to view test structures and execute tests in the system.

## 🛠️ Tools used

- **Postman** – REST API testing  
- **Apache JMeter** – performance testing  
- **TestLink** – test case management  
- **Jira** – bug tracking and management  
- **Trello** – task and bug tracking organization