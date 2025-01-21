import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo33Component } from './lib44-demo33.component';

describe('Lib44Demo33Component', () => {
  let component: Lib44Demo33Component;
  let fixture: ComponentFixture<Lib44Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
