import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo14Component } from './lib29-demo14.component';

describe('Lib29Demo14Component', () => {
  let component: Lib29Demo14Component;
  let fixture: ComponentFixture<Lib29Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
