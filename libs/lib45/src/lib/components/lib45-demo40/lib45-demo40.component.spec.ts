import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo40Component } from './lib45-demo40.component';

describe('Lib45Demo40Component', () => {
  let component: Lib45Demo40Component;
  let fixture: ComponentFixture<Lib45Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
