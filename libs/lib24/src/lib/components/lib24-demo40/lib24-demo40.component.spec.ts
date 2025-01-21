import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo40Component } from './lib24-demo40.component';

describe('Lib24Demo40Component', () => {
  let component: Lib24Demo40Component;
  let fixture: ComponentFixture<Lib24Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
