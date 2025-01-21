import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo38Component } from './lib76-demo38.component';

describe('Lib76Demo38Component', () => {
  let component: Lib76Demo38Component;
  let fixture: ComponentFixture<Lib76Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
