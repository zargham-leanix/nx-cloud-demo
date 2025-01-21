import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo33Component } from './lib85-demo33.component';

describe('Lib85Demo33Component', () => {
  let component: Lib85Demo33Component;
  let fixture: ComponentFixture<Lib85Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
