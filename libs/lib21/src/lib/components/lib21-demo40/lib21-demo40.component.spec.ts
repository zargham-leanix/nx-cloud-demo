import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo40Component } from './lib21-demo40.component';

describe('Lib21Demo40Component', () => {
  let component: Lib21Demo40Component;
  let fixture: ComponentFixture<Lib21Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
