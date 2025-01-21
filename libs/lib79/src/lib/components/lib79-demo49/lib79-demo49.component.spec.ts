import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo49Component } from './lib79-demo49.component';

describe('Lib79Demo49Component', () => {
  let component: Lib79Demo49Component;
  let fixture: ComponentFixture<Lib79Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
