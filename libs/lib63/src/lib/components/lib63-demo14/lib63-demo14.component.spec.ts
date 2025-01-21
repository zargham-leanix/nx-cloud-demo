import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo14Component } from './lib63-demo14.component';

describe('Lib63Demo14Component', () => {
  let component: Lib63Demo14Component;
  let fixture: ComponentFixture<Lib63Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
