import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo32Component } from './lib63-demo32.component';

describe('Lib63Demo32Component', () => {
  let component: Lib63Demo32Component;
  let fixture: ComponentFixture<Lib63Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
