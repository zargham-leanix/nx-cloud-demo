import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo33Component } from './lib80-demo33.component';

describe('Lib80Demo33Component', () => {
  let component: Lib80Demo33Component;
  let fixture: ComponentFixture<Lib80Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
