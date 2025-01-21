import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo40Component } from './lib12-demo40.component';

describe('Lib12Demo40Component', () => {
  let component: Lib12Demo40Component;
  let fixture: ComponentFixture<Lib12Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
