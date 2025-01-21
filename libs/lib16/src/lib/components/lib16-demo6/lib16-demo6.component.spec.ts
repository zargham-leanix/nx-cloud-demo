import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo6Component } from './lib16-demo6.component';

describe('Lib16Demo6Component', () => {
  let component: Lib16Demo6Component;
  let fixture: ComponentFixture<Lib16Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
