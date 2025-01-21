import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo40Component } from './lib5-demo40.component';

describe('Lib5Demo40Component', () => {
  let component: Lib5Demo40Component;
  let fixture: ComponentFixture<Lib5Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
