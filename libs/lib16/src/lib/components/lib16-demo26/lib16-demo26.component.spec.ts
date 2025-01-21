import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo26Component } from './lib16-demo26.component';

describe('Lib16Demo26Component', () => {
  let component: Lib16Demo26Component;
  let fixture: ComponentFixture<Lib16Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
