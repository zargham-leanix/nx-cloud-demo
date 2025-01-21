import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo12Component } from './lib16-demo12.component';

describe('Lib16Demo12Component', () => {
  let component: Lib16Demo12Component;
  let fixture: ComponentFixture<Lib16Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
