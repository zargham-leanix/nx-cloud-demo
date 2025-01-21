import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo32Component } from './lib29-demo32.component';

describe('Lib29Demo32Component', () => {
  let component: Lib29Demo32Component;
  let fixture: ComponentFixture<Lib29Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
