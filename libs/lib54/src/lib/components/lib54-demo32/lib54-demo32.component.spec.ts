import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo32Component } from './lib54-demo32.component';

describe('Lib54Demo32Component', () => {
  let component: Lib54Demo32Component;
  let fixture: ComponentFixture<Lib54Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
