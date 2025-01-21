import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo40Component } from './lib79-demo40.component';

describe('Lib79Demo40Component', () => {
  let component: Lib79Demo40Component;
  let fixture: ComponentFixture<Lib79Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
