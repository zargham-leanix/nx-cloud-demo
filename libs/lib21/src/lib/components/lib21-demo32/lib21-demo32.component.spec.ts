import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo32Component } from './lib21-demo32.component';

describe('Lib21Demo32Component', () => {
  let component: Lib21Demo32Component;
  let fixture: ComponentFixture<Lib21Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
