import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo46Component } from './lib18-demo46.component';

describe('Lib18Demo46Component', () => {
  let component: Lib18Demo46Component;
  let fixture: ComponentFixture<Lib18Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
