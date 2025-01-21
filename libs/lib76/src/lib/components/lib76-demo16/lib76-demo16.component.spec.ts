import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo16Component } from './lib76-demo16.component';

describe('Lib76Demo16Component', () => {
  let component: Lib76Demo16Component;
  let fixture: ComponentFixture<Lib76Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
