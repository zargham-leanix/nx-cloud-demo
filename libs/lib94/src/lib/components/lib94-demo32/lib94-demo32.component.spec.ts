import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo32Component } from './lib94-demo32.component';

describe('Lib94Demo32Component', () => {
  let component: Lib94Demo32Component;
  let fixture: ComponentFixture<Lib94Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
