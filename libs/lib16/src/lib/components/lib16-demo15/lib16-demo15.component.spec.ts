import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo15Component } from './lib16-demo15.component';

describe('Lib16Demo15Component', () => {
  let component: Lib16Demo15Component;
  let fixture: ComponentFixture<Lib16Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
