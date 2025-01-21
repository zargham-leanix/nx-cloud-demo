import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo14Component } from './lib93-demo14.component';

describe('Lib93Demo14Component', () => {
  let component: Lib93Demo14Component;
  let fixture: ComponentFixture<Lib93Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
