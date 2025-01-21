import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo32Component } from './lib64-demo32.component';

describe('Lib64Demo32Component', () => {
  let component: Lib64Demo32Component;
  let fixture: ComponentFixture<Lib64Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
