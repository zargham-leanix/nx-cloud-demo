import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo38Component } from './lib22-demo38.component';

describe('Lib22Demo38Component', () => {
  let component: Lib22Demo38Component;
  let fixture: ComponentFixture<Lib22Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
