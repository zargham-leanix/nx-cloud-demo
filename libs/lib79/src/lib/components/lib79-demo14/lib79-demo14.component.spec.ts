import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo14Component } from './lib79-demo14.component';

describe('Lib79Demo14Component', () => {
  let component: Lib79Demo14Component;
  let fixture: ComponentFixture<Lib79Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
