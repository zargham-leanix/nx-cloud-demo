import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo40Component } from './lib51-demo40.component';

describe('Lib51Demo40Component', () => {
  let component: Lib51Demo40Component;
  let fixture: ComponentFixture<Lib51Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
