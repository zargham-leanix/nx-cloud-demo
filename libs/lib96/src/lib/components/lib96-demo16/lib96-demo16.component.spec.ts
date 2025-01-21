import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo16Component } from './lib96-demo16.component';

describe('Lib96Demo16Component', () => {
  let component: Lib96Demo16Component;
  let fixture: ComponentFixture<Lib96Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
