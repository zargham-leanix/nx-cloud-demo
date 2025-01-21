import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo33Component } from './lib21-demo33.component';

describe('Lib21Demo33Component', () => {
  let component: Lib21Demo33Component;
  let fixture: ComponentFixture<Lib21Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
