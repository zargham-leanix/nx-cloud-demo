import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo32Component } from './lib27-demo32.component';

describe('Lib27Demo32Component', () => {
  let component: Lib27Demo32Component;
  let fixture: ComponentFixture<Lib27Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
