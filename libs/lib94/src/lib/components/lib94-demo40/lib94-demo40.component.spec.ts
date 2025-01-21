import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo40Component } from './lib94-demo40.component';

describe('Lib94Demo40Component', () => {
  let component: Lib94Demo40Component;
  let fixture: ComponentFixture<Lib94Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
