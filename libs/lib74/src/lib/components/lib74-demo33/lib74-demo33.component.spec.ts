import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo33Component } from './lib74-demo33.component';

describe('Lib74Demo33Component', () => {
  let component: Lib74Demo33Component;
  let fixture: ComponentFixture<Lib74Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
