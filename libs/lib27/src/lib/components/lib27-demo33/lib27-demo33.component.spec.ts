import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo33Component } from './lib27-demo33.component';

describe('Lib27Demo33Component', () => {
  let component: Lib27Demo33Component;
  let fixture: ComponentFixture<Lib27Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
