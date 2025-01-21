import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo33Component } from './lib25-demo33.component';

describe('Lib25Demo33Component', () => {
  let component: Lib25Demo33Component;
  let fixture: ComponentFixture<Lib25Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
