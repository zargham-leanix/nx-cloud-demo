import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo38Component } from './lib65-demo38.component';

describe('Lib65Demo38Component', () => {
  let component: Lib65Demo38Component;
  let fixture: ComponentFixture<Lib65Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
