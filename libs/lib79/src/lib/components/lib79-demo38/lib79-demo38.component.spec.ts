import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo38Component } from './lib79-demo38.component';

describe('Lib79Demo38Component', () => {
  let component: Lib79Demo38Component;
  let fixture: ComponentFixture<Lib79Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
