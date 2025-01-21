import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo38Component } from './lib86-demo38.component';

describe('Lib86Demo38Component', () => {
  let component: Lib86Demo38Component;
  let fixture: ComponentFixture<Lib86Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
