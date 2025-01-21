import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo7Component } from './lib12-demo7.component';

describe('Lib12Demo7Component', () => {
  let component: Lib12Demo7Component;
  let fixture: ComponentFixture<Lib12Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
