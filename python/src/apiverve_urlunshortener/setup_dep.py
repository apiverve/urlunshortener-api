from setuptools import setup, find_packages

setup(
    name='apiverve_urlunshortener',
    version='1.1.14',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='URL Unshortener is a simple tool for unshortening shortened URLs. It returns the original URL before it was shortened.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/urlunshortener?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
