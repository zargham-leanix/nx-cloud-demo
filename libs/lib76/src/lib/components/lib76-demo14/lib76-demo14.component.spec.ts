import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo14Component } from './lib76-demo14.component';

describe('Lib76Demo14Component', () => {
  let component: Lib76Demo14Component;
  let fixture: ComponentFixture<Lib76Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
