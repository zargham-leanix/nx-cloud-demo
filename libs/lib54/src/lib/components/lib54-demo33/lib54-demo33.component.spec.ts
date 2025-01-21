import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo33Component } from './lib54-demo33.component';

describe('Lib54Demo33Component', () => {
  let component: Lib54Demo33Component;
  let fixture: ComponentFixture<Lib54Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
