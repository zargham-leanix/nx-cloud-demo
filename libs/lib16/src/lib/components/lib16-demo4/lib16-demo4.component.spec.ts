import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo4Component } from './lib16-demo4.component';

describe('Lib16Demo4Component', () => {
  let component: Lib16Demo4Component;
  let fixture: ComponentFixture<Lib16Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
