import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo17Component } from './lib94-demo17.component';

describe('Lib94Demo17Component', () => {
  let component: Lib94Demo17Component;
  let fixture: ComponentFixture<Lib94Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
