import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo16Component } from './lib57-demo16.component';

describe('Lib57Demo16Component', () => {
  let component: Lib57Demo16Component;
  let fixture: ComponentFixture<Lib57Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
