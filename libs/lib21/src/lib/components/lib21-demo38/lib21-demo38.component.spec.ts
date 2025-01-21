import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo38Component } from './lib21-demo38.component';

describe('Lib21Demo38Component', () => {
  let component: Lib21Demo38Component;
  let fixture: ComponentFixture<Lib21Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
