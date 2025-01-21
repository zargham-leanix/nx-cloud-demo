import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo2Component } from './lib75-demo2.component';

describe('Lib75Demo2Component', () => {
  let component: Lib75Demo2Component;
  let fixture: ComponentFixture<Lib75Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
