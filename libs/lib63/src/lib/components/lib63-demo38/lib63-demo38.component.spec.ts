import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo38Component } from './lib63-demo38.component';

describe('Lib63Demo38Component', () => {
  let component: Lib63Demo38Component;
  let fixture: ComponentFixture<Lib63Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
