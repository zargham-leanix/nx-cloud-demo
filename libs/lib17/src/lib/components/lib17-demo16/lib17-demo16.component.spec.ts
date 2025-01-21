import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo16Component } from './lib17-demo16.component';

describe('Lib17Demo16Component', () => {
  let component: Lib17Demo16Component;
  let fixture: ComponentFixture<Lib17Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
