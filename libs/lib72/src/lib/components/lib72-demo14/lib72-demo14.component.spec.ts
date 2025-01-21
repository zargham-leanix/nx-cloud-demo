import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo14Component } from './lib72-demo14.component';

describe('Lib72Demo14Component', () => {
  let component: Lib72Demo14Component;
  let fixture: ComponentFixture<Lib72Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
