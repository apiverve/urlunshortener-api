from setuptools import setup, find_packages

setup(
    name='apiverve_urlunshortener',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='URL Unshortener expands shortened links to reveal their final destination URL and destination domain. Send any short link to inspect the resolved address and redirect count; paid plans add the full redirect chain.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/urlunshortener?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
