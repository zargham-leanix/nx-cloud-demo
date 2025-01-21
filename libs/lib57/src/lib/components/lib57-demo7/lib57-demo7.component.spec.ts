import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo7Component } from './lib57-demo7.component';

describe('Lib57Demo7Component', () => {
  let component: Lib57Demo7Component;
  let fixture: ComponentFixture<Lib57Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
