import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo40Component } from './lib14-demo40.component';

describe('Lib14Demo40Component', () => {
  let component: Lib14Demo40Component;
  let fixture: ComponentFixture<Lib14Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
