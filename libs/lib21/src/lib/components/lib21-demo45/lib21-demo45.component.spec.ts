import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo45Component } from './lib21-demo45.component';

describe('Lib21Demo45Component', () => {
  let component: Lib21Demo45Component;
  let fixture: ComponentFixture<Lib21Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
