import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo14Component } from './lib78-demo14.component';

describe('Lib78Demo14Component', () => {
  let component: Lib78Demo14Component;
  let fixture: ComponentFixture<Lib78Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
