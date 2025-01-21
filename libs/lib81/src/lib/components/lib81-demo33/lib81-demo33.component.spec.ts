import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo33Component } from './lib81-demo33.component';

describe('Lib81Demo33Component', () => {
  let component: Lib81Demo33Component;
  let fixture: ComponentFixture<Lib81Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
