import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo38Component } from './lib54-demo38.component';

describe('Lib54Demo38Component', () => {
  let component: Lib54Demo38Component;
  let fixture: ComponentFixture<Lib54Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
