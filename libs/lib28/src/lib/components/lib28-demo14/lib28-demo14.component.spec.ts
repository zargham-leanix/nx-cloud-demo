import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo14Component } from './lib28-demo14.component';

describe('Lib28Demo14Component', () => {
  let component: Lib28Demo14Component;
  let fixture: ComponentFixture<Lib28Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
