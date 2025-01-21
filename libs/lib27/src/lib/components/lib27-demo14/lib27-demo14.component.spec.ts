import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo14Component } from './lib27-demo14.component';

describe('Lib27Demo14Component', () => {
  let component: Lib27Demo14Component;
  let fixture: ComponentFixture<Lib27Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
