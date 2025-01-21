import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo37Component } from './lib71-demo37.component';

describe('Lib71Demo37Component', () => {
  let component: Lib71Demo37Component;
  let fixture: ComponentFixture<Lib71Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
