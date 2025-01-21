import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo38Component } from './lib69-demo38.component';

describe('Lib69Demo38Component', () => {
  let component: Lib69Demo38Component;
  let fixture: ComponentFixture<Lib69Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
