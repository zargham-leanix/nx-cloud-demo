import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo14Component } from './lib30-demo14.component';

describe('Lib30Demo14Component', () => {
  let component: Lib30Demo14Component;
  let fixture: ComponentFixture<Lib30Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
